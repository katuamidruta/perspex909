# Perspex909 Project Memory

## Current Direction

Perspex909 is being remade from the current WordPress site into a lighter static-first platform.

Concept:

Perspex909 is an underground electronic magazine, release archive, artifact shop, and event/flyer index. It should be inspired by editorial music platforms like Mixmag, but visually more raw, typographic, archival, and scene-specific.

## Current Stack Preference

- Astro for the frontend
- GitHub as source of truth
- Cloudflare for deployment
- Static content first
- CMS later, likely Sanity if non-technical editors need a dashboard
- Bandcamp remains the checkout destination for releases/products

## Current MVP

Build static first:

- homepage
- about/manifesto
- releases
- shop
- product example: VA01 USB + zine

This MVP is now scaffolded in Astro and builds successfully.

Current implemented routes:

- `/`
- `/about/`
- `/releases/`
- `/releases/various-artists-vol-01/`
- `/shop/`
- `/shop/prspx-va-v1-3-0-16gb/`

Current technical note:

- use `npm run check` and `npm run build` as separate commands
- do not combine them into one npm script with `&&` on this machine, because it triggered a Windows/Node 24 assertion after successful completion

## Current Shop Page Findings

The live shop page is WordPress/Elementor and currently contains one product:

- `PRSPX VA V.1 3.0 16GB`
- long description around post-apocalypse, numbness, survival, resilience, and rebuilding from chaos
- button text: `PURCHASE ON BANDCAMP`
- button URL currently appears to be `#`
- carousel with three product images:
  - `https://perspex909.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-09-at-13.05.31-scaled.jpeg`
  - `https://perspex909.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-09-at-13.05.31-1-scaled.jpeg`
  - `https://perspex909.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-09-at-13.06.38-scaled.jpeg`

This product should become the static MVP shop example and should be reframed as a physical archive object, not generic merchandise.

## Design Reference

Reference site: https://leonidkostetskyi.com/

Adapt the reference into Perspex:

- keep monumental typography
- keep numbered index layout
- keep sparse navigation
- make it darker, sharper, more underground
- add release imagery, flyers, artifacts, and metadata

## Known Product Example

VA01 USB + hard-covered zine:

- 36-track compilation
- 16GB embossed USB 3.0
- hard-covered printed zine
- physical document of Various Artists Vol. 01
- checkout should link to Bandcamp

## Important Links

- Current site: https://perspex909.com/
- About: https://perspex909.com/home/about/
- Shop: https://perspex909.com/shop/
- Bandcamp: https://perspex.bandcamp.com/
- Instagram: https://www.instagram.com/prspx.909/
- Logo/video asset: https://perspex909.com/wp-content/uploads/2024/12/WhatsApp-Video-2024-12-09-at-13.03.19.mp4
