/* the wRightWay Global Ministries — shared interactions */
(function () {
  'use strict';

  /* ── Nav scroll state ── */
  var nav = document.querySelector('nav.site-nav');
  if (nav) {
    var onScrollNav = function () {
      nav.classList.toggle('scrolled', window.scrollY > 8);
    };
    window.addEventListener('scroll', onScrollNav, { passive: true });
    onScrollNav();
  }

  /* ── Mobile drawer ── */
  var burger = document.getElementById('hamburger');
  var drawer = document.getElementById('mobDrawer');
  var veil = document.getElementById('mobVeil');
  function closeDrawer() {
    if (!drawer) return;
    burger.classList.remove('open');
    drawer.classList.remove('on');
    veil.classList.remove('on');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  if (burger && drawer && veil) {
    burger.addEventListener('click', function () {
      var open = drawer.classList.toggle('on');
      burger.classList.toggle('open', open);
      veil.classList.toggle('on', open);
      burger.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    });
    veil.addEventListener('click', closeDrawer);
    drawer.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeDrawer);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeDrawer();
    });
  }

  /* ── Announcement bar close ── */
  var annX = document.getElementById('annClose');
  if (annX) {
    annX.addEventListener('click', function () {
      var bar = document.getElementById('announce');
      if (bar) bar.style.display = 'none';
    });
  }

  /* ── Scroll-triggered reveal ── */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('in');
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* ── Animated stat counters ── */
  var statEls = document.querySelectorAll('[data-count]');
  if ('IntersectionObserver' in window && statEls.length) {
    var sIo = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        sIo.unobserve(en.target);
        var el = en.target;
        var target = parseInt(el.getAttribute('data-count'), 10) || 0;
        var suffix = el.getAttribute('data-suffix') || '';
        var dur = 1600, t0 = null;
        function tick(ts) {
          if (!t0) t0 = ts;
          var p = Math.min((ts - t0) / dur, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(target * eased).toLocaleString() + suffix;
          if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.4 });
    statEls.forEach(function (el) { sIo.observe(el); });
  }

  /* ── Hero particles ── */
  var pWrap = document.getElementById('particles');
  if (pWrap && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    for (var i = 0; i < 26; i++) {
      var p = document.createElement('span');
      p.className = 'hp ' + (i % 3 === 0 ? 'hp-gold' : 'hp-purple');
      var size = 2 + Math.random() * 4;
      p.style.width = size + 'px';
      p.style.height = size + 'px';
      p.style.left = Math.random() * 100 + '%';
      p.style.bottom = Math.random() * 45 + '%';
      p.style.setProperty('--d', (7 + Math.random() * 8) + 's');
      p.style.setProperty('--dl', (Math.random() * 9) + 's');
      pWrap.appendChild(p);
    }
  }

  /* ── Countdown (next Sunday 10:00 local = weekly worship & healing service) ── */
  var cdWrap = document.querySelector('[data-countdown]');
  if (cdWrap) {
    var fixed = cdWrap.getAttribute('data-countdown'); // optional ISO date
    function nextTarget() {
      if (fixed && fixed !== 'weekly') {
        var d = new Date(fixed);
        if (!isNaN(d)) return d;
      }
      var now = new Date();
      var t = new Date(now);
      t.setDate(now.getDate() + ((7 - now.getDay()) % 7));
      t.setHours(10, 0, 0, 0);
      if (t <= now) t.setDate(t.getDate() + 7);
      return t;
    }
    var target = nextTarget();
    var cells = {
      d: cdWrap.querySelector('[data-cd=d]'),
      h: cdWrap.querySelector('[data-cd=h]'),
      m: cdWrap.querySelector('[data-cd=m]'),
      s: cdWrap.querySelector('[data-cd=s]')
    };
    function pad(n) { return String(n).padStart(2, '0'); }
    function tickCd() {
      var diff = target - new Date();
      if (diff <= 0) { target = nextTarget(); diff = target - new Date(); }
      var d = Math.floor(diff / 864e5),
          h = Math.floor(diff % 864e5 / 36e5),
          m = Math.floor(diff % 36e5 / 6e4),
          s = Math.floor(diff % 6e4 / 1e3);
      if (cells.d) cells.d.textContent = pad(d);
      if (cells.h) cells.h.textContent = pad(h);
      if (cells.m) cells.m.textContent = pad(m);
      if (cells.s) cells.s.textContent = pad(s);
    }
    tickCd();
    setInterval(tickCd, 1000);
  }

  /* ── Cookie consent ── */
  var cookie = document.getElementById('cookie');
  if (cookie) {
    try {
      if (!localStorage.getItem('wrgm-cookie-ok')) {
        setTimeout(function () { cookie.classList.add('show'); }, 1400);
      }
    } catch (e) { /* storage unavailable */ }
    var ok = document.getElementById('cookieOk');
    if (ok) ok.addEventListener('click', function () {
      try { localStorage.setItem('wrgm-cookie-ok', '1'); } catch (e) {}
      cookie.classList.remove('show');
    });
  }

  /* ── Back to top ── */
  var backTop = document.getElementById('backTop');
  if (backTop) {
    window.addEventListener('scroll', function () {
      backTop.classList.toggle('show', window.scrollY > 600);
    }, { passive: true });
    backTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ── Forms: client-side validation + friendly confirmation ── */
  document.querySelectorAll('form[data-validate]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = form.querySelector('.form-msg');
      var valid = true;
      form.querySelectorAll('[required]').forEach(function (f) {
        var bad = !f.value.trim() ||
          (f.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.value));
        f.style.borderColor = bad ? '#dc2626' : '';
        if (bad) valid = false;
      });
      if (!msg) return;
      msg.classList.remove('ok', 'err');
      if (valid) {
        msg.classList.add('ok');
        msg.textContent = form.getAttribute('data-success') ||
          '✝ Thank you — your message has been received. We will be in touch soon.';
        form.reset();
      } else {
        msg.classList.add('err');
        msg.textContent = 'Please complete the highlighted fields with valid information.';
      }
    });
  });

  /* ── Donation amount chips + impact calculator ── */
  var chips = document.querySelectorAll('.amount-chip');
  var impactLine = document.getElementById('impactLine');
  var impactMap = {
    25: '✦ $25 provides hygiene kits and hot meals for a family in crisis.',
    50: '✦ $50 feeds a family for a week through our outreach program.',
    100: '✦ $100 supplies school materials for five students for a term.',
    250: '✦ $250 supports one month of transitional housing for a family.',
    500: '✦ $500 helps drill and maintain clean-water access for a village.',
    1000: '✦ $1,000 sponsors a full vocational training scholarship.'
  };
  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      chips.forEach(function (c) { c.classList.remove('on'); });
      chip.classList.add('on');
      var amt = parseInt(chip.getAttribute('data-amount'), 10);
      var custom = document.getElementById('customAmount');
      if (custom) custom.value = amt;
      if (impactLine && impactMap[amt]) impactLine.textContent = impactMap[amt];
    });
  });
  var customAmount = document.getElementById('customAmount');
  if (customAmount && impactLine) {
    customAmount.addEventListener('input', function () {
      chips.forEach(function (c) { c.classList.remove('on'); });
      var v = parseInt(customAmount.value, 10);
      if (!v || v <= 0) return;
      var keys = Object.keys(impactMap).map(Number).sort(function (a, b) { return a - b; });
      var best = keys[0];
      keys.forEach(function (k) { if (v >= k) best = k; });
      impactLine.textContent = impactMap[best];
    });
  }
})();
