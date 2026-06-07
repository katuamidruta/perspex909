# Perspex909 Design System Notes

## Design Thesis

Perspex909 should look like an underground music magazine and release archive built from typography, metadata, flyers, and physical artifacts.

The design starts from a strict typographic minimalism reference, then shifts it into a darker editorial system: less warm portfolio, more transmission log.

## Palette

Base tokens adapted from the Leonid reference:

```css
:root {
  --color-paper: #fdfaf3;
  --color-ink: #121212;
  --color-night: #000000;
  --color-white: #ffffff;
  --color-cocoa: #472425;
  --color-signal: #e73737;
  --color-oxidized-gold: #c9892b;
  --color-haze-violet: #49345f;
  --color-metal: #b9bdc2;
}
```

Perspex usage:

- `--color-night`: dominant dark sections, release/product pages, footer
- `--color-paper`: editorial pages, article body, contrast sections
- `--color-ink`: main text on light background
- `--color-white`: text on dark background
- `--color-signal`: small accents, active state, issue labels, catalog markers
- `--color-cocoa`: optional bridge color from the reference, used sparingly
- `--color-oxidized-gold`: flyer linework and event accent
- `--color-haze-violet`: noisy atmospheric background tint
- `--color-metal`: USB/product artifact accent

Do not let the site become a one-note beige portfolio. The default Perspex impression should be black/white/signal, with paper used as an editorial contrast.

## Typography

Display:

- Use a grotesk display face or close fallback for huge Perspex wordmarks and section titles.
- Keep display type tight and architectural, but make responsive sizes safe on mobile.
- Avoid scaling text directly with viewport width; use clamp ranges with fixed min/max.

Body:

- Use system sans or a neutral grotesk.
- Keep body copy readable and compact.
- Metadata can be smaller, but never below practical readability for real users.

Suggested roles:

```css
--font-display: "NeueHaasDisplay", "Arial Narrow", Arial, sans-serif;
--font-body: "SFUIDisplay", ui-sans-serif, system-ui, sans-serif;

--text-meta: 12px;
--text-body: 15px;
--text-lead: 21px;
--text-heading: 27px;
--text-display: clamp(64px, 13vw, 188px);
```

## Layout

Use index-driven layouts:

- numbered rows
- release grids
- article feeds
- event/flyer archive
- product catalog as artifact index

Preferred structures:

- full-width bands
- thin dividers
- asymmetric metadata columns
- large type paired with small factual labels
- hover image previews for archive rows

Avoid:

- nested cards
- rounded card-heavy dashboards
- marketing hero cards
- decorative gradient backgrounds
- bokeh/orb decoration

## Homepage Direction

The first viewport should immediately signal Perspex:

- huge `PERSPEX909`
- short transmission line
- latest release/artifact/article/event visible without scrolling too far
- a hint of the next section on all viewport sizes

Example structure:

```txt
PERSPEX909
Independent electronic transmissions from Indonesia.

01 Latest Article
02 VA01 USB + Zine
03 Various Artists Vol. 01
04 Flyers / Events
```

## Page Types

### Magazine

Editorial index with article title, category, author, date, and optional image preview.

### Release

Release pages should feel like record sleeves plus metadata sheets:

- cover art
- title
- artist/VA
- release date
- track count
- catalog code
- listen links
- buy link
- notes/press text

### Shop

The shop is an artifact catalog, not a generic cart.

Current example product:

- PRSPX VA V.1 3.0 16GB
- VA01 USB + hard-covered zine / archive object
- 16GB embossed USB 3.0
- 36-track compilation
- physical document of the release
- CTA to Bandcamp

### Events

Flyer archive with date, venue, lineup, city, and image.

### About

Manifesto, not corporate about page.

## Components

### Archive Row

Use for articles, releases, products, events.

Fields:

- number
- type
- title
- date
- location or catalog
- link

Interaction:

- underline or invert on hover
- optional image preview
- no heavy button treatment

### CTA Link

Text-only or outlined.

Examples:

- Listen on Bandcamp
- Buy on Bandcamp
- View Release
- Open Flyer

### Product Artifact

Flat product block with image, metadata, edition notes, and external checkout link.

No fake cart until there is a real ecommerce flow.

## Motion

Motion should be restrained:

- page fade or wipe
- hover preview
- ticker-like metadata
- subtle video/logo loop
- no excessive scroll-jacking

The site should feel alive, but still fast.

## Imagery

Unlike the Leonid reference, Perspex needs real visual assets.

Use:

- cover art
- flyers
- zine scans
- USB/product photos
- video stills
- artist images when relevant

Treat images as archival evidence, not stock decoration.

## Asset Direction

From the supplied assets, Perspex imagery can be grouped into six visual modes:

### Event Flyer

Dark grain, ornamental orange/gold linework, compressed uppercase lineup, venue/date/ticket metadata, and noisy purple/black backgrounds.

Use this mode for event pages, homepage event highlights, and flyer archive previews.

### Club Poster

High-noise black-and-white poster design, heavy uppercase artist names, minimal venue branding, large date block.

Use this mode for external scene documentation and event archive contrast.

### Compilation Archive

Monochrome collage, scan-like photo fragments, low contrast black/green/gray, white footer band, PRSPX mark.

Use this mode for release archive pages, zine references, and editorial image grids.

### Tracklist Sheet

Clean paper surface, numbered rows, artist-title-duration structure.

Use this mode as a UI pattern: releases should have tracklist tables that feel like scanned inserts but remain readable.

### Product Artifact

Real flash photography of metallic USBs in hands, stone/ground texture, visible engraved PRSPX mark.

Use this mode for shop and product detail pages. Product pages should feel tactile and physical.

### Logo Object

Metallic PRSPX mark in a real outdoor setting, high contrast, dark environment, reflective surface.

Use this mode for hero moments, about page, and loading/transition identity.

## UI Patterns From Assets

- Event archive rows can borrow the flyer lineup structure: date, place, artists, ticket/status.
- Release pages can borrow the tracklist sheet: numbered rows with duration aligned right.
- Product pages can pair raw flash photos with strict metadata tables.
- Homepage can use a large PRSPX/PERSPEX wordmark with a small "transmission index" under it.
- Image grids should feel like zine/collage documentation, not masonry lifestyle cards.

## Implementation Notes

Initial build can be static Astro with local Markdown/data files.

Future CMS should preserve these content types:

- articles
- releases
- products
- events
- artists
- press

Keep content data structured from day one so Sanity or another CMS can be added later without redesigning the site.
