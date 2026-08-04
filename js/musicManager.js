// ============================================================
// MUSICMANAGER — trilha sonora ambiente opcional, separada do
// SoundManager (efeitos sonoros) e do resto do app. Começa desligada;
// só toca se o usuário ligar em Configurações, e a escolha fica salva
// via SettingsService (nunca localStorage diretamente). app.js só
// conversa com MusicManager.setEnabled()/isEnabled().
// ============================================================
const MusicManager = (function(){
  const TRACK = 'assets/sounds/ambient.wav';
  const VOLUME = 0.16;

  let enabled = SettingsService.isMusicEnabled();
  const audio = new Audio(TRACK);
  audio.loop = true;
  audio.preload = 'auto';
  audio.volume = VOLUME;

  // Navegadores bloqueiam autoplay sem gesto do usuário — se a trilha
  // estava ligada numa visita anterior, tenta tocar assim que a página
  // carrega e, se for bloqueada, tenta de novo no primeiro toque/clique.
  function tryPlay(){
    if(!enabled) return;
    const p = audio.play();
    if(p && typeof p.catch === 'function'){
      p.catch(()=>{
        const resume = ()=>{ if(enabled) audio.play().catch(()=>{}); };
        document.addEventListener('pointerdown', resume, {once:true});
        document.addEventListener('keydown', resume, {once:true});
      });
    }
  }

  function setEnabled(v){
    enabled = v;
    SettingsService.setMusicEnabled(v);
    if(v) tryPlay(); else audio.pause();
  }
  function isEnabled(){ return enabled; }

  tryPlay();

  return { setEnabled, isEnabled };
})();
