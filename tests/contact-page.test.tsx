import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import ContactPage from "@/app/contact/page";
import { contactPage } from "@/content/contact";
import { contactFormUrl, footerContent } from "@/content/site";

describe("Contact page", () => {
  it("renders the page title and contact details", () => {
    render(<ContactPage />);
    expect(
      screen.getByRole("heading", { level: 1, name: contactPage.title }),
    ).toBeInTheDocument();
    expect(screen.getAllByText(footerContent.contact.email).length).toBeGreaterThan(0);
    expect(screen.getByText(footerContent.contact.phone)).toBeInTheDocument();
    for (const line of footerContent.contact.addressLines) {
      expect(screen.getByText(line)).toBeInTheDocument();
    }
  });

  it("links out to the project form in a new tab", () => {
    render(<ContactPage />);
    const link = screen.getByRole("link", { name: contactPage.form.label });
    expect(link).toHaveAttribute("href", contactFormUrl);
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener");
  });
});
