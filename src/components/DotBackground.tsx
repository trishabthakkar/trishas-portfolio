"use client";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";

export default function DotBackground({ children }: { children: React.ReactNode }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ clientX, clientY }: React.MouseEvent<HTMLDivElement>) {
    mouseX.set(clientX);
    mouseY.set(clientY);
  }

  const dotPattern = (color: string) => ({
    backgroundImage: `radial-gradient(circle, ${color} 1px, transparent 1px)`,
    backgroundSize: "16px 16px",
  });

  return (
    <div className="relative min-h-full group/dots" onMouseMove={handleMouseMove}>
      <div
        className="fixed inset-0 pointer-events-none opacity-60 -z-10"
        style={dotPattern("#ffd0dc")}
      />
      <motion.div
        className="fixed inset-0 pointer-events-none opacity-0 transition duration-300 group-hover/dots:opacity-100 -z-10"
        style={{
          ...dotPattern("#ec407a"),
          WebkitMaskImage: useMotionTemplate`radial-gradient(200px circle at ${mouseX}px ${mouseY}px, black 0%, transparent 100%)`,
          maskImage: useMotionTemplate`radial-gradient(200px circle at ${mouseX}px ${mouseY}px, black 0%, transparent 100%)`,
        }}
      />
      {children}
    </div>
  );
}
