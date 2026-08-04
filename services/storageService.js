// ============================================================
// STORAGESERVICE — único arquivo do projeto autorizado a tocar em
// localStorage (e, agora, no Firestore) diretamente. Todo o resto
// (telas, outros serviços) conversa só com as funções abaixo
// (get/set/update/remove/clear) — nenhum outro arquivo sabe se o dado
// está indo pro navegador, pra nuvem, ou pros dois.
//
// Como funciona com contas de usuário:
// - Enquanto ninguém está logado, tudo fica só no localStorage local
//   (igual sempre foi), sem nenhuma chamada de rede.
// - Depois de AuthService.onAuthChange chamar setUserScope(uid), toda
//   chave passa a ser guardada com um prefixo por usuário (pra nunca
//   misturar progresso de duas contas no mesmo navegador) e espelhada
//   em segundo plano em users/{uid}/data/{chave} no Firestore.
// - hydrateFromCloud(uid) baixa o que já existe na nuvem pro
//   localStorage local — chamado uma vez, logo após o login, antes do
//   resto do app carregar qualquer dado. Depois disso, todo o resto do
//   sistema continua lendo/gravando exatamente como sempre (síncrono,
//   via localStorage) — só este arquivo sabe que existe uma nuvem.
// ============================================================
const StorageService = (function(){
  function isAvailable(){
    try {
      const testKey = '__anatomiaByAleStorageTest__';
      localStorage.setItem(testKey, '1');
      localStorage.removeItem(testKey);
      return true;
    } catch(e){
      return false;
    }
  }
  const available = isAvailable();

  let _uid = null;

  function _scopedKey(key){
    return _uid ? ('u_' + _uid + '_' + key) : key;
  }

  function _cloudDoc(key){
    return firebase.firestore().collection('users').doc(_uid).collection('data').doc(key);
  }
  // Espelha a gravação na nuvem sem travar a interface — se falhar (sem
  // internet, por exemplo), o dado continua salvo localmente e uma
  // futura gravação tenta de novo; nada trava a experiência do usuário.
  function _cloudSet(key, value){
    if(!_uid || !FIREBASE_CONFIGURED) return;
    _cloudDoc(key).set({ value }).catch(()=>{});
  }
  function _cloudRemove(key){
    if(!_uid || !FIREBASE_CONFIGURED) return;
    _cloudDoc(key).delete().catch(()=>{});
  }

  // Lê um valor em texto puro. `fallback` volta se a chave não existir
  // ou se o armazenamento estiver indisponível (ex.: modo privado).
  function get(key, fallback){
    if(!available) return fallback;
    try {
      const raw = localStorage.getItem(_scopedKey(key));
      return raw === null ? fallback : raw;
    } catch(e){
      return fallback;
    }
  }
  // Mesma coisa, mas já decodifica JSON.
  function getJSON(key, fallback){
    const raw = get(key, null);
    if(raw === null) return fallback;
    try { return JSON.parse(raw); }
    catch(e){ return fallback; }
  }

  function set(key, value){
    if(!available) return false;
    try {
      localStorage.setItem(_scopedKey(key), value);
      _cloudSet(key, value);
      return true;
    } catch(e){
      return false;
    }
  }
  function setJSON(key, value){
    return set(key, JSON.stringify(value));
  }

  // Lê o valor JSON atual, aplica `updater` e já regrava — evita o
  // padrão repetido de "carrega, muda, salva" espalhado pelos serviços.
  function update(key, updater, fallback){
    const current = getJSON(key, fallback);
    const next = updater(current);
    setJSON(key, next);
    return next;
  }

  function remove(key){
    if(!available) return;
    try {
      localStorage.removeItem(_scopedKey(key));
      _cloudRemove(key);
    } catch(e){}
  }
  // Remove só as chaves informadas — nunca um localStorage.clear() puro,
  // que apagaria dados de outras origens/abas sem relação com o app.
  function clear(keys){
    keys.forEach(remove);
  }

  function has(key){
    if(!available) return false;
    try { return localStorage.getItem(_scopedKey(key)) !== null; }
    catch(e){ return false; }
  }

  // Chamado pelo AuthService ao logar/deslogar — a partir daqui, toda
  // leitura/escrita passa a ser isolada por usuário (e espelhada na
  // nuvem, se o Firebase estiver configurado).
  function setUserScope(uid){
    _uid = uid;
  }
  function clearUserScope(){
    _uid = null;
  }
  function getUserScope(){
    return _uid;
  }

  // Baixa tudo que existe em users/{uid}/data no Firestore e grava no
  // localStorage local (já com o prefixo por usuário) — chamado uma
  // única vez, logo depois do login, antes do resto do app carregar
  // qualquer progresso. Devolve uma Promise; quem chama espera ela
  // terminar antes de mostrar a tela inicial.
  function hydrateFromCloud(uid){
    if(!FIREBASE_CONFIGURED) return Promise.resolve();
    return firebase.firestore().collection('users').doc(uid).collection('data').get()
      .then(snapshot=>{
        snapshot.forEach(doc=>{
          const data = doc.data();
          if(data && typeof data.value === 'string' && available){
            try { localStorage.setItem('u_' + uid + '_' + doc.id, data.value); }
            catch(e){}
          }
        });
      })
      .catch(()=>{
        // Sem internet ou primeira vez desse usuário (nada salvo ainda
        // na nuvem) — segue com o que já estiver no navegador local.
      });
  }

  return {
    get, getJSON, set, setJSON, update, remove, clear, has,
    isAvailable: () => available,
    setUserScope, clearUserScope, getUserScope, hydrateFromCloud
  };
})();
