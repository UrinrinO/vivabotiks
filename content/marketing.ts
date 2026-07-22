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

export const caseStudiesIntro: Intro = {
  eyebrow: "Selected work",
  title: "Products we've shipped",
  description: "A snapshot of the outcomes we build for. Full case studies are on the way.",
};

// PLACEHOLDER case studies — replace with real projects before launch.
export const caseStudies: CaseStudy[] = [
  {
    tag: "Automation",
    title: "Support triage assistant",
    result: "Cut first-response time by an estimated 60% with an AI triage layer.",
    image: "/case-ui.jpg",
  },
  {
    tag: "Analytics",
    title: "Revenue forecasting dashboard",
    result: "Unified five data sources into one live forecast for the leadership team.",
    image: "/case-software.jpg",
  },
  {
    tag: "Product",
    title: "Field-ops mobile app",
    result: "Shipped an offline-first app used daily by distributed field teams.",
    image: "/case-coding.jpg",
  },
];

// PLACEHOLDER founder quote — replace with a real founder statement before launch.
export const founderQuote: FounderQuote = {
  quote:
    "We started Vivabotiks to make serious software feel within reach — pairing senior engineering with AI so smaller teams can ship like big ones.",
  name: "Founder Name",
  role: "Founder & CEO, Vivabotiks",
};

export const whyUsIntro: Intro = {
  eyebrow: "Why Vivabotiks",
  title: "What working with us feels like",
  description: "Senior-led delivery, AI where it earns its place, and no hand-offs to junior teams.",
};

export const whyUs: WhyItem[] = [
  { number: "01", title: "Senior-led teams", description: "You work directly with experienced engineers and designers, start to finish.", image: "/why-team.jpg" },
  { number: "02", title: "AI where it counts", description: "We add intelligence where it creates real leverage — not as a gimmick.", image: "/svc-ai.jpg" },
  { number: "03", title: "End-to-end delivery", description: "From first idea to launch and maintenance, one accountable team owns it.", image: "/case-software.jpg" },
  { number: "04", title: "Clear communication", description: "Plain-language updates and a plan you can actually follow.", image: "/about-office.jpg" },
  { number: "05", title: "Built to last", description: "Well-tested, documented codebases you or we can maintain for years.", image: "/case-ui.jpg" },
  { number: "06", title: "Outcome focused", description: "We measure success by what your business can do after we ship.", image: "/svc-data.jpg" },
];

export const blogIntro: Intro = {
  eyebrow: "Insights",
  title: "Articles From Our Team",
};

// Titles, excerpts, and dates are the real articles from the previous site.
// `category` labels are invented — the old site had no post categories. PLACEHOLDER
export const posts: Post[] = [
  {
    date: "2024-02-23",
    category: "Security", // PLACEHOLDER
    title: "Cloud computing & Cybersecurity",
    excerpt:
      "As more and more businesses move to the cloud, it's important to understand the potential cybersecurity threats that come with this transition...",
    image: "/article.jpg",
  },
  {
    date: "2020-01-21",
    category: "Engineering", // PLACEHOLDER
    title: "Web development in Nigeria",
    excerpt:
      "In today's competitive business environment, it is important to hire the right web developers. The quality of the web developers...",
    image: "/svc-software.jpg",
  },
  {
    date: "2022-05-19",
    category: "Business", // PLACEHOLDER
    title: "Business and Innovation",
    excerpt:
      "The benefits of software engineering are many and varied. Perhaps the most significant benefit is that it can help businesses achieve their goals...",
    image: "/svc-ai.jpg",
  },
];
