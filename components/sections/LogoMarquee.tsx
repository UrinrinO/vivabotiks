import { logosIntro, partners } from "@/content/marketing";
import { Marquee } from "@/components/ui/Marquee";
import { LogoChip } from "@/components/ui/LogoChip";

export function LogoMarquee() {
  return (
    <section className="border-y border-border bg-bg py-14">
      <p className="mx-auto mb-8 max-w-6xl px-6 text-center font-heading text-sm font-medium uppercase tracking-[0.2em] text-ink-soft">
        {logosIntro.title}
      </p>
      <Marquee duration={32}>
        {partners.map((p) => (
          <div key={p.name} className="mx-3">
            <LogoChip initials={p.initials} name={p.name} />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
