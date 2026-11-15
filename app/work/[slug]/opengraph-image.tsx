import { ImageResponse } from "next/og";

import { fullRole, getEntry, pageEntries, profile } from "@/content";

import { OG_SIZE, OgCard } from "@/app/ui/og-card";

export const alt = `Work by ${profile.name}`;
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return pageEntries.map((e) => ({ slug: e.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const entry = getEntry((await params).slug);
  return new ImageResponse(
    (
      <OgCard
        kicker={profile.name}
        title={entry?.name ?? profile.name}
        subtitle={entry ? fullRole(entry) : profile.headline}
        metrics={entry?.metrics ?? profile.topMetrics}
      />
    ),
    size
  );
}
