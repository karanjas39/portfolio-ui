import { GraduationCap, Trophy } from "lucide-react";

import { profile } from "@/content";
import { formatMonth } from "@/lib/format";

import { SectionHeading } from "./section-heading";

export function Education() {
  return (
    <section aria-labelledby="education" className="mt-20">
      <SectionHeading id="education">Education</SectionHeading>
      <div className="rounded-2xl border border-border bg-surface p-5">
        {profile.education.map((ed) => (
          <div key={ed.school} className="flex items-start gap-4">
            <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-border bg-bg">
              <GraduationCap size={18} className="text-muted" />
            </span>
            <div className="flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <p className="font-semibold">
                  {ed.degree}, {ed.field}
                </p>
                <span className="font-mono text-xs text-muted">
                  {ed.start.slice(0, 4)} – {ed.end.slice(0, 4)}
                </span>
              </div>
              <p className="text-sm text-muted">
                {ed.school}, {ed.place} · {ed.score}
              </p>
            </div>
          </div>
        ))}
        <ul className="mt-5 grid gap-2 border-t border-border pt-4 sm:grid-cols-2">
          {profile.awards.map((a) => (
            <li key={a.title} className="flex items-start gap-2.5 text-sm">
              <Trophy size={16} className="mt-0.5 shrink-0 text-muted" />
              <span>
                {a.title}
                <span className="block font-mono text-xs text-muted">
                  {a.awarder}, {formatMonth(a.date)}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
