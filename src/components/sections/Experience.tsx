"use client";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 px-6 py-28">
      <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[1fr_1.6fr]">
        <div className="md:sticky md:top-28 md:h-fit">
          <SectionHeading title="experience" />
        </div>

        {/* timeline */}
        <div className="relative pl-8">
          <motion.span
            aria-hidden
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "top" }}
            className="absolute left-[5px] top-2 bottom-2 w-px bg-petal-deep"
          />

          <div className="space-y-10">
            {experience.map((e, i) => (
              <motion.div
                key={e.org + e.role}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
                className="relative"
              >
                <span
                  aria-hidden
                  className="absolute -left-8 top-1.5 h-2.5 w-2.5 rounded-full border-2 border-blush bg-rose"
                />
                <h3 className="font-display text-2xl font-semibold text-ink">
                  {e.role}
                </h3>
                <div className="mt-1.5 flex max-w-md items-center justify-between gap-3 font-mono text-xs uppercase tracking-wider text-ink-mute">
                  <span className="text-rose">{e.org}</span>
                  <span>{e.period}</span>
                </div>
                <p className="mt-3 max-w-md leading-relaxed text-ink-soft">
                  {e.blurb}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
