import { cn } from "@/lib/cn";

type MarqueeProps = { children: React.ReactNode; className?: string; duration?: number };

export function Marquee({ children, className, duration = 28 }: MarqueeProps) {
  return (
    <div aria-hidden className={cn("overflow-hidden", className)}>
      <div
        className="flex w-max"
        style={{ animation: `ticker ${duration}s linear infinite` }}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center">{children}</div>
      </div>
    </div>
  );
}
