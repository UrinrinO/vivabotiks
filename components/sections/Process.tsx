import { processIntro, processSteps } from "@/content/home";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Process() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionHeading
          eyebrow={processIntro.eyebrow}
          title={processIntro.title}
          intro={processIntro.description}
          align="center"
        />
      </Reveal>
      <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
        {processSteps.map((step, i) => (
          <Reveal key={step.number} delay={i * 0.1}>
            <li className="relative">
              <div className="flex items-center gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-accent/50 font-heading text-sm font-bold text-accent">
                  {step.number}
                </span>
                <span aria-hidden className="hidden h-px flex-1 bg-foam/10 lg:block" />
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold text-foam">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">{step.description}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
