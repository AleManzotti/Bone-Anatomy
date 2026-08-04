const IMG_MAIN = "images/todos-os-ossos.webp";
const IMG_UPPER_ANT = "images/ossos-superiores-anterior.webp";
const IMG_UPPER_POST = "images/ossos-superiores-posterior.webp";
const IMG_ARM = "images/ossos-do-braco.webp";
const IMG_TORAX = "images/torax.webp";
const IMG_LOWER = "images/membros-inferiores.webp";
const IMG_HAND = "images/ossos-da-mao.webp";
const IMG_FOOT = "images/ossos-do-pe.webp";
const IMG_COLUNA = "images/coluna.webp";

const GAMES = {
  main: {
    title:"Todos os ossos",
    showNumbers: true,
    solved: new Set(),
    failed: new Set(),
    views: [ { img: IMG_MAIN, bones: [
      {key:"cranio",    word:"CRANIO",    label:"Crânio",                       x:57.4, y:3.0},
      {key:"clavicula", word:"CLAVICULA", label:"Clavícula",                     x:40.2, y:17.0},
      {key:"esterno",   word:"ESTERNO",   label:"Esterno",                      x:57.6, y:20.7},
      {key:"costelas",  word:"COSTELAS",  label:"Costelas",                     x:74.3, y:24.4},
      {key:"umero",     word:"UMERO",     label:"Úmero",                        x:25.3, y:25.6},
      {key:"radio",     word:"RADIO",     label:"Rádio",                        x:16.7, y:39.7},
      {key:"ulna",      word:"ULNA",      label:"Ulna (Cúbito)",                x:23.3, y:40.7},
      {key:"quadril",   word:"QUADRIL",   label:"Osso do quadril (osso coxal)", x:42.0, y:39.4},
      {key:"sacro",     word:"SACRO",     label:"Sacro",                        x:57.2, y:41.8},
      {key:"femur",     word:"FEMUR",     label:"Fêmur",                        x:41.0, y:54.5},
      {key:"patela",    word:"PATELA",    label:"Patela",                       x:44.6, y:65.7},
      {key:"tibia",     word:"TIBIA",     label:"Tíbia",                        x:41.8, y:74.5},
      {key:"fibula",    word:"FIBULA",    label:"Fíbula (Perônio)",             x:46.6, y:76.4},
      {key:"tarso",     word:"TARSO",     label:"Ossos do tarso",               x:46.0, y:88.1},
      {key:"metatarso", word:"METATARSO", label:"Ossos do metatarso",           x:44.2, y:91.5},
      {key:"falanges",  word:"FALANGES",  label:"Falanges dos pés",             x:41.5, y:96}
    ] } ]
  },
  upper: {
    title:"Ossos superiores",
    showNumbers: true,
    solved: new Set(),
    failed: new Set(),
    views: [
      { img: IMG_UPPER_ANT, bones: [
        {key:"frontal",   word:"FRONTAL",   label:"Osso frontal",      x:49,   y:16.5},
        {key:"parietal",  word:"PARIETAL",  label:"Osso parietal",     x:63,   y:19.5},
        {key:"temporal",  word:"TEMPORAL",  label:"Osso temporal",     x:63,   y:27},
        {key:"nasal",     word:"NASAL",     label:"Osso nasal",        x:49,   y:28},
        {key:"zigomatico",word:"ZIGOMATICO",label:"Osso zigomático",   x:40,   y:34},
        {key:"maxilar",    word:"MAXILAR",    label:"Maxilar",            x:54,   y:37},
        {key:"mandibula2",word:"MANDIBULA", label:"Mandíbula",         x:49,   y:48},
        {key:"cervical2", word:"CERVICAIS", label:"Vértebras cervicais", x:49,  y:60},
        {key:"clavicula2",word:"CLAVICULA", label:"Clavícula",         x:30,   y:66},
        {key:"esterno2",  word:"ESTERNO",   label:"Esterno",           x:49,   y:79},
        {key:"escapula2", word:"ESCAPULA",  label:"Escápula",          x:22,   y:74}
      ] },
      { img: IMG_UPPER_POST, bones: [
        {key:"parietal",  word:"PARIETAL",  label:"Osso parietal",     x:40,   y:22},
        {key:"occipital", word:"OCCIPITAL", label:"Osso occipital",    x:49,   y:33},
        {key:"clavicula2",word:"CLAVICULA", label:"Clavícula",         x:28,   y:65},
        {key:"escapula2", word:"ESCAPULA",  label:"Escápula",          x:28,   y:82}
      ] }
    ]
  },
  braco: {
    title:"Ossos do braço",
    showNumbers: true,
    solved: new Set(),
    failed: new Set(),
    views: [ { img: IMG_ARM, bones: [
      {key:"clavicula3",       word:"CLAVICULA",  label:"Clavícula",           x:62.7, y:6.1},
      {key:"escapula3",        word:"ESCAPULA",   label:"Escápula",            x:58.6, y:16.8},
      {key:"umero2",           word:"UMERO",      label:"Úmero",               x:39.1, y:27.6},
      {key:"radio2",           word:"RADIO",      label:"Rádio",               x:34.3, y:55.1},
      {key:"ulna2",            word:"ULNA",       label:"Ulna (Cúbito)",       x:45.2, y:55.4},
      {key:"carpo",            word:"CARPO",      label:"Ossos do carpo",      x:39.7, y:71.7},
      {key:"metacarpo",        word:"METACARPO",  label:"Ossos do metacarpo",  x:48.0, y:75},
      {key:"falangesProximais",word:"FALANGESPROXIMAIS",   label:"Falanges proximais",  x:34, y:83.0},
      {key:"falangesDistais",  word:"FALANGESDISTAIS",   label:"Falanges distais",    x:40, y:92}
    ] } ]
  },
  torax: {
    title:"Tórax",
    showNumbers: true,
    solved: new Set(),
    failed: new Set(),
    views: [ { img: IMG_TORAX, bones: [
      {key:"cervical3",           word:"CERVICAIS",    label:"Vértebras cervicais",              x:45.9, y:7.0},
      {key:"manubrio",            word:"MANUBRIO",     label:"Manúbrio do esterno",              x:45.9, y:20.0},
      {key:"corpoEsterno",        word:"CORPO",        label:"Corpo do esterno",                 x:45.9, y:33.2},
      {key:"xifoide",             word:"XIFOIDE",      label:"Processo xifoide",                 x:46.0, y:42.3},
      {key:"costelasVerdadeiras", word:"VERDADEIRAS",  label:"Costelas verdadeiras (1ª a 7ª)",   x:69.1, y:34.7},
      {key:"costelasFalsas",      word:"FALSAS",       label:"Costelas falsas (8ª a 10ª)",       x:72.6, y:54.3},
      {key:"costelasFlutuantes",  word:"FLUTUANTES",   label:"Costelas flutuantes (11ª e 12ª)",  x:57, y:58.9},
      {key:"lombares",            word:"LOMBARES",     label:"Vértebras lombares",               x:45.9, y:56.5},
      {key:"quadril2",            word:"QUADRIL",      label:"Osso do quadril (osso coxal)",     x:69.1, y:70.3},
      {key:"sacro2",              word:"SACRO",        label:"Sacro",                            x:46.6, y:76.8},
      {key:"coccix",              word:"COCCIX",       label:"Cóccix",                           x:46.6, y:88.5}
    ] } ]
  },
  inferior: {
    title:"Membros inferiores",
    showNumbers: true,
    solved: new Set(),
    failed: new Set(),
    views: [ { img: IMG_LOWER, bones: [
      {key:"quadril3",    word:"QUADRIL",    label:"Osso do quadril (osso coxal)", x:34.2, y:6.5},
      {key:"sacro3",      word:"SACRO",      label:"Sacro",                        x:49.0, y:11.4},
      {key:"coccix2",     word:"COCCIX",     label:"Cóccix",                       x:48.6, y:17.9},
      {key:"femur2",      word:"FEMUR",      label:"Fêmur",                        x:32.2, y:31.9},
      {key:"patela2",     word:"PATELA",     label:"Patela",                       x:35.5, y:48.4},
      {key:"tibia2",      word:"TIBIA",      label:"Tíbia",                        x:35.5, y:61.0},
      {key:"fibula2",     word:"FIBULA",     label:"Fíbula (Perônio)",             x:30.8, y:64.1},
      {key:"tarso2",      word:"TARSO",      label:"Ossos do tarso",               x:35.5, y:79.6},
      {key:"metatarso2",  word:"METATARSO",  label:"Ossos do metatarso",           x:33.9, y:85.9},
      {key:"falanges2",   word:"FALANGES",   label:"Falanges dos pés",             x:32.6, y:91.4}
    ] } ]
  },
  mao: {
    title:"Ossos da mão",
    showNumbers: true,
    solved: new Set(),
    failed: new Set(),
    views: [ { img: IMG_HAND, bones: [
      {key:"ulna3",           word:"ULNA",      label:"Ulna",                    x:60.3, y:10.0},
      {key:"Radio3",            word:"RADIO",       label:"Rádio",                     x:44.4, y:10.0},
      {key:"escafoide",        word:"ESCAFOIDE",  label:"Escafoide",                x:48, y:28},
      {key:"semilunar",        word:"SEMILUNAR",  label:"Semilunar",                x:57, y:27.4},
      {key:"piramidal",        word:"PIRAMIDAL",  label:"Piramidal (Triquetro)",    x:63.5, y:29},
      {key:"pisiforme",        word:"PISIFORME",  label:"Pisiforme",                x:70, y:30.5},
      {key:"trapezio",         word:"TRAPEZIO",   label:"Trapézio",                 x:39.9, y:32},
      {key:"trapezoide",       word:"TRAPEZOIDE", label:"Trapezoide",               x:46.5, y:34.5},
      {key:"capitato",         word:"CAPITATO",   label:"Capitato (Osso Grande)",   x:53.2, y:33},
      {key:"hamato",           word:"HAMATO",     label:"Hamato (Unciforme)",       x:61, y:33.5},
      {key:"metacarpo2",       word:"METACARPO",  label:"Metacarpo",                x:52.5, y:48.2},
      {key:"falangeProximal",  word:"PROXIMAL",   label:"Falange proximal",         x:52.5, y:64.7},
      {key:"falangeMedia",     word:"MEDIA",      label:"Falange média",            x:53.0, y:78.3},
      {key:"falangeDistal",    word:"DISTAL",     label:"Falange distal",           x:53.0, y:89.2}
    ] } ]
  },
  pe: {
    title:"Ossos do pé",
    showNumbers: true,
    solved: new Set(),
    failed: new Set(),
    views: [ { img: IMG_FOOT, bones: [
      {key:"tibia3",            word:"TIBIA",        label:"Tíbia",                    x:34, y:12.8},
      {key:"fibula3",           word:"FIBULA",       label:"Fíbula",                   x:21.0, y:11.9},
      {key:"talus",             word:"TALUS",        label:"Tálus (Astrágalo)",        x:36, y:35},
      {key:"calcaneo",          word:"CALCANEO",     label:"Calcâneo",                 x:18, y:44},
      {key:"navicular",         word:"NAVICULAR",    label:"Navicular (Escafoide)",    x:44, y:39.5},
      {key:"cuneiformeMedial",  word:"MEDIAL",       label:"Cuneiforme Medial",        x:56.6, y:41.3},
      {key:"cuneiformeInter",   word:"INTERMEDIO",   label:"Cuneiforme Intermédio",    x:44.0, y:45},
      {key:"cuneiformeLateral", word:"LATERAL",      label:"Cuneiforme Lateral",       x:50, y:43},
      {key:"cuboide",           word:"CUBOIDE",      label:"Cuboide",                  x:35, y:47},
      {key:"metatarso3",        word:"METATARSO",    label:"Metatarso",                x:52.5, y:55.5},
      {key:"falangeProximalPe", word:"PROXIMAL",     label:"Falange proximal",         x:45, y:70},
      {key:"falangeMediaPe",    word:"MEDIA",        label:"Falange média",            x:60, y:77.5},
      {key:"falangeDistalPe",   word:"DISTAL",       label:"Falange distal",           x:72, y:82}
    ] } ]
  },
  coluna: {
    title:"Coluna vertebral",
    showNumbers: true,
    markerStyle: "label",
    solved: new Set(),
    failed: new Set(),
    views: [ { img: IMG_COLUNA, bones: [
      {key:"cervical4", word:"CERVICAL",  label:"Região Cervical",  x:17, y:20, yStart: 16,  yEnd:24.1},
      {key:"toracica",  word:"TORACICA",  label:"Região Torácica",  x:17, y:40.8, yStart:24.4,  yEnd:57.3},
      {key:"lombar2",   word:"LOMBAR",    label:"Região Lombar",    x:17, y:65.9, yStart:57.6,  yEnd:74.2},
      {key:"sacral",    word:"SACRAL",    label:"Região Sacral",    x:17, y:80.5, yStart:74.5,  yEnd:86.5},
      {key:"coccigea",  word:"COCCIGEA",  label:"Região Coccígea",  x:17, y:90.7, yStart:86.8,  yEnd:94.2}
    ] } ]
  }
};

// ============================================================
// PROGRESSSTORE — camada de persistência do progresso do usuário.
// Hoje grava em localStorage; no futuro, para sincronizar com um
// banco de dados, basta trocar a implementação de _load/_persist
// (ou os métodos get/set/clear abaixo) por chamadas a uma API —
// nenhum outro trecho do jogo precisa ser reescrito, pois todo o
// resto do código só conversa com ProgressStore.getBone/setBone/clearBone.
// ============================================================
const PROGRESS_STORAGE_KEY = 'anatomiaByAleProgressV1';

const ProgressStore = {
  _cache: null,
  _load(){
    if(this._cache) return this._cache;
    try {
      const raw = localStorage.getItem(PROGRESS_STORAGE_KEY);
      this._cache = raw ? JSON.parse(raw) : {};
    } catch(e){
      this._cache = {};
    }
    return this._cache;
  },
  _persist(){
    try {
      localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(this._cache));
    } catch(e){
      // Armazenamento indisponível (ex: modo privado) — o jogo continua
      // funcionando normalmente nesta sessão, apenas sem persistência.
    }
  },
  _entryKey(gameKey, boneKey){
    return gameKey + ':' + boneKey;
  },
  getBone(gameKey, boneKey){
    const data = this._load();
    return data[this._entryKey(gameKey, boneKey)] || null;
  },
  setBone(gameKey, boneKey, entry){
    const data = this._load();
    data[this._entryKey(gameKey, boneKey)] = entry;
    this._persist();
  },
  clearBone(gameKey, boneKey){
    const data = this._load();
    delete data[this._entryKey(gameKey, boneKey)];
    this._persist();
  },
  clearAll(){
    this._cache = {};
    try { localStorage.removeItem(PROGRESS_STORAGE_KEY); } catch(e){}
  }
};

let currentGameKey = "main";
let puzzle = null;
const MAX_ATTEMPTS = 5;
const KEY_ROWS = [
  ['Q','W','E','R','T','Y','U','I','O','P'],
  ['A','S','D','F','G','H','J','K','L'],
  ['DEL','Z','X','C','V','B','N','M','OK']
];

// Carrega automaticamente, para cada prancha, os ossos já concluídos
// (acertados ou com tentativas esgotadas) que estavam salvos localmente.
// Nunca reinicia tentativas em andamento — apenas restaura o estado final
// de cada osso; o progresso parcial (tentativas já usadas) fica guardado
// no ProgressStore e é recuperado quando o osso é reaberto (openPuzzle).
function loadAllProgress(){
  Object.keys(GAMES).forEach(gameKey=>{
    const game = GAMES[gameKey];
    game.solved = new Set();
    game.failed = new Set();
    allBones(game).forEach(b=>{
      const entry = ProgressStore.getBone(gameKey, b.key);
      if(entry){
        if(entry.solved) game.solved.add(b.key);
        else if(entry.failed) game.failed.add(b.key);
      }
    });
  });
}

function currentGame(){ return GAMES[currentGameKey]; }
function allBones(game){
  return game.views.reduce((acc,v)=>acc.concat(v.bones),[]);
}
function uniqueBoneCount(game){
  return new Set(allBones(game).map(b=>b.key)).size;
}

function switchTab(tabKey){
  currentGameKey = tabKey;
  puzzle = null;
  document.querySelectorAll('.tab').forEach(t=>t.classList.toggle('active', t.dataset.tab===tabKey));
  document.getElementById('plateLabel').textContent = 'Prancha · ' + GAMES[tabKey].title;
  document.getElementById('puzzleArea').innerHTML = '';
  document.getElementById('instructions').textContent = 'Toque em qualquer ponto numerado no esqueleto — ou escolha um número na lista abaixo — para começar a adivinhar.';
  buildHotspots();
  buildList();
  updateProgress();
}

function buildHotspots(){
  const wrap = document.getElementById('skelWrap');
  wrap.querySelectorAll('.skel-inner').forEach(n=>n.remove());
  const game = currentGame();
  const numberOf = {};
  let counter = 0;
  allBones(game).forEach(b=>{
    if(!(b.key in numberOf)){ counter++; numberOf[b.key]=counter; }
  });
  const legend = wrap.querySelector('.legend');
  game.views.forEach(view=>{
    const inner = document.createElement('div');
    inner.className = 'skel-inner';
    const img = document.createElement('img');
    img.src = view.img;
    img.alt = 'Esqueleto humano';
    inner.appendChild(img);
    // Renderiza exatamente os marcadores definidos nesta view, sem detecção,
    // sem busca e sem geração automática de duplicados.
    view.bones.forEach(b=>{
      if(game.markerStyle === 'label' && b.yStart != null){
        const bracket = document.createElement('div');
        bracket.className = 'region-bracket';
        bracket.style.left = '30%';
        bracket.style.top = b.yStart + '%';
        bracket.style.height = (b.yEnd - b.yStart) + '%';
        inner.appendChild(bracket);
      }
      const el = document.createElement('button');
      el.type = 'button';
      el.style.left = b.x + '%';
      el.style.top = b.y + '%';
      el.dataset.bone = b.key;
      if(game.markerStyle === 'label'){
        el.className = 'hotspot hotspot-label';
        el.textContent = 'Região ' + numberOf[b.key];
        el.setAttribute('aria-label', 'Região número ' + numberOf[b.key]);
      } else {
        el.className = 'hotspot';
        el.textContent = numberOf[b.key];
        el.setAttribute('aria-label', 'Osso número ' + numberOf[b.key]);
      }
      el.addEventListener('click', ()=>openPuzzle(b.key));
      inner.appendChild(el);
    });
    wrap.insertBefore(inner, legend);
  });
  refreshVisualStates();
}

function buildList(){
  const list = document.getElementById('boneList');
  list.innerHTML = '';
  const game = currentGame();
  const seen = new Set();
  let n = 0;
  allBones(game).forEach(b=>{
    if(seen.has(b.key)) return;
    seen.add(b.key);
    n++;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.dataset.bone = b.key;
    btn.innerHTML = '<span class="num">'+n+'</span><span class="txt">???</span>';
    btn.addEventListener('click', ()=>openPuzzle(b.key));
    list.appendChild(btn);
  });
  refreshVisualStates();
}

function labelFor(key){
  const game = currentGame();
  const found = allBones(game).find(b=>b.key===key);
  return found ? found.label.replace(/ \((esquerda|direita|frente|costas)\)$/,'') : key;
}
function wordFor(key){
  const game = currentGame();
  const found = allBones(game).find(b=>b.key===key);
  return found ? found.word : '';
}

function refreshVisualStates(){
  const game = currentGame();
  document.querySelectorAll('.hotspot').forEach(h=>{
    const key = h.dataset.bone;
    h.classList.toggle('done', game.solved.has(key));
    h.classList.toggle('wrong', !game.solved.has(key) && game.failed.has(key));
    h.classList.toggle('active', puzzle && puzzle.gameKey===currentGameKey && puzzle.key===key && !puzzle.solved && !puzzle.failed);
  });
  document.querySelectorAll('.boneList button').forEach(btn=>{
    const key = btn.dataset.bone;
    const txt = btn.querySelector('.txt');
    if(game.solved.has(key)){
      btn.classList.add('done');
      btn.classList.remove('wrong');
      txt.textContent = labelFor(key);
    } else if(game.failed.has(key)){
      btn.classList.add('wrong');
      btn.classList.remove('done');
      txt.textContent = labelFor(key);
    } else {
      btn.classList.remove('done','wrong');
      txt.textContent = '???';
    }
    btn.classList.toggle('active-item', puzzle && puzzle.gameKey===currentGameKey && puzzle.key===key && !puzzle.solved && !puzzle.failed);
  });
}

function evaluateGuess(guess, answer){
  const len = answer.length;
  const result = new Array(len).fill('absent');
  const counts = {};
  for(const c of answer) counts[c] = (counts[c]||0)+1;
  for(let i=0;i<len;i++){
    if(guess[i]===answer[i]){ result[i]='correct'; counts[guess[i]]--; }
  }
  for(let i=0;i<len;i++){
    if(result[i]==='correct') continue;
    const c = guess[i];
    if(counts[c]>0){ result[i]='present'; counts[c]--; }
  }
  return result;
}

function openPuzzle(key){
  const game = currentGame();
  if(game.solved.has(key)){
    document.getElementById('instructions').textContent = 'Você já acertou: ' + labelFor(key) + '.';
    puzzle = null;
    document.getElementById('puzzleArea').innerHTML = '';
    refreshVisualStates();
    scrollToPanel();
    return;
  }
  if(game.failed.has(key)){
    document.getElementById('instructions').textContent = 'Suas 5 tentativas para ' + labelFor(key) + ' já acabaram. Toque em "↻ Reiniciar progresso" para tentar de novo.';
    puzzle = null;
    document.getElementById('puzzleArea').innerHTML = '';
    refreshVisualStates();
    scrollToPanel();
    return;
  }
  const word = wordFor(key);
  const saved = ProgressStore.getBone(currentGameKey, key);
  if(saved && !saved.solved && !saved.failed && Array.isArray(saved.guesses)){
    // Continua exatamente de onde o usuário parou nesta prancha.
    puzzle = {gameKey:currentGameKey, key, word, row:saved.row||0, currentGuess:'', guesses:saved.guesses, keyStates:saved.keyStates||{}, solved:false, failed:false};
  } else {
    puzzle = {gameKey:currentGameKey, key, word, row:0, currentGuess:'', guesses:Array(MAX_ATTEMPTS).fill(null), keyStates:{}, solved:false, failed:false};
  }
  const remaining = MAX_ATTEMPTS - puzzle.row;
  document.getElementById('instructions').textContent = 'Osso selecionado — ' + word.length + ' letras. Tentativas usadas: ' + puzzle.row + ' · Tentativas restantes: ' + remaining + '.';
  refreshVisualStates();
  renderPuzzle();
  scrollToPanel();
}

function scrollToPanel(){
  const panel = document.getElementById('panel');
  if(panel) panel.scrollIntoView({behavior:'smooth', block:'start'});
}

function renderPuzzle(){
  const area = document.getElementById('puzzleArea');
  if(!puzzle){ area.innerHTML=''; return; }
  const {word,row} = puzzle;
  const len = word.length;
  let html = '<div class="grid">';
  for(let r=0;r<MAX_ATTEMPTS;r++){
    html += '<div class="grid-row">';
    for(let c=0;c<len;c++){
      let cls='tile'; let letter='';
      if(puzzle.guesses[r]){
        cls += ' '+puzzle.guesses[r].result[c];
        letter = puzzle.guesses[r].letters[c];
      } else if(r===row){
        letter = puzzle.currentGuess[c]||'';
      }
      html += '<div class="'+cls+'">'+letter+'</div>';
    }
    html += '</div>';
  }
  html += '</div><div class="keyboard">';
  KEY_ROWS.forEach(rowArr=>{
    html += '<div class="kb-row">';
    rowArr.forEach(k=>{
      const label = k==='DEL' ? '⌫' : (k==='OK' ? 'OK' : k);
      const extra = (k==='DEL'||k==='OK') ? ' wide' : '';
      const state = puzzle.keyStates[k] ? ' '+puzzle.keyStates[k] : '';
      html += '<button type="button" class="key'+extra+state+'" onclick="handleKey(\''+k+'\')">'+label+'</button>';
    });
    html += '</div>';
  });
  html += '</div>';
  if(!puzzle.solved && !puzzle.failed){
    html += '<div class="attemptsLine">Tentativa '+(row+1)+' de '+MAX_ATTEMPTS+'</div>';
  }
  area.innerHTML = html;
}

function handleKey(k){
  if(!puzzle || puzzle.solved || puzzle.failed) return;
  if(k==='DEL'){
    puzzle.currentGuess = puzzle.currentGuess.slice(0,-1);
  } else if(k==='OK'){
    submitGuess();
  } else if(puzzle.currentGuess.length < puzzle.word.length){
    puzzle.currentGuess += k;
  }
  renderPuzzle();
}

function submitGuess(){
  const g = puzzle.currentGuess;
  if(g.length !== puzzle.word.length) return;
  const result = evaluateGuess(g, puzzle.word);
  puzzle.guesses[puzzle.row] = {letters:g.split(''), result};
  const rank = {absent:0,present:1,correct:2};
  g.split('').forEach((ch,i)=>{
    const st = result[i];
    const prev = puzzle.keyStates[ch];
    if(!prev || rank[st]>rank[prev]) puzzle.keyStates[ch]=st;
  });
  const game = GAMES[puzzle.gameKey];
  if(g === puzzle.word){
    puzzle.solved = true;
    game.solved.add(puzzle.key);
    document.getElementById('instructions').textContent = '✓ Correto! Era ' + labelFor(puzzle.key) + '.';
    updateProgress();
    refreshVisualStates();
    setTimeout(()=>advanceToNextBone(puzzle.gameKey, puzzle.key), 900);
  } else {
    puzzle.row++;
    puzzle.currentGuess='';
    if(puzzle.row>=MAX_ATTEMPTS){
      puzzle.failed = true;
      game.failed.add(puzzle.key);
      document.getElementById('instructions').textContent = 'Não foi dessa vez — era ' + labelFor(puzzle.key) + ' (' + puzzle.word + ').';
      refreshVisualStates();
    }
  }
  persistPuzzleProgress();
}

// Depois de um acerto, avança automaticamente para o próximo osso da
// numeração (o mesmo número mostrado nos hotspots), pulando ossos que já
// foram concluídos (acertados ou com tentativas esgotadas). Se não houver
// próximo (chegou no último número, ou já veio de outra aba), não faz nada.
function advanceToNextBone(gameKey, boneKey){
  if(currentGameKey !== gameKey) return;
  const game = GAMES[gameKey];
  const bones = allBones(game);
  const numberOf = {};
  let counter = 0;
  bones.forEach(b=>{ if(!(b.key in numberOf)){ counter++; numberOf[b.key]=counter; } });
  const currentNumber = numberOf[boneKey];
  const total = uniqueBoneCount(game);
  for(let n = currentNumber+1; n <= total; n++){
    const nextEntry = bones.find(b=>numberOf[b.key]===n);
    if(nextEntry && !game.solved.has(nextEntry.key) && !game.failed.has(nextEntry.key)){
      openPuzzle(nextEntry.key);
      return;
    }
  }
}

// Salva imediatamente no armazenamento local o estado do osso em jogo:
// tentativas utilizadas, acertos, erros, se foi concluído e a data da
// última atualização. Chamado a cada tentativa — nunca espera o usuário
// fechar a página.
function persistPuzzleProgress(){
  if(!puzzle) return;
  const attemptsUsed = puzzle.guesses.filter(g=>g!==null).length;
  const hits = puzzle.solved ? 1 : 0;
  const misses = attemptsUsed - hits;
  ProgressStore.setBone(puzzle.gameKey, puzzle.key, {
    attemptsUsed,
    hits,
    misses,
    completed: puzzle.solved || puzzle.failed,
    solved: puzzle.solved,
    failed: puzzle.failed,
    row: puzzle.row,
    guesses: puzzle.guesses,
    keyStates: puzzle.keyStates,
    lastUpdated: new Date().toISOString()
  });
}

function updateProgress(){
  const game = currentGame();
  const total = uniqueBoneCount(game);
  document.getElementById('progress').textContent = game.solved.size + ' / ' + total;
  document.getElementById('winMsg').style.display = (game.solved.size===total) ? 'block' : 'none';
}

function resetGame(){
  const game = currentGame();
  // Só chega aqui por clique explícito no botão "Reiniciar progresso" —
  // a página nunca reinicia tentativas sozinha.
  allBones(game).forEach(b=>{
    ProgressStore.clearBone(currentGameKey, b.key);
  });
  game.solved = new Set();
  game.failed = new Set();
  puzzle = null;
  document.getElementById('puzzleArea').innerHTML='';
  document.getElementById('instructions').textContent = 'Toque em qualquer ponto numerado no esqueleto — ou escolha um número na lista abaixo — para começar a adivinhar.';
  updateProgress();
  refreshVisualStates();
}

document.addEventListener('keydown', function(e){
  if(!puzzle) return;
  if(e.key==='Enter'){ handleKey('OK'); }
  else if(e.key==='Backspace'){ handleKey('DEL'); }
  else { const ch=e.key.toUpperCase(); if(/^[A-Z]$/.test(ch)) handleKey(ch); }
});

document.querySelectorAll('.tab').forEach(t=>{
  t.addEventListener('click', ()=>switchTab(t.dataset.tab));
});

loadAllProgress();
switchTab('main');
