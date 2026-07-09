"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { GithubIcon, DevpostIcon } from "@/components/ui/icons";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="projects" />
        <p className="-mt-6 mb-12 max-w-prose text-ink-soft">
          projects across software, hardware, and ai that i have built and
          learned from.
        </p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (i % 3) * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col rounded-3xl border border-petal bg-white/60 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-petal-deep hover:shadow-[0_16px_44px_rgba(236,64,122,0.14)]"
            >
              {/* whole-card link to the in-depth story page */}
              <Link
                href={`/projects/${p.slug}`}
                className="absolute inset-0 z-0 rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose focus-visible:ring-offset-2 focus-visible:ring-offset-blush"
                aria-label={`read the story behind ${p.name}`}
              />

              <div className="mb-2 flex items-start justify-between gap-3">
                <h3 className="font-display text-2xl font-semibold text-ink transition-colors group-hover:text-rose">
                  {p.name}
                </h3>
                <span
                  aria-hidden
                  className="mt-1.5 shrink-0 text-ink-mute transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-rose"
                >
                  →
                </span>
              </div>
              {p.context && (
                <p className="mb-3 font-mono text-xs leading-relaxed text-rose">
                  {p.context}
                </p>
              )}
              <p className="flex-1 text-sm leading-relaxed text-ink-soft">
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

              {/* github / devpost: separate links, above the overlay */}
              <div className="relative z-10 mt-4 flex items-center gap-2 border-t border-petal pt-4">
                <a
                  href={p.githubHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${p.name} on github`}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-petal text-ink-mute transition-colors hover:border-rose hover:text-rose focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose focus-visible:ring-offset-2 focus-visible:ring-offset-blush"
                >
                  <GithubIcon className="h-4 w-4" />
                </a>
                <a
                  href={p.devpostHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${p.name} on devpost`}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-petal text-ink-mute transition-colors hover:border-rose hover:text-rose focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose focus-visible:ring-offset-2 focus-visible:ring-offset-blush"
                >
                  <DevpostIcon className="font-mono text-xs leading-none" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
