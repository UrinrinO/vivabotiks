// About page copy — drafted from Uri's background; review wording before launch.
export type Credential = { title: string; detail: string; year?: string };

export const aboutPage = {
  metaTitle: "About",
  title: "About Vivabotiks",
  breadcrumb: "About",
  metaDescription: "About Vivabotiks, an AI-powered software company in Cardiff, Wales.",

  story: {
    eyebrow: "Our story",
    title: "Software that lives up to its name",
    paragraphs: [
      "Vivabotiks takes its name from “living robots”: software with intelligence built in. Systems that learn, adapt, and quietly do the heavy lifting. We are an AI-first software company registered in Wales, working from the USW Startup Stiwdio in Cardiff.",
      "We engineer intelligent systems end to end. That starts with AI and machine learning, runs through the data platforms that feed them, and finishes with the production software people actually use. When a project calls for it, we extend the same thinking to connected devices and robotics.",
      "Most of our work lives where the stakes are high: healthcare, aviation, and financial services. Regulated industries shape how we build, so governance, privacy, and reliability are part of the first architecture diagram, not a patch at the end.",
    ],
  },

  leadership: {
    eyebrow: "Leadership",
    title: "Founder-led, award-winning",
    founder: {
      name: "Uri",
      role: "Founder & CEO",
      bio: [
        "Uri founded Vivabotiks and leads every project personally. He is an AI and MLOps engineer with more than nine years of delivery across healthcare, aviation, and fintech, and he holds an MSc in Artificial Intelligence from the University of South Wales.",
        "His research on early detection of peripheral arterial disease won the university's Best Industrial Project award, with models reaching over 92% accuracy against clinical benchmarks. He has worked inside NHS Wales data governance on respiratory research, and he builds production LLM systems for sensitive clinical settings.",
      ],
    },
    execsNote: "He won't be leading alone for long: award-winning executives are joining the leadership team.",
  },

  credentials: {
    eyebrow: "Credentials",
    title: "The record behind the work",
    items: [
      {
        title: "MSc Artificial Intelligence",
        detail: "University of South Wales, Best Industrial Project award",
        year: "2024",
      },
      {
        title: "NHS Wales research collaboration",
        detail: "Clinical AI for early COPD detection in primary care",
        year: "2024",
      },
      {
        title: "Generative AI for Software Developers",
        detail: "IBM certification",
      },
      {
        title: "Nine years of production software",
        detail: "Healthcare, aviation, fintech, and enterprise SaaS",
      },
    ] satisfies Credential[],
  },
};
