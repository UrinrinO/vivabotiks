"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

type CarouselProps = { slides: React.ReactNode[]; label: string };

export function Carousel({ slides, label }: CarouselProps) {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <div role="region" aria-roledescription="carousel" aria-label={label}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {slides[index]}
        </motion.div>
      </AnimatePresence>
      <div className="mt-8 flex items-center gap-4">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous slide"
          className="rounded-full border border-foam/20 p-3 text-foam transition-colors hover:border-accent hover:text-accent"
        >
          <ArrowLeft aria-hidden className="size-4" />
        </button>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className={cn("size-2.5 rounded-full bg-foam/20 transition-colors", i === index && "bg-accent")}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="rounded-full border border-foam/20 p-3 text-foam transition-colors hover:border-accent hover:text-accent"
        >
          <ArrowRight aria-hidden className="size-4" />
        </button>
      </div>
    </div>
  );
}
