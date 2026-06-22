import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  HelpCircle,
  ArrowLeft,
  Zap,
  Shield,
  WifiOff,
} from "lucide-react";

import { getTool } from "@/data/tools"; // Ajuste le chemin vers ton fichier tools.ts
import { generateSeoObject } from "@/lib/seo";
import { JsonLd } from "@/hooks/JsonLd";

interface Props {
  params: Promise<{ slug: string }>;
}

// 1. GÉNÉRATION DYNAMIQUE DU SEO (Serveur)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool = getTool(slug);

  if (!tool) {
    return { title: "Outil introuvable | Scryboo" };
  }

  // On utilise le H1 ou une structure optimisée pour le titre de l'onglet
  return generateSeoObject({
    title: `${tool.name} — Outil En Ligne 100% Gratuit`,
    description: tool.description,
    canonicalPath: `/outils/${tool.slug}`,
  });
}

// 2. RENDU DE LA LANDING PAGE DE PONT (Serveur)
export default async function ToolLandingPage({ params }: Props) {
  const { slug } = await params;
  const tool = getTool(slug);

  if (!tool) {
    notFound();
  }

  // --- DONNÉES STRUCTURÉES 1 : L'application Web ---
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: tool.name,
    url: `https://scryboo.com/outils/${tool.slug}`,
    applicationCategory: `${tool.category}Application`,
    operatingSystem: "All",
    browserRequirements: "Requires JavaScript and WebAssembly.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: tool.description,
  };

  // --- DONNÉES STRUCTURÉES 2 : La FAQ dynamique ---
  const faqSchema =
    tool.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: tool.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.a,
            },
          })),
        }
      : null;

  return (
    <>
      {/* Injection des Schémas Google en pur SSR */}
      <JsonLd data={webAppSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}

      <div className="min-h-screen bg-[#08080d] text-zinc-100 antialiased py-12">
        <div className="max-w-4xl mx-auto px-6">
          {/* Retour au Hub */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white mb-10 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>

          {/* En-tête : Badge + H1 + Tagline */}
          <div className="relative border-b border-white/[0.06] pb-10 mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-white/[0.04] border border-white/[0.08] text-zinc-400 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Catégorie {tool.category} •{" "}
              {tool.free ? "100% Gratuit" : "Freemium"}
            </span>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-100 leading-[1.15]">
              {tool.h1}
            </h1>

            <p className="text-xl text-zinc-400 mt-4 font-light max-w-2xl">
              {tool.tagline} — {tool.description}
            </p>

            {/* LE GROS BOUTON CTA DE PASSERELLE (Pas de redirection auto !) */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`https://app.scryboo.com${tool.appPath}`}
                className="inline-flex items-center gap-2 rounded-full bg-white text-zinc-900 font-semibold px-6 py-3.5 text-[15px] hover:bg-zinc-100 transition-all shadow-lg shadow-white/[0.02]"
              >
                Lancer l'outil {tool.name} (Gratuit)
              </a>
              {tool.pro && (
                <span className="text-xs font-mono text-zinc-500 bg-white/[0.02] border border-white/[0.05] px-3 py-1.5 rounded-md">
                  {tool.pro} disponible
                </span>
              )}
            </div>
          </div>

          {/* Corps de la page : Grille 2 colonnes */}
          <div className="grid md:grid-cols-3 gap-10">
            {/* Colonne Gauche : Description longue et FAQ */}
            <div className="md:col-span-2 space-y-10">
              <section>
                <h2 className="text-lg font-semibold text-zinc-200 mb-3 font-mono text-xs uppercase tracking-wider text-zinc-500">
                  À propos de l'outil
                </h2>
                <p className="text-zinc-300 leading-relaxed text-[16px] whitespace-pre-line">
                  {tool.long}
                </p>
              </section>

              {/* Badges de Confiance Technique (WASM/Local-first) */}
              <div className="grid grid-cols-3 gap-3 pt-4">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] text-center">
                  <Shield className="w-5 h-5 text-indigo-400 mx-auto mb-2" />
                  <div className="text-xs font-medium text-zinc-300">
                    Confidentialité
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] text-center">
                  <Zap className="w-5 h-5 text-amber-400 mx-auto mb-2" />
                  <div className="text-xs font-medium text-zinc-300">
                    Ultra Rapide
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] text-center">
                  <WifiOff className="w-5 h-5 text-emerald-400 mx-auto mb-2" />
                  <div className="text-xs font-medium text-zinc-300">
                    Offline-ready
                  </div>
                </div>
              </div>

              {/* Section FAQ si elle existe */}
              {tool.faqs.length > 0 && (
                <section className="pt-6 border-t border-white/[0.06]">
                  <h2 className="text-xl font-bold text-zinc-100 mb-6 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-zinc-400" />
                    Questions fréquentes
                  </h2>
                  <div className="space-y-6">
                    {tool.faqs.map((faq, index) => (
                      <div key={index} className="space-y-2">
                        <h3 className="font-medium text-[16px] text-zinc-200">
                          {faq.q}
                        </h3>
                        <p className="text-sm text-zinc-400 leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Colonne Droite : Les fonctionnalités clés (Features) */}
            <div className="md:col-span-1">
              <div className="sticky top-6 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <h3 className="text-sm font-semibold text-zinc-400 font-mono uppercase tracking-wider mb-4">
                  Points forts
                </h3>
                <ul className="space-y-3">
                  {tool.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm text-zinc-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
