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
    return authPromise.then(()=> _profileDoc(_currentUser.uid).set(fields, { merge:true }));
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
      .then(()=> _currentUser.delete());
  }

  return {
    onAuthChange, getCurrentUser, isEmailVerified, reloadUser,
    signUp, signIn, signOut,
    resendVerificationEmail, sendPasswordReset,
    getProfile, updateProfileFields,
    changeEmail, changePassword, deleteAccount
  };
})();
