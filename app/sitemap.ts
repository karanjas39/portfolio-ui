import type { MetadataRoute } from "next";

import { pageEntries, profile } from "@/content";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: profile.updated,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...pageEntries.map((e) => ({
      url: `${SITE_URL}/work/${e.slug}`,
      lastModified: profile.updated,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
