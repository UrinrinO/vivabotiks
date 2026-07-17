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
        "inline-flex items-center gap-2 rounded-full px-6 py-3 font-heading text-sm font-medium transition-colors duration-300",
        variant === "primary" && "bg-accent text-navy-deep hover:bg-accent-strong",
        variant === "ghost" && "border border-foam/25 text-foam hover:border-accent hover:text-accent",
        className,
      )}
    >
      {children}
    </Link>
  );
}
