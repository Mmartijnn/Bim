(function () {
  'use strict';

  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');
  if (header && toggle) {
    toggle.addEventListener('click', function () {
      var open = header.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  var slider = document.querySelector('[data-slider]');
  if (slider) {
    var slides = Array.prototype.slice.call(slider.querySelectorAll('.hero-slide'));
    var currentSlide = 0;

    function showSlide(index) {
      currentSlide = (index + slides.length) % slides.length;
      slides.forEach(function (slide, i) {
        slide.hidden = i !== currentSlide;
        slide.classList.toggle('is-active', i === currentSlide);
      });
    }

    slider.querySelector('[data-slide-prev]').addEventListener('click', function () { showSlide(currentSlide - 1); });
    slider.querySelector('[data-slide-next]').addEventListener('click', function () { showSlide(currentSlide + 1); });
  }

  document.querySelectorAll('[data-year]').forEach(function (element) {
    element.textContent = String(new Date().getFullYear());
  });

  var buttons = document.querySelectorAll('.filter');
  var projects = document.querySelectorAll('#projecten-lijst .project');
  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      var filter = button.dataset.filter;
      buttons.forEach(function (item) { item.setAttribute('aria-pressed', String(item === button)); });
      projects.forEach(function (project) {
        project.hidden = filter !== 'alle' && project.dataset.sector !== filter;
      });
    });
  });

  var form = document.getElementById('contact-form');
  if (form) {
    var status = document.getElementById('form-status');
    var query = new URLSearchParams(window.location.search);
    if (query.get('verzonden') === '1') {
      status.hidden = false;
      status.textContent = 'Bedankt voor uw bericht. We nemen zo snel mogelijk contact met u op.';
    }

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      if (!form.reportValidity()) return;

      // Vul het echte ontvangstadres in voordat de site wordt gepubliceerd.
      var contactEmail = '';
      if (!contactEmail || contactEmail.indexOf('@') === -1) {
        status.hidden = false;
        status.textContent = 'Het formulier is nog niet gekoppeld. Vul het ontvangstadres in bovenaan het formuliergedeelte in js/site.js.';
        status.setAttribute('role', 'alert');
        return;
      }

      if (!/^https?:$/.test(window.location.protocol)) {
        status.hidden = false;
        status.textContent = 'Open de gepubliceerde website of een lokale webserver om het formulier te verzenden.';
        return;
      }

      var pageUrl = window.location.href.split('#')[0].split('?')[0];
      document.getElementById('form-next').value = pageUrl + '?verzonden=1';
      document.getElementById('form-url').value = pageUrl;
      form.action = 'https://formsubmit.co/' + encodeURIComponent(contactEmail.trim());
      HTMLFormElement.prototype.submit.call(form);
    });
  }
})();
