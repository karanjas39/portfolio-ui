# singhjaskaran.dev

My personal site. Everything is generated from one set of typed content files, so the site, the resume and the machine-readable versions always say the same thing.

**Live:** [singhjaskaran.dev](https://singhjaskaran.dev) · Lighthouse 99 / 100 / 100 / 100

## What it generates

From `content/` (one TypeScript file per job and project, typed by `content/schema.ts`):

- `/` and `/work/[slug]`: statically prerendered pages
- `/career.json`: [JSON Resume](https://jsonresume.org) v1
- `/llms.txt`: plain-text profile for AI assistants
- ProfilePage and Person JSON-LD, sitemap, robots, per-page OG images
- `public/Jaskaran_Singh_Resume.pdf`: a one-page ATS resume, rebuilt on every local build
- Commit activity bars from local git history (`pnpm activity`)

## Stack

Next.js 16 (Cache Components, server components only), Tailwind CSS v4, TypeScript. No client components and no theme JavaScript: light and dark mode are CSS-only. Deployed on Vercel, with Cloudflare Web Analytics (no cookies).

## Run

```bash
pnpm install
pnpm dev
```

`pnpm build` also regenerates the resume PDF when the local resume tooling is available, and skips it on Vercel/CI, which serve the committed PDF.
