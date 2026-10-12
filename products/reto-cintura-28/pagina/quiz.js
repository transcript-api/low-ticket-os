/* Reto Cintura 28 · Apertura, precio y quiz de la página de ventas.
   - Sin dependencias. Lee la configuración que carga venta.js (evento "r28:config").
   - El quiz NO envía respuestas a ninguna herramienta de anuncios: solo dos eventos sin datos (QuizStart y QuizComplete).
   - El precio tachado, el % y la línea roja de urgencia solo aparecen si hay una fecha real de fin (launchEndsAt) en landing-config.json.
     La fecha y la cuenta regresiva quedan ocultas salvo mostrarFecha / mostrarCuenta en true. */
(function () {
  'use strict';
  var W = window, D = document;
  var CFG = null, TIMER = null, answers = {}, step = 0, started = false, lastFocus = null;
  var params = new URLSearchParams(W.location.search);

  function all(s, r) { return Array.prototype.slice.call((r || D).querySelectorAll(s)); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function track(name) { try { if (W.fbq) W.fbq('trackCustom', name); if (W.clarity) W.clarity('event', name); } catch (e) {} }

  /* ---------- Preguntas ---------- */
  var QS = [
    { id: 'pasado', p: '¿Qué te pasó las otras veces que quisiste afinar tu cintura?', ops: [
      { k: 'semana', t: 'Empecé con todo y a la semana abandoné' },
      { k: 'tiempo', t: 'Me quedé sin tiempo' },
      { k: 'dietas', t: 'Las dietas eran muy estrictas' },
      { k: 'aburrimiento', t: 'Me aburrí de hacer siempre lo mismo' },
      { k: 'resultados', t: 'No veía resultados y me desanimé' },
      { k: 'nunca', t: 'Nunca empecé en serio' } ] },
    { id: 'tiempo', p: '¿Cuánto tiempo real tenés en un día normal?', ops: [
      { k: 'diez', t: 'Unos 10 minutos' },
      { k: 'veinte', t: 'Entre 20 y 30 minutos' },
      { k: 'varia', t: 'Depende del día, cambia mucho' } ] },
    { id: 'dia', p: '¿Cómo es tu día a día?', ops: [
      { k: 'trabajo', t: 'Trabajo muchas horas' },
      { k: 'familia', t: 'Cuido a mi familia casi todo el día' },
      { k: 'lleno', t: 'Tengo mil cosas y poco tiempo para mí' },
      { k: 'otra', t: 'Otra situación' } ] },
    { id: 'distinto', p: '¿Qué necesitarías que sea distinto esta vez?', ops: [
      { k: 'guia', t: 'Que alguien me diga qué hacer cada día' },
      { k: 'planb', t: 'Un plan para los días que no puedo' },
      { k: 'comida', t: 'Comer normal, sin prohibidos ni contar calorías' },
      { k: 'avance', t: 'Ver mi avance de verdad' } ] },
    { id: 'meta', p: '¿Qué te gustaría sentir el Día 28?', ops: [
      { k: 'ropa', t: 'Que la ropa me quede cómoda' },
      { k: 'energia', t: 'Más energía todos los días' },
      { k: 'terminar', t: 'Haber terminado algo por primera vez' },
      { k: 'fuerza', t: 'Sentirme más fuerte' } ] },
    { id: 'cuando', p: 'Si hoy tuvieras el plan armado día por día, ¿cuándo empezarías?', ops: [
      { k: 'hoy', t: 'Hoy mismo' },
      { k: 'manana', t: 'Mañana' },
      { k: 'semana', t: 'Esta semana' } ] }
  ];

  var POR_QUE = {
    semana: 'Por eso este reto arranca chico a propósito: un plan armado día por día, de 20 a 30 minutos, y un Plan B de 8 minutos para que un mal día no corte la cadena.',
    tiempo: 'Ya está pensado para eso: entrenos de 20 a 30 minutos y un Plan B de 8 minutos para los días imposibles.',
    dietas: 'Acá no hay dieta: método del plato, 32 recetas con ingredientes comunes y nada prohibido.',
    aburrimiento: 'Cada semana cambia el ritmo y cada día trae algo nuevo: otro entreno, una idea para la cabeza y una misión.',
    resultados: 'Vas a medir lo que la balanza no muestra: cintura, ropa y fuerza el Día 0, el 14 y el 29. Progreso real, sin prometerte un número.',
    nunca: 'Es el momento ideal: el plan te dice exactamente qué hacer cada día. Solo tenés que abrirlo.'
  };
  var SERVIRA = {
    guia: 'La app te muestra el entreno de hoy y un timer te dice cuándo trabajar, cuándo pausar y qué ejercicio sigue.',
    planb: 'El Plan B de 8 minutos y un protocolo para volver si faltás un día: nunca es “perdí todo”.',
    comida: 'El método del plato, porciones con la mano y 32 recetas de supermercado.',
    avance: 'Medición de cintura, ropa y test de fuerza, más racha y calendario para ir tachando.'
  };
  var TIEMPO = {
    diez: 'Con 10 minutos podés arrancar con el Plan B; el reto completo pide 20 a 30.',
    veinte: 'Tus 20 a 30 minutos son justo lo que pide el reto.',
    varia: 'Los días justos usás el Plan B de 8 minutos; los demás, el entreno completo.'
  };
  var DIA = {
    trabajo: 'Lo hacés antes o después del trabajo, en tu casa y sin traslados.',
    familia: 'Se hace en el living, sin salir de casa, entre una cosa y otra del día.',
    lleno: 'No es una cosa más para pensar: la app ya te dice qué toca hoy y cuánto dura.',
    otra: 'Elegís el momento del día que te quede mejor; el timer hace el resto.'
  };
  /* El titular del resultado repite la meta que eligió (no promete un resultado). */
  var META = {
    ropa: 'Tu plan para sentirte cómoda con tu ropa.',
    energia: 'Tu plan para tener más energía cada día.',
    terminar: 'Tu plan para terminar algo, esta vez sí.',
    fuerza: 'Tu plan para sentirte más fuerte.'
  };
  var CIERRE = {
    hoy: 'Tenés acceso inmediato: podés hacer el Día 0 hoy mismo.',
    manana: 'Mañana a esta hora podés estar en el Día 1.',
    semana: 'Dejalo listo hoy y arrancá cuando quieras: el acceso no vence.'
  };

  /* ---------- Precio y cuenta regresiva ---------- */
  function endsAt() {
    if (params.get('demo') === 'lanzamiento') return Date.now() + 3 * 86400000 + 4 * 3600000;
    var t = CFG && CFG.launchEndsAt ? Date.parse(CFG.launchEndsAt) : NaN;
    return isNaN(t) ? 0 : t;
  }
  function demo() { return params.get('demo') === 'lanzamiento'; }
  function listPrice() { return (CFG && CFG.listPrice) || (demo() ? 'US$ 45,43' : ''); }
  function launchOn() { return !!(CFG && listPrice() && endsAt() > Date.now()); }
  function two(n) { return (n < 10 ? '0' : '') + n; }
  function remaining() {
    var ms = Math.max(0, endsAt() - Date.now()), s = Math.floor(ms / 1000);
    var d = Math.floor(s / 86400), h = Math.floor(s % 86400 / 3600), m = Math.floor(s % 3600 / 60), x = s % 60;
    return (d ? d + ' d ' : '') + two(h) + ':' + two(m) + ':' + two(x);
  }
  function fmtDate() {
    var d = new Date(endsAt());
    var meses = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
    return d.getDate() + ' de ' + meses[d.getMonth()];
  }
  /* Línea roja de urgencia. Sin fecha ni cuenta regresiva salvo que mostrarFecha / mostrarCuenta estén en true. */
  function urgencyText() {
    return (CFG.urgencia || (CFG.launchLabel || 'Precio de lanzamiento') + ' por tiempo limitado') + (CFG.mostrarFecha ? ' · hasta el ' + fmtDate() : '');
  }
  function countHTML() { return CFG.mostrarCuenta ? ' · quedan <b data-countdown>' + remaining() + '</b>' : ''; }
  function urgencyHTML() { return '<i aria-hidden="true"></i><span>' + esc(urgencyText()) + countHTML() + '</span>'; }
  function priceHTML(size) {
    var price = esc(CFG.price);
    if (!launchOn()) {
      return '<div class="pb pb-' + size + '"><b class="pb-now">' + price + '</b><span class="pb-note">' + esc(CFG.priceNote || 'Pago único. Acceso inmediato.') + '</span></div>';
    }
    var off = CFG.discountLabel || (demo() ? '−65 %' : '');
    return '<div class="pb pb-' + size + ' is-launch">' + (demo() ? '<span class="pb-demo">Vista previa</span>' : '') +
      '<div class="pb-row"><s class="pb-list"><span class="pb-sr">Antes </span>' + esc(listPrice()) + '</s><b class="pb-now">' + price + '</b>' +
      (off ? '<span class="pb-off">' + esc(off) + '</span>' : '') + '</div>' +
      (size === 'm' ? '<p class="pb-red">' + urgencyHTML() + '</p>' : '') + '</div>';
  }
  function paintPrices() {
    if (!CFG) return;
    all('[data-price-block]').forEach(function (el) { el.innerHTML = priceHTML(el.getAttribute('data-price-block') || 'm'); });
    all('[data-cfg="price"]').forEach(function (el) { el.textContent = CFG.price; });
    all('[data-cfg="priceLabel"]').forEach(function (el) { el.textContent = launchOn() ? (CFG.launchLabel || 'Precio de lanzamiento') : (CFG.priceLabelPlain || 'Pago único'); });
    all('[data-list-price]').forEach(function (el) {
      if (launchOn()) { el.textContent = listPrice(); el.hidden = false; } else { el.hidden = true; }
    });
    all('[data-urgency]').forEach(function (el) {
      if (launchOn()) { el.innerHTML = urgencyHTML(); el.hidden = false; } else { el.hidden = true; }
    });
    all('[data-deadline]').forEach(function (el) {
      if (launchOn()) { el.innerHTML = CFG.mostrarCuenta ? 'Quedan <b data-countdown>' + remaining() + '</b>' : esc(CFG.urgenciaCorta || 'Por tiempo limitado'); el.hidden = false; } else { el.hidden = true; }
    });
  }
  function tick() {
    if (!CFG) return;
    if (!launchOn() && D.querySelector('.is-launch')) { paintPrices(); return; }
    var r = launchOn() ? remaining() : '';
    all('[data-countdown]').forEach(function (el) { el.textContent = r; });
  }

  /* ---------- Overlay del quiz ---------- */
  var root = null;
  function theme() { return params.get('tema') || (CFG && CFG.tema) || 'noche'; }
  function build() {
    if (root) return;
    root = D.createElement('div');
    root.className = 'qz'; root.setAttribute('data-clarity-mask', 'True'); root.setAttribute('role', 'dialog'); root.setAttribute('aria-modal', 'true'); root.setAttribute('aria-label', 'Test: ¿es para vos?'); root.hidden = true;
    root.innerHTML = '<div class="qz-in"><header class="qz-top"><button type="button" class="qz-back" data-qz="back" aria-label="Volver">‹</button>' +
      '<div class="qz-bar" aria-hidden="true"><i></i></div><button type="button" class="qz-x" data-qz="close" aria-label="Cerrar">×</button></header>' +
      '<div class="qz-body" aria-live="polite"></div></div>';
    (D.querySelector('.r28') || D.body).appendChild(root);
    root.addEventListener('click', function (e) {
      var b = e.target.closest('[data-qz]'); if (!b) return;
      var a = b.getAttribute('data-qz');
      if (a === 'close') close();
      else if (a === 'back') { if (step > 0) { step--; render(); } else close(); }
      else if (a === 'opt') pick(+b.getAttribute('data-i'));
      else if (a === 'info') { close(); var t = D.getElementById('precio'); if (t) t.scrollIntoView({ behavior: 'smooth' }); }
      else if (a === 'redo') { answers = {}; step = 0; render(); }
    });
    D.addEventListener('keydown', function (e) { if (e.key === 'Escape' && root && !root.hidden) close(); });
  }
  function open() {
    build(); lastFocus = D.activeElement;
    root.setAttribute('data-theme', theme()); root.hidden = false; D.documentElement.classList.add('qz-lock');
    if (!started) { started = true; track('QuizStart'); }
    answers = {}; step = 0; render();
  }
  function close() {
    if (!root) return; root.hidden = true; D.documentElement.classList.remove('qz-lock');
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  function setBar(f) { var i = root.querySelector('.qz-bar i'); if (i) i.style.width = Math.round(f * 100) + '%'; }
  function render() {
    var body = root.querySelector('.qz-body'), top = root.querySelector('.qz-top');
    if (step >= QS.length) { top.hidden = false; setBar(1); return result(body); }
    var q = QS[step], sel = answers[q.id];
    /* Solo Clarity y sin respuestas: muestra en qué pregunta abandonan. */
    try { if (W.clarity) W.clarity('event', 'quiz_p' + (step + 1)); } catch (e) {}
    setBar((step + 1) / (QS.length + 1));
    body.innerHTML = '<div class="qz-q" key="' + step + '"><p class="qz-count">Pregunta ' + (step + 1) + ' de ' + QS.length + '</p>' +
      '<h2 class="qz-h" tabindex="-1">' + esc(q.p) + '</h2><p class="qz-hint">Elegí la que más se parezca a vos.</p><div class="qz-ops">' +
      q.ops.map(function (o, i) { return '<button type="button" class="qz-op' + (sel === i ? ' is-sel' : '') + '" data-qz="opt" data-i="' + i + '"><span>' + esc(o.t) + '</span><i aria-hidden="true"></i></button>'; }).join('') +
      '</div></div>';
    var h = body.querySelector('.qz-h'); if (h) h.focus({ preventScroll: true });
    root.scrollTop = 0; body.scrollTop = 0;
  }
  function pick(i) {
    var q = QS[step]; answers[q.id] = i;
    var btns = all('.qz-op', root); btns.forEach(function (b, j) { b.classList.toggle('is-sel', j === i); });
    W.setTimeout(function () { step++; render(); }, 240);
  }
  function key(id) { var q = QS.filter(function (x) { return x.id === id; })[0]; return q.ops[answers[id]].k; }
  function text(id) { var q = QS.filter(function (x) { return x.id === id; })[0]; return q.ops[answers[id]].t; }

  function result(body) {
    track('QuizComplete');
    if (W.fbq) { try { W.fbq('track', 'ViewContent', { content_name: 'Reto Cintura 28 · resultado' }); } catch (e) {} }
    var buy = (CFG && CFG.checkoutUrl) ? CFG.checkoutUrl : '#precio';
    var chips = [text('pasado'), text('tiempo'), text('meta')];
    body.innerHTML = '<div class="qz-res">' +
      '<p class="qz-kick">Tu resultado</p>' +
      '<h2 class="qz-rh">' + esc(META[key('meta')]) + '</h2>' +
      '<p class="qz-rs">Por lo que respondiste, el Reto Cintura 28 encaja con tu situación.</p>' +
      '<div class="qz-chips"><span class="qz-chips-t">Me contaste que:</span>' + chips.map(function (c) { return '<span class="qz-chip">' + esc(c) + '</span>'; }).join('') + '</div>' +
      '<div class="qz-card"><b>Lo que te pasó antes</b><p>' + esc(POR_QUE[key('pasado')]) + '</p></div>' +
      '<div class="qz-card"><b>Lo que más te va a servir</b><p>' + esc(SERVIRA[key('distinto')]) + '</p></div>' +
      '<div class="qz-card"><b>Tu tiempo y tu día</b><p>' + esc(TIEMPO[key('tiempo')] + ' ' + DIA[key('dia')]) + '</p></div>' +
      '<ul class="qz-inc"><li>App con timer guiado y materiales de por vida</li><li>Guía completa en formato historia</li><li>22 ejercicios con 3 niveles y 32 recetas</li><li>Plan B de 8 minutos y Semana 5 de regalo</li><li>7 semanas de asesoramiento personalizado por WhatsApp</li><li>Comunidad del reto en WhatsApp con acceso de por vida</li></ul>' +
      '<div class="qz-offer"><div data-price-block="l"></div>' +
      '<a class="qz-buy" data-buy href="' + esc(buy) + '">Quiero empezar mi reto</a>' +
      '<p class="pb-red pb-red-c" data-urgency hidden></p>' +
      '<p class="qz-close">' + esc(CIERRE[key('cuando')]) + '</p>' +
      '<button type="button" class="qz-info" data-qz="info">Ver todo lo que incluye ↓</button></div>' +
      '<p class="qz-g"><b>Garantía de 7 días.</b> Si sentís que no es para vos, pedís el reembolso y te devolvemos el 100 %.</p>' +
      '<p class="qz-s">Programa de hábitos y actividad física para personas adultas sanas. Si estás embarazada, tenés una lesión o una condición médica, consultá antes de empezar. Tus respuestas no se guardan ni se envían.</p>' +
      '<button type="button" class="qz-redo" data-qz="redo">Volver a hacer el test</button>' +
      '<div class="qz-fix is-off"><a class="qz-buy" data-buy href="' + esc(buy) + '">Empezar · <s data-list-price hidden></s> <span data-cfg="price"></span></a></div></div>';
    paintPrices(); root.scrollTop = 0; body.scrollTop = 0;
    var fix = body.querySelector('.qz-fix'), main = body.querySelector('.qz-offer .qz-buy');
    if (fix && main && 'IntersectionObserver' in W) new IntersectionObserver(function (es) { fix.classList.toggle('is-off', es[0].isIntersecting); }, { root: root, threshold: 0.6 }).observe(main);
    else if (fix) fix.classList.remove('is-off');
  }

  /* ---------- Vista previa de temas (solo con ?preview=1) ---------- */
  function previewSwitch() {
    if (!params.get('preview')) return;
    var b = D.createElement('div'); b.className = 'tema-sw';
    b.innerHTML = '<span>Tema</span><button type="button" data-t="noche">Noche</button><button type="button" data-t="hueso">Hueso</button>';
    b.addEventListener('click', function (e) { var t = e.target.getAttribute && e.target.getAttribute('data-t'); if (t) { setTheme(t); } });
    D.body.appendChild(b);
  }
  function setTheme(t) {
    all('[data-theme]').forEach(function (el) { el.setAttribute('data-theme', t); });
    D.documentElement.setAttribute('data-tema', t);
    if (root) root.setAttribute('data-theme', t);
  }

  /* ---------- Arranque ---------- */
  D.addEventListener('click', function (e) {
    var t = e.target.closest && e.target.closest('[data-quiz]');
    if (t) { e.preventDefault(); open(); }
  });
  function init(cfg) {
    CFG = cfg; setTheme(theme()); paintPrices();
    if (TIMER) W.clearInterval(TIMER); TIMER = W.setInterval(tick, 1000);
    if (params.get('quiz') === '1') open();
  }
  function heroWatch() {
    var h = D.getElementById('top'); if (!h || !('IntersectionObserver' in W)) { D.documentElement.classList.add('ap-past'); return; }
    new IntersectionObserver(function (es) { D.documentElement.classList.toggle('ap-past', !es[0].isIntersecting); }, { threshold: 0.05 }).observe(h);
  }
  heroWatch();
  (function () {
    var hit = {};
    W.addEventListener('scroll', function () {
      var h = D.documentElement, p = (W.scrollY + W.innerHeight) / Math.max(h.scrollHeight, 1);
      [[0.5, 'Scroll50'], [0.9, 'Scroll90']].forEach(function (x) { if (p >= x[0] && !hit[x[1]]) { hit[x[1]] = 1; track(x[1]); } });
    }, { passive: true });
  })();
  previewSwitch();
  if (W.R28CFG) init(W.R28CFG); else D.addEventListener('r28:config', function (e) { init(e.detail); });
})();
