# Sugar Lips — React project

Vite + React + Tailwind rebuild of the Sugar Lips one-page site.

## Setup

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
```

## Structure

```
src/
  components/
    Nav.jsx          fixed appbar — transparent over hero, solid on scroll
    Hero.jsx          full-bleed illustrated hero
    StatStrip.jsx      4.3★ / Custom / Daily / 100% strip
    About.jsx          Our Story
    Services.jsx        6 services list
    Favourites.jsx       6 favourite bakes, horizontal scroller
    Testimonials.jsx       Google reviews
    Contact.jsx           address / phone / hours / map / order CTAs
    Footer.jsx
    MobileBar.jsx           mobile-only sticky action bar
    Icons.jsx                 shared inline SVG icons
  hooks/useReveal.js            scroll-reveal IntersectionObserver hook
  constants.js                   phone, WhatsApp, directions, map, address
```

Edit `src/constants.js` to change the phone number, WhatsApp message, or
address in one place — every component reads from there.

Tailwind tokens (colors, fonts) are defined in `tailwind.config.js` under
`theme.extend`, matching the brand palette from the logo sheet (cream, rose,
cocoa, gold).
