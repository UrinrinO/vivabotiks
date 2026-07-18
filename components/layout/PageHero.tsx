import Link from "next/link";

export function PageHero({ title, breadcrumb }: { title: string; breadcrumb: string }) {
  return (
    <div className="border-b border-border bg-gradient-to-b from-surface to-bg pt-32 pb-16">
      <div className="mx-auto max-w-6xl px-6">
        <nav aria-label="Breadcrumb" className="text-sm text-ink-soft">
          <Link href="/" className="hover:text-accent">Home</Link>
          <span aria-hidden className="mx-2">/</span>
          <span className="text-ink">{breadcrumb}</span>
        </nav>
        <h1 className="mt-4 font-heading text-4xl font-semibold text-ink sm:text-5xl">{title}</h1>
      </div>
    </div>
  );
}
