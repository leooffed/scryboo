// app/journal/page.tsx
import { posts } from "@/data/blog";
import Link from "next/link";
import type { Metadata } from "next";

import { generateSeoObject } from "@/lib/seo";

export const metadata: Metadata = generateSeoObject({
  title: "Journal Scryboo — Guides outils, nouveautés",
  description:
    "Le blog produit de Scryboo. Chaque outil expliqué, cas d’usage Afrique francophone. Posté par l’admin.",
  canonicalPath: "/journal",
});

export default function JournalPage() {
  // Tri sécurisé du plus récent au plus ancien
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <div className="min-h-screen bg-white text-[#202124]">
      <main className="max-w-[980px] mx-auto px-5 sm:px-8 lg:px-10 py-12">
        <div className="text-[12.5px] text-[#5f6368] uppercase tracking-wide">
          Journal · Centre de ressources
        </div>
        <h1 className="text-[36px] sm:text-[44px] font-[650] tracking-[-0.022em] mt-2">
          Chaque outil, expliqué.
        </h1>
        <p className="text-[#5f6368] mt-3 max-w-2xl">
          Articles postés par l’admin. Guides, cas d’usage — avec liens internes
          vers scryboo.com/outils/…
        </p>

        <div className="grid md:grid-cols-2 gap-4 mt-10">
          {sortedPosts.map((p) => {
            // Formatage côté serveur pour éviter tout décalage d'hydration
            const formattedDate = new Date(p.date).toLocaleDateString("fr-FR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            });

            return (
              <Link
                key={p.slug}
                href={`/journal/${p.slug}`}
                className="g-card p-6 block"
              >
                <div className="text-[12.5px] text-[#5f6368]">
                  {formattedDate} · Admin
                </div>
                <div className="text-[19px] font-[620] text-[#1a73e8] mt-2 leading-snug">
                  {p.title}
                </div>
                <div className="text-[14.2px] text-[#5f6368] mt-2">
                  {p.excerpt}
                </div>
                <div className="text-[13.2px] text-[#1a73e8] mt-3">
                  Lire →
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}