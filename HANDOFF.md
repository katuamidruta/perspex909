# Perspex909 — Session Handoff

Astro v5 static site for the Perspex909 electronic-music label (Indonesia). No UI framework, no JS dependencies. Live on **Cloudflare Workers** (static assets, `wrangler.jsonc`). Repo `katuamidruta/perspex909`, branch `main`.

> Background lives in project memory (`MEMORY.md` + files), auto-loaded each session. This file is "where we left off".

## Status (end of session 9 — 2026-08-27)

- **The site is one page.** `archive/`, `releases/`, `shop/` and `about/` are folded into `src/pages/index.astro`; the build emits **1 page**, not 10.
- `npx astro build` passes. `npx astro check` reports no errors in `src/` (the 747 it prints are all from `mono/`, which is reference material and not part of the build).
- Dev server on port 4330; `astro preview` on 4331 was used for the production weight numbers.
- **All committed, working tree clean.** Session 6 shipped 8 commits from `f1cb942`; session 7 added 2 more (`6cf4393` the mobile defect pass, `a284a0d` caching + the phone-sized encode); session 8 added `094c44c`, the archive poster coming back on a phone. Session 9 (same day): `2867a5a`+`c5ad957` — the pile's images are a literal `stackCards` array in `index.astro` now, seeded with `random1-{2,4,8}` as placeholders **the user intends to swap by hand**; `f6864d2` — six reels, no captions.

## The page, in order

Heights measured at 1440×900. Total **42,641px**, 47.4 viewports (mobile 30,063px at 390×844, 35.6 viewports). The user has twice said explicitly that a longer scroll is an acceptable price for pacing — do not trim runways to save length without asking.

| # | Section | Runway | Note |
|---|---|---|---|
| 1 | `split-frame` | 300svh | hero.mp4 splits into a five-column band |
| 2 | `deck` | 400svh | three statements, word-burn + chrome |
| 3 | `bio` `#label` | 300svh | pinned below the header, word-burn, chrome type on black |
| 4 | `ledger` | — | the label's own metadata grid + one line of prose (from `about/`) |
| — | `interlude` | 46svh | held breath before the archive |
| 5 | `stack` `#archive` | 400svh | the three event flyers deal into a pile |
| 6 | `dossier` | 500svh | the same three records unroll in place (440svh on a phone — two beats each) |
| 7 | `reels` | 400svh | six reels on one track, advanced by scroll — ids are a literal list in index.astro, no captions |
| — | `interlude` | 46svh | empty and unlabelled on purpose |
| 8 | `split-frame` `#release` | 300svh | compilation.mp4, same mechanism — the two rhyme |
| 9 | `section--metal` | — | VA01 spec grid, release notes, credits, Bandcamp/SoundCloud |
| 10 | `gallery` | 400svh | six VA01 product photographs on the reel strip's mechanism — no heading, no words |
| 11 | `ladder` | 400svh | 36 tracks pulled past a fixed head, one per ~100px |
| 12 | `chronicle` | 400svh | layered cross-dissolve under cycling lines |
| — | `split-frame` | 300svh | the tee's own photographs, opening the last chapter |
| 13 | `artifact` `#artifact` | 300svh | the tee, two photo columns, WhatsApp order |
| 14 | `index-block` | — | the menu again, built from the same `navItems` as the header |

Nav and the index rows are **anchors** now (`#label`, `#archive`, `#release`, `#artifact`). `html { scroll-padding-top: var(--header-h) }` lands every one of them exactly under the header — measured at 81px on all four.

## Architecture (unchanged)

```
<section class="split-frame runway--3" data-scrub>   ← N × 100svh runway
  <div class="stage"> ... </div>                      ← position:sticky, pinned
</section>
```

`BaseLayout.astro` runs one rAF loop writing **a single number `--p` (0→1)** onto every `[data-scrub]`. Every choreography in `src/styles/motion.css` is a pure CSS function of `--p`. To add a section: markup plus a CSS block reading `var(--p)`.

### The new choreographies

- **`dossier`** — one archive record per slice of runway. The flyer box takes the poster's own 4:5 shape (measured: all three flyers are exactly 0.800) with `object-fit: contain`, so the artwork is never cropped at any window width — a cover-crop into whatever rectangle the grid left was cutting the bottom off the posters. The flyer is held on the left, the sheet writes itself out on the right: each row unrolls left-to-right on a `clip-path: inset(0 X 0 0)`, in order, like paper coming off a roll. Flyer and record drift against each other for the whole slot so the sheet never sits still. `.is-last` keeps `--dis: 0` so the section doesn't hand back an empty stage. **On a phone the same record plays two beats instead of one** — see Mobile below.
- **`ladder`** — 36 tracks pulled past a fixed head. The list travels under a window held at the centre of the pinned stage, roughly one track per 100px of scroll, and everything outside the window falls into blur, so the section reads at the speed of the record rather than the speed of the page. The counter is a registered `@property --tn { syntax: "<integer>" }` computed as `calc(var(--p) * (var(--n) - 1) + 1)` and written straight into `counter-reset` — the same rounding as the head row, so the number and the framed track can never disagree. **Verified in Chrome:** `--tn` reads 7 / 25 / 36 with the brightest row at track 7 / 25 / 36. Its `::after` carries an explicit colour, because an opacity of its own would break the parent's `background-clip` and paint nothing.
- **`reel strip`** — six reels on one horizontal track, advanced by `--p`. One holds the centre at full size while its neighbours sit at 0.22 opacity and 0.84 scale, so the section is scrolled through rather than clicked through. Focus is resolved without `abs()`: two `clamp()` ramps, one falling off each side, and `min()` of the pair. Measured across the runway with six: track travels 0 → −1815px, focus hands over one at a time. Under reduced motion it wraps into a plain grid with all six reachable. **The tiles carry no captions** — session 9, the user's call: thumbnail, scrim, play button, nothing else; the play button keeps an invisible `aria-label`. The ids are a **literal array in `index.astro`** (`reels`), in strip order, next to `stackCards` — `events.ts` no longer holds videos at all.
- **`gallery`** — the record as an object: `galleryprod1-{1..6}.webp` (all exactly 4:5, 844KB total) on the reel strip's exact mechanism — same handover ramps, same dimmed wings — but photographs, no heading, no labels. The files are a literal list in `index.astro` (`galleryProd`). Sits between the release note and the ladder. Reduced motion wraps it into the same grid the reels use.
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

## Caching and the mobile video budget

- **`public/_headers` now ships.** Without it a repeat visit paid full price — measured 39 requests / 5.87MB on the *second* load, zero 304s. Hashed `_astro/*` and `fonts/*` get the immutable year; media gets 30 days, deliberately not a year, because those filenames are hand-written and replacing a flyer under the same name should not be a year-long lie. **Unverified in production** — the sandbox cannot reach `perspex909.com` (DNS is intercepted). After the next deploy, confirm with `curl -I https://perspex909.com/archive/compilation.mp4` and look for the `cache-control`.
- **A phone gets a narrower encode of the release clip.** It was pulling the 960px master to paint it 390px wide, and 187px wide once the split narrows — waste, not a trade-off. `compilation-720.mp4` (720×406, 1.31MB, SSIM 0.923 against the master) is picked by the existing lazy-attach via `data-src-narrow`, gated on `(max-width: 800px)`. **Mobile full-scroll: 5.87MB → 4.53MB**, with no content dropped. Desktop is unchanged.
- Dropping video on mobile altogether was offered and *not* taken — the waste was the resolution, not the video.

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

**Session 8: the archive poster is back, as its own beat.** Below 900px `.dossier-flyer` was `display: none`, and on a phone the record simply had no poster — read as broken, not as a decision. There is no column to give it: at 390 the record runs 523–535px and a real phone leaves about 125px spare, which is not a 4:5 poster at any size worth showing. So it is paid for in **runway**, which this page has plenty of.

- Each record's slice now **opens on its poster alone**, edge to edge — the flyer goes `position: absolute; inset: 0 calc(var(--page-pad) * -1)` inside the sheet, so it bleeds out of the stage padding and the whole 390px width is poster (390×487 painted, `object-fit: contain`, never cropped).
- The poster then **recedes to 0.18 opacity and 0.95 scale and becomes the ground** the record is written on. It never leaves the screen; it stops competing for it. This is the `.artifact` move, applied to a section that needed it.
- **The handover finishes before the first row writes.** First attempt overlapped them and the title was unreadable over a full-brightness flyer. `--recede` now runs `--local` 0.28→0.44 and the rows start at 0.44. Measured at 390: flyer opacity is 1 → 0.64 → 0.18 while rows are 0/9, 0/9, 1/9.
- Rows are on a **named clock** now. `.dossier-sheet` carries `--rc: var(--local)` and `.dossier-row` reads `var(--rc)`; the phone overrides `--rc` alone to delay them. Desktop timing is untouched by construction.
- **`.runway--5` goes 340 → 440svh below 800px.** It is the dossier and only the dossier. Two beats per record where the desktop plays one, so the slot needs the time: 26,698 → 27,508px at 390×844, **31.6 → 32.6 viewports**. Nothing was cut — one viewport was added for a poster that was missing.
- Nothing freezes: both the flyer's translate and the record's run on `--local` for the whole slot, so the poster keeps drifting under the sheet after it has dimmed (measured 19px of travel across the hold).
- **Reduced motion at phone width printed no poster either.** It does now — `@media (prefers-reduced-motion: reduce) and (max-width: 900px)` puts the flyer back in flow above its record at `min(62svh, 110vw)`.

Measured after: **mobile production weight unchanged, 39 requests / 4,529KB** — at the time the pile drew the same three URLs, so the poster cost nothing. (Session 9 split the pile onto its own images; mobile is 40 requests / 4,551KB with the placeholders, and moves with whatever the user swaps in.) Desktop proved unchanged by layout digest: **9 of 4,249 element-states differ**, every one an animation phase (loader scanline, grain drift, one in-flight transition). No console errors and no x-overflow at 390 / 320 / 820 / 1440; no flat frames on a full mobile scroll or under reduced motion.

Session 7 audited it properly and it turned up six real defects, not polish items. All fixed and measured:

- **The scrub engine was measuring against the wrong ruler.** Runways are authored in `svh` (fixed to the small viewport); the JS divided by `window.innerHeight` (live). Those agree on a desktop and disagree on a phone the instant the URL bar retracts — `--p` jumped ~4%, snapping every choreography at once, and reached 1 while the stage was still pinned, which is the frozen hold rule 1 forbids. Each runway now measures against **its own stage**, the thing that actually unpins. Verified by forcing a 30% stage/window mismatch: `--p` lands on exactly 1.0 at the unpin point at both stage heights (`browse/scrubfix.mjs`).
- **Two source-order bugs in the header.** A second `@media (max-width: 800px)` block in `global.css` overrode the first, making `.site-mark`'s `grid-column` a no-op and stacking the header into three rows; and the mobile `40px` mark sat *above* the base `56px` rule at equal specificity, so it never applied. Header on a phone: **131px → 82px**, returned to each of the five sections that pin below it. One nav row from 344px up; below that it wraps rather than overflowing.
- **Off-centre reels were invisible but tappable** — a tap on an apparently empty tile started a video. Only the reel under the head answers now, and one that scrolls out from under the head gives its iframe back instead of playing on off-screen inside a clipped stage. `--focus` is registered with `@property` so the handler reads a number, not the `calc()` expression as a string.
- **The reel tile was 71svh tall in a stage with ~62svh to give it**, so the reel's own label was clipped off the bottom. Sized from its height budget now; fits at 390 and 1440 alike.
- **Tap targets.** Nav links were a bare 12px line box — a ~15px target, the smallest on the site. Now 37px. CTAs 42 → 44px.
- **The menu's counter was frozen on touch.** Scroll position cannot stand in for the cursor there: the menu is the last block on the page, so its rows can never reach the middle of the screen (measured — the document ends 125px below the last row). The touch itself is the input instead, via `pointerdown`, verified across all four rows.

Earlier groundwork that still holds:

- **`--header-h` is measured, not guessed.** BaseLayout reads the real header height and writes it back to `:root` (ResizeObserver, with a resize listener fallback). Verified: 127px at 390/640/800, 81px at 1440, and `.dossier .stage`'s `top` follows exactly. The CSS value is now only the pre-script fallback.
- **Runways are shorter below 800px** (`--3/--4/--5` → 220/280/340svh). Every choreography is a function of `--p`, so a shorter runway just plays it faster — nothing needed retiming. Mobile went from 37 viewports of scrolling to **31.6** (26,698px at 390×844) — shorter than it would otherwise be, on a page that has grown two runways since.
- `dossier` goes single-column (the flyer is now the ground behind it, above); `ladder` folds to a two-line row; `reels` goes 7 → 4 → 2 columns.

## Verification tooling — use it, do not guess

Playwright with real Chrome lives in the session scratchpad under `browse/`. Scripts: `one.mjs` (full-scroll shoot + section map + console errors), `probe1.mjs` (computed values at set offsets), `fixed.mjs` (shots at fixed offsets), `digest.mjs` (the layout digest described above), `weight2.mjs` (production weight, split into first-paint and full-scroll), `rm2.mjs` (reduced-motion + 390px, flags any frame that collapses to a flat colour), `scrubfix.mjs` (forces a stage/window height mismatch to prove `--p` tracks the stage), plus the older `shoot/diag/hover/grain/weight` scripts.

For anything touch-related, emulate a real device rather than just a narrow window — `browser.newContext({ viewport, hasTouch: true, isMobile: true })`. That is what makes `(hover: none)` match and `page.touchscreen.tap()` behave; a plain 390px desktop context still reports `hover: hover` and will hide exactly the bugs you are looking for.

If the scratchpad is gone: `npm install playwright` anywhere and use `chromium.launch({ channel: "chrome" })`. **Use `waitUntil: "domcontentloaded"`, never `networkidle`.** Measure numbers — opacity, transform, `--p`, byte counts, SSIM — rather than only looking. Note that editing files while `astro dev` is running can push an HMR error overlay into an in-flight screenshot run; reload and re-shoot.

## Menu, not entry points

The closing block and the header are the same menu, both built from `navItems` in `src/data/site.ts`, so they cannot drift apart. **Off-site accounts (Bandcamp, SoundCloud, Instagram) live in the footer and only there** — the user's call, and the right one: a menu that points out of the document is not a menu. Row metadata is looked up by href in `index.astro`, so adding a nav item without metadata degrades to an empty cell rather than breaking.

The tee is **sold out**: `soldOut: true` in `src/data/products.ts` drives the kicker, the price slot and the menu row, and turns the WhatsApp CTA into "Ask about the next run". `priceLabel` stays in the data as the record of what it cost.

## Constraints

- **Never use the word "underground"** in copy. Use "club culture" or "raw sound".
- Bahasa Indonesia, ringkas, langsung fix. The user dislikes process theatre; show measured evidence and working results.
- This is a **portfolio / pitch piece** for the user. The bar is work they could not trivially do themselves.
- Commerce lives **off-site** on a subdomain (Shopify/Gumroad). This repo keeps the artifact's content and the WhatsApp order button, nothing more.

## Still open

- **Read it on an actual phone. START HERE — it is the one thing left that nobody else can do.** The audit is done and the defects are fixed, but every number here is still emulation: Chromium has no URL bar, so the exact condition behind the worst bug cannot be reproduced here, only simulated. iOS Safari is entirely untested — `position: sticky` inside `overflow: hidden`, and `svh` behaviour, are where it most often differs.
  - Fastest route, no deploy: `npx astro dev --host`, then open the printed LAN address on the phone (same wifi). Session 8 left one running at `http://192.168.18.39:4350/` (the `100.120.77.230` address it also prints is Tailscale, not the LAN).
  - The deployed route: `npm run deploy`, which is also what finally verifies `_headers`.
  - Worth feeling specifically: the URL-bar moment (scroll down, let the bar hide, watch whether anything snaps); **the new dossier beat — does the poster get long enough alone at 440svh, and does 0.18 read as ground or as dirt under the text?**; the reel strip under a thumb; 36 tracks of the ladder scan; and whether 32.6 viewports is a journey or a chore.
- 320px still stacks the header into three rows (111px). It degrades without overflowing, so it was left; worth a look if that width matters.
- `docs/design.md` still contradicts the build (it says "motion restrained", "no decorative gradients"). The user has said it can be rewritten.
- Optional: one of the three `split-frame`s could run in reverse — five frames converging into one instead of pulling apart — so the set reads as a sequence rather than the same effect three times. One line: invert `--pi`.
- The heavy webps are only lightly compressed (`campout2-2.webp` is 569KB). A q74 re-encode pass measured SSIM 0.98+ for about 200KB total — judged not worth the binary churn, but it is there if weight matters again.
- A WebGL liquid-metal background was offered and not taken up. If revisited: behind the **deck only**, raw WebGL2 (no library, ~5KB), driven by `--p`, gated on reduced-motion and saveData, paused off-screen, plain-black fallback.

## Resume prompt

```
Lanjutin project perspex909 (working dir sama, Bahasa Indonesia, ringkas, langsung fix).
Baca HANDOFF.md di root repo dulu. Jangan pernah pakai kata "underground" di copy.

Situs udah one-page: semua ada di src/pages/index.astro, nav-nya anchor,
menu atas dan menu penutup dibangun dari navItems yang sama. Jangan dipecah
lagi jadi multi-page, dan jangan taro link keluar (IG/SC/Bandcamp) di menu —
itu tempatnya di footer.

Yang WAJIB dijaga:
- Koreografi nggak boleh pernah benar-benar beku
- Jangan ninggalin token/rule yang nggak ada yang pakai
- Jangan kasih label di jeda antar section
- Nggak ada warna aksen. Emphasis pakai cahaya: putih solid, putih redup,
  dan chrome buat display type di ground gelap (min ~28px, jangan di kertas)
- Halaman panjang (43 layar) itu disengaja, jangan dipotong tanpa nanya

MULAI DARI SINI: baca situsnya di HP beneran. Itu satu-satunya yang
nggak bisa dikerjain dari sini — semua angka di HANDOFF masih emulasi,
Chromium nggak punya URL bar, dan iOS Safari sama sekali belum kesentuh.
Cara paling cepet tanpa deploy: `npx astro dev --host`, buka alamat LAN-nya
di HP (wifi yang sama). Yang paling perlu dirasain: momen URL bar nyembunyi
(ada yang nyentak nggak), beat dossier yang baru (poster cukup lama sendirian
nggak, dan 0.18 kebaca sebagai ground apa jadi kotor di belakang teks),
reel strip pakai jempol, sama 32.6 layar itu perjalanan apa siksaan.

Flyer arsip di HP udah dibenerin (commit 094c44c): tiap record sekarang
buka dengan posternya sendirian edge-to-edge, baru posternya mundur jadi
ground di belakang record. Runway dossier di HP 340 -> 440svh. Nol biaya
byte, desktop nggak berubah — angkanya di HANDOFF bagian "Mobile".

Mobile udah diaudit dan 7 bug asli udah difix — detailnya di HANDOFF
bagian "Mobile".

Satu lagi yang belum keverifikasi: public/_headers baru bisa dicek setelah
deploy — `curl -I https://perspex909.com/archive/compilation.mp4`, cari
cache-control-nya.

Playwright ada di scratchpad browse/. Ukur angkanya, jangan cuma dilihat —
one.mjs buat peta section + error, weight2.mjs buat berat halaman,
digest.mjs buat buktiin perubahan CSS nggak ngubah apa-apa yang kegambar,
rm2.mjs buat reduced-motion + mobile.
```
