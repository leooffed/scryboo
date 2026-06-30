// app/vision/page.tsx
import type { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Vision Scryboo — Pour une Afrique numérique, rapide et confidentielle",
  description:
    "Découvrez la vision de Scryboo : un écosystème d'applications ultra-rapides, local-first, respectueuses de la vie privée, pensées pour l'Afrique. 95 % gratuites, sans publicité intrusive, sans collecte de données.",
  alternates: {
    canonical: "https://scryboo.com/vision",
  },
  openGraph: {
    title: "Vision Scryboo — La tech africaine au service de tous",
    description:
      "Des outils web gratuits, confidentiels et locaux pour les indépendants et PME d'Afrique. Edge, WASM, paiements mobiles, IA souveraine.",
    url: "https://scryboo.com/vision",
    siteName: "Scryboo",
    locale: "fr_FR",
    type: "website",
  },
};

export default function VisionPage() {
  return (
    <div className="min-h-screen bg-white text-[#202124]">
      <main className="max-w-[880px] mx-auto px-5 sm:px-8 lg:px-10 py-14">
        <div className="text-[12.5px] text-[#5f6368] uppercase tracking-wide">
          Vision
        </div>
        <h1 className="text-[38px] sm:text-[48px] font-[650] tracking-[-0.024em] mt-2 leading-[1.05]">
          L’écosystème technologique qui propulse vos idées.
        </h1>
        <p className="text-[17.5px] text-[#3c4043] mt-5 leading-relaxed">
          Né en Afrique, porté par une équipe distribuée sur le continent,
          Scryboo conçoit des applications ultra-rapides, accessibles même en
          3G, et respectueuses de vos données. Orange Money, Wave, XOF,
          interfaces en français et langues locales : nous créons pour nos
          réalités.
        </p>

        {/* Piliers stratégiques */}
        <div className="grid md:grid-cols-3 gap-4 mt-10">
          {[
            [
              "Vitesse extrême",
              "Architecture Edge-first déployée en Afrique, Europe et Amérique. Temps de réponse moyen inférieur à 92 ms. Moins de 48 ko par outil.",
            ],
            [
              "Adaptation locale",
              "Intégrations natives avec les systèmes de paiement mobile (Orange Money, Wave, MTN Mobile Money). Conformité aux réglementations africaines.",
            ],
            [
              "Confidentialité radicale",
              "Traitement local via WebAssembly. Aucune donnée utilisateur n’est collectée, stockée ou revendue. Zéro publicité intrusive, zéro tracker.",
            ],
          ].map(([t, d]) => (
            <div key={t} className="g-card p-5">
              <div className="text-[16.8px] font-[620] text-[#202124]">
                {t}
              </div>
              <div className="text-[14px] text-[#5f6368] mt-2">{d}</div>
            </div>
          ))}
        </div>

        {/* Gratuité pour toujours */}
        <div className="mt-10 rounded-[18px] bg-[#e6f4ea] border border-[#cce8d4] p-6">
          <div className="text-[16px] font-[600] text-[#137333]">
            95 % gratuit, pour toujours
          </div>
          <p className="text-[#1e4620] mt-2 text-[15.3px]">
            Comme Google et Facebook, l’accès de base à tous nos outils est
            gratuit, sans publicité envahissante, sans création de compte
            obligatoire. Nous ne monétisons que les usages professionnels
            intensifs (API, traitement par lots, IA avancée). Notre engagement
            : la gratuité pour les particuliers et les petites entreprises,
            pour toujours.
          </p>
        </div>

        {/* Manifeste technique */}
        <section className="mt-12">
          <h2 className="text-[22px] font-[620] text-[#202124] mb-4">
            Notre manifeste technique
          </h2>
          <ul className="space-y-3 text-[15.2px] text-[#3c4043]">
            <li>
              <strong>Local-first</strong> — Les calculs s’exécutent dans le
              navigateur, pas sur un serveur distant. Zéro upload, confidentialité
              absolue.
            </li>
            <li>
              <strong>Edge</strong> — Nos serveurs sont placés au plus près des
              utilisateurs africains pour des temps de chargement inférieurs à la
              seconde, même en connexion 3G.
            </li>
            <li>
              <strong>WebAssembly</strong> — Performances quasi-natives dans le
              navigateur, sans installation. Compression PDF, traitement d’images,
              IA générative en local.
            </li>
            <li>
              <strong>Souveraineté numérique</strong> — Nous restons indépendants
              des géants du cloud. Nos technologies sont open source, nos données
              restent sur le continent.
            </li>
            <li>
              <strong>Innovation frugale</strong> — Chaque kilooctet compte. Nous
              concevons des logiciels légers pour s’adapter aux réalités des
              terminaux et des réseaux africains.
            </li>
          </ul>
        </section>

        {/* Feuille de route */}
        <section className="mt-12">
          <h2 className="text-[22px] font-[620] text-[#202124] mb-4">
            Notre ambition pour 2026
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Lancement de Flow ERP avec comptabilité OHADA.",
              "Intégration complète des wallets Mobile Money.",
              "Déploiement de nœuds Edge dans 15 pays africains.",
              "Labellisation RGPD et NDPR (Nigeria).",
              "Traduction de tous les outils en wolof, swahili et haoussa.",
              "100 outils gratuits dans la suite Tools.",
            ].map((goal, i) => (
              <div
                key={i}
                className="flex items-start gap-2 text-[14.4px] text-[#3c4043]"
              >
                <span className="text-[#137333] mt-0.5 text-[18px] leading-none">
                  ✓
                </span>
                {goal}
              </div>
            ))}
          </div>
        </section>

        {/* Call to action */}
        <div className="mt-10 flex gap-4 flex-wrap">
          <Link
            href="/outils"
            className="bg-[#1a73e8] text-white px-5 py-3 rounded-full text-[14.5px] font-[560] hover:bg-[#1765cc]"
          >
            Explorer les outils gratuits →
          </Link>
          <Link
            href="/produits"
            className="text-[#1a73e8] px-3 py-3 text-[14.5px] hover:underline"
          >
            Tous les produits →
          </Link>
        </div>
      </main>
    </div>
  );
}