import { services, type Service } from "./home";

// Services page copy — expanded from the home cards; review wording before launch.
export type ServiceDetail = Service & { paragraphs: string[] };

const detailCopy: Record<string, string[]> = {
  "01": [
    "We build AI that survives contact with production. That means LLM applications with retrieval and fine-tuning where they earn their place, and classical machine learning where it is the better tool.",
    "Every model ships with the platform around it: experiment tracking, versioned datasets, staged promotion, containerised serving, and drift monitoring. Governance is designed in from the start, so the same pipelines hold up under GDPR and clinical-grade scrutiny.",
  ],
  "02": [
    "Decisions are only as good as the data underneath them. We build streaming ingestion and real-time feature pipelines that pull operational data from wherever it lives into one dependable flow.",
    "On that foundation we deliver forecasting, dashboards, and reporting that operations teams actually use, tuned for high-throughput ingestion and honest monitoring rather than vanity charts.",
  ],
  "03": [
    "Web and mobile products engineered end to end: requirements, architecture, development, testing, and production deployment. One accountable team from the first workshop to the first release, and beyond it.",
    "We work across modern stacks, from React and React Native front ends to Python and Node.js services, with payment integrations, multi-tenant SaaS architecture, and the cloud infrastructure to run it all reliably.",
  ],
  "04": [
    "Our name means living robots, and this is where software meets the physical world. We connect devices, sensors, and machines to the intelligent systems that make sense of them.",
    "From sensor data platforms and edge intelligence to automation that acts on what the data says, we bring the same engineering discipline to hardware-adjacent systems as we do to pure software.",
  ],
};

export const servicesPage = {
  metaTitle: "Services",
  title: "Our Services",
  breadcrumb: "Services",
  metaDescription:
    "Vivabotiks services: AI & machine learning, data engineering, software development, and IoT & robotics.",

  intro: {
    eyebrow: "What we do",
    title: "Everything we build, end to end",
    description: "Four capabilities, one team. Each service stands on its own, and they are strongest together.",
  },

  details: services.map((s) => ({ ...s, paragraphs: detailCopy[s.number] ?? [] })) satisfies ServiceDetail[],

  closing: {
    title: "Not sure which service you need?",
    // PLACEHOLDER — review wording
    paragraph:
      "Most projects touch more than one. Tell us the problem and we will shape the right mix of AI, data, and engineering around it.",
    cta: { label: "Book a discovery call", href: "/contact" },
  },
};
