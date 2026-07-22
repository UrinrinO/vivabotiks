import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import AboutPage from "@/app/about/page";
import ContactPage from "@/app/contact/page";
import { contactActions, stubPages } from "@/content/pages";
import { contactFormUrl } from "@/content/site";

describe("stub pages", () => {
  it("about renders its title and coming-soon message", () => {
    render(<AboutPage />);
    expect(screen.getByRole("heading", { name: stubPages.about.title })).toBeInTheDocument();
    expect(screen.getByText(stubPages.about.message)).toBeInTheDocument();
  });
  it("contact renders its title", () => {
    render(<ContactPage />);
    expect(screen.getByRole("heading", { name: stubPages.contact.title })).toBeInTheDocument();
  });
  it("contact links out to the Google Form", () => {
    render(<ContactPage />);
    const link = screen.getByRole("link", { name: contactActions.formLabel });
    expect(link).toHaveAttribute("href", contactFormUrl);
    expect(link).toHaveAttribute("target", "_blank");
  });
});
