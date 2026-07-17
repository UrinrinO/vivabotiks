import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Footer } from "@/components/layout/Footer";
import { footerContent } from "@/content/site";

describe("Footer", () => {
  it("renders contact info and services", () => {
    render(<Footer />);
    expect(screen.getByText(footerContent.contact.email)).toBeInTheDocument();
    for (const s of footerContent.services) {
      expect(screen.getByText(s)).toBeInTheDocument();
    }
  });
});
