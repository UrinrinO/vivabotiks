import { Check } from "lucide-react";
import { about, stats } from "@/content/home";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { RevealImage } from "@/components/ui/RevealImage";
import { Tag } from "@/components/ui/Tag";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PixelDissolve } from "@/components/ui/PixelDissolve";

export function AboutBlock() {
  const highlight = stats[1]; // "8+ Years building software" (PLACEHOLDER value)
  return (
    <section className="border-b border-border">
      {/* Untinted cells carry the ice blue down from the services section */}
      <PixelDissolve from="var(--color-ice)" />
      <div className="bg-surface">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
          <Reveal className="relative" scale>
            <RevealImage
              src="/about-office.jpg"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="group aspect-[4/5] w-full"
            />
            {/* Dark stat panel overlapping the photo's lower-right */}
            <div className="absolute -bottom-8 right-0 w-[72%] max-w-sm bg-ink p-8 text-white sm:w-[60%]">
              <p className="font-heading text-5xl font-bold text-accent-bright">
                <AnimatedCounter value={highlight.value} suffix={highlight.suffix} />
              </p>
              <p className="mt-4 font-semibold">{highlight.label}</p>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{about.statBlurb}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Tag>{about.eyebrow}</Tag>
            <SectionHeading title={about.headline} className="mt-4" />
            <div className="mt-6 space-y-4">
              {about.paragraphs.map((p) => (
                <p key={p} className="text-base leading-relaxed text-ink-soft">
                  {p}
                </p>
              ))}
            </div>
            <div
              aria-hidden
              className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 font-heading text-3xl font-bold tracking-tight text-ink-soft/40 sm:text-4xl"
            >
              {about.motif.map((word, i) => (
                <span key={word} className="flex items-center gap-x-4">
                  {i > 0 && <span className="text-accent/30">&middot;</span>}
                  {word}
                </span>
              ))}
            </div>
            <ul className="mt-8 space-y-3">
              {about.checks.map((check) => (
                <li
                  key={check}
                  className="flex items-center gap-3 text-sm font-medium text-ink"
                >
                  <Check aria-hidden className="size-4 shrink-0 text-accent" />
                  {check}
                </li>
              ))}
            </ul>
            <Button href={about.cta.href} className="mt-10">
              {about.cta.label}
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
