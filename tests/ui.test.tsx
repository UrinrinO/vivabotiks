import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

describe("ui primitives", () => {
  it("Button renders a link with href", () => {
    render(<Button href="/contact">Go</Button>);
    expect(screen.getByRole("link", { name: "Go" })).toHaveAttribute("href", "/contact");
  });
  it("SectionHeading renders eyebrow and title", () => {
    render(<SectionHeading eyebrow="Eyebrow" title="Big Title" />);
    expect(screen.getByText("Eyebrow")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Big Title" })).toBeInTheDocument();
  });
  it("Reveal renders its children", () => {
    render(<Reveal><p>Inside</p></Reveal>);
    expect(screen.getByText("Inside")).toBeInTheDocument();
  });
});
