import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

describe("AnimatedCounter", () => {
  it("renders a numeric value with suffix", () => {
    render(<AnimatedCounter value={95} suffix="%" />);
    expect(screen.getByText(/%$/)).toBeInTheDocument();
  });
});
