// ============================================================
// EXAMSERVICE — histórico do Modo Prova: registra tentativas (já
// calculando a nota), lista o histórico por prancha e monta o ranking
// pessoal (melhores resultados). Não sabe nada de DOM/tela — só dados.
// ============================================================
const ExamService = (function(){
  const EXAM_HISTORY_KEY = 'anatomiaByAleExamHistoryV1';

  let _cache = null;
  function _load(){
    if(!_cache) _cache = StorageService.getJSON(EXAM_HISTORY_KEY, {});
    return _cache;
  }
  function _save(){
    StorageService.setJSON(EXAM_HISTORY_KEY, _cache);
  }

  function getHistory(gameKey){
    return _load()[gameKey] || [];
  }

  // Recebe os números brutos de uma prova recém-concluída, calcula a
  // nota (0 a 10) e a data, registra no histórico e devolve a tentativa
  // completa.
  function recordAttempt(gameKey, { hits, misses, total, timeMs }){
    const attempt = {
      date: DateUtils.todayStr(),
      score: total ? Math.round((hits / total) * 100) / 10 : 0,
      hits, misses, total, timeMs
    };
    const data = _load();
    if(!data[gameKey]) data[gameKey] = [];
    data[gameKey].push(attempt);
    _save();
    return attempt;
  }

  // Ranking pessoal: nota desc, depois tempo asc (mais rápido primeiro
  // em caso de empate). `limit` corta pro topo N (padrão 10).
  function getBestResults(gameKey, limit){
    return getHistory(gameKey)
      .slice()
      .sort((a, b) => b.score - a.score || a.timeMs - b.timeMs)
      .slice(0, limit || 10);
  }

  function hasPerfectScore(gameKey){
    return getHistory(gameKey).some(attempt => attempt.score >= 10);
  }

  function clearHistory(){
    _cache = {};
    StorageService.remove(EXAM_HISTORY_KEY);
  }

  return { getHistory, recordAttempt, getBestResults, hasPerfectScore, clearHistory };
})();
