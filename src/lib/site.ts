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
  role: "Telecommunications & AI Engineer",
  location: "Madrid, Spain",
  availability: "Open to senior engineering, architecture, and applied AI opportunities.",
  description:
    "Personal portfolio for Alonso Sandoval, a telecommunications and AI engineer focused on resilient systems, data platforms, and technically credible product execution.",
  headline:
    "Carrier-grade systems thinking for AI products, network intelligence, and high-trust engineering.",
  intro:
    "I work at the intersection of telecommunications, software platforms, and applied AI. My focus is turning complex infrastructure, telemetry, and operational workflows into products that are reliable, understandable, and useful to technical teams.",
  about:
    "This site is designed as a structured portfolio rather than a personal blog template. The content emphasizes system design, delivery rigor, and measurable technical impact. Replace the marked placeholders with your actual roles, metrics, and links.",
  currentFocus: [
    "AI-assisted operations and decision support for network and infrastructure teams.",
    "Private 5G, edge, and telemetry-heavy platforms with product-grade interfaces.",
    "End-to-end engineering across architecture, backend systems, data pipelines, and delivery."
  ],
  strengths: [
    "Telecommunications engineering grounded in reliability, signal flow, and operational constraints.",
    "Applied AI engineering with emphasis on auditability, deployment discipline, and real-world usability.",
    "Cross-functional execution that connects technical architecture with product outcomes."
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
    role: "[Placeholder] Senior Telecommunications & AI Engineer",
    company: "[Placeholder Company / Operator / Consultancy]",
    period: "2024 - Present",
    summary:
      "Leading architecture and delivery across network intelligence, AI-enabled tooling, and product-facing data workflows.",
    bullets: [
      "Designed platform components that connect operational telemetry with decision support and internal tooling.",
      "Translated infrastructure constraints into product architecture, delivery plans, and measurable engineering outcomes.",
      "Replace this entry with actual scope, team size, and impact metrics."
    ]
  },
  {
    role: "[Placeholder] AI Solutions Engineer",
    company: "[Placeholder Company]",
    period: "2021 - 2024",
    summary:
      "Built production-oriented data and AI systems for real operational environments, with emphasis on reliability and adoption.",
    bullets: [
      "Developed backend and data flows that made infrastructure signals usable for operators and business stakeholders.",
      "Partnered with domain experts to turn research prototypes into repeatable product capabilities.",
      "Replace this with concrete models, latency, cost, or adoption metrics."
    ]
  },
  {
    role: "[Placeholder] Telecommunications Engineer",
    company: "[Placeholder Lab / Integrator / Operator]",
    period: "2018 - 2021",
    summary:
      "Worked on network performance, systems integration, and technical delivery in environments where operational rigor mattered.",
    bullets: [
      "Owned technical analysis and implementation across infrastructure, monitoring, and service-level constraints.",
      "Built the engineering foundation that later expanded into data platforms and applied AI work.",
      "Replace this with specific technologies, programs, and scale."
    ]
  }
];

export const skillGroups: SkillGroupData[] = [
  {
    title: "Telecommunications",
    description: "Systems thinking across signal, transport, observability, and operational workflows.",
    items: ["5G / LTE", "Private networks", "Telemetry", "Network operations", "Protocol analysis", "Edge systems"]
  },
  {
    title: "AI & Data",
    description: "Applied AI with engineering discipline rather than demo-first delivery.",
    items: ["Python", "LLM workflows", "MLOps foundations", "Feature engineering", "Vector retrieval", "Experimentation"]
  },
  {
    title: "Backend & Platform",
    description: "Service architecture and product infrastructure built for maintainability and clarity.",
    items: ["TypeScript", "Node.js", "APIs", "PostgreSQL", "Event-driven systems", "System design"]
  },
  {
    title: "Infra & Tooling",
    description: "Toolchains that support deployment confidence, observability, and fast iteration.",
    items: ["Docker", "GitHub Actions", "CI/CD", "Linux", "Cloud services", "Monitoring"]
  }
];

export const contactLinks = {
  email: "mailto:[placeholder-email]@example.com",
  github: "https://github.com/asandova-ui",
  linkedin: "https://www.linkedin.com/in/[placeholder-link]/"
} as const;
