# Perspex909 Roadmap

## Phase 0: Foundation Docs

Status: current phase.

Tasks:

- define product direction
- define static-first content model
- define MVP scope and non-goals
- preserve brand and design constraints from the handoff

Deliverables:

- `docs/product.md`
- `docs/content-model.md`
- `docs/roadmap.md`

## Phase 1: Static Astro MVP

Goal:

Ship the first static Perspex909 prototype with the core pages and VA01 artifact flow.

Pages:

- `/`
- `/about/`
- `/releases/`
- `/releases/various-artists-vol-01/`
- `/shop/`
- `/shop/prspx-va-v1-3-0-16gb/`

Implementation:

- scaffold Astro app in the current repository
- add global CSS tokens for Perspex palette, typography, grids, archive rows, and tracklist tables
- add shared layout and navigation
- add local data files for releases, products, articles, and events
- build homepage as a transmission index with monumental `PERSPEX909` type
- build release index and detail pages
- build shop index and artifact detail pages
- link checkout/listen actions to Bandcamp

Acceptance criteria:

- `npm run build` completes
- pages render without a CMS or runtime server
- VA01 is reachable from homepage, release index, and shop
- product imagery is visible and treated as artifact evidence
- the visual system is dark, typographic, archival, and not a generic ecommerce template

## Phase 2: Archive Expansion

Goal:

Add the wider Perspex editorial and scene archive.

Pages:

- `/magazine/`
- `/magazine/{slug}/`
- `/events/`
- `/events/{slug}/`
- optional `/artists/`

Tasks:

- add article content collection or equivalent structured data
- add event/flyer archive pages
- add artist references and relationship mapping
- add hover image previews or compact preview panels for archive rows
- add richer release tracklists and credits
- mirror key remote WordPress assets into the project

## Phase 3: Editorial Workflow

Goal:

Make publishing manageable for non-technical collaborators if needed.

Options:

- continue GitHub-based editing if the team is comfortable with Markdown/data files
- add Sanity if a dashboard becomes necessary

Tasks:

- map local data fields to CMS schemas
- preserve existing URL structure
- define image metadata rules
- add draft/preview workflow
- document publishing steps

## Phase 4: Production Hardening

Goal:

Prepare for public replacement of the WordPress/Elementor site.

Tasks:

- configure Cloudflare deployment
- add redirects from old WordPress paths where needed
- add metadata, Open Graph images, sitemap, and robots rules
- audit performance and image loading
- add accessibility checks for contrast, focus, alt text, and keyboard navigation
- verify Bandcamp links
- add analytics only if useful and privacy-appropriate

## Backlog

- flyer archive filters by city, venue, year, and status
- release filters by format, catalog code, and year
- artist pages generated from relationships
- press kit page for downloads and external coverage
- RSS feed for magazine/release updates
- search across archive entries
- video/logo loop integration
- image lightbox for zine scans and product details
- richer Bandcamp embeds if performance stays acceptable
