import { cn } from "@/lib/cn";

// Deterministic, hand-tuned dither pattern (NO Math.random — stable across SSR).
// Rows read top-to-bottom: sparse near the `from` edge, dense near the `to` edge,
// so the two sections dissolve into one another through stepped pixel blocks.
// 1 = square tinted with `to`; 0 = square left as `from`.
const PATTERN: readonly (readonly number[])[] = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0],
  [1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1],
];

type PixelDissolveProps = {
  from?: string;
  to?: string;
  className?: string;
};

export function PixelDissolve({
  from = "transparent",
  to = "var(--color-surface)",
  className,
}: PixelDissolveProps) {
  return (
    <div
      aria-hidden
      className={cn("flex h-20 w-full flex-col", className)}
    >
      {PATTERN.map((row, rowIndex) => (
        <div key={rowIndex} className="flex w-full flex-1">
          {row.map((cell, cellIndex) => (
            <div
              key={cellIndex}
              data-pixel
              className="flex-1"
              style={{ backgroundColor: cell ? to : from }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
