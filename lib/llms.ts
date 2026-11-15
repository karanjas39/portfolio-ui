import { freelance, fullRole, jobs, products, profile } from "@/content";
import type { Entry } from "@/content/schema";

import { formatMonth, formatRange } from "./format";
import { RESUME_PATH, SITE_URL } from "./site";

const entryBlock = (e: Entry) =>
  [
    `### [${e.name}](${SITE_URL}/work/${e.slug})`,
    [
      fullRole(e) +
        (e.earlierRole ? `, promoted from ${e.earlierRole.title}` : ""),
      formatRange(e.start, e.end),
      e.employment,
      e.location,
    ]
      .filter(Boolean)
      .join(" · "),
    e.summary,
    e.url && `Website: ${e.url}`,
    e.metrics.length > 0 &&
      e.metrics.map((m) => `- ${m.value} ${m.label}`).join("\n"),
    ...e.sections.map(
      (s) => `#### ${s.title}\n${s.points.map((p) => `- ${p}`).join("\n")}`
    ),
    `Stack: ${e.stack.join(", ")}`,
  ]
    .filter(Boolean)
    .join("\n\n");

export const llmsTxt = () =>
  [
    `# ${profile.name}`,
    `> ${profile.headline}`,
    profile.summary,
    [
      `- ${profile.availability}`,
      `- Location: ${profile.location.region}, ${profile.location.country} (${profile.location.workMode}). ${profile.location.hours}.`,
      `- Email: ${profile.email}`,
      `- LinkedIn: ${profile.linkedin}`,
      `- GitHub: ${profile.github}`,
      `- Resume (PDF): ${SITE_URL}${RESUME_PATH}`,
      `- JSON Resume: ${SITE_URL}/career.json`,
    ].join("\n"),
    "## Key numbers",
    profile.topMetrics.map((m) => `- ${m.value} ${m.label}`).join("\n"),
    "## Experience",
    ...jobs.map(entryBlock),
    "## Products",
    ...products.map(entryBlock),
    "## Freelance",
    ...freelance.map(entryBlock),
    "## Stack",
    profile.skills.map((s) => `- ${s.label}: ${s.items.join(", ")}`).join("\n"),
    "## Education",
    [
      ...profile.education.map(
        (ed) =>
          `- ${ed.degree}, ${ed.field}, ${ed.school}, ${ed.place} (${ed.start.slice(0, 4)} to ${ed.end.slice(0, 4)}). ${ed.score}`
      ),
      ...profile.awards.map(
        (a) => `- ${a.title}, ${a.awarder} (${formatMonth(a.date)})`
      ),
    ].join("\n"),
    `Last updated: ${profile.updated}`,
  ].join("\n\n") + "\n";
