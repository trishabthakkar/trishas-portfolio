"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { id: "projects", href: "/#projects", label: "projects" },
  { id: "experience", href: "/#experience", label: "experience" },
  { id: "skills", href: "/#skills", label: "skills" },
  { id: "about", href: "/about", label: "about", page: true },
  { id: "contact", href: "/#contact", label: "contact" },
];

const sectionIds = ["projects", "experience", "skills", "contact"];

export default function NavBar() {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    if (!onHome) return;

    const updateActive = () => {
      // the section whose top has crossed a line ~30% down the viewport wins;
      // if none have, nothing is highlighted (we're still up in the hero/intro)
      const line = window.innerHeight * 0.3;
      let current = "";
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
    <nav className="sticky top-0 z-50 border-b border-petal bg-blush/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-center px-6 sm:justify-between md:px-8">
        <Link
          href="/"
          onClick={handleHomeClick}
          className="hidden py-4 font-display text-lg font-semibold tracking-tight text-ink sm:block"
        >
          trisha
        </Link>
        <ul className="flex items-center gap-0.5 text-sm sm:gap-2">
          {links.map(({ id, href, label, page }) => {
            const active = page ? pathname === href : onHome && activeId === id;
            return (
              <li key={id} className="relative">
                <Link
                  href={href}
                  className={`relative block px-2 py-4 transition-colors sm:px-3 ${
                    active ? "text-ink" : "text-ink-mute hover:text-rose"
                  }`}
                >
                  {label}
                </Link>
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-2 bottom-0 h-0.5 rounded-full bg-rose sm:inset-x-3"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
