# Perspex909 — Session Handoff

Astro v5 static site for the Perspex909 electronic-music label (Indonesia). No UI framework, no JS dependencies. Live on **Cloudflare Workers** (static assets, `wrangler.jsonc`). Repo `katuamidruta/perspex909`, branch `main`.

> Background lives in project memory (`MEMORY.md` + files), auto-loaded each session. This file is "where we left off".

## Status (end of session 5 — 2026-08-24)

- **All committed, working tree clean.** Head is `0c4ccb2`; the session shipped 10 commits from `bf73a01`.
- `npx astro build` passes — 10 pages, no console errors in Chromium.
- Dev server last on port 4330.

## The decision that drives next session: go one-page

Multi-page was agreed earlier in the session and then **overturned by the user, correctly**. The objection had been "the shop needs per-product URLs"; the user removed that premise:

- Commerce moves **off-site** to a subdomain (Shopify / Gumroad / similar). Not this repo's problem.
- **Perspex is one product.** Releases and the tee are *content*, not a catalogue. That makes this site comparable to `mono/` — a landing page for one product — not to a store.
- The site is a **showcase / landing page**.

So: fold `archive/`, `releases/`, `shop/`, `about/` into the homepage.

**How the user wants archive handled:** let it **expand downward inline**, carrying its information, rather than linking out. Each folded section can take its own scroll choreography — archive as a `split-frame`, for instance. Adapt per section; the machinery already exists.

Open question, low stakes: whether individual events still deserve shareable URLs. If this is purely a showcase, probably not.

## Architecture

```
<section class="split-frame runway--3" data-scrub>   ← N × 100svh runway
  <div class="stage"> ... </div>                      ← position:sticky, pinned
</section>
```

`BaseLayout.astro` runs one rAF loop that writes **a single number `--p` (0→1)** onto every `[data-scrub]`. It knows nothing about what it animates. **Every choreography in `src/styles/motion.css` is a pure CSS function of `--p`** — no per-section JS. To add a section: markup plus a CSS block reading `var(--p)`.

Homepage order (21,835px):

| # | Section | Note |
|---|---|---|
| 1 | `split-frame` | hero.mp4 splits into a five-column band |
| 2 | `deck` | three statements, word-burn + chrome |
| 3 | `bio` | pinned below the header, word-burn |
| 4 | `stack` | archive flyers deal into a pile, bezelled |
| — | `interlude` | 46svh, empty and unlabelled on purpose |
| 5 | `split-frame` | compilation.mp4, same mechanism — the two rhyme |
| 6 | `spec-grid` + CTA | |
| 7 | `chronicle` | layered cross-dissolve under cycling lines |
| 8 | `index-block` | hover dims siblings and drives the big counter |

CSS idioms already in `motion.css`:

- staged sub-progress — `--pi: clamp(0, calc((var(--p) - 0.22) / 0.78), 1)`
- per-item sequencing — `--sp: clamp(0, calc(var(--p) * var(--n) - var(--i)), 1)`
- appear/disappear pair — `--app` / `--dis`, then `opacity: calc(var(--app) - var(--dis))`
- word-by-word blur — each word carries `--i` (or `--w`/`--wn` inside a line), the parent carries `--n`

## Rules learned the hard way — do not re-break these

1. **A choreography must never fully freeze.** Legibility was twice "fixed" with a static hold, and both times the user read it as broken motion. Correct shape: let detail resolve and hold (opacity and blur settle) while a slow transform keeps running underneath.
2. **Amplitude is what reads as intent.** A ±9px parallax is invisible, not subtle.
3. **Never leave a token or rule that nothing draws.** `--color-metal` was declared and never rendered — which is exactly how Perspex's own material went missing from the site. The same trap later caught `--chrome`, `--chrome-sculpt`, `.reel` and `--color-metal-line`; each was removed the moment its consumer went.
4. **Do not label a pause.** The interlude briefly carried "05 · RELEASE DOCUMENT"; naming what is coming spends the surprise that carries the scroll.

## This session, in brief

- **Fonts self-hosted** (`public/fonts/`, no CDN). Archivo ships one variable file carrying weight *and* width axes; declaring it twice under two family names pins that axis, so `"Archivo Expanded"` is always 125% wide without every call site setting `font-stretch`. Metadata is **IBM Plex Mono**. ~120KB total; the display face is preloaded.
- **Chrome in two places only** — deck statements (`--chrome-sculpt`: bright at both edges, dark through the middle, plus a drop-shadow) and the header logo (`logo.png` is RGBA, so its alpha masks the gradient). Archive prints wear `--chrome-bezel`.
- **Holographic foil was tried and reverted** (`712d5c1` → `7b2a791`). Materially accurate and still worse: diffraction colour depends on viewing angle, a screen cannot sense angle, so it had to be faked from scroll position — colour shifted when the reader scrolled rather than when they moved. Wrong cause, wrong feel. Do not retry without a genuinely new idea.
- **Grain bug fixed.** `.grain` sat at `z-index: 0` before `<main>`, sharing a paint layer with the positioned sections and losing to them on tree order; `display:none` changed the screenshot by zero bytes, so it had never rendered at all. Now `z-index: 5`. This was most of why the hero clip read as "pasted on" — shared grain is what welds separate materials into one image.
- The hero clip is **93% a single flat grey** (measured, not guessed), so a crisp rectangle of it floated. It now has an edge falloff for depth.
- The bio pins **below** the header via `--header-h`, so it centres in the area actually visible.
- `.hero-split` renamed **`.split-frame`** — it is the mechanism, and it is used twice.

## Page weight (measured, dev server, full scroll)

21,835px · 90 requests · media **11.4MB** · images 1.6MB · fonts 118KB. Production is roughly 13MB.

**Relevant to the one-page work:** folding in four more pages puts every asset on a single document. Lazy-loading already exists (`loading="lazy"`, plus `data-bg-video` with an IntersectionObserver) — keep it, extend it, and re-measure after the merge.

## Verification tooling — use it, do not guess

Playwright with real Chrome is installed in the session scratchpad under `browse/`. Scripts there: `shoot.mjs` (scroll-through screenshots), `diag.mjs` (computed `--p` and transforms at set offsets), `hover.mjs`, `grain.mjs` (screenshot diff, proves an overlay actually renders), `weight.mjs` (bytes and requests).

If the scratchpad is gone: `npm install playwright` anywhere and use `chromium.launch({ channel: "chrome" })` — Chrome and the browser cache are already on this machine. **Use `waitUntil: "domcontentloaded"`, never `networkidle`.** Measure numbers — opacity, transform, `--p`, byte diffs — rather than only looking.

## Constraints

- **Never use the word "underground"** in copy. Use "club culture" or "raw sound".
- Bahasa Indonesia, ringkas, langsung fix. The user dislikes process theatre; show measured evidence and working results.
- This is a **portfolio / pitch piece** for the user. The bar is work they could not trivially do themselves.

## Still open after the one-page work

- **Mobile pass.** Never tested below 1440×900. `runway--5` is 500svh, which on a phone is likely far too long. `--header-h: 104px` for mobile is a guess — measure it. Highest-risk item.
- `docs/design.md` still contradicts the build (it says "motion restrained", "no decorative gradients"). The user has said it can be rewritten.
- Optional: the second `split-frame` could run in reverse — five frames converging into one — so the pair reads as bookends rather than the same effect twice. One line: invert `--pi`.
- A WebGL liquid-metal background was offered and not taken up. If revisited: behind the **deck only**, raw WebGL2 (no library, ~5KB), driven by `--p`, gated on reduced-motion and saveData, paused off-screen, with a plain-black fallback.

## Resume prompt

```
Lanjutin project perspex909 (working dir sama, Bahasa Indonesia, ringkas, langsung fix).
Baca HANDOFF.md di root repo dulu. Jangan pernah pakai kata "underground" di copy.

Sesi ini: ROMBAK JADI ONE-PAGE. Lipat archive/, releases/, shop/, about/ ke homepage.
Keputusan ini udah final — jangan diperdebatkan lagi, alasannya ada di HANDOFF.md.

Cara yang user mau:
- Archive melebar ke bawah inline beserta informasinya, bukan nge-link keluar
- Tiap section yang dilipat boleh dapat koreografi sendiri, misal archive pakai
  split-frame. Sesuaikan per section, mesinnya udah ada.
- Commerce pindah ke subdomain (Shopify/Gumroad), bukan urusan repo ini

Yang WAJIB dijaga:
- Koreografi nggak boleh pernah benar-benar beku
- Jangan ninggalin token/rule yang nggak ada yang pakai
- Jangan kasih label di jeda antar section — itu ngebocorin kejutannya

Habis merge, ukur ulang berat halaman pakai weight.mjs — sekarang aja produksi udah
~13MB, jadi lazy-load harus dijaga dan diperluas.

Playwright udah kepasang buat verifikasi visual. Ukur angkanya, jangan cuma dilihat.
Caranya ada di HANDOFF.md bagian "Verification tooling".
```
