# PLAN.md — Build Phases

**The working checklist.** One phase at a time, top to bottom. Each phase is small enough to finish in one session, ends with something visible, and doesn't start until the one before it is checked off. (`PRD.md` holds the full requirements/vision; this doc is what we actually work from.)

**How to use:** open a session and say "let's do phase N" — or just "next phase." When a phase is done and you're happy, we mark it ✅ here and commit.

---

## Where things stand (2026-07-04)

Already done, so you don't re-plan it:
- ✅ Design locked — "soft power" (blush + ink + rose, Fraunces, kinetic name). `/style-guide` renders the system.
- ✅ Home page structure — continuous scroll: hero → ink index panel → about → projects → research → contact, all on `/`.
- ✅ Hero — mid-size kinetic name, first-person statement, contact rail (email · github · linkedin) on the first screen.
- ✅ Committed through `58dd577`.

---

## Phase Status

| # | Phase | Needs from you | Status |
|---|-------|----------------|--------|
| 1 | Nav & scroll behavior | nothing | ✅ |
| — | Home restructure + sections + /about page | real content | 🟡 layouts built, placeholders in |
| 2 | About section | bio notes | 🟡 layout done |
| 3 | Projects section | real projects + links | 🟡 layout done |
| 4 | Research section | — | ⬜ dropped (not in current structure) |
| 5 | Contact, for real | handles + form choice | ⬜ |
| 6 | Route cleanup | one decision | ⬜ |
| 7 | Motion & delight | taste reactions | ⬜ |
| 8 | Responsive & accessibility | test on your phone | ⬜ |
| 9 | Performance & SEO | favicon/OG preferences | ⬜ |
| 10 | Launch | domain + accounts | ⬜ |

---

## Home Restructure (2026-07-04) 🟡
*Big redesign per Trisha's direction — layouts built, placeholder content in.*

- Killed the ink "menu"/index panel. Home now flows **hero → ink "about me" intro (2 paragraphs, keeps the slide-up reveal) → projects → experience → skills → contact (ink)**. Mostly light with the two ink bookends.
- **Projects** = placecards (`src/data/projects.ts`): context caption, name, blurb, tech tags, external-link arrow; each card hyperlinks out (`href` = devpost/site — currently `#`).
- **Experience** (`src/data/experience.ts`) = drawing timeline. **Skills** (`src/data/skills.ts`) = category cards with meter bars that fill on scroll. Unique animation per section.
- Separate **`/about` page**: hobbies (pill cloud), community service (cards), fun facts (grid) — all placeholder copy.
- Research dropped from home + nav (route stub still orphaned → phase 6).
- **Still needs from Trisha:** real project data + links, real experience/skills, real bio + about-page copy. All in `src/data/*` and the intro/about files, clearly marked as placeholders.

## Phase 1 — Nav & Scroll Behavior ✅
*Goal: the nav understands the single-page home.*

*Done 2026-07-04: nav links point at home anchors (reordered to match page order); scroll-spy rose pill tracks the section on screen (via a scroll listener + 30%-viewport line); `scroll-mt-28` keeps headings clear of the floating nav; mobile hides the redundant wordmark and spaces the five links evenly.*

- Point nav links at home anchors (`/#about`, `/#projects`, …) instead of the separate route pages.
- **Scroll-spy**: the rose pill highlights the section currently on screen as you scroll.
- Smooth-scroll offset checked so headings never hide under the floating nav.
- Mobile nav pass (the pill is cramped at 375px — decide: tighter pill, icons, or a menu).
- **Needs from you:** nothing — react to the result.
- **Done when:** you can navigate the whole home page from the nav, the active pill tracks scrolling, and it works on mobile.

## Phase 2 — About Section
*Goal: replace the two-line stub with a real "who i am."*

- Bio in your voice (2–3 short paragraphs, lowercase, warm).
- Tech stack display using the locked system (petal chips / cards).
- Optional: "my journey" timeline, fun-facts block.
- **Needs from you:** rough bio notes (bullet points are fine — I'll draft the copy and you edit), and which extras you want (timeline? fun facts?).
- **Done when:** a stranger reading only this section gets who you are in ~30 seconds, and you'd show it to a recruiter.

## Phase 3 — Projects Section
*Goal: the core portfolio, with real work.*

- Data model in `src/data/projects.ts` (title, blurb, tags, tech, links, image?, date) — adding a project later = adding one object.
- Card grid on the home section using the locked `Card` style.
- Decide together: click behavior (external link vs. per-project detail page vs. modal).
- Seed with your real projects.
- **Needs from you:** 3–5 projects — for each: name, one-liner, tech used, link (github/demo), and anything visual if you have it.
- **Done when:** real projects render from data and every card goes somewhere useful.

## Phase 4 — Research Section
*Goal: academic presence.*

- Research interests overview (short prose).
- If you have papers/posters: publications list in `src/data/research.ts` (title, venue, year, authors, link). If not yet: a "currently exploring" block that doesn't look empty.
- **Needs from you:** research interests, any publications/ongoing work, lab/advisor mentions if wanted.
- **Done when:** the section reads as credible whether or not there are publications yet.

## Phase 5 — Contact, For Real
*Goal: every contact path actually works.*

- Replace the `#` placeholders with your real GitHub + LinkedIn (hero rail, contact section, footer).
- Optional but recommended: contact form (serverless route + Resend or Formspree) with validation, success/error states, honeypot spam guard.
- **Needs from you:** GitHub + LinkedIn URLs; yes/no on the form (and Resend vs. Formspree — I'll recommend based on setup effort).
- **Done when:** a test message lands in your inbox and every link resolves.

## Phase 6 — Route Cleanup
*Goal: one architecture, no dead ends.*

- The old `/about`, `/projects`, `/research`, `/contact` route pages still exist but nothing links to them. Decide: **(a)** delete them and redirect to home anchors, or **(b)** grow them into deep-dive pages later.
- Implement the choice; update the footer/style-guide links accordingly.
- **Needs from you:** that one decision (I'll recommend (a) — redirects — until there's enough content to justify deep-dives).
- **Done when:** no route is a stub; every URL either has real content or redirects.

## Phase 7 — Motion & Delight
*Goal: from "clean" to "alive" — carefully.*

- Fine-tune the ink-sheet reveal timing (currently slightly abrupt).
- Kinetic-name touch fallback for phones (letters have hover-only physics today — add a tap ripple or gentle idle motion).
- Scroll-reveal polish on sections; one small easter egg if you want one.
- Everything respects `prefers-reduced-motion`.
- **Needs from you:** reactions — motion is taste, we iterate live.
- **Done when:** the site feels alive on desktop *and* phone, and nothing feels gimmicky to you.

## Phase 8 — Responsive & Accessibility
*Goal: works for everyone, on everything.*

- Full pass at 375 / 768 / 1024 / 1440+ on every section.
- Keyboard nav, visible focus states, alt text, heading order, contrast check (petal-on-blush combos are the risk), reduced-motion audit.
- Run the accessibility-review skill; fix to WCAG 2.1 AA.
- **Needs from you:** 10 minutes on your actual phone telling me what feels off.
- **Done when:** the audit passes and it feels native on your phone.

## Phase 9 — Performance & SEO
*Goal: fast, findable, shareable.*

- Lighthouse ≥ 90 across the board (image optimization, lazy-loading, font strategy).
- Metadata per section, Open Graph + social preview image (design one in the soft-power system), favicon, sitemap, robots.
- **Needs from you:** favicon direction (a "t"? the rose dot? something else) and what the share-card should say.
- **Done when:** Lighthouse ≥ 90 and pasting the URL in a chat shows a pretty card.

## Phase 10 — Launch 🚀
*Goal: live on the real internet.*

- Create GitHub repo, push, connect Vercel.
- Buy + connect the domain (open question from PRD: `trishathakkar.com` / `trisha.dev` / `trisha.space` / other).
- Production QA: cross-browser, cross-device, 404 page, analytics (privacy-friendly) if wanted.
- **Needs from you:** GitHub account, Vercel account, domain choice + purchase.
- **Done when:** the site is live on your domain and you've sent the link to someone.

---

## Parking Lot (post-launch, only if you want)
- `/now` page · blog/notes · guestbook ("leave a sparkle") · Spotify now-playing · GitHub activity widget · seasonal themes · per-project case-study pages (Phase 6 option b).

---

*Next up: Phase 1 — say "let's do phase 1" in any session.*
