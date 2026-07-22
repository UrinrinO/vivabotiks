import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { WhyUs } from "@/components/sections/WhyUs";
import { whyUs, whyUsIntro } from "@/content/marketing";

describe("WhyUs", () => {
  it("renders intro and all six items", () => {
    render(<WhyUs />);
    expect(screen.getByRole("heading", { name: whyUsIntro.title })).toBeInTheDocument();
    for (const w of whyUs) expect(screen.getByText(w.title)).toBeInTheDocument();
  });
});
