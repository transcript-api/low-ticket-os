/* Reto Cintura 28 · Página de ventas estática, sin dependencias.
   1) landing-config.json: link de pago de Hotmart, precio, Píxel de Meta, Utmify y soporte.
   2) Comparadores de platos.
   La apertura, el precio con descuento y el quiz viven en quiz.js. */
(function () {
  'use strict';
  var W = window, D = document;
  var DEF = { clarityId: '', checkoutUrl: '', price: 'US$ 15,90', priceNote: 'Pago único. Acceso inmediato.', priceLabel: 'Pago único', listPrice: '', launchEndsAt: '', launchLabel: 'Precio de lanzamiento', mostrarFecha: false, discountLabel: '', tema: 'noche', metaPixelId: '', utmifyScript: false, soporte: '', soporteTexto: '' };
  var reduce = W.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function all(s, r) { return Array.prototype.slice.call((r || D).querySelectorAll(s)); }
  function clamp(v, a, b) { a = a === undefined ? 0 : a; b = b === undefined ? 1 : b; return Math.min(b, Math.max(a, v)); }
  function smooth(v) { var x = clamp(v); return x * x * (3 - 2 * x); }

  /* ---------- 1. Configuración, píxel y Utmify ---------- */
  function pixel(id) {
    if (W.fbq) return;
    var n = W.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
    if (!W._fbq) W._fbq = n;
    n.push = n; n.loaded = true; n.version = '2.0'; n.queue = [];
    var s = D.createElement('script'); s.async = true; s.src = 'https://connect.facebook.net/en_US/fbevents.js';
    D.head.appendChild(s);
    W.fbq('init', id); W.fbq('track', 'PageView');
  }
  /* Microsoft Clarity: mapas de calor y grabaciones. El quiz va enmascarado (data-clarity-mask) para no grabar respuestas. */
  function clarity(id) {
    if (W.clarity) return;
    W.clarity = function () { (W.clarity.q = W.clarity.q || []).push(arguments); };
    var s = D.createElement('script'); s.async = true; s.src = 'https://www.clarity.ms/tag/' + encodeURIComponent(id);
    D.head.appendChild(s);
  }
  function apply(cfg) {
    W.R28CFG = cfg;
    if (cfg.checkoutUrl) all('a[data-buy]').forEach(function (a) { a.href = cfg.checkoutUrl; });
    all('[data-cfg]').forEach(function (el) { var v = cfg[el.getAttribute('data-cfg')]; if (typeof v === 'string' && v) el.textContent = v; });
    if (cfg.soporte) {
      var p = D.querySelector('[data-soporte]');
      if (p) { var a = p.querySelector('a'); a.href = cfg.soporte; a.textContent = cfg.soporteTexto || cfg.soporte; p.hidden = false; }
    }
    if (cfg.metaPixelId) pixel(String(cfg.metaPixelId).trim());
    if (cfg.clarityId) clarity(String(cfg.clarityId).trim());
    if (cfg.utmifyScript && !D.querySelector('script[data-utmify]')) {
      var u = D.createElement('script'); u.src = 'https://cdn.utmify.com.br/scripts/utms/latest.js'; u.async = true; u.defer = true;
      u.setAttribute('data-utmify', ''); u.setAttribute('data-utmify-prevent-subids', '');
      D.head.appendChild(u);
    }
    D.dispatchEvent(new CustomEvent('r28:config', { detail: cfg }));
  }
  fetch('landing-config.json', { cache: 'no-store' })
    .then(function (r) { return r.ok ? r.json() : {}; })
    .then(function (j) { apply(Object.assign({}, DEF, j)); })
    .catch(function () { apply(DEF); });
  D.addEventListener('click', function (e) {
    var t = e.target.closest && e.target.closest('[data-buy]');
    if (t && t.getAttribute('href') !== '#precio') {
      if (W.fbq) W.fbq('track', 'InitiateCheckout');
      if (W.clarity) W.clarity('event', 'ir_al_checkout');
    }
  });
  var precio = D.getElementById('precio');
  if (precio && 'IntersectionObserver' in W) {
    var seen = new IntersectionObserver(function (es) {
      es.forEach(function (x) {
        if (x.isIntersecting && W.fbq) { seen.disconnect(); W.fbq('track', 'ViewContent', { content_name: 'Reto Cintura 28' }); }
      });
    }, { threshold: 0.25 });
    seen.observe(precio);
  }

  /* ---------- 2. Comparadores de platos ---------- */
  var comps = all('[data-comp]');
  comps.forEach(function (c) {
    c.querySelector('[data-flip]').addEventListener('click', function () { c.setAttribute('data-touched', '1'); c.classList.toggle('show-b'); });
  });
  if (comps.length && 'IntersectionObserver' in W && !reduce) {
    var peek = new IntersectionObserver(function (es) {
      es.forEach(function (x) {
        if (!x.isIntersecting) return;
        peek.unobserve(x.target);
        var c = x.target, i = comps.indexOf(c);
        setTimeout(function () { if (!c.hasAttribute('data-touched')) c.classList.add('show-b'); }, 1300 + i * 350);
      });
    }, { threshold: 0.6 });
    comps.forEach(function (c) { peek.observe(c); });
  }

})();
