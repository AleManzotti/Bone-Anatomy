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
        {key:"maxila",    word:"MAXILA",    label:"Maxila",            x:54,   y:37},
        {key:"mandibula2",word:"MANDIBULA", label:"Mandíbula",         x:49,   y:48},
        {key:"cervical2", word:"CERVICAL", label:"Vértebras cervicais", x:49,  y:60},
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
      {key:"corpoEsterno",        word:"CORPODOESTERNO",        label:"Corpo do esterno",                 x:45.9, y:33.2},
      {key:"xifoide",             word:"PROCESSOXIFOIDE",      label:"Processo xifoide",                 x:46.0, y:42.3},
      {key:"costelasVerdadeiras", word:"COSTELASVERDADEIRAS",  label:"Costelas verdadeiras (1ª a 7ª)",   x:69.1, y:34.7},
      {key:"costelasFalsas",      word:"COSTELASFALSAS",       label:"Costelas falsas (8ª a 10ª)",       x:72.6, y:54.3},
      {key:"costelasFlutuantes",  word:"COSTELASFLUTUANTES",   label:"Costelas flutuantes (11ª e 12ª)",  x:57, y:58.9},
      {key:"lombares",            word:"LOMBAR",     label:"Vértebras lombares",               x:45.9, y:56.5},
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
      {key:"falangeProximal",  word:"FALANGEPROXIMAL",   label:"Falange proximal",         x:52.5, y:64.7},
      {key:"falangeMedia",     word:"FALANGEMEDIA",      label:"Falange média",            x:53.0, y:78.3},
      {key:"falangeDistal",    word:"FALANGEDISTAL",     label:"Falange distal",           x:53.0, y:89.2}
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
      {key:"cuneiformeMedial",  word:"CUNEIFORMEMEDIAL",       label:"Cuneiforme Medial",        x:56.6, y:41.3},
      {key:"cuneiformeLateral",   word:"CUNEIFORMELATERAL",   label:"Cuneiforme Lateral",    x:44.0, y:45},
      {key:"cuneiformeIntermedial", word:"CUNEIFORMEINTERMEDIAL",      label:"Cuneiforme Intermédio",       x:50, y:43},
      {key:"cuboide",           word:"CUBOIDE",      label:"Cuboide",                  x:35, y:47},
      {key:"metatarso3",        word:"METATARSO",    label:"Metatarso",                x:52.5, y:55.5},
      {key:"falangeProximalPe", word:"FALANGEPROXIMAL",     label:"Falange proximal",         x:45, y:70},
      {key:"falangeMediaPe",    word:"FALANGEMEDIA",        label:"Falange média",            x:60, y:77.5},
      {key:"falangeDistalPe",   word:"FALANGEDISTAL",       label:"Falange distal",           x:72, y:82}
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
// BONE_INFO — conteúdo pedagógico usado só pelo modo Flashcards (nunca
// pelo jogo). Indexado por `word` (a identidade real do osso) em vez de
// `key` (que tem sufixos como femur2/femur3 só pra não colidir dentro de
// GAMES) — assim um osso que aparece em várias pranchas (ex.: fêmur em
// "Todos os ossos" e em "Membros inferiores") tem uma única ficha.
// Cada entrada tem hoje `description`/`function`; os campos futuros
// (origin, trivia, muscleInsertions, joints, classification, neighbors,
// extraImages) já são suportados por FLASH_INFO_FIELDS/renderFlashInfoCard
// — só precisam ser acrescentados aqui quando existirem, nada de código
// muda.
// ============================================================
const BONE_INFO = {
  CRANIO: { description:"Conjunto de ossos que forma a caixa craniana e o esqueleto da face.", function:"Protege o encéfalo e sustenta as estruturas da face." },
  CLAVICULA: { description:"Osso longo e fino que liga o membro superior ao tronco, na frente do ombro.", function:"Funciona como uma escora entre o esterno e a escápula, mantendo o ombro afastado do tórax." },
  ESTERNO: { description:"Osso plano no centro do tórax, dividido em manúbrio, corpo e processo xifoide.", function:"Protege órgãos do mediastino e serve de ponto de fixação para as costelas verdadeiras." },
  COSTELAS: { description:"Doze pares de ossos curvos que formam a caixa torácica.", function:"Protegem o coração e os pulmões e participam dos movimentos da respiração." },
  UMERO: { description:"Osso longo e único do braço, entre o ombro e o cotovelo.", function:"Permite os movimentos do ombro e do cotovelo, servindo de alavanca para os músculos do braço." },
  RADIO: { description:"Osso longo do antebraço, do lado do polegar.", function:"Permite a rotação do antebraço (pronação e supinação) e participa do punho." },
  ULNA: { description:"Osso longo do antebraço, do lado do dedo mínimo.", function:"Forma a principal articulação do cotovelo e serve de eixo para a rotação do rádio." },
  QUADRIL: { description:"Osso coxal, formado pela fusão de ílio, ísquio e púbis.", function:"Une o tronco aos membros inferiores e forma, com o sacro, a pelve." },
  SACRO: { description:"Osso triangular formado pela fusão de cinco vértebras sacrais.", function:"Conecta a coluna vertebral à pelve e ajuda a sustentar o peso do tronco." },
  FEMUR: { description:"Maior e mais forte osso do corpo humano, localizado na coxa.", function:"Sustenta grande parte do peso corporal e participa das articulações do quadril e do joelho." },
  PATELA: { description:"Pequeno osso sesamoide localizado na frente do joelho.", function:"Protege a articulação do joelho e aumenta a alavanca do músculo quadríceps." },
  TIBIA: { description:"Osso longo e principal da perna, medial à fíbula.", function:"Sustenta o peso do corpo entre o joelho e o tornozelo." },
  FIBULA: { description:"Osso longo e fino, lateral à tíbia.", function:"Serve de fixação muscular e estabiliza o tornozelo, sem sustentar grande carga de peso." },
  TARSO: { description:"Conjunto de sete ossos curtos entre a perna e o metatarso (tálus, calcâneo, navicular, cuboide e três cuneiformes).", function:"Formam o calcanhar e o arco do pé, distribuindo o peso do corpo." },
  METATARSO: { description:"Cinco ossos longos entre o tarso e os dedos do pé.", function:"Formam a parte anterior do arco do pé e ajudam no impulso ao caminhar." },
  FALANGES: { description:"Ossos longos que formam os dedos dos pés.", function:"Permitem os movimentos dos dedos e o apoio na fase final do passo." },

  FRONTAL: { description:"Osso plano que forma a testa e a parte superior das órbitas.", function:"Protege os lobos frontais do encéfalo e sustenta as sobrancelhas." },
  PARIETAL: { description:"Par de ossos planos que formam a maior parte do teto e das laterais do crânio.", function:"Protegem o encéfalo nas regiões superior e lateral da cabeça." },
  TEMPORAL: { description:"Osso lateral do crânio, ao redor da orelha.", function:"Abriga o ouvido médio e interno e articula-se com a mandíbula." },
  NASAL: { description:"Par de pequenos ossos que formam a ponte do nariz.", function:"Dá suporte à parte óssea do nariz." },
  ZIGOMATICO: { description:"Osso que forma a proeminência da bochecha.", function:"Dá forma à face e protege o globo ocular lateralmente." },
  MAXILAR: { description:"Osso que forma boa parte do esqueleto da face e o maxilar superior.", function:"Sustenta os dentes superiores e forma o teto da boca e o assoalho das órbitas." },
  MANDIBULA: { description:"Único osso móvel do crânio; forma o maxilar inferior.", function:"Sustenta os dentes inferiores e permite a mastigação e a fala." },
  CERVICAL: { description:"Sete vértebras (C1 a C7) que formam a região do pescoço.", function:"Sustentam e movimentam a cabeça e protegem a medula espinhal." },
  ESCAPULA: { description:"Osso triangular e achatado na parte posterior do ombro.", function:"Serve de encaixe para o úmero e ponto de fixação para músculos do ombro." },
  OCCIPITAL: { description:"Osso na base e na parte posterior do crânio.", function:"Protege o cerebelo e articula-se com a primeira vértebra cervical (atlas)." },

  CARPO: { description:"Conjunto de oito pequenos ossos do punho, dispostos em duas fileiras.", function:"Permitem os movimentos do punho e conectam o antebraço à mão." },
  METACARPO: { description:"Cinco ossos longos entre o carpo e os dedos da mão.", function:"Formam a palma da mão e sustentam a base dos dedos." },
  FALANGESPROXIMAIS: { description:"Primeira fileira de falanges, mais próxima da mão, uma para cada dedo.", function:"Formam a base dos dedos e permitem o primeiro movimento de flexão." },
  FALANGESDISTAIS: { description:"Últimas falanges de cada dedo, na ponta.", function:"Sustentam a unha e permitem a preensão fina de objetos." },

  CERVICAIS: { description:"Sete vértebras (C1 a C7) que formam a região do pescoço.", function:"Sustentam a cabeça, permitem seus movimentos e protegem a medula espinhal." },
  MANUBRIO: { description:"Parte superior e mais larga do esterno.", function:"Articula-se com as clavículas e com o primeiro par de costelas." },
  CORPODOESTERNO: { description:"Parte central e mais longa do esterno.", function:"Serve de fixação para a maioria das cartilagens costais." },
  PROCESSOXIFOIDE: { description:"Pequena extensão na ponta inferior do esterno.", function:"Serve de ponto de fixação para músculos abdominais e do diafragma." },
  COSTELASVERDADEIRAS: { description:"Os sete primeiros pares de costelas (1ª a 7ª).", function:"Ligam-se diretamente ao esterno por cartilagem própria, protegendo o tórax." },
  COSTELASFALSAS: { description:"Costelas do 8º ao 10º par.", function:"Ligam-se ao esterno indiretamente, pela cartilagem da costela acima." },
  COSTELASFLUTUANTES: { description:"Os dois últimos pares de costelas (11ª e 12ª).", function:"Não se ligam ao esterno, terminando livres na musculatura abdominal." },
  LOMBAR: { description:"Cinco vértebras (L1 a L5), as maiores da coluna móvel, na região lombar.", function:"Sustentam a maior parte do peso do tronco e permitem sua flexão e extensão." },
  COCCIX: { description:"Pequeno osso na extremidade inferior da coluna, formado pela fusão de 3 a 5 vértebras.", function:"Serve de ponto de fixação para ligamentos e músculos do assoalho pélvico." },

  ESCAFOIDE: { description:"Maior osso da fileira proximal do carpo, do lado do polegar.", function:"Faz a ponte entre as duas fileiras do carpo e é essencial na mobilidade do punho." },
  SEMILUNAR: { description:"Osso do carpo em forma de lua crescente, na fileira proximal.", function:"Participa da principal articulação de movimento do punho." },
  PIRAMIDAL: { description:"Osso do carpo em forma de pirâmide, na fileira proximal, do lado do dedo mínimo.", function:"Contribui para a estabilidade do lado ulnar do punho." },
  PISIFORME: { description:"Pequeno osso sesamoide arredondado, sobre o piramidal.", function:"Serve de ponto de fixação para tendões e ligamentos do punho." },
  TRAPEZIO: { description:"Osso do carpo na fileira distal, próximo à base do polegar.", function:"Forma a articulação na base do polegar, essencial para a pinça e a preensão." },
  TRAPEZOIDE: { description:"Pequeno osso do carpo, na fileira distal, ao lado do trapézio.", function:"Conecta o trapézio ao segundo osso do metacarpo." },
  CAPITATO: { description:"Maior osso do carpo, no centro da fileira distal.", function:"Atua como o eixo central dos movimentos do punho e da mão." },
  HAMATO: { description:"Osso do carpo com um pequeno gancho ósseo, na fileira distal.", function:"Serve de ponto de fixação para ligamentos que formam o túnel do carpo." },
  FALANGEPROXIMAL: { description:"Primeira falange de cada dedo, mais próxima da mão ou do pé.", function:"Forma a base do dedo e permite seu primeiro movimento de flexão." },
  FALANGEMEDIA: { description:"Falange intermediária, presente em todos os dedos exceto no polegar/hálux.", function:"Permite a flexão intermediária dos dedos." },
  FALANGEDISTAL: { description:"Última falange de cada dedo, na ponta.", function:"Sustenta a unha e participa da preensão fina." },

  TALUS: { description:"Osso do tarso que se articula diretamente com a tíbia e a fíbula.", function:"Transmite o peso do corpo da perna para o pé e forma o tornozelo." },
  CALCANEO: { description:"Maior osso do tarso; forma o calcanhar.", function:"Sustenta o peso do corpo ao ficar em pé e serve de alavanca para a panturrilha ao caminhar." },
  NAVICULAR: { description:"Osso do tarso em forma de barco, entre o tálus e os cuneiformes.", function:"Ajuda a formar o arco medial do pé." },
  CUNEIFORMEMEDIAL: { description:"Maior dos três ossos cuneiformes, do lado interno do pé.", function:"Sustenta a base do primeiro metatarso (dedão)." },
  CUNEIFORMEINTERMEDIAL: { description:"Menor dos três ossos cuneiformes, no meio do pé.", function:"Sustenta a base do segundo metatarso." },
  CUNEIFORMELATERAL: { description:"Osso cuneiforme do lado externo do pé.", function:"Sustenta a base do terceiro metatarso." },
  CUBOIDE: { description:"Osso do tarso em forma de cubo, do lado externo do pé.", function:"Sustenta o quarto e o quinto metatarsos e ajuda a formar o arco lateral do pé." },

  TORACICA: { description:"Doze vértebras (T1 a T12), que se articulam com as costelas.", function:"Formam a parte posterior da caixa torácica e protegem a medula espinhal." },
  SACRAL: { description:"Região da coluna formada pelo sacro, cinco vértebras fundidas.", function:"Une a coluna à pelve e ajuda a sustentar o peso do tronco." },
  COCCIGEA: { description:"Região final da coluna, formada pelo cóccix.", function:"Serve de apoio ao sentar e de fixação para ligamentos pélvicos." }
};

// Ordem e rótulos dos campos mostrados na ficha do Flashcards — hoje só
// description/function têm conteúdo; os demais já funcionam (a linha só
// aparece se o campo existir na entrada de BONE_INFO), prontos para
// quando esse conteúdo for escrito.
const FLASH_INFO_FIELDS = [
  { key:'description', label:'Descrição' },
  { key:'function', label:'Função' },
  { key:'origin', label:'Origem do nome' },
  { key:'trivia', label:'Curiosidade' },
  { key:'muscleInsertions', label:'Inserções musculares' },
  { key:'joints', label:'Articulações' },
  { key:'classification', label:'Classificação' },
  { key:'neighbors', label:'Ossos vizinhos' }
];

// ============================================================
// PROGRESSO DO JOGO — a persistência em si (progresso por osso, tempo
// por prancha, resumo por prancha) mora em services/progressService.js;
// aqui fica só a lógica de jogo (o que é "concluído", como agregar
// game.solved/game.failed em um resumo) e o cronômetro da prancha
// atual, chamando ProgressService pra ler/gravar.
// ============================================================

// Cronômetro: soma tempo só enquanto uma prancha está selecionada e a
// aba do navegador está visível. Pausa sozinho ao trocar de prancha,
// minimizar/trocar de aba ou fechar a página.
let _timerGameKey = null;
let _timerStartedAt = null;

function startBoardTimer(gameKey){
  stopBoardTimer();
  _timerGameKey = gameKey;
  _timerStartedAt = Date.now();
}
function stopBoardTimer(){
  if(_timerGameKey && _timerStartedAt){
    ProgressService.addBoardTimeMs(_timerGameKey, Date.now() - _timerStartedAt);
  }
  _timerGameKey = null;
  _timerStartedAt = null;
}

function formatDuration(ms){
  const totalSec = Math.floor(ms / 1000);
  const m = Math.floor(totalSec / 60);
  const s = totalSec % 60;
  return m + 'm ' + String(s).padStart(2, '0') + 's';
}

// Objeto em memória com o resumo de progresso de cada prancha (fonte de
// leitura rápida pro resto da tela); persistido via ProgressService.
const BoardProgress = {};

function getBoardStatus(gameKey){
  const game = GAMES[gameKey];
  const total = uniqueBoneCount(game);
  const attempted = game.solved.size + game.failed.size;
  if(attempted === 0) return 'Não iniciado';
  if(game.solved.size === total && total > 0) return 'Concluído';
  return 'Em andamento';
}

function refreshBoardProgress(gameKey){
  const game = GAMES[gameKey];
  if(!game) return null;
  const total = uniqueBoneCount(game);
  const hits = game.solved.size;
  const misses = game.failed.size;
  const timeSpentMs = ProgressService.getBoardTimeMs(gameKey);
  BoardProgress[gameKey] = {
    title: game.title,
    percent: total ? Math.round((hits / total) * 100) : 0,
    hits,
    misses,
    total,
    timeSpentMs,
    timeSpentLabel: formatDuration(timeSpentMs),
    status: getBoardStatus(gameKey)
  };
  persistBoardProgress();
  return BoardProgress[gameKey];
}

function refreshAllBoardProgress(){
  Object.keys(GAMES).forEach(refreshBoardProgress);
}

function persistBoardProgress(){
  Object.keys(BoardProgress).forEach(k => ProgressService.saveBoardProgressSnapshot(k, BoardProgress[k]));
}

function loadBoardProgress(){
  Object.assign(BoardProgress, ProgressService.getAllBoardProgressSnapshots());
}

// Agregados usados na tela inicial e na tela de estatísticas — sempre
// lidos a partir de BoardProgress (que por sua vez vem de game.solved/
// game.failed/BoardTimeStore), nunca duplicando o dado em outro lugar.
function formatDurationLong(ms){
  const totalMin = Math.floor(ms / 60000);
  const h = Math.floor(totalMin / 60);
  const m = totalMin % 60;
  return h > 0 ? (h + 'h ' + m + 'm') : (m + 'm');
}
function allBoardProgress(){
  return Object.keys(GAMES).map(k => BoardProgress[k] || refreshBoardProgress(k));
}
function getOverallProgress(){
  const boards = allBoardProgress();
  const hits = boards.reduce((s,b)=>s+b.hits, 0);
  const total = boards.reduce((s,b)=>s+b.total, 0);
  return { hits, total, percent: total ? Math.round((hits/total)*100) : 0 };
}
function getCompletedBoardsCount(){
  const boards = allBoardProgress();
  return { completed: boards.filter(b=>b.status==='Concluído').length, total: boards.length };
}
function getTotalTimeSpentMs(){
  return Object.keys(GAMES).reduce((sum, k) => sum + ProgressService.getBoardTimeMs(k), 0);
}
function getTotalMisses(){
  return allBoardProgress().reduce((s,b)=>s+b.misses, 0);
}
// Taxa de acerto entre os ossos já tentados (acertados + errados) —
// ossos ainda não tentados não entram na conta.
function getAccuracyRate(){
  const overall = getOverallProgress();
  const misses = getTotalMisses();
  const attempted = overall.hits + misses;
  return attempted ? Math.round((overall.hits / attempted) * 100) : 0;
}
// Prancha com maior/menor taxa de acerto, considerando só pranchas com
// pelo menos um osso já tentado (as nunca iniciadas não entram no
// ranking — não fazem uma prancha "pior").
function getBestAndWorstBoard(){
  const boards = allBoardProgress().filter(b => (b.hits + b.misses) > 0);
  if(!boards.length) return { best: null, worst: null };
  let best = boards[0], worst = boards[0];
  let bestAcc = best.hits / (best.hits + best.misses);
  let worstAcc = bestAcc;
  boards.forEach(b=>{
    const acc = b.hits / (b.hits + b.misses);
    if(acc > bestAcc){ bestAcc = acc; best = b; }
    if(acc < worstAcc){ worstAcc = acc; worst = b; }
  });
  return { best, worst };
}

// ============================================================
// SEQUÊNCIA DE ACERTOS, SEQUÊNCIA DE DIAS, ÚLTIMA PRANCHA e XP/NÍVEL —
// toda a persistência mora em services/progressService.js agora; as
// constantes de recompensa (quanto XP cada coisa vale) continuam aqui,
// porque são regra do JOGO, não do serviço de dados.
// ============================================================
const XP_PER_CORRECT = 10;
const XP_BOARD_COMPLETE = 100;
const XP_PERFECT_BONUS = 50;

// ============================================================
// TEMA (claro/escuro) — troca só o atributo data-theme na <html>; todo
// o CSS já é construído em cima de variáveis, então o resto se
// re-tematiza sozinho (ver css/style.css). A preferência é lida/salva
// via SettingsService. Um script pequeno no <head> já aplica o tema
// salvo antes da página desenhar, pra não piscar.
// ============================================================
function applyTheme(theme){
  if(theme === 'dark'){
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
  SettingsService.setTheme(theme);
  renderThemeButtons();
}
function renderThemeButtons(){
  const isDark = SettingsService.getTheme() === 'dark';
  document.getElementById('btnLightMode').classList.toggle('primary', !isDark);
  document.getElementById('btnDarkMode').classList.toggle('primary', isDark);
}

// Reflete o estado do SoundManager (definido em js/soundManager.js, um
// arquivo à parte) nos dois botões da tela de Configurações.
function renderSoundButtons(){
  const on = SoundManager.isEnabled();
  document.getElementById('btnSoundOn').classList.toggle('primary', on);
  document.getElementById('btnSoundOff').classList.toggle('primary', !on);
}

// Reflete o estado do MusicManager (js/musicManager.js, trilha sonora
// ambiente opcional) nos dois botões da tela de Configurações.
function renderMusicButtons(){
  const on = MusicManager.isEnabled();
  document.getElementById('btnMusicOn').classList.toggle('primary', on);
  document.getElementById('btnMusicOff').classList.toggle('primary', !on);
}

// ============================================================
// EXPORTAR/IMPORTAR PROGRESSO — junta tudo que o app guarda (em
// qualquer serviço) num único arquivo .json que o usuário pode baixar e
// depois carregar de volta (no mesmo aparelho ou em outro). Lê/grava
// sempre via StorageService — nunca localStorage diretamente.
// ============================================================
const ALL_STORAGE_KEYS = [
  'anatomiaByAleProgressV1',
  'anatomiaByAleBoardTimeV1',
  'anatomiaByAleBoardProgressV1',
  'anatomiaByAleStreakV1',
  'anatomiaByAleCorrectStreakV1',
  'anatomiaByAleLastBoardV1',
  'anatomiaByAleAchievementsV1',
  'anatomiaByAleXPV1',
  'anatomiaByAleThemeV1',
  'anatomiaByAleSoundV1',
  'anatomiaByAleMusicV1',
  'anatomiaByAleExamHistoryV1',
  'anatomiaByAleFlashFavoritesV1',
  'anatomiaByAleFlashHistoryV1',
  'anatomiaByAleIdentifyStatsV1',
  'anatomiaByAleLocateStatsV1',
  'anatomiaByAleLocateCompletedV1'
];

function exportProgress(){
  const data = {};
  ALL_STORAGE_KEYS.forEach(k=>{
    const v = StorageService.get(k, null);
    if(v !== null) data[k] = v;
  });
  const blob = new Blob([JSON.stringify(data, null, 2)], {type:'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'anatomia-by-ale-progresso.json';
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function importProgress(file){
  const reader = new FileReader();
  reader.onload = function(){
    let data;
    try {
      data = JSON.parse(reader.result);
    } catch(e){
      alert('Não consegui ler esse arquivo — confirme que é um progresso exportado daqui mesmo.');
      return;
    }
    ALL_STORAGE_KEYS.forEach(k=>{
      if(typeof data[k] === 'string'){
        StorageService.set(k, data[k]);
      }
    });
    alert('Progresso importado! A página vai recarregar agora.');
    location.reload();
  };
  reader.readAsText(file);
}

// ============================================================
// CONQUISTAS — badges desbloqueáveis. Cada uma tem um ícone, um nome
// e uma condição (função que olha pros dados já existentes — acertos,
// pranchas, sequências). checkAchievements() roda todas as condições
// ainda não desbloqueadas; a primeira vez que uma vira verdadeira, ela
// é salva como desbloqueada (pra nunca mais reavaliar/repetir o popup)
// e um popup aparece. Pra adicionar uma conquista nova, basta acrescentar
// um item na lista ACHIEVEMENTS abaixo — nada mais precisa mudar.
// ============================================================
// ============================================================
// Helpers de condição — nada aqui grava estado, só leem o que já existe
// (GAMES.solved, ProgressService, ExamService, o cronômetro da prancha
// atual) pra decidir se uma conquista está valendo.
// ============================================================
function isBoardFullyComplete(gameKey){
  const game = GAMES[gameKey];
  const total = uniqueBoneCount(game);
  return total > 0 && game.solved.size === total;
}
function boardsCompleteCount(keys){
  return keys.filter(isBoardFullyComplete).length;
}
// "Sem nenhum erro": todo osso da prancha foi resolvido de primeira
// (row 0 salvo no ProgressService), não só "sem pendência no momento" —
// senão um osso errado e depois corrigido via revisão contaria como
// perfeito.
function hasZeroErrorBoard(){
  return Object.keys(GAMES).some(gameKey=>{
    if(!isBoardFullyComplete(gameKey)) return false;
    const game = GAMES[gameKey];
    return Array.from(game.solved).every(key=>{
      const entry = ProgressService.getBoneProgress(gameKey, key);
      return entry && entry.row === 0;
    });
  });
}
function hasExamPerfectScore(){
  return Object.keys(GAMES).some(gameKey => ExamService.hasPerfectScore(gameKey));
}

const ACHIEVEMENT_CATEGORIES = [
  { id:'learning',    title:'🥇 Medalhas de Aprendizagem' },
  { id:'progress',    title:'📚 Conquistas de Progresso' },
  { id:'masters',     title:'🎓 Mestres da Anatomia' },
  { id:'performance', title:'⚡ Desempenho' },
  { id:'locate',      title:'📍 Modo Localizar' }
];

const ACHIEVEMENTS = [
  // ---- Categoria 1 — Medalhas de Aprendizagem (total de acertos) ----
  { id:'first_correct', category:'learning', icon:'🥉', name:'Primeira Descoberta',
    description:'Acerte sua primeira resposta.', xp:100,
    check: () => getOverallProgress().hits >= 1,
    progress: () => ({ current: getOverallProgress().hits, target: 1 }) },
  { id:'ten_correct', category:'learning', icon:'🥈', name:'Aprendiz dos Ossos',
    description:'Acerte 10 respostas corretas.', xp:100,
    check: () => getOverallProgress().hits >= 10,
    progress: () => ({ current: getOverallProgress().hits, target: 10 }) },
  { id:'twentyfive_correct', category:'learning', icon:'🥈', name:'Conhecedor Anatômico',
    description:'Acerte 25 respostas corretas.', xp:150,
    check: () => getOverallProgress().hits >= 25,
    progress: () => ({ current: getOverallProgress().hits, target: 25 }) },
  { id:'fifty_correct', category:'learning', icon:'🥇', name:'Explorador do Esqueleto',
    description:'Acerte 50 respostas corretas.', xp:200,
    check: () => getOverallProgress().hits >= 50,
    progress: () => ({ current: getOverallProgress().hits, target: 50 }) },
  { id:'sixtyfive_correct', category:'learning', icon:'🏆', name:'Especialista em Osteologia',
    description:'Acerte 65 respostas corretas.', xp:250,
    check: () => getOverallProgress().hits >= 65,
    progress: () => ({ current: getOverallProgress().hits, target: 65 }) },
  { id:'legend_osteology', category:'learning', icon:'💎', name:'Lenda da Osteologia',
    description:'Acerte todos os 90 ossos existentes no aplicativo.', xp:500, special:true,
    check: () => { const o = getOverallProgress(); return o.total > 0 && o.hits >= o.total; },
    progress: () => { const o = getOverallProgress(); return { current:o.hits, target:o.total || 90 }; } },

  // ---- Categoria 2 — Conquistas de Progresso (pranchas concluídas) ----
  { id:'first_board', category:'progress', icon:'📖', name:'Primeira Prancha',
    description:'Complete qualquer prancha.', xp:100,
    check: () => getCompletedBoardsCount().completed >= 1,
    progress: () => ({ current: getCompletedBoardsCount().completed, target: 1 }) },
  { id:'three_boards', category:'progress', icon:'📚', name:'Colecionador',
    description:'Complete 3 pranchas.', xp:150,
    check: () => getCompletedBoardsCount().completed >= 3,
    progress: () => ({ current: getCompletedBoardsCount().completed, target: 3 }) },
  { id:'five_boards', category:'progress', icon:'📚', name:'Quase Lá',
    description:'Complete 5 pranchas.', xp:200,
    check: () => getCompletedBoardsCount().completed >= 5,
    progress: () => ({ current: getCompletedBoardsCount().completed, target: 5 }) },
  { id:'all_boards', category:'progress', icon:'👑', name:'Domínio Anatômico',
    description:'Complete todas as pranchas disponíveis.', xp:400, special:true,
    check: () => { const c = getCompletedBoardsCount(); return c.total > 0 && c.completed === c.total; },
    progress: () => { const c = getCompletedBoardsCount(); return { current:c.completed, target:c.total || 8 }; } },

  // ---- Categoria 3 — Mestres da Anatomia (domínio de região) ----
  // "Mestre do Crânio" usa a prancha "Ossos superiores" (upper) — é a
  // única prancha do app dedicada aos ossos do crânio; não existe uma
  // prancha separada só de "Crânio".
  { id:'master_cranio', category:'masters', icon:'🦴', name:'Mestre do Crânio',
    description:'Complete 100% da prancha do Crânio (Ossos superiores).', xp:250,
    unlockTitle:'Você agora é um Mestre do Crânio.',
    check: () => isBoardFullyComplete('upper'),
    progress: () => ({ current: isBoardFullyComplete('upper') ? 1 : 0, target: 1 }) },
  { id:'master_members', category:'masters', icon:'⚔️', name:'Mestre dos Membros',
    description:'Complete totalmente Ossos do braço, Ossos da mão, Membros inferiores e Ossos do pé.', xp:300,
    unlockTitle:'Você domina toda a anatomia dos membros.',
    check: () => boardsCompleteCount(['braco','mao','inferior','pe']) === 4,
    progress: () => ({ current: boardsCompleteCount(['braco','mao','inferior','pe']), target: 4 }) },
  { id:'master_trunk', category:'masters', icon:'🏛️', name:'Mestre do Tronco',
    description:'Complete totalmente Tórax e Coluna vertebral.', xp:300,
    unlockTitle:'Você domina a estrutura central do corpo humano.',
    check: () => boardsCompleteCount(['torax','coluna']) === 2,
    progress: () => ({ current: boardsCompleteCount(['torax','coluna']), target: 2 }) },
  { id:'master_skeleton', category:'masters', icon:'💀', name:'Mestre do Esqueleto',
    description:'Complete absolutamente todas as categorias do jogo.', xp:800, special:true,
    unlockTitle:'👑 MESTRE DO ESQUELETO — Você domina todo o sistema ósseo humano.',
    check: () => boardsCompleteCount(Object.keys(GAMES)) === Object.keys(GAMES).length,
    progress: () => ({ current: boardsCompleteCount(Object.keys(GAMES)), target: Object.keys(GAMES).length }) },

  // ---- Categoria 4 — Desempenho (habilidade durante as partidas) ----
  { id:'max_precision', category:'performance', icon:'🎯', name:'Precisão Máxima',
    description:'Complete uma prancha inteira sem cometer nenhum erro.', xp:150,
    check: () => hasZeroErrorBoard(),
    progress: () => ({ current: hasZeroErrorBoard() ? 1 : 0, target: 1 }) },
  { id:'speedster', category:'performance', icon:'⚡', name:'Velocista',
    description:'Complete qualquer prancha em menos de 2 minutos.', xp:150,
    // Só dá pra medir "essa conclusão foi rápida" no instante exato em
    // que a prancha é concluída (_boardRunStartedAt é zerado a cada troca
    // de aba/reinício) — por isso o progresso, pra exibição, só reflete
    // se já foi desbloqueada (não tem um "meio caminho" pra mostrar).
    check: () => Object.keys(GAMES).some(gameKey=>{
      const g = GAMES[gameKey];
      const total = uniqueBoneCount(g);
      return total > 0 && g.solved.size === total &&
        _boardRunGameKey === gameKey && _boardRunStartedAt &&
        (Date.now() - _boardRunStartedAt) < 120000;
    }),
    progress: () => ({ current: isAchievementUnlocked('speedster') ? 1 : 0, target: 1 }) },
  { id:'photo_memory', category:'performance', icon:'🧠', name:'Memória Fotográfica',
    description:'Acerte 20 respostas consecutivas sem errar.', xp:200,
    check: () => ProgressService.getBestCorrectStreak() >= 20,
    progress: () => ({ current: ProgressService.getBestCorrectStreak(), target: 20 }) },
  { id:'exam_perfection', category:'performance', icon:'👑', name:'Perfeição',
    description:'Complete um Modo Prova com 100% de acertos.', xp:300,
    check: () => hasExamPerfectScore(),
    progress: () => ({ current: hasExamPerfectScore() ? 1 : 0, target: 1 }) },

  // ---- Categoria 5 — Modo Localizar ----
  { id:'locate_first', category:'locate', icon:'📍', name:'Primeiro Localizado',
    description:'Localize corretamente seu primeiro osso.', xp:100,
    check: () => ProgressService.getLocateStats().hits >= 1,
    progress: () => ({ current: ProgressService.getLocateStats().hits, target: 1 }) },
  { id:'locate_25', category:'locate', icon:'🎯', name:'Caçador de Ossos',
    description:'Localize 25 ossos.', xp:150,
    check: () => ProgressService.getLocateStats().hits >= 25,
    progress: () => ({ current: ProgressService.getLocateStats().hits, target: 25 }) },
  { id:'locate_100', category:'locate', icon:'🧭', name:'Navegador Anatômico',
    description:'Localize 100 ossos.', xp:250,
    check: () => ProgressService.getLocateStats().hits >= 100,
    progress: () => ({ current: ProgressService.getLocateStats().hits, target: 100 }) },
  { id:'locate_master', category:'locate', icon:'👑', name:'Mestre da Localização',
    description:'Complete todas as categorias no modo Localizar.', xp:500, special:true,
    check: () => {
      const done = ProgressService.getLocateCompletedCategories();
      return Object.keys(GAMES).every(gk => done.includes(gk));
    },
    progress: () => {
      const done = ProgressService.getLocateCompletedCategories();
      return { current: Object.keys(GAMES).filter(gk=>done.includes(gk)).length, target: Object.keys(GAMES).length };
    } }
];

// AchievementService.init() precisa da lista ACHIEVEMENTS já pronta
// (pra saber quais ids são válidos e descartar os antigos) — chamado
// uma vez, na sequência de inicialização no fim deste arquivo.
function isAchievementUnlocked(id){
  return AchievementService.isUnlocked(id);
}
function unlockedAchievementDate(id){
  return AchievementService.unlockedDate(id);
}

// Reavalia todas as conquistas ainda bloqueadas contra o estado atual
// do jogo. Sempre atualiza BoardProgress antes, pra nunca checar em
// cima de um dado velho.
function checkAchievements(){
  refreshAllBoardProgress();
  const newlyUnlocked = AchievementService.evaluate(ACHIEVEMENTS);
  newlyUnlocked.forEach(a=>{
    ProgressService.addXP(a.xp);
    SoundManager.play('achievement');
    queueAchievementPopup(a);
  });
  renderTopBar();
  if(_currentScreen === 'stats') renderAchievementCategories();
}

// Barra superior fixa — resumo rápido visível em qualquer tela (início,
// pranchas, estatísticas, configurações). Só leitura, reaproveita os
// mesmos agregados já usados no resto do app.
// Cache em memória do documento de perfil (nome/telefone/foto/data de
// criação) do usuário logado — carregado uma vez no login e atualizado
// sempre que o próprio usuário edita algo em Configurações da conta.
let _currentUserProfile = null;

function renderTopBar(){
  document.getElementById('topBarProgress').textContent = getOverallProgress().percent + '%';
  document.getElementById('topBarAchievements').textContent = AchievementService.unlockedCount() + '/' + ACHIEVEMENTS.length;
  document.getElementById('topBarTime').textContent = formatDurationLong(getTotalTimeSpentMs());
  document.getElementById('topBarAccuracy').textContent = getAccuracyRate() + '%';

  const user = FIREBASE_CONFIGURED ? AuthService.getCurrentUser() : null;
  const displayName = user ? ((_currentUserProfile && _currentUserProfile.name) || user.displayName || user.email) : 'Visitante';
  document.getElementById('topBarUserName').textContent = displayName || 'Visitante';
  const avatarEl = document.getElementById('topBarAvatar');
  if(_currentUserProfile && _currentUserProfile.photoDataUrl){
    avatarEl.innerHTML = '<img src="' + _currentUserProfile.photoDataUrl + '" alt="" class="top-bar-avatar-img">';
  } else {
    avatarEl.textContent = '👤';
  }
}

// Popup elegante — fica no canto inferior, some sozinho. Se mais de uma
// conquista desbloquear ao mesmo tempo, mostra uma de cada vez (fila).
let _achievementQueue = [];
let _achievementPopupBusy = false;
function queueAchievementPopup(achievement){
  _achievementQueue.push(achievement);
  if(!_achievementPopupBusy) showNextAchievementPopup();
}
function showNextAchievementPopup(){
  const next = _achievementQueue.shift();
  if(!next){ _achievementPopupBusy = false; return; }
  _achievementPopupBusy = true;
  const el = document.createElement('div');
  el.className = 'achievement-toast';
  el.innerHTML =
    '<div class="achievement-toast-icon">' + next.icon + '</div>' +
    '<div class="achievement-toast-text">' +
      '<div class="achievement-toast-title">🏆 Nova conquista</div>' +
      '<div class="achievement-toast-label">' + next.name + '</div>' +
      '<div class="achievement-toast-desc">"' + next.description + '"</div>' +
      '<div class="achievement-toast-xp">+' + next.xp + ' XP</div>' +
    '</div>';
  document.body.appendChild(el);
  requestAnimationFrame(()=> requestAnimationFrame(()=> el.classList.add('show')));
  setTimeout(()=>{
    el.classList.remove('show');
    setTimeout(()=>{ el.remove(); showNextAchievementPopup(); }, 400);
  }, 3800);
}

// Monta a tela de conquistas inteira, agrupada por categoria — cada
// medalha mostra ícone/nome/descrição, estado (🔒/🟡/🟢), barra de
// progresso quando faz sentido (target > 1) e, se já desbloqueada, a
// data e o "título recebido" (só as conquistas de Mestre têm esse
// campo). Chamada sempre que a tela de estatísticas é aberta e de novo
// toda vez que uma conquista nova é avaliada enquanto ela está visível.
function renderAchievementCategories(){
  const wrap = document.getElementById('achievementCategories');
  if(!wrap) return;
  wrap.innerHTML = ACHIEVEMENT_CATEGORIES.map(cat=>{
    const cards = ACHIEVEMENTS.filter(a=>a.category===cat.id).map(a=>{
      const unlocked = isAchievementUnlocked(a.id);
      let progress = { current:0, target:1 };
      try { progress = a.progress(); } catch(e){}
      const current = Math.min(progress.current, progress.target);
      const pct = progress.target ? Math.min(100, Math.round((current / progress.target) * 100)) : 0;
      const state = unlocked ? 'unlocked' : (current > 0 ? 'in-progress' : 'locked');
      const stateLabel = unlocked ? '🟢 Concluída' : (current > 0 ? '🟡 Em progresso' : '🔒 Bloqueada');
      const showBar = progress.target > 1;
      const date = unlockedAchievementDate(a.id);
      return '<div class="achv-card ' + state + (a.special ? ' special' : '') + '">' +
          '<div class="achv-card-icon">' + a.icon + '</div>' +
          '<div class="achv-card-body">' +
            '<div class="achv-card-name">' + a.name + '</div>' +
            '<div class="achv-card-desc">' + a.description + '</div>' +
            (showBar ?
              '<div class="achv-card-progress">' +
                '<div class="achv-progress-track"><div class="achv-progress-fill" data-target="' + pct + '" style="width:0%"></div></div>' +
                '<div class="achv-progress-label">' + current + ' / ' + progress.target + '</div>' +
              '</div>' : ''
            ) +
            '<div class="achv-card-footer">' +
              '<span class="achv-card-state">' + stateLabel + '</span>' +
              (unlocked && date ? '<span class="achv-card-date">' + date + '</span>' : '') +
            '</div>' +
            (unlocked && a.unlockTitle ? '<div class="achv-card-quote">“' + a.unlockTitle + '”</div>' : '') +
          '</div>' +
        '</div>';
    }).join('');
    return '<div class="achv-category">' +
      '<div class="achv-category-title">' + cat.title + '</div>' +
      '<div class="achv-category-grid">' + cards + '</div>' +
    '</div>';
  }).join('');
  requestAnimationFrame(()=>{
    wrap.querySelectorAll('.achv-progress-fill').forEach(el=>{
      el.style.width = el.dataset.target + '%';
    });
  });
}

let currentGameKey = "main";
let puzzle = null;
// Modo revisão: quando true, buildHotspots()/buildList() só mostram os
// ossos que estão em game.failed (os que o usuário errou antes). Sai
// sozinho assim que o último osso revisado é acertado.
let _reviewMode = false;
// Marca o início de uma tentativa "limpa" (prancha 0/0) na aba atual —
// usado só pela conquista ⚡ Velocista, pra saber se a prancha acabou de
// ser concluída em menos de 2 minutos. Fica null quando não há como
// medir de forma justa (ex.: prancha retomada já com progresso salvo).
let _boardRunStartedAt = null;
let _boardRunGameKey = null;
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
      const entry = ProgressService.getBoneProgress(gameKey, b.key);
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
  startBoardTimer(tabKey);
  ProgressService.saveLastBoard(tabKey);
  puzzle = null;
  _reviewMode = false;
  // Só dá pra medir uma tentativa "rápida" (conquista Velocista) se a
  // prancha está mesmo zerada agora — senão não tem como saber quando
  // esse progresso salvo começou de verdade.
  const freshBoard = GAMES[tabKey].solved.size === 0 && GAMES[tabKey].failed.size === 0;
  _boardRunGameKey = tabKey;
  _boardRunStartedAt = freshBoard ? Date.now() : null;
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
    // sem busca e sem geração automática de duplicados. Em modo revisão,
    // só os ossos ainda em game.failed aparecem — a numeração continua
    // sendo a mesma de sempre (calculada acima, antes do filtro).
    view.bones.forEach(b=>{
      if(_reviewMode && !game.failed.has(b.key)) return;
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
    if(_reviewMode && !game.failed.has(b.key)) return;
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
  if(game.failed.has(key) && !_reviewMode){
    document.getElementById('instructions').textContent = 'Suas 5 tentativas para ' + labelFor(key) + ' já acabaram. Toque em "↻ Reiniciar progresso" ou em "🔍 Revisar" para tentar de novo.';
    puzzle = null;
    document.getElementById('puzzleArea').innerHTML = '';
    refreshVisualStates();
    scrollToPanel();
    return;
  }
  if(game.failed.has(key) && _reviewMode){
    // Em revisão, tocar num osso errado libera uma tentativa nova pra
    // ele — sem precisar reiniciar a prancha inteira.
    game.failed.delete(key);
    ProgressService.clearBoneProgress(currentGameKey, key);
  }
  const word = wordFor(key);
  const saved = ProgressService.getBoneProgress(currentGameKey, key);
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
  // --letters controla, no CSS, a largura de cada quadradinho (calc
  // dividindo 100% pelo número de letras) — assim uma palavra longa
  // (ex.: "CUNEIFORMEINTERMEDIAL") nunca estoura a borda marrom do
  // painel, ela só encolhe os quadrados pra caber na largura disponível.
  let html = '<div class="grid" style="--letters:'+len+'">';
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
  // Guarda gameKey/key em variáveis locais antes de qualquer coisa que
  // possa mexer no puzzle: updateProgress() zera `puzzle` na hora (fora
  // do modo revisão) quando o osso concluído era o último pendente, e os
  // setTimeout abaixo só rodam 900ms depois — se lessem puzzle.gameKey/
  // puzzle.key nesse momento, encontrariam null e a tela de conclusão
  // (ou o avanço automático) simplesmente não aconteceria.
  const gameKey = puzzle.gameKey;
  const key = puzzle.key;
  const result = evaluateGuess(g, puzzle.word);
  puzzle.guesses[puzzle.row] = {letters:g.split(''), result};
  const rank = {absent:0,present:1,correct:2};
  g.split('').forEach((ch,i)=>{
    const st = result[i];
    const prev = puzzle.keyStates[ch];
    if(!prev || rank[st]>rank[prev]) puzzle.keyStates[ch]=st;
  });
  const game = GAMES[gameKey];
  if(g === puzzle.word){
    puzzle.solved = true;
    game.solved.add(key);
    ProgressService.registerCorrectAnswer();
    SoundManager.play('correct');
    ProgressService.addXP(XP_PER_CORRECT);
    ProgressService.addIdentifyXP(XP_PER_CORRECT);
    document.getElementById('instructions').textContent = '✓ Correto! Era ' + labelFor(key) + '.';
    updateProgress();
    refreshVisualStates();
    if(game.solved.size === uniqueBoneCount(game)){
      ProgressService.addXP(XP_BOARD_COMPLETE + XP_PERFECT_BONUS);
      ProgressService.addIdentifyXP(XP_BOARD_COMPLETE + XP_PERFECT_BONUS);
      setTimeout(()=>showCompletionModal(gameKey), 900);
    } else {
      setTimeout(()=>advanceToNextBone(gameKey, key), 900);
    }
  } else {
    SoundManager.play('wrong');
    puzzle.row++;
    puzzle.currentGuess='';
    if(puzzle.row>=MAX_ATTEMPTS){
      puzzle.failed = true;
      game.failed.add(key);
      ProgressService.registerWrongAnswer();
      document.getElementById('instructions').textContent = 'Não foi dessa vez — era ' + labelFor(key) + ' (' + puzzle.word + ').';
      updateProgress();
      refreshVisualStates();
      // Esgotou as tentativas: avança pro próximo osso pendente, igual
      // já acontecia ao acertar — advanceToNextBone já pula ossos
      // acertados e errados, então não repete o que acabou de falhar.
      setTimeout(()=>advanceToNextBone(gameKey, key), 900);
    }
  }
  persistPuzzleProgress();
  checkAchievements();
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

// ============================================================
// TELA DE PRANCHA CONCLUÍDA — aparece uma vez, no instante em que o
// último osso de uma prancha é acertado (chamado a partir de
// submitGuess, no lugar de advanceToNextBone quando não sobra próximo
// osso). "XP recebido" nessa tela é só o resumo do que essa prancha
// deu (já foi somado ao total em addXP() no submitGuess) — não soma
// XP de novo aqui.
// ============================================================
let _completionGameKey = null;

function computeBoardXP(hits){
  return hits * XP_PER_CORRECT + XP_BOARD_COMPLETE + XP_PERFECT_BONUS;
}

function showCompletionModal(gameKey){
  const game = GAMES[gameKey];
  const bp = refreshBoardProgress(gameKey);
  const attempted = bp.hits + bp.misses;
  const accuracy = attempted ? Math.round((bp.hits / attempted) * 100) : 100;
  _completionGameKey = gameKey;
  document.getElementById('completionBoardName').textContent = game.title;
  document.getElementById('completionTime').textContent = bp.timeSpentLabel;
  document.getElementById('completionHits').textContent = bp.hits;
  document.getElementById('completionMisses').textContent = bp.misses;
  document.getElementById('completionAccuracy').textContent = accuracy + '%';
  document.getElementById('completionXP').textContent = '+' + computeBoardXP(bp.hits) + ' XP';
  document.getElementById('completionModal').style.display = 'flex';
  spawnConfetti();
  SoundManager.play('complete');
  renderTopBar();
}

// Confete discreto — poucas peças, cores da própria paleta do site,
// caindo só na largura da prancha (não a tela toda). Cada peça se
// remove sozinha quando a animação termina.
const CONFETTI_COLORS = ['#A6822E', '#22c55e', '#2A2118', '#ef4444', '#EFE6D2'];
function spawnConfetti(){
  const plate = document.querySelector('.plate');
  const rect = plate.getBoundingClientRect();
  const count = 16;
  for(let i=0;i<count;i++){
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    const left = rect.left + Math.random() * rect.width;
    const delay = Math.random() * 0.3;
    const duration = 1.6 + Math.random() * 0.8;
    piece.style.left = left + 'px';
    piece.style.background = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
    piece.style.animationDelay = delay + 's';
    piece.style.animationDuration = duration + 's';
    document.body.appendChild(piece);
    setTimeout(()=> piece.remove(), (delay + duration) * 1000 + 100);
  }
}
function hideCompletionModal(){
  document.getElementById('completionModal').style.display = 'none';
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
  ProgressService.setBoneProgress(puzzle.gameKey, puzzle.key, {
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
  document.getElementById('reviewBtn').style.display = (!_reviewMode && game.failed.size > 0) ? '' : 'none';
  if(_reviewMode && game.failed.size === 0){
    _reviewMode = false;
    puzzle = null;
    document.getElementById('puzzleArea').innerHTML = '';
    document.getElementById('instructions').textContent = 'Parabéns, agora você domina esta prancha.';
    buildHotspots();
    buildList();
  }
  refreshBoardProgress(currentGameKey);
  renderTopBar();
}

function resetGame(){
  const game = currentGame();
  // Só chega aqui por clique explícito no botão "Reiniciar progresso" —
  // a página nunca reinicia tentativas sozinha.
  SoundManager.play('restart');
  allBones(game).forEach(b=>{
    ProgressService.clearBoneProgress(currentGameKey, b.key);
  });
  game.solved = new Set();
  game.failed = new Set();
  puzzle = null;
  _reviewMode = false;
  _boardRunGameKey = currentGameKey;
  _boardRunStartedAt = Date.now();
  document.getElementById('puzzleArea').innerHTML='';
  document.getElementById('instructions').textContent = 'Toque em qualquer ponto numerado no esqueleto — ou escolha um número na lista abaixo — para começar a adivinhar.';
  buildHotspots();
  buildList();
  updateProgress();
  refreshVisualStates();
}

// Filtra a prancha atual pra mostrar só os ossos que estão em
// game.failed (errados/esgotados antes). Só é chamado pelo botão
// "🔍 Revisar", que só aparece quando existe pelo menos um osso assim.
function startReview(){
  const game = currentGame();
  if(game.failed.size === 0) return;
  _reviewMode = true;
  puzzle = null;
  document.getElementById('puzzleArea').innerHTML = '';
  document.getElementById('instructions').textContent = 'Modo revisão — toque num osso errado abaixo pra tentar de novo.';
  buildHotspots();
  buildList();
  updateProgress();
}

// Apaga o progresso (acertos/erros por osso), o tempo estudado, a
// sequência de dias, a sequência de acertos, as conquistas, o XP/nível
// e a última prancha visitada — de todas as pranchas, não só da
// atual. Só é chamado pelo botão de Configurações.
function resetAllProgress(){
  const ok = confirm('Isso vai apagar o progresso de todas as pranchas, o tempo estudado, as sequências, as conquistas e o XP. Não dá pra desfazer. Continuar?');
  if(!ok) return;
  ProgressService.clearAllBoneProgress();
  ProgressService.clearBoardTime();
  ProgressService.clearBoardProgressSnapshots();
  ProgressService.clearDayStreak();
  ProgressService.clearLastBoard();
  ProgressService.clearCorrectStreak();
  ProgressService.clearXP();
  ProgressService.clearIdentifyStats();
  ProgressService.clearLocateStats();
  ProgressService.clearLocateCompletedCategories();
  AchievementService.resetAll();
  Object.keys(GAMES).forEach(k=>{
    GAMES[k].solved = new Set();
    GAMES[k].failed = new Set();
  });
  Object.keys(BoardProgress).forEach(k=> delete BoardProgress[k]);
  refreshAllBoardProgress();
  _currentStreak = ProgressService.updateDayStreak();
  showScreen('home');
}

// Reset menor, separado do "Limpar progresso": só apaga as conquistas
// desbloqueadas, sem mexer em acertos/erros, tempo, XP ou sequências.
function resetAchievements(){
  const ok = confirm('Isso vai apagar todas as conquistas desbloqueadas (o resto do progresso continua intacto). Continuar?');
  if(!ok) return;
  AchievementService.resetAll();
  renderTopBar();
  if(_currentScreen === 'stats') renderStatsScreen();
}

// ============================================================
// NAVEGAÇÃO ENTRE TELAS — início / pranchas / estatísticas /
// configurações. Só troca qual bloco fica visível; a prancha em si
// (tabs, hotspots, teclado etc.) continua exatamente como já era.
// ============================================================
let _currentScreen = 'home';

function showScreen(name){
  ['auth','home','boards','flashcards','stats','settings','profile','admin','modes','locateSetup','locate','examSetup','exam','examResult'].forEach(s=>{
    const el = document.getElementById('screen-'+s);
    if(el) el.style.display = (s===name) ? '' : 'none';
  });
  _currentScreen = name;
  if(name !== 'boards') stopBoardTimer();
  if(name === 'home'){
    document.getElementById('plateLabel').textContent = 'Início';
    renderHomeStats();
  } else if(name === 'stats'){
    document.getElementById('plateLabel').textContent = 'Estatísticas';
    renderStatsScreen();
  } else if(name === 'settings'){
    document.getElementById('plateLabel').textContent = 'Configurações';
  } else if(name === 'profile'){
    document.getElementById('plateLabel').textContent = 'Meu Perfil';
    renderProfileScreen();
  } else if(name === 'admin'){
    document.getElementById('plateLabel').textContent = 'Modo Admin';
    renderAdminScreen();
  } else if(name === 'modes'){
    document.getElementById('plateLabel').textContent = 'Modos de Jogo';
  } else if(name === 'locateSetup'){
    document.getElementById('plateLabel').textContent = 'Localizar o Osso';
    renderLocateSetup();
  } else if(name === 'locate'){
    document.getElementById('plateLabel').textContent = 'Localizar o Osso';
  } else if(name === 'flashcards'){
    document.getElementById('plateLabel').textContent = 'Flashcards';
  } else if(name === 'examSetup'){
    document.getElementById('plateLabel').textContent = 'Modo Prova';
    renderExamSetup();
  } else if(name === 'exam'){
    document.getElementById('plateLabel').textContent = 'Modo Prova';
  } else if(name === 'examResult'){
    document.getElementById('plateLabel').textContent = 'Modo Prova';
    renderExamResult();
  } else if(name === 'auth'){
    document.getElementById('plateLabel').textContent = 'Entrar';
  }
  if(name === 'stats' || name === 'settings' || name === 'profile' || name === 'admin' || name === 'modes' || name === 'locateSetup' || name === 'flashcards' || name === 'examSetup' || name === 'examResult') SoundManager.play('menu');
  // Modo Prova pede "sem progresso"; Flashcards pede o mesmo (sem
  // pontuação/XP/progresso visível); o Localizar mostra os próprios
  // números no HUD da tela, então some a barra também; na tela de login
  // ainda não existe usuário — a barra superior some nessas telas e
  // volta normal em qualquer outra.
  document.getElementById('topBar').style.display = (name === 'exam' || name === 'flashcards' || name === 'locate' || name === 'auth') ? 'none' : '';
  if(name !== 'auth') renderTopBar();
  // Numeração de página decorativa, no rodapé — só estética, não é uma
  // paginação real (o app inteiro é uma página só).
  const PAGE_NUMBERS = {home:1, boards:2, flashcards:3, stats:4, settings:5, profile:6, admin:7, modes:8, locateSetup:9, locate:10, examSetup:11, exam:12, examResult:13};
  const pageEl = document.getElementById('pageNumber');
  if(pageEl) pageEl.textContent = '— ' + (PAGE_NUMBERS[name] || 1) + ' —';
}

function goAllBoards(){
  showScreen('boards');
  switchTab('main');
}

function renderHomeStats(){
  refreshAllBoardProgress();
  const overall = getOverallProgress();
  document.getElementById('homePercent').textContent = overall.percent + '%';
  document.getElementById('homeProgressFill').style.width = overall.percent + '%';
  document.getElementById('homeProgressText').textContent = overall.hits + ' de ' + overall.total + ' ossos aprendidos';
  const comp = getCompletedBoardsCount();
  document.getElementById('homeCompletedBoards').textContent = comp.completed + ' de ' + comp.total;
  document.getElementById('homeTimeStudied').textContent = formatDurationLong(getTotalTimeSpentMs());
  document.getElementById('homeStreak').textContent = _currentStreak + (_currentStreak === 1 ? ' dia' : ' dias');

  const xpProgress = ProgressService.getXPProgress();
  document.getElementById('homeLevel').textContent = xpProgress.level;
  document.getElementById('homeXPFill').style.width = xpProgress.percent + '%';
  document.getElementById('homeXPText').textContent = xpProgress.xp + ' XP · faltam ' + (xpProgress.nextThreshold - xpProgress.xp) + ' XP pro nível ' + (xpProgress.level + 1);
  SoundManager.play('progress');
}

function renderStatsScreen(){
  refreshAllBoardProgress();

  const overall = getOverallProgress();
  const misses = getTotalMisses();
  document.getElementById('statTotalHits').textContent = overall.hits;
  document.getElementById('statTotalMisses').textContent = misses;
  document.getElementById('statAccuracy').textContent = getAccuracyRate() + '%';
  document.getElementById('statTimeStudied').textContent = formatDurationLong(getTotalTimeSpentMs());

  const { best, worst } = getBestAndWorstBoard();
  document.getElementById('statBestBoard').textContent = best ? best.title : '—';
  document.getElementById('statWorstBoard').textContent = worst ? worst.title : '—';

  const lastKey = ProgressService.getLastBoardRaw();
  document.getElementById('statLastBoard').textContent = (lastKey && GAMES[lastKey]) ? GAMES[lastKey].title : '—';

  document.getElementById('statBestStreak').textContent = ProgressService.getBestCorrectStreak();

  const xpProgress = ProgressService.getXPProgress();
  document.getElementById('statLevel').textContent = xpProgress.level;
  document.getElementById('statTotalXP').textContent = xpProgress.xp;

  // Identificar já usa os agregados globais (hoje 100% vindos desse
  // modo) pra precisão/tempo; só o XP precisa de um contador próprio,
  // já que o total geral agora mistura os dois modos.
  document.getElementById('statIdentifyAccuracy').textContent = getAccuracyRate() + '%';
  document.getElementById('statIdentifyTime').textContent = formatDurationLong(getTotalTimeSpentMs());
  document.getElementById('statIdentifyXP').textContent = ProgressService.getIdentifyStats().xp;

  const locateStats = ProgressService.getLocateStats();
  const locateAttempted = locateStats.hits + locateStats.misses;
  document.getElementById('statLocateAccuracy').textContent = (locateAttempted ? Math.round((locateStats.hits/locateAttempted)*100) : 0) + '%';
  document.getElementById('statLocateTime').textContent = formatDurationLong(locateStats.timeMs);
  document.getElementById('statLocateXP').textContent = locateStats.xp;

  renderAchievementCategories();

  const list = document.getElementById('statsList');
  list.innerHTML = allBoardProgress().map(p=>
    '<div class="stats-row">' +
      '<div class="stats-row-title">' + p.title + '</div>' +
      '<div class="stats-row-bar"><div class="stats-row-fill" data-target="' + p.percent + '" style="width:0%"></div></div>' +
      '<div class="stats-row-meta">' + p.hits + '/' + p.total + ' ossos · ' + p.percent + '% · ' + p.status + ' · ' + p.timeSpentLabel + '</div>' +
    '</div>'
  ).join('');
  // Nasce em 0% e só na próxima animação frame ganha a largura real,
  // pra a barra preencher animada (a transição já está no CSS) em vez
  // de aparecer pronta.
  requestAnimationFrame(()=>{
    list.querySelectorAll('.stats-row-fill').forEach(el=>{
      el.style.width = el.dataset.target + '%';
    });
  });
}

// ============================================================
// MODO PROVA — modo totalmente separado do estudo normal: nenhuma
// resposta é revelada, não há barra de progresso do osso nem feedback
// letra-a-letra (o "ajuda" do modo Wordle), e o nome do osso nunca
// aparece na tela até acabar a prova (e mesmo assim só no histórico).
// Um cronômetro roda do início ao fim; no final mostra nota, tempo,
// acertos, erros e o ranking pessoal daquela prancha. O histórico em si
// mora em services/examService.js (não mexe em ProgressService, XP,
// conquistas ou BoardProgress do modo de estudo).
// ============================================================

function shuffledArray(arr){
  const copy = arr.slice();
  for(let i=copy.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [copy[i],copy[j]] = [copy[j],copy[i]];
  }
  return copy;
}

function normalizeExamAnswer(s){
  return s.normalize('NFD').replace(/[̀-ͯ]/g,'').toUpperCase().trim();
}

let examState = null;
let _examTimerInterval = null;

function renderExamSetup(){
  const wrap = document.getElementById('examBoardList');
  wrap.innerHTML = Object.keys(GAMES).map(gameKey=>
    '<button type="button" class="home-btn" data-exam-board="' + gameKey + '">' + GAMES[gameKey].title + '</button>'
  ).join('');
  wrap.querySelectorAll('[data-exam-board]').forEach(btn=>{
    btn.addEventListener('click', ()=>startExam(btn.dataset.examBoard));
  });
}

function startExam(gameKey){
  const game = GAMES[gameKey];
  const seen = new Set();
  const questions = [];
  game.views.forEach(view=>{
    view.bones.forEach(b=>{
      if(seen.has(b.key)) return;
      seen.add(b.key);
      questions.push({key:b.key, word:b.word, img:view.img, x:b.x, y:b.y});
    });
  });
  examState = {
    gameKey,
    questions: shuffledArray(questions),
    index: 0,
    hits: 0,
    misses: 0,
    startedAt: Date.now(),
    finished: false
  };
  showScreen('exam');
  renderExamQuestion();
  clearInterval(_examTimerInterval);
  _examTimerInterval = setInterval(updateExamTimer, 500);
}

function updateExamTimer(){
  if(!examState) return;
  document.getElementById('examTimer').textContent = formatDuration(Date.now() - examState.startedAt);
}

function renderExamQuestion(){
  const q = examState.questions[examState.index];
  document.getElementById('examQuestionCount').textContent = 'Questão ' + (examState.index+1) + ' de ' + examState.questions.length;
  document.getElementById('examSkelWrap').innerHTML =
    '<div class="exam-skel-inner">' +
      '<img src="' + q.img + '" alt="Esqueleto humano">' +
      '<span class="exam-marker" style="left:' + q.x + '%; top:' + q.y + '%"></span>' +
    '</div>';
  const input = document.getElementById('examInput');
  input.value = '';
  input.classList.remove('exam-input-correct','exam-input-wrong');
  input.focus();
}

function submitExamAnswer(){
  if(!examState || examState.finished) return;
  const input = document.getElementById('examInput');
  if(input.disabled) return;
  const guess = normalizeExamAnswer(input.value);
  if(!guess) return;
  const q = examState.questions[examState.index];
  const correct = guess === q.word;
  if(correct){ examState.hits++; SoundManager.play('correct'); }
  else { examState.misses++; SoundManager.play('wrong'); }
  input.classList.add(correct ? 'exam-input-correct' : 'exam-input-wrong');
  input.disabled = true;
  setTimeout(()=>{
    input.disabled = false;
    examState.index++;
    if(examState.index >= examState.questions.length){
      finishExam();
    } else {
      renderExamQuestion();
    }
  }, 550);
}

function finishExam(){
  examState.finished = true;
  clearInterval(_examTimerInterval);
  ExamService.recordAttempt(examState.gameKey, {
    hits: examState.hits,
    misses: examState.misses,
    total: examState.questions.length,
    timeMs: Date.now() - examState.startedAt
  });
  // A prova em si continua sem XP/progresso visível — isso aqui só
  // deixa a conquista "👑 Perfeição" (100% no Modo Prova) disponível
  // pro sistema de conquistas, que é um mecanismo à parte.
  checkAchievements();
  showScreen('examResult');
}

function renderExamResult(){
  const gameKey = examState.gameKey;
  const history = ExamService.getHistory(gameKey);
  const last = history[history.length-1];
  document.getElementById('examResultBoardName').textContent = GAMES[gameKey].title;
  document.getElementById('examResultScore').textContent = last.score.toFixed(1);
  document.getElementById('examResultTime').textContent = formatDuration(last.timeMs);
  document.getElementById('examResultHits').textContent = last.hits;
  document.getElementById('examResultMisses').textContent = last.misses;

  const ranked = ExamService.getBestResults(gameKey, 10);
  document.getElementById('examRankingList').innerHTML = ranked.map((r,i)=>
    '<div class="exam-ranking-row' + (r===last ? ' current' : '') + '">' +
      '<span class="exam-ranking-pos">' + (i+1) + 'º</span>' +
      '<span class="exam-ranking-score">' + r.score.toFixed(1) + '</span>' +
      '<span class="exam-ranking-meta">' + r.hits + '/' + r.total + ' · ' + formatDuration(r.timeMs) + ' · ' + r.date + '</span>' +
    '</div>'
  ).join('');
}

function cancelExam(){
  clearInterval(_examTimerInterval);
  examState = null;
  showScreen('home');
}

// ============================================================
// FLASHCARDS (MODO ESTUDO) — atlas anatômico interativo, sem jogo:
// nada aqui toca ProgressStore, BoardProgress, GAMES.solved/failed, XP,
// conquistas, sequências ou som de acerto/erro. Estado 100% próprio
// (flashState) — só navegação livre pelas mesmas 8 categorias de
// sempre, mostrando nome/grupo/descrição/função de cada osso.
// ============================================================
let flashState = {
  gameKey: 'main',
  bones: [],        // [{key, word, label, x, y, yStart?, yEnd?, img, number}]
  index: 0,
  viewMode: 'info'  // 'image' | 'list' | 'info'
};

function flashUniqueBones(gameKey){
  const game = GAMES[gameKey];
  const seen = new Set();
  const out = [];
  let n = 0;
  game.views.forEach(view=>{
    view.bones.forEach(b=>{
      if(seen.has(b.key)) return;
      seen.add(b.key);
      n++;
      out.push(Object.assign({}, b, {img:view.img, number:n}));
    });
  });
  return out;
}

function renderFlashTabs(){
  const wrap = document.getElementById('flashTabs');
  wrap.innerHTML = Object.keys(GAMES).map(gameKey=>
    '<button type="button" class="tab" data-flash-tab="' + gameKey + '">' + GAMES[gameKey].title + '</button>'
  ).join('');
  wrap.querySelectorAll('[data-flash-tab]').forEach(btn=>{
    btn.addEventListener('click', ()=>switchFlashTab(btn.dataset.flashTab));
  });
}

function switchFlashTab(gameKey){
  flashState.gameKey = gameKey;
  flashState.bones = flashUniqueBones(gameKey);
  flashState.index = 0;
  document.querySelectorAll('#flashTabs .tab').forEach(t=>t.classList.toggle('active', t.dataset.flashTab===gameKey));
  document.getElementById('flashSearchInput').value = '';
  renderFlashSkeleton();
  renderFlashSide();
  updateFlashNav();
}

function renderFlashSkeleton(){
  const wrap = document.getElementById('flashSkelWrap');
  wrap.innerHTML = '';
  const game = GAMES[flashState.gameKey];
  // Marcadores vêm de game.views[].bones (não de flashState.bones, que já
  // está deduplicado por key) — um osso visível em mais de uma foto (ex.:
  // parietal nas vistas anterior e posterior) precisa de um marcador em
  // cada uma; o número mostrado, esse sim, é sempre o mesmo (numberOf).
  const numberOf = {};
  flashState.bones.forEach(b=>{ numberOf[b.key] = b.number; });
  game.views.forEach(view=>{
    const inner = document.createElement('div');
    inner.className = 'flash-skel-inner';
    const img = document.createElement('img');
    img.src = view.img;
    img.alt = 'Esqueleto humano';
    inner.appendChild(img);
    view.bones.forEach(b=>{
      const number = numberOf[b.key];
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
      el.dataset.boneKey = b.key;
      if(game.markerStyle === 'label'){
        el.className = 'flash-marker flash-marker-label';
        el.textContent = 'Região ' + number;
      } else {
        el.className = 'flash-marker';
        el.textContent = number;
      }
      el.setAttribute('aria-label', b.label);
      el.addEventListener('click', ()=>selectFlashBoneByKey(b.key));
      inner.appendChild(el);
    });
    wrap.appendChild(inner);
  });
  refreshFlashMarkerStates();
}

function refreshFlashMarkerStates(){
  const current = flashState.bones[flashState.index];
  document.querySelectorAll('#flashSkelWrap .flash-marker').forEach(el=>{
    el.classList.toggle('active', !!current && el.dataset.boneKey === current.key);
  });
}

function renderFlashSide(){
  const side = document.getElementById('flashSide');
  if(flashState.viewMode === 'image'){
    side.innerHTML = '';
    side.style.display = 'none';
    return;
  }
  side.style.display = '';
  if(flashState.viewMode === 'list'){
    renderFlashList(side);
  } else {
    renderFlashInfoCard(side);
  }
}

function renderFlashList(container){
  container.innerHTML = '<div class="boneList" id="flashList"></div>';
  const list = document.getElementById('flashList');
  flashState.bones.forEach(b=>{
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.dataset.boneKey = b.key;
    btn.innerHTML = '<span class="num">'+b.number+'</span><span class="txt">'+b.label+'</span>';
    btn.addEventListener('click', ()=>selectFlashBoneByKey(b.key));
    list.appendChild(btn);
  });
  refreshFlashListState();
}

function refreshFlashListState(){
  const current = flashState.bones[flashState.index];
  document.querySelectorAll('#flashList button').forEach(btn=>{
    btn.classList.toggle('active-item', !!current && btn.dataset.boneKey === current.key);
  });
}

function renderFlashInfoCard(container){
  const b = flashState.bones[flashState.index];
  if(!b){ container.innerHTML = ''; return; }
  const info = BONE_INFO[b.word] || {};
  const rows = FLASH_INFO_FIELDS
    .filter(f=>info[f.key])
    .map(f=>'<div class="flash-info-row"><div class="flash-info-label">'+f.label+'</div><div class="flash-info-value">'+info[f.key]+'</div></div>')
    .join('');
  container.innerHTML =
    '<div class="flash-info-card">' +
      '<div class="flash-info-name">' + b.label + '</div>' +
      '<div class="flash-info-row"><div class="flash-info-label">Nome anatômico</div><div class="flash-info-value">' + b.label + '</div></div>' +
      '<div class="flash-info-row"><div class="flash-info-label">Grupo</div><div class="flash-info-value">' + GAMES[flashState.gameKey].title + '</div></div>' +
      rows +
    '</div>';
}

function selectFlashBoneByKey(key){
  const idx = flashState.bones.findIndex(b=>b.key===key);
  if(idx !== -1) selectFlashIndex(idx);
}

function selectFlashIndex(idx){
  if(!flashState.bones.length) return;
  flashState.index = ((idx % flashState.bones.length) + flashState.bones.length) % flashState.bones.length;
  refreshFlashMarkerStates();
  if(flashState.viewMode === 'list') refreshFlashListState();
  else if(flashState.viewMode === 'info') renderFlashInfoCard(document.getElementById('flashSide'));
  updateFlashNav();
  const activeListBtn = document.querySelector('#flashList button.active-item');
  if(activeListBtn) activeListBtn.scrollIntoView({behavior:'smooth', block:'nearest'});
}

function flashPrev(){ selectFlashIndex(flashState.index - 1); }
function flashNext(){ selectFlashIndex(flashState.index + 1); }

function updateFlashNav(){
  document.getElementById('flashPosition').textContent = flashState.bones.length
    ? (flashState.index + 1) + ' / ' + flashState.bones.length
    : '0 / 0';
}

function setFlashViewMode(mode){
  flashState.viewMode = mode;
  document.querySelectorAll('#flashViewModes .home-btn').forEach(btn=>{
    btn.classList.toggle('primary', btn.dataset.flashView === mode);
  });
  renderFlashSide();
}

// Busca só dentro da prancha atual — reaproveita a mesma normalização
// (maiúsculas, sem acento) já usada no Modo Prova.
function handleFlashSearch(query){
  const q = normalizeExamAnswer(query);
  if(q.length < 2) return;
  const found = flashState.bones.find(b=>normalizeExamAnswer(b.label).includes(q) || b.word.includes(q));
  if(found) selectFlashBoneByKey(found.key);
}

function goFlashcards(){
  showScreen('flashcards');
  switchFlashTab('main');
  setFlashViewMode('info');
}

// ============================================================
// AUTENTICAÇÃO E PERFIL — a conta em si (Firebase Auth) e o perfil
// (nome/telefone/foto) moram em services/authService.js; aqui fica só
// a tela (troca de formulário, mensagens de erro) e a decisão de qual
// tela mostrar de acordo com o estado de login. Sem Firebase configurado
// (config/firebaseConfig.js ainda com os placeholders), o app inteiro
// pula a autenticação e funciona 100% local, exatamente como antes.
// ============================================================
let _currentStreak = 0;

// Carrega tudo que já existia antes das contas (progresso local, hoje
// já hidratado do Firestore quando há login) — chamado uma vez sem
// login (modo local) ou depois que a nuvem termina de sincronizar.
function bootAppData(){
  loadAllProgress();
  loadBoardProgress();
  refreshAllBoardProgress();
  _currentStreak = ProgressService.updateDayStreak();
  AchievementService.init(ACHIEVEMENTS);
  checkAchievements();
}

// Zera o estado em memória do jogo (não o localStorage) — usado no
// logout, pra a próxima pessoa a logar nesse navegador não ver
// resquício visual da conta anterior antes do próprio carregamento dela.
function resetInMemoryGameState(){
  Object.keys(GAMES).forEach(k=>{
    GAMES[k].solved = new Set();
    GAMES[k].failed = new Set();
  });
  Object.keys(BoardProgress).forEach(k=> delete BoardProgress[k]);
  _currentUserProfile = null;
}

const AUTH_VIEWS = ['welcome','login','signup','forgot','verify'];
function showAuthView(name){
  AUTH_VIEWS.forEach(v=>{
    const el = document.getElementById('authView' + v.charAt(0).toUpperCase() + v.slice(1));
    if(el) el.style.display = (v===name) ? '' : 'none';
  });
}

function authErrorMessage(err){
  const code = err && err.code;
  const MAP = {
    'auth/invalid-email': 'E-mail inválido.',
    'auth/user-disabled': 'Esta conta foi desativada.',
    'auth/user-not-found': 'E-mail ou senha incorretos.',
    'auth/wrong-password': 'E-mail ou senha incorretos.',
    'auth/invalid-credential': 'E-mail ou senha incorretos.',
    'auth/email-already-in-use': 'Já existe uma conta com esse e-mail.',
    'auth/weak-password': 'A senha precisa ter pelo menos 6 caracteres.',
    'auth/too-many-requests': 'Muitas tentativas — aguarde um pouco e tente de novo.',
    'auth/requires-recent-login': 'Por segurança, informe sua senha atual pra confirmar.',
    'auth/network-request-failed': 'Sem conexão com a internet.'
  };
  return (code && MAP[code]) || (err && err.message) || 'Algo deu errado. Tente de novo.';
}

// Reage a toda mudança de sessão — chamada pelo AuthService sempre que
// alguém loga, desloga, cria conta ou confirma o e-mail.
function handleAuthChange(user){
  if(!user){
    StorageService.clearUserScope();
    resetInMemoryGameState();
    _isAdmin = false;
    const adminBtn = document.getElementById('btnAdmin');
    if(adminBtn) adminBtn.style.display = 'none';
    showAuthView('welcome');
    showScreen('auth');
    return;
  }
  if(!user.emailVerified){
    document.getElementById('verifyEmailAddress').textContent = user.email;
    showAuthView('verify');
    showScreen('auth');
    return;
  }
  // Logado e com e-mail confirmado: sincroniza a nuvem pro navegador
  // antes de mostrar qualquer tela do app.
  StorageService.setUserScope(user.uid);
  AuthService.ensureUserIndexed();
  checkAdminStatus();
  StorageService.hydrateFromCloud(user.uid)
    .then(()=> AuthService.getProfile())
    .then(profile=>{
      _currentUserProfile = profile;
      bootAppData();
      showScreen('home');
    });
}

// ---- Modo Admin ----
let _isAdmin = false;
function checkAdminStatus(){
  AuthService.isCurrentUserAdmin().then(isAdmin=>{
    _isAdmin = isAdmin;
    const btn = document.getElementById('btnAdmin');
    if(btn) btn.style.display = _isAdmin ? '' : 'none';
  });
}

function renderAdminScreen(){
  const listEl = document.getElementById('adminUserList');
  listEl.innerHTML = '<p class="auth-hint">Carregando usuários…</p>';
  AuthService.listAllUsers().then(users=>{
    if(!users.length){
      listEl.innerHTML = '<p class="auth-hint">Nenhum usuário cadastrado ainda.</p>';
      return;
    }
    listEl.innerHTML = users.map(u=>
      '<div class="admin-user-row" data-uid="' + u.uid + '">' +
        '<div class="admin-user-main"><strong>' + (u.name || 'Sem nome') + '</strong><span>' + (u.email || '—') + '</span></div>' +
        '<div class="admin-user-meta">Criada em ' + (u.createdAt || '—') + '</div>' +
      '</div>'
    ).join('');
    listEl.querySelectorAll('.admin-user-row').forEach(row=>{
      row.addEventListener('click', ()=> toggleAdminUserDetail(row));
    });
  }).catch(()=>{
    listEl.innerHTML = '<p class="auth-error">Não consegui carregar a lista de usuários.</p>';
  });
}

// Alterna (e carrega sob demanda, só na primeira vez) o detalhe de
// progresso de um usuário — evita puxar tudo de todo mundo de uma vez
// só pra montar a listagem.
function toggleAdminUserDetail(row){
  let detail = row.querySelector('.admin-user-detail');
  if(detail){
    detail.style.display = (detail.style.display === 'none') ? '' : 'none';
    return;
  }
  const uid = row.dataset.uid;
  detail = document.createElement('div');
  detail.className = 'admin-user-detail';
  detail.innerHTML = '<p class="auth-hint">Carregando progresso…</p>';
  row.appendChild(detail);

  Promise.all([
    AuthService.getUserProfile(uid),
    AuthService.getUserDataDoc(uid, 'anatomiaByAleXPV1'),
    AuthService.getUserDataDoc(uid, 'anatomiaByAleBoardProgressV1'),
    AuthService.getUserDataDoc(uid, 'anatomiaByAleAchievementsV1'),
    AuthService.getUserDataDoc(uid, 'anatomiaByAleStreakV1')
  ]).then(([profile, xpRaw, boardsRaw, achRaw, streakRaw])=>{
    const xp = xpRaw ? (parseInt(xpRaw, 10) || 0) : 0;
    const level = ProgressService.getLevelForXP(xp);

    let boardsCompleted = 0, boardsTotal = 0;
    if(boardsRaw){
      try {
        const bp = JSON.parse(boardsRaw);
        boardsTotal = Object.keys(bp).length;
        boardsCompleted = Object.values(bp).filter(b=>b.status==='Concluído').length;
      } catch(e){}
    }
    let achievementsCount = 0;
    if(achRaw){
      try { achievementsCount = JSON.parse(achRaw).length; } catch(e){}
    }
    let streak = 0;
    if(streakRaw){
      try { streak = JSON.parse(streakRaw).streak || 0; } catch(e){}
    }

    detail.innerHTML =
      '<div class="admin-detail-grid">' +
        '<div><span class="admin-detail-label">Telefone</span><span>' + ((profile && profile.phone) || '—') + '</span></div>' +
        '<div><span class="admin-detail-label">Nível</span><span>' + level + '</span></div>' +
        '<div><span class="admin-detail-label">XP</span><span>' + xp + '</span></div>' +
        '<div><span class="admin-detail-label">Pranchas concluídas</span><span>' + boardsCompleted + ' de ' + boardsTotal + '</span></div>' +
        '<div><span class="admin-detail-label">Conquistas</span><span>' + achievementsCount + '</span></div>' +
        '<div><span class="admin-detail-label">Sequência de dias</span><span>' + streak + '</span></div>' +
      '</div>';
  }).catch(()=>{
    detail.innerHTML = '<p class="auth-error">Não consegui carregar os detalhes desse usuário.</p>';
  });
}

// Redimensiona/comprime uma foto enviada pelo usuário (canvas, sem
// depender de nenhuma lib) antes de guardar — mantém o documento do
// Firestore pequeno e o carregamento rápido.
function resizeImageFile(file, maxDim){
  return new Promise((resolve, reject)=>{
    const reader = new FileReader();
    reader.onerror = ()=> reject(new Error('Não consegui ler essa imagem.'));
    reader.onload = ()=>{
      const img = new Image();
      img.onerror = ()=> reject(new Error('Arquivo de imagem inválido.'));
      img.onload = ()=>{
        const scale = Math.min(1, maxDim / Math.max(img.width, img.height));
        const w = Math.round(img.width * scale);
        const h = Math.round(img.height * scale);
        const canvas = document.createElement('canvas');
        canvas.width = w; canvas.height = h;
        canvas.getContext('2d').drawImage(img, 0, 0, w, h);
        resolve(canvas.toDataURL('image/jpeg', 0.82));
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

// Título atual: mostra a maior conquista de "Mestre" já desbloqueada
// (cada uma delas já tem sua frase pronta em ACHIEVEMENTS, ver
// unlockTitle) — do maior domínio pro menor.
function deriveCurrentTitle(){
  const priority = ['master_skeleton','master_members','master_trunk','master_cranio'];
  for(const id of priority){
    if(AchievementService.isUnlocked(id)){
      const def = ACHIEVEMENTS.find(a=>a.id===id);
      if(def && def.unlockTitle) return def.unlockTitle;
    }
  }
  return '';
}

function renderProfileScreen(){
  const user = FIREBASE_CONFIGURED ? AuthService.getCurrentUser() : null;
  const nameEl = document.getElementById('profileName');
  const photoEl = document.getElementById('profilePhoto');
  const emailEl = document.getElementById('profileEmail');
  const phoneEl = document.getElementById('profilePhone');
  const createdEl = document.getElementById('profileCreated');
  const titleEl = document.getElementById('profileTitle');

  emailEl.textContent = user ? user.email : '—';

  const applyProfile = (profile)=>{
    nameEl.textContent = (profile && profile.name) || (user && user.displayName) || 'Aluno(a)';
    if(profile && profile.photoDataUrl){
      photoEl.innerHTML = '<img src="' + profile.photoDataUrl + '" alt="">';
    } else {
      photoEl.textContent = '👤';
    }
    if(profile && profile.phone){
      phoneEl.textContent = '📱 ' + profile.phone;
      phoneEl.style.display = '';
    } else {
      phoneEl.style.display = 'none';
    }
    createdEl.textContent = (profile && profile.createdAt) ? ('Conta criada em ' + profile.createdAt) : '';
  };

  if(_currentUserProfile){
    applyProfile(_currentUserProfile);
  } else if(user){
    AuthService.getProfile().then(profile=>{
      _currentUserProfile = profile;
      applyProfile(profile);
    });
  } else {
    applyProfile(null);
  }

  const title = deriveCurrentTitle();
  titleEl.textContent = title;
  titleEl.style.display = title ? '' : 'none';

  const xpProgress = ProgressService.getXPProgress();
  document.getElementById('profileLevel').textContent = xpProgress.level;
  document.getElementById('profileXP').textContent = xpProgress.xp;
  document.getElementById('profileStreak').textContent = _currentStreak;
  document.getElementById('profileAccuracy').textContent = getAccuracyRate() + '%';
  document.getElementById('profileTimeStudied').textContent = formatDurationLong(getTotalTimeSpentMs());
  const comp = getCompletedBoardsCount();
  document.getElementById('profileBoardsCompleted').textContent = comp.completed + ' de ' + comp.total;
  document.getElementById('profileAchievements').textContent = AchievementService.unlockedCount() + '/' + ACHIEVEMENTS.length;
}

// ---- Modal genérico de edição de conta (nome/telefone/e-mail/senha/
// confirmação de exclusão) — um só formulário, reaproveitado por todas
// essas ações trocando só título/campos/o que acontece ao salvar. ----
let _accountEditSubmit = null;
function openAccountEditModal(config){
  document.getElementById('accountEditTitle').textContent = config.title;
  document.getElementById('accountEditError').textContent = '';
  [1,2,3].forEach(n=>{
    const cfg = config['field'+n];
    const wrap = document.getElementById('accountEditLabel'+n+'Wrap');
    const label = document.getElementById('accountEditLabel'+n);
    const input = document.getElementById('accountEditInput'+n);
    if(cfg){
      wrap.style.display = '';
      label.textContent = cfg.label;
      input.type = cfg.type || 'text';
      input.value = cfg.value || '';
    } else {
      wrap.style.display = 'none';
      input.value = '';
    }
  });
  _accountEditSubmit = config.onSubmit;
  document.getElementById('accountEditModal').style.display = 'flex';
  document.getElementById('accountEditInput1').focus();
}
function closeAccountEditModal(){
  document.getElementById('accountEditModal').style.display = 'none';
  _accountEditSubmit = null;
}

const LEGAL_TEXT = {
  terms: {
    title: 'Termos de Uso',
    body: '<p><em>Texto de exemplo — substitua pelos Termos de Uso reais do Anatomia by ALE (revisados juridicamente) antes de publicar o app pra usuários de verdade.</em></p>' +
      '<p>Ao criar uma conta, você concorda em usar o Anatomia by ALE apenas para fins de estudo pessoal, e em manter suas credenciais de acesso em sigilo.</p>'
  },
  privacy: {
    title: 'Política de Privacidade',
    body: '<p><em>Texto de exemplo — substitua pela Política de Privacidade real (considerando a LGPD) antes de publicar o app pra usuários de verdade.</em></p>' +
      '<p>Guardamos o nome, e-mail, telefone (se informado) e a foto de perfil (se informada) que você nos der, além do seu progresso de estudo, pra manter sua conta funcionando e sincronizada entre aparelhos. Esses dados não são compartilhados com terceiros.</p>'
  }
};
function openLegalModal(kind){
  document.getElementById('legalModalTitle').textContent = LEGAL_TEXT[kind].title;
  document.getElementById('legalModalBody').innerHTML = LEGAL_TEXT[kind].body;
  document.getElementById('legalModal').style.display = 'flex';
}

// ============================================================
// MODOS DE JOGO — tela hub (Identificar / Localizar / Modo Prova) e o
// Modo Localizar em si. O modo Identificar (o jogo clássico) e o Modo
// Prova continuam 100% iguais — só ganharam mais uma porta de entrada
// por aqui, além dos atalhos que já existiam na Home.
// ============================================================
const XP_LOCATE_CORRECT = 10;
const XP_LOCATE_COMPLETE = 100;

function goModes(){
  showScreen('modes');
}

// ---- Modo Localizar ----
let locateState = null; // {gameKey, queue:[{key,word,label,x,y,img,yStart?,yEnd?}], index, hits, misses, streak, xp, startedAt}
let _locateTimerInterval = null;

function renderLocateSetup(){
  const wrap = document.getElementById('locateBoardList');
  wrap.innerHTML = Object.keys(GAMES).map(gameKey=>
    '<button type="button" class="home-btn" data-locate-board="' + gameKey + '">' + GAMES[gameKey].title + '</button>'
  ).join('');
  wrap.querySelectorAll('[data-locate-board]').forEach(btn=>{
    btn.addEventListener('click', ()=>startLocate(btn.dataset.locateBoard));
  });
}

function startLocate(gameKey){
  const game = GAMES[gameKey];
  const seen = new Set();
  const bones = [];
  game.views.forEach(view=>{
    view.bones.forEach(b=>{
      if(seen.has(b.key)) return;
      seen.add(b.key);
      bones.push(Object.assign({}, b, { img: view.img }));
    });
  });
  locateState = {
    gameKey,
    queue: shuffledArray(bones),
    index: 0,
    hits: 0,
    misses: 0,
    streak: 0,
    xp: 0,
    startedAt: Date.now()
  };
  showScreen('locate');
  renderLocateRound();
  clearInterval(_locateTimerInterval);
  _locateTimerInterval = setInterval(updateLocateTimerDisplay, 500);
}

function updateLocateTimerDisplay(){
  if(!locateState) return;
  document.getElementById('locateTime').textContent = formatDuration(Date.now() - locateState.startedAt);
}

function renderLocateRound(){
  const q = locateState.queue[locateState.index];
  document.getElementById('locateTargetName').textContent = q.label;
  renderLocateSkeleton();
  updateLocateHud();
}

// Os marcadores existem pra TODOS os ossos da categoria (não só o
// alvo) — clicar em qualquer um deles é uma tentativa; clicar fora não
// faz nada (não há osso ali). O número/nome nunca aparece — é isso
// que torna o modo sobre memória espacial, não sobre reconhecimento.
function renderLocateSkeleton(){
  const wrap = document.getElementById('locateSkelWrap');
  wrap.innerHTML = '';
  const game = GAMES[locateState.gameKey];
  game.views.forEach(view=>{
    const inner = document.createElement('div');
    inner.className = 'locate-skel-inner';
    const img = document.createElement('img');
    img.src = view.img;
    img.alt = 'Esqueleto humano';
    inner.appendChild(img);
    view.bones.forEach(b=>{
      const el = document.createElement('button');
      el.type = 'button';
      el.className = 'locate-marker';
      el.style.left = b.x + '%';
      el.style.top = b.y + '%';
      el.dataset.boneKey = b.key;
      el.setAttribute('aria-label', 'Ponto na imagem');
      el.addEventListener('click', ()=>handleLocateClick(el, b.key));
      inner.appendChild(el);
    });
    wrap.appendChild(inner);
  });
}

function handleLocateClick(el, clickedKey){
  if(!locateState) return;
  const q = locateState.queue[locateState.index];
  if(clickedKey === q.key){
    locateState.hits++;
    locateState.streak++;
    ProgressService.registerLocateResult(true);
    ProgressService.addXP(XP_LOCATE_CORRECT);
    ProgressService.addLocateXP(XP_LOCATE_CORRECT);
    locateState.xp += XP_LOCATE_CORRECT;
    SoundManager.play('correct');
    el.classList.add('correct');
    updateLocateHud();
    checkAchievements();
    setTimeout(advanceLocate, 700);
  } else {
    locateState.misses++;
    locateState.streak = 0;
    ProgressService.registerLocateResult(false);
    SoundManager.play('wrong');
    el.classList.add('wrong');
    setTimeout(()=> el.classList.remove('wrong'), 500);
    updateLocateHud();
  }
}

function advanceLocate(){
  locateState.index++;
  if(locateState.index >= locateState.queue.length){
    finishLocateRound();
  } else {
    renderLocateRound();
  }
}

function updateLocateHud(){
  document.getElementById('locateHits').textContent = locateState.hits;
  document.getElementById('locateMisses').textContent = locateState.misses;
  document.getElementById('locateStreak').textContent = locateState.streak;
  document.getElementById('locateXP').textContent = locateState.xp;
}

function finishLocateRound(){
  clearInterval(_locateTimerInterval);
  const timeMs = Date.now() - locateState.startedAt;
  ProgressService.addLocateTimeMs(timeMs);
  ProgressService.addXP(XP_LOCATE_COMPLETE);
  ProgressService.addLocateXP(XP_LOCATE_COMPLETE);
  ProgressService.markLocateCategoryCompleted(locateState.gameKey);
  locateState.xp += XP_LOCATE_COMPLETE;
  checkAchievements();

  document.getElementById('locateCompletionBoardName').textContent = GAMES[locateState.gameKey].title;
  document.getElementById('locateCompletionTime').textContent = formatDuration(timeMs);
  document.getElementById('locateCompletionHits').textContent = locateState.hits;
  document.getElementById('locateCompletionMisses').textContent = locateState.misses;
  const attempted = locateState.hits + locateState.misses;
  const accuracy = attempted ? Math.round((locateState.hits / attempted) * 100) : 100;
  document.getElementById('locateCompletionAccuracy').textContent = accuracy + '%';
  document.getElementById('locateCompletionXP').textContent = '+' + locateState.xp + ' XP';
  document.getElementById('locateCompletionModal').style.display = 'flex';
  spawnConfetti();
  SoundManager.play('complete');
}

function cancelLocate(){
  clearInterval(_locateTimerInterval);
  if(locateState){
    ProgressService.addLocateTimeMs(Date.now() - locateState.startedAt);
  }
  locateState = null;
  showScreen('modes');
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

document.getElementById('btnStats').addEventListener('click', ()=>showScreen('stats'));
document.getElementById('btnSettings').addEventListener('click', ()=>showScreen('settings'));
document.getElementById('backFromStats').addEventListener('click', ()=>showScreen('home'));
document.getElementById('backFromSettings').addEventListener('click', ()=>showScreen('home'));
document.getElementById('backFromBoards').addEventListener('click', ()=>showScreen('home'));
document.getElementById('btnFlashcards').addEventListener('click', goFlashcards);
document.getElementById('backFromFlashcards').addEventListener('click', ()=>showScreen('home'));
document.getElementById('flashPrev').addEventListener('click', flashPrev);
document.getElementById('flashNext').addEventListener('click', flashNext);
document.getElementById('flashSearchInput').addEventListener('input', (e)=>handleFlashSearch(e.target.value));
document.querySelectorAll('#flashViewModes .home-btn').forEach(btn=>{
  btn.addEventListener('click', ()=>setFlashViewMode(btn.dataset.flashView));
});
renderFlashTabs();

// ---- Autenticação / Perfil ----
document.getElementById('btnProfile').addEventListener('click', ()=>showScreen('profile'));
document.getElementById('backFromProfile').addEventListener('click', ()=>showScreen('home'));
document.getElementById('btnAdmin').addEventListener('click', ()=>showScreen('admin'));
document.getElementById('backFromAdmin').addEventListener('click', ()=>showScreen('home'));

document.getElementById('btnModes').addEventListener('click', goModes);
document.getElementById('backFromModes').addEventListener('click', ()=>showScreen('home'));
document.getElementById('modeCardIdentify').addEventListener('click', goAllBoards);
document.getElementById('modeCardLocate').addEventListener('click', ()=>showScreen('locateSetup'));
document.getElementById('modeCardExam').addEventListener('click', ()=>showScreen('examSetup'));
document.getElementById('backFromLocateSetup').addEventListener('click', ()=>showScreen('modes'));
document.getElementById('backFromLocate').addEventListener('click', cancelLocate);
document.getElementById('locateCompletionRepeat').addEventListener('click', ()=>{
  document.getElementById('locateCompletionModal').style.display = 'none';
  startLocate(locateState.gameKey);
});
document.getElementById('locateCompletionNext').addEventListener('click', ()=>{
  document.getElementById('locateCompletionModal').style.display = 'none';
  const keys = Object.keys(GAMES);
  const idx = keys.indexOf(locateState.gameKey);
  const nextKey = keys[(idx + 1) % keys.length];
  startLocate(nextKey);
});
document.getElementById('locateCompletionMenu').addEventListener('click', ()=>{
  document.getElementById('locateCompletionModal').style.display = 'none';
  locateState = null;
  showScreen('modes');
});

document.getElementById('authGoLogin').addEventListener('click', ()=>showAuthView('login'));
document.getElementById('authGoSignup').addEventListener('click', ()=>showAuthView('signup'));
document.getElementById('loginBack').addEventListener('click', ()=>showAuthView('welcome'));
document.getElementById('signupBack').addEventListener('click', ()=>showAuthView('welcome'));
document.getElementById('loginGoSignup').addEventListener('click', ()=>showAuthView('signup'));
document.getElementById('signupGoLogin').addEventListener('click', ()=>showAuthView('login'));
document.getElementById('authGoForgot').addEventListener('click', ()=>showAuthView('forgot'));
document.getElementById('forgotBack').addEventListener('click', ()=>showAuthView('login'));

document.getElementById('loginForm').addEventListener('submit', function(e){
  e.preventDefault();
  const errEl = document.getElementById('loginError');
  errEl.textContent = '';
  AuthService.signIn({
    email: document.getElementById('loginEmail').value.trim(),
    password: document.getElementById('loginPassword').value,
    rememberMe: document.getElementById('loginRemember').checked
  }).catch(err=>{ errEl.textContent = authErrorMessage(err); });
});

let _signupPhotoDataUrl = '';
document.getElementById('signupPhoto').addEventListener('change', function(e){
  const file = e.target.files[0];
  if(!file) return;
  resizeImageFile(file, 200).then(dataUrl=>{
    _signupPhotoDataUrl = dataUrl;
    document.getElementById('signupPhotoPreview').innerHTML = '<img src="'+dataUrl+'" alt="">';
  }).catch(()=>{
    document.getElementById('signupError').textContent = 'Não consegui processar essa imagem.';
  });
});
document.getElementById('signupForm').addEventListener('submit', function(e){
  e.preventDefault();
  const errEl = document.getElementById('signupError');
  errEl.textContent = '';
  const password = document.getElementById('signupPassword').value;
  const passwordConfirm = document.getElementById('signupPasswordConfirm').value;
  if(password !== passwordConfirm){
    errEl.textContent = 'As senhas não coincidem.';
    return;
  }
  if(!document.getElementById('signupTerms').checked || !document.getElementById('signupPrivacy').checked){
    errEl.textContent = 'É preciso aceitar os Termos de Uso e a Política de Privacidade.';
    return;
  }
  AuthService.signUp({
    name: document.getElementById('signupName').value.trim(),
    phone: document.getElementById('signupPhone').value.trim(),
    email: document.getElementById('signupEmail').value.trim(),
    password,
    photoDataUrl: _signupPhotoDataUrl
  }).catch(err=>{ errEl.textContent = authErrorMessage(err); });
});

document.getElementById('forgotForm').addEventListener('submit', function(e){
  e.preventDefault();
  const errEl = document.getElementById('forgotError');
  errEl.textContent = '';
  document.getElementById('forgotSuccess').style.display = 'none';
  AuthService.sendPasswordReset(document.getElementById('forgotEmail').value.trim())
    .then(()=>{ document.getElementById('forgotSuccess').style.display = ''; })
    .catch(err=>{ errEl.textContent = authErrorMessage(err); });
});

document.getElementById('resendVerification').addEventListener('click', function(){
  AuthService.resendVerificationEmail()
    .then(()=> alert('E-mail de confirmação reenviado.'))
    .catch(err=> alert(authErrorMessage(err)));
});
document.getElementById('checkVerification').addEventListener('click', function(){
  AuthService.reloadUser().then(()=>{
    if(!AuthService.isEmailVerified()){
      alert('Ainda não encontrei a confirmação. Confira seu e-mail (inclusive o spam) e tente de novo.');
    }
  });
});
document.getElementById('verifyLogout').addEventListener('click', ()=> AuthService.signOut());

document.getElementById('openTerms').addEventListener('click', ()=>openLegalModal('terms'));
document.getElementById('openPrivacy').addEventListener('click', ()=>openLegalModal('privacy'));
document.getElementById('legalModalClose').addEventListener('click', ()=>{
  document.getElementById('legalModal').style.display = 'none';
});

document.getElementById('accountEditForm').addEventListener('submit', function(e){
  e.preventDefault();
  if(!_accountEditSubmit) return;
  const errEl = document.getElementById('accountEditError');
  errEl.textContent = '';
  const values = {
    v1: document.getElementById('accountEditInput1').value.trim(),
    v2: document.getElementById('accountEditInput2').value.trim(),
    v3: document.getElementById('accountEditInput3').value
  };
  Promise.resolve(_accountEditSubmit(values))
    .then(()=> closeAccountEditModal())
    .catch(err=>{ errEl.textContent = authErrorMessage(err); });
});
document.getElementById('accountEditCancel').addEventListener('click', closeAccountEditModal);

document.getElementById('btnAccountChangeName').addEventListener('click', ()=>{
  openAccountEditModal({
    title: 'Alterar nome',
    field1: { label:'Nome', value: (_currentUserProfile && _currentUserProfile.name) || '' },
    onSubmit: (v)=> AuthService.updateProfileFields({ name: v.v1 }).then(()=>{
      _currentUserProfile = Object.assign({}, _currentUserProfile, { name: v.v1 });
      renderProfileScreen();
      renderTopBar();
    })
  });
});
document.getElementById('btnAccountChangePhone').addEventListener('click', ()=>{
  openAccountEditModal({
    title: 'Alterar telefone',
    field1: { label:'Telefone', type:'tel', value: (_currentUserProfile && _currentUserProfile.phone) || '' },
    onSubmit: (v)=> AuthService.updateProfileFields({ phone: v.v1 }).then(()=>{
      _currentUserProfile = Object.assign({}, _currentUserProfile, { phone: v.v1 });
      renderProfileScreen();
    })
  });
});
document.getElementById('btnAccountChangeEmail').addEventListener('click', ()=>{
  openAccountEditModal({
    title: 'Alterar e-mail',
    field1: { label:'Novo e-mail', type:'email' },
    field3: { label:'Confirme sua senha atual' },
    onSubmit: (v)=> AuthService.changeEmail(v.v1, v.v3).then(()=>{
      alert('Enviamos um link de confirmação pro novo e-mail — ele só passa a valer depois que você confirmar.');
    })
  });
});
document.getElementById('btnAccountChangePassword').addEventListener('click', ()=>{
  openAccountEditModal({
    title: 'Alterar senha',
    field1: { label:'Nova senha', type:'password' },
    field2: { label:'Confirmar nova senha', type:'password' },
    field3: { label:'Senha atual' },
    onSubmit: (v)=>{
      if(v.v1.length < 6) return Promise.reject({ message:'A nova senha precisa ter pelo menos 6 caracteres.' });
      if(v.v1 !== v.v2) return Promise.reject({ message:'As senhas não coincidem.' });
      return AuthService.changePassword(v.v1, v.v3).then(()=> alert('Senha alterada com sucesso.'));
    }
  });
});
document.getElementById('btnAccountChangePhoto').addEventListener('click', ()=>{
  document.getElementById('accountPhotoInput').click();
});
document.getElementById('accountPhotoInput').addEventListener('change', function(e){
  const file = e.target.files[0];
  e.target.value = '';
  if(!file) return;
  let newPhoto = '';
  resizeImageFile(file, 200)
    .then(dataUrl=>{ newPhoto = dataUrl; return AuthService.updateProfileFields({ photoDataUrl: dataUrl }); })
    .then(()=>{
      _currentUserProfile = Object.assign({}, _currentUserProfile, { photoDataUrl: newPhoto });
      renderProfileScreen();
      renderTopBar();
    })
    .catch(()=>{ document.getElementById('accountActionError').textContent = 'Não consegui atualizar a foto.'; });
});
document.getElementById('btnLogout').addEventListener('click', ()=> AuthService.signOut());
document.getElementById('btnDeleteAccount').addEventListener('click', ()=>{
  const ok = confirm('Isso vai excluir sua conta e todo o progresso salvo na nuvem. Não dá pra desfazer. Continuar?');
  if(!ok) return;
  openAccountEditModal({
    title: 'Confirme sua senha pra excluir a conta',
    field3: { label:'Senha atual' },
    onSubmit: (v)=> AuthService.deleteAccount(v.v3)
  });
});

document.getElementById('backFromExamSetup').addEventListener('click', ()=>showScreen('home'));
document.getElementById('backFromExam').addEventListener('click', cancelExam);
document.getElementById('examAnswerForm').addEventListener('submit', (e)=>{ e.preventDefault(); submitExamAnswer(); });
document.getElementById('examRepeat').addEventListener('click', ()=>startExam(examState.gameKey));
document.getElementById('examBackHome').addEventListener('click', ()=>{ examState=null; showScreen('home'); });
document.getElementById('btnResetAll').addEventListener('click', resetAllProgress);
document.getElementById('btnResetAchievements').addEventListener('click', resetAchievements);
document.getElementById('btnLightMode').addEventListener('click', ()=>applyTheme('light'));
document.getElementById('btnDarkMode').addEventListener('click', ()=>applyTheme('dark'));
document.getElementById('btnExport').addEventListener('click', exportProgress);
document.getElementById('btnImport').addEventListener('click', ()=>{
  document.getElementById('importFileInput').click();
});
document.getElementById('importFileInput').addEventListener('change', (e)=>{
  const file = e.target.files[0];
  if(file) importProgress(file);
  e.target.value = '';
});
document.getElementById('btnSoundOn').addEventListener('click', ()=>{ SoundManager.setEnabled(true); renderSoundButtons(); });
document.getElementById('btnSoundOff').addEventListener('click', ()=>{ SoundManager.setEnabled(false); renderSoundButtons(); });
document.getElementById('btnMusicOn').addEventListener('click', ()=>{ MusicManager.setEnabled(true); renderMusicButtons(); });
document.getElementById('btnMusicOff').addEventListener('click', ()=>{ MusicManager.setEnabled(false); renderMusicButtons(); });

// Som de clique genérico — um único listener delegado cobre todo botão
// do app (abas, hotspots, teclado, menus...) sem precisar mexer em
// nenhum handler existente. Quando o clique também dispara um som mais
// específico (acerto, abrir menu, reiniciar...), esse outro som toca
// logo em seguida e corta o clique — o SoundManager já nunca sobrepõe.
document.addEventListener('click', function(e){
  if(e.target.closest('button')) SoundManager.play('click');
});

document.getElementById('completionRepeat').addEventListener('click', ()=>{
  hideCompletionModal();
  resetGame();
});
document.getElementById('completionNext').addEventListener('click', ()=>{
  hideCompletionModal();
  const keys = Object.keys(GAMES);
  const idx = keys.indexOf(_completionGameKey);
  const nextKey = keys[(idx + 1) % keys.length];
  showScreen('boards');
  switchTab(nextKey);
});
document.getElementById('completionMenu').addEventListener('click', ()=>{
  hideCompletionModal();
  showScreen('home');
});

// Pausa o cronômetro quando a aba do navegador fica em segundo plano
// (retoma sozinho na prancha atual ao voltar) e salva o tempo acumulado
// ao fechar a página. Um flush periódico evita perder tempo em caso de
// fechamento abrupto (queda de energia, navegador travando, etc.). Só
// mexe no cronômetro quando a tela de pranchas está mesmo aberta —
// parado no início/estatísticas/configurações não conta como estudo.
document.addEventListener('visibilitychange', function(){
  if(_currentScreen !== 'boards') return;
  if(document.hidden){
    stopBoardTimer();
  } else {
    startBoardTimer(currentGameKey);
  }
});
window.addEventListener('beforeunload', stopBoardTimer);
setInterval(function(){
  if(_currentScreen !== 'boards') return;
  stopBoardTimer();
  startBoardTimer(currentGameKey);
}, 10000);

renderThemeButtons();
renderSoundButtons();
renderMusicButtons();

if(!FIREBASE_CONFIGURED){
  // Sem as chaves do Firebase preenchidas ainda (config/firebaseConfig.js)
  // — pula a autenticação por completo e funciona 100% local, exatamente
  // como o app sempre funcionou.
  bootAppData();
  showScreen('home');
} else {
  showScreen('auth');
  AuthService.onAuthChange(handleAuthChange);
}
