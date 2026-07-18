import Link from "next/link";
import { Star } from "lucide-react";
import { cn } from "@/lib/cn";

type ButtonProps = {
  href: string;
  variant?: "primary" | "ghost";
  star?: boolean;
  children: React.ReactNode;
  className?: string;
};

export function Button({ href, variant = "primary", star = false, children, className }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-6 py-3 font-heading text-sm font-medium transition-all duration-300",
        variant === "primary" && "bg-ink text-white hover:-translate-y-0.5 hover:bg-ink/90",
        variant === "ghost" && "border border-border text-ink hover:border-accent hover:text-accent",
        className,
      )}
    >
      {star && <Star aria-hidden className="size-4 fill-accent-bright text-accent-bright" />}
      {children}
    </Link>
  );
}
