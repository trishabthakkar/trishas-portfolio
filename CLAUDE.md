# CLAUDE.md — Trisha's Portfolio Website

This file documents everything needed to continue development across sessions without losing context.

---

## Project Overview

**Owner:** Trisha Thakkar — CS + AI student at Purdue (thakkart@purdue.edu)
**Repo:** `~/trishas-portfolio` (local git repo, no remote yet)
**Goal:** A creative, interactive personal portfolio website that's unmistakably Trisha's — playful, dreamy, personality-forward. More creative than reference sites [sejalm.space](https://sejalm.space/) and [bhatia.info](https://www.bhatia.info/).

---

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js (App Router) + TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion (to be added in Phase 2) |
| Content | Local data files / MDX (no CMS) |
| Contact form | Serverless route + Resend or Formspree (Phase 6) |
| Hosting | Vercel + custom domain (Phase 8) |

**Node version:** v22.19.0 | **npm:** 10.9.3

### Key commands
```bash
npm run dev      # start dev server at localhost:3000
npm run build    # production build
npm run lint     # ESLint
```

---

## Design System & Aesthetic — "soft power" (LOCKED 2026-07-04)

The entire site must feel **unmistakably Trisha's**. Never drift into generic template territory.

**Direction:** LOCKED (2026-07-04) — after exploring four `/lab` first-screen variations (telemetry blush, graph paper, pit wall, warm minimal), Trisha chose to **keep the original "soft power" design** (blush + ink + rose, Fraunces display, kinetic name, continuous-scroll home). Pink stays. The F1/telemetry directions were explored and set aside. The `/lab` folder has been deleted. Design exploration (PRD Track 1) is effectively closed — work now moves to building out sections with real content (Track 2).

**Home architecture (LOCKED 2026-07-04):** single continuous-scroll page — hero → about → projects → research → contact, all on `/` with anchor links (`#about` etc.), NO redirecting to separate tabs. Contact info is displayed in an on-page `#contact` section. Smooth scroll via `scroll-behavior` in `globals.css` (reduced-motion aware); sections use `scroll-mt-28` for the sticky nav offset. The separate `/about`, `/projects`, `/research`, `/contact` route pages still exist but the home page no longer links to them — nav-vs-single-page architecture is an open question (PRD Phase 6).

Live reference: the **`/style-guide`** route renders the entire system.

**Design lab (2026-07-04, CLOSED):** four throwaway first-screen variations were built at `/lab/1`–`/lab/4` (telemetry blush, graph paper, pit wall, warm minimal) from Trisha's Phase 1 answers. She reviewed them and preferred the **original** — the lab folder was deleted. Note for future: those explorations aren't recoverable except via git history; don't rebuild them unless asked.

### Brand voice
- lowercase headings everywhere
- warm, first-person, a little playful
- **No sparkle/flower glyphs** (`⊹ ✿ ♡` etc.) — Trisha removed these 2026-07-04. Decoration comes from a short rose rule (`h-px w-8 bg-rose`) before section labels, not emoji/unicode ornaments.

### Color tokens (defined in `globals.css` via Tailwind v4 `@theme` — there is NO `tailwind.config.ts`)
| Token | Hex | Use |
|-------|-----|-----|
| `blush` | `#fff5f7` | Page background |
| `petal` | `#ffdbe4` | Soft surfaces, borders |
| `petal-deep` | `#e3c2c8` | Emphasis text on dark sections (muted 2026-07-06 — was `#ffb6c1`) |
| `rose` | `#ec407a` | THE accent — links, CTAs, active nav |
| `rose-bright` | `#f43f7d` | Hover states |
| `ink` | `#241d20` | Dark sections, headings (muted 2026-07-06 — was `#2b0f1e`) |
| `ink-soft` | `#6e5860` | Body copy (muted 2026-07-06 — was `#6b3651`) |
| `ink-mute` | `#a3919a` | Labels, hints, placeholders (muted 2026-07-06 — was `#a87d92`) |

Use as normal Tailwind utilities: `bg-blush`, `text-ink-soft`, `border-petal`, etc.

**2026-07-06:** Trisha felt the *dark* ink sections read too pink/magenta (not the light blush background or the rose accent — those stay). Desaturated `ink`, `ink-soft`, `ink-mute`, `petal-deep` toward a muted, dusty charcoal-plum. If it still reads too pink, the next lever is `ink` itself (the darkest, most visible token).

### Typography
- **Display:** Fraunces (`font-display`, variable axes SOFT/WONK/opsz + italic, loaded in `layout.tsx`) — all headings and big statements. Italic + `text-rose` (or `text-petal-deep` on dark) for the one word that matters.
- **Body:** Geist Sans (`font-sans`)
- **Mono:** Geist Mono (`font-mono`) — index numbers, hex codes

### Component library (`src/components/ui/`)
- `SectionHeading` — short rose rule + tracked label eyebrow, then display title; `dark` prop for ink sections
- `Divider` — hairline rule with a small centered rose dot, `dark` prop (replaced the old sparkle divider)
- `Button` — variants: primary / outline / ghost (rounded-full, rose)
- `Card` — petal border, lifts + rose glow on hover
- `KineticName` — hero name; letters spring in staggered, lift/tilt/turn rose on hover

(Removed 2026-07-04 at Trisha's request: `SparkleDivider`, `Marquee` — she disliked the sparkles and the scrolling banner strip.)

### Motion rules (Framer Motion, already installed)
- Entrances: springs with stagger; scroll reveals via `whileInView` + `viewport={{ once: true }}`
- Home hero pins (`sticky top-0`) and scales/fades as the ink sheet (`rounded-t-[3rem] bg-ink`, `z-10`) slides over it
- Only CSS keyframe left in `globals.css`: `animate-float` (scroll-cue arrow) — disabled under `prefers-reduced-motion`
- **Gotcha:** `DotBackground` wraps the whole page in a named group `group/dots`. Never rely on a bare `group` class high in the tree; name groups to avoid every `group-hover:` firing page-wide.

---

## File Structure

```
trishas-portfolio/
├── CLAUDE.md              ← this file
├── PRD.md                 ← full product requirements + phase plan
├── README.md              ← project overview (overwritten by Next scaffold)
├── next.config.ts
├── tsconfig.json
├── tailwind.config.ts     ← extend here for custom tokens/fonts
├── postcss.config.mjs
├── eslint.config.mjs
├── package.json
├── public/                ← static assets (add images, resume PDF here)
└── src/
    ├── app/
    │   ├── layout.tsx     ← root layout: NavBar + Footer wrapping all pages
    │   ├── page.tsx       ← Home (stub, placeholder for interactive centerpiece)
    │   ├── globals.css    ← global styles
    │   ├── projects/
    │   │   └── page.tsx   ← Projects stub
    │   ├── about/
    │   │   └── page.tsx   ← About stub
    │   ├── research/
    │   │   └── page.tsx   ← Research stub
    │   └── contact/
    │       └── page.tsx   ← Contact stub (has email link)
    ├── components/
    │   ├── NavBar.tsx     ← client component, active link highlighting
    │   └── Footer.tsx     ← sparkle footer
    ├── lib/               ← utility functions (empty, ready for use)
    └── data/              ← local data files for projects/research (empty, ready)
```

---

## Phase Progress

See `PRD.md` for full details on each phase.

| Phase | Name | Status |
|-------|------|--------|
**NOTE (2026-07-04):** the phase plan was replaced. `PRD.md` is now the source of truth — a design-first, ~22-phase plan split into Track 1 (design exploration, iterate until Trisha loves it) and Track 2 (build). The old 0–8 table below is superseded; keeping it only as a record of what was scaffolded.

| Phase | Name | Status |
|-------|------|--------|
| 0 | Foundation & Setup | ✅ Complete |
| — | Initial "soft power" design + kinetic home + continuous-scroll restructure | ✅ Built as the iteration starting point |
| Track 1 | Design exploration (color/type/motion/hero/layout) | ⬜ Next — see PRD.md |
| Track 2 | Build every section, graphics, a11y, launch | ⬜ After design lock |

### Phase 0 — what was done
- Scaffolded Next.js (App Router) + TypeScript + Tailwind + ESLint
- Set up folder structure: `src/app/`, `src/components/`, `src/lib/`, `src/data/`
- Created stub pages for all 5 routes: `/`, `/projects`, `/about`, `/research`, `/contact`
- Built `NavBar.tsx` (client component, active-link highlighting with `usePathname`)
- Built `Footer.tsx` (sparkle footer)
- Updated `layout.tsx` to wrap all pages with NavBar + Footer, set rose-50 background
- Established brand voice/palette in all stub pages

---

## Decisions Locked (2026-07-04, chosen by Trisha)

1. **Aesthetic:** Dreamy × Bold hybrid ("soft power") — pink identity, F1-site execution
2. **Home centerpiece:** Giant kinetic name hero (cursor-reactive letters), NOT the desk/garden/scrapbook concepts
3. **Motion level:** Cinematic — scroll-driven pinning, ink sheet reveal, staggered springs
4. **Imagery:** Neither photo nor avatar for now — typography-driven

## Open Questions

1. **Domain name** — what URL? Options: `trishathakkar.com`, `trisha.dev`, `trisha.space`, `trishas.world`, etc. Custom domain is Phase 8 but should be purchased whenever ready.
2. **Projects to seed** — which 3–5 real projects go in first?
3. **Research to seed** — what are the research interests / any publications or ongoing work?

---

## Important Context

- **Email:** thakkart@purdue.edu
- **Aesthetic reference:** Trisha's GitHub profile README (soft pinks, sparkles ⊹˚｡ ✿ ˚⋆, lowercase, warm voice)
- **Stack already uses:** Python, TypeScript, JS, Java, C; PyTorch, TensorFlow, scikit-learn, pandas, NumPy; React, Next.js, Tailwind; Node.js, Express, Flask, PostgreSQL, MongoDB; Git, Docker, AWS, Figma
- **Deployment target:** Vercel (no remote repo yet — set up GitHub remote before deploying)
- **Contact form service:** not yet chosen (Resend or Formspree are both fine)

---

## Conventions

- All headings in component text: **lowercase**
- Section headings: use the `SectionHeading` component (rose-rule label + display title)
- Page wrapper pattern: `<div className="mx-auto max-w-4xl px-6 py-16">`
- Nav: floating pill (`NavBar.tsx`), active link = animated rose pill via `layoutId="nav-pill"`
- No comments in code unless the WHY is non-obvious
- MDX content support: add `@next/mdx` when populating projects/research data

---

## Next Steps

**`PLAN.md` is the working phase tracker** (created 2026-07-04) — 10 sequential build phases from nav scroll-spy through launch, each with status, "needs from Trisha," and done-when criteria. Work through it one phase at a time and mark phases ✅ there as they finish.

To continue, just say "let's do phase 1" (or "next phase") in a new session — PLAN.md + this file have all the context needed.
