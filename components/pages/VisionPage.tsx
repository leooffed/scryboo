import type { Metadata } from "next";
import Link from "next/link";
import { Zap, Globe2, LockKeyhole, Heart } from "lucide-react";

// 1. Définition des métadonnées SEO gérées nativement sur le serveur
export const metadata: Metadata = {
  title: "Vision — Scryboo, l'écosystème technologique d'avenir",
  description:
    "Découvrez le manifeste technique et la vision de Scryboo : des architectures Edge-first ultra-rapides, respectueuses de la vie privée et conçues pour l'Afrique francophone et le monde.",
  alternates: {
    canonical: "https://scryboo.com/vision",
  },
};

const benefits = [
  {
    icon: Zap,
    title: "Vitesse extrême",
    text: "Architecture Edge-first. Fichiers compressés à moins de 48 Ko par utilitaire. Un temps de réponse P95 inférieur à 92 ms pour une exécution instantanée, même hors ligne.",
  },
  {
    icon: Globe2,
    title: "Ancrage local",
    text: "Conçu en priorité pour l'Afrique francophone avec l'intégration native du Mobile Money (Wave, Orange Money), la gestion du XOF/XAF et le support multilingue (FR, EN, WO).",
  },
  {
    icon: LockKeyhole,
    title: "Privacy by Design",
    text: "Traitement décentralisé en local via WebAssembly (WASM). Zéro téléversement sur serveur, zéro cookie publicitaire. Vos documents ne quittent jamais votre terminal.",
  },
];

export default function VisionPage() {
  return (
    <div className="min-h-screen bg-[#08080d] text-zinc-100 antialiased">
      <main className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-14">
          {/* Section d'introduction */}
          <div className="max-w-3xl">
            <div className="text-[11.7px] uppercase tracking-widest text-zinc-500 font-mono">
              Notre Vision
            </div>
            <h1 className="font-display text-[44px] md:text-[62px] tracking-[-0.027em] leading-[1.05] mt-3 font-bold text-white">
              L'écosystème technologique qui propulse vos idées.
            </h1>
            <p className="text-[18px] text-zinc-400 mt-6 leading-relaxed">
              Scryboo est né de la volonté de bâtir des infrastructures
              logicielles d'excellence, accessibles à tous. Nous développons les
              outils de productivité que nous aurions aimé avoir : légers,
              extrêmement rapides même sur un réseau 3G instable, et
              profondément respectueux de l'intégrité de vos données
              professionnelles.
            </p>
          </div>

          {/* Grille des 3 piliers techniques */}
          <div className="grid md:grid-cols-3 gap-7 mt-16">
            {benefits.map((b) => {
              const IconComponent = b.icon;
              return (
                <div
                  key={b.title}
                  className="rounded-[24px] bg-white/[0.02] border border-white/[0.08] p-7 hover:border-white/[0.15] transition-all duration-300"
                >
                  <IconComponent size={20} className="text-zinc-300" />
                  <h2 className="text-[19.5px] font-semibold mt-4 text-white tracking-tight">
                    {b.title}
                  </h2>
                  <p className="text-zinc-400 text-[14.5px] mt-2 leading-relaxed">
                    {b.text}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Bloc de promesse du modèle économique (Finition Premium) */}
          <div className="mt-16 rounded-[28px] border border-[#e6ff9c]/15 bg-[linear-gradient(180deg,rgba(226,255,123,0.04),rgba(226,255,123,0.01))] p-8 md:p-10">
            <div className="flex items-center gap-2 text-[#d8f999] text-[13.5px] font-semibold">
              <Heart size={15} /> Notre engagement
            </div>
            <h2 className="font-display text-[30px] md:text-[36px] text-white mt-3 font-bold tracking-tight">
              95% gratuit, sans compromis et pour toujours.
            </h2>
            <p className="text-[#cde8a6]/80 mt-3 max-w-3xl text-[15.5px] leading-relaxed">
              À l'instar des plus grands standards du web ouvert, l'accès à nos
              fonctionnalités fondamentales reste entièrement libre,
              confidentiel et dépourvu de bannières publicitaires. Notre
              viabilité financière s'appuie sur la commercialisation d'outils
              avancés pour les entreprises : connexions par API à forte charge,
              exécution de fichiers en masse et requêtes d'intelligence
              artificielle illimitées. Vous pouvez par exemple exploiter notre
              outil de{" "}
              <Link
                href="/outils/createur-de-cv"
                className="text-white underline underline-offset-4 hover:text-[#d8f999] transition-colors font-medium"
              >
                Création de CV
              </Link>{" "}
              sans aucune restriction de session.
            </p>
          </div>

          {/* Analyse de l'écosystème globale */}
          <div className="mt-16 grid md:grid-cols-2 gap-8 md:gap-12 text-[15.5px] text-zinc-400 leading-relaxed">
            <div>
              <h3 className="text-white text-[21px] font-semibold mb-3 tracking-tight">
                Pourquoi un écosystème interconnecté ?
              </h3>
              <p>
                Une authentification unifiée unique (SSO) vous ouvre les portes
                de nos modules passés et futurs :{" "}
                <span className="text-zinc-300 font-mono text-[14px]">
                  Tools
                </span>
                ,{" "}
                <span className="text-zinc-300 font-mono text-[14px]">AI</span>,{" "}
                <span className="text-zinc-300 font-mono text-[14px]">
                  Book
                </span>{" "}
                ou encore{" "}
                <span className="text-zinc-300 font-mono text-[14px]">
                  Flow
                </span>
                . Cette standardisation garantit un langage de design fluide,
                une portabilité totale de vos préférences et l'assurance d'un
                export libre de vos données via des API ouvertes.
              </p>
            </div>
            <div>
              <h3 className="text-white text-[21px] font-semibold mb-3 tracking-tight">
                Infrastructures Local-First & Global-Ready
              </h3>
              <p>
                Notre priorité stratégique est de fournir un service
                irréprochable sur les marchés émergents d'Afrique francophone
                avant d'étendre nos architectures à l'échelle mondiale. Pour ce
                faire, nos infrastructures s'appuient sur des serveurs
                distribués en grappes (Edge nodes) en Amérique du Nord, en
                Europe et en Afrique, associés à une télémétrie de pointe via
                OpenTelemetry pour maintenir un niveau de disponibilité
                constant.
              </p>
            </div>
          </div>

          {/* Liens d'actions */}
          <div className="mt-16 flex gap-4 flex-wrap items-center">
            <Link
              href="/outils"
              className="rounded-full bg-white text-zinc-900 px-6 py-3 text-[14.5px] font-semibold hover:bg-zinc-200 transition-colors shadow-md"
            >
              Explorer les outils gratuits
            </Link>
            <Link
              href="/a-propos"
              className="text-zinc-400 hover:text-white px-3 py-3 text-[14.5px] font-medium transition-colors"
            >
              Découvrir notre histoire →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
