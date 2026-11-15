import { ArrowUpRight, Briefcase, Calendar, MapPin } from "lucide-react";

import type { Entry } from "@/content/schema";
import { formatRange } from "@/lib/format";

export function EntryHeader({ entry }: { entry: Entry }) {
  return (
    <header className="pt-12 pb-10 sm:pt-16">
      <h1 className="text-4xl font-semibold tracking-tighter sm:text-5xl">
        {entry.name}
      </h1>
      <p className="mt-3 text-lg text-muted sm:text-xl">
        {entry.role}
        {entry.earlierRole && `, promoted from ${entry.earlierRole.title}`}
      </p>
      <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-muted">
        <li className="inline-flex items-center gap-1.5">
          <Calendar size={15} className="shrink-0" />
          {formatRange(entry.start, entry.end)}
        </li>
        {entry.employment && (
          <li className="inline-flex items-center gap-1.5">
            <Briefcase size={15} className="shrink-0" />
            {entry.employment}
          </li>
        )}
        {entry.location && (
          <li className="inline-flex items-center gap-1.5">
            <MapPin size={15} className="shrink-0" />
            {entry.location}
          </li>
        )}
      </ul>
      {entry.url && (
        <a
          href={entry.url}
          target="_blank"
          rel="noopener"
          className="mt-7 inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2.5 text-sm font-medium transition-colors hover:border-muted"
        >
          {entry.url.replace(/^https?:\/\/(www\.)?/, "")}
          <ArrowUpRight size={16} className="text-muted" />
        </a>
      )}
    </header>
  );
}
