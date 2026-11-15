import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-4xl px-5 pt-20">
      <p className="flex items-center gap-2 font-mono text-xs text-muted">
        <span
          aria-hidden
          className="inline-block size-2 rounded-full bg-idle"
        />
        404
      </p>
      <h1 className="mt-6 text-3xl font-semibold tracking-tight">
        Nothing runs at this address.
      </h1>
      <p className="mt-4">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 underline decoration-border underline-offset-4 hover:decoration-fg"
        >
          <ArrowLeft size={14} />
          Back to the homepage
        </Link>
      </p>
    </main>
  );
}
