// ============================================================
// ACHIEVEMENTSERVICE — motor genérico de desbloqueio de conquistas:
// guarda quais IDs já foram desbloqueados (com data), reavalia uma
// lista de definições contra o estado atual e informa quais acabaram
// de ser desbloqueadas agora. Não conhece as regras de cada conquista
// (isso é conteúdo do jogo, definido em js/app.js) — só sabe rastrear
// "isso já foi desbloqueado?" e persistir a resposta.
// ============================================================
const AchievementService = (function(){
  const ACHIEVEMENTS_KEY = 'anatomiaByAleAchievementsV1';

  let _unlocked = [];

  function _load(){
    return StorageService.getJSON(ACHIEVEMENTS_KEY, []);
  }
  function _save(){
    StorageService.setJSON(ACHIEVEMENTS_KEY, _unlocked);
  }

  // Chamada uma vez, com a lista de definições válidas do app (cada uma
  // com pelo menos {id}) — migra o formato antigo (array de ids em
  // texto puro) pra {id, date}, e descarta ids que não existem mais na
  // lista atual (ex.: troca completa do catálogo de conquistas).
  function init(definitions){
    const validIds = new Set((definitions || []).map(d => d.id));
    const raw = _load();
    _unlocked = raw
      .map(entry => typeof entry === 'string' ? { id: entry, date: null } : entry)
      .filter(entry => validIds.has(entry.id));
    _save();
  }

  function isUnlocked(id){
    return _unlocked.some(e => e.id === id);
  }
  function unlockedDate(id){
    const entry = _unlocked.find(e => e.id === id);
    return entry ? entry.date : null;
  }
  function unlockedCount(){
    return _unlocked.length;
  }

  // Reavalia as definições ainda não desbloqueadas (cada uma precisa de
  // {id, check(): boolean}) contra o estado atual do jogo, desbloqueia
  // e persiste as que baterem agora, e devolve só as recém-desbloqueadas
  // — quem chamou decide o que fazer com elas (som, popup, XP...).
  function evaluate(definitions){
    const unlockedNow = [];
    definitions.forEach(def => {
      if(isUnlocked(def.id)) return;
      let met = false;
      try { met = def.check(); } catch(e){ met = false; }
      if(met){
        _unlocked.push({ id: def.id, date: DateUtils.todayStr() });
        unlockedNow.push(def);
      }
    });
    if(unlockedNow.length) _save();
    return unlockedNow;
  }

  function resetAll(){
    _unlocked = [];
    StorageService.remove(ACHIEVEMENTS_KEY);
  }

  return { init, isUnlocked, unlockedDate, unlockedCount, evaluate, resetAll };
})();
