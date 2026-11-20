import type { Entry } from "../schema.ts";

export const snkrsearch: Entry = {
  slug: "snkrsearch",
  kind: "product",
  name: "SnkrSearch",
  role: "Co-Founder & Engineer",
  employment: "Co-founded",
  location: "Remote",
  start: "2024-01",
  end: "2024-07",
  status: "live",
  url: "https://snkrsearch.com",
  summary: "Sneaker search that compares live prices across 36 retailers.",
  metrics: [
    { value: "16,486", label: "total searches run" },
    { value: "266", label: "users on the platform" },
    { value: "2,030", label: "affiliate clicks sent" },
    { value: "4–6 s", label: "per search, 36 retailers" },
  ],
  sections: [
    {
      title: "Search engine",
      points: [
        "Live scraping on every search across 13 Cheerio scrapers and 23 retailer APIs, run in parallel batches.",
        "lunr fuzzy ranking across all retailer results.",
        "Rotating user agents, proxy support and a scraper health-check endpoint.",
      ],
    },
    {
      title: "Product",
      points: [
        "Authentication with NextAuth, with verification and password reset emails via Resend.",
        "Affiliate click tracking, an admin dashboard and a Telegram bot for analytics.",
        "Sneaker news, PWA support and a Lighthouse SEO score of 100.",
      ],
    },
  ],
  stack: [
    "Next.js 14",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Prisma",
    "Cheerio",
    "NextAuth",
    "Resend",
    "Telegram Bot API",
    "lunr",
    "Tailwind CSS",
    "Vercel",
  ],
  resume: {
    context:
      "Real-time sneaker search and price comparison across 36 retailers.",
    bullets: [
      "Co-founded sneaker price search across 36 retailers with live scraping (13 scrapers, 23 APIs, 4-6 s); 16,486 searches.",
    ],
  },
};
