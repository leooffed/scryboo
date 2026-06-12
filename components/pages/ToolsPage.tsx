'use client'

import { useParams } from "next/navigation";
import { tools, getTool } from "@/data/tools";
import { useSEO } from "@/lib/seo";
import Link from "next/link";

import {
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Globe2,
  CheckCircle2,
} from "lucide-react";

export default function ToolPage() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const tool = getTool(slug || "");
  if (!tool) {
    return (
      <div className="min-h-screen bg-[#08080d] text-zinc-200 flex items-center justify-center">
        Outil introuvable —{" "}
        <Link href="/outils" className="ml-2 underline">
          Voir tous les outils
        </Link>
      </div>
    );
  }

  const appUrl = `https://app.scryboo.com${tool.appPath}`;

  useSEO({
    title: `${tool.h1} — Scryboo`,
    description: tool.description,
    canonical: `/outils/${tool.slug}`,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: tool.name,
      applicationCategory: "WebApplication",
      operatingSystem: "Any",
      offers: { "@type": "Offer", price: "0", priceCurrency: "XOF" },
      description: tool.description,
      url: `https://scryboo.com/outils/${tool.slug}`,
      publisher: {
        "@type": "Organization",
        name: "Scryboo",
        url: "https://scryboo.com",
      },
    },
  });

  return (
    <div className="min-h-screen bg-[#08080d] text-zinc-100 antialiased">
      <main className="pt-28 md:pt-36">
        {/* Breadcrumbs */}
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-14">
          <nav className="text-[12.6px] text-zinc-500 flex items-center gap-2">
            <Link href="/" className="hover:text-zinc-300">
              Scryboo
            </Link>
            <span>›</span>
            <Link href="/outils" className="hover:text-zinc-300">
              Outils
            </Link>
            <span>›</span>
            <span className="text-zinc-300">{tool.name}</span>
          </nav>
        </div>

        {/* Hero SEO */}
        <header className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-14 pt-8 pb-10">
          <div className="flex flex-wrap items-center gap-3 text-[11.9px] text-zinc-400 mb-4">
            <span className="px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/[0.09] text-zinc-200">
              {tool.category}
            </span>
            <span className="px-2.5 py-1 rounded-full bg-[#e6ff9a]/10 text-[#d7f98a] border border-[#e6ff9a]/15">
              100% Gratuit
            </span>
            <span>• Innovante • free et display</span>
          </div>
          <h1 className="font-display text-[40px] md:text-[58px] leading-[1.02] tracking-[-0.025em] text-zinc-100 max-w-3xl">
            {tool.h1}
          </h1>
          <p className="text-[17.5px] text-zinc-400 max-w-2xl mt-4 leading-relaxed">
            {tool.description} {tool.long}
          </p>

          {/* Big CTA - Pont SEO */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={appUrl}
              rel="noopener"
              className="group inline-flex items-center gap-3 rounded-full bg-white text-zinc-900 font-[650] px-6 py-[14px] text-[15.4px] shadow-[0_12px_40px_rgba(255,255,255,0.08)] hover:bg-zinc-100 transition"
            >
              Lancer l’outil {tool.name}
              <span className="w-7 h-7 rounded-full bg-zinc-900 text-white flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                <ArrowUpRight size={16} />
              </span>
            </a>
            <div className="text-[13.2px] text-zinc-400">
              Ouvre{" "}
              <span className="text-zinc-200 font-mono">
                app.scryboo.com{tool.appPath}
              </span>
            </div>
          </div>

          <p className="mt-3 text-[12.9px] text-zinc-500">
            Des outils Scryboo sont gratuits, comme Google et
            Facebook. Aucune carte requise.
          </p>
        </header>

        {/* Live tool frame teaser */}
        <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-14 pb-12">
          <div className="rounded-[26px] bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.018))] border border-white/[0.105] p-7 md:p-10 relative overflow-hidden">
            <div className="absolute right-[-40px] top-[-30px] w-64 h-52 blur-[70px] opacity-[.55] bg-[radial-gradient(circle_at_center,rgba(167,152,255,0.28),transparent_70%)]" />
            <div className="flex flex-wrap items-center justify-between gap-5">
              <div>
                <div className="text-[12.8px] text-zinc-300">
                  Prêt en 1 clic
                </div>
                <div className="text-[22px] font-[620] text-zinc-100 mt-1">
                  {tool.name} — version web
                </div>
                <div className="text-[14px] text-zinc-400 mt-1">
                  Exécution locale • 0 upload • Poids &lt; 48kb
                </div>
              </div>
              <a
                href={appUrl}
                className="rounded-full bg-white text-zinc-900 px-5 py-3 text-[14.3px] font-[610] hover:bg-zinc-100"
              >
                Ouvrir dans l’app →
              </a>
            </div>
            {/* Fake UI */}
            <div className="mt-7 rounded-[18px] border border-white/[0.09] bg-[#101118] p-5">
              <div className="rounded-xl border border-dashed border-white/[0.16] bg-white/[0.016] py-14 flex flex-col items-center justify-center text-center">
                <div className="text-zinc-300 text-[15.2px]">
                  Glissez vos fichiers ici
                </div>
                <div className="text-zinc-500 text-[13.2px] mt-1">ou</div>
                <a
                  href={appUrl}
                  className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/[0.08] border border-white/[0.14] px-4 py-2 text-[13.35px] text-zinc-200 hover:bg-white/[0.12]"
                >
                  Lancer dans l’app Scryboo Tools
                </a>
                <div className="text-[11.6px] text-zinc-500 mt-3">
                  Traitement local • Confidentiel • Gratuit
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content block - Afrique francophone */}
        <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-14 pb-16 grid lg:grid-cols-12 gap-10">
          <article className="lg:col-span-7 prose prose-invert max-w-none">
            <h2 className="font-display text-[28px] md:text-[33px] tracking-[-0.018em] text-zinc-100">
              Pourquoi {tool.name} avec Scryboo ?
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              {tool.long} Conçu pour l’Afrique francophone : rapide même en 3G,
              paiements locaux supportés dans les outils Pro, interface en
              français.
            </p>
            <ul className="text-zinc-300 space-y-2 mt-4">
              {tool.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <CheckCircle2 size={17} className="mt-0.5 text-[#d6ff95]" />
                  {f}
                </li>
              ))}
            </ul>

            <h3 className="font-display text-[22px] text-zinc-100 mt-10">
              Gratuit comme Google et Facebook
            </h3>
            <p className="text-zinc-400">
              Scryboo suit le même modèle que Google et Meta : l’accès aux
              outils de base est gratuit,tracking pour ameliorer nos produits: API, batch
              volumineux, AI illimitée, support prioritaire. Vous pouvez
              utiliser <strong className="text-zinc-200">{tool.name}</strong>{" "}
              Precis et sans limite, aussi longtemps que vous le souhaitez.
            </p>

            <h3 className="font-display text-[22px] text-zinc-100 mt-10">
              Confidentialité · Privacy by design
            </h3>
            <p className="text-zinc-400">
              Vos fichiers ne quittent jamais votre appareil. Le traitement est
              100% local (WASM). 0 cookies tiers, 0 analytics intrusifs. Idéal
              pour documents sensibles : CV, pièces d’identité, factures.
            </p>

            {tool.faqs.length > 0 && (
              <>
                <h3 className="font-display text-[22px] text-zinc-100 mt-10">
                  FAQ – {tool.name}
                </h3>
                <div className="space-y-4 mt-3">
                  {tool.faqs.map((f) => (
                    <div
                      key={f.q}
                      className="rounded-xl bg-white/[0.025] border border-white/[0.08] p-4"
                    >
                      <div className="text-zinc-200 font-[560]">{f.q}</div>
                      <div className="text-zinc-400 text-[14.5px] mt-1">
                        {f.a}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </article>

          {/* Right column */}
          <aside className="lg:col-span-5">
            <div className="rounded-[22px] border border-white/[0.10] bg-white/[0.027] p-6 md:p-7 sticky top-24">
              <div className="text-[13.5px] text-zinc-300 font-[600]">
                Lancer {tool.name}
              </div>
              <a
                href={appUrl}
                className="mt-3 inline-flex w-full justify-center rounded-full bg-white text-zinc-900 font-[640] py-3"
              >
                Ouvrir l’outil →
              </a>
              <div className="mt-4 grid grid-cols-3 gap-3 text-[11.9px] text-zinc-400 text-center">
                <div>
                  <div className="text-zinc-200 font-[600]">Gratuit</div>Pour
                  toujours
                </div>
                <div>
                  <div className="text-zinc-200 font-[600]">Local</div>0 upload
                </div>
                <div>
                  <div className="text-zinc-200 font-[600]">&lt;48kb</div>
                  Instantané
                </div>
              </div>
              <div className="flex items-center gap-6 text-[12.5px] text-zinc-400 mt-5 border-t border-white/[0.08] pt-5">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={15} /> Privacy
                </span>
                <span className="flex items-center gap-1.5">
                  <Zap size={15} /> Edge
                </span>
                <span className="flex items-center gap-1.5">
                  <Globe2 size={15} /> AF / EU
                </span>
              </div>
              <p className="text-[11.8px] text-zinc-500 mt-4">
                Balise canonical :{" "}
                <code className="text-zinc-400">
                  scryboo.com/outils/{tool.slug}
                </code>{" "}
                — si vous embarquez l’outil ailleurs, pointez vers cette page
                pour le SEO.
              </p>
            </div>

            <div className="mt-5 rounded-[22px] border border-white/[0.10] bg-white/[0.018] p-6">
              <div className="text-[13px] text-zinc-300 font-[600]">
                Outils populaires
              </div>
              <ul className="mt-3 space-y-2 text-[13.8px] text-zinc-400">
                {tools
                  .filter((t) => t.slug !== tool.slug)
                  .slice(0, 6)
                  .map((t) => (
                    <li key={t.slug}>
                      <Link
                        className="hover:text-zinc-100"
                        href={`/outils/${t.slug}`}
                      >
                        {t.name} →
                      </Link>
                    </li>
                  ))}
              </ul>
              <Link
                href="/outils"
                className="text-[13px] text-zinc-300 mt-3 inline-block hover:text-white"
              >
                Tout voir →
              </Link>
            </div>
          </aside>
        </section>

        {/* Internal linking block */}
        <section className="border-t border-white/[0.078] bg-[#0a0a11]">
          <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-14 py-14">
            <div className="text-[12.4px] text-zinc-400 mb-3">
              Découvrir aussi dans {tool.category}
            </div>
            <div className="flex flex-wrap gap-2.5 text-[13.2px] text-zinc-300">
              {tools
                .filter((t) => t.category === tool.category)
                .map((t) => (
                  <Link
                    key={t.slug}
                    href={`/outils/${t.slug}`}
                    className={`px-3 py-1.5 rounded-full border ${t.slug === tool.slug ? "border-white/[0.22] bg-white/[0.06] text-white" : "border-white/[0.11] bg-white/[0.028] hover:bg-white/[0.05]"}`}
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
