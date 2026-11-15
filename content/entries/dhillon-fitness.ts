import type { Entry } from "../schema.ts";

export const dhillonFitness: Entry = {
  slug: "dhillon-fitness",
  kind: "freelance",
  name: "Dhillon Fitness",
  role: "Full-Stack Engineer",
  employment: "Freelance",
  location: "Punjab",
  start: "2024-08",
  status: "live",
  url: "https://dhillonfitness.vercel.app",
  summary: "Gym management app, used daily by a gym in Punjab since Sep 2024.",
  metrics: [
    { value: "303", label: "gym members managed" },
    { value: "233", label: "memberships sold or renewed" },
    { value: "₹2.29 lakh", label: "revenue recorded in app" },
    { value: "₹0", label: "monthly infra cost" },
  ],
  sections: [
    {
      title: "What I built",
      points: [
        "Member, plan and renewal management with payment balances and revenue analytics.",
        "Next.js frontend and a Hono API on Cloudflare Workers, with Prisma Accelerate on Neon Postgres.",
        "Shared Zod types published as an npm package.",
      ],
    },
  ],
  stack: [
    "Next.js",
    "React",
    "TypeScript",
    "Redux Toolkit",
    "Zod",
    "TanStack Table",
    "Recharts",
    "Hono",
    "Cloudflare Workers",
    "Prisma Accelerate",
    "PostgreSQL (Neon)",
    "Vercel",
  ],
  resume: {
    context: "Gym management app used daily by a gym in Punjab since Sep 2024.",
    bullets: [
      "Gym app in daily use since Sep 2024: Next.js, Hono on Cloudflare Workers, Neon, zero infra cost; 303 members.",
    ],
  },
};
