import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Footer } from "@/components/layout/Footer";
import { footerContent } from "@/content/site";

describe("Footer", () => {
  it("renders the old-site headline with the highlighted phrase", () => {
    render(<Footer />);
    const { pre, highlight, post } = footerContent.headline;
    expect(
      screen.getByRole("heading", { name: `${pre} ${highlight} ${post}` }),
    ).toBeInTheDocument();
  });

  it("renders all service links, contact details, and copyright", () => {
    render(<Footer />);
    for (const s of footerContent.services) {
      expect(screen.getByRole("link", { name: s })).toBeInTheDocument();
    }
    expect(screen.getByText(footerContent.contact.email)).toBeInTheDocument();
    expect(screen.getByText(footerContent.contact.phone)).toBeInTheDocument();
    for (const line of footerContent.contact.addressLines) {
      expect(screen.getByText(line)).toBeInTheDocument();
    }
    expect(
      screen.getByText(new RegExp(footerContent.copyrightName)),
    ).toBeInTheDocument();
  });
});
