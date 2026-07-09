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
- ✅ **Phase 6 — copy & structure cleanup.** Eyebrow labels trimmed, em dashes removed site-wide, "more about me" button added, dev indicator badge disabled, Collabera Digital kept on the timeline.
- ✅ **Phase 7 — design decisions & exploration.** Wordmark → italic "trisha"; selection color softened (`petal-deep`/`ink`); border roundness kept as-is except buttons moved off the pill shape to `rounded-xl`; capitalization and signature-accent-color stayed as-is.
- 🟡 **Contact form** — Email, phone, GitHub, LinkedIn all wired and correct. Message form works via a `mailto:` fallback (real backend is Phase 9).
- ✅ Repo on GitHub ([trishabthakkar/trishas-portfolio](https://github.com/trishabthakkar/trishas-portfolio)) and pushed.

**Next up: Phase 8** — the about page overhaul.

> **2026-07-08 — big feedback pass from Trisha.** Reorganized the remaining phases around her notes. The old "write project stories / real bio" phases are folded into the new content phase (10). See the **Open Decisions** section below — several phases are gated on those.

---

## Open Decisions (resolve together before/as we build)

These affect multiple phases, so we settle them as we go rather than guessing:

1. ~~Capitalization~~ — resolved 2026-07-09: keep all-lowercase everywhere. No change.
2. ~~Wordmark~~ — resolved 2026-07-09: italic "trisha" in the nav.
3. ~~Selection color~~ — resolved 2026-07-09: softer, less-pink pairing — `petal-deep` background, `ink` text — replacing rose/blush.
4. ~~Signature accent color~~ — resolved 2026-07-09: keep the current soft rose hover shadow, no glow effect or second accent color.
5. ~~Border roundness~~ — resolved 2026-07-09: keep current roundness everywhere (cards `rounded-3xl`, panels `rounded-2xl`) EXCEPT buttons, which moved off the full pill shape to a slightly-rounded rectangle (`rounded-xl`) — applies to `Button.tsx`, the contact submit button, and the github/devpost buttons on project story pages.
6. ~~Experience timeline with only 1 internship~~ — resolved 2026-07-08: Trisha put Collabera Digital back for now, so the timeline has 2 entries again.
7. **Community grouping** — split into Leadership / Community / Community Service, or keep one section? (Phase 8.)
8. **"NGP TFS"** — what does it stand for + Trisha's cofounder role? (Blocks placing it. Phase 8.)
9. **Contact backend** — Resend vs Formspree for the real send-message form. (Phase 9.)

---

## Phase Status

| # | Phase | Needs from you | Status |
|---|-------|----------------|--------|
| 1 | Nav & scroll behavior | nothing | ✅ done |
| 2 | Real projects (data) | — | ✅ done |
| 3 | Real experience & skills | — | ✅ done |
| 4 | Research section (bonus) | — | ✅ done |
| 5 | Project story pages + github/devpost icons | — | ✅ done |
| 6 | Copy & structure cleanup | nothing (decision-free) | ✅ done |
| 7 | Design decisions & exploration | reactions to options | ✅ done |
| 8 | About page overhaul | community details, NGP TFS | ⬜ **next** |
| 9 | Contact backend (real send) | Resend/Formspree account | ⬜ |
| 10 | Real written content | bio para, story answers, links, research | ⬜ |
| 11 | `/now` page (living) | what you're building/learning now | ⬜ |
| 12 | Notes engine (scaffold only) | nothing yet | ⬜ |
| 13 | Route cleanup (research/contact stubs) | one decision | ⬜ |
| 14 | One interactive moment | reactions | ⬜ |
| 15 | Motion & delight polish | reactions | ⬜ |
| 16 | Responsive & accessibility | 10 min on your phone | ⬜ |
| 17 | Performance & SEO | favicon / OG preferences | ⬜ |
| 18 | Launch (Vercel + domain) | vercel account + domain | ⬜ |

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

## Phase 6 — Copy & Structure Cleanup  ✅ done
*Goal: knock out every decision-free text/label/trim edit from the 2026-07-08 feedback in one batch. No design calls needed here.*

**Global**
- Remove **all em dashes (—)** from site-facing copy (data files + section components); rewrite as commas/periods.
- Disable the **Next.js dev "N" badge** (`devIndicators` in `next.config.ts`). *(Dev-only; never shows in prod — cosmetic for preview.)*

**Home — section labels/titles/descriptions** (`src/components/sections/*`)
- **About intro** (ink panel, `page.tsx`): remove the "about me" eyebrow label. (Paragraph content comes in Phase 10.)
- **Projects:** remove "things i've built" eyebrow; title `selected work` → **`projects`**; description → *"projects across software, hardware, and ai that i have built and learned from"*.
- **Experience:** remove the "work" eyebrow **and** the description line; keep only the **`experience`** title.
- **Research:** remove "what i'm exploring" eyebrow; description → *"areas of research i am interested in and working on"*.
- **Skills:** remove "what i work with" eyebrow; simplify the description.
- **Contact:** remove "say hi" eyebrow; description → *"open to internships and collaborations. i'd love to hear from you!"*; **remove the availability info row**; **remove devpost** from the socials row.

**Home — data + structure**
- ~~Remove Collabera Digital~~ — removed, then **restored 2026-07-08** (Trisha wants it back on the timeline for now).
- Add a **"more about me" button** after the Skills section linking to `/about`.

- **Done when:** every listed label/title/description matches the new copy, the availability/devpost bits are gone, the about button exists, and no em dashes remain in site copy.

## Phase 7 — Design Decisions & Exploration  ✅ done
*Goal: settle the cross-cutting visual calls, with live options where taste is involved. Resolve Open Decisions #1–#5.*

Built a throwaway `/design-lab` page rendering live options for all five decisions; Trisha reviewed and chose:
- Capitalization: keep all-lowercase (no change).
- Wordmark: italic "trisha".
- Selection color: softer pairing, `petal-deep` bg / `ink` text.
- Signature accent: keep current soft rose hover shadow, no glow/second color.
- Border roundness: keep current everywhere, except buttons moved from full pill to `rounded-xl`.

`/design-lab` deleted after decisions were applied.

## Phase 8 — About Page Overhaul  ⬜
*Goal: restructure and refresh `/about` per the feedback.*
- Rename heading **"beyond the résumé" → "more about me"**; remove the "the rest of me" eyebrow and all section eyebrow labels (off the clock / giving back / the small print).
- **New: Education** section — Purdue University, B.S. in Computer Science and AI.
- **Hobbies (real):** swimming · reading · chasing good coffee · f1 on the weekends · baking (badly) · long walks + music · trying new cuisines.
- **Community restructure** (Open Decision #7) — likely three buckets:
  - **Leadership:** CSWN (marketing director), Girls Who Code (logistics officer), cofounder of **NGP TFS** *(Open Decision #8 — need full name + role)*.
  - **Community / orgs:** **WISP** (Women in Science Program — member since Aug 2025, mentor from May 2026); **RTC** (Rewrite the Code — member).
  - **Community service:** Food Finders (Lafayette); UAE service work *(pull from LinkedIn)*.
- **Fun facts:** make **smaller / less prominent**; revise content (drop "always down for a hackathon," "fueled by coffee+deadlines," etc.).
- **Formatting refresh** of the whole page's layout.
- **Needs from you:** NGP TFS details, UAE service specifics, revised fun-fact content.
- **Done when:** the page reflects the new structure and real content, no placeholder items remain.

## Phase 9 — Contact Backend (Real Send)  ⬜
*Goal: a visitor can send you a message/email directly from the site — no mailto handoff.*
- Wire a real serverless form (Resend or Formspree — Open Decision #9) with validation, success/error states, and spam guard. Replaces the current `mailto:` fallback in `Contact.tsx`.
- **Needs from you:** a Resend or Formspree account + API key/endpoint.
- **Done when:** a test message submitted on the site actually reaches your inbox.

## Phase 10 — Real Written Content  ⬜
*Goal: replace the remaining placeholder prose with your real writing.*
- **Home about-intro paragraph(s)** (the ink panel) — you're writing this.
- **Project story pages** — the 4 prompts (spark / how it works / the wall / what i'd change) × solfit, hera, foodsaver → fills the `/projects/[slug]` pages.
- **Real per-project links** — replace the interim personal-devpost links with each project's actual repo/demo/devpost.
- **Research refinement** — tighten the 3 research entries.
- *(Deferred, your call: whether to expand the Zealogics internship into more detail.)*
- **Needs from you:** the writing above.
- **Done when:** no placeholder copy remains and every project link is real.

## Phase 11 — `/now` Page  ⬜
*Goal: one page that proves the site is alive, not a frozen snapshot.*
- New `src/data/now.ts` + `src/app/now/page.tsx`. What you're building/learning/into right now + an honest "last updated" date. Linked from the footer.
- **Needs from you:** a few current lines.
- **Done when:** `/now` is live with real, current content.

## Phase 12 — Notes Engine (Scaffold Only)  ⬜
*Goal: make it a one-object edit to publish a note later — but don't force content now.*
- New `src/data/notes.ts` (starts empty) + `src/app/notes/page.tsx`. **Stays unlinked from nav/footer until it has ≥3 real entries** — an empty notes page reads as an abandoned blog.
- **Done when:** the page exists and renders correctly; visibility gated on real content.

## Phase 13 — Route Cleanup (Remaining Stubs)  ⬜
*Goal: no route is a stub.*
- `/projects` ✅ already resolved (Phase 5 redirects to `/#projects`).
- `/research` and `/contact` still show stale "coming soon" content. Redirect to the matching home anchor (consistent with `/projects`), or delete.
- **Done when:** every route either has real content or redirects.

## Phase 14 — One Interactive Moment  ⬜
*Goal: one small thing a PDF/LinkedIn genuinely cannot do. Deliberately late and optional.*
- Candidates: a keyboard easter egg, a hover-preview on project cards, a tiny playful element on `/now`.
- **Done when:** it's built, tasteful, and doesn't feel gimmicky.

## Phase 15 — Motion & Delight Polish  ⬜
*Goal: from "clean" to "alive," carefully.*
- Fine-tune the ink-sheet reveal timing; add a touch fallback for the kinetic name on phones (hover-only today); polish section reveals; respect `prefers-reduced-motion`.
- **Needs from you:** reactions — motion is taste, we iterate live.
- **Done when:** it feels alive on desktop *and* phone, nothing feels gimmicky.

## Phase 16 — Responsive & Accessibility  ⬜
*Goal: works for everyone, on everything.*
- Full pass at 375 / 768 / 1024 / 1440+; keyboard nav, focus states, alt text, heading order, contrast (petal-on-blush is the risk), reduced-motion. Run the accessibility-review skill → WCAG 2.1 AA.
- **Needs from you:** ~10 minutes on your real phone telling me what feels off.
- **Done when:** the audit passes and it feels native on your phone.

## Phase 17 — Performance & SEO  ⬜
*Goal: fast, findable, shareable.*
- Lighthouse ≥ 90 across the board (image/font/bundle work). Metadata, Open Graph + social preview image, favicon, sitemap, robots.
- **Needs from you:** favicon direction (a "t"? the rose dot?) and what the share-card should say.
- **Done when:** Lighthouse ≥ 90 and pasting the URL in a chat shows a pretty card.

## Phase 18 — Launch 🚀  ⬜
*Goal: live on the real internet.*
- GitHub repo is already connected ✅. Left: connect **Vercel** (one-click import from the repo), buy + connect the **domain**, production QA (cross-browser/device), optional privacy-friendly analytics.
- **Needs from you:** a Vercel account + a domain choice (`trishathakkar.com` / `trisha.dev` / `trisha.space` / other).
- **Done when:** the site is live on your domain and you've sent the link to someone.

---

## Parking Lot (post-launch, only if you want)
- Blog/notes beyond the scaffold · guestbook ("leave a note") · Spotify now-playing / GitHub activity widget · seasonal themes · per-project case-study depth beyond the 4-part story template.

---

*Next up: **Phase 6 — copy & structure cleanup** (decision-free, I can just do it). In parallel, we start chipping at the Open Decisions above so Phases 7–8 aren't blocked.*
