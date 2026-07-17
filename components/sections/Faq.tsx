import { faqIntro, faqs } from "@/content/home";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Faq() {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-[2fr_3fr]">
      <Reveal>
        <SectionHeading eyebrow={faqIntro.eyebrow} title={faqIntro.title} />
      </Reveal>
      <Reveal delay={0.1}>
        <Accordion items={faqs} />
      </Reveal>
    </section>
  );
}
