export type Service = { number: string; title: string; description: string; href: string; bullets: string[]; image: string };
export type Stat = { value: number; suffix: string; label: string };

export const hero = {
  headline: "AI-powered software for ambitious businesses",
  subline:
    "Vivabotiks designs and builds intelligent products — custom software, automation, data analytics, and 3D experiences — for African businesses and beyond.",
  primaryCta: { label: "Book a discovery call", href: "/contact" },
  secondaryCta: { label: "Our services", href: "/services" },
  badge: "Software, reimagined with AI",
  previewLabel: "Project preview",
};

export const servicesIntro = {
  eyebrow: "What we do",
  title: "Services built around outcomes",
  description: "Four core capabilities, delivered end to end by a senior team.",
};

export const services: Service[] = [
  {
    number: "01",
    title: "AI & Automation Solutions",
    description:
      "Custom AI assistants, chatbots, and workflow automation that remove repetitive work and let your team move faster.",
    href: "/services",
    bullets: ["Custom AI assistants", "Workflow automation", "Chatbots & agents"],
    image: "/svc-ai.jpg",
  },
  {
    number: "02",
    title: "Software Development",
    description:
      "Web and mobile products engineered end to end — design, build, test, launch, and long-term support.",
    href: "/services",
    bullets: ["Web & mobile apps", "APIs & integrations", "Testing & support"],
    image: "/svc-software.jpg",
  },
  {
    number: "03",
    title: "Data Analytics & Visualization",
    description:
      "We turn raw data into dashboards and forecasts that power confident business decisions.",
    href: "/services",
    bullets: ["Dashboards", "Forecasting", "Data pipelines"],
    image: "/svc-data.jpg",
  },
  {
    number: "04",
    title: "3D Design & Animation",
    description:
      "Detailed 3D visuals and animation that showcase your products in their best possible light.",
    href: "/services",
    bullets: ["Product visuals", "Animation", "Interactive 3D"],
    image: "/svc-3d.jpg",
  },
];

export const about = {
  eyebrow: "Who we are",
  headline: "Leading Software Engineering Company",
  paragraphs: [
    "We are a team of software developers with vast experience in creating technology solutions for our clients. We have a passion for developing software that makes a difference in the world, and we are dedicated to helping our clients achieve their goals.",
    "Our team has a wide range of skills and experience, and we are always looking for new challenges. We are committed to providing the best possible service to our clients, and we believe that our work should speak for itself.",
  ],
  motif: ["Idea", "Think", "Create"],
  // Shown inside the dark stat panel over the photo (sentence from the old site's about copy).
  statBlurb:
    "Our team has a wide range of skills and experience, and we are always looking for new challenges.",
  checks: [
    "Experienced, senior-led team",
    "End-to-end delivery, from idea to launch",
    "Free consultation to scope your project",
  ],
  cta: { label: "Discover our story", href: "/about" },
};

// PLACEHOLDER VALUES — replace with real figures before launch (see spec).
export const stats: Stat[] = [
  { value: 40, suffix: "+", label: "Projects delivered" },
  { value: 8, suffix: "+", label: "Years building software" },
  { value: 95, suffix: "%", label: "Client satisfaction" },
  { value: 12, suffix: "+", label: "Industries served" },
];

export const finalCta = {
  headline: "Let's build what's next",
  subline:
    "Tell us about your project and we'll show you what intelligent software can do for your business.",
  cta: { label: "Start your project", href: "/contact" },
};
