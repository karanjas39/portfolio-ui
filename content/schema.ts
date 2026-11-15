export type Status = "active" | "live" | "past";

export type Metric = { value: string; label: string };

export type Section = { title: string; points: string[] };

export type Entry = {
  slug: string;
  kind: "job" | "product" | "freelance";
  name: string;
  role: string;
  earlierRole?: { title: string; start: string; end: string };
  employment?: string;
  location?: string;
  start: string;
  end?: string;
  status: Status;
  url?: string;
  summary: string;
  metrics: Metric[];
  sections: Section[];
  stack: string[];
  resume: { context?: string; bullets: string[] };
};

export type SkillGroup = { label: string; items: string[] };

export type Profile = {
  name: string;
  givenName: string;
  familyName: string;
  handle: string;
  headline: string;
  oneLiner: string;
  summary: string;
  availability: string;
  location: {
    region: string;
    country: string;
    countryCode: string;
    workMode: string;
    hours: string;
  };
  email: string;
  linkedin: string;
  github: string;
  site: string;
  topMetrics: (Metric & { slug: string })[];
  education: {
    degree: string;
    field: string;
    school: string;
    place: string;
    start: string;
    end: string;
    score: string;
  }[];
  awards: { title: string; awarder: string; date: string }[];
  skills: SkillGroup[];
  updated: string;
};
