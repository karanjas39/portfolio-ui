import { freelance, jobs, products } from "@/content";
import { profilePageJsonLd } from "@/lib/json-ld";

import { Education } from "./ui/education";
import { EntrySection } from "./ui/entry-section";
import { Hero } from "./ui/hero";
import { JsonLd } from "./ui/json-ld";
import { SiteFooter } from "./ui/site-footer";
import { Skills } from "./ui/skills";
import { TopMetrics } from "./ui/top-metrics";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-4xl px-5">
      <JsonLd data={profilePageJsonLd()} />
      <Hero />
      <TopMetrics />
      <EntrySection
        id="experience"
        title="Experience"
        noun={["role", "roles"]}
        entries={jobs}
      />
      <EntrySection
        id="products"
        title="Products"
        noun={["product", "products"]}
        entries={products}
      />
      <EntrySection
        id="freelance"
        title="Freelance"
        noun={["client", "clients"]}
        entries={freelance}
      />
      <Skills />
      <Education />
      <SiteFooter />
    </main>
  );
}
