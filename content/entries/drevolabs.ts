import type { Entry } from "../schema.ts";

export const drevolabs: Entry = {
  slug: "drevolabs",
  kind: "product",
  name: "Drevolabs",
  role: "Founder & Engineer",
  employment: "Personal project",
  start: "2026-06",
  status: "active",
  url: "https://app.drevolabs.com",
  summary:
    "Health and daily-life PWA that AI assistants like Claude can read and update over MCP.",
  metrics: [
    { value: "20", label: "tools in the MCP server" },
    { value: "6", label: "OAuth permission scopes" },
    { value: "20", label: "app features shipped" },
  ],
  sections: [
    {
      title: "MCP server",
      points: [
        "Remote MCP server with read and write scopes for health, daily and ideas data.",
        "Custom OAuth 2.0 authorization server with PKCE, dynamic client registration, refresh tokens and a consent screen.",
        "User-written playbooks exposed as MCP prompts and run as slash commands.",
      ],
    },
    {
      title: "App",
      points: [
        "Tracks weight, habits, measurements, lab reports, supplements, diet and workout plans, tasks, groceries and notes.",
        "Web push reminders, email OTP login and personal access tokens for Siri and iOS Shortcuts.",
      ],
    },
  ],
  stack: [
    "Next.js 16",
    "React",
    "TypeScript",
    "PostgreSQL (Neon)",
    "Drizzle ORM",
    "NextAuth v5",
    "MCP TypeScript SDK",
    "shadcn/ui",
    "Tailwind CSS",
    "web-push",
    "Resend",
    "Vercel",
  ],
  resume: {
    bullets: [
      "Health PWA with a remote MCP server (20 tools, 6 scopes) behind my own OAuth 2.0 server: PKCE, dynamic registration.",
    ],
  },
};
