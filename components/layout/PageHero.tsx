import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export function PageHero({ title, breadcrumb }: { title: string; breadcrumb: string }) {
  return (
    <div className="relative overflow-hidden bg-[#04131E] pt-44 pb-28 text-white">
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
      {/* Diagonal blue light beam, reused from the hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[15%] top-[-40%] h-[180%] w-[80%] rotate-[16deg]"
        style={{
          background:
            "linear-gradient(105deg, rgba(47,86,255,0) 18%, rgba(90,125,255,0.32) 46%, rgba(47,86,255,0) 74%)",
          filter: "blur(70px)",
        }}
      />
      {/* Soft amber glow (true circle) */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10rem] top-0 size-[28rem] rounded-full bg-accent-bright/10 blur-[120px]"
      />
      {/* Oversized page-name watermark, clipped at the bottom edge */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-[-0.25em] select-none whitespace-nowrap text-center font-heading text-[16vw] font-bold leading-none text-white/[0.05]"
      >
        {breadcrumb}
      </span>

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-3 font-heading text-sm uppercase tracking-[0.2em] text-white/60"
          >
            <Link href="/" className="transition-colors hover:text-accent-bright">
              Home
            </Link>
            <span aria-hidden className="text-accent-bright">
              /
            </span>
            <span className="text-white">{breadcrumb}</span>
          </nav>
          <h1 className="mt-6 font-heading text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            {title}
          </h1>
        </Reveal>
      </div>
    </div>
  );
}
