// ============================================================
// PROGRESSSERVICE — XP, nível, progresso por osso, tempo estudado por
// prancha, resumo de progresso por prancha, sequência de acertos e de
// dias estudados, e última prancha visitada. Fala só com StorageService
// (nunca localStorage diretamente); nenhuma tela guarda esses dados por
// conta própria — todas passam por aqui.
// ============================================================
const ProgressService = (function(){
  const BONE_PROGRESS_KEY = 'anatomiaByAleProgressV1';
  const BOARD_TIME_KEY = 'anatomiaByAleBoardTimeV1';
  const BOARD_PROGRESS_KEY = 'anatomiaByAleBoardProgressV1';
  const CORRECT_STREAK_KEY = 'anatomiaByAleCorrectStreakV1';
  const DAY_STREAK_KEY = 'anatomiaByAleStreakV1';
  const LAST_BOARD_KEY = 'anatomiaByAleLastBoardV1';
  const XP_KEY = 'anatomiaByAleXPV1';

  // ---- Progresso por osso (respostas, tentativas, estado) ----
  let _boneCache = null;
  function _loadBones(){
    if(!_boneCache) _boneCache = StorageService.getJSON(BONE_PROGRESS_KEY, {});
    return _boneCache;
  }
  function _boneEntryKey(gameKey, boneKey){ return gameKey + ':' + boneKey; }
  function getBoneProgress(gameKey, boneKey){
    return _loadBones()[_boneEntryKey(gameKey, boneKey)] || null;
  }
  function setBoneProgress(gameKey, boneKey, entry){
    const data = _loadBones();
    data[_boneEntryKey(gameKey, boneKey)] = entry;
    StorageService.setJSON(BONE_PROGRESS_KEY, data);
  }
  function clearBoneProgress(gameKey, boneKey){
    const data = _loadBones();
    delete data[_boneEntryKey(gameKey, boneKey)];
    StorageService.setJSON(BONE_PROGRESS_KEY, data);
  }
  function clearAllBoneProgress(){
    _boneCache = {};
    StorageService.remove(BONE_PROGRESS_KEY);
  }

  // ---- Tempo estudado por prancha (ms acumulados) ----
  let _timeCache = null;
  function _loadTime(){
    if(!_timeCache) _timeCache = StorageService.getJSON(BOARD_TIME_KEY, {});
    return _timeCache;
  }
  function getBoardTimeMs(gameKey){
    return _loadTime()[gameKey] || 0;
  }
  function addBoardTimeMs(gameKey, ms){
    if(ms <= 0) return;
    const data = _loadTime();
    data[gameKey] = (data[gameKey] || 0) + ms;
    StorageService.setJSON(BOARD_TIME_KEY, data);
  }
  function clearBoardTime(){
    _timeCache = {};
    StorageService.remove(BOARD_TIME_KEY);
  }

  // ---- Resumo de progresso por prancha (cache calculado pela tela,
  // só persistido aqui) ----
  let _boardProgressCache = null;
  function _loadBoardProgress(){
    if(!_boardProgressCache) _boardProgressCache = StorageService.getJSON(BOARD_PROGRESS_KEY, {});
    return _boardProgressCache;
  }
  function getAllBoardProgressSnapshots(){
    return _loadBoardProgress();
  }
  function saveBoardProgressSnapshot(gameKey, snapshot){
    const data = _loadBoardProgress();
    data[gameKey] = snapshot;
    StorageService.setJSON(BOARD_PROGRESS_KEY, data);
  }
  function clearBoardProgressSnapshots(){
    _boardProgressCache = {};
    StorageService.remove(BOARD_PROGRESS_KEY);
  }

  // ---- Sequência de acertos (recorde histórico, todas as pranchas) ----
  function _loadCorrectStreak(){
    return StorageService.getJSON(CORRECT_STREAK_KEY, { current: 0, best: 0 });
  }
  function _saveCorrectStreak(data){
    StorageService.setJSON(CORRECT_STREAK_KEY, data);
  }
  function registerCorrectAnswer(){
    const data = _loadCorrectStreak();
    data.current += 1;
    if(data.current > data.best) data.best = data.current;
    _saveCorrectStreak(data);
  }
  function registerWrongAnswer(){
    const data = _loadCorrectStreak();
    data.current = 0;
    _saveCorrectStreak(data);
  }
  function getBestCorrectStreak(){
    return _loadCorrectStreak().best;
  }
  function clearCorrectStreak(){
    StorageService.remove(CORRECT_STREAK_KEY);
  }

  // ---- Sequência de dias estudados (calendário local) ----
  function _loadDayStreak(){
    return StorageService.getJSON(DAY_STREAK_KEY, { lastDate: null, streak: 0 });
  }
  function _saveDayStreak(data){
    StorageService.setJSON(DAY_STREAK_KEY, data);
  }
  // Chamada uma vez por carregamento da página: se já contou hoje, não
  // mexe; se o último dia registrado foi ontem, soma 1; qualquer outro
  // intervalo (ou primeira vez) reinicia a sequência em 1.
  function updateDayStreak(){
    const data = _loadDayStreak();
    const today = DateUtils.todayStr();
    if(data.lastDate !== today){
      if(data.lastDate){
        const diffDays = DateUtils.daysBetween(data.lastDate, today);
        data.streak = (diffDays === 1) ? data.streak + 1 : 1;
      } else {
        data.streak = 1;
      }
      data.lastDate = today;
      _saveDayStreak(data);
    }
    return data.streak;
  }
  function clearDayStreak(){
    StorageService.remove(DAY_STREAK_KEY);
  }

  // ---- Última prancha visitada ("Continuar estudos") ----
  function saveLastBoard(gameKey){
    StorageService.set(LAST_BOARD_KEY, gameKey);
  }
  function getLastBoard(){
    return StorageService.get(LAST_BOARD_KEY, 'main') || 'main';
  }
  // Igual a getLastBoard(), mas sem valor padrão — usada só pra exibir
  // "—" quando o usuário nunca abriu prancha nenhuma.
  function getLastBoardRaw(){
    return StorageService.get(LAST_BOARD_KEY, null);
  }
  function clearLastBoard(){
    StorageService.remove(LAST_BOARD_KEY);
  }

  // ---- XP e nível — nível nunca é guardado separado, é sempre
  // derivado do XP total via xpForLevel(), então nunca fica
  // dessincronizado. ----
  let _xp = null;
  function _loadXP(){
    if(_xp === null){
      const raw = StorageService.get(XP_KEY, '0');
      _xp = parseInt(raw, 10) || 0;
    }
    return _xp;
  }
  function getXP(){
    return _loadXP();
  }
  function addXP(amount){
    _xp = _loadXP() + amount;
    StorageService.set(XP_KEY, String(_xp));
    return _xp;
  }
  function clearXP(){
    _xp = 0;
    StorageService.remove(XP_KEY);
  }
  // Nível 1 = 0 XP, nível 2 = 300, nível 3 = 700 (cada nível seguinte
  // pede 100 XP a mais que o salto anterior).
  function xpForLevel(level){
    return (level - 1) * (50 * level + 200);
  }
  function getLevelForXP(xp){
    let level = 1;
    while(xpForLevel(level + 1) <= xp) level++;
    return level;
  }
  function getXPProgress(){
    const xp = _loadXP();
    const level = getLevelForXP(xp);
    const currentThreshold = xpForLevel(level);
    const nextThreshold = xpForLevel(level + 1);
    const span = nextThreshold - currentThreshold;
    return {
      xp,
      level,
      nextThreshold,
      percent: span > 0 ? Math.round(((xp - currentThreshold) / span) * 100) : 100
    };
  }

  return {
    getBoneProgress, setBoneProgress, clearBoneProgress, clearAllBoneProgress,
    getBoardTimeMs, addBoardTimeMs, clearBoardTime,
    getAllBoardProgressSnapshots, saveBoardProgressSnapshot, clearBoardProgressSnapshots,
    registerCorrectAnswer, registerWrongAnswer, getBestCorrectStreak, clearCorrectStreak,
    updateDayStreak, clearDayStreak,
    saveLastBoard, getLastBoard, getLastBoardRaw, clearLastBoard,
    getXP, addXP, clearXP, xpForLevel, getLevelForXP, getXPProgress
  };
})();
