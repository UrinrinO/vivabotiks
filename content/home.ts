export type Service = { number: string; title: string; description: string; href: string; bullets: string[]; image: string };
export type Stat = { value: number; suffix: string; label: string };
export type ProcessStep = { number: string; title: string; description: string };
export type Testimonial = { quote: string; name: string; role: string; company: string };

export const hero = {
  headline: "AI-powered software for ambitious businesses",
  subline:
    "Vivabotiks designs and builds intelligent products — custom software, automation, data analytics, and 3D experiences — for African businesses and beyond.",
  primaryCta: { label: "Book a discovery call", href: "/contact" },
  secondaryCta: { label: "Our services", href: "/services" },
  ticker: [
    "AI Automation",
    "Software Development",
    "Data Analytics",
    "3D Design & Animation",
    "Machine Learning",
    "Product Design",
  ],
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

export const processIntro = {
  eyebrow: "How we work",
  title: "Project lifecycle",
  description:
    "Every project gets a dedicated team that works with you from the idea stage through deployment and maintenance.",
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Ideation & Planning",
    description: "We meet your team, refine the idea, and shape a project plan with clear goals.",
  },
  {
    number: "02",
    title: "Architecture & Design",
    description:
      "Our designers and architects turn the plan into interactive UI designs and a solid technical foundation.",
  },
  {
    number: "03",
    title: "Coding & Development",
    description: "Front-end and back-end engineers build a functional, well-tested codebase.",
  },
  {
    number: "04",
    title: "Testing & QA",
    description:
      "We run performance and acceptance tests with you to make sure the software meets every requirement.",
  },
  {
    number: "05",
    title: "Launch & Maintenance",
    description:
      "We deploy, monitor, and maintain — handling updates, security, and fixes long after launch.",
  },
];

export const testimonialsIntro = {
  eyebrow: "What clients say",
  title: "Trusted by teams who ship",
};

// PLACEHOLDER TESTIMONIALS — replace with real client quotes before launch.
export const testimonials: Testimonial[] = [
  {
    quote:
      "Placeholder quote: Vivabotiks took our idea from a sketch to a working product faster than we thought possible.",
    name: "Client Name",
    role: "Founder",
    company: "Company One",
  },
  {
    quote:
      "Placeholder quote: The automation they built saves our operations team hours every single day.",
    name: "Client Name",
    role: "Operations Lead",
    company: "Company Two",
  },
  {
    quote:
      "Placeholder quote: Clear communication, senior engineers, and a launch that went exactly to plan.",
    name: "Client Name",
    role: "Product Manager",
    company: "Company Three",
  },
];

export const finalCta = {
  headline: "Let's build what's next",
  subline:
    "Tell us about your project and we'll show you what intelligent software can do for your business.",
  cta: { label: "Start your project", href: "/contact" },
};
