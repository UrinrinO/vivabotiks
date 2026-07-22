import Link from "next/link";
import { footerContent } from "@/content/site";

// Recreates the previous Vivabotiks footer: a fixed, full-height navy panel
// that the page content scrolls over and reveals (the page wrapper in
// layout.tsx carries a matching 100svh bottom margin). Scroll-driven layout
// only — no timed animation, so it is reduced-motion safe.
export function Footer() {
  const { headline, services, contact, copyrightName } = footerContent;
  return (
    <footer className="fixed inset-x-0 bottom-0 z-0 flex h-svh flex-col justify-between overflow-y-auto bg-[#04131E] text-white">
      {/* Barely-there grid, echoing the hero's texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />
      <div className="relative mx-auto grid w-full max-w-6xl flex-1 items-center gap-12 px-6 pt-28 lg:grid-cols-[3fr_2fr]">
        <h2 className="font-heading text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
          {headline.pre} <span className="text-accent-bright">{headline.highlight}</span> {headline.post}
        </h2>
        <ul className="space-y-3 text-lg text-white/85 lg:text-right">
          {services.map((s) => (
            <li key={s}>
              <Link href="/services" className="transition-colors hover:text-accent-bright">
                {s}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 pb-10">
        <div className="grid gap-8 text-sm text-white/70 sm:grid-cols-3">
          <div>
            <p className="text-white">Email</p>
            <p className="mt-3">
              <a href={`mailto:${contact.email}`} className="hover:text-accent-bright">{contact.email}</a>
            </p>
          </div>
          <div className="sm:text-center">
            <p className="text-white">Address</p>
            <div className="mt-3">
              {contact.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
          <div className="sm:text-right">
            <p className="text-white">Phone</p>
            <p className="mt-3">{contact.phone}</p>
          </div>
        </div>
        <p className="mt-12 text-center text-sm text-white/60">
          © Copyright {new Date().getFullYear()}. {copyrightName}.
        </p>
      </div>
    </footer>
  );
}
