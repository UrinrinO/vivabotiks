import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { contactPage } from "@/content/contact";
import { footerContent } from "@/content/site";

export const metadata: Metadata = {
  title: contactPage.metaTitle,
  description: contactPage.metaDescription,
};

export default function ContactPage() {
  const { intro, detailLabels, form } = contactPage;
  const { contact } = footerContent;
  return (
    <main>
      <PageHero title={contactPage.title} breadcrumb={contactPage.breadcrumb} />

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-2">
        <Reveal>
          <Tag>{intro.eyebrow}</Tag>
          <SectionHeading title={intro.title} intro={intro.description} className="mt-4" />
          <ul className="mt-10 space-y-6">
            <li className="flex items-start gap-4">
              <Mail aria-hidden className="mt-1 size-5 shrink-0 text-accent" />
              <span>
                <span className="block font-heading text-sm font-semibold uppercase tracking-widest text-ink">
                  {detailLabels.email}
                </span>
                <a
                  href={`mailto:${contact.email}`}
                  className="mt-1 block text-ink-soft transition-colors hover:text-accent"
                >
                  {contact.email}
                </a>
              </span>
            </li>
            <li className="flex items-start gap-4">
              <Phone aria-hidden className="mt-1 size-5 shrink-0 text-accent" />
              <span>
                <span className="block font-heading text-sm font-semibold uppercase tracking-widest text-ink">
                  {detailLabels.phone}
                </span>
                <span className="mt-1 block text-ink-soft">{contact.phone}</span>
              </span>
            </li>
            <li className="flex items-start gap-4">
              <MapPin aria-hidden className="mt-1 size-5 shrink-0 text-accent" />
              <span>
                <span className="block font-heading text-sm font-semibold uppercase tracking-widest text-ink">
                  {detailLabels.address}
                </span>
                <span className="mt-1 block text-ink-soft">
                  {contact.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </span>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="border border-border bg-surface p-10">
            <p className="text-base leading-relaxed text-ink-soft">{form.lead}</p>
            <div className="mt-8">
              <ContactForm />
            </div>
            <p className="mt-6 border-t border-border pt-6 text-sm text-ink-soft">
              {form.emailLead}{" "}
              <a href={`mailto:${contact.email}`} className="text-accent hover:underline">
                {contact.email}
              </a>
            </p>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
