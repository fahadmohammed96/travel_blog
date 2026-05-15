// ============ CASA · JS GLOBALE ============
// Drawer, header scroll, fav toggle, FAQ accordion, chip filters,
// form handlers, toast notifications, smooth scroll, modal helpers.

(function() {
  'use strict';

  // ============ TOAST ============
  function ensureToastHost() {
    let host = document.getElementById('toast-host');
    if (!host) {
      host = document.createElement('div');
      host.id = 'toast-host';
      host.setAttribute('style', 'position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%); z-index: 300; display: flex; flex-direction: column; gap: 8px; pointer-events: none;');
      document.body.appendChild(host);
    }
    return host;
  }
  function toast(msg, kind) {
    kind = kind || 'ok';
    var host = ensureToastHost();
    var el = document.createElement('div');
    el.setAttribute('role', 'status');
    el.style.cssText = [
      'background: ' + (kind === 'err' ? 'var(--danger, #B5462E)' : 'var(--ink-1000, #0F1A14)'),
      'color: var(--cream-50, #FDFAF3)',
      'padding: 12px 22px',
      'border-radius: 999px',
      'font-family: var(--font-body)',
      'font-size: 14px',
      'box-shadow: 0 12px 32px rgba(15,26,20,0.18)',
      'display: inline-flex',
      'align-items: center',
      'gap: 10px',
      'opacity: 0',
      'transform: translateY(8px)',
      'transition: opacity 220ms cubic-bezier(.22,1,.36,1), transform 220ms cubic-bezier(.22,1,.36,1)',
      'pointer-events: auto'
    ].join(';');
    var icon = kind === 'err' ? '⚠' : (kind === 'heart' ? '♥' : '✓');
    el.innerHTML = '<span style="color: ' + (kind === 'heart' ? '#E87B5A' : 'var(--sun-300,#FBDB85)') + '; font-size: 16px;">' + icon + '</span><span>' + msg + '</span>';
    host.appendChild(el);
    requestAnimationFrame(function() { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; });
    setTimeout(function() {
      el.style.opacity = '0';
      el.style.transform = 'translateY(8px)';
      setTimeout(function() { el.remove(); }, 240);
    }, 2400);
  }
  window.casaToast = toast;

  // ============ HEADER SCROLL ============
  document.addEventListener('scroll', function() {
    var hdr = document.querySelector('.hdr');
    if (!hdr) return;
    if (window.scrollY > 80) hdr.classList.add('scrolled');
    else hdr.classList.remove('scrolled');
  }, { passive: true });

  // ============ MOBILE DRAWER ============
  function setupDrawer() {
    var toggle = document.querySelector('.drawer-toggle');
    var drawer = document.querySelector('.drawer');
    var scrim = document.querySelector('.drawer-scrim');
    var close = document.querySelector('.drawer-close');
    if (!drawer) return;
    function open() { drawer.classList.add('open'); document.body.style.overflow = 'hidden'; }
    function dismiss() { drawer.classList.remove('open'); document.body.style.overflow = ''; }
    if (toggle) toggle.addEventListener('click', open);
    if (scrim) scrim.addEventListener('click', dismiss);
    if (close) close.addEventListener('click', dismiss);
    document.querySelectorAll('.drawer-link').forEach(function(l) {
      l.addEventListener('click', function(e) {
        // se ha href, lascialo navigare. altrimenti chiudi.
        if (!l.getAttribute('href')) dismiss();
      });
    });
    document.addEventListener('keydown', function(e) { if (e.key === 'Escape') dismiss(); });
  }

  // ============ FAVORITE TOGGLE ============
  document.addEventListener('click', function(e) {
    var fav = e.target.closest('.trip-fav, .pdp-fav');
    if (!fav) return;
    e.preventDefault();
    e.stopPropagation();
    var on = fav.dataset.on === '1';
    fav.dataset.on = on ? '0' : '1';
    var svg = fav.querySelector('svg');
    if (svg) {
      svg.setAttribute('fill', on ? 'none' : 'currentColor');
    }
    fav.style.transform = 'scale(1.18)';
    setTimeout(function() { fav.style.transform = ''; }, 240);
    toast(on ? 'Rimosso dai salvati' : 'Salvato per dopo', 'heart');
  });

  // ============ CHIP FILTERS (single-select per group) ============
  // I chip dentro un container .filter-bar-row, .diario-filter, .pdp-tag-row,
  // o esplicitamente data-chip-group si comportano da radio.
  document.addEventListener('click', function(e) {
    var chip = e.target.closest('.chip');
    if (!chip) return;
    // Skip if explicitly multi-select via data-multi attribute
    var container = chip.closest('.filter-bar-row, .diario-filter, .pdp-tag-row, [data-chip-group]');
    if (!container) {
      // Single-toggle behavior (no group)
      chip.classList.toggle('on');
      return;
    }
    if (container.hasAttribute('data-multi')) {
      chip.classList.toggle('on');
      return;
    }
    container.querySelectorAll('.chip').forEach(function(c) { c.classList.remove('on'); });
    chip.classList.add('on');
  });

  // ============ MOOD PILL active toggle ============
  document.addEventListener('click', function(e) {
    var pill = e.target.closest('.mood-pill');
    if (!pill) return;
    // se ha href, lascialo navigare normalmente
    if (pill.getAttribute('href')) return;
    pill.classList.toggle('on');
  });

  // ============ FORMS — newsletter + search + contact ============
  // Newsletter: cattura tutti i form .ftr-news e form[data-form="newsletter"]
  function handleNewsletter(form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var email = (form.querySelector('input[type="email"]') || {}).value || '';
      if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
        toast('Email non valida — riprova', 'err');
        return;
      }
      var btn = form.querySelector('button[type="submit"]');
      var orig;
      if (btn) { orig = btn.textContent; btn.textContent = 'Iscrivo…'; btn.disabled = true; }
      setTimeout(function() {
        toast('Iscritta al dispaccio · ti aspettiamo mercoledì');
        if (btn) { btn.textContent = '✓ iscritto'; btn.disabled = true; }
        var inp = form.querySelector('input[type="email"]');
        if (inp) inp.value = '';
      }, 700);
    });
  }
  document.querySelectorAll('.ftr-news, form[data-form="newsletter"]').forEach(handleNewsletter);

  // Search submit
  function handleSearch() {
    document.querySelectorAll('.search-wrap').forEach(function(wrap) {
      var btn = wrap.querySelector('.btn-primary');
      if (!btn) return;
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        var where = (wrap.querySelector('#search-where') || {}).value || 'ovunque';
        var when = (wrap.querySelector('#search-when') || {}).value || 'tutto l\'anno';
        toast('Cerco: ' + where + ' · ' + when);
        // simulated navigate
        setTimeout(function() {
          var here = window.location.pathname;
          if (here.indexOf('casa-partenze') === -1) window.location.href = 'casa-partenze.html';
        }, 900);
      });
    });
  }

  // Generic form data-form handler (contact, bespoke, booking)
  function handleGenericForms() {
    document.querySelectorAll('form[data-form]').forEach(function(form) {
      if (form.dataset.bound === '1') return;
      var type = form.dataset.form;
      if (type === 'newsletter') return; // handled above
      form.dataset.bound = '1';
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        var btn = form.querySelector('button[type="submit"]');
        var orig;
        if (btn) { orig = btn.textContent; btn.textContent = 'Invio…'; btn.disabled = true; }
        // Validate required fields
        var invalid = false;
        form.querySelectorAll('[required]').forEach(function(f) {
          if (!f.value || f.value.trim() === '') {
            invalid = true;
            var fld = f.closest('.fld'); if (fld) fld.classList.add('error');
          } else {
            var fld = f.closest('.fld'); if (fld) fld.classList.remove('error');
          }
        });
        if (invalid) {
          if (btn) { btn.textContent = orig; btn.disabled = false; }
          toast('Compila i campi obbligatori', 'err');
          return;
        }
        var msg = form.dataset.successMsg ||
          (type === 'contact' ? 'Messaggio inviato · ti rispondiamo entro 48h' :
           type === 'bespoke' ? 'Richiesta inviata · senti da noi entro 3 giorni' :
           type === 'booking' ? 'Prenotazione confermata · email in arrivo' :
           type === 'gift'    ? 'Gift card creata · arriva via email' :
           type === 'share'   ? 'Foto ricevute · grazie!' :
                                'Inviato');
        setTimeout(function() {
          toast(msg);
          if (btn) { btn.textContent = '✓ fatto'; }
          // Eventually scroll to top of form / show success state
          var success = form.querySelector('.form-success');
          if (success) { form.style.display = 'none'; success.style.display = 'block'; }
        }, 900);
      });
    });
  }

  // ============ BOOKING STEPPER (multi-step) ============
  function setupStepper() {
    var stepper = document.querySelector('.stepper-form');
    if (!stepper) return;
    var steps = [...stepper.querySelectorAll('.stepper-step')];
    var dots = [...stepper.querySelectorAll('.stepper-dot')];
    var idx = parseInt(stepper.dataset.step || '0', 10);
    function render() {
      steps.forEach(function(s, i) { s.style.display = i === idx ? '' : 'none'; });
      dots.forEach(function(d, i) {
        d.classList.toggle('cur', i === idx);
        d.classList.toggle('done', i < idx);
      });
      // scroll to top of stepper for visibility
      stepper.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    stepper.addEventListener('click', function(e) {
      var next = e.target.closest('[data-step-next]');
      var prev = e.target.closest('[data-step-prev]');
      if (next) {
        e.preventDefault();
        if (idx < steps.length - 1) { idx++; render(); }
      } else if (prev) {
        e.preventDefault();
        if (idx > 0) { idx--; render(); }
      }
    });
    render();
  }

  // ============ FILTER count animation (decorative) ============
  function setupFilterCount() {
    document.querySelectorAll('.filter-results').forEach(function(el) {
      var b = el.querySelector('b');
      if (!b) return;
      var n = parseInt(b.textContent, 10);
      var dur = 500;
      var start = null;
      function tick(t) {
        if (start == null) start = t;
        var prog = Math.min(1, (t - start) / dur);
        b.textContent = Math.round(prog * n);
        if (prog < 1) requestAnimationFrame(tick);
        else b.textContent = n;
      }
      requestAnimationFrame(tick);
    });
  }

  // ============ SMOOTH ANCHOR SCROLL ============
  document.addEventListener('click', function(e) {
    var a = e.target.closest('a[href^="#"]');
    if (!a) return;
    var id = a.getAttribute('href').slice(1);
    if (!id) return;
    var target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    var top = target.getBoundingClientRect().top + window.scrollY - 110;
    window.scrollTo({ top: top, behavior: 'smooth' });
  });

  // ============ INIT ============
  function init() {
    setupDrawer();
    handleSearch();
    handleGenericForms();
    setupStepper();
    setupFilterCount();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
