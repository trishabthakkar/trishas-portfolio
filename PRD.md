# Trisha's Portfolio — Master Build Plan

**Owner:** Trisha Thakkar (CS + AI @ Purdue · mitta143@purdue.edu)
**Last updated:** 2026-07-04
**Status:** Design exploration (Track 1)

---

## How we work

- **One phase at a time.** Each phase ends with something you can see and react to. Nothing advances until you say you love it.
- **Design before build.** Track 1 (Phases 1–7) is pure design exploration — colors, type, motion, layout — until you land on a direction you love. Track 2 (Phases 8+) only starts once the design is locked.
- **You steer every detail.** For each design phase I show you 2–4 concrete options (rendered, not described), you react, we iterate. Pink is not a given — if a different palette wins, we switch.
- **We pull from what you love.** Formula 1 is on the table as an influence (speed, precision, telemetry, team liveries, bold sans type) alongside the softer/dreamy direction. We'll mix and remix until it feels like *you*.
- **Reversible & cheap to explore.** Options live behind a `/lab` route (throwaway) so exploring never risks the real site.

### Tools we'll use (Claude's design capabilities)
- **design-critique** — structured feedback on each iteration (hierarchy, usability, consistency)
- **design-system** — document & lock tokens/components once chosen
- **ux-copy** — microcopy, section labels, button text, empty states
- **accessibility-review** — WCAG audit before launch (contrast, keyboard nav, motion)
- **design-handoff** — spec sheet for each component as it's finalized
- **Figma connector** *(optional)* — for moodboards & mockups if you authorize it (needs one-time sign-in via claude.ai connector settings or `/mcp`). Not required — we can do everything with live in-browser previews.

---

## Locked decisions (2026-07-04)

1. **Home is a single continuous-scroll page** — no redirecting to separate tabs. Sections (about → projects → research → contact) flow on one page; the in-page index scrolls you down.
2. **Contact info lives on the home page** (a dedicated contact section, currently at the bottom).
3. **No sparkle/flower glyphs** — decoration comes from type, color, and a small rose rule, not emoji ornaments.
4. **No "scroll" cue, no "made by trisha" footer line.**

### Phase 1 discovery answers (Trisha, 2026-07-04)
- **F1 inspiration = the data/telemetry side**, not a team livery — HUD graphics, lap tables, sector colors, mono numbers, grid lines as a detail layer on any palette
- **First-5-seconds feeling: "this person is sharp"** — precise, confident, engineered
- **Personality: minimal & precise + warm & playful + techy & futuristic** (explicitly NOT bold & loud)
- **Light-first** base tone
- Name should sit **on the side, smaller** (not giant/centered); **contact info on the first screen** (labeled-row template: EMAIL / GITHUB / LINKEDIN / AVAILABILITY)
- Live explorations at **`/lab`** (variations 1–4: telemetry blush · graph paper · pit wall · warm minimal)

### Direction chosen (2026-07-04)
- **Kept the original "soft power" design** over all four `/lab` variations. Pink stays; blush + ink + rose, Fraunces display, kinetic name, continuous-scroll home. Design exploration (Track 1) is closed — moving to Track 2 build.

### Still open (we'll answer these inside the phases)
- [ ] **Site architecture** — pure single-page, or single-page home + separate deep-dive pages for individual projects (Phase 6)
- [ ] **Photo, illustrated avatar, or neither** (Phase 3 / Phase 11)
- [ ] **Which 3–5 projects + research to seed** (Phase 20)
- [ ] **Social links** (GitHub, LinkedIn handles) for the contact section
- [ ] **Domain name** (Phase 22)

---

# TRACK 1 — DESIGN (iterate until you love it)

## Phase 1 — Discovery & Direction
*Goal: agree on the personality before touching pixels.*
- Collect references: which F1 teams/eras/designs you love, plus any other sites/brands/albums/spaces that feel "you."
- Pin down personality axes: playful ↔ serious · soft ↔ bold · minimal ↔ maximal · warm ↔ cool · retro ↔ futuristic.
- I build a **moodboard** (inline visual widgets, or Figma if connected) with 2–3 distinct "worlds."
- **Done when:** you pick one world (or a mash-up) as the north star and we write a one-paragraph creative brief.

## Phase 2 — Color Exploration
*Goal: lock the palette.*
- 4–6 palette directions rendered on real UI, e.g.:
  - refined pink/blush (evolve the current "soft power")
  - F1-inspired (papaya/graphite, racing red/carbon, teal/lime telemetry)
  - unexpected (plum + butter, ink + acid, sage + clay)
- Each shown in light + dark, on the actual hero + a section.
- Contrast-checked so accessibility is baked in from the start.
- **Done when:** one palette is chosen and captured as tokens.

## Phase 3 — Typography Exploration
*Goal: lock the type system.*
- Several display + body pairings, shown at hero scale and body scale (e.g. Fraunces, PP Neue Montreal vibes, a sharp grotesk for the "F1" feel, a soft serif for the "dreamy" feel).
- Decide the treatment: lowercase? italic accents? uppercase tracked labels?
- **Done when:** display + body + label styles are chosen.

## Phase 4 — Motion & Interaction Language
*Goal: decide how the site *feels* to touch.*
- Define motion personality (F1 = fast, precise, easing that "launches"; dreamy = floaty, springy).
- Prototype 2–3 signature interactions: cursor behavior, hover states, section transitions, scroll effects.
- Set the reduced-motion fallback rules.
- **Done when:** we have a motion spec + a couple of live prototypes you like.

## Phase 5 — Homepage Hero Concepts
*Goal: the one thing people remember.*
- 2–3 distinct hero centerpieces rendered live, e.g.:
  - kinetic name (evolve current)
  - F1 telemetry/HUD hero (speed lines, live "stats," start-lights reveal)
  - editorial split / oversized index
- **Done when:** you pick the hero direction.

## Phase 6 — Layout & Section Design (the continuous scroll)
*Goal: design the whole one-page flow.*
- Wireframe → hi-fi for each section in the scroll: **hero → about → projects → research → contact.**
- Decide scroll rhythm, section dividers, sticky/pinned moments, and how the nav tracks your position (scroll-spy).
- Decide the architecture question: pure single-page vs. single-page + per-project detail pages.
- **Done when:** the full homepage is designed top-to-bottom and approved.

## Phase 7 — Design System Lock & Style Guide
*Goal: a documented, reusable system.*
- Finalize tokens (color, type, spacing, radius, shadow, motion) via **design-system**.
- Lock component inventory + states (buttons, cards, nav, dividers, section headings, tags, form fields).
- Rebuild `/style-guide` to reflect the final system.
- **Done when:** every component is documented and the style guide matches the chosen design.

---

# TRACK 2 — BUILD (only after the design is loved)

## Phase 8 — Foundation & Architecture
- Finalize single-page continuous-scroll structure + anchor/scroll-spy nav.
- Section scaffolding with proper `id`s and scroll offsets. *(Started 2026-07-04.)*

## Phase 9 — Navigation & Shell
- Nav that highlights the active section as you scroll; smooth-scroll to anchors; mobile menu.
- Footer, skip-link, page metadata shell.

## Phase 10 — Hero (build)
- Production build of the chosen hero with full motion + reduced-motion fallback.

## Phase 11 — About Section
- Bio in your voice, tech-stack display, timeline/"journey," fun facts. Photo/avatar decision applied.
- **Graphics:** avatar/portrait treatment, skill badges, timeline markers.

## Phase 12 — Projects Section
- Data model (title, blurb, tags, tech, links, images, date) in `src/data/`.
- Card grid with hover states + filtering/sorting; per-project detail (modal or route) with a case-study template.
- **Graphics:** thumbnails, tag chips, tech icons, hover/preview treatment.

## Phase 13 — Research Section
- Interests overview; publications list (title, venue, year, authors, links/PDF); current-focus block.
- **Graphics:** paper cards, timeline, venue badges.

## Phase 14 — Contact Section
- On-page contact block (done) + real social links + optional contact form (serverless via Resend/Formspree) with validation, success/error states, spam guard.
- **Graphics:** input styling, states, confirmation moment.

## Phase 15 — Graphics & Illustration Pass
- Site-wide visual assets: SVG/CSS art, icon set, textures/grain, decorative motifs (F1 or dreamy), section dividers, custom cursor.

## Phase 16 — Micro-interactions & Delight
- Hover choreography, scroll-triggered reveals, cursor effects, tasteful easter egg(s), page/section transitions.

## Phase 17 — Responsive & Mobile
- Full mobile pass on every section; touch equivalents for hover-only interactions; mobile nav.

## Phase 18 — Accessibility
- **accessibility-review** audit: keyboard nav, focus states, alt text, contrast, ARIA, reduced-motion. Fix to WCAG 2.1 AA.

## Phase 19 — Performance & Polish
- Image optimization, lazy-loading, font strategy, bundle trim; Lighthouse ≥ 90 across the board.

## Phase 20 — Content Population
- Seed real projects + research + about copy (with **ux-copy** help). Replace all placeholders.

## Phase 21 — SEO & Meta
- Meta tags, Open Graph/social preview images, favicon, sitemap, robots, privacy-friendly analytics.

## Phase 22 — Launch
- GitHub remote, Vercel deploy, custom domain + HTTPS, cross-browser/device QA. Ship it.

---

## Per-tab graphics, templates & formatting (reference)

| Section | Template / layout | Graphics & assets | Formatting notes |
|---------|-------------------|-------------------|------------------|
| **Hero** | Full-viewport centerpiece | Kinetic type / HUD / illustration (TBD Phase 5) | Big display type, one accent word |
| **About** | Bio + skills + timeline | Avatar/portrait, skill badges, timeline markers | Warm first-person voice, lowercase headings |
| **Projects** | Card grid → detail view | Thumbnails, tag chips, tech icons | Filterable; each card: title, blurb, tags, links |
| **Research** | List + current focus | Paper cards, venue badges, timeline | Scannable: title · venue · year · links |
| **Contact** | On-page block + form | Input states, confirmation moment | Email + socials always visible |
| **Global** | Nav + footer + cursor | Icon set, textures, dividers, motifs | Consistent tokens everywhere |

---

## Stretch / future ideas
`/blog` or `/notes` · a `/now` page · guestbook · Spotify "now playing" / GitHub activity · seasonal themes · background-music toggle.

---

## Success metrics
- Feels **unmistakably yours** — never mistaken for a template.
- "What has she built" + "how do I reach her" findable in seconds.
- Lighthouse ≥ 90 (Performance, Accessibility, Best Practices, SEO).

---

*To start, say "let's do phase 1" and we'll begin the moodboard + direction exploration.*
