'use client'
import { posts } from "@/data/blog";
import { useSEO } from "@/lib/seo";
import Link from "next/link";


export default function JournalPage() {
  useSEO({
    title: "Journal Scryboo — Guides outils, nouveautés",
    description:
      "Le blog produit de Scryboo. Chaque outil expliqué, cas d’usage Afrique francophone. Posté par l’admin.",
    canonical: "/journal",
  });

  return (
    <div className="min-h-screen bg-[#08080d] text-zinc-100">
      <main className="pt-32 max-w-6xl mx-auto px-6 sm:px-10 lg:px-14 pb-24">
        <div className="text-[11.7px] uppercase tracking-widest text-zinc-500 font-mono">
          Journal · Centre de ressources
        </div>
        <h1 className="font-display text-[44px] md:text-[56px] tracking-[-0.024em] mt-2">
          Chaque outil, expliqué.
        </h1>
        <p className="text-zinc-400 mt-3 max-w-2xl">
          Articles postés par l’admin. Guides, nouveautés, cas d’usage — avec
          des liens internes vers les pages outils SEO sur scryboo.com/outils/…
        </p>

        <div className="grid md:grid-cols-2 gap-5 mt-12">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/journal/${p.slug}`}
              className="rounded-[22px] bg-white/[0.032] border border-white/[0.10] p-7 hover:border-white/[0.18] transition"
            >
              <div className="text-[12.3px] text-zinc-400">
                {new Date(p.date).toLocaleDateString("fr-FR")} · par Admin
              </div>
              <div className="text-[21px] font-[620] text-zinc-100 mt-2">
                {p.title}
              </div>
              <div className="text-[14.6px] text-zinc-400 mt-2">
                {p.excerpt}
              </div>
              <div className="text-[13.2px] text-zinc-300 mt-4">
                Lire l’article →
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
