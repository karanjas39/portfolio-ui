import type { Entry } from "../schema.ts";

export const mellowCare: Entry = {
  slug: "mellow-care",
  kind: "freelance",
  name: "Mellow Care",
  role: "Full-Stack Engineer",
  employment: "Freelance",
  start: "2025-06",
  end: "2025-08",
  status: "past",
  url: "https://www.mellowcare.in",
  summary: "Pet insurance and wellness platform for dogs and cats in India.",
  metrics: [
    { value: "2,819", label: "pet owners signed up" },
    { value: "830", label: "plans bought by pet owners" },
    { value: "₹4.7 lakh", label: "collected via Cashfree" },
  ],
  sections: [
    {
      title: "What I built",
      points: [
        "Three Next.js 15 apps (customer, vet and admin) in a Turborepo with a shared Drizzle schema and UI packages.",
        "Cashfree payments with webhooks, coupons and vet commission payouts across 192 payments.",
        "Owner and pet KYC with S3 uploads, WhatsApp OTP via Zixflow and scheduled reminders.",
      ],
    },
  ],
  stack: [
    "Next.js 15",
    "TypeScript",
    "Turborepo",
    "PostgreSQL (Neon)",
    "Drizzle ORM",
    "Cashfree",
    "AWS S3",
    "Zixflow",
    "Vercel",
  ],
  resume: {
    bullets: [
      "Pet insurance platform: built the customer, vet and admin apps (Next.js 15, Turborepo, Drizzle); 2,819 pet owners.",
      "Integrated Cashfree payments, webhooks and vet payouts (₹4.7 lakh collected), S3 KYC uploads and WhatsApp OTP.",
    ],
  },
};
