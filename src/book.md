---
layout: base.njk
templateEngineOverride: njk
title: "Book your stay, Naia Ocean Hotel · Midigama, Sri Lanka"
description: "Check availability and request your stay at Naia Ocean Hotel, Midigama, Sri Lanka. Best rate booked direct, flexible, friendly cancellation."
ogTitle: "Book your stay, Naia Ocean Hotel"
ogDescription: "Check availability and request your stay at Naia Ocean Hotel, Midigama. Best rate booked direct, flexible, friendly cancellation."
ogImage: "https://images.unsplash.com/photo-1651697219057-7b44d777dc87?fm=webp&q=80&w=1200&auto=format&fit=crop"
activePage: "book"
screenLabel: "Book"
showCurrency: true
extraHead: |
  <style>
    .book-grid{display:grid;grid-template-columns:1.5fr 1fr;gap:clamp(2rem,4vw,4rem);align-items:start}
    .trust{display:flex;flex-wrap:wrap;gap:1.4rem;margin-top:2.5rem}
    .trust div{display:flex;align-items:center;gap:.6rem;font-size:.92rem;color:var(--ink-soft)}
    .trust svg{width:20px;height:20px;color:var(--leaf);flex:none}
    .ok{display:none;background:var(--leaf);color:#fff;padding:1.2rem 1.4rem;border-radius:var(--radius-lg);margin-bottom:1.5rem}
    .ok b{font-family:var(--serif);font-size:1.2rem;display:block;margin-bottom:.2rem}
    .policy{background:var(--sand);border-radius:var(--radius-lg);padding:1.6rem;margin-top:1.4rem}
    .policy h4{font-family:var(--sans);font-size:.78rem;letter-spacing:.14em;text-transform:uppercase;color:var(--terracotta);margin-bottom:.6rem;font-weight:600}
  @media(max-width:900px){.book-grid{grid-template-columns:1fr}.summary{position:static}}
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
        "name": "Book now",
        "item": "https://naia-ocean-hotel.example/book.html"
      }
    ]
  }
  </script>
permalink: "/book.html"
heroTitle: "Book your stay"
heroSubtitle: "Direct bookings for our house in Midigama, Sri Lanka, always get our best rate."
---


<section class="pagehero" style="min-height:64vh">
  <div class="pagehero__media"><image-slot fetchpriority="high" alt="Calm hero, terrace, pool or ocean at dusk" id="book-hero" src="https://images.unsplash.com/photo-1651697219057-7b44d777dc87?fm=webp&amp;q=75&amp;w=1800&amp;auto=format&amp;fit=crop" placeholder="Calm hero, terrace, pool or ocean at dusk" fit="cover"></image-slot></div>
  <div class="pagehero__inner">
    <p class="crumb"><a href="index.html" data-i18n="nav.home">Home</a> · <span data-i18n="nav.book">Book now</span></p>
    <h1 data-i18n="book.hero.title">{{ heroTitle | safe }}</h1>
    <p class="pagehero__sub" data-i18n="book.hero.sub">{{ heroSubtitle }}</p>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="book-grid">
      <!-- FORM -->
      <div class="reveal">
        <div class="ok" data-booking-ok>
          <b>Thank you, request received.</b>
          <span>We'll confirm your dates by email within a few hours. Your room isn't charged yet.</span>
        </div>
        <h2 class="title-h3" data-i18n="book.form.title">Find your room</h2>
        <form data-booking class="mt-3" novalidate>
          <div class="field-row">
            <div class="field"><label data-i18n="common.checkin">Check in</label><input type="date" name="checkin" required></div>
            <div class="field"><label data-i18n="common.checkout">Check out</label><input type="date" name="checkout" required></div>
          </div>
          <div class="field-row">
            <div class="field"><label data-i18n="book.room">Room</label>
              <select name="room" required>
                <option value="deluxe" data-name="Deluxe Sea View" data-price="35" selected>Deluxe Sea View, â‚¬35</option>
                <option value="double-garden" data-name="Garden Double" data-price="33">Garden Double, â‚¬33</option>
                <option value="double-sea" data-name="Double Sea View" data-price="30">Double Sea View, â‚¬30</option>
                <option value="queen" data-name="Standard Queen" data-price="25">Standard Queen, â‚¬25</option>
                <option value="twin" data-name="Twin Room" data-price="25">Twin Room, â‚¬25</option>
                <option value="economy-twin" data-name="Economy Twin" data-price="22">Economy Twin, â‚¬22</option>
              </select>
            </div>
            <div class="field"><label data-i18n="book.guests">Guests</label>
              <select name="guests"><option>1</option><option selected>2</option><option>3</option></select>
            </div>
          </div>
          <div class="field-row">
            <div class="field"><label data-i18n="book.name">Full name</label><input type="text" name="name" required></div>
            <div class="field"><label data-i18n="book.email">Email</label><input type="email" name="email" required></div>
          </div>
          <div class="field"><label data-i18n="book.message">Anything we should know?</label><textarea name="message" rows="3"></textarea></div>
          <button type="submit" class="btn btn--primary" style="width:100%" data-i18n="book.submit">Request to book</button>
        </form>

        <div class="policy">
          <h3 data-i18n="book.policy.title">Cancellation policy</h3>
          <p class="muted" style="font-weight:300" data-i18n="book.policy.body">Free cancellation up to 14 days before arrival.</p>
        </div>

        <div class="trust">
          <div><svg viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4 10-10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span data-i18n="book.trust.direct">Best rate, booked direct</span></div>
          <div><svg viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4 10-10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span data-i18n="book.trust.flex">Flexible, friendly cancellation</span></div>
          <div><svg viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4 10-10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span data-i18n="book.trust.secure">Secure payment on arrival or by link</span></div>
        </div>
      </div>

      <!-- SUMMARY -->
      <aside class="summary reveal d1">
        <h3 class="title-h3" style="margin-bottom:1rem" data-i18n="book.summary.title">Your stay</h3>
        <p class="muted" data-sum-pick style="font-weight:300" data-i18n="book.summary.pick">Pick your dates and room to see a price.</p>
        <div data-sum-table style="display:none">
          <div class="summary__row"><span data-i18n="book.summary.room">Room</span><span data-sum="room">, </span></div>
          <div class="summary__row"><span data-i18n="book.summary.dates">Dates</span><span data-sum="dates">, </span></div>
          <div class="summary__row"><span data-i18n="book.summary.nights">Nights</span><span data-sum="nights">, </span></div>
          <div class="summary__row"><span data-i18n="book.summary.guests">Guests</span><span data-sum="guests">, </span></div>
          <div class="summary__row"><span data-i18n="book.summary.rate">Rate / night</span><span data-sum="rate">, </span></div>
          <div class="summary__row total"><span data-i18n="book.summary.total">Estimated total</span><span data-sum="total">, </span></div>
        </div>
      </aside>
    </div>
  </div>
</section>

