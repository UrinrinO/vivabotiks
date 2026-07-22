export type StubPage = {
  title: string;
  breadcrumb: string;
  message: string;
  metaDescription: string;
};

export const stubPages: Record<"about" | "services" | "articles" | "contact", StubPage> = {
  about: {
    title: "About Vivabotiks",
    breadcrumb: "About",
    message:
      "Our full story is on its way. In the meantime, we'd love to talk about your next project.",
    metaDescription: "About Vivabotiks — an AI-powered software company.",
  },
  services: {
    title: "Our Services",
    breadcrumb: "Services",
    message:
      "Detailed service pages are coming soon. Reach out and we'll walk you through what we can build together.",
    metaDescription: "Vivabotiks services: AI & automation, software development, data analytics, 3D design.",
  },
  articles: {
    title: "Articles",
    breadcrumb: "Articles",
    message: "Fresh writing from our team is coming soon. Check back shortly.",
    metaDescription: "Articles and insights from the Vivabotiks team.",
  },
  contact: {
    title: "Contact Us",
    breadcrumb: "Contact",
    message:
      "Our contact page is being built. For now, reach us by email and we'll get back to you within one business day.",
    metaDescription: "Get in touch with Vivabotiks to start your project.",
  },
};

export const stubBackHome = { label: "Back to home", href: "/" };

export const contactActions = {
  // PLACEHOLDER — review wording
  formLabel: "Open the project form",
  // PLACEHOLDER — review wording
  emailLead: "Prefer email? Write to us at",
};
