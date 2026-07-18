import { Trophy } from "lucide-react";
import { awards, awardsIntro } from "@/content/marketing";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Awards() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionHeading eyebrow={awardsIntro.eyebrow} title={awardsIntro.title} />
      </Reveal>
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {awards.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.08}>
            <div className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6">
              <div className="flex items-center justify-between">
                <Trophy aria-hidden className="size-6 text-accent" />
                <span className="font-heading text-sm text-ink-soft/60">{a.number}</span>
              </div>
              <h3 className="mt-6 font-heading text-base font-semibold text-ink">{a.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{a.issuer}</p>
              <p className="mt-1 text-sm font-medium text-accent">{a.year}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
