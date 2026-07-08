"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  MailIcon,
  PhoneIcon,
  GithubIcon,
  LinkedinIcon,
  SendIcon,
} from "@/components/ui/icons";

const EMAIL = "thakkart@purdue.edu";
const PHONE_DIGITS = "17654148202";
const PHONE_DISPLAY = "+1 (765) 414-8202";

const infoRows = [
  {
    label: "email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: <MailIcon />,
  },
  {
    label: "phone",
    value: PHONE_DISPLAY,
    href: `tel:+${PHONE_DIGITS}`,
    icon: <PhoneIcon />,
  },
];

const socials = [
  {
    label: "github",
    href: "https://github.com/trishabthakkar",
    icon: <GithubIcon />,
  },
  {
    label: "linkedin",
    href: "https://www.linkedin.com/in/trisha-thakkar/",
    icon: <LinkedinIcon />,
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
      `${message}\n\n- ${name}${email ? ` (${email})` : ""}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="scroll-mt-24 rounded-2xl bg-ink px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading title="get in touch" dark />

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-8">
          {/* LEFT: info + socials */}
          <div className="lg:col-span-2">
            <motion.p
              {...fadeUp()}
              className="max-w-prose text-lg leading-relaxed text-petal-deep"
            >
              open to internships and collaborations. i&apos;d love to hear
              from you!
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

          {/* RIGHT: message form (mailto fallback until a real backend is wired) */}
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
                <SendIcon className="h-4 w-4" />
                send message
              </button>
              <p className="text-center text-xs text-ink-mute">
                opens your email app with this pre-filled. nothing sends
                automatically.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
