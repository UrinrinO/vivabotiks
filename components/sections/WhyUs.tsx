import { Sparkles } from "lucide-react";
import { whyUs, whyUsIntro } from "@/content/marketing";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyUs() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <SectionHeading
            eyebrow={whyUsIntro.eyebrow}
            title={whyUsIntro.title}
            intro={whyUsIntro.description}
            align="center"
          />
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((w, i) => (
            <Reveal key={w.number} delay={i * 0.06}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-bg p-8">
                <div className="flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-ink text-white">
                    <Sparkles aria-hidden className="size-5" />
                  </span>
                  <span className="font-heading text-lg font-bold text-ink-soft/30">{w.number}</span>
                </div>
                <h3 className="mt-6 font-heading text-lg font-semibold text-ink">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{w.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
