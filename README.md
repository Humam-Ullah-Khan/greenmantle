# Blaine Tree Removals — Landing Page

A single, fast, conversion-focused landing page for Blaine Tree Removals in
Coon Rapids, Minnesota. Built with static **HTML, CSS and vanilla JavaScript** with custom
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
favicon.svg              # SVG favicon / logo mark
logo.png                 # Full Blaine Tree Removals brand lockup
robots.txt               # Search crawler rules
index.html               # Complete static page markup and content
styles.css               # Design tokens, layout and component styles
script.js                # Progressive-enhancement interactions
```

## Editing content

Copy, contact details, services and imagery are in **`index.html`**.

## Before launch — TODO

- [ ] Confirm business hours and service areas in `index.html`.
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
- **Performance**: no UI framework, minimal vanilla JS, lazy images, and a
  small CSS footprint for fast load times.
