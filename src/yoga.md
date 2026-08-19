---
layout: base.njk
templateEngineOverride: njk
title: "Yoga, Naia Ocean Hotel · Midigama, Sri Lanka"
description: "A rooftop shala open to the sky and the sound of the sea. Daily vinyasa and yin, weekend and week-long retreats at Naia Ocean Hotel, Midigama, Sri Lanka."
ogTitle: "Yoga at Naia, Naia Ocean Hotel"
ogDescription: "A rooftop shala open to the sky and the sound of the sea. Daily vinyasa and yin, weekend and week-long retreats at Naia Ocean Hotel, Midigama."
ogImage: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?fm=webp&q=80&w=1200&auto=format&fit=crop"
activePage: "yoga"
screenLabel: "Yoga"
showCurrency: false
extraHead: |
  <style>
    .teacher__photo{aspect-ratio:4/5;border-radius:var(--radius-lg);overflow:hidden}
    .teacher__photo image-slot{width:100%;height:100%}
    .cred{display:flex;gap:1.4rem;flex-wrap:wrap;margin-top:1.6rem}
    .cred div{font-family:var(--serif);font-size:1.05rem;color:var(--ocean-deep)}
    .cred span{display:block;font-family:var(--sans);font-size:.78rem;letter-spacing:.1em;text-transform:uppercase;color:var(--terracotta);font-weight:600;margin-bottom:.2rem}
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
        "name": "Yoga",
        "item": "https://naia-ocean-hotel.example/yoga.html"
      }
    ]
  }
  </script>
permalink: "/yoga.html"
heroTitle: "Yoga at Naia"
heroSubtitle: "A rooftop shala in Midigama, Sri Lanka, open to the sky and the sound of the sea."
---


<section class="pagehero">
  <div class="pagehero__media"><image-slot fetchpriority="high" alt="Rooftop yoga shala at sunrise, sea behind" id="yoga-hero" src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?fm=webp&amp;q=75&amp;w=1800&amp;auto=format&amp;fit=crop" placeholder="Rooftop yoga shala at sunrise, sea behind" fit="cover"></image-slot></div>
  <div class="pagehero__inner">
    <p class="crumb"><a href="index.html" data-i18n="nav.home">Home</a> · <span data-i18n="nav.yoga">Yoga</span></p>
    <h1 data-i18n="yoga.hero.title">{{ heroTitle | safe }}</h1>
    <p class="pagehero__sub" data-i18n="yoga.hero.sub">{{ heroSubtitle }}</p>
  </div>
</section>

<!-- PROGRAM -->
<section class="section">
  <div class="wrap">
    <div class="split">
      <div class="split__media reveal"><image-slot loading="lazy" alt="Vinyasa flow on the rooftop" id="yoga-prog" src="https://images.unsplash.com/photo-1741291774624-51e165a22a65?fm=webp&amp;q=75&amp;w=1300&amp;auto=format&amp;fit=crop" placeholder="Vinyasa flow on the rooftop" fit="cover"></image-slot></div>
      <div class="reveal d1">
        <p class="eyebrow" data-i18n="yoga.prog.eyebrow">The practice</p>
        <h2 class="title-h2 mt-2" data-i18n="yoga.prog.title">Move, breathe, soften.</h2>
        <p class="lead mt-3" data-i18n="yoga.prog.body">A warm, unhurried practice on the open rooftop shala.</p>
      </div>
    </div>
  </div>
</section>

<!-- RETREATS -->
<section class="section section--sand">
  <div class="wrap">
    <div class="sec-head is-centered reveal">
      <p class="eyebrow is-centered" data-i18n="yoga.retreat.eyebrow">Retreats</p>
      <h2 data-i18n="yoga.retreat.title">Stay a little longer.</h2>
    </div>
    <div class="pricelist mt-4" style="max-width:840px;margin-inline:auto">
      <div class="price-row reveal">
        <div><div class="price-row__name">Weekend reset</div><div class="price-row__desc">2 nights · 4 classes, two breakfasts, one sunset session on the beach.</div></div>
        <div class="price-row__val">from $260</div>
      </div>
      <div class="price-row reveal">
        <div><div class="price-row__name">5-day immersion</div><div class="price-row__desc">Daily morning &amp; evening practice, breathwork, one massage, all meals.</div></div>
        <div class="price-row__val">from $590</div>
      </div>
      <div class="price-row reveal">
        <div><div class="price-row__name">7-day surf &amp; yoga</div><div class="price-row__desc">Surf at dawn, yoga at dusk, the full Naia week, board included.</div></div>
        <div class="price-row__val">from $820</div>
      </div>
    </div>
    <div class="center mt-4 reveal"><a href="book.html" class="btn btn--primary" data-i18n="cta.book">Book your stay</a></div>
  </div>
</section>

<!-- TEACHER -->
<section class="section">
  <div class="wrap">
    <div class="split">
      <div class="reveal">
        <p class="eyebrow" data-i18n="yoga.teacher.eyebrow">Your teacher</p>
        <h2 class="title-h2 mt-2" data-i18n="yoga.teacher.title">Led with care.</h2>
        <p class="lead mt-3" data-i18n="yoga.teacher.bio">Maya has taught between the mountains of Rishikesh and the coasts of Sri Lanka for over a decade.</p>
        <div class="cred">
          <div><span data-i18n="yoga.teacher.name">Maya</span><span style="text-transform:none;letter-spacing:0;color:var(--ink-soft);font-weight:400;font-family:var(--sans);font-size:.95rem" data-i18n="yoga.teacher.role">Lead teacher · 500h RYT</span></div>
        </div>
      </div>
      <div class="teacher__photo reveal d1" style="order:-1"><image-slot loading="lazy" alt="Portrait of the yoga teacher" id="yoga-teacher" placeholder="Portrait of the yoga teacher" fit="cover"></image-slot></div>
    </div>
  </div>
</section>

<!-- SCHEDULE -->
<section class="section section--ocean">
  <div class="wrap">
    <div class="sec-head is-centered reveal" style="margin-inline:auto;text-align:center">
      <p class="eyebrow is-centered" style="color:var(--turquoise-soft)" data-i18n="yoga.sched.eyebrow">A typical week</p>
      <h2 data-i18n="yoga.sched.title">Weekly schedule.</h2>
    </div>
    <div class="mt-4 reveal" style="max-width:900px;margin-inline:auto;background:rgba(255,255,255,.06);border-radius:var(--radius-lg);padding:clamp(1rem,2.5vw,2rem);overflow-x:auto">
      <table class="schedule" style="color:#EAF1F2">
        <thead><tr>
          <th style="color:var(--turquoise-soft)" data-i18n="yoga.col.day">Day</th>
          <th style="color:var(--turquoise-soft)" data-i18n="yoga.col.morning">Sunrise · 7:00</th>
          <th style="color:var(--turquoise-soft)" data-i18n="yoga.col.evening">Sunset · 17:30</th>
        </tr></thead>
        <tbody>
          <tr><td>Mon</td><td style="color:rgba(234,241,242,.85)">Vinyasa flow</td><td style="color:rgba(234,241,242,.85)">Yin &amp; breath</td></tr>
          <tr><td>Tue</td><td style="color:rgba(234,241,242,.85)">Slow flow</td><td style="color:rgba(234,241,242,.85)">Restorative</td></tr>
          <tr><td>Wed</td><td style="color:rgba(234,241,242,.85)">Power vinyasa</td><td style="color:rgba(234,241,242,.85)">Yin &amp; meditation</td></tr>
          <tr><td>Thu</td><td style="color:rgba(234,241,242,.85)">Vinyasa flow</td><td style="color:rgba(234,241,242,.85)">Sound bath</td></tr>
          <tr><td>Fri</td><td style="color:rgba(234,241,242,.85)">Slow flow</td><td style="color:rgba(234,241,242,.85)">Yin &amp; breath</td></tr>
          <tr><td>Sat</td><td style="color:rgba(234,241,242,.85)">Beach session</td><td style="color:rgba(234,241,242,.85)">Restorative</td></tr>
          <tr><td>Sun</td><td style="color:rgba(234,241,242,.85)">Rest / optional</td><td style="color:rgba(234,241,242,.85)">Meditation</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

