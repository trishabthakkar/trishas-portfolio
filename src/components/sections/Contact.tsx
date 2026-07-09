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
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xqevvgpe";

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

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState(""); // honeypot: real users never fill this in
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (company) return; // bot caught by the honeypot, silently drop

    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error("send failed");
      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
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

          {/* RIGHT: message form, sends via Formspree */}
          <motion.div
            {...fadeUp(0.15)}
            className="rounded-3xl border border-ink-soft/40 bg-blush/5 p-6 backdrop-blur-sm sm:p-8 lg:col-span-3"
          >
            <h3 className="font-display text-xl font-semibold text-blush">
              send a message
            </h3>

            {status === "sent" ? (
              <div className="mt-6 rounded-xl border border-rose/40 bg-rose/10 px-5 py-6 text-center">
                <p className="font-medium text-blush">message sent!</p>
                <p className="mt-1 text-sm text-petal-deep">
                  thanks for reaching out, i&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                {/* honeypot: hidden from real users, bots tend to fill every field */}
                <input
                  type="text"
                  name="company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                />

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
                      disabled={status === "sending"}
                      className="w-full rounded-xl border border-ink-soft/50 bg-transparent px-4 py-3 text-blush placeholder:text-ink-mute focus:border-rose focus:outline-none disabled:opacity-50"
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
                      disabled={status === "sending"}
                      className="w-full rounded-xl border border-ink-soft/50 bg-transparent px-4 py-3 text-blush placeholder:text-ink-mute focus:border-rose focus:outline-none disabled:opacity-50"
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
                    disabled={status === "sending"}
                    className="w-full resize-none rounded-xl border border-ink-soft/50 bg-transparent px-4 py-3 text-blush placeholder:text-ink-mute focus:border-rose focus:outline-none disabled:opacity-50"
                  />
                </label>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-rose px-6 py-3.5 font-medium text-blush transition-all duration-200 hover:-translate-y-0.5 hover:bg-rose-bright hover:shadow-[0_6px_28px_rgba(236,64,122,0.45)] disabled:pointer-events-none disabled:opacity-60"
                >
                  <SendIcon className="h-4 w-4" />
                  {status === "sending" ? "sending..." : "send message"}
                </button>
                {status === "error" && (
                  <p className="text-center text-xs text-rose">
                    something went wrong, mind trying again or emailing me
                    directly at {EMAIL}?
                  </p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
