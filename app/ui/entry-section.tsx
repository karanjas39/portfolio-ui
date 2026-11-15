import type { Entry } from "@/content/schema";

import { EntryCard } from "./entry-card";
import { SectionHeading } from "./section-heading";

export function EntrySection({
  id,
  title,
  noun,
  entries,
}: {
  id: string;
  title: string;
  noun: [string, string];
  entries: Entry[];
}) {
  return (
    <section aria-labelledby={id} className="mt-20">
      <SectionHeading
        id={id}
        count={`${entries.length} ${noun[entries.length === 1 ? 0 : 1]}`}
      >
        {title}
      </SectionHeading>
      <ul className="grid gap-4">
        {entries.map((e) => (
          <li key={e.slug}>
            <EntryCard entry={e} />
          </li>
        ))}
      </ul>
    </section>
  );
}
