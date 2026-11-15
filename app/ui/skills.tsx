import { profile } from "@/content";

import { SectionHeading } from "./section-heading";

export function Skills() {
  return (
    <section aria-labelledby="stack" className="mt-20">
      <SectionHeading id="stack">Stack</SectionHeading>
      <dl className="divide-y divide-border rounded-2xl border border-border bg-surface">
        {profile.skills.map((s) => (
          <div
            key={s.label}
            className="grid gap-2 p-4 sm:grid-cols-[8rem_1fr] sm:gap-6"
          >
            <dt className="font-mono text-xs text-muted sm:pt-1">{s.label}</dt>
            <dd>
              <ul className="flex flex-wrap gap-1.5">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-bg px-2 py-0.5 text-xs"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
