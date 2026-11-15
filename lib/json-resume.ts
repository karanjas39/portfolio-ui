import { freelance, fullRole, jobs, products, profile } from "@/content";
import type { Entry } from "@/content/schema";

import { RESUME_PATH, SITE_URL } from "./site";

const points = (e: Entry) => [
  ...e.metrics.map((m) => `${m.value} ${m.label}`),
  ...e.sections.flatMap((s) => s.points),
];

export const jsonResume = () => ({
  $schema:
    "https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json",
  basics: {
    name: profile.name,
    label: profile.headline,
    email: profile.email,
    url: SITE_URL,
    summary: profile.summary,
    location: {
      region: profile.location.region,
      countryCode: profile.location.countryCode,
    },
    profiles: [
      { network: "LinkedIn", username: profile.handle, url: profile.linkedin },
      { network: "GitHub", username: "karanjas39", url: profile.github },
    ],
  },
  work: [...jobs, ...freelance].flatMap((e) => [
    {
      name: e.name,
      position: fullRole(e),
      url: e.url,
      location: e.location,
      startDate: e.earlierRole ? addMonth(e.earlierRole.end) : e.start,
      endDate: e.end,
      summary: e.summary,
      highlights: points(e),
    },
    ...(e.earlierRole
      ? [
          {
            name: e.name,
            position: e.earlierRole.title,
            location: e.location,
            startDate: e.earlierRole.start,
            endDate: e.earlierRole.end,
          },
        ]
      : []),
  ]),
  projects: products.map((e) => ({
    name: e.name,
    description: e.summary,
    url: e.url,
    startDate: e.start,
    endDate: e.end,
    roles: [e.role],
    highlights: points(e),
    keywords: e.stack,
  })),
  education: profile.education.map((ed) => ({
    institution: ed.school,
    area: ed.field,
    studyType: ed.degree,
    startDate: ed.start,
    endDate: ed.end,
    score: ed.score,
  })),
  awards: profile.awards,
  skills: profile.skills.map((s) => ({ name: s.label, keywords: s.items })),
  meta: {
    canonical: `${SITE_URL}/career.json`,
    version: "v1.0.0",
    lastModified: profile.updated,
    resumePdf: `${SITE_URL}${RESUME_PATH}`,
  },
});

function addMonth(ym: string) {
  const [y, m] = ym.split("-").map(Number);
  return m === 12 ? `${y + 1}-01` : `${y}-${String(m + 1).padStart(2, "0")}`;
}
