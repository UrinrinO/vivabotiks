import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Services } from "@/components/sections/Services";
import { AboutBlock } from "@/components/sections/AboutBlock";
import { services, about } from "@/content/home";

describe("Services", () => {
  it("shows the first two services, then the rest after clicking next", async () => {
    render(<Services />);
    for (const s of services.slice(0, 2)) {
      expect(screen.getByText(s.title)).toBeInTheDocument();
      expect(screen.getByText(s.description)).toBeInTheDocument();
      expect(screen.getByText(s.bullets[0])).toBeInTheDocument();
    }
    expect(screen.queryByText(services[2].title)).not.toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: "Next services" }));
    for (const s of services.slice(2, 4)) {
      expect(await screen.findByText(s.title)).toBeInTheDocument();
    }
    expect(screen.queryByText(services[0].title)).not.toBeInTheDocument();
  });

  it("wraps back with the previous button", async () => {
    render(<Services />);
    await userEvent.click(screen.getByRole("button", { name: "Previous services" }));
    for (const s of services.slice(2, 4)) {
      expect(await screen.findByText(s.title)).toBeInTheDocument();
    }
  });
});

describe("AboutBlock", () => {
  it("renders headline, paragraphs, and checks", () => {
    render(<AboutBlock />);
    expect(screen.getByRole("heading", { name: about.headline })).toBeInTheDocument();
    for (const p of about.paragraphs) expect(screen.getByText(p)).toBeInTheDocument();
    for (const c of about.checks) expect(screen.getByText(c)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: about.cta.label })).toHaveAttribute("href", about.cta.href);
  });

  it("renders the motif words", () => {
    render(<AboutBlock />);
    for (const word of about.motif) expect(screen.getByText(word)).toBeInTheDocument();
  });
});
