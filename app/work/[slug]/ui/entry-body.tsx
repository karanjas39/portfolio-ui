import type { Entry } from "@/content/schema";
import { cn } from "@/lib/utils";

import { SectionHeading } from "@/app/ui/section-heading";

export function EntryBody({ entry }: { entry: Entry }) {
  const single = entry.sections.length === 1;
  const odd = entry.sections.length % 2 === 1;

  return (
    <>
      <section aria-labelledby="work" className="mt-16">
        <SectionHeading id="work">
          {single ? entry.sections[0].title : "What I built"}
        </SectionHeading>
        <div className={cn("grid gap-4", !single && "sm:grid-cols-2")}>
          {entry.sections.map((s, i) => (
            <article
              key={s.title}
              aria-labelledby={single ? undefined : `s-${i}`}
              className={cn(
                "rounded-2xl border border-border bg-surface p-5",
                !single && odd && i === entry.sections.length - 1 && "sm:col-span-2"
              )}
            >
              {!single && (
                <h3 id={`s-${i}`} className="font-semibold">
                  {s.title}
                </h3>
              )}
              <ul
                className={cn(
                  "grid list-disc gap-2 pl-5 text-sm marker:text-muted",
                  !single && "mt-3"
                )}
              >
                {s.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="stack" className="mt-16">
        <SectionHeading id="stack">Stack</SectionHeading>
        <ul className="flex flex-wrap gap-1.5 rounded-2xl border border-border bg-surface p-5">
          {entry.stack.map((t) => (
            <li
              key={t}
              className="rounded-md border border-border bg-bg px-2 py-0.5 text-xs"
            >
              {t}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
