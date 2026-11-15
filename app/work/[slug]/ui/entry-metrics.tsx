import type { Entry } from "@/content/schema";
import { cn } from "@/lib/utils";

export function EntryMetrics({ entry }: { entry: Entry }) {
  const n = entry.metrics.length;
  if (n === 0) return null;

  return (
    <section aria-label="Numbers">
      <ul
        className={cn(
          "grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border",
          n === 3 && "sm:grid-cols-3",
          n >= 4 && "sm:grid-cols-4"
        )}
      >
        {entry.metrics.map((m) => (
          <li
            key={m.label}
            className={cn("bg-surface p-5", n === 3 && "last:col-span-2 sm:last:col-span-1")}
          >
            <span className="block font-mono text-2xl font-medium tracking-tight sm:text-3xl">
              {m.value}
            </span>
            <span className="mt-2 block text-xs leading-snug text-muted">
              {m.label}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
