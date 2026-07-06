"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const EMAIL = "thakkart@purdue.edu";

const infoRows = [
  {
    label: "email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
        <path d="M3 6.5l9 6 9-6" />
      </svg>
    ),
  },
  {
    label: "availability",
    value: "open to internships & collaborations",
    href: null,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="9.5" />
        <path d="M12 7v5l3.2 2" />
      </svg>
    ),
  },
];

const socials = [
  {
    label: "github",
    href: "https://github.com/trishabthakkar",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.03A9.4 9.4 0 0112 6.8c.85 0 1.71.11 2.51.33 1.91-1.3 2.75-1.03 2.75-1.03.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.001 10.001 0 0022 12c0-5.52-4.48-10-10-10z" />
      </svg>
    ),
  },
  {
    label: "linkedin",
    href: "https://www.linkedin.com/in/trisha-thakkar/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4v15h-4V8zm7 0h3.84v2.05h.05c.53-1 1.85-2.05 3.8-2.05C19.5 8 21 10.13 21 13.7V23h-4v-8.3c0-2-.04-4.55-2.8-4.55-2.8 0-3.23 2.17-3.23 4.4V23h-4V8z" />
      </svg>
    ),
  },
  {
    label: "devpost",
    href: "https://devpost.com/trishabthakkar/",
    icon: <span className="font-mono text-sm">{"</>"}</span>,
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" as const },
  transition: { delay, duration: 0.5 },
});

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `portfolio message from ${name || "someone"}`
    );
    const body = encodeURIComponent(
      `${message}\n\n— ${name}${email ? ` (${email})` : ""}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="scroll-mt-24 rounded-[3rem] bg-ink px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading label="say hi" title="get in touch" dark />

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-8">
          {/* LEFT — info + socials */}
          <div className="lg:col-span-2">
            <motion.p
              {...fadeUp()}
              className="max-w-prose text-lg leading-relaxed text-petal-deep"
            >
              i&apos;d love to hear from you — whether it&apos;s about
              collaborating, research, or just saying hi.
            </motion.p>

            <ul className="mt-8 space-y-5">
              {infoRows.map(({ label, value, href, icon }, i) => (
                <motion.li key={label} {...fadeUp(0.1 + i * 0.08)}>
                  <a
                    href={href ?? undefined}
                    className={`flex items-start gap-4 ${href ? "group" : ""}`}
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-ink-soft/50 bg-blush/5 text-petal-deep">
                      <span className="h-5 w-5">{icon}</span>
                    </span>
                    <span>
                      <span className="block font-mono text-[11px] uppercase tracking-[0.2em] text-ink-mute">
                        {label}
                      </span>
                      <span
                        className={`mt-0.5 block font-medium text-blush ${
                          href ? "transition-colors group-hover:text-rose" : ""
                        }`}
                      >
                        {value}
                      </span>
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>

            <motion.div
              {...fadeUp(0.3)}
              className="mt-9 border-t border-ink-soft/40 pt-6"
            >
              <span className="block font-mono text-[11px] uppercase tracking-[0.2em] text-ink-mute">
                socials
              </span>
              <div className="mt-3 flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-11 w-11 items-center justify-center rounded-2xl border border-ink-soft/50 bg-blush/5 text-petal-deep transition-colors hover:border-rose hover:text-rose"
                  >
                    <span className="h-5 w-5">{s.icon}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT — message form (mailto fallback until a real backend is wired) */}
          <motion.div
            {...fadeUp(0.15)}
            className="rounded-3xl border border-ink-soft/40 bg-blush/5 p-6 backdrop-blur-sm sm:p-8 lg:col-span-3"
          >
            <h3 className="font-display text-xl font-semibold text-blush">
              send a message
            </h3>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.2em] text-ink-mute">
                    your name
                  </span>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="enter your name"
                    required
                    className="w-full rounded-xl border border-ink-soft/50 bg-transparent px-4 py-3 text-blush placeholder:text-ink-mute focus:border-rose focus:outline-none"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.2em] text-ink-mute">
                    email address
                  </span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    required
                    className="w-full rounded-xl border border-ink-soft/50 bg-transparent px-4 py-3 text-blush placeholder:text-ink-mute focus:border-rose focus:outline-none"
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.2em] text-ink-mute">
                  message details
                </span>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="i'd like to talk about..."
                  required
                  rows={5}
                  className="w-full resize-none rounded-xl border border-ink-soft/50 bg-transparent px-4 py-3 text-blush placeholder:text-ink-mute focus:border-rose focus:outline-none"
                />
              </label>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-rose px-6 py-3.5 font-medium text-blush transition-all duration-200 hover:-translate-y-0.5 hover:bg-rose-bright hover:shadow-[0_6px_28px_rgba(236,64,122,0.45)]"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-4 w-4"
                >
                  <path d="M22 2L11 13" />
                  <path d="M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
                send message
              </button>
              <p className="text-center text-xs text-ink-mute">
                opens your email app with this pre-filled — nothing sends
                automatically.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
