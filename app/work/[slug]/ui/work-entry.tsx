import type { Entry } from "@/content/schema";
import { entryJsonLd } from "@/lib/json-ld";

import { ActivityBars } from "@/app/ui/activity-bars";
import { JsonLd } from "@/app/ui/json-ld";

import { EntryBody } from "./entry-body";
import { EntryHeader } from "./entry-header";
import { EntryMetrics } from "./entry-metrics";
import { EntryNav } from "./entry-nav";

export function WorkEntry({ entry }: { entry: Entry }) {
  return (
    <>
      <JsonLd data={entryJsonLd(entry)} />
      <EntryHeader entry={entry} />
      <EntryMetrics entry={entry} />
      <ActivityBars entry={entry} />
      <EntryBody entry={entry} />
      <EntryNav slug={entry.slug} />
    </>
  );
}
