import type { Entry } from "../schema.ts";

export const marqueeEquity: Entry = {
  slug: "marquee-equity",
  kind: "job",
  name: "Marquee Equity",
  role: "SDE-1",
  earlierRole: { title: "SDE Intern", start: "2024-07", end: "2024-12" },
  employment: "Full-time",
  location: "Remote",
  start: "2024-07",
  end: "2025-09",
  status: "past",
  url: "https://marquee-equity.com",
  summary:
    "Bluefind, an investment data SaaS with an AI layer. About $10K in monthly revenue.",
  metrics: [
    { value: "100+", label: "daily users of Agent Blue" },
    { value: "~$10K", label: "Bluefind monthly revenue" },
  ],
  sections: [
    {
      title: "Agent Blue",
      points: [
        "AI agent in the Bluefind dashboard that turns plain-English questions into filters and navigates to the right page.",
        "Agent loop built without a framework: a Claude call, filters applied in the frontend, results returned to the model until it stops.",
        "Custom context management and prompt guardrails over proprietary data on investors, LPs and people.",
        "Owned both backend and frontend.",
      ],
    },
    {
      title: "Bluefind",
      points: [
        "Took the product from MVP to production on a Next.js and NestJS modular monolith with PostgreSQL.",
        "Subscription billing, usage metering, RBAC and multi-tenancy.",
        "Server Components with ISR and SSR; monitoring with Sentry, Mixpanel, Clarity and OpenReplay.",
      ],
    },
  ],
  stack: [
    "Next.js",
    "React",
    "NestJS",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "Claude API",
    "Tailwind CSS",
    "Redux",
    "RTK Query",
    "Material UI",
    "Sentry",
    "Mixpanel",
  ],
  resume: {
    context:
      "Bluefind, an investment intelligence SaaS (~$10K monthly revenue). Joined as SDE Intern (Jul 2024 - Dec 2024).",
    bullets: [
      "Built Agent Blue from scratch, an AI agent that turns plain-English questions into dashboard filters; 100+ daily users.",
      "Wrote the agent loop with no framework: Claude call, apply filters, feed results back, repeat; own context management.",
      "Took Bluefind from MVP to production on Next.js and NestJS: subscription billing, usage metering, RBAC, multi-tenancy.",
    ],
  },
};
