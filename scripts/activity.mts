import { execFileSync } from "node:child_process";
import { existsSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

const AXIS_START = "2024-07-01";
const AUTHOR = "jaskaran|karanjas39";
const WEEK = 7 * 24 * 60 * 60 * 1000;

const SOMA = [
  "soma-frontend",
  "soma-frontend-landing",
  "SomaMCP",
  "scout-ui",
  "scout-marketplace-ui",
  "creative-genome-ui",
  "genai-prompt-playground",
  "atria-script",
  "ai-generation-automation-scripts",
  "BE/Adcopy",
  "BE/GenAI",
].map((r) => `Desktop/soma/${r}`);

const REPOS: Record<string, string[]> = {
  "soma-ai": SOMA,
  snkrsearch: ["Desktop/karanjas39/snkrsearch"],
  "dhillon-fitness": ["Desktop/karanjas39/dhillon-fitness"],
  "mellow-care": ["Desktop/karanjas39/mellow"],
  drevolabs: ["Desktop/karanjas39/drevolabs"],
  varq: ["Desktop/karanjas39/varq"],
};

const start = Date.parse(`${AXIS_START}T00:00:00Z`);
const weeks = Math.floor((Date.now() - start) / WEEK) + 1;

const series: Record<string, number[]> = {};
for (const [slug, repos] of Object.entries(REPOS)) {
  const counts = new Array<number>(weeks).fill(0);
  for (const repo of repos) {
    const dir = join(homedir(), repo);
    if (!existsSync(join(dir, ".git"))) {
      console.warn(`skip ${repo}: not found`);
      continue;
    }
    const out = execFileSync(
      "git",
      ["-C", dir, "log", "--all", "--no-merges", "-E", "-i", `--author=${AUTHOR}`, `--since=${AXIS_START}`, "--format=%as"],
      { encoding: "utf8" },
    );
    for (const day of out.split("\n").filter(Boolean)) {
      const i = Math.floor((Date.parse(`${day}T00:00:00Z`) - start) / WEEK);
      if (i >= 0 && i < weeks) counts[i]++;
    }
  }
  series[slug] = counts;
  console.log(`${slug}: ${counts.reduce((a, b) => a + b, 0)} commits`);
}

const out = { start: AXIS_START, weeks, generated: new Date().toISOString().slice(0, 10), series };
writeFileSync(new URL("../content/activity.json", import.meta.url), JSON.stringify(out) + "\n");
console.log(`wrote content/activity.json (${weeks} weeks)`);
