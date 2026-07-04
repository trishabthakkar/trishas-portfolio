import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-rose text-blush hover:bg-rose-bright shadow-[0_4px_20px_rgba(236,64,122,0.35)] hover:shadow-[0_6px_28px_rgba(236,64,122,0.45)] hover:-translate-y-0.5",
  outline:
    "border border-rose text-rose hover:bg-rose hover:text-blush hover:-translate-y-0.5",
  ghost: "text-ink-soft hover:text-rose",
} as const;

export default function Button({
  href,
  variant = "primary",
  className,
  children,
}: {
  href: string;
  variant?: keyof typeof variants;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200",
        variants[variant],
        className
      )}
    >
      {children}
    </Link>
  );
}
