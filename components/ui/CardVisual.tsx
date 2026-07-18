import { cn } from "@/lib/cn";

type CardVisualProps = { seed?: number; className?: string };

export function CardVisual({ seed = 0, className }: CardVisualProps) {
  const hues = [
    "from-accent/25 via-surface-2 to-surface",
    "from-ink/15 via-surface-2 to-surface",
    "from-accent-bright/25 via-surface to-surface-2",
  ];
  const grad = hues[seed % hues.length];
  return (
    <div
      aria-hidden
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br",
        grad,
        className,
      )}
    >
      <div className="absolute -right-8 -top-8 size-32 rounded-full bg-accent-bright/20 blur-2xl" />
      <div className="absolute bottom-4 left-4 h-2 w-24 rounded-full bg-ink/10" />
      <div className="absolute bottom-8 left-4 h-2 w-16 rounded-full bg-ink/10" />
    </div>
  );
}
