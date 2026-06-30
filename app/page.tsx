import { Metadata } from "next";
import EcosystemGrid from "@/components/layout/EcosystemGrid";
import Hero from "@/components/layout/Hero";
import Innovation from "@/components/layout/Innovation";
import JournalHub from "@/components/layout/JournalHub";

// 1. Importation de tes nouveaux outils SEO serveurs
import { generateSeoObject, SITE_DESC } from "@/lib/seo";
import { JsonLd } from "@/hooks/JsonLd";

// 2. Génération automatique des métadonnées pour la Home de la vitrine
export async function generateMetadata(): Promise<Metadata> {
  return generateSeoObject({
    title: "L'Écosystème Digital des Entrepreneurs Africains",
    description: SITE_DESC, // Utilise la description globale centralisée
    canonicalPath: "/", // C'est la racine
    ogImage: "/images/og/home-vitrine.png", // Ton visuel de marque pour LinkedIn
  });
}

export default function App() {
  // 3. Données structurées globales de ta marque (Format Schema.org)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Scryboo",
    url: "https://scryboo.com",
    logo: "https://scryboo.com/favicon.svg", // Remplace par l'URL réelle de ton logo
    description:
      "Collection d'outils web gratuits et d'applications de gestion conçus pour les créateurs et PME en Afrique francophone.",
    sameAs: [
      // Ajoute tes liens de réseaux sociaux ici plus tard (LinkedIn, X, etc.)
      "https://www.linkedin.com/company/scryboo",
    ],
    potentialAction: {
      "@type": "SearchAction",
      target: "https://app.scryboo.com/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      {/* 4. Injection du JSON-LD en pur SSR au tout début du document */}
      <JsonLd data={organizationSchema} />

      <div className="min-h-screen bg-[#08080d] text-zinc-100 antialiased">
        <main>
          <Hero />
          <EcosystemGrid />
          <Innovation />
          <JournalHub />

          {/* CTA Band */}
          <section className="relative bg-[#0b0b13] border-t border-white/[0.075]">
            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-20 md:py-24">
              <div className="rounded-[30px] bg-[linear-gradient(180deg,rgba(255,255,255,0.051),rgba(255,255,255,0.019))] border border-white/[0.105] px-7 sm:px-12 md:px-16 py-14 md:py-20 relative overflow-hidden">
                <div className="absolute right-[-70px] top-[-80px] w-[320px] h-[260px] rounded-full blur-[80px] opacity-70 bg-[radial-gradient(circle_at_center,rgba(167,152,255,0.33),rgba(224,255,138,0.12),transparent_70%)] pointer-events-none" />
                <div className="relative max-w-3xl">
                  <div className="text-[11.8px] uppercase tracking-widest text-zinc-400 font-mono">
                    Scryboo · Gratuit pour tous
                  </div>
                  <h3 className="font-display text-[34px] sm:text-[44px] md:text-[54px] tracking-[-0.022em] text-zinc-100 mt-4 leading-[1.04]">
                    95% de Scryboo est gratuit. Pour toujours.
                  </h3>
                  <p className="text-[16.4px] text-zinc-400 mt-4 max-w-xl">
                    Nous utilisons vos donnees pour ameliorer le produit. Les équipes
                    Pro débloquent API, batch volumineux et AI illimitée.
                    Commencez sur app.scryboo.com.
                  </p>
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <a
                      href="https://app.scryboo.com"
                      className="inline-flex items-center gap-2 rounded-full bg-white text-zinc-900 font-[630] px-5 py-3 text-[14.6px] hover:bg-zinc-100"
                    >
                      Ouvrir Scryboo Tools — Gratuit
                    </a>
                    <a
                      href="#journal"
                      className="text-[14.2px] text-zinc-300 hover:text-white"
                    >
                      Lire le Journal →
                    </a>
                  </div>
                  <div className="mt-6 text-[12.6px] text-zinc-500">
                    Free-forever • Transparent • SSO unifié • Export
                    libre
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
