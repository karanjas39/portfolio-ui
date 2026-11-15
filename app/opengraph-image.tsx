import { ImageResponse } from "next/og";

import { profile } from "@/content";

import { OG_SIZE, OgCard } from "./ui/og-card";

export const alt = `${profile.name}, ${profile.headline}`;
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        kicker={profile.availability}
        title={profile.name}
        subtitle={profile.headline}
        metrics={profile.topMetrics}
      />
    ),
    size
  );
}
