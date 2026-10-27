# Greenmantle Tree Care — Landing Page

A single, fast, conversion-focused landing page for a UK-based tree care
(arboricultural) client. Built with **Vite + React** and plain CSS with custom
properties. Design direction references [savatree.com](https://www.savatree.com)
but is adapted for the UK market with a rich, heritage "greenery" aesthetic.

## Getting started

```bash
npm install
npm run dev      # start dev server → http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Project structure

```
public/
  favicon.svg            # SVG favicon / logo mark
src/
  main.jsx               # React entry point
  App.jsx                # Page composition (all sections in order)
  data/
    site.js              # ALL content & contact details live here
  assets/
    icons.jsx            # Hand-drawn inline SVG icon set
  hooks/
    useReveal.jsx        # Scroll-reveal (IntersectionObserver) helpers
  styles/
    tokens.css           # Design tokens (colours, type, spacing, shadows)
    global.css           # Base styles + shared utility classes
  components/            # One folder per section (jsx + css module)
```

## Editing content

Nearly all copy, contact details, testimonials, services and imagery are
centralised in **`src/data/site.js`**. Update that single file to change the
page content — no component edits needed for text changes.

## Before launch — TODO

- [ ] Replace the **placeholder brand** ("Greenmantle Tree Care") with the real
      client name, logo and brand colours.
- [ ] Replace **contact details** in `src/data/site.js` — phone, email, address,
      hours and service areas are all fictional placeholders.
- [ ] Wire the **contact form** to a real backend / form service (e.g. Formspree,
      Netlify Forms, or a custom endpoint). Currently it shows a local success
      message only.
- [ ] Swap **stock photography** for the client's own licensed photos. Images
      currently use free-to-use Unsplash URLs (no attribution required).
- [ ] Update the **company registration number** and legal links in the footer.

## Notes

- **Images** load from Unsplash (`images.unsplash.com`) sized and quality-cropped
  via URL params, and are lazy-loaded for performance.
- **Accessibility**: semantic landmarks, focus-visible styles, `aria` labels, and
  `prefers-reduced-motion` support are included.
- **Performance**: no UI framework beyond React, minimal JS, lazy images, and a
  small CSS footprint for fast load times.
