import { describe, expect, it } from "vitest";
import { navLinks, navCta, footerContent, siteMeta, contactFormUrl } from "@/content/site";
import { services, about, stats, finalCta } from "@/content/home";

describe("content shape", () => {
  it("has the four nav links and a contact CTA", () => {
    expect(navLinks.map((l) => l.label)).toEqual(["Home", "About", "Services", "Articles"]);
    expect(navCta.label).toBe("Get in touch");
    expect(navCta.href).toBe("/contact");
  });
  it("home content matches the spec counts", () => {
    expect(services).toHaveLength(4);
    expect(stats).toHaveLength(4);
    expect(finalCta.cta.href).toBe("/contact");
    expect(about.checks).toHaveLength(3);
    expect(about.motif).toEqual(["Idea", "Think", "Create"]);
  });
  it("footer has contact info and the highlighted headline", () => {
    expect(footerContent.contact.email).toContain("@");
    expect(footerContent.contact.phone.length).toBeGreaterThan(0);
    expect(footerContent.contact.addressLines.length).toBeGreaterThan(0);
    expect(footerContent.headline.highlight.length).toBeGreaterThan(0);
    expect(siteMeta.name).toBe("Vivabotiks");
  });
  it("has a contact form URL", () => {
    expect(contactFormUrl).toMatch(/^https:\/\//);
  });
});
