/* Reto Cintura 28 · Página de ventas estática, sin dependencias.
   1) landing-config.json: link de pago de Hotmart, precio, Píxel de Meta, Utmify y soporte.
   2) Comparadores de platos.
   La apertura, el precio con descuento y el quiz viven en quiz.js. */
(function () {
  'use strict';
  var W = window, D = document;
  var DEF = { clarityId: '', checkoutUrl: '', price: 'US$ 15,90', priceNote: 'Pago único. Acceso inmediato.', priceLabel: 'Pago único', listPrice: '', launchEndsAt: '', launchLabel: 'Precio de lanzamiento', mostrarFecha: false, mostrarCuenta: false, discountLabel: '', cupon: '', urgencia: '', urgenciaCorta: '', tema: 'noche', metaPixelId: '', utmifyScript: false, soporte: '', soporteTexto: '' };
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
  /* Cuando vence launchEndsAt también vence el cupón en Hotmart: la página pasa sola al precio de lista y saca el cupón del link, para decir lo mismo que el checkout. */
  function afterLaunch(cfg) {
    var fin = Date.parse(cfg.launchEndsAt);
    if (!cfg.listPrice || isNaN(fin) || Date.now() < fin) return cfg;
    cfg.price = cfg.listPrice; cfg.listPrice = ''; cfg.cupon = '';
    cfg.checkoutUrl = String(cfg.checkoutUrl || '').replace(/([?&])offDiscount=[^&]*&?/, '$1').replace(/[?&]$/, '');
    return cfg;
  }
  function apply(cfg) {
    cfg = afterLaunch(cfg);
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
  var mainBuy = D.querySelector('#precio [data-buy]');
  if (mainBuy && 'IntersectionObserver' in W) {
    new IntersectionObserver(function (entries) {
      D.documentElement.classList.toggle('r28-main-cta-visible', entries[0].isIntersecting);
    }, { threshold: 0.25 }).observe(mainBuy);
  }
  if (precio && 'IntersectionObserver' in W) {
    var seen = new IntersectionObserver(function (es) {
      es.forEach(function (x) {
        if (x.isIntersecting && W.fbq) { seen.disconnect(); W.fbq('track', 'ViewContent', { content_name: 'Reto Cintura 28' }); }
      });
    }, { threshold: 0.25 });
    seen.observe(precio);
  }

  /* ---------- Presentación de la app: una sola versión de video según la pantalla ---------- */
  all('[data-app-video], [data-hero-video]').forEach(function (video) {
    var hero = video.hasAttribute('data-hero-video');
    var desktop = W.matchMedia('(min-width: 861px)'), motion = W.matchMedia('(prefers-reduced-motion: reduce)');
    var format = video.canPlayType('video/webm; codecs="vp9"') ? 'webm' : 'mp4';
    var inView = false, userPaused = false, selectedSource = '';
    video.muted = true;

    /* La decodificación puede variar un punto de RGB entre navegadores y formatos. */
    function blendBackground() {
      try {
        var canvas = D.createElement('canvas'); canvas.width = canvas.height = 1;
        var context = canvas.getContext('2d'); context.drawImage(video, 0, 0, 1, 1, 0, 0, 1, 1);
        var pixel = context.getImageData(0, 0, 1, 1).data;
        video.closest(hero ? '.ap-motion' : '.r28-app-section').style.setProperty(hero ? '--hero-video-bg' : '--app-video-bg', 'rgb(' + pixel[0] + ',' + pixel[1] + ',' + pixel[2] + ')');
      } catch (e) { /* Si no se puede leer, se conserva el blanco cálido original. */ }
    }
    video.addEventListener('loadeddata', blendBackground);
    video.addEventListener('seeked', blendBackground);
    video.addEventListener('pause', blendBackground);

    function label() {
      video.setAttribute('aria-label', video.controls ? 'Presentación de la app Reto Cintura 28' : (video.paused ? 'Reproducir presentación de la app' : 'Pausar presentación de la app'));
    }
    function play() {
      if (!inView || userPaused || motion.matches) return;
      var promise = video.play();
      if (promise && promise.catch) promise.catch(function (error) {
        if (error.name === 'AbortError') return;
        video.controls = true; video.removeAttribute('role'); label();
      });
    }
    function loadSource() {
      if (video.getAttribute('src') === selectedSource) return;
      var time = video.currentTime || 0;
      video.pause();
      video.src = selectedSource;
      video.addEventListener('loadedmetadata', function () { if (time) video.currentTime = Math.min(time, video.duration); }, { once: true });
      video.load();
    }
    function select() {
      var layout = hero ? 'hero' : (desktop.matches ? 'desktop' : 'mobile'), file = desktop.matches ? 'escritorio' : 'celular';
      video.dataset.layout = layout;
      video.width = !hero && desktop.matches ? 1920 : 1080; video.height = !hero && desktop.matches ? 1080 : 1350;
      video.poster = hero ? 'assets/motion/hero-app-poster.webp' : 'assets/motion/seccion-app-' + file + '-poster.webp';
      selectedSource = (hero ? 'assets/motion/hero-app' : 'assets/motion/seccion-app-' + file) + '.' + format;
      if (inView) { loadSource(); play(); }
    }
    function preference() {
      video.controls = motion.matches;
      video.tabIndex = 0;
      if (motion.matches) { video.pause(); video.removeAttribute('role'); }
      else { video.setAttribute('role', 'button'); play(); }
      label();
    }
    function toggle() {
      if (video.controls) return;
      userPaused = !video.paused;
      if (userPaused) video.pause(); else { inView = true; loadSource(); play(); }
    }
    video.addEventListener('click', toggle);
    video.addEventListener('keydown', function (e) {
      if (!video.controls && (e.key === ' ' || e.key === 'Enter')) { e.preventDefault(); toggle(); }
    });
    video.addEventListener('play', label); video.addEventListener('pause', label);
    desktop.addEventListener('change', select); motion.addEventListener('change', preference);
    select(); preference();
    if ('IntersectionObserver' in W) {
      new IntersectionObserver(function (entries) {
        inView = entries[0].isIntersecting;
        if (inView) { loadSource(); play(); } else video.pause();
      }, { rootMargin: '200px 0px' }).observe(video);
    } else { inView = true; loadSource(); play(); }
  });

  /* Una galería para videos y fotos; solo se mueve cuando los casos no entran. */
  all('[data-results-carousel]').forEach(function (carousel) {
    var track = carousel.querySelector('.r28-results-grid'), pause = carousel.parentElement.querySelector('[data-results-pause]');
    if (!track || !pause) return;
    var originals = all('.r28-result-card', track), motion = W.matchMedia('(prefers-reduced-motion: reduce)');
    originals.forEach(function (card, index) {
      card.setAttribute('data-result-pair', String(index));
      var copy = card.cloneNode(true); copy.classList.add('result-duplicate'); copy.setAttribute('aria-hidden', 'true');
      all('[id]', copy).forEach(function (item) { item.removeAttribute('id'); });
      all('video, button, a', copy).forEach(function (item) { item.tabIndex = -1; }); track.appendChild(copy);
    });
    function paused(value) {
      carousel.classList.toggle('is-paused', value); pause.setAttribute('aria-pressed', String(value));
      pause.textContent = value ? 'Reanudar movimiento' : 'Pausar movimiento';
    }
    carousel.r28PauseResults = paused;
    function measure() {
      var styles = W.getComputedStyle(carousel), gap = parseFloat(W.getComputedStyle(track).columnGap) || 14;
      var width = originals.reduce(function (sum, card) { return sum + card.offsetWidth; }, 0) + gap * Math.max(0, originals.length - 1);
      var available = carousel.clientWidth - parseFloat(styles.paddingLeft) - parseFloat(styles.paddingRight);
      var overflow = width > available + 1;
      carousel.classList.toggle('is-overflowing', overflow); pause.hidden = !overflow || motion.matches;
      if (!overflow) carousel.scrollLeft = 0;
    }
    carousel.classList.add('is-ready'); measure();
    if ('ResizeObserver' in W) new ResizeObserver(measure).observe(carousel); else W.addEventListener('resize', measure);
    motion.addEventListener('change', measure);
    pause.addEventListener('click', function () {
      var resume = carousel.classList.contains('is-paused') || carousel.classList.contains('is-manual');
      if (resume) { all('video', carousel).forEach(function (video) { video.pause(); }); carousel.classList.remove('is-manual'); carousel.scrollLeft = 0; }
      paused(!resume);
    });
    carousel.addEventListener('keydown', function (e) {
      if (e.target !== carousel) return;
      if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); pause.click(); }
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        e.preventDefault(); carousel.classList.add('is-manual'); paused(true);
        carousel.scrollBy({ left: (e.key === 'ArrowRight' ? 1 : -1) * (originals[0].offsetWidth + 14), behavior: motion.matches ? 'auto' : 'smooth' });
      }
    });
    carousel.addEventListener('focusin', function (e) {
      if (e.target !== carousel && e.target.matches(':focus-visible') && !carousel.classList.contains('is-manual')) {
        carousel.classList.add('is-manual'); paused(true); e.target.scrollIntoView({ block: 'nearest', inline: 'nearest' });
      }
    });
    if ('IntersectionObserver' in W) {
      carousel.classList.add('is-outside'); new IntersectionObserver(function (entries) { carousel.classList.toggle('is-outside', !entries[0].isIntersecting); }, { rootMargin: '100px 0px' }).observe(carousel);
    }
    function visibility() { carousel.classList.toggle('is-inactive', D.hidden); }
    D.addEventListener('visibilitychange', visibility); visibility();
  });

  /* Fotos: el estado antes/después se sincroniza también en la copia del bucle. */
  var comparisons = all('[data-result-comp]');
  comparisons.forEach(function (card) {
    var button = card.querySelector('[data-result-flip]');
    if (!button) return;
    button.addEventListener('click', function () {
      var after = !card.classList.contains('show-after'), pair = card.getAttribute('data-result-pair');
      comparisons.forEach(function (item) {
        if (item !== card && (pair === null || item.getAttribute('data-result-pair') !== pair)) return;
        item.classList.toggle('show-after', after);
        var control = item.querySelector('[data-result-flip]'); control.setAttribute('aria-pressed', String(after));
        control.setAttribute('aria-label', (after ? 'Ver el antes de ' : 'Ver el después de ') + item.querySelector('figcaption b').textContent);
        all('img', control).forEach(function (img) { img.setAttribute('aria-hidden', String(img.classList.contains('result-after') !== after)); });
        item.querySelector('[data-result-phase]').textContent = after ? 'Después' : 'Antes';
        item.querySelector('[data-result-hint]').textContent = after ? 'Ver antes' : 'Ver después';
      });
      var gallery = card.closest('[data-results-carousel]'); if (gallery) gallery.r28PauseResults(true);
    });
  });

  /* Clientas: videos completos de 8 s; el antes ocupa los primeros 4 s. */
  var results = all('[data-result-video]');
  results.forEach(function (video) {
    var phase = video.parentElement.querySelector('[data-result-phase]');
    function updatePhase() { if (phase) phase.textContent = video.currentTime >= 4 ? 'Después' : 'Antes'; }
    video.addEventListener('timeupdate', updatePhase); video.addEventListener('seeked', updatePhase);
    video.addEventListener('play', function () {
      results.forEach(function (other) { if (other !== video) other.pause(); });
      var gallery = video.closest('[data-results-carousel]'); if (gallery) gallery.r28PauseResults(true);
    });
    if ('IntersectionObserver' in W) {
      new IntersectionObserver(function (entries) { if (!entries[0].isIntersecting) video.pause(); }).observe(video);
    }
    updatePhase();
  });

  /* Identificación: bucle compacto, pausa explícita y lista completa si se reduce el movimiento. */
  all('[data-pains-loop]').forEach(function (loop) {
    var list = loop.querySelector('.r28-pains'), toggle = loop.querySelector('[data-pains-toggle]');
    if (!list || !toggle) return;
    all('li', list).forEach(function (li) {
      var copy = li.cloneNode(true); copy.classList.add('dup'); copy.setAttribute('aria-hidden', 'true'); list.appendChild(copy);
    });
    loop.classList.add('is-ready'); toggle.hidden = false;
    toggle.addEventListener('click', function () {
      var paused = loop.classList.toggle('is-paused');
      toggle.setAttribute('aria-pressed', String(paused));
      toggle.textContent = paused ? 'Reanudar movimiento' : 'Pausar movimiento';
    });
  });

  /* Accesos: una fila móvil compacta; escritorio conserva la lista completa. */
  all('[data-access-carousel]').forEach(function (carousel) {
    var list = carousel.querySelector('.r28-stack'), pause = carousel.parentElement.querySelector('[data-access-pause]');
    if (!list || !pause) return;
    all('li', list).forEach(function (item) {
      var copy = item.cloneNode(true); copy.classList.add('access-duplicate'); copy.setAttribute('aria-hidden', 'true'); list.appendChild(copy);
    });
    carousel.classList.add('is-ready'); pause.hidden = false;
    function paused(value) {
      carousel.classList.toggle('is-paused', value); pause.setAttribute('aria-pressed', String(value));
      pause.textContent = value ? 'Reanudar movimiento' : 'Pausar movimiento';
    }
    pause.addEventListener('click', function () {
      var manual = carousel.classList.contains('is-manual');
      if (manual) { carousel.classList.remove('is-manual'); carousel.scrollLeft = 0; }
      paused(manual ? false : !carousel.classList.contains('is-paused'));
    });
    carousel.addEventListener('keydown', function (e) {
      if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); pause.click(); }
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        e.preventDefault(); carousel.classList.add('is-manual'); paused(true);
        carousel.scrollBy({ left: (e.key === 'ArrowRight' ? 1 : -1) * (list.firstElementChild.offsetWidth + 14), behavior: W.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
      }
    });
    if ('IntersectionObserver' in W) {
      carousel.classList.add('is-outside');
      new IntersectionObserver(function (entries) { carousel.classList.toggle('is-outside', !entries[0].isIntersecting); }, { rootMargin: '100px 0px' }).observe(carousel);
    }
    function visibility() { carousel.classList.toggle('is-inactive', D.hidden); }
    D.addEventListener('visibilitychange', visibility); visibility();
  });

  /* ---------- 2. Comparadores de platos ---------- */
  all('[data-food-carousel]').forEach(function (carousel) {
    var track = carousel.querySelector('.r28-comps'), pause = carousel.parentElement.querySelector('[data-food-pause]');
    if (!track || !pause) return;
    all('[data-comp]', track).forEach(function (card, index) {
      card.setAttribute('data-food-pair', String(index));
      var copy = card.cloneNode(true); copy.classList.add('food-duplicate'); copy.setAttribute('aria-hidden', 'true');
      all('button', copy).forEach(function (button) { button.tabIndex = -1; }); track.appendChild(copy);
    });
    carousel.classList.add('is-ready'); pause.hidden = false;
    pause.addEventListener('click', function () {
      var paused = carousel.classList.toggle('is-paused'); pause.setAttribute('aria-pressed', String(paused));
      pause.textContent = paused ? 'Reanudar movimiento' : 'Pausar movimiento';
    });
    carousel.addEventListener('focusout', function (e) { if (!carousel.contains(e.relatedTarget)) carousel.scrollLeft = 0; });
  });
  var comps = all('[data-comp]');
  function flipPair(card, value, touched) {
    var pair = card.getAttribute('data-food-pair');
    comps.forEach(function (item) {
      if (item === card || (pair !== null && item.getAttribute('data-food-pair') === pair)) {
        item.classList.toggle('show-b', value); if (touched) item.setAttribute('data-touched', '1');
      }
    });
  }
  comps.forEach(function (c) {
    c.querySelector('[data-flip]').addEventListener('click', function () { flipPair(c, !c.classList.contains('show-b'), true); });
  });
  if (comps.length && 'IntersectionObserver' in W && !reduce) {
    var peek = new IntersectionObserver(function (es) {
      es.forEach(function (x) {
        if (!x.isIntersecting) return;
        peek.unobserve(x.target);
        var c = x.target, i = comps.indexOf(c);
        setTimeout(function () { if (!c.hasAttribute('data-touched')) flipPair(c, true, false); }, 1300 + i * 350);
      });
    }, { threshold: 0.6 });
    comps.forEach(function (c) { peek.observe(c); });
  }

})();
