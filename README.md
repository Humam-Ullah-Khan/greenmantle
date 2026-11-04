# Blaine Tree Removals — Landing Page

A fast, multi-page local SEO site for Blaine Tree Removals, a service-area
business in Blaine, Minnesota. Built with static **HTML and CSS** and bundled by Vite.

## Getting started

```bash
npm install
npm run dev      # start dev server → http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Project structure

```
index.html                       # Homepage, business schema, quote form (Formspree)
site.css                         # Shared styles for every page
tree-removal.html                # Service pages
stump-grinding.html
tree-trimming.html
storm-damage-cleanup.html
emerald-ash-borer-removal.html
crane-tree-removal.html
tree-removal-cost.html           # Cost guide article
winter-tree-removal.html         # Winter removal guide article
assets/                          # Job photos (descriptive filenames help SEO)
sitemap.xml, robots.txt
```

No build step needed: upload these files as they are to the web root.
All links are relative, so pages also open and link correctly from your computer.
(`npm run build` is optional and only produces a minified copy in `dist/`.)

```
```

## Adding a page

1. Create `<slug>.html` (copy an existing service page).
2. Add the slug to `pages` in `vite.config.js`.
3. Add the URL to `sitemap.xml` and to the header/footer nav on every page.

Phone number, hours and email appear on every page. Keep them identical
everywhere, including on any directory listings (Google, Bing, Yelp).

## Before launch — TODO

- [ ] Verify the site in Google Search Console and Bing Webmaster Tools, submit `sitemap.xml`.

## Notes

- **Accessibility**: semantic landmarks, focus-visible styles and
  `prefers-reduced-motion` support are included.
- **Schema**: homepage has `HomeAndConstructionBusiness` + `FAQPage`; each service page
  has `Service`, `BreadcrumbList` and `FAQPage` JSON-LD linked to the business `@id`.
