# Perspex909 Handoff

## Session State

This project has moved past concept-only mode.

Current state:

- `docs/memory.md`
- `docs/brand.md`
- `docs/design.md`
- `docs/product.md`
- `docs/content-model.md`
- `docs/roadmap.md`
- `docs/handoff.md`
- Astro app scaffolded in the current folder
- `node_modules/` installed
- `dist/` generated successfully

Current Astro scripts:

- `npm run dev`
- `npm run check`
- `npm run build`

Important note:

- `npm run build` must stay as `astro build`
- `npm run check` must stay separate as `astro check`
- chaining `astro check && astro build` inside one npm script caused a Windows/Node 24 assertion after a successful build

## What Perspex909 Is Becoming

Perspex909 is being remade from its current WordPress/Elementor site into a static-first editorial and release platform.

The product concept:

- underground electronic magazine
- release archive
- artifact shop
- event/flyer index
- artist/scene documentation

It is Mixmag-ish in editorial scope, but visually more raw, typographic, archival, and Perspex-specific.

## Stack Direction

Current preference:

- Astro for frontend
- static-first content
- GitHub as source of truth
- Cloudflare for deploy
- Bandcamp for checkout
- CMS later if needed, likely Sanity for non-technical editors

Do not start with CMS unless the user explicitly asks. Build the static MVP first.

## Design Direction

Main reference:

- https://leonidkostetskyi.com/

Take from reference:

- monumental typography
- numbered index layout
- sparse navigation
- flat surfaces
- strict page rhythm

Adapt into Perspex:

- darker
- sharper
- more underground
- more release/archive oriented
- use real assets: flyers, product photos, tracklists, zine scans, logo object

Perspex visual DNA:

- distressed flyers
- photocopy grain
- black/white/signal red
- orange/gold flyer linework
- purple haze/noise
- metallic USB product photography
- scanned collage grids
- strict tracklist tables
- brutal uppercase lineup typography

## Current Live Site Findings

The current shop page is at:

- https://perspex909.com/shop/

It is WordPress/Elementor.

Current product:

- `PRSPX VA V.1 3.0 16GB`
- CTA text: `PURCHASE ON BANDCAMP`
- current CTA href appears to be `#`
- copy theme: post-apocalypse, numbness, survival, resilience, rebuilding from chaos

Current product image URLs:

- `https://perspex909.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-09-at-13.05.31-scaled.jpeg`
- `https://perspex909.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-09-at-13.05.31-1-scaled.jpeg`
- `https://perspex909.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-09-at-13.06.38-scaled.jpeg`

## MVP Scope

Build static first:

- `/` homepage
- `/about/` manifesto
- `/releases/` release index
- `/releases/various-artists-vol-01/` release detail
- `/shop/` artifact catalog
- `/shop/prspx-va-v1-3-0-16gb/` product detail

Optional after MVP:

- `/magazine/`
- `/events/`
- `/artists/`
- `/press/`

## What Was Implemented

Documentation added/refined:

- `docs/product.md`
- `docs/content-model.md`
- `docs/roadmap.md`

Astro scaffold created:

- `package.json`
- `astro.config.mjs`
- `tsconfig.json`
- `public/favicon.svg`
- `src/layouts/BaseLayout.astro`
- `src/styles/global.css`
- `src/components/ArchiveRow.astro`
- `src/components/MetaTable.astro`
- `src/components/ProductGallery.astro`
- `src/components/SiteHeader.astro`
- `src/components/TracklistTable.astro`
- `src/data/site.ts`
- `src/data/articles.ts`
- `src/data/events.ts`
- `src/data/releases.ts`
- `src/data/products.ts`
- `src/pages/index.astro`
- `src/pages/about/index.astro`
- `src/pages/releases/index.astro`
- `src/pages/releases/[slug].astro`
- `src/pages/shop/index.astro`
- `src/pages/shop/[slug].astro`
- `.gitignore`

## Current Visual / Content State

The MVP already reflects the intended direction in broad strokes:

- monumental `PERSPEX909` homepage hero
- numbered archive-row navigation language
- dark editorial visual system with paper contrast sections
- VA01 release detail page
- VA01 USB artifact detail page
- external Bandcamp CTA flow
- remote WordPress images used as temporary archive evidence

Current content quality caveats:

- release tracklist titles are placeholder data, not final imported metadata
- article and event data are still seed content used mainly for homepage structure
- product and release pages rely on remote image URLs from WordPress
- there is no magazine index or events archive route yet

## Verification Status

Verified in the current session:

- `npm install` completed
- `npm run check` passed
- `npm run build` passed
- static output generated in `dist/`

At the time of handoff, the local dev server may also be running at:

- `http://127.0.0.1:4321/`

If it is not running, start it with:

- `npm run dev`

## Next Best Steps

1. Refine homepage pacing and art direction so it feels less scaffolded and more distinctly Perspex.
2. Replace placeholder release tracklist data with real VA01 metadata.
3. Add a real `/events/` archive using flyer-first layouts and lineup metadata.
4. Add a real `/magazine/` index with article cards/rows sourced from structured content.
5. Mirror key remote WordPress images into the local project or a stable asset location.
6. Improve typography and spacing details after visual review in-browser.
7. Prepare Cloudflare/GitHub deployment once the content direction is stable enough.

## Resume Prompt

Paste this into a new Codex session:

```txt
We are continuing the Perspex909 remake in `D:\Data\Code\catherium\perspex909`.

Read these files first:
- `docs/memory.md`
- `docs/brand.md`
- `docs/design.md`
- `docs/product.md`
- `docs/content-model.md`
- `docs/roadmap.md`
- `docs/handoff.md`

Context:
Perspex909 is being remade from a WordPress/Elementor site into a static-first Astro platform. It should become an underground electronic magazine + release archive + artifact shop + event/flyer index. The direction is Mixmag-ish in scope but visually raw, typographic, archival, and specific to Perspex.

Design:
Use the Leonid Kostetskyi reference for monumental typography and numbered index layouts, but adapt it into Perspex: darker, sharper, more underground, with distressed flyers, photocopy grain, metallic USB artifact photos, collage scans, strict tracklist tables, and brutal uppercase lineup typography.

Current stack direction:
- Astro
- GitHub
- Cloudflare
- static content first
- Bandcamp checkout
- CMS later, likely Sanity if needed

Current implemented state:
- Astro app already scaffolded
- `npm run check` passes
- `npm run build` passes
- current routes:
  - `/`
  - `/about/`
  - `/releases/`
  - `/releases/various-artists-vol-01/`
  - `/shop/`
  - `/shop/prspx-va-v1-3-0-16gb/`
- structured local data lives in `src/data/`
- shared layout/components/styles already exist

Important implementation note:
- keep `npm run check` and `npm run build` separate
- do not combine them into a single npm script with `&&`, because that caused a Windows/Node 24 assertion after successful completion

Current gaps to improve:
- homepage still needs stronger Perspex-specific art direction and tighter pacing
- release tracklist uses placeholder titles and should be replaced with real VA01 metadata
- article/event content is still seed data
- remote WordPress assets should eventually be mirrored locally
- `/magazine/` and `/events/` are not built yet

Next:
Continue improving the Astro MVP rather than re-scaffolding it.
Start by reviewing the current routes and data files, then implement the most valuable next step. Prefer one of:
- refine homepage art direction and layout
- add `/events/` archive and event detail structure
- add `/magazine/` index
- replace placeholder VA01 tracklist data with real content
```
