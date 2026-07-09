"use client";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const hobbies = [
  "swimming",
  "reading",
  "chasing good coffee",
  "f1 on the weekends",
  "baking (badly)",
  "long walks + music",
  "trying new cuisines",
];

type CommunityItem = {
  org: string;
  role: string;
  blurb: string;
};

const leadership: CommunityItem[] = [
  {
    org: "cswn",
    role: "marketing director",
    blurb: "aug 2025 - present · leading marketing for the computer science women's network at purdue.",
  },
  {
    org: "girls who code",
    role: "logistics officer",
    blurb: "aug 2025 - present · helping run the logistics behind workshops that get more girls building things early.",
  },
  {
    org: "team future shaper",
    role: "co-founder",
    blurb:
      "jan 2022 - present · an ngo in abu dhabi that empowers youth through skill-building and confidence work: webinars, weekly online classes for underprivileged kids in india, and community volunteering.",
  },
];

const community: CommunityItem[] = [
  {
    org: "wisp",
    role: "member, mentor",
    blurb: "member since aug 2025, mentor starting may 2026 · purdue's women in science program.",
  },
  {
    org: "rtc",
    role: "member",
    blurb: "rewrite the code · a community for women in tech.",
  },
];

const communityService: CommunityItem[] = [
  {
    org: "food finders",
    role: "volunteer",
    blurb: "ongoing · weekend shifts at the lafayette food bank, organizing food and helping at the front desk.",
  },
  {
    org: "emirates environmental group",
    role: "student volunteer",
    blurb: "mar 2022 - aug 2025 · recurring paper walk clean-ups across abu dhabi, 1,000+ kg of waste paper and plastic recycled.",
  },
  {
    org: "volunteering.ae",
    role: "licensed volunteer",
    blurb: "aug 2023 - aug 2025 · a book-recycling drive (500kg collected) and meal distribution for underprivileged workers.",
  },
];

const communityGroups = [
  { title: "leadership", items: leadership },
  { title: "community", items: community },
  { title: "community service", items: communityService },
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
      <motion.h1
        {...fadeUp()}
        className="font-display text-5xl font-semibold tracking-tight text-ink md:text-6xl"
      >
        more about <em className="text-rose">me</em>
      </motion.h1>
      <motion.p
        {...fadeUp(0.08)}
        className="mt-6 max-w-prose text-lg leading-relaxed text-ink-soft"
      >
        the work lives on the home page. this is everything else: what i do for
        fun, who i build for, and a few things that probably say more about me than
        my stack does.
      </motion.p>

      {/* EDUCATION */}
      <section className="mt-24">
        <SectionHeading title="education" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="-mt-4 rounded-3xl border border-petal bg-white/60 p-6 backdrop-blur-sm"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-display text-xl font-semibold text-ink">
              purdue university
            </h3>
            <span className="font-mono text-xs uppercase tracking-wider text-rose">
              b.s. computer science + ai
            </span>
          </div>
        </motion.div>
      </section>

      {/* HOBBIES: playful pill cloud that pops in */}
      <section className="mt-24">
        <SectionHeading title="hobbies" />
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

      {/* COMMUNITY: grouped into leadership / community / community service */}
      <section className="mt-24">
        <SectionHeading title="community" />
        <div className="-mt-4 space-y-10">
          {communityGroups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-ink-mute">
                {group.title}
              </h3>
              <div className="space-y-4">
                {group.items.map((s, i) => (
                  <motion.div
                    key={s.org}
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="rounded-3xl border border-petal bg-white/60 p-6 backdrop-blur-sm transition-colors hover:border-petal-deep"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h4 className="font-display text-xl font-semibold text-ink">
                        {s.org}
                      </h4>
                      <span className="font-mono text-xs uppercase tracking-wider text-rose">
                        {s.role}
                      </span>
                    </div>
                    <p className="mt-2 text-ink-soft">{s.blurb}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
