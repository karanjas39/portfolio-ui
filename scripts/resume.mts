import { execFileSync } from "node:child_process";
import { copyFileSync, existsSync, mkdtempSync, writeFileSync } from "node:fs";
import { homedir, tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

import { freelance, fullRole, jobs, products, profile } from "../content/index.ts";
import { formatMonth, formatRange } from "../lib/format.ts";

const SKILL = process.env.RESUME_BUILDER_DIR ?? join(homedir(), ".claude/skills/resume-builder/scripts");
const OUT = fileURLToPath(new URL("../public/Jaskaran_Singh_Resume.pdf", import.meta.url));

if (process.env.VERCEL || process.env.CI || !existsSync(SKILL)) {
  console.log("resume: skipped, using the committed public/Jaskaran_Singh_Resume.pdf");
  process.exit(0);
}

const ascii = (s: string) => s.replace(/₹/g, "INR ");
const bare = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

const resume = {
  role: profile.headline,
  contact: {
    name: profile.name,
    headline: profile.headline,
    location: `${profile.location.region}, ${profile.location.country} (Remote)`,
    email: profile.email,
    links: [bare(profile.linkedin), bare(profile.github), bare(profile.site)],
  },
  summary: ascii(profile.summary),
  experience: jobs.map((e) => ({
    title: e.role,
    company: e.name,
    location: e.location,
    start: formatMonth(e.start),
    end: e.end ? formatMonth(e.end) : "Present",
    context: e.resume.context && ascii(e.resume.context),
    bullets: e.resume.bullets.map(ascii),
  })),
  projects: [...products, ...freelance].filter((p) => p.resume.bullets.length).map((p) => ({
    name: `${p.name} (${fullRole(p)})`,
    tech: p.stack.slice(0, 4).join(", "),
    dates: formatRange(p.start, p.end),
    link: p.url,
    bullets: p.resume.bullets.map(ascii),
  })),
  skills: profile.skills.filter((s) => s.label !== "Integrations"),
  education: profile.education.map((ed) => ({
    degree: `${ed.degree}, ${ed.field}`,
    school: `${ed.school}, ${ed.place}`,
    dates: formatRange(ed.start, ed.end),
    detail: [ed.score, ...profile.awards.map((a) => a.title)].join(" | ") + ` (${profile.awards[0].awarder})`,
  })),
  section_order: ["summary", "experience", "projects", "skills", "education"],
};

const keywords = {
  covered: ["MCP", "OAuth", "Claude", "agent loop", "Python", "TypeScript", "Next.js", "FastAPI", "PostgreSQL", "MongoDB", "Redis"],
};

const dir = mkdtempSync(join(tmpdir(), "resume-"));
const json = join(dir, "resume.json");
const kw = join(dir, "keywords.json");
const docx = join(dir, "Jaskaran_Singh_Resume.docx");
const pdf = join(dir, "Jaskaran_Singh_Resume.pdf");
writeFileSync(json, JSON.stringify(resume, null, 2));
writeFileSync(kw, JSON.stringify(keywords));

const run = (cmd: string, args: string[]) => execFileSync(cmd, args, { stdio: "inherit" });
run("node", [join(SKILL, "build-resume.js"), json, docx]);
run("sh", [join(SKILL, "to-pdf.sh"), docx]);
run("node", [join(SKILL, "ats-check.js"), json, pdf, kw]);
run("pdftoppm", ["-png", "-r", "70", "-singlefile", pdf, join(dir, "preview")]);
copyFileSync(pdf, OUT);
console.log(`copied to public/Jaskaran_Singh_Resume.pdf (preview: ${join(dir, "preview.png")})`);
