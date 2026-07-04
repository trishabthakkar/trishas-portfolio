import { cn } from "@/lib/utils";

export default function Divider({
  dark = false,
  className,
}: {
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "flex items-center justify-center gap-3",
        className
      )}
    >
      <span className={cn("h-px flex-1", dark ? "bg-ink-soft/40" : "bg-petal")} />
      <span className="h-1 w-1 rounded-full bg-rose" />
      <span className={cn("h-px flex-1", dark ? "bg-ink-soft/40" : "bg-petal")} />
    </div>
  );
}
