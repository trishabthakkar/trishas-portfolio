import { cn } from "@/lib/utils";

export default function SectionHeading({
  label,
  title,
  dark = false,
  className,
}: {
  label: string;
  title: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("mb-10", className)}>
      <div className="mb-3 flex items-center gap-3">
        <span className="h-px w-8 bg-rose" />
        <p
          className={cn(
            "text-xs tracking-[0.3em] uppercase",
            dark ? "text-petal-deep" : "text-ink-mute"
          )}
        >
          {label}
        </p>
      </div>
      <h2
        className={cn(
          "font-display text-4xl font-semibold tracking-tight md:text-5xl",
          dark ? "text-blush" : "text-ink"
        )}
      >
        {title}
      </h2>
    </div>
  );
}
