import { toolsByCategory } from "@/data/tools";
import Link from "next/link";
import type { Metadata } from "next";

// 1. Configuration SEO native (Indexation maximale du catalogue)
export const metadata: Metadata = {
  title: "Tous les outils en ligne gratuits — Écosystème Scryboo",
  description:
    "Explorez plus de 40 outils web professionnels et gratuits : PDF, gestion d'images, édition de texte et utilitaires de développement. Traitement 100% local et sécurisé.",
  alternates: {
    canonical: "https://scryboo.com/outils",
  },
};

export default function ToolsIndex() {
  return (
    <div className="min-h-screen bg-[#08080d] text-zinc-100">
      <main className="pt-32 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pb-24">
        {/* En-tête */}
        <div className="max-w-2xl">
          <div className="text-[11.7px] uppercase tracking-widest text-zinc-500 font-mono">
            Catalogue général · Solutions en ligne
          </div>
          <h1 className="font-display text-[42px] md:text-[56px] tracking-[-0.025em] mt-2 font-bold text-white leading-tight">
            Tous les outils Scryboo.
          </h1>
          <p className="text-zinc-400 mt-3 text-[16.8px] leading-relaxed">
            Une collection complète d'applications web instantanées, conçues
            pour éliminer les frictions de vos flux de travail quotidiens. Zéro
            installation, exécution immédiate.
          </p>
        </div>

        {/* Bannière de réassurance modèle économique */}
        <div className="mt-10 rounded-[20px] border border-[#e6ff9c]/10 bg-[linear-gradient(180deg,rgba(226,255,123,0.04),rgba(226,255,123,0.01))] px-6 py-5 text-[14.5px] text-[#e3f9c7] leading-relaxed backdrop-blur-sm">
          <span className="font-semibold text-white">
            95% de nos outils sont gratuits sans contrepartie.
          </span>{" "}
          De manière innovante, nous choisissons de laisser l'accès libre pour
          les utilisateurs individuels et de ne monétiser que les volumes
          professionnels et les intégrations API avancées.
        </div>

        {/* Listes par catégories */}
        <div className="mt-16 space-y-14">
          {Object.entries(toolsByCategory).map(([categoryName, toolList]) => (
            <section key={categoryName} className="scroll-mt-28">
              <h2 className="text-[14px] uppercase tracking-wider text-zinc-400 font-mono font-semibold mb-5 border-b border-white/[0.06] pb-2">
                {categoryName}
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {toolList.map((t) => (
                  <Link
                    key={t.slug}
                    href={`/outils/${t.slug}`}
                    className="group rounded-[18px] bg-white/[0.015] border border-white/[0.08] p-5 hover:border-white/[0.18] hover:bg-white/[0.03] transition-all duration-300 flex flex-col justify-between min-h-[140px]"
                  >
                    <div>
                      <h3 className="text-[17px] font-semibold text-zinc-100 group-hover:text-white transition-colors tracking-tight">
                        {t.name}
                      </h3>
                      <p className="text-[13.6px] text-zinc-400 mt-1.5 leading-relaxed line-clamp-2">
                        {t.tagline}
                      </p>
                    </div>

                    <div className="text-[12px] text-zinc-500 font-mono mt-4 group-hover:text-zinc-400 transition-colors flex items-center justify-between">
                      <span>scryboo.com/outils/{t.slug}</span>
                      <span className="opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                        →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Footer Technique Éco-système (Utile pour rassurer les pros sans polluer la UI) */}
        <div className="mt-20 text-[13px] text-zinc-500 border-t border-white/[0.06] pt-8 leading-relaxed max-w-3xl">
          <p>
            Toutes les opérations de traitement de fichiers s'exécutent au sein
            de votre client de navigation grâce à la puissance de nos
            architectures locales. Vos données et documents ne transitent par
            aucun serveur externe, garantissant une confidentialité absolue
            (Privacy by Design).
          </p>
        </div>
      </main>
    </div>
  );
}
