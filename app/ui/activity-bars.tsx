import activity from "@/content/activity.json";
import type { Entry } from "@/content/schema";
import { formatRange } from "@/lib/format";
import { cn } from "@/lib/utils";

const WEEK = 7 * 24 * 60 * 60 * 1000;
const AXIS = Date.parse(`${activity.start}T00:00:00Z`);
const SERIES = activity.series as Record<string, number[]>;
const FILLS = [
  "fill-tick-0",
  "fill-tick-1",
  "fill-tick-2",
  "fill-tick-3",
  "fill-tick-4",
];

const weekOf = (ym: string, monthOffset = 0) => {
  const [y, m] = ym.split("-").map(Number);
  return Math.floor((Date.UTC(y, m - 1 + monthOffset, 1) - AXIS) / WEEK);
};

const levelOf = (n: number) =>
  n === 0 ? 0 : n < 4 ? 1 : n < 10 ? 2 : n < 20 ? 3 : 4;

export function ActivityBars({ entry }: { entry: Entry }) {
  const series = SERIES[entry.slug];
  if (!series) return null;

  const from = Math.max(0, weekOf(entry.start));
  const to = entry.end
    ? Math.min(activity.weeks - 1, weekOf(entry.end, 1) - 1)
    : activity.weeks - 1;
  const weeks = series.slice(from, to + 1);
  if (weeks.length < 8) return null;

  const total = weeks.reduce((a, b) => a + b, 0);
  const paths = FILLS.map(() => "");
  weeks.forEach((n, i) => (paths[levelOf(n)] += `M${i * 4} 0h3v20h-3z`));

  return (
    <figure className="mt-4 rounded-2xl border border-border bg-surface p-5">
      <figcaption className="mb-3 flex flex-wrap justify-between gap-x-4 gap-y-1 font-mono text-[11px] text-muted">
        <span>
          {total.toLocaleString("en-US")} commits by me,{" "}
          {formatRange(entry.start, entry.end, "now")}
        </span>
        <span>one bar per week, darker means more commits</span>
      </figcaption>
      <svg
        aria-hidden
        viewBox={`0 0 ${weeks.length * 4 - 1} 20`}
        preserveAspectRatio="none"
        className="block h-5 w-full"
      >
        {paths.map(
          (d, level) =>
            d && <path key={level} d={d} className={cn(FILLS[level])} />
        )}
      </svg>
    </figure>
  );
}
