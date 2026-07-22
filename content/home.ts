export type Service = { number: string; title: string; description: string; href: string; bullets: string[]; image: string };
export type Stat = { value: number; suffix: string; label: string };

// New copy below is drafted from Uri's CV — review wording before launch.
export const hero = {
  headline: "AI-powered software for ambitious businesses",
  subline:
    "Vivabotiks engineers intelligent systems — AI, data platforms, and full-stack software — from Cardiff, Wales, for businesses everywhere.",
  primaryCta: { label: "Book a discovery call", href: "/contact" },
  secondaryCta: { label: "Our services", href: "/services" },
  badge: "Live robots. Smart software.",
  previewLabel: "Project preview",
};

export const servicesIntro = {
  eyebrow: "What we do",
  title: "Services built around outcomes",
  description: "AI first, data underneath, and solid engineering all the way through.",
};

export const services: Service[] = [
  {
    number: "01",
    title: "AI & Machine Learning",
    description:
      "Production LLM applications and end-to-end ML platforms — from experiment tracking and model serving to drift detection — built responsibly under GDPR-grade governance.",
    href: "/services",
    bullets: ["LLM apps, RAG & fine-tuning", "MLOps platforms end to end", "Responsible AI & data governance"],
    image: "/svc-ai.jpg",
  },
  {
    number: "02",
    title: "Data Engineering",
    description:
      "Streaming ingestion, real-time feature pipelines, and forecasting systems that turn raw operational data into decisions your team can act on.",
    href: "/services",
    bullets: ["Real-time data pipelines", "Forecasting & analytics", "Cloud data platforms"],
    image: "/svc-data.jpg",
  },
  {
    number: "03",
    title: "Software Development",
    description:
      "Web and mobile products engineered end to end — architecture, build, test, launch, and the cloud DevOps to run them reliably in production.",
    href: "/services",
    bullets: ["Web & mobile apps", "APIs & integrations", "Cloud-native DevOps"],
    image: "/svc-software.jpg",
  },
  {
    number: "04",
    title: "IoT & Robotics",
    description:
      "Living up to our name — intelligence connected to the physical world: sensor data platforms, connected devices, and the smart systems that run on them.",
    href: "/services",
    bullets: ["Connected devices", "Sensor data platforms", "Edge intelligence"],
    image: "/svc-3d.jpg",
  },
];

// About copy drafted from Uri's background — review wording before launch.
export const about = {
  eyebrow: "Who we are",
  headline: "Leading Software Engineering Company",
  paragraphs: [
    "Vivabotiks — from “living robots” — is an AI-first software company registered in Wales, UK. We engineer intelligent systems end to end: machine-learning platforms, data pipelines, and the production software around them.",
    "Founded and led by an award-winning AI engineer with clinical research experience alongside NHS Wales, and with award-winning executives joining the leadership team, every project stays senior-led from first architecture to production.",
  ],
  motif: ["Idea", "Think", "Create"],
  // Shown inside the dark stat panel over the photo (sentence from the old site's about copy).
  statBlurb:
    "Our team has a wide range of skills and experience, and we are always looking for new challenges.",
  checks: [
    "Founder-led, award-winning engineering",
    "Proven in healthcare, aviation & fintech",
    "Free consultation to scope your project",
  ],
  cta: { label: "Discover our story", href: "/about" },
};

export const stats: Stat[] = [
  { value: 40, suffix: "+", label: "Projects delivered" }, // PLACEHOLDER — confirm real figure
  { value: 9, suffix: "+", label: "Years building software" },
  { value: 92, suffix: "%", label: "Model accuracy in clinical research" },
  { value: 3, suffix: "", label: "Regulated industries served" },
];

export const finalCta = {
  headline: "Let's build what's next",
  subline:
    "Tell us about your project and we'll show you what intelligent software can do for your business.",
  cta: { label: "Start your project", href: "/contact" },
};
