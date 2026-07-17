import Link from "next/link";

export function PageHero({ title, breadcrumb }: { title: string; breadcrumb: string }) {
  return (
    <div className="border-b border-foam/10 bg-gradient-to-b from-navy-soft/40 to-navy pt-32 pb-16">
      <div className="mx-auto max-w-6xl px-6">
        <nav aria-label="Breadcrumb" className="text-sm text-mist">
          <Link href="/" className="hover:text-accent">Home</Link>
          <span aria-hidden className="mx-2">/</span>
          <span className="text-foam">{breadcrumb}</span>
        </nav>
        <h1 className="mt-4 font-heading text-4xl font-bold text-foam sm:text-5xl">{title}</h1>
      </div>
    </div>
  );
}
