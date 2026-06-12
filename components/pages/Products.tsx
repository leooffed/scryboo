import Link from "next/link";
import { tools } from "@/data/tools";
import type { Metadata } from "next";

// 1. Métadonnées SEO gérées nativement par le serveur
export const metadata: Metadata = {
  title: "Produits — L'écosystème d'applications Scryboo",
  description:
    "Découvrez l'écosystème de la startup Scryboo. Une suite d'applications interconnectées : outils gratuits, IA localisée, et solutions de gestion. Un seul compte unifié.",
  alternates: {
    canonical: "https://scryboo.com/produits",
  },
};

export default function ProductsPage() {
  const apps = [
    {
      name: "Scryboo Tools",
      url: "https://app.scryboo.com",
      desc: "42 outils gratuits exécutés dans le navigateur — PDF, images, texte, dev. 100% local.",
      stat: "95% gratuit",
      badgeColor: "bg-green-500/10 text-green-400 border-green-500/20",
    },
    {
      name: "Scryboo AI",
      url: "https://ai.scryboo.com",
      desc: "Génération de contenu assistée par IA (FR/EN/Wolof). 50 crédits offerts par mois.",
      stat: "Bêta",
      badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    },
    {
      name: "Book",
      url: "https://book.scryboo.com",
      desc: "Système de réservation automatique avec intégration native Orange Money & Wave.",
      stat: "Early Access",
      badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    },
    {
      name: "Pulse",
      url: "https://pulse.scryboo.com",
      desc: "Social toolkit complet pour planifier, analyser et propulser votre branding.",
      stat: "Bientôt",
      badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    },
    {
      name: "Flow ERP",
      url: "https://flow.scryboo.com",
      desc: "Gestion de factures, stocks et CRM adapté aux réalités des PME en Afrique de l'Ouest.",
      stat: "Bientôt",
      badgeColor: "bg-zinc-500/10 text-zinc-400 border-zinc-500/20",
    },
    {
      name: "Vault",
      url: "https://vault.scryboo.com",
      desc: "Coffre-fort ultra-sécurisé pour stocker vos secrets et fichiers avec chiffrement E2E.",
      stat: "Bientôt",
      badgeColor: "bg-red-500/10 text-red-400 border-red-500/20",
    },
  ];

  return (
    <div className="min-h-screen bg-[#08080d] text-zinc-100">
      <main className="pt-32 pb-24 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        {/* Hero de l'écosystème */}
        <div className="max-w-2xl">
          <div className="text-[11.7px] uppercase tracking-widest text-zinc-500 font-mono">
            Produits
          </div>
          <h1 className="font-display text-[44px] md:text-[58px] tracking-[-0.024em] mt-2 font-bold text-white leading-tight">
            Un hub. Six apps. <br className="hidden sm:inline" />
            Un compte unique.
          </h1>
          <p className="text-zinc-400 mt-4 text-[17px] leading-relaxed">
            Chaque produit Scryboo partage le même SSO, les mêmes standards de
            design et la même promesse : vitesse d'exécution, confidentialité
            totale et accès freemium.
          </p>
        </div>

        {/* Grille des Applications (Style Premium SaaS) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {apps.map((a) => (
            <a
              key={a.name}
              href={a.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-[22px] bg-white/[0.02] border border-white/[0.08] p-7 hover:border-white/[0.18] hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between min-h-[220px]"
            >
              <div>
                <div className="flex items-center justify-between text-[12px]">
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[11px] border ${a.badgeColor}`}
                  >
                    {a.stat}
                  </span>
                  <span className="font-mono text-zinc-500 group-hover:text-zinc-400 transition-colors">
                    {a.url.replace("https://", "")}
                  </span>
                </div>

                <h2 className="text-[22px] font-[620] mt-5 text-zinc-100 group-hover:text-white transition-colors tracking-tight">
                  {a.name}
                </h2>

                <p className="text-zinc-400 text-[14.5px] mt-2 leading-relaxed">
                  {a.desc}
                </p>
              </div>

              <div className="text-[13px] text-zinc-400 font-medium mt-6 flex items-center gap-1 group-hover:text-white transition-colors">
                Ouvrir l'application
                <span className="transform group-hover:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Section Maillage Interne & SEO (Les nuages de tags) */}
        <div className="mt-20 border-t border-white/[0.06] pt-12">
          <h2 className="text-[22px] font-[620] text-zinc-200 mb-2 tracking-tight">
            Tous les outils — Raccourcis d'accès rapide
          </h2>
          <p className="text-zinc-500 text-[14px] mb-6 max-w-2xl leading-relaxed">
            Parcourez nos fiches explicatives et cas d'usage optimisés. Chaque
            outil dispose d'une page vitrine dédiée à l'acquisition de trafic
            Google.
          </p>

          <div className="flex flex-wrap gap-2">
            {tools.map((t) => (
              <Link
                key={t.slug}
                href={`/outils/${t.slug}`}
                className="px-4 py-2 rounded-full bg-white/[0.02] border border-white/[0.08] text-zinc-400 text-[13.5px] hover:bg-white/[0.06] hover:border-white/[0.15] hover:text-white transition-all duration-200"
              >
                {t.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bouton d'action secondaire */}
        <div className="mt-14">
          <Link
            href="/outils"
            className="inline-block rounded-full bg-white text-zinc-900 px-6 py-3 text-[14.5px] font-semibold hover:bg-zinc-200 transition-all shadow-lg shadow-white/5"
          >
            Voir le catalogue complet →
          </Link>
        </div>
      </main>
    </div>
  );
}
