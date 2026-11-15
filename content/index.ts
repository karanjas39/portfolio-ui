import type { Entry } from "./schema.ts";
import { profile } from "./profile.ts";
import { somaAi } from "./entries/soma-ai.ts";
import { marqueeEquity } from "./entries/marquee-equity.ts";
import { mellowCare } from "./entries/mellow-care.ts";
import { snkrsearch } from "./entries/snkrsearch.ts";
import { dhillonFitness } from "./entries/dhillon-fitness.ts";
import { drevolabs } from "./entries/drevolabs.ts";
import { varq } from "./entries/varq.ts";

export { profile };

const recency = (a: Entry, b: Entry) =>
  (b.end ?? "9999-12").localeCompare(a.end ?? "9999-12") ||
  b.start.localeCompare(a.start);

export const entries: Entry[] = [
  somaAi,
  marqueeEquity,
  mellowCare,
  snkrsearch,
  dhillonFitness,
  drevolabs,
  varq,
].sort(recency);

export const jobs = entries.filter((e) => e.kind === "job");
export const products = entries.filter((e) => e.kind === "product");
export const freelance = entries.filter((e) => e.kind === "freelance");

export const pageEntries = [...jobs, ...products, ...freelance];

export const getEntry = (slug: string) =>
  pageEntries.find((e) => e.slug === slug);

export const fullRole = (e: Entry) =>
  e.kind === "freelance" ? `Freelance ${e.role}` : e.role;
