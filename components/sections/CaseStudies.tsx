import { caseStudies, caseStudiesIntro } from "@/content/marketing";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { CardVisual } from "@/components/ui/CardVisual";

export function CaseStudies() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionHeading
          eyebrow={caseStudiesIntro.eyebrow}
          title={caseStudiesIntro.title}
          intro={caseStudiesIntro.description}
        />
      </Reveal>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {caseStudies.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.08}>
            <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-sm">
              <CardVisual seed={i} className="h-44 w-full rounded-none border-0" />
              <div className="flex flex-1 flex-col p-6">
                <Tag className="self-start">{c.tag}</Tag>
                <h3 className="mt-4 font-heading text-lg font-semibold text-ink">{c.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{c.result}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
