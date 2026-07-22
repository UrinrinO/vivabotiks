import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { PixelDissolve } from "@/components/ui/PixelDissolve";
import { Reveal } from "@/components/ui/Reveal";

describe("PixelDissolve", () => {
  it("renders an aria-hidden container with more than 10 pixel squares", () => {
    const { container } = render(<PixelDissolve />);
    const root = container.firstChild as HTMLElement;
    expect(root).toHaveAttribute("aria-hidden");
    expect(container.querySelectorAll("[data-pixel]").length).toBeGreaterThan(10);
  });
});

describe("Reveal scale option", () => {
  it("renders its children when the scale prop is enabled", () => {
    render(
      <Reveal scale>
        <p>Settled</p>
      </Reveal>,
    );
    expect(screen.getByText("Settled")).toBeInTheDocument();
  });
});
