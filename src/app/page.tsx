"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import KineticName from "@/components/ui/KineticName";
import Divider from "@/components/ui/Divider";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

const indexLinks = [
  { n: "01", label: "about", href: "#about", blurb: "who i am" },
  { n: "02", label: "projects", href: "#projects", blurb: "things i've built" },
  { n: "03", label: "research", href: "#research", blurb: "what i'm exploring" },
  { n: "04", label: "contact", href: "#contact", blurb: "say hi" },
];

const contactLinks = [
  { label: "email", href: "mailto:mitta143@purdue.edu", handle: "mitta143@purdue.edu" },
  { label: "github", href: "#", handle: "add link" },
  { label: "linkedin", href: "#", handle: "add link" },
];

const heroContactLinks = [
  { label: "email", href: "mailto:mitta143@purdue.edu" },
  { label: "github", href: "#" },
  { label: "linkedin", href: "#" },
];

export default function Home() {
  const inkRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: inkRef,
    offset: ["start end", "start start"],
  });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.25]);

  return (
    <div>
      {/* REVEAL SCOPE — hero stays pinned only while the ink panel slides over it */}
      <div className="relative">
        {/* HERO */}
        <motion.section
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="sticky top-0 flex min-h-svh flex-col items-center justify-center px-6 text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 text-xs tracking-[0.35em] uppercase text-ink-mute"
          >
            hi, i&apos;m
          </motion.p>

          <KineticName />

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-7 max-w-md text-base leading-relaxed text-ink-soft md:text-lg"
          >
            cs + ai @ purdue. i like experimenting with ai/ml and full stack
            development, and building things that sit somewhere in between.
          </motion.p>

          {/* CONTACT RAIL — surfaced with the intro on the first screen */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.7 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-mono text-xs text-ink-mute"
          >
            {heroContactLinks.map(({ label, href }, i) => (
              <span key={label} className="flex items-center gap-x-5">
                <a href={href} className="transition-colors hover:text-rose">
                  {label}
                </a>
                {i < heroContactLinks.length - 1 && (
                  <span aria-hidden className="text-petal-deep">
                    ·
                  </span>
                )}
              </span>
            ))}
          </motion.div>
        </motion.section>

        {/* INK PANEL — statement + in-page index, slides up over the hero */}
        <div
          ref={inkRef}
          className="relative z-10 rounded-[3rem] bg-ink px-6 pb-20 pt-20 shadow-[0_-20px_60px_rgba(43,15,30,0.3)]"
        >
          <div className="mx-auto max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="font-display text-3xl leading-snug text-blush md:text-5xl md:leading-snug"
            >
              i like teaching machines to be{" "}
              <em className="text-petal-deep">clever</em> and making the web feel{" "}
              <em className="text-petal-deep">a little more human</em>.
            </motion.p>

            <Divider dark className="my-16" />

            <nav aria-label="jump to section">
              {indexLinks.map(({ n, label, href, blurb }, i) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                >
                  <a
                    href={href}
                    className="group flex items-baseline justify-between gap-4 border-b border-ink-soft/40 py-7 transition-colors hover:border-rose"
                  >
                    <span className="flex items-baseline gap-5">
                      <span className="font-mono text-sm text-ink-mute">{n}</span>
                      <span className="font-display text-4xl font-semibold text-blush transition-all duration-300 group-hover:translate-x-3 group-hover:italic group-hover:text-rose md:text-6xl">
                        {label}
                      </span>
                    </span>
                    <span className="hidden shrink-0 text-sm text-ink-mute transition-colors group-hover:text-petal-deep sm:block">
                      {blurb} <span aria-hidden>↓</span>
                    </span>
                  </a>
                </motion.div>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-28 px-6 py-28">
        <div className="mx-auto max-w-4xl">
          <SectionHeading label="who i am" title="about" />
          <p className="max-w-prose text-lg leading-relaxed text-ink-soft">
            cs + ai student at purdue who loves experimenting with ai/ml and full
            stack development — building things that sit somewhere in between.
          </p>
          <p className="mt-6 max-w-prose italic text-ink-mute">
            full about section coming soon — we&apos;ll design this together.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="scroll-mt-28 px-6 py-28">
        <div className="mx-auto max-w-4xl">
          <SectionHeading label="things i've built" title="projects" />
          <div className="grid gap-4 sm:grid-cols-2">
            {[1, 2].map((i) => (
              <Card key={i}>
                <h3 className="font-display text-xl font-semibold text-ink">
                  project {i}
                </h3>
                <p className="mt-2 text-sm text-ink-soft">
                  placeholder card — real projects go here once we seed content.
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCH */}
      <section id="research" className="scroll-mt-28 px-6 py-28">
        <div className="mx-auto max-w-4xl">
          <SectionHeading label="what i'm exploring" title="research" />
          <p className="max-w-prose italic text-ink-mute">
            research interests + publications coming soon.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-28 rounded-[3rem] bg-ink px-6 py-28">
        <div className="mx-auto max-w-4xl">
          <SectionHeading label="say hi" title="get in touch" dark />
          <p className="mb-10 max-w-prose text-lg leading-relaxed text-petal-deep">
            i&apos;d love to hear from you — whether it&apos;s about collaborating,
            research, or just saying hi.
          </p>
          <ul className="divide-y divide-ink-soft/40 border-y border-ink-soft/40">
            {contactLinks.map(({ label, href, handle }) => (
              <li key={label}>
                <a
                  href={href}
                  className="group flex items-baseline justify-between gap-4 py-5"
                >
                  <span className="font-display text-2xl font-semibold text-blush transition-colors group-hover:text-rose">
                    {label}
                  </span>
                  <span className="text-sm text-ink-mute transition-colors group-hover:text-petal-deep">
                    {handle} <span aria-hidden>→</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
