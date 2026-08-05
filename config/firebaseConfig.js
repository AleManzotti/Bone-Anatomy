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
  apiKey: "AIzaSyCO_f20ttH5WbBLZBTan4FUlgS8V0sNwRI",
  authDomain: "anatomia-by-ale.firebaseapp.com",
  projectId: "anatomia-by-ale",
  storageBucket: "anatomia-by-ale.firebasestorage.app",
  messagingSenderId: "596143679323",
  appId: "1:596143679323:web:e2788d7842a197a62f5c7e"
};

// true assim que as chaves acima forem preenchidas de verdade — usado
// pelo app pra mostrar um aviso claro na tela de login em vez de
// simplesmente falhar em silêncio enquanto o Firebase não estiver
// configurado.
const FIREBASE_CONFIGURED = FIREBASE_CONFIG.apiKey !== "COLE_AQUI_SUA_API_KEY";

if(FIREBASE_CONFIGURED){
  firebase.initializeApp(FIREBASE_CONFIG);
}
