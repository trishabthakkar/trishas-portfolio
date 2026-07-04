import { cn } from "@/lib/utils";

export default function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-petal bg-white/60 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-petal-deep hover:shadow-[0_12px_40px_rgba(236,64,122,0.12)]",
        className
      )}
    >
      {children}
    </div>
  );
}
