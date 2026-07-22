"use client";

import { motion, useReducedMotion } from "motion/react";
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

// Deterministic pseudo-random stagger so tinted cells twinkle in individually
// (mirrors the reference recording's dissolve-in) without breaking SSR.
const delayFor = (row: number, col: number) => (((row * 31 + col * 17) % 13) / 13) * 0.45;

type PixelDissolveProps = {
  from?: string;
  to?: string;
  /** Flip vertically: dense `to` cells at the TOP (for a dark section above a light one). */
  flip?: boolean;
  className?: string;
};

export function PixelDissolve({
  from = "transparent",
  to = "var(--color-surface)",
  flip = false,
  className,
}: PixelDissolveProps) {
  const reduce = useReducedMotion();
  const rows = flip ? [...PATTERN].reverse() : PATTERN;

  if (reduce) {
    return (
      <div aria-hidden className={cn("flex h-20 w-full flex-col", className)}>
        {rows.map((row, rowIndex) => (
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

  return (
    <motion.div
      aria-hidden
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className={cn("flex h-20 w-full flex-col", className)}
    >
      {PATTERN.map((row, rowIndex) => (
        <div key={rowIndex} className="flex w-full flex-1">
          {row.map((cell, cellIndex) =>
            cell ? (
              <motion.div
                key={cellIndex}
                data-pixel
                className="flex-1"
                style={{ backgroundColor: to }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { delay: delayFor(rowIndex, cellIndex), duration: 0.25 },
                  },
                }}
              />
            ) : (
              <div
                key={cellIndex}
                data-pixel
                className="flex-1"
                style={{ backgroundColor: from }}
              />
            ),
          )}
        </div>
      ))}
    </motion.div>
  );
}
