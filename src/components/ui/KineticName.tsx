"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const letterSpring = { type: "spring", stiffness: 300, damping: 18 } as const;

function KineticWord({
  word,
  delayOffset,
  className,
}: {
  word: string;
  delayOffset: number;
  className?: string;
}) {
  return (
    <span className={cn("flex overflow-visible", className)}>
      {word.split("").map((letter, i) => (
        <motion.span
          key={i}
          initial={{ y: "110%", opacity: 0, rotate: 6 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          transition={{
            delay: delayOffset + i * 0.045,
            type: "spring",
            stiffness: 160,
            damping: 20,
          }}
          whileHover={{
            y: -18,
            rotate: i % 2 === 0 ? -6 : 6,
            scale: 1.08,
            color: "#ec407a",
            transition: letterSpring,
          }}
          className="inline-block cursor-default select-none"
        >
          {letter}
        </motion.span>
      ))}
    </span>
  );
}

export default function KineticName() {
  return (
    <h1
      className="font-display font-semibold leading-[0.92] tracking-tight text-ink"
      style={{ fontSize: "clamp(2.75rem, 9vw, 6.5rem)" }}
      aria-label="trisha thakkar"
    >
      <span aria-hidden className="flex flex-col items-center">
        <KineticWord word="trisha" delayOffset={0.1} />
        <KineticWord word="thakkar" delayOffset={0.35} className="italic text-rose" />
      </span>
    </h1>
  );
}
