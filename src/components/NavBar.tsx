"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { href: "/", label: "home" },
  { href: "/projects", label: "projects" },
  { href: "/about", label: "about" },
  { href: "/research", label: "research" },
  { href: "/contact", label: "contact" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-4 z-50 mx-auto mt-4 flex w-[calc(100%-2rem)] max-w-3xl items-center justify-between rounded-full border border-petal bg-blush/80 px-3 py-2.5 backdrop-blur-md shadow-[0_2px_20px_rgba(236,64,122,0.08)] sm:px-5">
      <Link
        href="/"
        className="font-display text-lg font-semibold tracking-tight text-ink"
      >
        trisha
      </Link>
      <ul className="flex items-center gap-0.5 text-xs sm:gap-1 sm:text-sm">
        {links.map(({ href, label }) => {
          const active = pathname === href;
          return (
            <li key={href} className="relative">
              <Link
                href={href}
                className={`relative z-10 rounded-full px-1.5 py-1.5 transition-colors sm:px-3 ${
                  active ? "text-blush" : "text-ink-soft hover:text-rose"
                }`}
              >
                {label}
              </Link>
              {active && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-rose"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
