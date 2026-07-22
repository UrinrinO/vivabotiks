"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/cn";

type RevealImageProps = {
  src: string;
  alt?: string;
  sizes?: string;
  className?: string;
  priority?: boolean;
  /** Colour of the plate that wipes away to reveal the image. */
  plate?: string;
};

// Reverse-engineered from the reference recording: each image starts as a
// solid colour plate; the photo is revealed top-to-bottom as the plate wipes
// away, and the photo settles from a pale wash into full colour just after.
// The scroll-in scale settle lives on the inner wrapper and the hover zoom on
// the <Image> itself so the transforms compose. Under prefers-reduced-motion
// it renders the plain image.
export function RevealImage({
  src,
  alt = "",
  sizes,
  className,
  priority,
  plate = "#04131E",
}: RevealImageProps) {
  const reduce = useReducedMotion();

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <motion.div
        className="absolute inset-0"
        initial={reduce ? false : { scale: 1.08 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </motion.div>
      {!reduce && (
        <>
          {/* Warm pale wash settling into full colour */}
          <motion.div
            aria-hidden
            className="absolute inset-0 bg-accent-tint"
            initial={{ opacity: 0.7 }}
            whileInView={{ opacity: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
          />
          {/* Blue plate wiping away top-to-bottom */}
          <motion.div
            aria-hidden
            className="absolute inset-0"
            style={{ backgroundColor: plate }}
            initial={{ clipPath: "inset(0% 0 0 0)" }}
            whileInView={{ clipPath: "inset(100% 0 0 0)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.65, 0, 0.35, 1] }}
          />
        </>
      )}
    </div>
  );
}
