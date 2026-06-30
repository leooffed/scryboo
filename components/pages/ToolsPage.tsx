// app/outils/[slug]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { tools, getTool } from "@/data/tools";
import { generateSeoObject } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

// 1. MÉTADONNÉES DYNAMIQUES
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool = getTool(slug);

  if (!tool) {
    return { title: "Outil introuvable — scryboo" };
  }

  return generateSeoObject({
    title: `${tool.h1} — Scryboo`,
    description: tool.description,
    canonicalPath: `/outils/${tool.slug}`,
  });
}

// 2. PAGE SERVEUR
export default async function ToolPage({ params }: Props) {
  const { slug } = await params;
  const tool = getTool(slug);

  if (!tool) {
    notFound();
  }

  const appUrl = `https://app.scryboo.com${tool.appPath}`;

  // Données structurées JSON-LD
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    applicationCategory: "WebApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "XOF" },
    description: tool.description,
    url: `https://scryboo.com/outils/${tool.slug}`,
  };

  const faqSchema =
    tool.faqs.length > 0
      ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: tool.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      }
      : null;

  return (
    <>
      {/* Injection des schémas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <div className="min-h-screen bg-white text-[#202124]">
        <main className="pt-8 sm:pt-10">
          <div className="max-w-[980px] mx-auto px-5 sm:px-8 lg:px-10">
            {/* Fil d’Ariane */}
            <nav className="text-[13px] text-[#5f6368] flex gap-2">
              <Link href="/" className="hover:text-[#1a73e8]">
                Scryboo
              </Link>
              <span>›</span>
              <Link href="/outils" className="hover:text-[#1a73e8]">
                Outils
              </Link>
              <span>›</span>
              <span className="text-[#202124]">{tool.name}</span>
            </nav>

            <h1 className="text-[30px] sm:text-[40px] md:text-[46px] font-[650] tracking-[-0.022em] mt-5 leading-[1.08] text-[#202124]">
              {tool.h1}
            </h1>
            <p className="text-[16.8px] text-[#5f6368] mt-3 max-w-2xl leading-relaxed">
              {tool.description} {tool.long}
            </p>

            <div className="mt-6 flex flex-wrap gap-3 items-center">
              <a
                href={appUrl}
                className="bg-[#1a73e8] text-white px-5 py-[12px] rounded-full text-[15px] font-[560] hover:bg-[#1765cc]"
              >
                Lancer l’outil {tool.name} →
              </a>
              <span className="text-[13.5px] text-[#5f6368]">
                Ouvre app.scryboo.com{tool.appPath}
              </span>
            </div>
            <div className="text-[13px] text-[#137333] mt-2 font-[500]">
              Gratuit • compte • Transparent
            </div>
          </div>

          {/* Zone aperçu (drag & drop) */}
          <div className="max-w-[980px] mx-auto px-5 sm:px-8 lg:px-10 mt-10">
            <div className="rounded-[20px] border border-[#dadce0] bg-[#f8f9fa] p-6 sm:p-8">
              <div className="text-[15px] text-[#3c4043] font-[600] mb-3">
                {tool.name} — aperçu
              </div>
              <div className="rounded-[14px] border-2 border-dashed border-[#dadce0] bg-white py-14 text-center">
                <div className="text-[#202124] text-[15.5px]">
                  Glissez vos fichiers ici
                </div>
                <a
                  href={appUrl}
                  className="inline-block mt-3 px-4 py-2 rounded-full border border-[#dadce0] bg-white text-[13.5px] text-[#1a73e8] hover:bg-[#f1f3f4]"
                >
                  Ouvrir dans Scryboo Tools
                </a>
                <div className="text-[12.2px] text-[#5f6368] mt-2">
                  Traitement local • Confidentiel • Gratuit
                </div>
              </div>
            </div>
          </div>

          {/* Contenu principal + Sidebar */}
          <div className="max-w-[980px] mx-auto px-5 sm:px-8 lg:px-10 py-14 grid md:grid-cols-3 gap-10">
            <article className="md:col-span-2">
              <h2 className="text-[22px] font-[620] text-[#202124]">
                Pourquoi {tool.name} avec scryboo ?
              </h2>
              <p className="text-[#5f6368] mt-3 leading-relaxed">
                {tool.long} Conçu pour vous, rapide même en
                3G.
              </p>
              <ul className="mt-4 space-y-2 text-[14.6px] text-[#3c4043]">
                {tool.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <CheckCircle2
                      size={17}
                      className="text-[#137333] mt-[2px]"
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <h3 className="text-[19px] font-[620] mt-8 text-[#202124]">
                Gratuit et transparent
              </h3>
              <p className="text-[#5f6368] mt-2">
                L’accès aux outils de base est gratuit,
                tracking pour ameliorer le produit, pour toujours. Pro = API, batch, AI illimitée.
              </p>

              {tool.faqs.length > 0 && (
                <>
                  <h3 className="text-[19px] font-[620] mt-8 text-[#202124]">
                    FAQ
                  </h3>
                  <div className="space-y-3 mt-3">
                    {tool.faqs.map((f) => (
                      <div
                        key={f.q}
                        className="border border-[#dadce0] rounded-[14px] bg-[#fcfcfc] p-4"
                      >
                        <div className="font-[560] text-[#202124]">{f.q}</div>
                        <div className="text-[14px] text-[#5f6368] mt-1">
                          {f.a}
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </article>

            <aside>
              <div className="rounded-[18px] border border-[#dadce0] bg-white p-5 sticky top-24">
                <div className="text-[14px] font-[600] text-[#202124]">
                  Lancer {tool.name}
                </div>
                <a
                  href={appUrl}
                  className="mt-3 block text-center bg-[#1a73e8] text-white py-3 rounded-full text-[14.5px] font-[560]"
                >
                  Ouvrir l’outil →
                </a>
                <div className="grid grid-cols-3 text-center text-[12px] text-[#5f6368] mt-4">
                  <div>
                    <b className="text-[#202124]">Gratuit</b>
                    <br />
                    toujours
                  </div>
                  <div>
                    <b className="text-[#202124]">Local</b>
                    <br />0 upload
                  </div>
                  <div>
                    <b className="text-[#202124]">&lt;48kb</b>
                    <br />
                    rapide
                  </div>
                </div>
                <p className="text-[11.8px] text-[#5f6368] mt-4">
                  Canonical :{" "}
                  <code>scryboo.com/outils/{tool.slug}</code>
                </p>
              </div>

              <div className="mt-4 rounded-[18px] border border-[#dadce0] p-5 bg-[#f8f9fa]">
                <div className="text-[13.5px] font-[600] text-[#202124]">
                  Outils similaires
                </div>
                <ul className="mt-2 space-y-2 text-[13.6px] text-[#1a73e8]">
                  {tools
                    .filter(
                      (t) =>
                        t.category === tool.category && t.slug !== tool.slug
                    )
                    .slice(0, 5)
                    .map((t) => (
                      <li key={t.slug}>
                        <Link
                          href={`/outils/${t.slug}`}
                          className="hover:underline"
                        >
                          {t.name} →
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </>
  );
}