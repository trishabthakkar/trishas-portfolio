"use client";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const contactLinks = [
  { label: "email", href: "mailto:mitta143@purdue.edu", handle: "mitta143@purdue.edu" },
  { label: "github", href: "#", handle: "add link" },
  { label: "linkedin", href: "#", handle: "add link" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 rounded-[3rem] bg-ink px-6 py-28"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeading label="say hi" title="get in touch" dark />
        <p className="mb-10 max-w-prose text-lg leading-relaxed text-petal-deep">
          i&apos;d love to hear from you — whether it&apos;s about collaborating,
          research, or just saying hi.
        </p>
        <ul className="divide-y divide-ink-soft/40 border-y border-ink-soft/40">
          {contactLinks.map(({ label, href, handle }, i) => (
            <motion.li
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
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
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
