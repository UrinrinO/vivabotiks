import Link from "next/link";
import { footerContent, navLinks, siteMeta } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-1">
          <p className="font-heading text-xl font-bold text-ink">{siteMeta.name}</p>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">{footerContent.blurb}</p>
          <ul className="mt-6 flex gap-4">
            {footerContent.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  className="text-sm font-medium text-ink-soft transition-colors hover:text-accent"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <nav aria-label="Footer">
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-ink">Quick links</p>
          <ul className="mt-4 space-y-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-ink-soft transition-colors hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-ink">Services</p>
          <ul className="mt-4 space-y-3">
            {footerContent.services.map((s) => (
              <li key={s} className="text-sm text-ink-soft">
                {s}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-ink">Contact</p>
          <ul className="mt-4 space-y-3 text-sm text-ink-soft">
            <li>
              <a href={`mailto:${footerContent.contact.email}`} className="transition-colors hover:text-accent">
                {footerContent.contact.email}
              </a>
            </li>
            <li>{footerContent.contact.phone}</li>
            <li>{footerContent.contact.location}</li>
          </ul>
        </div>
        <div>
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-ink">Hours</p>
          <p className="mt-4 text-sm text-ink-soft">{footerContent.hours}</p>
        </div>
      </div>
      <div className="border-t border-border py-6">
        <p className="mx-auto max-w-6xl px-6 text-xs text-ink-soft">
          © {new Date().getFullYear()} {footerContent.copyrightName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
