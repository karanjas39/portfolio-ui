import type { Entry } from "../schema.ts";

export const varq: Entry = {
  slug: "varq",
  kind: "product",
  name: "Varq",
  role: "Solo Engineer",
  employment: "Personal project",
  start: "2026-08",
  end: "2026-08",
  status: "live",
  url: "https://varq-beige.vercel.app",
  summary:
    "Chrome extension that turns any web page into clean Markdown for AI tools.",
  metrics: [
    { value: "35", label: "automated Vitest tests" },
    { value: "0", label: "host permissions requested" },
    { value: "~400 KB", label: "extension build size" },
  ],
  sections: [
    {
      title: "What I built",
      points: [
        "Extraction pipeline using Mozilla Readability, DOMPurify and Turndown, producing Markdown with frontmatter.",
        "Chrome MV3 extension built on WXT, React 19 and Tailwind v4, tested with Vitest; landing page on Next.js 16.",
        "Runs entirely in the browser on activeTab only, with no data collection.",
      ],
    },
  ],
  stack: [
    "WXT",
    "React 19",
    "TypeScript",
    "Tailwind CSS v4",
    "Mozilla Readability",
    "DOMPurify",
    "Turndown",
    "Vitest",
    "Next.js 16",
  ],
  resume: {
    bullets: [],
  },
};
