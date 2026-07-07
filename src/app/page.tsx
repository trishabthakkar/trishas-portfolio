"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import KineticName from "@/components/ui/KineticName";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Research from "@/components/sections/Research";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

const heroContactLinks = [
  { label: "email", href: "mailto:thakkart@purdue.edu" },
  { label: "github", href: "https://github.com/trishabthakkar" },
  { label: "linkedin", href: "https://www.linkedin.com/in/trisha-thakkar/" },
  { label: "devpost", href: "https://devpost.com/trishabthakkar/" },
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
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="transition-colors hover:text-rose"
                >
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

        {/* INTRO — ink panel slides up over the hero; a paragraph or two about me */}
        <div
          ref={inkRef}
          className="relative z-10 rounded-2xl bg-ink px-6 py-24 shadow-[0_-20px_60px_rgba(36,29,32,0.3)] md:py-32"
        >
          <div className="mx-auto max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-8 text-xs tracking-[0.35em] uppercase text-petal-deep"
            >
              about me
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="font-display text-3xl leading-snug text-blush md:text-4xl md:leading-snug"
            >
              i&apos;m happiest in the space{" "}
              <em className="text-petal-deep">between</em> things — training a model
              one week, shipping a full-stack app the next.
            </motion.p>

            <div className="mt-10 space-y-6 text-lg leading-relaxed text-petal">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: 0.15, duration: 0.6 }}
              >
                i&apos;m a cs + ai student at purdue who likes living across
                disciplines — some weeks that&apos;s machine learning, other weeks
                it&apos;s the web or a soldering iron. most of what i make starts as
                a &ldquo;what if we just…&rdquo; and turns into something people
                actually use.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                i care about the small things that make software feel human — the
                copy, the motion, the moment something clicks. always up for
                building with people who care as much as i do.{" "}
                <span className="text-ink-mute">
                  (this copy is a placeholder — make it yours.)
                </span>
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      <Projects />
      <Experience />
      <Research />
      <Skills />
      <Contact />
    </div>
  );
}
