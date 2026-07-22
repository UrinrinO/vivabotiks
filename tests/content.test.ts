import { describe, expect, it } from "vitest";
import { navLinks, navCta, footerContent, siteMeta, contactFormUrl } from "@/content/site";
import { hero, services, about, stats, processSteps, testimonials, faqs, finalCta } from "@/content/home";

describe("content shape", () => {
  it("has the five nav links and a CTA", () => {
    expect(navLinks.map((l) => l.label)).toEqual(["Home", "About", "Services", "Articles", "Contact"]);
    expect(navCta.href).toBe("/contact");
  });
  it("home content matches the spec counts", () => {
    expect(services).toHaveLength(4);
    expect(stats).toHaveLength(4);
    expect(processSteps).toHaveLength(5);
    expect(testimonials).toHaveLength(3);
    expect(faqs).toHaveLength(5);
    expect(hero.ticker.length).toBeGreaterThanOrEqual(4);
    expect(finalCta.cta.href).toBe("/contact");
    expect(about.checks).toHaveLength(3);
    expect(about.motif).toEqual(["Idea", "Think", "Create"]);
  });
  it("footer has contact info and socials", () => {
    expect(footerContent.contact.email).toContain("@");
    expect(footerContent.contact.email2).toContain("@");
    expect(footerContent.contact.phone2.length).toBeGreaterThan(0);
    expect(footerContent.socials.length).toBeGreaterThan(0);
    expect(siteMeta.name).toBe("Vivabotiks");
  });
  it("has a contact form URL", () => {
    expect(contactFormUrl).toMatch(/^https:\/\//);
  });
});
