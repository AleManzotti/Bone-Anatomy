// ============================================================
// SOUNDMANAGER — sistema de efeitos sonoros, separado do resto do app
// (arquivo próprio, sem depender de app.js). Preferências (ligado/
// desligado, volume) passam por SettingsService — este arquivo nunca
// toca em localStorage diretamente. app.js só conversa com ele através
// de SoundManager.play(nome) / setEnabled() / isEnabled() — nunca mexe
// em <audio> diretamente.
//
// Pra adicionar um som novo: colocar o arquivo em assets/sounds/ e
// acrescentar uma linha no objeto SOUND_FILES abaixo. Nada mais no
// app precisa mudar.
// ============================================================
const SoundManager = (function(){
  const DEFAULT_VOLUME = 0.3;

  const SOUND_FILES = {
    correct:     'assets/sounds/correct.wav',
    wrong:       'assets/sounds/wrong.wav',
    achievement: 'assets/sounds/achievement.wav',
    progress:    'assets/sounds/progress.wav',
    complete:    'assets/sounds/complete.wav',
    click:       'assets/sounds/click.mp3',
    menu:        'assets/sounds/menu.wav',
    restart:     'assets/sounds/restart.wav'
  };

  const cache = {};
  let currentAudio = null;
  let enabled = true;
  let volume = DEFAULT_VOLUME;

  function loadPrefs(){
    const data = SettingsService.getSoundPrefs();
    if(typeof data.enabled === 'boolean') enabled = data.enabled;
    if(typeof data.volume === 'number') volume = data.volume;
  }
  function savePrefs(){
    SettingsService.saveSoundPrefs({ enabled, volume });
  }

  // Pré-carrega todos os sons de uma vez, pra tocar sem atraso.
  function preloadAll(){
    Object.keys(SOUND_FILES).forEach(key=>{
      const audio = new Audio(SOUND_FILES[key]);
      audio.preload = 'auto';
      audio.volume = volume;
      cache[key] = audio;
    });
  }

  // Toca um som pelo nome. Nunca deixa dois tocarem juntos — se algo
  // já estiver tocando, corta antes de começar o novo.
  function play(name){
    if(!enabled) return;
    const audio = cache[name];
    if(!audio) return;
    if(currentAudio && currentAudio !== audio){
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    audio.currentTime = 0;
    audio.volume = volume;
    // play() pode rejeitar se ainda não houve interação do usuário na
    // página — ignora silenciosamente, não é um erro real do app.
    audio.play().catch(()=>{});
    currentAudio = audio;
  }

  function setEnabled(value){
    enabled = !!value;
    savePrefs();
  }
  function isEnabled(){
    return enabled;
  }
  function setVolume(value){
    volume = Math.max(0, Math.min(1, value));
    Object.keys(cache).forEach(k=> cache[k].volume = volume);
    savePrefs();
  }
  function getVolume(){
    return volume;
  }

  loadPrefs();
  preloadAll();

  return { play, setEnabled, isEnabled, setVolume, getVolume };
})();
