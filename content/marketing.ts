export type Partner = { name: string; initials: string };
export type CaseStudy = { tag: string; title: string; result: string; image: string };
export type FounderQuote = { quote: string; name: string; role: string };
export type WhyItem = { number: string; title: string; description: string; image: string };
export type Post = { date: string; category: string; title: string; excerpt: string; image: string };
export type Intro = { eyebrow?: string; title: string; description?: string };

export const logosIntro: Intro = {
  title: "Strong partnerships with Vivabotiks",
};

// PLACEHOLDER partners — replace with real client names/logos before launch.
export const partners: Partner[] = [
  { name: "Northwind", initials: "NW" },
  { name: "Kola Foods", initials: "KF" },
  { name: "Lumen Health", initials: "LH" },
  { name: "Paystack-like", initials: "PS" },
  { name: "Savanna Bank", initials: "SB" },
  { name: "Orbit Logistics", initials: "OL" },
];

// Solutions drafted from the founder's genericized delivery history — review wording.
export const caseStudiesIntro: Intro = {
  eyebrow: "Industry solutions",
  title: "Proven in regulated industries",
  description:
    "Intelligent systems delivered where the stakes are highest — healthcare, aviation, and financial services.",
};

export const caseStudies: CaseStudy[] = [
  {
    tag: "Healthcare AI",
    title: "Clinical-grade intelligence",
    result:
      "LLM care-communication platforms and early-detection models, engineered under NHS-grade data governance with fully anonymised pipelines.",
    image: "/case-ui.jpg",
  },
  {
    tag: "Aviation",
    title: "Smart aviation operations",
    result:
      "Demand forecasting, records automation, and compliance systems for aviation supply chains spanning multiple continents.",
    image: "/case-software.jpg",
  },
  {
    tag: "Fintech",
    title: "Platforms at national scale",
    result:
      "Payment-integrated SaaS and public-sector portals engineered to process thousands of users in a single exercise.",
    image: "/case-coding.jpg",
  },
];

// Quote wording is PLACEHOLDER — replace with Uri's real statement before launch.
export const founderQuote: FounderQuote = {
  quote:
    "Vivabotiks means living robots — software that learns, adapts, and quietly does the heavy lifting. That's the standard every system we ship is held to.",
  name: "Uri",
  role: "Founder & CEO, Vivabotiks",
};

// Why-us copy drafted from the founder's practice — review wording.
export const whyUsIntro: Intro = {
  eyebrow: "Why Vivabotiks",
  title: "What working with us feels like",
  description: "Founder-led delivery, AI where it earns its place, and no hand-offs to junior teams.",
};

export const whyUs: WhyItem[] = [
  { number: "01", title: "Founder-led engineering", description: "The director architects, builds, and reviews every project personally — no hand-offs.", image: "/why-team.jpg" },
  { number: "02", title: "AI that ships", description: "From LLM applications to MLOps platforms — research-grade thinking, production-grade delivery.", image: "/svc-ai.jpg" },
  { number: "03", title: "Data you can trust", description: "GDPR and NHS-grade governance, anonymisation, and drift monitoring built into every pipeline.", image: "/svc-data.jpg" },
  { number: "04", title: "End-to-end delivery", description: "From first idea to launch and maintenance, one accountable team owns it.", image: "/case-software.jpg" },
  { number: "05", title: "Regulated-industry ready", description: "Healthcare, aviation, and fintech delivery — where compliance is the baseline, not an afterthought.", image: "/about-office.jpg" },
  { number: "06", title: "Award-winning expertise", description: "Award-winning AI research at the helm, with award-winning executives joining the leadership.", image: "/case-ui.jpg" },
];

export const blogIntro: Intro = {
  eyebrow: "Insights",
  title: "Articles From Our Team",
};

// New UK-era articles — drafts; review wording and confirm dates before launch.
export const posts: Post[] = [
  {
    date: "2026-07-01", // PLACEHOLDER date
    category: "News",
    title: "Vivabotiks is now registered in Wales",
    excerpt:
      "We've made it official: Vivabotiks Ltd is now a UK company, building from the USW Startup Stiwdio in Cardiff — bringing AI-smart software to businesses across the UK and beyond.",
    image: "/article.jpg",
  },
  {
    date: "2026-06-15", // PLACEHOLDER date
    category: "Healthcare AI",
    title: "Early-detection AI, from research to the clinic",
    excerpt:
      "What we learned building early-detection models under clinical governance — and why anonymisation-first pipelines are the only way to earn trust in healthcare AI.",
    image: "/case-ui.jpg",
  },
  {
    date: "2026-05-28", // PLACEHOLDER date
    category: "Data Engineering",
    title: "Forecasting that operations teams actually use",
    excerpt:
      "Demand forecasts are only as good as the pipelines beneath them. How real-time ingestion and honest model monitoring turn predictions into decisions.",
    image: "/svc-data.jpg",
  },
];
