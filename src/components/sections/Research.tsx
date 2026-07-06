"use client";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { research } from "@/data/research";

export default function Research() {
  return (
    <section id="research" className="scroll-mt-24 px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading label="what i'm exploring" title="research" />
        <p className="-mt-6 mb-12 max-w-prose text-ink-soft">
          ongoing work and a published paper — mostly about how people learn to
          build and use ai.
        </p>

        <div className="space-y-5">
          {research.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30, rotate: i % 2 === 0 ? -1.5 : 1.5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: i * 0.12,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="rounded-3xl border border-petal bg-white/60 p-6 backdrop-blur-sm transition-colors hover:border-petal-deep"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-xl font-semibold text-ink">
                  {r.title}
                </h3>
                <span className="font-mono text-xs uppercase tracking-wider text-ink-mute">
                  {r.period}
                </span>
              </div>
              <p className="mt-1 font-mono text-xs uppercase tracking-wider text-rose">
                {r.detail}
              </p>
              <p className="mt-3 leading-relaxed text-ink-soft">{r.blurb}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
