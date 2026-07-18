import { Check } from "lucide-react";
import { about, stats } from "@/content/home";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CardVisual } from "@/components/ui/CardVisual";

export function AboutBlock() {
  const highlight = stats[1]; // "8+ Years building software" (PLACEHOLDER value)
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
        <Reveal className="relative">
          <CardVisual seed={1} className="h-80 w-full" />
          <div className="absolute bottom-6 left-6 rounded-2xl border border-border bg-bg px-6 py-4 shadow-sm">
            <p className="font-heading text-3xl font-bold text-accent">
              {highlight.value}
              {highlight.suffix}
            </p>
            <p className="mt-1 text-sm text-ink-soft">{highlight.label}</p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading eyebrow={about.eyebrow} title={about.headline} />
          <div className="mt-6 space-y-4">
            {about.paragraphs.map((p) => (
              <p key={p} className="text-base leading-relaxed text-ink-soft">
                {p}
              </p>
            ))}
          </div>
          <ul className="mt-8 space-y-3">
            {about.checks.map((check) => (
              <li key={check} className="flex items-center gap-3 text-sm font-medium text-ink">
                <Check aria-hidden className="size-4 shrink-0 text-accent" />
                {check}
              </li>
            ))}
          </ul>
          <Button href={about.cta.href} variant="ghost" className="mt-10">
            {about.cta.label}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
