(function () {
  'use strict';
  // Op moderne browsers regelt de CSS de beweging (zie css/bim-hero.css).
  // Dit is alleen een vangnet voor desktopbrowsers zonder scroll-driven animations.
  var stage = document.getElementById('bimStage');
  if (!stage) return;
  var supported = window.CSS && CSS.supports && CSS.supports('animation-timeline: scroll()');
  if (supported || window.matchMedia('(prefers-reduced-motion: reduce)').matches || window.matchMedia('(max-width: 800px)').matches || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  var word = stage.querySelector('.bim-word'), phone = stage.querySelector('.bim-phone'), ticking = false;
  function move() {
    ticking = false;
    var y = Math.max(0, Math.min(window.scrollY, 600));
    word.style.translate = (y * -0.08) + 'px 0';
    phone.style.translate = '0 ' + (y * 0.06) + 'px';
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; window.requestAnimationFrame(move); }
  }, { passive: true });
  move();
})();
