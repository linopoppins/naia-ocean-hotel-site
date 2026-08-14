/* =========================================================
   NAIA OCEAN HOTEL — site behaviour
   nav · mobile drawer · language switcher · lightbox ·
   scroll reveal · FAQ accordion · room filter · booking calc
   ========================================================= */
(function(){
  'use strict';
  var WA_NUMBER = '94770000000'; // placeholder — replace with real WhatsApp number
  var STORE_KEY = 'naia_lang';
  var CURR_KEY = 'naia_curr';
  var CURR_RATES = {
    EUR: { sym: '€', rate: 1 },
    USD: { sym: '$', rate: 1.08 },
    LKR: { sym: '₨', rate: 330 }
  };
  var RATES_KEY = 'naia_rates_cache';
  var RATES_MAX_AGE = 12 * 60 * 60 * 1000; // 12h — refresh roughly daily without hammering the API

  /* Live daily EUR rates from a free, no-key exchange-rate API. Falls back
     silently to the static estimates above if offline or the API is down —
     prices must never break just because a third-party rate fetch failed. */
  function loadLiveRates(onUpdate){
    try{
      var cached = JSON.parse(localStorage.getItem(RATES_KEY) || 'null');
      if(cached && cached.rates && (Date.now() - cached.at) < RATES_MAX_AGE){
        CURR_RATES.USD.rate = cached.rates.USD;
        CURR_RATES.LKR.rate = cached.rates.LKR;
        if(onUpdate) onUpdate(new Date(cached.at));
        return;
      }
    }catch(e){}

    fetch('https://open.er-api.com/v6/latest/EUR')
      .then(function(r){ return r.ok ? r.json() : null; })
      .then(function(data){
        if(!data || !data.rates || !data.rates.USD || !data.rates.LKR) return;
        CURR_RATES.USD.rate = data.rates.USD;
        CURR_RATES.LKR.rate = data.rates.LKR;
        try{ localStorage.setItem(RATES_KEY, JSON.stringify({ rates: { USD: data.rates.USD, LKR: data.rates.LKR }, at: Date.now() })); }catch(e){}
        if(onUpdate) onUpdate(new Date());
      })
      .catch(function(){ /* keep static fallback rates, no user-facing error */ });
  }

  /* ---------- helpers ---------- */
  function $(s,c){return (c||document).querySelector(s);}
  function $all(s,c){return Array.prototype.slice.call((c||document).querySelectorAll(s));}

  /* =====================================================
     LANGUAGE
     ===================================================== */
  function currentLang(){
    var l = localStorage.getItem(STORE_KEY);
    if(l && window.NAIA_I18N && window.NAIA_I18N[l]) return l;
    return 'en';
  }
  function applyLang(lang){
    var dict = (window.NAIA_I18N && window.NAIA_I18N[lang]) || window.NAIA_I18N.en;
    document.documentElement.setAttribute('lang', lang);
    $all('[data-i18n]').forEach(function(el){
      var k = el.getAttribute('data-i18n');
      if(dict[k]!=null) el.innerHTML = dict[k];
    });
    $all('[data-i18n-ph]').forEach(function(el){
      var k = el.getAttribute('data-i18n-ph');
      if(dict[k]!=null) el.setAttribute('placeholder', dict[k]);
    });
    $all('[data-i18n-aria]').forEach(function(el){
      var k = el.getAttribute('data-i18n-aria');
      if(dict[k]!=null) el.setAttribute('aria-label', dict[k]);
    });
    // update switcher current label
    var info = (window.NAIA_LANGS||[]).filter(function(x){return x.code===lang;})[0];
    if(info){
      $all('[data-lang-current]').forEach(function(el){ el.textContent = lang.toUpperCase(); });
    }
    $all('[data-lang-opt]').forEach(function(b){
      b.classList.toggle('is-active', b.getAttribute('data-lang-opt')===lang);
    });
    try{ localStorage.setItem(STORE_KEY, lang); }catch(e){}
    // let any listeners (booking calc) recompute strings
    document.dispatchEvent(new CustomEvent('naia:lang', {detail:{lang:lang}}));
  }
  function buildLangMenu(){
    $all('[data-lang-menu]').forEach(function(menu){
      if(menu.dataset.built) return;
      menu.dataset.built='1';
      (window.NAIA_LANGS||[]).forEach(function(l){
        var b = document.createElement('button');
        b.type='button';
        b.setAttribute('data-lang-opt', l.code);
        b.innerHTML = '<span class="lang__flag">'+l.flag+'</span><span>'+l.label+'</span>';
        b.addEventListener('click', function(){
          applyLang(l.code);
          closeLangMenus();
        });
        menu.appendChild(b);
      });
    });
  }
  function closeLangMenus(){ $all('.lang').forEach(function(l){l.classList.remove('is-open');}); }

  /* =====================================================
     CURRENCY
     ===================================================== */
  function currentCurr(){ return localStorage.getItem(CURR_KEY) || 'EUR'; }

  function formatPrice(eurVal, curr){
    var c = CURR_RATES[curr] || CURR_RATES.EUR;
    var val = Math.round(eurVal * c.rate);
    return curr === 'LKR' ? c.sym + val.toLocaleString() : c.sym + val;
  }

  function applyCurr(curr){
    localStorage.setItem(CURR_KEY, curr);
    $all('[data-price]').forEach(function(el){
      el.textContent = formatPrice(Number(el.getAttribute('data-price')), curr);
    });
    $all('select[name=room] option[data-price]').forEach(function(opt){
      opt.textContent = opt.getAttribute('data-name') + ', ' + formatPrice(Number(opt.getAttribute('data-price')), curr);
    });
    $all('[data-curr-current]').forEach(function(el){ el.textContent = curr; });
    $all('[data-curr-opt]').forEach(function(b){ b.classList.toggle('is-active', b.getAttribute('data-curr-opt') === curr); });
    document.dispatchEvent(new CustomEvent('naia:curr'));
  }

  function closeCurrMenus(){ $all('.curr').forEach(function(c){ c.classList.remove('is-open'); }); }

  function initCurrency(){
    $all('[data-curr-menu]').forEach(function(menu){
      if(menu.dataset.built) return;
      menu.dataset.built = '1';
      Object.keys(CURR_RATES).forEach(function(code){
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.setAttribute('data-curr-opt', code);
        btn.textContent = code + ' ' + CURR_RATES[code].sym;
        btn.addEventListener('click', function(){ applyCurr(code); closeCurrMenus(); });
        menu.appendChild(btn);
      });
    });
    $all('.curr__btn').forEach(function(btn){
      btn.addEventListener('click', function(e){
        e.stopPropagation();
        var parent = btn.closest ? btn.closest('.curr') : btn.parentNode;
        var isOpen = parent.classList.contains('is-open');
        closeCurrMenus(); closeLangMenus();
        if(!isOpen) parent.classList.add('is-open');
      });
    });
    document.addEventListener('click', closeCurrMenus);
    applyCurr(currentCurr());

    // Prices render instantly with the static fallback rates above, then
    // quietly refresh once the daily live rate is fetched (or stays as-is
    // if the request fails — never blocks or breaks the price display).
    loadLiveRates(function(at){
      applyCurr(currentCurr());
      $all('[data-curr-updated]').forEach(function(el){
        el.textContent = 'Rates updated ' + at.toLocaleDateString();
      });
    });
  }

  /* =====================================================
     NAV
     ===================================================== */
  function initNav(){
    var nav = $('.nav');
    if(!nav) return;
    var solidFrom = nav.classList.contains('is-light') ? 99999 : 60;
    function onScroll(){
      if(window.scrollY > solidFrom) nav.classList.add('is-solid');
      else nav.classList.remove('is-solid');
    }
    if(!nav.classList.contains('is-light')){
      window.addEventListener('scroll', onScroll, {passive:true});
      onScroll();
    }

    // language toggles
    $all('.lang__btn').forEach(function(btn){
      btn.addEventListener('click', function(e){
        e.stopPropagation();
        var parent = btn.closest('.lang');
        var wasOpen = parent.classList.contains('is-open');
        closeLangMenus();
        if(!wasOpen) parent.classList.add('is-open');
      });
    });
    document.addEventListener('click', closeLangMenus);

    // mobile drawer
    var drawer = $('.drawer');
    var toggle = $('.nav__toggle');
    if(toggle && drawer){
      toggle.addEventListener('click', function(){ drawer.classList.add('is-open'); document.body.style.overflow='hidden'; });
      $all('[data-drawer-close]', drawer).forEach(function(el){
        el.addEventListener('click', function(){ drawer.classList.remove('is-open'); document.body.style.overflow=''; });
      });
    }
  }

  /* =====================================================
     SCROLL REVEAL
     ===================================================== */
  function initReveal(){
    var els = $all('.reveal');
    if(!('IntersectionObserver' in window) || !els.length){
      els.forEach(function(el){el.classList.add('in');}); return;
    }
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, {threshold:.12, rootMargin:'0px 0px -8% 0px'});
    els.forEach(function(el){io.observe(el);});
  }

  /* =====================================================
     FAQ ACCORDION
     ===================================================== */
  function initFaq(){
    $all('.faq__item').forEach(function(item){
      var q = $('.faq__q', item);
      var a = $('.faq__a', item);
      if(!q||!a) return;
      q.addEventListener('click', function(){
        var open = item.classList.contains('is-open');
        if(open){ item.classList.remove('is-open'); a.style.maxHeight=0; }
        else { item.classList.add('is-open'); a.style.maxHeight = a.scrollHeight + 'px'; }
      });
    });
  }

  /* =====================================================
     ROOM FILTER
     ===================================================== */
  function initFilter(){
    var bar = $('[data-filter-bar]');
    if(!bar) return;
    var cards = $all('[data-room-cat]');
    $all('button', bar).forEach(function(btn){
      btn.addEventListener('click', function(){
        $all('button', bar).forEach(function(b){b.classList.remove('is-active');});
        btn.classList.add('is-active');
        var f = btn.getAttribute('data-filter');
        cards.forEach(function(card){
          var cats = card.getAttribute('data-room-cat').split(' ');
          var show = f==='all' || cats.indexOf(f)>-1;
          card.style.display = show ? '' : 'none';
        });
      });
    });
  }

  /* =====================================================
     LIGHTBOX
     ===================================================== */
  function initLightbox(){
    var all = $all('[data-lightbox]');
    if(!all.length) return;
    var box = document.createElement('div');
    box.className='lightbox';
    box.innerHTML =
      '<button class="lightbox__close" aria-label="Close">&times;</button>'+
      '<button class="lightbox__nav prev" aria-label="Previous">&#8249;</button>'+
      '<img class="lightbox__img" alt="">'+
      '<button class="lightbox__nav next" aria-label="Next">&#8250;</button>'+
      '<div class="lightbox__thumbs"></div>';
    document.body.appendChild(box);
    var imgEl = box.querySelector('.lightbox__img');
    var thumbsEl = box.querySelector('.lightbox__thumbs');
    var group=[], idx=0;
    function srcOf(el){
      var inner = el.querySelector('img');
      if(inner && inner.src) return inner.src;
      return el.getAttribute('data-full') || el.getAttribute('src') || '';
    }
    function buildThumbs(){
      thumbsEl.innerHTML='';
      group.forEach(function(el,i){
        var s=srcOf(el); if(!s) return;
        var t=document.createElement('img');
        t.src=s; t.alt=''; if(i===idx) t.className='is-active';
        t.addEventListener('click',function(e){e.stopPropagation();open(i);});
        thumbsEl.appendChild(t);
      });
    }
    function open(i){
      idx=i;
      var s=srcOf(group[idx]); if(!s) return;
      imgEl.src=s; box.classList.add('is-open'); document.body.style.overflow='hidden';
      buildThumbs();
    }
    function close(){ box.classList.remove('is-open'); document.body.style.overflow=''; }
    all.forEach(function(el){
      el.addEventListener('click', function(){
        var gal=el.closest('.roomgal')||el.closest('[data-gallery]');
        group=gal ? Array.from(gal.querySelectorAll('[data-lightbox]')) : [el];
        var i=group.indexOf(el); open(i>=0?i:0);
      });
    });
    box.querySelector('.lightbox__close').addEventListener('click', close);
    box.querySelector('.lightbox__nav.prev').addEventListener('click',function(){ open((idx-1+group.length)%group.length); });
    box.querySelector('.lightbox__nav.next').addEventListener('click',function(){ open((idx+1)%group.length); });
    box.addEventListener('click',function(e){ if(e.target===box) close(); });
    document.addEventListener('keydown',function(e){
      if(!box.classList.contains('is-open')) return;
      if(e.key==='Escape') close();
      if(e.key==='ArrowLeft') open((idx-1+group.length)%group.length);
      if(e.key==='ArrowRight') open((idx+1)%group.length);
    });
  }

  /* =====================================================
     WHATSAPP LINK
     ===================================================== */
  function initWhatsApp(){
    $all('[data-wa]').forEach(function(a){
      a.setAttribute('href', 'https://wa.me/'+WA_NUMBER);
      a.setAttribute('target','_blank');
      a.setAttribute('rel','noopener');
    });
  }

  /* =====================================================
     BOOKING CALCULATOR (book.html)
     ===================================================== */
  function initBooking(){
    var form = $('[data-booking]');
    if(!form) return;
    var rates = { deluxe:35, 'double-garden':33, 'double-sea':30, queen:25, twin:25, 'economy-twin':22 };
    var ci = $('[name=checkin]', form), co = $('[name=checkout]', form),
        room = $('[name=room]', form), guests = $('[name=guests]', form);
    // preselect room from ?room=
    try{
      var qp = new URLSearchParams(location.search).get('room');
      if(qp && room.querySelector('option[value="'+qp+'"]')) room.value = qp;
    }catch(e){}
    var sumRoom=$('[data-sum=room]'), sumDates=$('[data-sum=dates]'), sumNights=$('[data-sum=nights]'),
        sumGuests=$('[data-sum=guests]'), sumRate=$('[data-sum=rate]'), sumTotal=$('[data-sum=total]'),
        pick=$('[data-sum-pick]'), table=$('[data-sum-table]');

    function dict(){ return (window.NAIA_I18N&&window.NAIA_I18N[localStorage.getItem(STORE_KEY)||'en'])||window.NAIA_I18N.en; }

    function nights(){
      if(!ci.value||!co.value) return 0;
      var a=new Date(ci.value), b=new Date(co.value);
      var n=Math.round((b-a)/86400000);
      return n>0?n:0;
    }
    function recalc(){
      var n=nights();
      var key=room.value;
      var rate=rates[key]||0;
      var d=dict();
      if(n>0 && key){
        if(table) table.style.display='';
        if(pick) pick.style.display='none';
        var roomName = d['room.'+key+'.name'] || room.options[room.selectedIndex].text;
        sumRoom.textContent = roomName;
        sumDates.textContent = ci.value + ' → ' + co.value;
        sumNights.textContent = n;
        sumGuests.textContent = guests.value;
        sumRate.textContent = formatPrice(rate, currentCurr());
        sumTotal.textContent = formatPrice(rate*n, currentCurr());
      } else {
        if(table) table.style.display='none';
        if(pick) pick.style.display='';
      }
    }
    [ci,co,room,guests].forEach(function(el){ if(el){ el.addEventListener('change', recalc); el.addEventListener('input', recalc);} });
    document.addEventListener('naia:lang', recalc);
    document.addEventListener('naia:curr', recalc);
    // set sensible default dates
    if(ci && !ci.value){
      var t=new Date(); t.setDate(t.getDate()+14);
      var t2=new Date(); t2.setDate(t2.getDate()+19);
      ci.value=t.toISOString().slice(0,10);
      co.value=t2.toISOString().slice(0,10);
      ci.min=new Date().toISOString().slice(0,10);
    }
    recalc();

    form.addEventListener('submit', function(e){
      e.preventDefault();
      var ok=$('[data-booking-ok]');
      if(ok){ ok.style.display='block'; ok.scrollIntoView({behavior:'smooth',block:'center'}); }
      form.querySelector('button[type=submit]').setAttribute('disabled','');
    });
  }

  /* =====================================================
     CONTACT FORM (graceful, no backend)
     ===================================================== */
  function initContact(){
    var form=$('[data-contact]');
    if(!form) return;
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var ok=$('[data-contact-ok]', form.parentNode);
      form.style.display='none';
      if(ok) ok.style.display='block';
    });
  }

  /* ---------- boot ---------- */
  document.addEventListener('DOMContentLoaded', function(){
    buildLangMenu();
    applyLang(currentLang());
    initCurrency();
    initNav();
    initReveal();
    initFaq();
    initFilter();
    initLightbox();
    initWhatsApp();
    initBooking();
    initContact();
  });
})();
