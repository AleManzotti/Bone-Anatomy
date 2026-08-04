// ============================================================
// SETTINGSSERVICE — tema, som, volume, trilha sonora e preferências
// gerais (idioma reservado pra versões futuras). Único dono das chaves
// de configuração; fala só com StorageService, nunca com localStorage
// diretamente.
// ============================================================
const SettingsService = (function(){
  const THEME_KEY = 'anatomiaByAleThemeV1';
  const SOUND_KEY = 'anatomiaByAleSoundV1';
  const MUSIC_KEY = 'anatomiaByAleMusicV1';
  const LANGUAGE_KEY = 'anatomiaByAleLanguageV1';

  function getTheme(){
    return StorageService.get(THEME_KEY, 'light') || 'light';
  }
  function setTheme(theme){
    StorageService.set(THEME_KEY, theme);
  }

  // { enabled: boolean, volume: number 0..1 }
  function getSoundPrefs(){
    return StorageService.getJSON(SOUND_KEY, { enabled: true, volume: 0.3 });
  }
  function saveSoundPrefs(prefs){
    StorageService.setJSON(SOUND_KEY, prefs);
  }

  function isMusicEnabled(){
    return StorageService.get(MUSIC_KEY, 'off') === 'on';
  }
  function setMusicEnabled(enabled){
    StorageService.set(MUSIC_KEY, enabled ? 'on' : 'off');
  }

  // Ainda sem tela pra trocar — só português por enquanto. Já fica
  // pronto pra quando o app ganhar mais idiomas.
  function getLanguage(){
    return StorageService.get(LANGUAGE_KEY, 'pt-BR');
  }
  function setLanguage(lang){
    StorageService.set(LANGUAGE_KEY, lang);
  }

  return {
    getTheme, setTheme,
    getSoundPrefs, saveSoundPrefs,
    isMusicEnabled, setMusicEnabled,
    getLanguage, setLanguage
  };
})();
