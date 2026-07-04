"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { id: "home", href: "/", label: "home" },
  { id: "about", href: "/#about", label: "about" },
  { id: "projects", href: "/#projects", label: "projects" },
  { id: "research", href: "/#research", label: "research" },
  { id: "contact", href: "/#contact", label: "contact" },
];

const sectionIds = ["about", "projects", "research", "contact"];

export default function NavBar() {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    if (!onHome) return;

    const updateActive = () => {
      // the section whose top has crossed a line ~30% down the viewport wins;
      // if none have, we're still in the hero → "home"
      const line = window.innerHeight * 0.3;
      let current = "home";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) {
          current = id;
        }
      }
      setActiveId(current);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, [onHome]);

  const handleHomeClick = (e: React.MouseEvent) => {
    if (onHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-4 z-50 mx-auto mt-4 flex w-[calc(100%-2rem)] max-w-3xl items-center justify-center rounded-full border border-petal bg-blush/80 px-3 py-2.5 backdrop-blur-md shadow-[0_2px_20px_rgba(236,64,122,0.08)] sm:justify-between sm:px-5">
      <Link
        href="/"
        onClick={handleHomeClick}
        className="hidden font-display text-lg font-semibold tracking-tight text-ink sm:block"
      >
        trisha
      </Link>
      <ul className="flex items-center gap-1 text-sm sm:gap-1">
        {links.map(({ id, href, label }) => {
          const active = onHome && activeId === id;
          return (
            <li key={id} className="relative">
              <Link
                href={href}
                onClick={id === "home" ? handleHomeClick : undefined}
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
