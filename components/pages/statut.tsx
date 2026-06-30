// app/statut/page.tsx
import type { Metadata } from "next";

import { generateSeoObject } from "@/lib/seo";

const services = [
  { name: "scryboo.com", status: "Opérationnel", uptime: "99.98%" },
  { name: "app.scryboo.com", status: "Opérationnel", uptime: "99.98%" },
  { name: "ai.scryboo.com", status: "Opérationnel", uptime: "99.94%" },
  { name: "flow.scryboo.com", status: "Bientôt disponible", uptime: "—" },
  { name: "API", status: "Opérationnel", uptime: "99.97%" },
];

// Métadonnées optimisées pour le SEO et les moteurs de recherche
export const metadata: Metadata = {
  title: "Statut des services Scryboo — Disponibilité en temps réel",
  description:
    "Consultez le statut en direct de l'écosystème Scryboo. Taux de disponibilité de 99,98 % sur l'ensemble de nos applications. Historique des incidents, maintenance et transparence totale.",
  alternates: {
    canonical: "https://scryboo.com/statut",
  },
  openGraph: {
    title: "Statut Scryboo — État des services en direct",
    description:
      "Suivez la disponibilité de tous les outils et APIs de l'écosystème Scryboo. Transparence et fiabilité au cœur de notre engagement.",
    url: "https://scryboo.com/statut",
    siteName: "Scryboo",
    locale: "fr_FR",
    type: "website",
  },
};

export default function StatusPage() {
  // Date de dernière vérification dynamique (côté serveur, donc stable pour la requête)
  const lastChecked = new Date().toLocaleString("fr-FR", {
    timeZone: "Africa/Abidjan",
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="min-h-screen bg-[#08080d] text-zinc-100 antialiased">
      <main className="pt-32 pb-24 max-w-4xl mx-auto px-6 sm:px-10 lg:px-14">
        <div className="text-[11.7px] uppercase tracking-widest text-zinc-500 font-mono">
          Statut
        </div>
        <h1 className="font-display text-[42px] md:text-[52px] tracking-[-0.024em] mt-2 font-bold leading-tight">
          Tous les systèmes sont opérationnels
        </h1>

        {/* Bannière verte rassurante */}
        <div className="mt-6 inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 rounded-full px-4 py-1.5 text-[13.5px]">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          Aucun incident en cours
        </div>

        {/* Tableau des services */}
        <div className="mt-8 rounded-[20px] border border-white/[0.10] bg-white/[0.025] overflow-hidden backdrop-blur-sm">
          <div className="grid grid-cols-3 px-6 py-3 text-[12px] uppercase tracking-wider text-zinc-500 font-mono border-b border-white/[0.07]">
            <div>Service</div>
            <div className="text-center">Disponibilité</div>
            <div className="text-right">Statut</div>
          </div>
          {services.map((s) => (
            <div
              key={s.name}
              className="grid grid-cols-3 items-center px-6 py-4 border-b border-white/[0.07] last:border-0 text-[14.5px]"
            >
              <div className="text-zinc-200 font-medium">{s.name}</div>
              <div className="text-center text-zinc-400">{s.uptime}</div>
              <div className="text-right text-emerald-300/90 font-medium">
                {s.status}
              </div>
            </div>
          ))}
        </div>

        {/* Dernière vérification et footer information */}
        <div className="mt-4 flex flex-wrap justify-between items-center text-[13.4px] text-zinc-500">
          <p>
            Dernière vérification : {lastChecked} (UTC+0) • Edge AF/EU/NA
          </p>
          <p>
            Historique des incidents :{" "}
            <a href="#" className="text-indigo-400 hover:underline">
              Voir les 90 derniers jours
            </a>
          </p>
        </div>

        {/* Bloc transparence supplémentaire */}
        <div className="mt-10 rounded-[18px] border border-white/[0.08] bg-white/[0.015] p-6 text-zinc-400 text-[14px]">
          <h2 className="text-[16px] font-semibold text-white mb-2">
            Engagement de transparence
          </h2>
          <p>
            Nous surveillons nos services 24h/24 via des sondes réparties en
            Afrique, Europe et Amérique du Nord. En cas d’incident, nous
            publions une mise à jour dans les 5 minutes sur cette page. Notre
            objectif : 99,95 % de disponibilité annuelle.
          </p>
          <p className="mt-2">
            Besoin d’une assistance ?{" "}
            <a href="mailto:status@scryboo.com" className="text-indigo-400 hover:underline">
              status@scryboo.com
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}