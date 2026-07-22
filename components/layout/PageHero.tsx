import Link from "next/link";

export function PageHero({ title, breadcrumb }: { title: string; breadcrumb: string }) {
  return (
    <div className="relative overflow-hidden bg-[#04131E] pt-36 pb-20 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-0 size-[34rem] rounded-full bg-[#2f56ff]/20 blur-[120px]"
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <nav aria-label="Breadcrumb" className="text-sm text-white/50">
          <Link href="/" className="hover:text-accent-bright">Home</Link>
          <span aria-hidden className="mx-2">/</span>
          <span className="text-white">{breadcrumb}</span>
        </nav>
        <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">{title}</h1>
      </div>
    </div>
  );
}
