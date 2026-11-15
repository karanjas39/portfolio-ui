import { entries, fullRole, profile } from "@/content";
import type { Entry } from "@/content/schema";

import { SITE_URL } from "./site";

export const PERSON_ID = `${SITE_URL}/#person`;

const current = entries.find((e) => e.kind === "job" && !e.end);

export const personJsonLd = () => ({
  "@type": "Person",
  "@id": PERSON_ID,
  name: profile.name,
  givenName: profile.givenName,
  familyName: profile.familyName,
  alternateName: profile.handle,
  jobTitle: current?.role,
  description: profile.summary,
  url: SITE_URL,
  email: `mailto:${profile.email}`,
  sameAs: [profile.linkedin, profile.github],
  address: {
    "@type": "PostalAddress",
    addressRegion: profile.location.region,
    addressCountry: profile.location.countryCode,
  },
  ...(current && { worksFor: { "@type": "Organization", name: current.name } }),
  alumniOf: profile.education.map((ed) => ({
    "@type": "CollegeOrUniversity",
    name: ed.school,
  })),
  award: profile.awards.map((a) => `${a.title} (${a.awarder})`),
  knowsAbout: profile.skills
    .filter((s) => s.label === "AI / LLM" || s.label === "Languages")
    .flatMap((s) => s.items),
});

export const profilePageJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: SITE_URL,
  dateModified: profile.updated,
  mainEntity: personJsonLd(),
});

export const entryJsonLd = (entry: Entry) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/work/${entry.slug}`,
      url: `${SITE_URL}/work/${entry.slug}`,
      name: `${fullRole(entry)}, ${entry.name}`,
      description: entry.summary,
      dateModified: profile.updated,
      about: { "@id": PERSON_ID },
      author: {
        "@type": "Person",
        "@id": PERSON_ID,
        name: profile.name,
        url: SITE_URL,
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: profile.name,
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: entry.name,
          item: `${SITE_URL}/work/${entry.slug}`,
        },
      ],
    },
  ],
});
