import { profile } from "@/content";
import { formatDay } from "@/lib/format";

export function SiteFooter() {
  return (
    <footer className="mt-24 flex flex-wrap justify-between gap-x-6 gap-y-2 border-t border-border py-8 font-mono text-xs text-muted">
      <span>
        Updated{" "}
        <time dateTime={profile.updated}>{formatDay(profile.updated)}</time>
      </span>
      <span className="flex flex-wrap gap-x-4 gap-y-1">
        <a href="/career.json" className="hover:text-fg">
          career.json
        </a>
        <a href="/llms.txt" className="hover:text-fg">
          llms.txt
        </a>
        <a href={`mailto:${profile.email}`} className="hover:text-fg">
          {profile.email}
        </a>
      </span>
    </footer>
  );
}
