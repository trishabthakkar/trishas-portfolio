"use client";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

// PLACEHOLDER CONTENT — swap the words for your real hobbies, service, and facts.

const hobbies = [
  "reading sci-fi",
  "chasing good coffee",
  "sketching ui for fun",
  "f1 on sundays",
  "baking (badly)",
  "long walks + podcasts",
  "thrifting",
  "trying new recipes",
];

const service = [
  {
    org: "girls who code",
    role: "logistics officer",
    blurb: "aug 2025 — present · helping run the logistics behind workshops that get more girls building things early.",
  },
  {
    org: "cswn",
    role: "marketing director",
    blurb: "aug 2025 — present · leading marketing for the computer science women's network at purdue.",
  },
];

const facts = [
  { label: "currently", value: "building this very site" },
  { label: "learning", value: "how to make motion feel effortless" },
  { label: "always", value: "down for a hackathon" },
  { label: "secretly", value: "a typography nerd" },
  { label: "fueled by", value: "chai + deadlines" },
  { label: "dream project", value: "something that helps people" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
});

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      {/* intro */}
      <motion.p
        {...fadeUp()}
        className="mb-4 text-xs tracking-[0.35em] uppercase text-ink-mute"
      >
        the rest of me
      </motion.p>
      <motion.h1
        {...fadeUp(0.05)}
        className="font-display text-5xl font-semibold tracking-tight text-ink md:text-6xl"
      >
        beyond the <em className="text-rose">résumé</em>
      </motion.h1>
      <motion.p
        {...fadeUp(0.12)}
        className="mt-6 max-w-prose text-lg leading-relaxed text-ink-soft"
      >
        the work lives on the home page. this is everything else — what i do for
        fun, who i build for, and a few things that probably say more about me than
        my stack does.
      </motion.p>

      {/* HOBBIES — playful pill cloud that pops in */}
      <section className="mt-24">
        <SectionHeading label="off the clock" title="hobbies" />
        <div className="-mt-4 flex flex-wrap gap-3">
          {hobbies.map((h, i) => (
            <motion.span
              key={h}
              initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.05, type: "spring", stiffness: 300, damping: 18 }}
              whileHover={{ y: -4, rotate: i % 2 ? 2 : -2 }}
              className="cursor-default rounded-full border border-petal bg-white/70 px-4 py-2 text-sm text-ink-soft transition-colors hover:border-rose hover:text-rose"
            >
              {h}
            </motion.span>
          ))}
        </div>
      </section>

      {/* COMMUNITY — cards slide in from the left */}
      <section className="mt-24">
        <SectionHeading label="giving back" title="community" />
        <div className="-mt-4 space-y-4">
          {service.map((s, i) => (
            <motion.div
              key={s.org}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-3xl border border-petal bg-white/60 p-6 backdrop-blur-sm transition-colors hover:border-petal-deep"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-xl font-semibold text-ink">
                  {s.org}
                </h3>
                <span className="font-mono text-xs uppercase tracking-wider text-rose">
                  {s.role}
                </span>
              </div>
              <p className="mt-2 text-ink-soft">{s.blurb}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FUN FACTS — grid of little cards */}
      <section className="mt-24">
        <SectionHeading label="the small print" title="fun facts" />
        <div className="-mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {facts.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="rounded-2xl border border-petal bg-white/60 p-5"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-mute">
                {f.label}
              </p>
              <p className="mt-1.5 font-display text-lg text-ink">{f.value}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
