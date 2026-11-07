import { defineConfig } from 'vite'
import { copyFileSync, mkdirSync, readdirSync } from 'node:fs'
import { resolve } from 'node:path'

// Every page on the site. Add new pages here and in sitemap.xml.
const pages = [
  'tree-removal',
  'stump-grinding',
  'tree-trimming',
  'storm-damage-cleanup',
  'emerald-ash-borer-removal',
  'crane-tree-removal',
  'tree-removal-cost',
  'winter-tree-removal',
  'about',
  'contact',
  'privacy-policy',
  '404',
]

// Root-level files that must be served as-is (Vite only copies public/ by default).
const staticFiles = ['.htaccess', 'robots.txt', 'sitemap.xml', 'logo.png', 'favicon.svg', 'favicon.ico', 'favicon-96x96.png', 'favicon-192x192.png', 'apple-touch-icon.png']

// Photos keep their original names in dist/ so og:image and schema URLs stay valid.
const photoDir = 'assets'

export default defineConfig({
  base: './',
  server: {
    port: 5173,
    open: false,
  },
  build: {
    outDir: 'dist',
    assetsInlineLimit: 4096,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        ...Object.fromEntries(pages.map((p) => [p, resolve(__dirname, p + '.html')])),
      },
    },
  },
  plugins: [
    {
      name: 'copy-static-root-files',
      closeBundle() {
        for (const f of staticFiles) copyFileSync(resolve(__dirname, f), resolve(__dirname, 'dist', f))
        mkdirSync(resolve(__dirname, 'dist', photoDir), { recursive: true })
        for (const f of readdirSync(resolve(__dirname, photoDir))) copyFileSync(resolve(__dirname, photoDir, f), resolve(__dirname, 'dist', photoDir, f))
      },
    },
  ],
})
