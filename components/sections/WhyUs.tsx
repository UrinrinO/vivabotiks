"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { whyUs, whyUsIntro } from "@/content/marketing";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { cn } from "@/lib/cn";

export function WhyUs() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const current = whyUs[active];

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <Tag>{whyUsIntro.eyebrow}</Tag>
        <SectionHeading title={whyUsIntro.title} intro={whyUsIntro.description} className="mt-4" />
      </Reveal>

      <div className="mt-14 grid items-start gap-12 lg:grid-cols-2">
        {/* Large title list — hovering or focusing an item swaps the panel */}
        <Reveal scale>
          <ul>
            {whyUs.map((item, i) => (
              <li
                key={item.number}
                className={cn(
                  "border-b first:border-t",
                  i === active ? "border-accent-bright" : "border-border",
                )}
              >
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  aria-current={i === active}
                  className={cn(
                    "w-full py-5 text-left font-heading text-2xl font-semibold transition-colors sm:text-3xl",
                    i === active ? "text-ink" : "text-ink-soft/60 hover:text-ink",
                  )}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Image + description panel for the active item */}
        <Reveal delay={0.1} scale>
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={current.image}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: reduce ? 0 : 0.3, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={current.image}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
          <AnimatePresence mode="wait" initial={false}>
            <motion.p
              key={current.number}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduce ? 0 : 0.3, ease: "easeOut" }}
              className="mt-6 text-base leading-relaxed text-ink-soft"
            >
              {current.description}
            </motion.p>
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}
