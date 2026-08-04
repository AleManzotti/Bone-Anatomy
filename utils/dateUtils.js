// ============================================================
// DATEUTILS — helper de data compartilhado entre serviços (evita
// reimplementar o mesmo formato "YYYY-MM-DD" em cada um). Sem estado,
// sem localStorage — só funções puras.
// ============================================================
const DateUtils = (function(){
  function todayStr(){
    const d = new Date();
    return d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0');
  }
  function daysBetween(dateStrA, dateStrB){
    return Math.round((new Date(dateStrB+'T00:00:00') - new Date(dateStrA+'T00:00:00')) / 86400000);
  }
  return { todayStr, daysBetween };
})();
