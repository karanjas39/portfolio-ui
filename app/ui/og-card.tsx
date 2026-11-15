import type { Metric } from "@/content/schema";

export const OG_SIZE = { width: 1200, height: 630 };

export function OgCard({
  kicker,
  title,
  subtitle,
  metrics,
}: {
  kicker: string;
  title: string;
  subtitle: string;
  metrics: Metric[];
}) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        background: "#0b0b0c",
        color: "#ececea",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 26,
            color: "#a3a39f",
          }}
        >
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 9,
              background: "#22c55e",
              marginRight: 16,
            }}
          />
          {kicker}
        </div>
        <div
          style={{
            fontSize: 76,
            fontWeight: 700,
            marginTop: 40,
            letterSpacing: -2,
          }}
        >
          {title}
        </div>
        <div style={{ fontSize: 36, color: "#a3a39f", marginTop: 12 }}>
          {subtitle}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          borderTop: "2px solid #252527",
          paddingTop: 36,
        }}
      >
        {metrics.slice(0, 3).map((m) => (
          <div
            key={m.label}
            style={{
              display: "flex",
              flexDirection: "column",
              width: 340,
              marginRight: 24,
            }}
          >
            <div style={{ fontSize: 48, fontWeight: 700 }}>{m.value}</div>
            <div style={{ fontSize: 22, color: "#a3a39f", marginTop: 6 }}>
              {m.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
