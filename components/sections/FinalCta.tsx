import { finalCta } from "@/content/home";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy to-navy-deep">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 size-[30rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
      />
      <Reveal className="relative mx-auto max-w-3xl px-6 py-28 text-center">
        <h2 className="font-heading text-4xl font-bold text-foam sm:text-5xl">{finalCta.headline}</h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-mist">{finalCta.subline}</p>
        <div className="mt-10 flex justify-center">
          <Button href={finalCta.cta.href}>{finalCta.cta.label}</Button>
        </div>
      </Reveal>
    </section>
  );
}
