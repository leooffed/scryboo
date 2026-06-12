import { posts } from "@/data/blog";
import Link from "next/link";
import type { Metadata } from "next";

// 1. Métadonnées SEO statiques et puissantes côté serveur
export const metadata: Metadata = {
  title: "Journal Scryboo — Guides outils, nouveautés & productivité",
  description:
    "Le blog produit de Scryboo. Chaque outil expliqué, cas d’usage pour l'Afrique francophone et astuces de productivité par l’équipe d'administration.",
  alternates: {
    canonical: "https://scryboo.com/journal",
  },
};

export default function JournalPage() {
  // Optionnel : Trier les posts du plus récent au plus ancien si ce n'est pas fait dans ton fichier data
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <div className="min-h-screen bg-[#08080d] text-zinc-100">
      <main className="pt-32 max-w-6xl mx-auto px-6 sm:px-10 lg:px-14 pb-24">
        <div className="text-[11.7px] uppercase tracking-widest text-zinc-500 font-mono">
          Journal · Centre de ressources
        </div>

        <h1 className="font-display text-[44px] md:text-[56px] tracking-[-0.024em] mt-2 text-white font-bold leading-tight">
          Chaque outil, expliqué.
        </h1>

        <p className="text-zinc-400 mt-3 max-w-2xl text-[16px] leading-relaxed">
          Articles postés par l’admin. Guides, nouveautés, cas d’usage — avec
          des liens internes vers les pages outils SEO sur{" "}
          <span className="text-zinc-200 font-medium">
            scryboo.com/outils/...
          </span>
        </p>

        {/* Grille d'articles */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {sortedPosts.map((p) => {
            // Formatage de la date côté serveur (zéro Hydration Mismatch)
            const formattedDate = new Date(p.date).toLocaleDateString("fr-FR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            });

            return (
              <Link
                key={p.slug}
                href={`/journal/${p.slug}`}
                className="group rounded-[22px] bg-white/[0.02] border border-white/[0.08] p-7 hover:border-white/[0.18] hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="text-[12.3px] text-zinc-500 group-hover:text-zinc-400 transition-colors">
                    {formattedDate} · par Admin
                  </div>

                  <h2 className="text-[22px] font-[620] text-zinc-100 mt-2 group-hover:text-white transition-colors tracking-tight leading-snug">
                    {p.title}
                  </h2>

                  <p className="text-[14.6px] text-zinc-400 mt-2 line-clamp-3 leading-relaxed">
                    {p.excerpt}
                  </p>
                </div>

                <div className="text-[13.2px] text-zinc-300 font-medium mt-6 flex items-center gap-1 group-hover:text-white transition-colors">
                  Lire l’article
                  <span className="transform group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}
