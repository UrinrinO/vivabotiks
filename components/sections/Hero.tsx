import { hero } from "@/content/home";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const tickerItems = [...hero.ticker, ...hero.ticker]; // duplicated for seamless loop

  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gradient-to-b from-navy via-navy to-navy-deep pt-24">
      {/* Glow accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-10%] size-[36rem] rounded-full bg-accent/15 blur-3xl [animation:glow-drift_14s_ease-in-out_infinite]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-[-15%] size-[28rem] rounded-full bg-navy-soft/60 blur-3xl"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-6 lg:grid-cols-[3fr_2fr]">
        <div>
          <h1 className="font-heading text-4xl font-bold leading-tight text-foam sm:text-5xl lg:text-6xl">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist">{hero.subline}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
            <Button href={hero.secondaryCta.href} variant="ghost">
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>

        {/* Abstract AI orb — pure CSS, no stock imagery */}
        <div aria-hidden className="relative mx-auto hidden size-72 lg:block">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent/30 via-navy-soft to-transparent blur-xl [animation:glow-drift_10s_ease-in-out_infinite]" />
          <div className="absolute inset-6 rounded-full border border-accent/30" />
          <div className="absolute inset-14 rounded-full border border-foam/15" />
          <div className="absolute inset-24 rounded-full bg-accent/80 blur-sm" />
        </div>
      </div>

      {/* Capability ticker */}
      <div className="relative mt-20 border-y border-foam/10 bg-navy-deep/60 py-4" aria-hidden>
        <div className="flex w-max gap-12 [animation:ticker_28s_linear_infinite]">
          {tickerItems.map((item, i) => (
            <span key={`${item}-${i}`} className="flex items-center gap-12 whitespace-nowrap font-heading text-sm uppercase tracking-[0.25em] text-foam/60">
              {item}
              <span className="text-accent">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
