import Image from "next/image";
import { finalCta } from "@/content/home";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-[#04131E] text-white">
      {/* Barely-there grid, echoing the hero and footer texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Robot backdrop on the right, melted into the dark like the hero */}
      <div aria-hidden className="absolute inset-y-0 right-0 hidden w-[60%] opacity-70 lg:block">
        <Image src="/hero-robot.jpg" alt="" fill sizes="60vw" className="object-cover object-[68%_22%]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#04131E] via-[#04131E]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04131E] via-transparent to-[#04131E]/25" />
      </div>

      {/* Diagonal blue light beam from the lower-left, reused from the hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[15%] top-[-15%] h-[140%] w-[85%] rotate-[16deg]"
        style={{
          background:
            "linear-gradient(105deg, rgba(47,86,255,0) 18%, rgba(90,125,255,0.38) 46%, rgba(47,86,255,0) 74%)",
          filter: "blur(70px)",
        }}
      />
      {/* Soft amber glow to warm the composition (true circle) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/4 size-[38rem] rounded-full bg-accent-bright/15 blur-[130px]"
      />

      <Reveal className="relative z-10 mx-auto max-w-3xl px-6 py-28 text-center">
        <h2 className="font-heading text-4xl font-semibold text-white sm:text-5xl">{finalCta.headline}</h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/70">{finalCta.subline}</p>

        {/* Flat glass widget holding the call to action */}
        <div className="mx-auto mt-10 flex max-w-md flex-col items-center gap-6 border border-white/10 bg-white/[0.07] p-8 backdrop-blur-md">
          <Button href={finalCta.cta.href}>{finalCta.cta.label}</Button>
        </div>
      </Reveal>
    </section>
  );
}
