// ============================================================
// AUTHSERVICE — conta de usuário (Firebase Authentication) e o perfil
// que fica junto (nome, telefone, foto, data de criação), guardado em
// users/{uid}/profile/main no Firestore. Nenhuma tela fala com
// `firebase.auth()`/`firebase.firestore()` diretamente — só com as
// funções abaixo.
//
// A senha em si nunca passa perto deste código além de ser enviada
// direto pro SDK do Firebase (que já cuida do hash e da validação do
// lado do servidor do Google) — este arquivo nunca grava senha em
// lugar nenhum, nem local nem na nuvem.
// ============================================================
const AuthService = (function(){
  let _currentUser = null;
  const _listeners = [];

  function _notify(){
    _listeners.forEach(cb=>{ try { cb(_currentUser); } catch(e){} });
  }

  if(FIREBASE_CONFIGURED){
    firebase.auth().onAuthStateChanged(user=>{
      _currentUser = user;
      _notify();
    });
  }

  // Registra um ouvinte de mudança de sessão (login/logout/e-mail
  // verificado). Chama já de cara com o estado atual, mesmo que ainda
  // seja null (antes do primeiro onAuthStateChanged dessa aba).
  function onAuthChange(callback){
    _listeners.push(callback);
    callback(_currentUser);
  }

  function getCurrentUser(){ return _currentUser; }
  function isEmailVerified(){ return !!(_currentUser && _currentUser.emailVerified); }

  function _profileDoc(uid){
    return firebase.firestore().collection('users').doc(uid).collection('profile').doc('main');
  }
  // Documento "índice" na raiz de users/{uid} (fora das subcoleções
  // data/ e profile/) — existe só pra tornar a coleção users listável
  // (o Firestore não lista documentos que só têm subcoleções e nenhum
  // campo próprio). Usado exclusivamente pelo Modo Admin.
  function _userIndexDoc(uid){
    return firebase.firestore().collection('users').doc(uid);
  }
  // Idempotente — chamada em todo login (não só no cadastro), pra
  // contas criadas antes desse índice existir também aparecerem no
  // Modo Admin, sem precisar de migração manual.
  function ensureUserIndexed(){
    if(!_currentUser) return Promise.resolve();
    return _userIndexDoc(_currentUser.uid).set({
      email: _currentUser.email,
      name: _currentUser.displayName || ''
    }, { merge:true });
  }

  // A foto (se houver) fica só no documento de perfil do Firestore —
  // nunca no campo photoURL do Firebase Auth, que não foi pensado pra
  // guardar imagens em base64.
  function signUp({ name, email, password, phone, photoDataUrl }){
    return firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(cred=>{
        const user = cred.user;
        return user.updateProfile({ displayName: name })
          .then(()=> _profileDoc(user.uid).set({
            name,
            phone: phone || '',
            photoDataUrl: photoDataUrl || '',
            createdAt: DateUtils.todayStr()
          }))
          .then(()=> _userIndexDoc(user.uid).set({ email, name, createdAt: DateUtils.todayStr() }))
          .then(()=> user.sendEmailVerification());
      });
  }

  function signIn({ email, password, rememberMe }){
    const persistence = rememberMe
      ? firebase.auth.Auth.Persistence.LOCAL
      : firebase.auth.Auth.Persistence.SESSION;
    return firebase.auth().setPersistence(persistence)
      .then(()=> firebase.auth().signInWithEmailAndPassword(email, password));
  }

  function signOut(){
    return firebase.auth().signOut();
  }

  function resendVerificationEmail(){
    if(!_currentUser) return Promise.reject(new Error('Sem usuário logado.'));
    return _currentUser.sendEmailVerification();
  }

  // Recarrega o usuário atual do Firebase — usado depois que o
  // usuário clica em "já confirmei", pra saber se emailVerified virou
  // true de verdade.
  function reloadUser(){
    if(!_currentUser) return Promise.resolve();
    return _currentUser.reload().then(()=>{
      _currentUser = firebase.auth().currentUser;
      _notify();
    });
  }

  function sendPasswordReset(email){
    return firebase.auth().sendPasswordResetEmail(email);
  }

  function getProfile(){
    if(!_currentUser) return Promise.resolve(null);
    return _profileDoc(_currentUser.uid).get().then(doc=> doc.exists ? doc.data() : null);
  }

  // `fields` pode ter name/phone/photoDataUrl — só grava o que vier.
  function updateProfileFields(fields){
    if(!_currentUser) return Promise.reject(new Error('Sem usuário logado.'));
    const authPromise = (fields.name !== undefined)
      ? _currentUser.updateProfile({ displayName: fields.name })
      : Promise.resolve();
    return authPromise
      .then(()=> _profileDoc(_currentUser.uid).set(fields, { merge:true }))
      .then(()=>{
        if(fields.name !== undefined){
          return _userIndexDoc(_currentUser.uid).set({ name: fields.name }, { merge:true });
        }
      });
  }

  // Trocar e-mail/senha ou excluir a conta exige login "recente" no
  // Firebase — reautentica com a senha atual antes de qualquer uma
  // dessas três operações.
  function _reauthenticate(currentPassword){
    const cred = firebase.auth.EmailAuthProvider.credential(_currentUser.email, currentPassword);
    return _currentUser.reauthenticateWithCredential(cred);
  }

  // Envia um e-mail de confirmação pro endereço NOVO; o e-mail só troca
  // de fato depois que esse link é clicado.
  function changeEmail(newEmail, currentPassword){
    return _reauthenticate(currentPassword)
      .then(()=> _currentUser.verifyBeforeUpdateEmail(newEmail));
  }

  function changePassword(newPassword, currentPassword){
    return _reauthenticate(currentPassword)
      .then(()=> _currentUser.updatePassword(newPassword));
  }

  function deleteAccount(currentPassword){
    const uid = _currentUser.uid;
    return _reauthenticate(currentPassword)
      .then(()=> _profileDoc(uid).delete().catch(()=>{}))
      .then(()=> _userIndexDoc(uid).delete().catch(()=>{}))
      .then(()=> _currentUser.delete());
  }

  // Só pro Modo Admin: verifica se o usuário logado tem um documento em
  // /admins/{uid}. As regras do Firestore só deixam cada um ler o
  // PRÓPRIO documento de admin, então isso nunca revela quem mais é
  // admin — só responde sobre quem está pedindo.
  function isCurrentUserAdmin(){
    if(!_currentUser) return Promise.resolve(false);
    return firebase.firestore().collection('admins').doc(_currentUser.uid).get()
      .then(doc=> doc.exists)
      .catch(()=> false);
  }

  // Lista básica de todos os usuários cadastrados (nome/e-mail/data de
  // criação) — só funciona pra quem é admin (as regras barram qualquer
  // outra pessoa nesse ponto).
  function listAllUsers(){
    return firebase.firestore().collection('users').get().then(snapshot=>{
      const list = [];
      snapshot.forEach(doc=> list.push(Object.assign({ uid: doc.id }, doc.data())));
      return list;
    });
  }

  // Progresso completo de UM usuário (por uid) — só admin consegue ler
  // de outra pessoa; usado pelo Modo Admin ao abrir o detalhe de alguém.
  function getUserDataDoc(uid, key){
    return firebase.firestore().collection('users').doc(uid).collection('data').doc(key).get()
      .then(doc=> doc.exists ? doc.data().value : null);
  }
  function getUserProfile(uid){
    return firebase.firestore().collection('users').doc(uid).collection('profile').doc('main').get()
      .then(doc=> doc.exists ? doc.data() : null);
  }

  return {
    onAuthChange, getCurrentUser, isEmailVerified, reloadUser,
    signUp, signIn, signOut,
    resendVerificationEmail, sendPasswordReset,
    getProfile, updateProfileFields, ensureUserIndexed,
    changeEmail, changePassword, deleteAccount,
    isCurrentUserAdmin, listAllUsers, getUserDataDoc, getUserProfile
  };
})();
