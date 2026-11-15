import Link from "next/link";

import { profile } from "@/content";

export function TopMetrics() {
  return (
    <section aria-label="Key numbers" className="mt-16">
      <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
        {profile.topMetrics.map((m) => (
          <li key={m.label} className="bg-surface">
            <Link
              href={`/work/${m.slug}`}
              prefetch
              className="group block h-full p-5 transition-colors hover:bg-bg"
            >
              <span className="block font-mono text-3xl font-medium tracking-tight">
                {m.value}
              </span>
              <span className="mt-2 block text-xs leading-snug text-muted group-hover:text-fg">
                {m.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
