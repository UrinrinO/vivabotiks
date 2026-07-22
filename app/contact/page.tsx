import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { contactActions, stubPages } from "@/content/pages";
import { contactFormUrl, footerContent } from "@/content/site";

const page = stubPages.contact;

export const metadata: Metadata = { title: page.title, description: page.metaDescription };

export default function ContactPage() {
  return (
    <main>
      <PageHero title={page.title} breadcrumb={page.breadcrumb} />
      <div className="mx-auto max-w-6xl px-6 py-24">
        <p className="max-w-xl text-lg leading-relaxed text-ink-soft">{page.message}</p>
        <a
          href={contactFormUrl}
          target="_blank"
          rel="noopener"
          className="mt-10 inline-flex items-center gap-2 bg-ink px-6 py-3 font-heading text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink/90"
        >
          {contactActions.formLabel}
        </a>
        <p className="mt-6 text-sm text-ink-soft">
          {contactActions.emailLead}{" "}
          <a href={`mailto:${footerContent.contact.email}`} className="text-accent hover:underline">
            {footerContent.contact.email}
          </a>
        </p>
      </div>
    </main>
  );
}
