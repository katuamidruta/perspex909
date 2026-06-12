# Perspex909

Static site for [Perspex909](https://perspex909.com) — Indonesian electronic music label. Catalog, archive, and shop.

**Stack:** Astro v5 · TypeScript · Single CSS file · Cloudflare Workers (static assets)

---

## Dev

```bash
npm install
npm run dev        # localhost:4321
npm run build      # production build → dist/
npm run preview    # preview built output
```

## Deploy

```bash
npm run deploy     # astro build + wrangler deploy → Cloudflare Workers
npm run cf:preview # local Wrangler preview
```

Requires `npx wrangler login` on first run. Domain configured in Cloudflare dashboard.

---

## Structure

```
src/
  data/           # content: events.ts, releases.ts, products.ts, articles.ts
  pages/          # index, archive/[slug], releases/[slug], shop/[slug], about
  layouts/        # BaseLayout.astro — global shell + parallax/video JS
  components/     # ArchiveRow, GalleryMarquee, ReelPlayer, ProductGallery, …
  styles/
    global.css    # all styles in one file
public/
  archive/        # media assets (.webp, .mp4, .gif)
docs/             # design system, content model, roadmap
```

## Content

Edit `src/data/*.ts` to update catalog entries, events, and shop items. Images go in `public/archive/` as `.webp`. Hero video is `public/hero.mp4`, mobile fallback is `public/hero.gif`.

---

Built by [kucingdigital](https://kucingdigital.com).
