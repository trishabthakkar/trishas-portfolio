"use client";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label="things i've built" title="selected work" />
        <p className="-mt-6 mb-12 max-w-prose text-ink-soft">
          projects across software, hardware, and ai — most of them built fast,
          with people i like.
        </p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.href}
              target={p.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (i % 3) * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col rounded-3xl border border-petal bg-white/60 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-petal-deep hover:shadow-[0_16px_44px_rgba(236,64,122,0.14)]"
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <p className="font-mono text-xs leading-relaxed text-rose">
                  {p.context}
                </p>
                <span
                  aria-hidden
                  className="mt-0.5 shrink-0 text-ink-mute transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-rose"
                >
                  ↗
                </span>
              </div>

              <h3 className="font-display text-2xl font-semibold text-ink transition-colors group-hover:text-rose">
                {p.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                {p.blurb}
              </p>

              <ul className="mt-5 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-petal bg-blush px-2.5 py-0.5 font-mono text-[11px] text-ink-soft"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
