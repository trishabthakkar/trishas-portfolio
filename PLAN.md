# PLAN.md — Build Phases

**The working checklist. One list, one phase at a time, top to bottom.** Each phase is small enough to finish in a session, ends with something visible, and doesn't start until the one before it is checked off. (`PRD.md` holds the full requirements/vision; this doc is what we actually work from.)

**How to use:** open a session and say "next phase." When a phase is done and you're happy, we mark it ✅ here and commit.

> **2026-07-06:** this used to be two documents (`PLAN.md` + a separate `DEPTH-PLAN.md`) running as parallel tracks. That was exactly the "exploring too many directions" problem — merged back into **one sequential list** below. Nothing is dropped, it's just in order now.

---

## Where things stand (updated 2026-07-06, night)

**Done:**
- ✅ Design locked — "soft power" (blush + ink + rose, Fraunces, kinetic name). `/style-guide` renders the system. Dark-section palette muted (less pink), ink panel corners tightened from 3rem → 2xl.
- ✅ **Phase 1 — nav & scroll behavior.**
- ✅ **Phase 2 — real projects.** solfit, hera, foodsaver — real blurbs/tags.
- ✅ **Phase 3 — real experience & skills.** Zealogics + Collabera on the timeline; skills restructured into real resume categories with estimated levels (flagged as estimates, not self-reported).
- ✅ **Phase 4 — research section (bonus, not originally planned).** SPARK Lab, engineering research, published paper. Wired into the nav.
- ✅ **Phase 5 — project story pages + github/devpost icons.** Each project card now links internally to `/projects/[slug]` (a real page, not just an external bounce); GitHub + Devpost icon buttons sit under the tags and link out directly. The old `/projects` stub route now redirects to `/#projects` instead of showing "coming soon."
- 🟡 **Phase 8 — contact, mostly real.** Email, phone, GitHub, LinkedIn, Devpost all wired and correct. Message form works via a `mailto:` fallback (not a real backend).
- ✅ Repo on GitHub ([trishabthakkar/trishas-portfolio](https://github.com/trishabthakkar/trishas-portfolio)) and pushed.

**Next up: Phase 6** — writing the actual stories behind the 3 projects.

---

## Phase Status

| # | Phase | Needs from you | Status |
|---|-------|----------------|--------|
| 1 | Nav & scroll behavior | nothing | ✅ done |
| 2 | Real projects (data) | — | ✅ done |
| 3 | Real experience & skills | — | ✅ done |
| 4 | Research section (bonus) | — | ✅ done |
| 5 | Project story pages + github/devpost icons | — | ✅ done |
| 6 | Write the 3 project stories | 5 quick prompts × 3 projects | ⬜ **next** |
| 7 | Real bio + about voice | bio notes, hobbies, fun facts | ⬜ |
| 8 | Contact, for real | real backend form? (optional) | 🟡 mostly done |
| 9 | `/now` page (living) | what you're building/learning right now | ⬜ |
| 10 | Notes engine (scaffold only) | nothing yet | ⬜ |
| 11 | Route cleanup (remaining stubs) | one decision | ⬜ |
| 12 | One interactive moment | reactions | ⬜ |
| 13 | Motion & delight polish | reactions | ⬜ |
| 14 | Responsive & accessibility | 10 min on your phone | ⬜ |
| 15 | Performance & SEO | favicon / OG preferences | ⬜ |
| 16 | Launch (Vercel + domain) | vercel account + domain | ⬜ |

---

## Phase 1 — Nav & Scroll Behavior ✅
*Full-width top bar, links point at home anchors, rose scroll-spy underline tracks the active section, `scroll-mt` keeps headings clear of the bar, mobile spaces the links evenly.*

## Phase 2 — Real Projects ✅
*`src/data/projects.ts` has your 3 real projects (solfit, hera, foodsaver) with real blurbs and tech tags.*

## Phase 3 — Real Experience & Skills ✅
*`src/data/experience.ts`: Zealogics (AI Software Engineering Intern) + Collabera Digital (C# Programming Intern), real dates and blurbs. `src/data/skills.ts`: restructured into your resume's actual categories with levels estimated from resume evidence — adjust any that feel off.*

## Phase 4 — Research Section ✅ (bonus)
*`src/data/research.ts`: SPARK Lab, Research in Engineering, and your published paper. Own "papers landing" animation, wired into the nav between Experience and Skills.*

## Phase 5 — Project Story Pages + GitHub/Devpost Icons ✅
*Each project card (`src/components/sections/Projects.tsx`) now: (a) links as a whole to `/projects/[slug]` — a real in-depth page, not an external bounce, and (b) has small GitHub + Devpost icon buttons under the tags linking out directly. The story page (`src/app/projects/[slug]/page.tsx`) renders the project's blurb + tags + links now, and will render a full spark/how-it-works/the-wall/what-i'd-change story once Phase 6 writes it — falls back gracefully to "the full story is coming soon" until then. The old `/projects` stub route redirects to `/#projects`.*
*Note: GitHub/Devpost links currently point at your profile pages as an interim (documented in `projects.ts`) — swap in each project's direct repo/devpost link whenever you have them.*

## Phase 6 — Write the 3 Project Stories  ⬜ next
*Goal: turn the "coming soon" story pages into the real thing — this is the actual differentiator, everything in Phase 5 was just building the container.*
- **Needs from you** — for **each** of solfit, hera, foodsaver, one sentence per prompt is plenty (I'll shape the prose):
  1. **the spark** — what made you start it?
  2. **how it works** — the one-liner a friend would understand
  3. **the wall** — the hardest part / what broke / what you almost gave up on
  4. **what i'd change** — what you'd do differently, or what it taught you
- **Done when:** all 3 `/projects/[slug]` pages show a real story instead of the "coming soon" fallback.

## Phase 7 — Real Bio + About Voice  ⬜
*Goal: your voice everywhere the placeholder copy still is.*
- **Home intro** (the ink "about me" panel, 2 paragraphs) — currently placeholder text, explicitly flagged as such in the copy itself.
- **`/about` hobbies** — currently 8 invented placeholder items (reading sci-fi, f1 on sundays, etc.) — none confirmed real.
- **`/about` fun facts** — currently 6 invented placeholder items — none confirmed real.
- **`/about` community** — ✅ already real (Girls Who Code, CSWN) — no action needed.
- **Needs from you:** rough bio notes (bullets fine, I'll draft prose); your actual hobbies; a few real fun facts. Optional: decide on a photo (yes → I design a spot; no → stays typographic).
- **Done when:** no placeholder notes remain anywhere.

## Phase 8 — Contact, For Real 🟡 mostly done
*Real email/phone/github/linkedin/devpost all wired. Only remaining piece is optional.*
- **Needs from you (optional):** do you want a real serverless form (Resend or Formspree, with validation + success state) instead of the current `mailto:` fallback? If not, this phase is effectively done.
- **Done when:** you've decided mailto-fallback is fine forever, or a real backend is wired and tested.

## Phase 9 — `/now` Page  ⬜
*Goal: one page that proves the site is alive, not a frozen snapshot.*
- New `src/data/now.ts` + `src/app/now/page.tsx`. Shows what you're building/learning/into right now, plus an honest "last updated" date. Linked from the footer.
- **Needs from you:** a few lines on what you're building, learning, and into at the moment.
- **Done when:** `/now` is live with real, current content.

## Phase 10 — Notes Engine (Scaffold Only)  ⬜
*Goal: make it a one-object edit to publish a note later — but don't force content now.*
- New `src/data/notes.ts` (starts empty) + `src/app/notes/page.tsx`. **Stays unlinked from nav/footer until it has ≥3 real entries** — an empty/near-empty notes page reads as an abandoned blog, so it's better hidden until it earns a spot.
- **Needs from you:** nothing yet. Write notes whenever you have something worth sharing.
- **Done when:** the page exists and renders correctly; visibility gated on real content.

## Phase 11 — Route Cleanup (Remaining Stubs)  ⬜
*Goal: no route is a stub.*
- `/projects` ✅ already resolved (Phase 5 — redirects to `/#projects`).
- `/research` and `/contact` still show stale "coming soon" content. Decide: redirect to the matching home anchor (recommended, consistent with `/projects`), or delete.
- **Needs from you:** confirm the redirect approach (or object).
- **Done when:** every route either has real content or redirects — nothing says "coming soon."

## Phase 12 — One Interactive Moment  ⬜
*Goal: one small thing a PDF/LinkedIn genuinely cannot do. Deliberately last and optional — don't start before Phases 6–7 land.*
- Candidates to pick from when we get here: a keyboard easter egg, a hover-preview on project cards, a tiny playful element on `/now`.
- **Needs from you:** a reaction once I show a candidate or two.
- **Done when:** it's built, tasteful, and doesn't feel gimmicky.

## Phase 13 — Motion & Delight Polish  ⬜
*Goal: from "clean" to "alive," carefully.*
- Fine-tune the ink-sheet reveal timing; add a touch fallback for the kinetic name on phones (hover-only today); polish section reveals; respect `prefers-reduced-motion`.
- **Needs from you:** reactions — motion is taste, we iterate live.
- **Done when:** it feels alive on desktop *and* phone, nothing feels gimmicky.

## Phase 14 — Responsive & Accessibility  ⬜
*Goal: works for everyone, on everything.*
- Full pass at 375 / 768 / 1024 / 1440+; keyboard nav, focus states, alt text, heading order, contrast (petal-on-blush is the risk), reduced-motion. Run the accessibility-review skill → WCAG 2.1 AA.
- **Needs from you:** ~10 minutes on your real phone telling me what feels off.
- **Done when:** the audit passes and it feels native on your phone.

## Phase 15 — Performance & SEO  ⬜
*Goal: fast, findable, shareable.*
- Lighthouse ≥ 90 across the board (image/font/bundle work). Metadata, Open Graph + social preview image, favicon, sitemap, robots.
- **Needs from you:** favicon direction (a "t"? the rose dot?) and what the share-card should say.
- **Done when:** Lighthouse ≥ 90 and pasting the URL in a chat shows a pretty card.

## Phase 16 — Launch 🚀  ⬜
*Goal: live on the real internet.*
- GitHub repo is already connected ✅. Left: connect **Vercel** (one-click import from the repo), buy + connect the **domain**, production QA (cross-browser/device), optional privacy-friendly analytics.
- **Needs from you:** a Vercel account + a domain choice (`trishathakkar.com` / `trisha.dev` / `trisha.space` / other).
- **Done when:** the site is live on your domain and you've sent the link to someone.

---

## Parking Lot (post-launch, only if you want)
- Blog/notes beyond the scaffold · guestbook ("leave a note") · Spotify now-playing / GitHub activity widget · seasonal themes · per-project case-study depth beyond the 4-part story template.

---

*Next up: **Phase 6 — write the 3 project stories.** Send answers to the 4 prompts for solfit, hera, and foodsaver whenever you're ready.*
