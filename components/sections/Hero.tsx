import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { hero } from "@/content/home";
import { siteMeta } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#04131E] text-white">
      {/* Full-bleed robot backdrop, blended into the dark — no card, no border */}
      <div aria-hidden className="absolute inset-y-0 right-0 hidden w-[72%] md:block">
        <Image
          src="/hero-robot.jpg"
          alt=""
          fill
          priority
          sizes="72vw"
          className="object-cover object-[68%_22%]"
        />
        {/* Melt the photo's edges into the section background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#04131E] via-[#04131E]/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04131E] via-transparent to-[#04131E]/25" />
      </div>

      {/* Diagonal blue light beam from the lower-left, like home-two */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[15%] top-[-15%] h-[140%] w-[85%] rotate-[16deg]"
        style={{
          background:
            "linear-gradient(105deg, rgba(47,86,255,0) 18%, rgba(90,125,255,0.38) 46%, rgba(47,86,255,0) 74%)",
          filter: "blur(70px)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/4 size-[38rem] rounded-full bg-[#2f56ff]/25 blur-[130px]"
      />

      {/* Content */}
      <div className="relative z-20 mx-auto flex min-h-svh max-w-6xl flex-col justify-center px-6 pt-28 pb-60">
        <div className="max-w-2xl">
          <span className="inline-flex items-center bg-gradient-to-r from-[#3b5bdb] to-[#5a7bff] px-4 py-2 font-heading text-xs font-semibold uppercase tracking-[0.18em] text-white">
            ^Software, reimagined with AI^
          </span>
          <h1 className="relative z-20 mt-7 max-w-none text-balance font-heading text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:w-[58rem] lg:text-[4.5rem]">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/65">{hero.subline}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={hero.primaryCta.href}
              className="inline-flex items-center gap-2 bg-white px-6 py-3 font-heading text-sm font-medium text-ink transition-transform duration-300 hover:-translate-y-0.5"
            >
              <Star aria-hidden className="size-4 fill-accent text-accent" />
              {hero.primaryCta.label}
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="inline-flex items-center gap-2 border border-white/25 px-6 py-3 font-heading text-sm font-medium text-white transition-colors duration-300 hover:border-accent-bright hover:text-accent-bright"
            >
              {hero.secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>

      {/* Floating glass card over the image, like the reference overlay */}
      <div className="absolute bottom-48 right-10 z-20 hidden w-60 border border-white/10 bg-white/[0.07] p-4 backdrop-blur-md lg:block">
        <p className="font-heading text-xs font-medium uppercase tracking-widest text-white/50">
          ^Project preview^
        </p>
        <div className="mt-3 h-2 w-full bg-white/10" />
        <div className="mt-2 h-2 w-2/3 bg-white/10" />
        <div className="mt-4 bg-white py-2 text-center font-heading text-xs font-medium text-ink">
          {hero.primaryCta.label}
        </div>
      </div>

      {/* Oversized bright watermark, clipped at the bottom edge like home-two */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-[-0.22em] z-10 select-none whitespace-nowrap text-center font-heading text-[20vw] font-bold leading-none text-white/95"
      >
        {siteMeta.name}
      </span>
    </section>
  );
}
