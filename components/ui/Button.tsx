import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonProps = {
  href: string;
  variant?: "primary" | "ghost";
  children: React.ReactNode;
  className?: string;
};

export function Button({ href, variant = "primary", children, className }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2 px-6 py-3 font-heading text-sm font-medium transition-all duration-300",
        variant === "primary" && "bg-ink text-white hover:-translate-y-0.5 hover:bg-ink/90",
        variant === "ghost" && "border border-border text-ink hover:border-accent hover:text-accent",
        className,
      )}
    >
      {children}
    </Link>
  );
}
