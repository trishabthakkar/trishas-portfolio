"use client";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="skills" />
        <p className="-mt-6 mb-12 max-w-prose text-ink-soft">
          the languages and tools i build with.
        </p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: gi * 0.08, duration: 0.5 }}
              className="rounded-3xl border border-petal bg-white/60 p-6 backdrop-blur-sm"
            >
              <h3 className="mb-5 font-display text-lg font-semibold text-ink">
                {group.title}
              </h3>
              <ul className="space-y-4">
                {group.items.map((s, si) => (
                  <li key={s.name}>
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="text-sm font-medium text-ink">
                        {s.name}
                      </span>
                      <span className="font-mono text-[10px] text-ink-mute">
                        {s.note}
                      </span>
                    </div>
                    <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-petal">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{
                          delay: gi * 0.08 + si * 0.06 + 0.2,
                          duration: 0.7,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-petal-deep to-rose"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
