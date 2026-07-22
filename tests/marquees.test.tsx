import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { logosIntro } from "@/content/marketing";

describe("LogoMarquee", () => {
  it("renders the intro title", () => {
    render(<LogoMarquee />);
    expect(screen.getByText(logosIntro.title)).toBeInTheDocument();
  });
});
