import {
  ArrowUpRight,
  Clock,
  Download,
  Globe,
  Mail,
  MapPin,
} from "lucide-react";

import { profile } from "@/content";
import { RESUME_PATH } from "@/lib/site";

import { Backdrop } from "./backdrop";

export function Hero() {
  return (
    <header className="pt-20 sm:pt-28">
      <Backdrop />
      <p className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/70 px-3 py-1 text-xs font-medium text-muted backdrop-blur">
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full rounded-full bg-ok-dot opacity-70 motion-safe:animate-ping" />
          <span className="relative inline-flex size-2 rounded-full bg-ok-dot" />
        </span>
        {profile.availability}
      </p>
      <h1 className="mt-6 text-5xl font-semibold tracking-tighter sm:text-6xl">
        {profile.name}
      </h1>
      <p className="mt-3 text-xl text-muted sm:text-2xl">{profile.headline}</p>
      <p className="mt-6 max-w-[56ch] text-base sm:text-lg">
        {profile.oneLiner}
      </p>
      <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-muted">
        <li className="inline-flex items-center gap-1.5">
          <MapPin size={15} className="shrink-0" />
          {profile.location.region}, {profile.location.country}
        </li>
        <li className="inline-flex items-center gap-1.5">
          <Globe size={15} className="shrink-0" />
          {profile.location.workMode}
        </li>
        <li className="inline-flex items-center gap-1.5">
          <Clock size={15} className="shrink-0" />
          {profile.location.hours}
        </li>
      </ul>
      <nav
        aria-label="Contact"
        className="mt-8 flex flex-wrap gap-3 text-sm font-medium"
      >
        <a
          href={RESUME_PATH}
          download
          className="inline-flex items-center gap-2 rounded-lg bg-fg px-4 py-2.5 text-bg shadow-sm transition-opacity hover:opacity-90"
        >
          <Download size={16} />
          Download resume
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2.5 transition-colors hover:border-muted"
        >
          <Mail size={16} />
          Email
        </a>
        <a
          href={profile.linkedin}
          rel="me noopener"
          target="_blank"
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2.5 transition-colors hover:border-muted"
        >
          LinkedIn
          <ArrowUpRight size={16} className="text-muted" />
        </a>
        <a
          href={profile.github}
          rel="me noopener"
          target="_blank"
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2.5 transition-colors hover:border-muted"
        >
          GitHub
          <ArrowUpRight size={16} className="text-muted" />
        </a>
      </nav>
    </header>
  );
}
