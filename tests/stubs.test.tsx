import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import AboutPage from "@/app/about/page";
import ContactPage from "@/app/contact/page";
import { stubPages } from "@/content/pages";

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
});
