// === v55.6: Toggle 主管 / 技術人員 — Style 4 (equal pills), top-right of GEO card ===
// FIX: use let (not const) for stored, and run on DOMContentLoaded so buttons exist
(function(){
  function initGeoToggle(){
    const buttons = document.querySelectorAll('.geo-pill');
    if (!buttons.length) return;
    let stored = 'tech';
    try { stored = localStorage.getItem('geo-view') || 'tech'; } catch (e) { stored = 'tech'; }
    document.body.setAttribute('data-geo-view', stored);
    function applyActive(){
      buttons.forEach(function(b){
        const isActive = b.getAttribute('data-view') === stored;
        b.classList.toggle('active', isActive);
        b.setAttribute('aria-pressed', String(isActive));
      });
    }
    applyActive();
    buttons.forEach(function(btn){
      btn.addEventListener('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        stored = this.getAttribute('data-view');
        document.body.setAttribute('data-geo-view', stored);
        try { localStorage.setItem('geo-view', stored); } catch (e) {}
        applyActive();
      });
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGeoToggle);
  } else {
    initGeoToggle();
  }
})();

