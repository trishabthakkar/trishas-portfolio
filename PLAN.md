# PLAN.md — Build Phases

**The working checklist.** One phase at a time, top to bottom. Each phase is small enough to finish in one session, ends with something visible, and doesn't start until the one before it is checked off. (`PRD.md` holds the full requirements/vision; this doc is what we actually work from.)

**How to use:** open a session and say "let's do phase N" — or just "next phase." When a phase is done and you're happy, we mark it ✅ here and commit.

---

## Where things stand (updated 2026-07-06)

The design is locked and the whole site **skeleton + every section layout is already built**. What's left is mostly **real content → polish → launch.**

**Done:**
- ✅ Design locked — "soft power" (blush + ink + rose, Fraunces, kinetic name). `/style-guide` renders the system.
- ✅ **Phase 1 — nav & scroll behavior** (full-width bar, rose scroll-spy underline, mobile pass).
- ✅ Section *layouts* built in the 2026-07-04 redesign — home flows **hero → ink "about me" intro → projects → experience → skills → contact**, plus a separate **`/about`** page (hobbies · community · fun facts). Each section has its own animation. **But it's all running on placeholder content.**
- ✅ Repo on GitHub ([trishabthakkar/trishas-portfolio](https://github.com/trishabthakkar/trishas-portfolio)) and pushed.

**Not done yet:** real content everywhere, working contact links/form, route cleanup, motion polish, accessibility, performance/SEO, and the actual deploy.

> Because the layouts exist, Phases 2–4 below are **"drop in your real content,"** not "build from scratch." That's the fast part — I just need the words/links from you.

---

## Phase Status

| # | Phase | Needs from you | Status |
|---|-------|----------------|--------|
| 1 | Nav & scroll behavior | nothing | ✅ done |
| 2 | Real projects (data + links) | your projects + links | ⬜ **next** |
| 3 | Real experience & skills | your roles + skills | ⬜ |
| 4 | Real bio + about page | bio / hobbies / service notes | ⬜ |
| 5 | Contact, for real | github + linkedin, form y/n | ⬜ |
| 6 | Route cleanup | one decision | ⬜ |
| 7 | Motion & delight polish | reactions | ⬜ |
| 8 | Responsive & accessibility | 10 min on your phone | ⬜ |
| 9 | Performance & SEO | favicon / OG preferences | ⬜ |
| 10 | Launch (Vercel + domain) | vercel account + domain | ⬜ |

---

## Phase 1 — Nav & Scroll Behavior ✅
*Done 2026-07-05. Full-width top bar, links point at home anchors, rose scroll-spy underline tracks the active section, `scroll-mt` keeps headings clear of the bar, mobile spaces the links evenly.*

## Phase 2 — Real Projects  ⬜ next
*Goal: turn the placecards into your actual work.*
- The layout + card component are **done**. This is a data swap in `src/data/projects.ts`, plus wiring each `href` (currently `#`).
- **Needs from you — per project:** name · context/award (e.g. "1st place · hackathon") · one-line blurb · tech tags · the devpost/site link.
- **Done when:** every card is a real project and every card links somewhere real.

## Phase 3 — Real Experience & Skills  ⬜
*Goal: real roles on the timeline, real skills in the cards.*
- Layouts are **done** (experience timeline, skills cards with meter bars). Data swap in `src/data/experience.ts` and `src/data/skills.ts`.
- **Needs from you:** roles (org · title · dates · 1–2 line blurb); skills grouped by category — **and** a call: keep the proficiency meter bars or switch skills to plain tag chips (no implied levels)?
- **Done when:** real experience + skills render, no placeholders left.

## Phase 4 — Real Bio + About Page  ⬜
*Goal: your voice everywhere the placeholder copy is.*
- Two spots: the home **ink "about me" intro** (2 paragraphs) and the **`/about`** page (hobbies · community service · fun facts).
- **Needs from you:** rough bio notes (bullets are fine — I draft, you edit); a hobbies list; community/service work; a few fun facts. Optional: decide on a photo of you (yes → I design a spot; no → stays typographic).
- **Done when:** it reads unmistakably like you, and the "(placeholder)" note is gone from the intro.

## Phase 5 — Contact, For Real  ⬜
*Goal: every contact path actually works.*
- Replace the `#` github/linkedin placeholders (hero rail + contact section). Optional: a real contact form (serverless via Resend or Formspree) with validation, success/error states, spam guard.
- **Needs from you:** GitHub + LinkedIn URLs; yes/no on the form (I'll recommend Resend vs. Formspree).
- **Done when:** every link resolves; if there's a form, a test message reaches your inbox. *(Email already updated to thakkart@purdue.edu.)*

## Phase 6 — Route Cleanup  ⬜
*Goal: one architecture, no dead ends.*
- Orphaned stub routes still exist (`/projects`, `/research`, `/contact`; old `/about` is now the real personal page). Decide: **(a)** delete/redirect them to home anchors, or **(b)** grow them into per-project deep-dive pages later.
- **Needs from you:** that one decision (I recommend (a) redirects for now).
- **Done when:** no route is a stub — every URL has real content or redirects.

## Phase 7 — Motion & Delight  ⬜
*Goal: from "clean" to "alive," carefully.*
- Fine-tune the ink-sheet reveal timing; add a touch fallback for the kinetic name on phones (hover-only today); polish section reveals; respect `prefers-reduced-motion`; optional small easter egg.
- **Needs from you:** reactions — motion is taste, we iterate live.
- **Done when:** it feels alive on desktop *and* phone, nothing feels gimmicky.

## Phase 8 — Responsive & Accessibility  ⬜
*Goal: works for everyone, on everything.*
- Full pass at 375 / 768 / 1024 / 1440+; keyboard nav, focus states, alt text, heading order, contrast (petal-on-blush is the risk), reduced-motion. Run the accessibility-review skill → WCAG 2.1 AA.
- **Needs from you:** ~10 minutes on your real phone telling me what feels off.
- **Done when:** the audit passes and it feels native on your phone.

## Phase 9 — Performance & SEO  ⬜
*Goal: fast, findable, shareable.*
- Lighthouse ≥ 90 across the board (image/font/bundle work). Metadata, Open Graph + social preview image (designed in the soft-power system), favicon, sitemap, robots.
- **Needs from you:** favicon direction (a "t"? the rose dot?) and what the share-card should say.
- **Done when:** Lighthouse ≥ 90 and pasting the URL in a chat shows a pretty card.

## Phase 10 — Launch 🚀  ⬜
*Goal: live on the real internet.*
- GitHub repo is already connected ✅. Left: connect **Vercel** (one-click import from the repo), buy + connect the **domain**, production QA (cross-browser/device, 404 page), optional privacy-friendly analytics.
- **Needs from you:** a Vercel account + a domain choice (`trishathakkar.com` / `trisha.dev` / `trisha.space` / other).
- **Done when:** the site is live on your domain and you've sent the link to someone.

---

## Parking Lot (post-launch, only if you want)
- `/now` page · blog/notes · guestbook ("leave a note") · Spotify now-playing · GitHub activity widget · seasonal themes · per-project case-study pages (Phase 6 option b) · a research section if you decide you want one back.

---

*Next up: **Phase 2 — Real Projects.** Send me your projects (name, context, blurb, tech, link) and I'll wire them in.*
