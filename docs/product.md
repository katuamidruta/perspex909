# Perspex909 Product Direction

## Product Statement

Perspex909 is a static-first archive platform for underground electronic music, visual culture, physical releases, and scene documentation from Indonesia and the wider region.

It is not just a label site or shop. It is a transmission desk: magazine, release archive, artifact catalog, event/flyer index, and source of context for Perspex activity.

## Audience

Primary audience:

- listeners following underground electronic music
- artists, DJs, promoters, writers, and visual collaborators
- collectors looking for physical release objects
- press, bookers, and labels needing clean references
- future editors maintaining the archive

Secondary audience:

- people discovering Perspex from Instagram, Bandcamp, or event flyers
- regional and international scene researchers
- fans who want a stronger archive than social feeds can provide

## Core User Jobs

Visitors should be able to:

- understand what Perspex909 is within the first screen
- find the latest release, artifact, article, or event entry
- browse releases by title, catalog code, date, and format
- read a release page with notes, tracklist, metadata, and listen/buy links
- browse shop artifacts without a fake ecommerce cart
- reach Bandcamp for checkout
- read a concise manifesto/about page
- later, browse magazine posts, events, flyers, artists, and press references

Editors should be able to:

- add new releases, products, articles, and events as structured static content
- keep metadata consistent across page types
- preserve assets as archive evidence: flyers, product photos, scans, covers, zine pages
- migrate to a CMS later without changing the public content model

## MVP Scope

Build the first static platform with:

- homepage
- about/manifesto page
- release index
- release detail for `Various Artists Vol. 01`
- shop/artifact index
- product detail for `PRSPX VA V.1 3.0 16GB`
- shared layout, navigation, typography, color tokens, and archive row patterns
- local data files for releases, products, articles, and events

The first release and product should focus on VA01:

- 36-track compilation
- 16GB embossed USB 3.0
- hard-covered printed zine
- physical document of Various Artists Vol. 01
- Bandcamp as the purchase/listen destination

## Non-Goals

Do not build these in the MVP:

- CMS dashboard
- shopping cart
- direct payment processing
- member accounts
- complex filtering/search
- heavy animation system
- generic marketing landing page
- decorative portfolio-style case studies

## Product Principles

Static first:

The site should be fast, durable, and deployable from GitHub to Cloudflare with minimal moving parts.

Archive over feed:

Social platforms can announce. Perspex909 should preserve.

Metadata is design:

Catalog numbers, dates, formats, track counts, lineups, locations, and links should visibly shape the interface.

Artifacts are not merch:

Physical releases should be treated as documented objects with context, edition notes, images, and external checkout links.

Editorial without polish-washing:

The platform can carry writing and interviews, but it should keep the raw Perspex tone: direct, tense, visual, and scene-specific.

## Success Criteria

The MVP is successful when:

- the first screen immediately reads as Perspex909
- release and product pages feel archival and tactile
- VA01 can be understood and reached from homepage, releases, and shop
- the design clearly uses monumental type and numbered rows without becoming a beige portfolio
- content is structured well enough for a later CMS migration
- the app can build as a static Astro site
