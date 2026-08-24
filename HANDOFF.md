# Perspex909 — Session Handoff

Astro v5 static site for the Perspex909 electronic-music label (Indonesia). No UI framework, no JS dependencies. Live on **Cloudflare Workers** (static assets, `wrangler.jsonc`). Repo `katuamidruta/perspex909`, branch `main`.

> Background lives in project memory (`MEMORY.md` + files), auto-loaded each session. This file is "where we left off".

## Status (end of session 6 — 2026-08-24)

- **The site is one page.** `archive/`, `releases/`, `shop/` and `about/` are folded into `src/pages/index.astro`; the build emits **1 page**, not 10.
- `npx astro build` passes. `npx astro check` reports no errors in `src/` (the 747 it prints are all from `mono/`, which is reference material and not part of the build).
- Dev server on port 4330; `astro preview` on 4331 was used for the production weight numbers.

## The page, in order

Heights measured at 1440×900. Total **38,953px**, 43 viewports (mobile 26,698px at 390×844). The user has twice said explicitly that a longer scroll is an acceptable price for pacing — do not trim runways to save length without asking.

| # | Section | Runway | Note |
|---|---|---|---|
| 1 | `split-frame` | 300svh | hero.mp4 splits into a five-column band |
| 2 | `deck` | 400svh | three statements, word-burn + chrome |
| 3 | `bio` `#label` | 300svh | pinned below the header, word-burn, chrome type on black |
| 4 | `ledger` | — | the label's own metadata grid + one line of prose (from `about/`) |
| — | `interlude` | 46svh | held breath before the archive |
| 5 | `stack` `#archive` | 400svh | the three event flyers deal into a pile |
| 6 | `dossier` | 500svh | **new** — the same three records unroll in place |
| 7 | `reels` | 400svh | every archive reel on one track, advanced by scroll |
| — | `interlude` | 46svh | empty and unlabelled on purpose |
| 8 | `split-frame` `#release` | 300svh | compilation.mp4, same mechanism — the two rhyme |
| 9 | `section--metal` | — | VA01 spec grid, release notes, credits, Bandcamp/SoundCloud |
| 10 | `ladder` | 400svh | **new** — 36 tracks pulled past a fixed head, one per ~100px |
| 11 | `chronicle` | 400svh | layered cross-dissolve under cycling lines |
| — | `split-frame` | 300svh | the tee's own photographs, opening the last chapter |
| 12 | `artifact` `#artifact` | 300svh | **new** — the tee, two photo columns, WhatsApp order |
| 13 | `index-block` | — | the menu again, built from the same `navItems` as the header |

Nav and the index rows are **anchors** now (`#label`, `#archive`, `#release`, `#artifact`). `html { scroll-padding-top: var(--header-h) }` lands every one of them exactly under the header — measured at 81px on all four.

## Architecture (unchanged)

```
<section class="split-frame runway--3" data-scrub>   ← N × 100svh runway
  <div class="stage"> ... </div>                      ← position:sticky, pinned
</section>
```

`BaseLayout.astro` runs one rAF loop writing **a single number `--p` (0→1)** onto every `[data-scrub]`. Every choreography in `src/styles/motion.css` is a pure CSS function of `--p`. To add a section: markup plus a CSS block reading `var(--p)`.

### The three new choreographies

- **`dossier`** — one archive record per slice of runway. The flyer box takes the poster's own 4:5 shape (measured: all three flyers are exactly 0.800) with `object-fit: contain`, so the artwork is never cropped at any window width — a cover-crop into whatever rectangle the grid left was cutting the bottom off the posters. The flyer is held on the left, the sheet writes itself out on the right: each row unrolls left-to-right on a `clip-path: inset(0 X 0 0)`, in order, like paper coming off a roll. Flyer and record drift against each other for the whole slot so the sheet never sits still. `.is-last` keeps `--dis: 0` so the section doesn't hand back an empty stage.
- **`ladder`** — 36 tracks pulled past a fixed head. The list travels under a window held at the centre of the pinned stage, roughly one track per 100px of scroll, and everything outside the window falls into blur, so the section reads at the speed of the record rather than the speed of the page. The counter is a registered `@property --tn { syntax: "<integer>" }` computed as `calc(var(--p) * (var(--n) - 1) + 1)` and written straight into `counter-reset` — the same rounding as the head row, so the number and the framed track can never disagree. **Verified in Chrome:** `--tn` reads 7 / 25 / 36 with the brightest row at track 7 / 25 / 36. Its `::after` carries an explicit colour, because an opacity of its own would break the parent's `background-clip` and paint nothing.
- **`reel strip`** — seven reels on one horizontal track, advanced by `--p`. One holds the centre at full size while its neighbours sit at 0.22 opacity and 0.84 scale, so the section is scrolled through rather than clicked through. Focus is resolved without `abs()`: two `clamp()` ramps, one falling off each side, and `min()` of the pair. Measured across the runway: the head lands on reel 2 → 4 → 6 → 7 as `--p` goes 0.11 → 0.52 → 0.93 → 1, and the track travels 0 → −1956px. Under reduced motion it wraps into a plain grid with all seven reachable.
- **`artifact`** — two columns of tee photographs travelling in opposite directions (`--p * -32%` / `--p * 32% - 32%`) behind an order sheet that fades up and keeps drifting. Measured: columns travel 0 → −845px across the runway.

### Split-frame, three times

The split is now the device that opens a chapter: the page (hero.mp4), the release (compilation.mp4), and the artifact (the tee's own product shot, a still rather than a clip). The archive opens with the pile instead, which is right — it *is* a pile of flyers. If a fourth ever gets added, ask whether it is opening a chapter or just repeating an effect.

## Palette

**There is no accent colour.** The signal red (`#e73737`) was removed everywhere — kickers, nav numerals, CTAs, the ladder head, the reel indices, the loader scanline, the price — because on this much black it read as loud rather than sharp. Emphasis is now carried by **light** instead of hue: a white fill for the primary action, dimmed white for rank, and metal for display type.

Three metals, each with one job:

- `--chrome` — the header logo only. Flat mirror, hard horizon at 50%.
- `--chrome-sculpt` — the deck statements only. Drops to `#757a81` through the middle, which is what makes a 112px letterform read as extruded.
- `--chrome-type` — the bio paragraph and every display heading on a dark ground (`.reels .section-title`, `.artifact-sheet .section-title`, `.artifact-price`, `.dossier-row--title h2`, `.spec-grid dd`). Same light, floor raised to `#b7bcc4`, because the sculpted gradient turns to mud below display size.

**Chrome needs glyph mass.** Nothing under about 28px wears it — mono metadata, kickers, tracklist rows and the paper sections stay plain, and that contrast is what keeps the metal meaning something. Chrome on the cream paper sections is invisible; do not try it.

Where a heading sits inside a scrubbed stage the light travels with `--p` (or the sheet's `--local`); elsewhere it holds a fixed horizon at 40%.

Archive prints are **bare images now** — the 3px `--chrome-bezel` rim came off both the pile and the dossier flyer at the user's request, and the token went with it.

## Rules learned the hard way — do not re-break these

1. **A choreography must never fully freeze.** Correct shape: let detail resolve and hold while a slow transform keeps running underneath.
2. **Amplitude is what reads as intent.** A ±9px parallax is invisible, not subtle.
3. **Never leave a token or rule that nothing draws.** This session removed 147 orphan CSS rules, five unused tokens (`--color-cocoa`, `--color-oxidized-gold`, `--color-haze-violet`, `--text-heading`, `--text-display`), the `[data-parallax]`/`[data-drift]` engine and its CSS, `[data-reveal]`, `.runway--2`, and a `display:none` credit block that was still downloading a 106KB PNG on every visit.
4. **Do not label a pause.** Both interludes stay empty. They are also the tool for pacing: the run into the archive read as a hard cut off the back of the ledger grid, and 46svh of nothing fixed it. A longer scroll is an acceptable price — the user said so explicitly.
5. **Prove a CSS deletion changed nothing.** Screenshot bytes are useless here — the grain animates and the video plays, so every frame differs. `browse/digest.mjs` dumps geometry plus paint-critical computed styles for all 603 elements at seven scroll positions; before/after the prune, **20 of 4221 element-states differed, every one of them an animation phase (loader scan position, grain drift, an in-flight transition) or a ±1px rounding**.

## Page weight — measured on the production build (`astro preview`, dist/)

| | requests | bytes |
|---|---|---|
| First paint, no scroll | 15 | **1.26MB** |
| Whole document, full scroll | 39 | **5.87MB** |

Was 14.5MB for the merged page before this pass, and the old multi-page build measured ~13MB.

What moved:

- **`compilation.mp4`: 5.68MB → 2.64MB.** Re-encoded to 960×542, crf 30, audio track dropped (the element is `muted`, so it was pure waste). Greyscale SSIM against the original is **0.951** — the clip renders `grayscale(1) contrast(1.2) brightness(0.78)` under a vignette and page grain. Original is in git history if it ever needs to come back.
- **It was being downloaded twice.** 5685KB + 5493KB in one page load: too big for Chrome's media cache, so the loop refetched it. At 2.6MB it is fetched once. That single fact is 8.6MB of the saving.
- Reel thumbnails are `loading="lazy"` (they were eager, seven of them, mid-document).
- The below-fold video's poster is attached by an observer via `data-poster`. A `poster` attribute is eager by definition, so a still for a clip 18,000px down was on the critical path. The observer runs for everyone, including reduced-motion and save-data readers who never get the video itself.

Still unreferenced in `public/` (~900KB, left in place deliberately): `campout2-1.webp`, `campout1-1..3.webp`, `prod1-8.webp`, `random1-{1,2,4,6,8,10}.webp`, `hero.gif`, `kucingdigital.png`.

## Mobile

Not a full pass, but no longer untested:

- **`--header-h` is measured, not guessed.** BaseLayout reads the real header height and writes it back to `:root` (ResizeObserver, with a resize listener fallback). Verified: 127px at 390/640/800, 81px at 1440, and `.dossier .stage`'s `top` follows exactly. The CSS value is now only the pre-script fallback.
- **Runways are shorter below 800px** (`--3/--4/--5` → 220/280/340svh). Every choreography is a function of `--p`, so a shorter runway just plays it faster — nothing needed retiming. Mobile went from 37 viewports of scrolling to **28.6** (24,166px at 390×844).
- `dossier` drops the flyer and goes single-column; `ladder` folds to a two-line row; `reels` goes 7 → 4 → 2 columns.

## Verification tooling — use it, do not guess

Playwright with real Chrome lives in the session scratchpad under `browse/`. Scripts: `one.mjs` (full-scroll shoot + section map + console errors), `probe1.mjs` (computed values at set offsets), `fixed.mjs` (shots at fixed offsets), `digest.mjs` (the layout digest described above), `weight2.mjs` (production weight, split into first-paint and full-scroll), `rm2.mjs` (reduced-motion + 390px, flags any frame that collapses to a flat colour), plus the older `shoot/diag/hover/grain/weight` scripts.

If the scratchpad is gone: `npm install playwright` anywhere and use `chromium.launch({ channel: "chrome" })`. **Use `waitUntil: "domcontentloaded"`, never `networkidle`.** Measure numbers — opacity, transform, `--p`, byte counts, SSIM — rather than only looking. Note that editing files while `astro dev` is running can push an HMR error overlay into an in-flight screenshot run; reload and re-shoot.

## Constraints

- **Never use the word "underground"** in copy. Use "club culture" or "raw sound".
- Bahasa Indonesia, ringkas, langsung fix. The user dislikes process theatre; show measured evidence and working results.
- This is a **portfolio / pitch piece** for the user. The bar is work they could not trivially do themselves.
- Commerce lives **off-site** on a subdomain (Shopify/Gumroad). This repo keeps the artifact's content and the WhatsApp order button, nothing more.

## Menu, not entry points

The closing block and the header are the same menu, both built from `navItems` in `src/data/site.ts`, so they cannot drift apart. **Off-site accounts (Bandcamp, SoundCloud, Instagram) live in the footer and only there** — the user's call, and the right one: a menu that points out of the document is not a menu. Row metadata is looked up by href in `index.astro`, so adding a nav item without metadata degrades to an empty cell rather than breaking.

The tee is **sold out**: `soldOut: true` in `src/data/products.ts` drives the kicker, the price slot and the menu row, and turns the WhatsApp CTA into "Ask about the next run". `priceLabel` stays in the data as the record of what it cost.

## Still open

- **A real mobile pass.** The numbers above are geometry, not judgement — nobody has read the page on a phone. 28.6 viewports is still long.
- `docs/design.md` still contradicts the build (it says "motion restrained", "no decorative gradients"). The user has said it can be rewritten.
- Optional: the second `split-frame` could run in reverse — five frames converging into one — so the pair reads as bookends rather than the same effect twice. One line: invert `--pi`.
- The reel strip labels repeat the event name five times for Portal. Honest for an index, but a per-reel label would read better.
- The heavy webps are only lightly compressed (`campout2-2.webp` is 569KB). A q74 re-encode pass measured SSIM 0.98+ for about 200KB total — judged not worth the binary churn, but it is there if weight matters again.
- A WebGL liquid-metal background was offered and not taken up. If revisited: behind the **deck only**, raw WebGL2 (no library, ~5KB), driven by `--p`, gated on reduced-motion and saveData, paused off-screen, plain-black fallback.

## Resume prompt

```
Lanjutin project perspex909 (working dir sama, Bahasa Indonesia, ringkas, langsung fix).
Baca HANDOFF.md di root repo dulu. Jangan pernah pakai kata "underground" di copy.

Situs udah one-page (satu index.astro, 13 section, anchor-based nav). Jangan
dipecah lagi jadi multi-page.

Yang WAJIB dijaga:
- Koreografi nggak boleh pernah benar-benar beku
- Jangan ninggalin token/rule yang nggak ada yang pakai
- Jangan kasih label di jeda antar section

Playwright ada di scratchpad browse/. Ukur angkanya, jangan cuma dilihat —
weight2.mjs buat berat halaman, digest.mjs buat buktiin perubahan CSS nggak
ngubah apa-apa yang kegambar, rm2.mjs buat reduced-motion + mobile.
```
