import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

import { fullRole, getEntry, pageEntries, profile } from "@/content";

import { Backdrop } from "@/app/ui/backdrop";
import { SiteFooter } from "@/app/ui/site-footer";

import { WorkEntry, WorkEntrySkeleton } from "./ui/work-entry";

export function generateStaticParams() {
  return pageEntries.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const entry = getEntry((await params).slug);
  if (!entry) return {};
  const title = `${fullRole(entry)}, ${entry.name}`;
  const description = entry.metrics.reduce((d, m) => {
    const next = `${d} ${m.value} ${m.label}.`;
    return next.length <= 160 ? next : d;
  }, entry.summary);
  return {
    title,
    description,
    alternates: { canonical: `/work/${entry.slug}` },
    openGraph: { type: "article", title, description, url: `/work/${entry.slug}` },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default function WorkPage({ params }: PageProps<"/work/[slug]">) {
  return (
    <main className="mx-auto max-w-4xl px-5">
      <Backdrop />
      <nav aria-label="Breadcrumb" className="pt-10 font-mono text-xs text-muted sm:pt-14">
        <Link href="/" className="inline-flex items-center gap-1.5 hover:text-fg">
          <ArrowLeft size={14} />
          {profile.name}
        </Link>
      </nav>
      <Suspense fallback={<WorkEntrySkeleton />}>
        <WorkEntry params={params} />
      </Suspense>
      <SiteFooter />
    </main>
  );
}
