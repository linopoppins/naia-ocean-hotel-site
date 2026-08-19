---
layout: base.njk
templateEngineOverride: njk
title: "Our story, Naia Ocean Hotel · Midigama, Sri Lanka"
description: "How a surf trip that never really ended turned into a house by the sea in Midigama, Sri Lanka. The people and values behind Naia Ocean Hotel."
ogTitle: "Our story, Naia Ocean Hotel"
ogDescription: "How a surf trip that never really ended turned into a house by the sea. The people and values behind Naia Ocean Hotel, Midigama."
ogImage: "https://images.unsplash.com/photo-1713293549789-d291b1fd360f?fm=webp&q=80&w=1200&auto=format&fit=crop"
activePage: "about"
screenLabel: "About"
showCurrency: false
extraHead: |
  <style>
    .values{display:grid;grid-template-columns:repeat(3,1fr);gap:clamp(1.4rem,3vw,2.4rem)}
    .value{background:#fff;border-radius:var(--radius-lg);padding:2rem 1.8rem;box-shadow:0 1px 0 var(--line-soft)}
    .value__n{font-family:var(--serif);font-size:2.4rem;color:var(--turquoise);line-height:1}
    .value h3{font-size:1.55rem;margin:.9rem 0 .6rem}
    .value p{color:var(--ink-soft);font-weight:300}
    .team{display:grid;grid-template-columns:repeat(4,1fr);gap:clamp(1.2rem,2.5vw,2rem)}
    .member__photo{aspect-ratio:3/4;border-radius:var(--radius-lg);overflow:hidden;margin-bottom:1rem}
    .member__photo image-slot{width:100%;height:100%}
    .member h3{font-size:1.4rem}
    .member span{font-size:.85rem;color:var(--terracotta);font-weight:500;letter-spacing:.02em}
    @media(max-width:900px){.values{grid-template-columns:1fr}.team{grid-template-columns:1fr 1fr}}
    @media(max-width:560px){.team{grid-template-columns:1fr 1fr}}
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
        "name": "About",
        "item": "https://naia-ocean-hotel.example/about.html"
      }
    ]
  }
  </script>
permalink: "/about.html"
heroTitle: "Our story"
heroSubtitle: "How a surf trip that never really ended turned into a house by the sea in Midigama, Sri Lanka."
---


<section class="pagehero">
  <div class="pagehero__media"><image-slot fetchpriority="high" alt="The house, founders on the terrace" id="about-hero" src="https://images.unsplash.com/photo-1713293549789-d291b1fd360f?fm=webp&amp;q=75&amp;w=1800&amp;auto=format&amp;fit=crop" placeholder="The house / founders on the terrace" fit="cover"></image-slot></div>
  <div class="pagehero__inner">
    <p class="crumb"><a href="index.html" data-i18n="nav.home">Home</a> · <span data-i18n="nav.about">About</span></p>
    <h1 data-i18n="about.hero.title">{{ heroTitle | safe }}</h1>
    <p class="pagehero__sub" data-i18n="about.hero.sub">{{ heroSubtitle }}</p>
  </div>
</section>

<!-- STORY -->
<section class="section">
  <div class="wrap">
    <div class="split">
      <div class="split__media reveal"><image-slot loading="lazy" alt="Old photo of the house, or build phase" id="about-story" src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?fm=webp&amp;q=75&amp;w=1300&amp;auto=format&amp;fit=crop" placeholder="Old photo of the house, or build phase" fit="cover"></image-slot></div>
      <div class="reveal d1">
        <p class="eyebrow" data-i18n="about.story.eyebrow">How it began</p>
        <h2 class="title-h2 mt-2" data-i18n="about.story.title">We came for a swell and never left.</h2>
        <p class="lead mt-3" data-i18n="about.story.body">Naia started the way these things often do.</p>
      </div>
    </div>
  </div>
</section>

<!-- VALUES -->
<section class="section section--sand">
  <div class="wrap">
    <div class="sec-head is-centered reveal">
      <p class="eyebrow is-centered" data-i18n="about.values.eyebrow">What we care about</p>
      <h2 data-i18n="about.values.title">The things we won't compromise on.</h2>
    </div>
    <div class="values mt-4">
      <article class="value reveal">
        <div class="value__n">01</div>
        <h3 data-i18n="about.value.1.title">Lightly on the land</h3>
        <p data-i18n="about.value.1.desc">Solar hot water, filtered water, plastic-free where we can.</p>
      </article>
      <article class="value reveal d1">
        <div class="value__n">02</div>
        <h3 data-i18n="about.value.2.title">Rooted in Midigama</h3>
        <p data-i18n="about.value.2.desc">Local team, local guides, local suppliers.</p>
      </article>
      <article class="value reveal d2">
        <div class="value__n">03</div>
        <h3 data-i18n="about.value.3.title">Real over polished</h3>
        <p data-i18n="about.value.3.desc">We'd rather be honest and warm than slick.</p>
      </article>
    </div>
  </div>
</section>

<!-- TEAM -->
<section class="section">
  <div class="wrap">
    <div class="sec-head is-centered reveal">
      <p class="eyebrow is-centered" data-i18n="about.team.eyebrow">The people</p>
      <h2 data-i18n="about.team.title">Who you'll meet.</h2>
    </div>
    <div class="team mt-4">
      <article class="member reveal">
        <div class="member__photo"><image-slot loading="lazy" alt="Leïla, host" id="team-1" placeholder="Leïla, host" fit="cover"></image-slot></div>
        <h3 data-i18n="about.team.1.name">Leïla</h3>
        <span data-i18n="about.team.1.role">Co-founder &amp; host</span>
      </article>
      <article class="member reveal d1">
        <div class="member__photo"><image-slot loading="lazy" alt="Tom, surf guide" id="team-2" placeholder="Tom, surf guide" fit="cover"></image-slot></div>
        <h3 data-i18n="about.team.2.name">Tom</h3>
        <span data-i18n="about.team.2.role">Co-founder &amp; surf guide</span>
      </article>
      <article class="member reveal d2">
        <div class="member__photo"><image-slot loading="lazy" alt="Maya, yoga teacher" id="team-3" placeholder="Maya, yoga teacher" fit="cover"></image-slot></div>
        <h3 data-i18n="about.team.3.name">Maya</h3>
        <span data-i18n="about.team.3.role">Lead yoga teacher</span>
      </article>
      <article class="member reveal d3">
        <div class="member__photo"><image-slot loading="lazy" alt="Asela, kitchen & garden" id="team-4" placeholder="Asela, kitchen & garden" fit="cover"></image-slot></div>
        <h3 data-i18n="about.team.4.name">Asela</h3>
        <span data-i18n="about.team.4.role">Kitchen &amp; garden</span>
      </article>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="finalcta">
  <image-slot loading="lazy" alt="Wide ocean, golden hour" id="about-cta-bg" src="https://images.unsplash.com/photo-1622932720890-15cdc9364a55?fm=webp&amp;q=75&amp;w=1400&amp;auto=format&amp;fit=crop" placeholder="Wide ocean / golden hour" fit="cover"></image-slot>
  <div class="finalcta__inner">
    <h2 class="reveal" data-i18n="home.cta.title">Ready to live Naia?</h2>
    <p class="lead mt-2 reveal d1" data-i18n="home.cta.sub">Tell us your dates and we'll hold your spot.</p>
    <div class="mt-3 reveal d2"><a href="book.html" class="btn btn--primary" data-i18n="cta.book">Book your stay</a></div>
  </div>
</section>

