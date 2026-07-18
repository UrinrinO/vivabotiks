import { cn } from "@/lib/cn";

export function Tag({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-surface-2 px-3 py-1 font-heading text-xs font-medium uppercase tracking-wide text-accent",
        className,
      )}
    >
      {children}
    </span>
  );
}
