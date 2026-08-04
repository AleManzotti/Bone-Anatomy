// ============================================================
// FLASHCARDSERVICE — favoritos, últimos vistos e histórico de estudo
// do modo Flashcards. Hoje o modo Flashcards (js/app.js) ainda não
// grava nada disso (é navegação livre, sem persistência) — este
// serviço já fica pronto, funcionando de ponta a ponta, pra quando
// essas telas passarem a usar favoritos/histórico, sem precisar mexer
// na camada de dados depois.
// ============================================================
const FlashcardService = (function(){
  const FAVORITES_KEY = 'anatomiaByAleFlashFavoritesV1';
  const HISTORY_KEY = 'anatomiaByAleFlashHistoryV1';
  const MAX_HISTORY = 50;

  function _entryId(gameKey, boneKey){ return gameKey + ':' + boneKey; }

  // ---- Favoritos ----
  function getFavorites(){
    return StorageService.getJSON(FAVORITES_KEY, []);
  }
  function isFavorite(gameKey, boneKey){
    return getFavorites().includes(_entryId(gameKey, boneKey));
  }
  function toggleFavorite(gameKey, boneKey){
    const id = _entryId(gameKey, boneKey);
    const list = getFavorites();
    const idx = list.indexOf(id);
    if(idx === -1) list.push(id); else list.splice(idx, 1);
    StorageService.setJSON(FAVORITES_KEY, list);
    return idx === -1; // true = acabou de virar favorito
  }

  // ---- Últimos vistos / histórico de estudo ----
  // Cada entrada: { gameKey, boneKey, date }. A mais recente fica no
  // topo (índice 0); o histórico é limitado a MAX_HISTORY entradas.
  function getHistory(){
    return StorageService.getJSON(HISTORY_KEY, []);
  }
  function recordView(gameKey, boneKey){
    const list = getHistory();
    list.unshift({ gameKey, boneKey, date: DateUtils.todayStr() });
    if(list.length > MAX_HISTORY) list.length = MAX_HISTORY;
    StorageService.setJSON(HISTORY_KEY, list);
  }
  function getRecentlyViewed(limit){
    return getHistory().slice(0, limit || 10);
  }
  // Ossos distintos já estudados (sem repetição), pra medir cobertura.
  function getStudiedKeys(gameKey){
    const seen = new Set();
    getHistory().forEach(entry => {
      if(entry.gameKey === gameKey) seen.add(entry.boneKey);
    });
    return Array.from(seen);
  }

  function clearAll(){
    StorageService.remove(FAVORITES_KEY);
    StorageService.remove(HISTORY_KEY);
  }

  return {
    getFavorites, isFavorite, toggleFavorite,
    getHistory, recordView, getRecentlyViewed, getStudiedKeys,
    clearAll
  };
})();
