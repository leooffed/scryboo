'use client'
import Link from "next/link";
import { useSEO } from "@/lib/seo";
import { tools } from "@/data/tools";

export default function ProductsPage() {
  useSEO({
    title: "Produits — L'écosystème Scryboo : Tools, AI, ERP, Book, Pulse",
    description:
      "Découvrez tous les produits Scryboo. Tools gratuits, AI localisée, ERP pour PME, réservations, social. SSO unifié.",
    canonical: "/produits",
  });

  const apps = [
    {
      name: "Scryboo Tools",
      url: "https://app.scryboo.com",
      desc: "42 outils gratuits — PDF, images, texte, dev. 100% local.",
      stat: "95% gratuit",
    },
    {
      name: "Scryboo AI",
      url: "https://ai.scryboo.com",
      desc: "Génération FR/EN/WO. 50 crédits / mois gratuits.",
      stat: "Bêta",
    },
    {
      name: "Book",
      url: "https://book.scryboo.com",
      desc: "Réservations + Orange Money / Wave.",
      stat: "Early",
    },
    {
      name: "Pulse",
      url: "https://pulse.scryboo.com",
      desc: "Social toolkit — planification & analytics.",
      stat: "Bientôt",
    },
    {
      name: "Flow ERP",
      url: "https://flow.scryboo.com",
      desc: "Factures, stock, CRM — PME Afrique Ouest.",
      stat: "Bientôt",
    },
    {
      name: "Vault",
      url: "https://vault.scryboo.com",
      desc: "Secrets chiffrés E2E.",
      stat: "Bientôt",
    },
  ];

  return (
    <div className="min-h-screen bg-[#08080d] text-zinc-100">
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
          <div className="max-w-2xl">
            <div className="text-[11.7px] uppercase tracking-widest text-zinc-500 font-mono">
              Produits
            </div>
            <h1 className="font-display text-[44px] md:text-[58px] tracking-[-0.024em] mt-2">
              Un hub. Six apps. Un compte.
            </h1>
            <p className="text-zinc-400 mt-4 text-[17px]">
              Chaque produit Scryboo partage le même SSO, le même design, et la
              même promesse : vitesse, confidentialité, et 95% gratuit.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {apps.map((a) => (
              <Link
                key={a.name}
                href={a.url}
                className="rounded-[22px] bg-white/[0.032] border border-white/[0.10] p-7 hover:border-white/[0.18] transition block"
              >
                <div className="flex items-center justify-between text-[11.8px] text-zinc-400">
                  <span>{a.stat}</span>
                  <span className="font-mono">
                    {a.url.replace("https://", "")}
                  </span>
                </div>
                <div className="text-[20.5px] font-[620] mt-4 text-zinc-100">
                  {a.name}
                </div>
                <p className="text-zinc-400 text-[14.3px] mt-2">{a.desc}</p>
              </Link>
            ))}
          </div>

          <div className="mt-16">
            <h2 className="text-[22px] font-[620] text-zinc-200 mb-4">
              Tous les outils — pages SEO pont
            </h2>
            <div className="flex flex-wrap gap-2 text-[13.4px]">
              {tools.map((t) => (
                <Link
                  key={t.slug}
                  href={`/outils/${t.slug}`}
                  className="px-3.5 py-2 rounded-full bg-white/[0.038] border border-white/[0.10] text-zinc-300 hover:bg-white/[0.07] hover:text-white"
                >
                  {t.name}
                </Link>
              ))}
            </div>
            <p className="text-zinc-500 text-[13.2px] mt-4">
              Chaque outil a sa landing SEO sur scryboo.com/outils/… qui
              redirige vers app.scryboo.com — capture 100% du trafic Google.
            </p>
          </div>

          <div className="mt-14">
            <Link
              href="/outils"
              className="rounded-full bg-white text-zinc-900 px-5 py-3 text-[14.2px] font-[610]"
            >
              Voir le catalogue complet →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
