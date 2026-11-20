import type { Profile } from "./schema.ts";

export const profile: Profile = {
  name: "Jaskaran Singh",
  givenName: "Jaskaran",
  familyName: "Singh",
  handle: "singhjaskaran",
  headline: "Founding Engineer | Full-Stack & AI",
  oneLiner:
    "Software engineer with 2+ years of experience building production SaaS, AI agents and data pipelines.",
  summary:
    "Software engineer with 2+ years of experience building production SaaS, AI agents and data pipelines. At Soma AI, built the MCP server, a Meta analytics pipeline (4.9M daily metric rows) and a competitor ad intelligence tool. Previously built Agent Blue, a Claude agent with 100+ daily users, and co-founded SnkrSearch.",
  availability: "Available for new roles",
  location: {
    region: "Punjab",
    country: "India",
    countryCode: "IN",
    workMode: "Remote",
    hours: "Works US and EU hours",
  },
  email: "singhjaskaran4486@gmail.com",
  linkedin: "https://www.linkedin.com/in/singhjaskaran/",
  github: "https://github.com/karanjas39",
  site: "https://singhjaskaran.dev",
  topMetrics: [
    {
      value: "~480K",
      label: "Meta ads launched via Soma",
      slug: "soma-ai",
    },
    {
      value: "4.9M",
      label: "metric rows synced daily",
      slug: "soma-ai",
    },
    {
      value: "16,486",
      label: "searches on SnkrSearch",
      slug: "snkrsearch",
    },
    {
      value: "100+",
      label: "daily users of Agent Blue",
      slug: "marquee-equity",
    },
  ],
  education: [
    {
      degree: "B.Tech",
      field: "Computer Science & Engineering",
      school: "DAV University",
      place: "Jalandhar, Punjab",
      start: "2021-08",
      end: "2025-06",
      score: "CGPA 9.11 / 10",
    },
  ],
  awards: [
    {
      title: "1st Place, Hackathon 2K23",
      awarder: "IIC-DAVU",
      date: "2023-05",
    },
    {
      title: "2nd Place, The Brainiacs Innovation Competition",
      awarder: "IIC-DAVU",
      date: "2023-02",
    },
  ],
  skills: [
    {
      label: "AI",
      items: [
        "LLM APIs",
        "AI agents",
        "tool calling",
        "MCP servers",
        "RAG",
        "prompt engineering",
      ],
    },
    {
      label: "Languages",
      items: ["TypeScript", "JavaScript", "Python", "SQL"],
    },
    {
      label: "Backend",
      items: [
        "Node.js",
        "NestJS",
        "Express",
        "Hono",
        "FastAPI",
        "Flask",
        "REST APIs",
        "OAuth 2.0",
        "background jobs",
        "webhooks",
        "web scraping",
      ],
    },
    {
      label: "Frontend",
      items: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "shadcn/ui",
        "Redux",
        "Zod",
        "PWA",
        "Chrome extensions",
      ],
    },
    {
      label: "Data",
      items: ["PostgreSQL", "MongoDB", "Redis", "Qdrant", "Drizzle", "Prisma"],
    },
    {
      label: "Infra",
      items: [
        "Vercel",
        "Cloudflare Workers",
        "AWS",
        "Docker",
        "Turborepo",
        "Vitest",
        "Sentry",
        "Mixpanel",
      ],
    },
    {
      label: "Integrations",
      items: [
        "Ad platform APIs",
        "payment gateways",
        "Google Workspace APIs",
        "Notion API",
        "email and WhatsApp APIs",
      ],
    },
  ],
  updated: "2026-11-20",
};
