import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Marquee } from "@/components/ui/Marquee";
import { CardVisual } from "@/components/ui/CardVisual";

describe("Marquee", () => {
  it("renders its children (duplicated for loop)", () => {
    render(<Marquee><span>Hello</span></Marquee>);
    expect(screen.getAllByText("Hello").length).toBeGreaterThanOrEqual(1);
  });
});

describe("CardVisual", () => {
  it("renders a decorative box", () => {
    const { container } = render(<CardVisual />);
    expect(container.firstChild).toBeTruthy();
  });
});
