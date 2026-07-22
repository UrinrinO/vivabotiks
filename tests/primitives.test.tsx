import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Marquee } from "@/components/ui/Marquee";

describe("Marquee", () => {
  it("renders its children (duplicated for loop)", () => {
    render(<Marquee><span>Hello</span></Marquee>);
    expect(screen.getAllByText("Hello").length).toBeGreaterThanOrEqual(1);
  });
});
