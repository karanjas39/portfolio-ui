import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";

import { pageEntries } from "@/content";
import { RESUME_PATH } from "@/lib/site";

import { SectionHeading } from "@/app/ui/section-heading";

export function EntryNav({ slug }: { slug: string }) {
  const others = pageEntries.filter((e) => e.slug !== slug);

  return (
    <nav aria-labelledby="more" className="mt-16">
      <SectionHeading id="more">More work</SectionHeading>
      <ul className="grid gap-3 sm:grid-cols-2">
        {others.map((e) => (
          <li key={e.slug}>
            <Link
              href={`/work/${e.slug}`}
              prefetch
              className="group flex items-center justify-between gap-3 rounded-2xl border border-border bg-surface px-4 py-3 transition-colors hover:border-muted/50"
            >
              <span>
                <span className="block text-sm font-semibold">{e.name}</span>
                <span className="block text-xs text-muted">{e.role}</span>
              </span>
              <ArrowRight
                size={16}
                className="shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-fg"
              />
            </Link>
          </li>
        ))}
      </ul>
      <a
        href={RESUME_PATH}
        download
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-fg px-4 py-2.5 text-sm font-medium text-bg shadow-sm transition-opacity hover:opacity-90"
      >
        <Download size={16} />
        Download resume
      </a>
    </nav>
  );
}
