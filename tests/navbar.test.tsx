import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Navbar } from "@/components/layout/Navbar";
import { navLinks, navCta } from "@/content/site";

describe("Navbar", () => {
  it("renders all nav links and the CTA", () => {
    render(<Navbar />);
    for (const link of navLinks) {
      expect(screen.getAllByRole("link", { name: link.label }).length).toBeGreaterThan(0);
    }
    expect(screen.getAllByRole("link", { name: new RegExp(navCta.label) }).length).toBeGreaterThan(0);
  });
  it("toggles the mobile menu", async () => {
    render(<Navbar />);
    await userEvent.click(screen.getByRole("button", { name: "Open menu" }));
    expect(screen.getByRole("button", { name: "Close menu" })).toBeInTheDocument();
  });
});
