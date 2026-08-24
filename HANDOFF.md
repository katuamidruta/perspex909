# Perspex909 — Session Handoff

Astro v5 static site for the Perspex909 electronic-music label (Indonesia). No UI framework. Live on **Cloudflare Workers** (static assets, `wrangler.jsonc`). Repo: `katuamidruta/perspex909`, branch `main`.

> Full background is in project memory (`MEMORY.md` + files) — it auto-loads each session. This file is the quick "where we left off".

## Status (session 5 — 2026-08-21)

- **NOT COMMITTED.** Working tree has uncommitted changes. Last commit is still `bf73a01` ("style: hide site-credit section temporarily").
- `npx astro build` passes — 10 pages, no errors, no console errors in Chromium.
- Dev server last on port 4326 (`npx astro dev --port 4326`).

### Changed files
| File | State |
|---|---|
| `src/styles/motion.css` | **NEW** — the whole motion layer |
| `src/pages/index.astro` | **REWRITTEN** — 7 scroll-scrubbed sections |
| `src/layouts/BaseLayout.astro` | scrub engine + re-armable reveals + index readout + `.grain` div + imports motion.css |
| `src/styles/global.css` | `[data-reveal]` amplitude 34px → 88px + blur |
| `.gitignore` | added `dev-out.log`, `mono/` |

## What this session was actually about

User was unhappy with the site — **"motionnya kaku"**, and blunt about it: *"kesannya ngapain pake claude bikin web gituan, aku sendiri aja bisa."* Take that seriously; the bar is work they couldn't trivially do themselves.

Two reference sites were analysed **in a real browser** (Playwright + Chrome, not WebFetch — user explicitly rejected fetch as insufficient):

1. **https://stefanvitasovic.dev/projects** — no scroll at all (page = 900px). Zero `<img>`, 4 videos + one WebGL2 canvas. No GSAP/Lenis. Only CSS transition on the page: `opacity 0.2s ease`. Its signature move: hovering one item drops **all 18 siblings to `opacity: 0.25`** and updates a big counter. One input → many outputs.
2. **https://v0-mono-six.vercel.app/** — source is in `mono/` (gitignored, 21MB, Next+React+Tailwind). Measured: parallax is **1:1 with scroll, `damped: false`** — no lerp, no smoothing. Its actual parallax is only ±15px, *as small as ours was*.

**The finding that drove everything:** "kaku" was never about easing. Perspex909's easing (`cubic-bezier(0.16,1,0.3,1)`, 1000ms) was already good. The problems were **amplitude** (drift moved things ±9px — invisible), **one-shot** reveals (`unobserve()` killed them permanently), and **scroll-only** motion (nothing responded to the cursor).

## The architecture now

One pattern, borrowed from `mono/components/sections/*.tsx`:

```
<section class="runway--N" data-scrub>   ← N × 100svh of scroll runway
  <div class="stage"> ... </div>          ← position:sticky, pinned
</section>
```

`BaseLayout.astro` runs one rAF loop that writes **a single number `--p` (0→1)** onto each `[data-scrub]`. It knows nothing about what it animates. **Every choreography in `motion.css` is a pure CSS function of `--p`** — no JS per section. To add a section: add markup + a CSS block reading `var(--p)`.

Homepage sections: `hero-split` (3) → `deck` (2) → manifesto burn → `stack` (5) → `chronicle` (4) → `index-block` → `reel` + specs. Page is now 15,167px / 16.9 viewports.

Useful CSS idioms already in `motion.css`:
- staged sub-progress: `--pi: clamp(0, calc((var(--p) - 0.22) / 0.78), 1)`
- per-item sequencing: `--sp: clamp(0, calc(var(--p) * var(--n) - var(--i)), 1)`
- in/out on one axis: `--in` / `--out` pair → `opacity: calc(var(--in) - var(--out))`
- word-by-word blur: each word carries `--i`, parent carries `--n`

## Later in session 5 (after the first handoff was written)

- Hero wordmark + deck text **removed** from the homepage (user: they blocked the video). Dead CSS deleted; hero clip no longer starts zoomed.
- Stack `figcaption` (label + meta) removed; `label` kept in the data purely as image `alt`.
- **Deck timing bug fixed.** Each line used to reach opacity 1 for a single instant — unreadable. Now fade-in 28% / **hold 44%** / fade-out 28% via a `--local` var, and the runway went `runway--2` to `runway--4` (900px of scroll per line, measured).
- Manifesto copy replaced with a plain **bio**; kicker now "The Label".
- **Header rebuilt**: `logo.png` centred as an image (inverted — it is dark artwork), nav split 2/2 either side, `INDEX` dropped since the logo already links home. 3-column grid, collapses to mark-on-top under 640px. Centring verified at 720/720 desktop, 195/195 mobile.

- **Deck reworked twice.** First fix (a fade-in / hold / fade-out plateau) made it legible but *frozen* — the user immediately flagged it as "motion mati". Now each line uses the same **word-burn** as the bio (words resolve one at a time out of 34px blur, then dissolve one at a time) while the whole line drifts continuously `translateY 60px → -60px`. `rotateX` flip dropped — it fought the per-word transforms.
- **Bio section pinned.** Now `runway--3` + `stage`. Word timing divided by 0.7 so all 48 words land at **70%** of the runway (was 96% — i.e. no reading time at all); the last 30% is held reading time while `.bio-inner` drifts `32px → -32px`. Verified: `stageTop: 0` throughout, words 0 → 48/48 by f=0.7.
- **Header logo** 34px → **56px** (mobile 24 → 40) and filter strengthened to `invert(1) grayscale(1) brightness(1.9) contrast(1.4)` — plain `invert` left the thin script strokes grey.

### Design rule learned the hard way — do not break it

**A choreography must never fully freeze.** Legibility was twice "fixed" by adding a static hold, and both times it read as broken motion. The correct shape is: *let the detail resolve and hold (opacity/blur settle), but keep a slow continuous transform running underneath.* Every pinned section on the homepage now follows this.

**Decision made:** site stays **multi-page**. The homepage is the one-pager that routes into it. User wants the *other* pages to eventually get the same scrub motion — that is now the main follow-up. This project is a **portfolio/pitch piece** for the user, so polish counts.

## Open / next — in priority order

1. **Mobile pass.** Only tested at 1440×900. Sticky/scrub sections are untested on phones; `runway--5` = 500svh of scroll on a small screen may be far too long. **Highest risk item.**
2. **Fonts — still unresolved.** `--font-display` is still `"Arial Narrow", "Helvetica Neue", Arial`. **iOS and Android have no Arial Narrow**, so on phones every heading falls back to a non-condensed face and the identity collapses. User's earlier complaint "kerasa belum jadi" was diagnosed to this and it is *completely untouched*. Suggested: real display face + a **mono for metadata** (catalog codes, dates, durations) — mono is the single highest-impact typographic move for an archive site. Consider Velvetyne / Collletttivo (open source, not Google-Fonts-looking). Self-host woff2.
3. **Other pages still run the old system** — `archive/`, `releases/`, `shop/`, `about/` use plain `data-reveal` sections. They inherited the bigger reveal + animated grain but none of the scrub choreographies.
4. **`docs/design.md` now contradicts the build** — it says "motion restrained", "no decorative gradients". User said explicitly it can be rewritten. Not done.
5. **Commit.** Nothing is committed yet.

## Verification tooling (already set up, reuse it)

Playwright + Chrome is installed in the scratchpad — this is what made the analysis real, use it instead of guessing:
```
cd <scratchpad>/browse   # npm pkg with playwright already installed
node shoot.mjs "http://localhost:4326/" out 14   # scroll through, N screenshots
node diag.mjs                                    # read computed --p / transforms at set offsets
node hover.mjs                                   # hover test: sibling opacities + readout
```
If the scratchpad is gone: `npm install playwright` anywhere, `chromium.launch({ channel: "chrome" })`, Chrome + the browser cache are already on this machine. **Use `waitUntil: "domcontentloaded"`, not `networkidle`** — these sites never go idle.

## Content constraint

**NEVER use the word "underground"** in site copy. Use "club culture" / "raw sound".

## Working style

Bahasa Indonesia, ringkas, langsung fix. User dislikes process theatre — show measured evidence and working results, not plans about plans.

## Resume prompt

```
Lanjutin project perspex909 (working dir sama, Bahasa Indonesia, ringkas, langsung fix).
Baca HANDOFF.md di root repo dulu. Jangan pernah pakai kata "underground" di copy.

Konteks: homepage udah dirombak total pakai scroll-scrub engine — satu variabel --p per
section, semua koreografi CSS murni di src/styles/motion.css. User puas sama hasilnya.
Build lolos tapi BELUM DI-COMMIT sama sekali.

ATURAN PENTING yang udah kepelajari: koreografi nggak boleh pernah benar-benar beku.
Boleh nahan detail biar kebaca (opacity/blur settle), tapi harus selalu ada transform
pelan yang jalan di baliknya. Dua kali salah gara-gara ini.

Prioritas sesi ini: [PILIH SALAH SATU]
  (a) Commit dulu — kerjaan 2 sesi belum ke-commit, ini paling berisiko
  (b) Mobile pass — section sticky/scrub belum pernah dites di HP sama sekali
  (c) Font — masih Arial Narrow yang nggak ada di iOS/Android; ini project buat
      portfolio/pitching, jadi ketemunya di HP calon klien bakal jelek
  (d) Rombak halaman lain (archive/releases/shop/about) pakai sistem scrub yang sama

Playwright udah kepasang buat verifikasi visual — pakai itu, jangan nebak. Ukur angkanya
(opacity, transform, --p) jangan cuma lihat. Caranya ada di HANDOFF.md bagian
"Verification tooling". Dev server terakhir di port 4326.
```
