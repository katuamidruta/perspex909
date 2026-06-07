# Perspex909 Content Model

## Modeling Approach

Start with local structured data and static pages. Keep fields close to the future CMS shape so the site can later move to Sanity or another editor-friendly system without changing the public URL structure.

Prefer explicit metadata over loose prose. Perspex content should feel like an archive sheet: title, code, date, format, location, collaborators, links, assets, and notes.

## Shared Fields

Use these fields where they apply:

- `id`: stable internal key
- `slug`: URL slug
- `title`: public title
- `eyebrow`: short type label or context line
- `summary`: one or two sentence description
- `body`: longer editorial or release copy
- `date`: ISO date where possible
- `status`: `published`, `draft`, or `archived`
- `images`: ordered asset list
- `links`: external URLs such as Bandcamp, Instagram, SoundCloud, press, tickets
- `tags`: controlled descriptive tags
- `related`: references to releases, products, articles, events, or artists

## Article

Purpose:

Magazine entries, interviews, essays, announcements, field notes, scene reports, and press-style posts.

Fields:

- `id`
- `slug`
- `title`
- `dek`
- `category`: `interview`, `essay`, `news`, `field-note`, `premiere`, `review`
- `author`
- `date`
- `heroImage`
- `summary`
- `body`
- `featuredArtists`
- `relatedReleases`
- `relatedEvents`
- `links`
- `tags`

MVP status:

Seed with placeholder/latest-entry data for homepage context. Full magazine pages can follow after release and shop pages are stable.

## Release

Purpose:

Catalog page for Perspex releases and compilations.

Fields:

- `id`
- `slug`
- `title`
- `artist`
- `catalogCode`
- `releaseDate`
- `format`: `digital`, `usb`, `zine`, `cassette`, `vinyl`, `mixed`
- `trackCount`
- `coverImage`
- `gallery`
- `summary`
- `notes`
- `tracklist`
- `credits`
- `links`
- `relatedProducts`
- `tags`

Track fields:

- `number`
- `artist`
- `title`
- `duration`

MVP release:

- `Various Artists Vol. 01`
- catalog code `VA01`
- 36 tracks
- linked product `PRSPX VA V.1 3.0 16GB`
- Bandcamp listen/buy link

## Product / Artifact

Purpose:

Physical release objects, zines, USBs, edition bundles, and future archive goods.

Fields:

- `id`
- `slug`
- `title`
- `artifactType`: `usb`, `zine`, `bundle`, `print`, `apparel`, `other`
- `catalogCode`
- `priceLabel`
- `availability`: `available`, `sold-out`, `archived`, `coming-soon`
- `summary`
- `description`
- `materials`
- `editionNotes`
- `images`
- `specs`
- `relatedRelease`
- `checkoutUrl`
- `links`
- `tags`

Spec fields:

- `label`
- `value`

MVP artifact:

- title `PRSPX VA V.1 3.0 16GB`
- 16GB embossed USB 3.0
- hard-covered printed zine
- 36-track VA01 compilation archive
- checkout on Bandcamp

## Event / Flyer

Purpose:

Index of Perspex events, flyers, external showcases, and scene documentation.

Fields:

- `id`
- `slug`
- `title`
- `date`
- `city`
- `venue`
- `flyerImage`
- `lineup`
- `summary`
- `ticketStatus`
- `links`
- `relatedArtists`
- `relatedArticles`
- `tags`

Lineup fields:

- `name`
- `role`
- `origin`
- `setTime`

MVP status:

Use event data on the homepage as an archive preview. Dedicated event pages can be added after MVP.

## Artist

Purpose:

People and projects connected to Perspex releases, articles, and events.

Fields:

- `id`
- `slug`
- `name`
- `location`
- `bio`
- `image`
- `links`
- `relatedReleases`
- `relatedArticles`
- `relatedEvents`
- `tags`

MVP status:

Do not build full artist pages yet. Keep names structured in releases and events so artist pages can be generated later.

## Press

Purpose:

External coverage, press kits, download references, and publication archive.

Fields:

- `id`
- `title`
- `date`
- `publication`
- `url`
- `summary`
- `relatedRelease`
- `relatedArtist`
- `asset`
- `tags`

MVP status:

Out of scope for first scaffold, but reserved in the model.

## URL Structure

MVP:

- `/`
- `/about/`
- `/releases/`
- `/releases/{slug}/`
- `/shop/`
- `/shop/{slug}/`

Later:

- `/magazine/`
- `/magazine/{slug}/`
- `/events/`
- `/events/{slug}/`
- `/artists/`
- `/artists/{slug}/`
- `/press/`

## Asset Rules

Images should be treated as evidence:

- product photos for artifacts
- cover art and scans for releases
- flyers for events
- tracklist sheets for release detail patterns
- logo/video stills for identity moments

Keep asset metadata when possible:

- source
- alt text
- caption
- credit
- original URL

Remote WordPress assets can be referenced during the MVP, but should eventually be mirrored into the repository or a managed asset store.
