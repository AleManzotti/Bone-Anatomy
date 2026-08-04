// ============================================================
// FIREBASECONFIG — chaves do projeto Firebase (Auth + Firestore) do
// Anatomia by ALE. PREENCHER com os valores reais antes de usar login
// de verdade — sem isso, AuthService não consegue falar com o Firebase.
//
// Onde pegar: console.firebase.google.com → seu projeto → ⚙️ Project
// settings → General → "Your apps" → app Web → bloco firebaseConfig.
//
// Nenhum outro arquivo do projeto precisa mudar quando essas chaves
// forem preenchidas — só este.
// ============================================================
const FIREBASE_CONFIG = {
  apiKey: "COLE_AQUI_SUA_API_KEY",
  authDomain: "COLE_AQUI_SEU_PROJETO.firebaseapp.com",
  projectId: "COLE_AQUI_SEU_PROJECT_ID",
  storageBucket: "COLE_AQUI_SEU_PROJETO.appspot.com",
  messagingSenderId: "COLE_AQUI_SEU_SENDER_ID",
  appId: "COLE_AQUI_SEU_APP_ID"
};

// true assim que as chaves acima forem preenchidas de verdade — usado
// pelo app pra mostrar um aviso claro na tela de login em vez de
// simplesmente falhar em silêncio enquanto o Firebase não estiver
// configurado.
const FIREBASE_CONFIGURED = FIREBASE_CONFIG.apiKey !== "COLE_AQUI_SUA_API_KEY";

if(FIREBASE_CONFIGURED){
  firebase.initializeApp(FIREBASE_CONFIG);
}
