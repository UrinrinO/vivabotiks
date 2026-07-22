import { ArrowUpRight } from "lucide-react";
import { caseStudies, caseStudiesIntro } from "@/content/marketing";
import { Reveal } from "@/components/ui/Reveal";
import { RevealImage } from "@/components/ui/RevealImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";

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
      <div className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-3">
        {caseStudies.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.08} scale>
            <article className="group flex h-full flex-col">
              <RevealImage
                src={c.image}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="aspect-[4/5] w-full"
              />
              <Tag className="mt-6 self-start">{c.tag}</Tag>
              <div className="mt-4 flex items-start justify-between gap-4 border-b border-border pb-5">
                <h3 className="font-heading text-xl font-semibold text-ink sm:text-2xl">
                  {c.title}
                </h3>
                <ArrowUpRight
                  aria-hidden
                  className="mt-1 size-5 shrink-0 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
              <p className="mt-5 flex-1 text-sm leading-relaxed text-ink-soft">{c.result}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
