import { finalCta } from "@/content/home";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 size-[32rem] -translate-x-1/2 rounded-full bg-accent-bright/15 blur-3xl"
      />
      <Reveal className="relative mx-auto max-w-3xl px-6 py-28 text-center">
        <h2 className="font-heading text-4xl font-semibold text-white sm:text-5xl">{finalCta.headline}</h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/70">{finalCta.subline}</p>
        <div className="mt-10 flex justify-center">
          <Button href={finalCta.cta.href}>
            {finalCta.cta.label}
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
