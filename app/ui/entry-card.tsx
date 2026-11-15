import { ArrowRight } from "lucide-react";
import Link from "next/link";

import type { Entry } from "@/content/schema";
import { formatRange } from "@/lib/format";
import { cn } from "@/lib/utils";

export function EntryCard({ entry: e }: { entry: Entry }) {
  const metrics = e.metrics.slice(0, 3);

  return (
    <Link
      href={`/work/${e.slug}`}
      prefetch
      className="group block rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-muted/50"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold">{e.name}</h3>
          <p className="text-sm text-muted">
            {e.role}
            {e.earlierRole && `, promoted from ${e.earlierRole.title}`}
          </p>
        </div>
        <span className="flex shrink-0 items-center gap-2 pt-0.5 font-mono text-xs text-muted">
          <span className="hidden sm:inline">
            {formatRange(e.start, e.end, "now")}
          </span>
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-0.5 group-hover:text-fg"
          />
        </span>
      </div>
      <p className="mt-1 font-mono text-xs text-muted sm:hidden">
        {formatRange(e.start, e.end, "now")}
      </p>
      <p className="mt-3 text-sm">{e.summary}</p>
      {metrics.length > 0 && (
        <dl
          className={cn(
            "mt-4 grid gap-px overflow-hidden rounded-xl border border-border bg-border",
            metrics.length === 1 && "grid-cols-1",
            metrics.length === 2 && "grid-cols-2",
            metrics.length === 3 && "grid-cols-3"
          )}
        >
          {metrics.map((m) => (
            <div key={m.label} className="bg-bg p-3">
              <dt className="sr-only">{m.label}</dt>
              <dd className="font-mono text-base font-medium tracking-tight sm:text-lg">
                {m.value}
              </dd>
              <dd className="mt-0.5 text-[11px] leading-snug text-muted sm:text-xs">
                {m.label}
              </dd>
            </div>
          ))}
        </dl>
      )}
    </Link>
  );
}
