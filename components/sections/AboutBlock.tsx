import { Check } from "lucide-react";
import { about } from "@/content/home";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutBlock() {
  return (
    <section className="border-y border-foam/10 bg-navy-deep/40">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-2">
        <Reveal>
          <SectionHeading eyebrow={about.eyebrow} title={about.headline} />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="space-y-4">
            {about.paragraphs.map((p) => (
              <p key={p} className="text-base leading-relaxed text-mist">
                {p}
              </p>
            ))}
          </div>
          <ul className="mt-8 space-y-3">
            {about.checks.map((check) => (
              <li key={check} className="flex items-center gap-3 text-sm font-medium text-foam">
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
