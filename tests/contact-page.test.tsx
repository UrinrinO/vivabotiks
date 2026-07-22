import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import ContactPage from "@/app/contact/page";
import { contactPage } from "@/content/contact";
import { footerContent } from "@/content/site";

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

  it("renders the contact form fields and submit button", () => {
    render(<ContactPage />);
    expect(screen.getByLabelText(contactPage.form.nameLabel)).toBeInTheDocument();
    expect(screen.getByLabelText(contactPage.form.emailLabel)).toBeInTheDocument();
    expect(screen.getByLabelText(contactPage.form.messageLabel)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: contactPage.form.submitLabel }),
    ).toBeInTheDocument();
  });
});
