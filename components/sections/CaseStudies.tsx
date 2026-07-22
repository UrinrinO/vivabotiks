import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { caseStudies, caseStudiesIntro } from "@/content/marketing";
import { Reveal } from "@/components/ui/Reveal";
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
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {caseStudies.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.08} scale>
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-sm">
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={c.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <Tag className="self-start">{c.tag}</Tag>
                <h3 className="mt-4 font-heading text-lg font-semibold text-ink">{c.title}</h3>
                <p className="mt-4 flex-1 border-t border-border pt-4 text-sm leading-relaxed text-ink-soft">{c.result}</p>
                <ArrowUpRight
                  aria-hidden
                  className="mt-6 size-4 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
