export type SocialIcon = "github" | "linkedin" | "file-text" | "mail";

export type SocialLink = {
  label: string;
  href: string;
  icon: SocialIcon;
  external?: boolean;
};

export type ExperienceItemData = {
  role: string;
  company: string;
  period: string;
  summary: string;
  bullets: string[];
};

export type SkillGroupData = {
  title: string;
  description: string;
  items: string[];
};

export const siteConfig = {
  name: "Alonso Sandoval",
  shortName: "Alonso",
  role: "Electrical & AI Engineer",
  location: "Madrid, Spain",
  availability: "Open to strategic conversations around AI products, AI data platforms, and technical leadership.",
  description:
    "Portfolio of Alonso Sandoval, an electrical and AI engineer. Co-Founder and CTO at Caudals, building systems for data, AI, and connected products.",
  headline:
    "Reliable systems for AI, data, and connected products.",
  intro:
    "I work across product architecture, backend systems, and data operations, with a focus on turning complex workflows into dependable products.",
  about:
    "I build technical products for data-heavy and model-driven workflows, where architecture, data quality, and operational reliability all matter. My work spans backend systems, dataset operations, connected infrastructure, and the tooling required to ship them well.",
  venture: {
    name: "Caudals",
    role: "Co-Founder & CTO",
    href: "https://caudals.com",
    category: "AI data startup",
    summary:
      "Focused on structured dataset operations, marketplace workflows, and internal tooling for data delivery.",
    scope: "Marketplace design, data operations, and product infrastructure."
  },
  currentFocus: [
    "Data-intensive products and internal platforms.",
    "Dataset operations, quality controls, and delivery pipelines.",
    "Connected systems, perception tooling, and edge infrastructure."
  ],
  strengths: [
    "Systems thinking across software, data, and hardware-aware environments.",
    "Clear architecture, disciplined execution, and strong operational judgment.",
    "Technical leadership that connects product direction with implementation."
  ],
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/asandova-ui",
      icon: "github",
      external: true
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/[placeholder-link]/",
      icon: "linkedin",
      external: true
    },
    {
      label: "CV",
      href: "/cv/",
      icon: "file-text"
    },
    {
      label: "Email",
      href: "mailto:[placeholder-email]@example.com",
      icon: "mail"
    }
  ],
  navigation: [
    { label: "About", href: "/#about" },
    { label: "Projects", href: "/#projects" },
    { label: "Experience", href: "/#experience" },
    { label: "Notes", href: "/notes/" },
    { label: "Contact", href: "/#contact" }
  ]
} as const;

export const experience: ExperienceItemData[] = [
  {
    role: "Cofounder & CTO",
    company: "Caudals",
    period: "Present",
    summary:
      "Building an AI startup that helps businesses monetize proprietary data and helps AI teams buy clean, compliant, ML-ready datasets.",
    bullets: [
      "Own the technical roadmap across supplier onboarding, rights review, dataset operations, quality assurance, and buyer delivery.",
      "Design the workflows that turn raw files, exports, or feeds into AI-ready datasets through cleaning, anonymization, labeling, packaging, and QA.",
      "Lead the platform direction for the marketplace, private offers, and internal tooling that sits between data suppliers and AI teams."
    ]
  },
  {
    role: "[Placeholder] Senior AI Engineer / Platform Engineer",
    company: "[Placeholder Company]",
    period: "2021 - 2024",
    summary:
      "Built production-oriented AI systems, backend platforms, and data workflows for real operational environments.",
    bullets: [
      "Developed backend services and data pipelines that made AI workflows usable for operators and business stakeholders.",
      "Partnered with domain experts to turn prototypes into repeatable AI product capabilities.",
      "Replace this with concrete models, latency, adoption, revenue, or efficiency metrics."
    ]
  },
  {
    role: "[Placeholder] Electrical / Systems Engineer",
    company: "[Placeholder Lab / Integrator / Product Team]",
    period: "2018 - 2021",
    summary:
      "Worked on systems engineering, technical analysis, and delivery in environments where rigor and reliability mattered.",
    bullets: [
      "Owned technical analysis and implementation across infrastructure, monitoring, and performance-sensitive systems.",
      "Built the engineering foundation that later expanded into AI platforms, data products, and applied AI work.",
      "Replace this with specific technologies, programs, and scale."
    ]
  }
];

export const skillGroups: SkillGroupData[] = [
  {
    title: "AI Systems",
    description: "Applied AI product work across models, evaluation, retrieval, and operator-facing workflows.",
    items: ["LLM workflows", "RAG systems", "AI copilots", "Evaluation", "Prompt systems", "Experimentation"]
  },
  {
    title: "Data & ML Operations",
    description: "Turning raw data into clean, compliant, ML-ready assets for AI teams.",
    items: ["Data pipelines", "Schema design", "Anonymization", "Dataset QA", "Labeling ops", "Dataset packaging"]
  },
  {
    title: "Backend & Platform",
    description: "Service architecture and product infrastructure for AI products and operational systems.",
    items: ["TypeScript", "Node.js", "APIs", "PostgreSQL", "Workflow design", "System design"]
  },
  {
    title: "Electrical & Systems",
    description: "Analytical rigor from electrical and systems engineering applied to product and AI architecture.",
    items: ["Systems modeling", "Signal analysis", "Automation", "Edge environments", "Technical analysis", "Operational rigor"]
  }
];

export const contactLinks = {
  email: "mailto:[placeholder-email]@example.com",
  github: "https://github.com/asandova-ui",
  linkedin: "https://www.linkedin.com/in/[placeholder-link]/"
} as const;
