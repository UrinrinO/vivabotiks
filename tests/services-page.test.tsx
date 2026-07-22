import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import ServicesPage from "@/app/services/page";
import { servicesPage } from "@/content/services";

describe("Services page", () => {
  it("renders the page title and intro", () => {
    render(<ServicesPage />);
    expect(
      screen.getByRole("heading", { level: 1, name: servicesPage.title }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: servicesPage.intro.title })).toBeInTheDocument();
  });

  it("renders every service with its expanded copy and bullets", () => {
    render(<ServicesPage />);
    for (const service of servicesPage.details) {
      expect(screen.getByRole("heading", { name: service.title })).toBeInTheDocument();
      expect(screen.getByText(service.paragraphs[0])).toBeInTheDocument();
      expect(screen.getByText(service.bullets[0])).toBeInTheDocument();
    }
  });

  it("renders the closing band with its CTA", () => {
    render(<ServicesPage />);
    expect(
      screen.getByRole("heading", { name: servicesPage.closing.title }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: servicesPage.closing.cta.label }),
    ).toHaveAttribute("href", servicesPage.closing.cta.href);
  });
});
