import type { Entry } from "../schema.ts";

export const somaAi: Entry = {
  slug: "soma-ai",
  kind: "job",
  name: "Soma AI",
  role: "Founding Software Engineer",
  employment: "Full-time",
  location: "Remote",
  start: "2025-10",
  status: "active",
  url: "https://getsoma.ai",
  summary:
    "Ad-tech SaaS for launching and analysing ads on Meta, TikTok and YouTube.",
  metrics: [
    { value: "~480K", label: "Meta ads launched via Soma" },
    { value: "60", label: "customer teams on Soma" },
    { value: "4.9M", label: "metric rows synced daily" },
    { value: "113,737", label: "competitor ads ingested" },
  ],
  sections: [
    {
      title: "Creative Genome",
      points: [
        "Meta creative analytics with an ad explorer, matrix view, creative tagging and saved reports.",
        "Rewrote the backend: a 10-collection MongoDB schema and a Redis/RQ pipeline with chunked fan-out, retries and failure callbacks.",
        "Stores raw counters and computes ratios on read; a daily cron syncs incremental changes.",
        "Runs as a standalone app with its own signup and Meta connect.",
        "Syncs 103K ads and 88K creatives across 27 ad accounts.",
      ],
    },
    {
      title: "Scout",
      points: [
        "Competitor ad intelligence: discovers a brand's competitors, ingests their ads from the Meta Ad Library and enriches each ad with AI.",
        "70 cohorts and 1,216 companies tracked; 9,683 ads enriched.",
        "Two Next.js apps: Scout UI and the Scout marketplace.",
      ],
    },
    {
      title: "Soma MCP",
      points: [
        "OAuth MCP server that lets Claude and other AI assistants work inside Soma.",
        "FastAPI and the MCP Python SDK, with PKCE and dynamic client registration; deployed on Docker.",
        "5 AI clients connected.",
      ],
    },
    {
      title: "Soma Studio",
      points: [
        "Seven-stage AI video pipeline: brief, LLM prompt, starter image, poses, Gemini pose analysis, video prompt and Kling video.",
        "Sliding-window queue that respects the provider's 4-job concurrency limit, with per-unit failure handling.",
      ],
    },
    {
      title: "Launchers",
      points: [
        "TikTok: bulk ad creation with campaigns, ad groups, identities and CTAs (1,900 ads).",
        "YouTube: bulk uploads from Google Drive with playlists, thumbnails and privacy settings (3,185 uploads).",
        "Facebook and Instagram: post publishing and scheduling from Google Sheets (~17.8K posts).",
        "Meta: ~480K ads launched at a 96% success rate, plus ad transfer between ad accounts and launches from Notion pages.",
      ],
    },
    {
      title: "Platform",
      points: [
        "Self-serve signup, onboarding and Meta, TikTok and Google account connections.",
        "Used by 60 customer teams across 219 ad accounts.",
        "Primary author of the web frontend.",
      ],
    },
  ],
  stack: [
    "Python",
    "FastAPI",
    "Flask",
    "MongoDB",
    "Redis",
    "RQ",
    "MCP SDK",
    "Claude API",
    "Gemini API",
    "Meta Marketing API",
    "TikTok Marketing API",
    "YouTube Data API",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Docker",
    "AWS",
  ],
  resume: {
    context:
      "Ad-tech SaaS that has launched ~480K Meta ads for 60 customer teams. One of two engineers.",
    bullets: [
      "Built Soma MCP, an OAuth MCP server (FastAPI, MCP Python SDK, PKCE, dynamic client registration) used by 5 AI clients.",
      "Rewrote the Creative Genome backend as a multi-stage Redis/RQ pipeline with retries: 103K ads, 4.9M daily metric rows.",
      "Built Scout, competitor ad intelligence from Meta Ad Library ingestion to AI enhancement; 113,737 ads across 70 cohorts.",
      "Built a 7-stage AI video pipeline (LLM, Gemini, Kling) with a sliding-window queue that stays inside a 4-job provider limit.",
      "Built the TikTok and YouTube launchers and bulk social posting: 3,185 YouTube uploads, 1,900 TikTok ads, ~17.8K posts.",
    ],
  },
};
