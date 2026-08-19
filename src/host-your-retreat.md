---
layout: base.njk
templateEngineOverride: njk
title: "Host Your Retreat, Naia Ocean Hotel · Midigama, Sri Lanka"
description: "Bring your own group to Naia Ocean Hotel in Midigama, Sri Lanka. Whole-house buyouts for surf & yoga retreats: 6 rooms, private kitchenettes, ocean-front garden, up to 12 guests."
ogTitle: "Host Your Retreat, Naia Ocean Hotel · Midigama"
ogDescription: "Bring your own group to Naia Ocean Hotel, Midigama. Whole-house buyouts for surf & yoga retreats: 6 rooms, private kitchenettes, ocean-front garden, up to 12 guests."
ogImage: "https://naia-ocean-hotel.example/assets/images/ohana/hero.webp"
activePage: "host-your-retreat"
screenLabel: "Host Your Retreat"
showCurrency: false
extraHead: |
  <style>
    .concepts{display:grid;grid-template-columns:repeat(4,1fr);gap:clamp(1.2rem,2.5vw,2rem)}
    .concept{background:var(--card);border-radius:var(--radius-lg);overflow:hidden;box-shadow:0 1px 0 var(--line-soft)}
    .concept__media{aspect-ratio:1/1}
    .concept__media image-slot{width:100%;height:100%}
    .concept__body{padding:1.4rem 1.5rem 1.7rem}
    .concept h3{font-size:1.25rem}
    .concept p{font-size:.92rem;color:var(--ink-soft);margin-top:.5rem;font-weight:300}
    .retreat-incl{display:grid;grid-template-columns:1fr 1fr;gap:.6rem 1.6rem;margin-top:1.4rem}
    .retreat-incl li{display:flex;gap:.6rem;font-size:.96rem;color:var(--ink-soft);font-weight:300}
    .retreat-incl svg{width:16px;height:16px;flex:none;margin-top:.3rem;color:var(--leaf)}
    .retreat-cap{display:inline-flex;align-items:center;gap:.6rem;background:var(--sand);padding:.6rem 1.1rem;
      border-radius:100px;font-size:.88rem;color:var(--ocean-deep);font-weight:600;margin-top:1.2rem}
    .retreat-cap svg{width:16px;height:16px;color:var(--terracotta)}
    @media(max-width:900px){.concepts{grid-template-columns:1fr 1fr}}
    @media(max-width:560px){.concepts{grid-template-columns:1fr}.retreat-incl{grid-template-columns:1fr}}
  </style>
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://naia-ocean-hotel.example/index.html"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Host Your Retreat",
        "item": "https://naia-ocean-hotel.example/host-your-retreat.html"
      }
    ]
  }
  </script>
permalink: "/host-your-retreat.html"
heroTitle: "Host your retreat."
heroSubtitle: "Bring your own group to our house in Midigama, Sri Lanka. Our support, your retreat week."
---


<!-- HERO -->
<section class="pagehero">
  <div class="pagehero__media"><image-slot fetchpriority="high" alt="Group of surfers, retreat crew" id="retreat-hero" src="assets/images/ohana/hero.webp" placeholder="Group of surfers, retreat crew" fit="cover"></image-slot></div>
  <div class="pagehero__inner">
    <p class="crumb"><a href="index.html" data-i18n="nav.home">Home</a> · <span data-i18n="nav.retreat">Host Your Retreat</span></p>
    <h1 data-i18n="retreat.hero.title">{{ heroTitle | safe }}</h1>
    <p class="pagehero__sub" data-i18n="retreat.hero.sub">{{ heroSubtitle }}</p>
  </div>
</section>

<!-- INTRO -->
<section class="section">
  <div class="wrap center">
    <p class="eyebrow is-centered reveal" data-i18n="retreat.intro.eyebrow">What does it look like?</p>
    <h2 class="title-h2 mt-2 reveal d1" style="max-width:26ch;margin-inline:auto" data-i18n="retreat.intro.title">A personal, high-quality retreat, run in a house you have to yourselves.</h2>
    <p class="lead mt-3 reveal d2" style="max-width:62ch;margin-inline:auto" data-i18n="retreat.intro.body">Bring your community together in a small tropical setting. We take care of the house, the food and the local know-how &mdash; you bring the crew and run your retreat your way.</p>
  </div>
</section>

<!-- CONCEPT CARDS -->
<section class="section" style="padding-top:0">
  <div class="wrap">
    <div class="concepts">
      <article class="concept reveal">
        <div class="concept__media"><image-slot loading="lazy" alt="Surf group heading to the water" id="retreat-concept-1" src="assets/images/ohana/surf-lessons-introduction-ohana-surf-camp.webp" placeholder="Surf group heading to the water" fit="cover"></image-slot></div>
        <div class="concept__body">
          <h3 data-i18n="retreat.c1.title">Surf group</h3>
          <p data-i18n="retreat.c1.desc">Surfing, rest and connection, balanced between activity and free time.</p>
        </div>
      </article>
      <article class="concept reveal d1">
        <div class="concept__media"><image-slot loading="lazy" alt="Loading boards, logistics support" id="retreat-concept-2" src="assets/images/ohana/surf-camp-logistics-support.webp" placeholder="Loading boards, logistics support" fit="cover"></image-slot></div>
        <div class="concept__body">
          <h3 data-i18n="retreat.c2.title">Our support</h3>
          <p data-i18n="retreat.c2.desc">You bring your crew, we handle the rest &mdash; best cafés, sunset spots and local know-how included.</p>
        </div>
      </article>
      <article class="concept reveal d2">
        <div class="concept__media"><image-slot loading="lazy" alt="Fresh local food" id="retreat-concept-3" src="assets/images/ohana/healthy-meals-surf-camp.webp" placeholder="Fresh local food" fit="cover"></image-slot></div>
        <div class="concept__body">
          <h3 data-i18n="retreat.c3.title">Meal options</h3>
          <p data-i18n="retreat.c3.desc">Fresh, local cuisine, flexible meal plans including vegetarian and special diets.</p>
        </div>
      </article>
      <article class="concept reveal d3">
        <div class="concept__media"><image-slot loading="lazy" alt="Boards loaded for a trip" id="retreat-concept-4" src="assets/images/ohana/yoga-and-surf-retreat-sri-lanka.webp" placeholder="Boards loaded for a trip" fit="cover"></image-slot></div>
        <div class="concept__body">
          <h3 data-i18n="retreat.c4.title">Optional services</h3>
          <p data-i18n="retreat.c4.desc">Surf coaching, airport transfers, yoga by the ocean, local trips and photo/video content, on request.</p>
        </div>
      </article>
    </div>
  </div>
</section>

<!-- ACCOMMODATION -->
<section class="section section--sand">
  <div class="wrap">
    <div class="split">
      <div class="reveal">
        <p class="eyebrow" data-i18n="retreat.stay.eyebrow">The house</p>
        <h2 class="title-h2 mt-2" data-i18n="retreat.stay.title">A beach house, right on the ocean front.</h2>
        <p class="lead mt-3" data-i18n="retreat.stay.body">We'll stay in Naia itself &mdash; the small beach house where you can grab a board and paddle out toward Lazy Right straight from the garden. Six rooms, each with its own private bathroom and kitchenette, wrap around a shared garden with an ocean view.</p>
        <span class="retreat-cap"><svg viewBox="0 0 24 24" fill="none"><circle cx="8" cy="9" r="3" stroke="currentColor" stroke-width="1.6"/><circle cx="17" cy="10" r="2.4" stroke="currentColor" stroke-width="1.6"/><path d="M2 19c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5M15 14.3c2.6.3 5 1.9 5 4.7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg><span data-i18n="retreat.cap">6 rooms &middot; up to 12 guests, whole-house buyout</span></span>
        <ul class="retreat-incl">
          <li><svg viewBox="0 0 24 24" fill="none"><path d="M5 12l4 4 10-10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span data-i18n="retreat.incl.1">6 private rooms, double or twin beds</span></li>
          <li><svg viewBox="0 0 24 24" fill="none"><path d="M5 12l4 4 10-10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span data-i18n="retreat.incl.2">Private bathroom in every room</span></li>
          <li><svg viewBox="0 0 24 24" fill="none"><path d="M5 12l4 4 10-10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span data-i18n="retreat.incl.3">Private kitchenette in every room</span></li>
          <li><svg viewBox="0 0 24 24" fill="none"><path d="M5 12l4 4 10-10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span data-i18n="retreat.incl.4">Shared dining &amp; kitchen area</span></li>
          <li><svg viewBox="0 0 24 24" fill="none"><path d="M5 12l4 4 10-10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span data-i18n="retreat.incl.5">Garden with ocean view</span></li>
          <li><svg viewBox="0 0 24 24" fill="none"><path d="M5 12l4 4 10-10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span data-i18n="retreat.incl.6">Free WiFi throughout</span></li>
        </ul>
      </div>
      <div class="split__media reveal d1">
        <image-slot loading="lazy" alt="Naia room, private terrace" id="retreat-house" src="assets/images/deluxe-1.webp" placeholder="Naia room, private terrace" fit="cover"></image-slot>
      </div>
    </div>
    <div class="mosaic mt-4 reveal">
      <image-slot loading="lazy" alt="Garden Double room" id="retreat-gal-1" src="assets/images/garden-double-1.webp" class="m-wide" data-lightbox placeholder="Garden Double room" fit="cover"></image-slot>
      <image-slot loading="lazy" alt="Double Sea View room" id="retreat-gal-2" src="assets/images/double-sea-1.webp" data-lightbox placeholder="Double Sea View room" fit="cover"></image-slot>
      <image-slot loading="lazy" alt="Standard Queen room" id="retreat-gal-3" src="assets/images/queen-1.webp" data-lightbox placeholder="Standard Queen room" fit="cover"></image-slot>
      <image-slot loading="lazy" alt="Twin room" id="retreat-gal-4" src="assets/images/twin-1.webp" data-lightbox placeholder="Twin room" fit="cover"></image-slot>
      <image-slot loading="lazy" alt="Private kitchenette" id="retreat-gal-5" src="assets/images/kitchen-1.webp" class="m-wide" data-lightbox placeholder="Private kitchenette" fit="cover"></image-slot>
      <image-slot loading="lazy" alt="Economy Twin room" id="retreat-gal-6" src="assets/images/eco-twin-1.webp" data-lightbox placeholder="Economy Twin room" fit="cover"></image-slot>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="finalcta">
  <image-slot loading="lazy" alt="Wide ocean, golden hour" id="retreat-cta-bg" src="assets/images/ohana/action-1.webp" placeholder="Wide ocean, golden hour" fit="cover"></image-slot>
  <div class="finalcta__inner">
    <h2 class="reveal" data-i18n="retreat.cta.title">Ready to organize your retreat with us?</h2>
    <p class="lead mt-2 reveal d1" data-i18n="retreat.cta.sub">Bring your crew and let's make it happen &mdash; reach out and we'll get back to you with a tailored offer.</p>
    <div class="mt-3 reveal d2"><a href="contact.html" class="btn btn--primary" data-i18n="retreat.cta.contact">Contact us</a></div>
  </div>
</section>

<!-- TESTIMONIALS -->
<section class="section section--sand">
  <div class="wrap">
    <div class="sec-head is-centered reveal">
      <p class="eyebrow is-centered" data-i18n="camp.quotes.eyebrow">From past guests</p>
      <h2 data-i18n="retreat.quotes.title">What groups say.</h2>
    </div>
    <div class="quotes mt-4">
      <figure class="quote reveal">
        <div class="stars"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.9-6.3 3.9 1.7-7L2 9.2l7.1-.6z"/></svg><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.9-6.3 3.9 1.7-7L2 9.2l7.1-.6z"/></svg><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.9-6.3 3.9 1.7-7L2 9.2l7.1-.6z"/></svg><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.9-6.3 3.9 1.7-7L2 9.2l7.1-.6z"/></svg><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.9-6.3 3.9 1.7-7L2 9.2l7.1-.6z"/></svg></div>
        <p>"It is truly extraordinary how much I loved staying at Naia Ocean House. Olivia and Magdalena have created such a warm, caring, and beautiful home."</p>
        <figcaption class="quote__who"><span><span class="quote__name">Verified guest</span><span class="quote__loc">Booking.com &middot; 10/10</span></span></figcaption>
      </figure>
      <figure class="quote reveal d1">
        <div class="stars"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.9-6.3 3.9 1.7-7L2 9.2l7.1-.6z"/></svg><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.9-6.3 3.9 1.7-7L2 9.2l7.1-.6z"/></svg><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.9-6.3 3.9 1.7-7L2 9.2l7.1-.6z"/></svg><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.9-6.3 3.9 1.7-7L2 9.2l7.1-.6z"/></svg><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.9-6.3 3.9 1.7-7L2 9.2l7.1-.6z"/></svg></div>
        <p>"The location right by the ocean is amazing. It's one of those places where you literally feel at home, and the girls who run Naia are super helpful organizing things for a group."</p>
        <figcaption class="quote__who"><span><span class="quote__name">Verified guest</span><span class="quote__loc">Booking.com &middot; 10/10</span></span></figcaption>
      </figure>
      <figure class="quote reveal d2">
        <div class="stars"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.9-6.3 3.9 1.7-7L2 9.2l7.1-.6z"/></svg><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.9-6.3 3.9 1.7-7L2 9.2l7.1-.6z"/></svg><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.9-6.3 3.9 1.7-7L2 9.2l7.1-.6z"/></svg><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.9-6.3 3.9 1.7-7L2 9.2l7.1-.6z"/></svg><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.9-6.3 3.9 1.7-7L2 9.2l7.1-.6z"/></svg></div>
        <p>"Highly recommend this place also for digital nomads and small groups &mdash; plenty of space to spread out and still feel together."</p>
        <figcaption class="quote__who"><span><span class="quote__name">Verified guest</span><span class="quote__loc">Booking.com &middot; 9.5/10</span></span></figcaption>
      </figure>
    </div>
  </div>
</section>

