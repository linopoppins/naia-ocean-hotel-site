---
ogTitle: Naia Ocean Hotel, Surf & Yoga · Midigama
ogImage: https://images.unsplash.com/photo-1517053589573-a5473fadffbd?fm=webp&q=80&w=1200&auto=format&fit=crop
ogDescription: Where the ocean is fifty metres away. A small surf & yoga house
  on Sri Lanka's south coast.
screenLabel: Home
templateEngineOverride: njk
layout: base.njk
permalink: /index.html
showCurrency: true
extraHead: >
  <script type="application/ld+json">

  {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "name": "Naia Ocean Hotel",
    "alternateName": "Naïa Ocean House",
    "description": "A small surf & yoga guest house on Sri Lanka's south coast, steps from the Lazy Right break in Midigama.",
    "url": "https://naia-ocean-hotel.example/index.html",
    "image": "https://images.unsplash.com/photo-1517053589573-a5473fadffbd?fm=webp&q=80&w=1200&auto=format&fit=crop",
    "email": "hello@naiaocean.com",
    "priceRange": "€22–€35",
    "areaServed": {
      "@type": "Place",
      "name": "Midigama, Sri Lanka"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Midigama",
      "addressRegion": "Southern Province",
      "addressCountry": "LK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 5.9739,
      "longitude": 80.3897
    },
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Private kitchenette in every room"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Private bathroom in every room"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Free WiFi"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "On-site surf coaching & board rental"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Rooftop yoga shala"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Garden with ocean view"
      }
    ]
  }

  </script>
description: A small surf & yoga guest house on Sri Lanka's south coast. Wake to
  the surf, practice yoga at sunrise, and let the days run on ocean time.
heroTitle: Where the ocean is <em>fifty metres</em> away.
heroSubtitle: A small surf & yoga house on Sri Lanka's south coast, built for
  people who came to ride, breathe, and let the days run on ocean time. time
activePage: index
title: Naia Ocean Hotel, Surf & Yoga Guest House · Midigama, Sri Lanka
---


<!-- ============ HERO ============ -->
<section class="hero">
  <div class="hero__media">
    <image-slot fetchpriority="high" alt="Full-bleed ocean, wave photo, Midigama sunrise" id="home-hero" src="https://images.unsplash.com/photo-1517053589573-a5473fadffbd?fm=webp&amp;q=75&amp;w=1800&amp;auto=format&amp;fit=crop" placeholder="Drop a full-bleed ocean / wave photo, Midigama sunrise" fit="cover"></image-slot>
  </div>
  <div class="hero__centerlogo">
    <img src="assets/images/logo-naia-transparent.png" alt="Na&iuml;a Ocean House">
  </div>
  <div class="hero__inner">
    <h1 data-i18n="home.hero.title">{{ heroTitle | safe }}</h1>
    <p class="hero__sub" data-i18n="home.hero.sub">{{ heroSubtitle }}</p>
    <div class="hero__cta">
      <a href="book.html" class="btn btn--primary" data-i18n="cta.book">Book your stay</a>
      <a href="rooms.html" class="btn btn--light" data-i18n="cta.allRooms">See all rooms</a>
    </div>
  </div>
  <div class="hero__scroll"><span></span></div>
</section>

<!-- ============ INTRO ============ -->
<section class="section">
  <div class="wrap center">
    <p class="eyebrow is-centered reveal" data-i18n="home.intro.eyebrow">The spirit of the place</p>
    <h2 class="title-h2 mt-2 reveal d1" style="max-width:18ch;margin-inline:auto;font-weight:400" data-i18n="home.intro.title">A place where time slows down.</h2>
    <p class="lead mt-3 reveal d2" style="max-width:62ch;margin-inline:auto" data-i18n="home.intro.body">Naia is the kind of house a designer who loves the ocean might build, then open to others.</p>
  </div>
</section>

<!-- ============ PILLARS ============ -->
<section class="section" style="padding-top:0">
  <div class="wrap">
    <div class="pillars">
      <article class="pillar reveal">
        <image-slot alt="Surfer on a clean left, Midigama reef" id="home-pillar-surf" src="https://images.unsplash.com/photo-1760755886287-b4fe8de6ad29?fm=webp&amp;q=75&amp;w=950&amp;auto=format&amp;fit=crop" placeholder="Surfer on a clean left, Midigama reef" fit="cover"></image-slot>
        <div class="pillar__body">
          <span class="pillar__num">01</span>
          <h3 data-i18n="home.pillar.surf.title">Surf</h3>
          <p data-i18n="home.pillar.surf.desc">World-class reef and point breaks on the doorstep.</p>
          <a href="surf.html" class="link-arrow" data-i18n="cta.learnSurf">Surf with us
            <svg viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M3 9h12M11 5l4 4-4 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
        </div>
      </article>
      <article class="pillar reveal d1">
        <image-slot alt="Yoga on the rooftop shala at sunrise" id="home-pillar-yoga" src="https://images.unsplash.com/photo-1646166625158-1aec5018a1f1?fm=webp&amp;q=75&amp;w=950&amp;auto=format&amp;fit=crop" placeholder="Yoga on the rooftop shala at sunrise" fit="cover"></image-slot>
        <div class="pillar__body">
          <span class="pillar__num">02</span>
          <h3 data-i18n="home.pillar.yoga.title">Yoga</h3>
          <p data-i18n="home.pillar.yoga.desc">Daily classes on the rooftop shala at sunrise and sunset.</p>
          <a href="yoga.html" class="link-arrow" data-i18n="cta.learnYoga">Our yoga
            <svg viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M3 9h12M11 5l4 4-4 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
        </div>
      </article>
      <article class="pillar reveal d2">
        <image-slot alt="Terrace, long breakfast table, plants" id="home-pillar-stay" src="https://images.unsplash.com/photo-1725118866599-232f15c5a7a1?fm=webp&amp;q=75&amp;w=950&amp;auto=format&amp;fit=crop" placeholder="Terrace / long breakfast table, plants" fit="cover"></image-slot>
        <div class="pillar__body">
          <span class="pillar__num">03</span>
          <h3 data-i18n="home.pillar.stay.title">Stay</h3>
          <p data-i18n="home.pillar.stay.desc">Five rooms, a shaded terrace, and a long table for breakfast.</p>
          <a href="rooms.html" class="link-arrow" data-i18n="cta.allRooms">See all rooms
            <svg viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M3 9h12M11 5l4 4-4 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
        </div>
      </article>
    </div>
  </div>
</section>

<!-- ============ ROOMS HIGHLIGHT ============ -->
<section class="section section--sand">
  <div class="wrap">
    <div class="sec-head reveal">
      <p class="eyebrow" data-i18n="home.rooms.eyebrow">Rooms &amp; rates</p>
      <h2 data-i18n="home.rooms.title">Six rooms. None of them the same.</h2>
      <p class="lead" data-i18n="home.rooms.sub">Each room is its own corner of the house.</p>
    </div>
    <div class="rooms mt-4">
      <article class="room reveal">
        <div class="room__media">
          <span class="room__tag" data-i18n="room.ocean.tag">Sea view</span>
          <image-slot loading="lazy" alt="Deluxe Sea View, vaulted ceiling, terrace" id="home-room-ocean" src="assets/images/deluxe-1-thumb.webp" placeholder="Deluxe Sea View, vaulted ceiling, terrace" fit="cover"></image-slot>
        </div>
        <div class="room__body">
          <div class="room__head">
            <h3 data-i18n="room.ocean.name">Deluxe Sea View</h3>
            <span class="room__price"><span data-price="{{ rooms.rooms[0].price }}">&euro;{{ rooms.rooms[0].price }}</span><small data-i18n="common.perNight">/ night</small></span>
          </div>
          <p class="room__desc" data-i18n="room.ocean.desc">The biggest room in the house. Vaulted ceiling, oversized bed, and a terrace where the sea fills your horizon before your coffee goes cold.</p>
          <div class="room__foot">
            <a href="rooms.html#deluxe" class="link-arrow" data-i18n="cta.viewRoom">View room
              <svg viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M3 9h12M11 5l4 4-4 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
          </div>
        </div>
      </article>
      <article class="room reveal d1">
        <div class="room__media">
          <span class="room__tag" data-i18n="room.garden.tag">Garden view</span>
          <image-slot loading="lazy" alt="Garden Double, private terrace, tropical greenery" id="home-room-garden" src="assets/images/garden-double-1-thumb.webp" placeholder="Garden Double, private terrace, tropical greenery" fit="cover"></image-slot>
        </div>
        <div class="room__body">
          <div class="room__head">
            <h3 data-i18n="room.garden.name">Garden Double</h3>
            <span class="room__price"><span data-price="{{ rooms.rooms[1].price }}">&euro;{{ rooms.rooms[1].price }}</span><small data-i18n="common.perNight">/ night</small></span>
          </div>
          <p class="room__desc" data-i18n="room.garden.desc">Tucked behind the garden, cooler and quieter than the rest. A double bed, a private terrace onto the greenery, and a rhythm entirely your own.</p>
          <div class="room__foot">
            <a href="rooms.html#double-garden" class="link-arrow" data-i18n="cta.viewRoom">View room
              <svg viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M3 9h12M11 5l4 4-4 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
          </div>
        </div>
      </article>
      <article class="room reveal d2">
        <div class="room__media">
          <span class="room__tag" data-i18n="room.surfer.tag">Best value</span>
          <image-slot loading="lazy" alt="Economy Twin, clean and simple" id="home-room-surfer" src="assets/images/eco-twin-1-thumb.webp" placeholder="Economy Twin, clean and simple" fit="cover"></image-slot>
        </div>
        <div class="room__body">
          <div class="room__head">
            <h3 data-i18n="room.surfer.name">Economy Twin</h3>
            <span class="room__price"><span data-price="{{ rooms.rooms[5].price }}">&euro;{{ rooms.rooms[5].price }}</span><small data-i18n="common.perNight">/ night</small></span>
          </div>
          <p class="room__desc" data-i18n="room.surfer.desc">Simple, honest, exactly what you need. Two beds, a private bathroom, and fifty metres to the surf.</p>
          <div class="room__foot">
            <a href="rooms.html#economy-twin" class="link-arrow" data-i18n="cta.viewRoom">View room
              <svg viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M3 9h12M11 5l4 4-4 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
          </div>
        </div>
      </article>
    </div>
    <div class="center mt-4 reveal">
      <a href="rooms.html" class="btn btn--ghost" data-i18n="cta.allRooms">See all rooms</a>
    </div>
  </div>
</section>

<!-- ============ GALLERY MOSAIC ============ -->
<section class="section">
  <div class="wrap">
    <div class="sec-head is-centered reveal">
      <p class="eyebrow is-centered" data-i18n="home.gallery.eyebrow">A few moments</p>
      <h2 data-i18n="home.gallery.title">Mornings here look like this.</h2>
      <p class="lead" data-i18n="home.gallery.sub">Tap any photo to see it full screen.</p>
    </div>
    <div class="mosaic mt-4 reveal">
      <image-slot loading="lazy" alt="Sunrise paddle-out" id="home-gal-1" src="https://images.unsplash.com/photo-1517053589573-a5473fadffbd?fm=webp&amp;q=75&amp;w=650&amp;auto=format&amp;fit=crop" class="m-big" data-lightbox placeholder="Sunrise paddle-out" fit="cover"></image-slot>
      <image-slot loading="lazy" alt="Breakfast on the terrace" id="home-gal-2" src="https://images.unsplash.com/photo-1728050829024-8113f4cd85ec?fm=webp&amp;q=75&amp;w=650&amp;auto=format&amp;fit=crop" data-lightbox placeholder="Breakfast on the terrace" fit="cover"></image-slot>
      <image-slot loading="lazy" alt="Surfboards lined up" id="home-gal-3" src="https://images.unsplash.com/photo-1621962532000-837e33bad827?fm=webp&amp;q=75&amp;w=650&amp;auto=format&amp;fit=crop" data-lightbox placeholder="Surfboards lined up" fit="cover"></image-slot>
      <image-slot loading="lazy" alt="Yoga on the rooftop" id="home-gal-4" src="https://images.unsplash.com/photo-1592981004873-51d6ebadf5e1?fm=webp&amp;q=75&amp;w=1100&amp;auto=format&amp;fit=crop" class="m-wide" data-lightbox placeholder="Yoga on the rooftop" fit="cover"></image-slot>
      <image-slot loading="lazy" alt="Palm shadows on a wall" id="home-gal-5" src="https://images.unsplash.com/photo-1662364372862-884276d6670f?fm=webp&amp;q=75&amp;w=650&amp;auto=format&amp;fit=crop" data-lightbox placeholder="Palm shadows on a wall" fit="cover"></image-slot>
      <image-slot loading="lazy" alt="Sunset from the deck" id="home-gal-6" src="https://images.unsplash.com/photo-1601562219660-c02881671359?fm=webp&amp;q=75&amp;w=650&amp;auto=format&amp;fit=crop" data-lightbox placeholder="Sunset from the deck" fit="cover"></image-slot>
      <image-slot loading="lazy" alt="The wave out front" id="home-gal-7" src="https://images.unsplash.com/photo-1611852925344-14698d9cc7d0?fm=webp&amp;q=75&amp;w=1100&amp;auto=format&amp;fit=crop" class="m-wide" data-lightbox placeholder="The wave out front" fit="cover"></image-slot>
    </div>
  </div>
</section>

<!-- ============ TESTIMONIALS ============ -->
<section class="section section--sand">
  <div class="wrap">
    <div class="sec-head is-centered reveal">
      <p class="eyebrow is-centered" data-i18n="home.testi.eyebrow">Guest stories</p>
      <h2 data-i18n="home.testi.title">What people carry home.</h2>
    </div>
    <div class="quotes mt-4">
      <figure class="quote reveal">
        <div class="stars" aria-label="5 out of 5">
          <svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 1l2 4.5L15 6l-3.7 3.3L12.5 15 8 12.2 3.5 15l1.2-5.7L1 6l5-0.5z"/></svg>
          <svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 1l2 4.5L15 6l-3.7 3.3L12.5 15 8 12.2 3.5 15l1.2-5.7L1 6l5-0.5z"/></svg>
          <svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 1l2 4.5L15 6l-3.7 3.3L12.5 15 8 12.2 3.5 15l1.2-5.7L1 6l5-0.5z"/></svg>
          <svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 1l2 4.5L15 6l-3.7 3.3L12.5 15 8 12.2 3.5 15l1.2-5.7L1 6l5-0.5z"/></svg>
          <svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 1l2 4.5L15 6l-3.7 3.3L12.5 15 8 12.2 3.5 15l1.2-5.7L1 6l5-0.5z"/></svg>
        </div>
        <p>"It is truly extraordinary how much I loved staying at Naia Ocean House. From the very first moment, I felt completely at home and genuinely welcome. Olivia and Magdalena have created such a warm, caring, and beautiful home. You feel incredibly well taken care of, supported, and surrounded by great ideas and positive energy."</p>
        <figcaption class="quote__who">
          <span><span class="quote__name">Verified guest</span><span class="quote__loc">Booking.com &middot; 10/10</span></span>
        </figcaption>
      </figure>
      <figure class="quote reveal d1">
        <div class="stars" aria-label="5 out of 5">
          <svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 1l2 4.5L15 6l-3.7 3.3L12.5 15 8 12.2 3.5 15l1.2-5.7L1 6l5-0.5z"/></svg>
          <svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 1l2 4.5L15 6l-3.7 3.3L12.5 15 8 12.2 3.5 15l1.2-5.7L1 6l5-0.5z"/></svg>
          <svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 1l2 4.5L15 6l-3.7 3.3L12.5 15 8 12.2 3.5 15l1.2-5.7L1 6l5-0.5z"/></svg>
          <svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 1l2 4.5L15 6l-3.7 3.3L12.5 15 8 12.2 3.5 15l1.2-5.7L1 6l5-0.5z"/></svg>
          <svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 1l2 4.5L15 6l-3.7 3.3L12.5 15 8 12.2 3.5 15l1.2-5.7L1 6l5-0.5z"/></svg>
        </div>
        <p>"The location right by the ocean is amazing. From the garden you can watch surfers at the Lazy Right. The rooms are very nice, spacious and comfortable. It's one of those places where you literally feel at home. The girls who run Naia are suuuuper nice, very helpful and always happy to give tips or help organize surfing or other things around."</p>
        <figcaption class="quote__who">
          <span><span class="quote__name">Verified guest</span><span class="quote__loc">Booking.com &middot; 10/10</span></span>
        </figcaption>
      </figure>
      <figure class="quote reveal d2">
        <div class="stars" aria-label="5 out of 5">
          <svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 1l2 4.5L15 6l-3.7 3.3L12.5 15 8 12.2 3.5 15l1.2-5.7L1 6l5-0.5z"/></svg>
          <svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 1l2 4.5L15 6l-3.7 3.3L12.5 15 8 12.2 3.5 15l1.2-5.7L1 6l5-0.5z"/></svg>
          <svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 1l2 4.5L15 6l-3.7 3.3L12.5 15 8 12.2 3.5 15l1.2-5.7L1 6l5-0.5z"/></svg>
          <svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 1l2 4.5L15 6l-3.7 3.3L12.5 15 8 12.2 3.5 15l1.2-5.7L1 6l5-0.5z"/></svg>
          <svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 1l2 4.5L15 6l-3.7 3.3L12.5 15 8 12.2 3.5 15l1.2-5.7L1 6l5-0.5z"/></svg>
        </div>
        <p>"Highly recommend this place also for digital nomads, you can basically have your office with an ocean soundtrack :)"</p>
        <figcaption class="quote__who">
          <span><span class="quote__name">Verified guest</span><span class="quote__loc">Booking.com &middot; 9.5/10</span></span>
        </figcaption>
      </figure>
    </div>
  </div>
</section>

<!-- ============ FINAL CTA ============ -->
<section class="finalcta">
  <image-slot loading="lazy" alt="Wide ocean, sunset photo for the closing band" id="home-cta-bg" src="https://images.unsplash.com/photo-1613365891889-7f7e3316be61?fm=webp&amp;q=75&amp;w=1400&amp;auto=format&amp;fit=crop" placeholder="Wide ocean / sunset photo for the closing band" fit="cover"></image-slot>
  <div class="finalcta__inner">
    <p class="eyebrow is-centered hero__eyebrow reveal" data-i18n="home.cta.eyebrow">Your turn</p>
    <h2 class="mt-2 reveal d1" data-i18n="home.cta.title">Ready to live Naia?</h2>
    <p class="lead mt-2 reveal d2" data-i18n="home.cta.sub">Tell us your dates and we'll hold your spot.</p>
    <div class="mt-3 reveal d2" style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap">
      <a href="book.html" class="btn btn--primary" data-i18n="cta.book">Book your stay</a>
      <a href="contact.html" class="btn btn--light" data-i18n="nav.contact">Contact</a>
    </div>
  </div>
</section>

<!-- ============ FOOTER ============ -->
