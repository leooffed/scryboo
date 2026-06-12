import { tools, getTool } from "@/data/tools";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Globe2,
  CheckCircle2,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }> | { slug: string };
}

// 1. Génération des métadonnées dynamiques côté serveur
export async function generateMetadata({ params }: any): Promise<Metadata> {
  const resolvedParams = await params;
  const tool = getTool(resolvedParams.slug || "");

  if (!tool) return { title: "Outil introuvable | Scryboo" };

  return {
    title: `${tool.h1} — Outil Gratuit Scryboo`,
    description: tool.description,
    alternates: {
      canonical: `https://scryboo.com/outils/${tool.slug}`,
    },
  };
}

// 2. Page principale exécutée sur le serveur
export default async function ToolPage({ params }: any) {
  const resolvedParams = await params;
  const tool = getTool(resolvedParams.slug || "");

  if (!tool) {
    notFound(); // Renvoie un vrai code HTTP 404 propre
  }

  const appUrl = `https://app.scryboo.com${tool.appPath}`;

  // Schéma de données structurées pour que Google affiche l'outil comme une application riche
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    applicationCategory: "WebApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "XOF", // Parfait pour cibler la zone CFA en priorité
    },
    description: tool.description,
    url: `https://scryboo.com/outils/${tool.slug}`,
    publisher: {
      "@type": "Organization",
      name: "Scryboo",
      url: "https://scryboo.com",
    },
  };

  return (
    <div className="min-h-screen bg-[#08080d] text-zinc-100 antialiased">
      {/* Injection native du JSON-LD lu instantanément par Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="pt-28 md:pt-36">
        {/* Breadcrumbs (Fil d'Ariane pour le confort utilisateur et les robots) */}
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-14">
          <nav className="text-[12.6px] text-zinc-500 flex items-center gap-2">
            <Link href="/" className="hover:text-zinc-300 transition-colors">
              Scryboo
            </Link>
            <span>›</span>
            <Link
              href="/outils"
              className="hover:text-zinc-300 transition-colors"
            >
              Outils
            </Link>
            <span>›</span>
            <span className="text-zinc-300 font-medium">{tool.name}</span>
          </nav>
        </div>

        {/* Hero Section */}
        <header className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-14 pt-8 pb-10">
          <div className="flex flex-wrap items-center gap-3 text-[11.9px] mb-4">
            <span className="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-400">
              {tool.category}
            </span>
            <span className="px-2.5 py-1 rounded-full bg-[#e6ff9a]/10 text-[#d7f98a] border border-[#e6ff9a]/15 font-medium">
              100% Gratuit
            </span>
            <span className="text-zinc-500 font-mono">
              • Exécution Immédiate
            </span>
          </div>

          <h1 className="font-display text-[40px] md:text-[54px] leading-[1.1] tracking-[-0.025em] text-white max-w-3xl font-bold">
            {tool.h1}
          </h1>

          <p className="text-[17.5px] text-zinc-400 max-w-2xl mt-4 leading-relaxed">
            {tool.description} {tool.long}
          </p>

          {/* Le fameux bouton "Pont SEO" vers l'application Vite */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={appUrl}
              className="group inline-flex items-center gap-3 rounded-full bg-white text-zinc-900 font-semibold px-6 py-3.5 text-[15.4px] shadow-lg shadow-white/5 hover:bg-zinc-100 transition-all duration-200"
            >
              Lancer l’outil {tool.name}
              <span className="w-7 h-7 rounded-full bg-zinc-900 text-white flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-200">
                <ArrowUpRight size={14} />
              </span>
            </a>
            <div className="text-[13.2px] text-zinc-500">
              Propulsé par l'écosystème{" "}
              <span className="text-zinc-300 font-mono">app.scryboo.com</span>
            </div>
          </div>

          <p className="mt-4 text-[12.5px] text-zinc-500">
            Libre d'accès et sans engagement. Aucune carte bancaire requise.
          </p>
        </header>

        {/* Section de prévisualisation (Teaser d'interface) */}
        <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-14 pb-12">
          <div className="rounded-[26px] bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.005))] border border-white/[0.08] p-7 md:p-10 relative overflow-hidden">
            <div className="absolute right-[-40px] top-[-30px] w-64 h-52 blur-[80px] opacity-[.35] bg-[radial-gradient(circle_at_center,rgba(167,152,255,0.2),transparent_70%)]" />

            <div className="flex flex-wrap items-center justify-between gap-5 relative z-10">
              <div>
                <div className="text-[12.8px] text-zinc-400 font-mono uppercase tracking-wider">
                  Prêt en 1 clic
                </div>
                <h2 className="text-[22px] font-bold text-white mt-1">
                  {tool.name} — Version Web Client
                </h2>
                <div className="text-[14px] text-zinc-400 mt-1">
                  Exécution sécurisée en local • Aucun téléversement requis •
                  Ultra-léger
                </div>
              </div>
              <a
                href={appUrl}
                className="rounded-full bg-white/[0.08] border border-white/[0.12] text-white px-5 py-2.5 text-[14px] font-medium hover:bg-white/[0.15] transition-all"
              >
                Ouvrir l’application →
              </a>
            </div>

            {/* Fausse zone de dépôt de fichiers (Excellente pour la réassurance) */}
            <div className="mt-7 rounded-[18px] border border-white/[0.06] bg-[#0c0d14] p-5 relative z-10">
              <div className="rounded-xl border border-dashed border-white/[0.12] bg-white/[0.005] py-14 flex flex-col items-center justify-center text-center">
                <div className="text-zinc-300 text-[15.2px] font-medium">
                  Glissez vos documents ou fichiers ici
                </div>
                <div className="text-zinc-500 text-[13.2px] mt-1">ou</div>
                <a
                  href={appUrl}
                  className="mt-3 inline-flex items-center gap-2 rounded-full bg-white text-zinc-900 px-5 py-2 text-[13.5px] font-semibold hover:bg-zinc-200 transition-all shadow-md"
                >
                  Sélectionner et lancer dans l'application
                </a>
                <div className="text-[11.6px] text-zinc-500 mt-4">
                  Confidentialité absolue : les fichiers ne quittent jamais
                  votre terminal.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Contenu SEO Textuel Longue Traîne */}
        <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-14 pb-16 grid lg:grid-cols-12 gap-10">
          <article className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="font-display text-[28px] md:text-[32px] tracking-[-0.018em] text-white font-bold">
                Pourquoi utiliser {tool.name} sur Scryboo ?
              </h2>
              <p className="text-zinc-400 leading-relaxed mt-3">
                {tool.long} Optimisé pour les professionnels et créateurs
                francophones, cet utilitaire s'exécute instantanément, même sur
                les connexions mobiles instables, grâce à son architecture de
                traitement décentralisée.
              </p>

              <ul className="text-zinc-300 space-y-2.5 mt-5">
                {tool.features.map((f: string) => (
                  <li key={f} className="flex items-start gap-2.5 text-[15px]">
                    <CheckCircle2
                      size={16}
                      className="mt-1 text-[#d6ff95] flex-shrink-0"
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-[22px] text-white font-semibold">
                Un modèle freemium transparent
              </h3>
              <p className="text-zinc-400 leading-relaxed mt-2">
                L’accès individuel à la suite d'outils reste entièrement libre
                et sans publicité. Nous choisissons de ne valoriser
                financièrement que les cas d'usages industriels (traitements de
                volumes en masse, intégrations API pour les entreprises et
                ressources serveurs IA avancées). Vous pouvez utiliser{" "}
                <strong className="text-zinc-200">{tool.name}</strong> sans
                aucune contrainte de temps ou de session.
              </p>
            </div>

            <div>
              <h3 className="font-display text-[22px] text-white font-semibold">
                Sécurité et Privacy by Design
              </h3>
              <p className="text-zinc-400 leading-relaxed mt-2">
                Parce que vos documents (CV, pièces d'identité, données
                financières) sont précieux, Scryboo utilise la puissance de
                calcul locale de votre navigateur. Vos données ne transitent par
                aucun serveur distant. Le traitement s'opère instantanément dans
                votre mémoire locale.
              </p>
            </div>

            {/* Bloc FAQ dynamique */}
            {tool.faqs && tool.faqs.length > 0 && (
              <div className="pt-4">
                <h3 className="font-display text-[22px] text-white font-semibold mb-4">
                  Questions Fréquentes – {tool.name}
                </h3>
                <div className="space-y-3">
                  {tool.faqs.map((f: { q: string; a: string }) => (
                    <div
                      key={f.q}
                      className="rounded-xl bg-white/[0.015] border border-white/[0.06] p-5 hover:border-white/[0.12] transition-colors"
                    >
                      <h4 className="text-zinc-200 font-medium text-[15.5px]">
                        {f.q}
                      </h4>
                      <p className="text-zinc-400 text-[14.5px] mt-2 leading-relaxed">
                        {f.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* Colonne latérale collante */}
          <aside className="lg:col-span-5 space-y-5">
            <div className="rounded-[22px] border border-white/[0.08] bg-white/[0.01] p-6 sticky top-24 backdrop-blur-sm">
              <div className="text-[14px] text-zinc-300 font-medium">
                Accès instantané
              </div>
              <a
                href={appUrl}
                className="mt-3 inline-flex w-full justify-center rounded-full bg-white text-zinc-900 font-semibold py-3 hover:bg-zinc-200 transition-colors text-[14.5px]"
              >
                Ouvrir l’outil autonome →
              </a>

              <div className="mt-5 grid grid-cols-3 gap-2 text-[12px] text-zinc-400 text-center border-b border-white/[0.06] pb-5">
                <div>
                  <div className="text-zinc-200 font-semibold">Gratuit</div>
                  Standard
                </div>
                <div>
                  <div className="text-zinc-200 font-semibold">Local</div>0
                  transfert
                </div>
                <div>
                  <div className="text-zinc-200 font-semibold">Edge</div>
                  Instantané
                </div>
              </div>

              <div className="flex items-center justify-between text-[12.5px] text-zinc-500 mt-4 px-1">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={14} /> Sécurisé
                </span>
                <span className="flex items-center gap-1.5">
                  <Zap size={14} /> Léger
                </span>
                <span className="flex items-center gap-1.5">
                  <Globe2 size={14} /> Multi-régions
                </span>
              </div>
            </div>

            {/* Outils Recommandés (Amélioration du Pagerank interne) */}
            <div className="rounded-[22px] border border-white/[0.08] bg-white/[0.005] p-6">
              <h3 className="text-[13.5px] text-zinc-400 font-mono uppercase tracking-wider">
                Utilitaires Similaires
              </h3>
              <ul className="mt-3 grid gap-2 text-[14px]">
                {tools
                  .filter((t) => t.slug !== tool.slug)
                  .slice(0, 5)
                  .map((t) => (
                    <li key={t.slug}>
                      <Link
                        className="text-zinc-400 hover:text-white transition-colors block py-1"
                        href={`/outils/${t.slug}`}
                      >
                        {t.name}{" "}
                        <span className="text-zinc-600 font-mono text-[11px]">
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </aside>
        </section>

        {/* Section de Maillage sémantique de catégorie (Crucial pour Google) */}
        <section className="border-t border-white/[0.05] bg-[#09090f]">
          <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-14 py-14">
            <h3 className="text-[12.5px] uppercase tracking-widest text-zinc-500 font-mono mb-4">
              Autres solutions dans la catégorie {tool.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {tools
                .filter((t) => t.category === tool.category)
                .map((t) => (
                  <Link
                    key={t.slug}
                    href={`/outils/${t.slug}`}
                    className={`px-4 py-2 rounded-full border text-[13.5px] transition-all duration-200 ${
                      t.slug === tool.slug
                        ? "border-white/[0.2] bg-white/[0.06] text-white font-medium"
                        : "border-white/[0.06] bg-white/[0.015] text-zinc-400 hover:border-white/[0.15] hover:text-white"
                    }`}
                  >
                    {t.name}
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
