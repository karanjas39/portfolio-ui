import { notFound } from "next/navigation";

import { getEntry } from "@/content";
import { entryJsonLd } from "@/lib/json-ld";

import { ActivityBars } from "@/app/ui/activity-bars";
import { JsonLd } from "@/app/ui/json-ld";

import { EntryBody } from "./entry-body";
import { EntryHeader } from "./entry-header";
import { EntryMetrics } from "./entry-metrics";
import { EntryNav } from "./entry-nav";

export async function WorkEntry({
  params,
}: {
  params: PageProps<"/work/[slug]">["params"];
}) {
  const entry = getEntry((await params).slug);
  if (!entry) notFound();

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

export function WorkEntrySkeleton() {
  return (
    <div aria-hidden className="animate-pulse pt-16">
      <div className="h-3 w-20 rounded bg-tick-0" />
      <div className="mt-4 h-9 w-56 rounded bg-tick-0" />
      <div className="mt-3 h-5 w-40 rounded bg-tick-0" />
      <div className="mt-8 h-16 max-w-[62ch] rounded bg-tick-0" />
    </div>
  );
}
