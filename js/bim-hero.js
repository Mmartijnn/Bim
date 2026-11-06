(function () {
  'use strict';
  var stage = document.getElementById('bimStage');
  if (!stage || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  function move() {
    var y = Math.max(0, Math.min(window.scrollY, 600));
    stage.style.setProperty('--wx', (y * -0.08) + 'px');
    stage.style.setProperty('--py', (y * 0.06) + 'px');
  }
  window.addEventListener('scroll', move, { passive: true });
  move();
})();
