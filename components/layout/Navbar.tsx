"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Menu, Star, X } from "lucide-react";
import { navCta, navLinks, siteMeta } from "@/content/site";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "border-b border-border bg-bg/90 backdrop-blur" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="font-heading text-xl font-bold tracking-tight text-ink">
          {siteMeta.name}
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-heading text-sm font-medium text-ink-soft transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={navCta.href}
            className="hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 font-heading text-sm font-medium text-white transition-colors hover:bg-ink/90 sm:inline-flex"
          >
            <Star aria-hidden className="size-4 fill-accent-bright text-accent-bright" />
            {navCta.label}
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
            className="rounded-full border border-border p-2.5 text-ink lg:hidden"
          >
            {open ? <X aria-hidden className="size-5" /> : <Menu aria-hidden className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-18 z-40 flex flex-col gap-2 bg-bg px-6 py-10 lg:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-heading text-2xl font-semibold text-ink hover:text-accent"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <Link
              href={navCta.href}
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-6 py-3 font-heading text-sm font-medium text-white"
            >
              <Star aria-hidden className="size-4 fill-accent-bright text-accent-bright" />
              {navCta.label}
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
