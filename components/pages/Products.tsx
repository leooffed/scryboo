// app/produits/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Wrench, Layers, Globe, Sparkles, CalendarCheck, Radio } from "lucide-react";

import { ecoApps, colorMap } from "@/data/apps";
import { tools } from "@/data/tools";
import { generateSeoObject } from "@/lib/seo";

const icons: Record<string, any> = {
  tools: Wrench,
  flow: Layers,
  now: Globe,
  ai: Sparkles,
  book: CalendarCheck,
  pulse: Radio,
};

export const metadata: Metadata = generateSeoObject({
  title: "Produits — Scryboo : Tools, Flow ERP, Now Sites, AI, Book, Pulse",
  description:
    "6 apps interconnectées : Scryboo Tools (42 outils gratuits), Flow ERP comptabilité OHADA, Now créateur de site, AI, Book, Pulse.",
  canonicalPath: "/produits",
});

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white text-[#202124]">
      <main className="max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-10 py-12">
        <h1 className="text-[34px] sm:text-[42px] font-[650] tracking-[-0.022em]">
          Un hub. Six apps. Un compte.
        </h1>
        <p className="text-[#5f6368] mt-3 max-w-2xl text-[16.5px]">
          Scryboo, c’est un écosystème à la Google : Tools (42 utilitaires
          gratuits), Flow (ERP & comptabilité PME), Now (créateur de site web
          complet), AI, Book, Pulse. SSO unifié. 95% gratuit.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-9">
          {ecoApps.map((app) => {
            const Icon = icons[app.id] || Wrench;
            const c = colorMap[app.color];
            return (
              <a
                key={app.id}
                href={app.url}
                className="g-card p-6 block"
              >
                <div
                  className={`w-12 h-12 rounded-[14px] flex items-center justify-center ${c.bg} mb-4`}
                >
                  <Icon size={22} />
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-[19px] font-[620]">{app.name}</div>
                  {app.badge && (
                    <span className="text-[11.5px] px-2 py-1 rounded-full bg-[#f1f3f4] text-[#3c4043]">
                      {app.badge}
                    </span>
                  )}
                </div>
                <div className="text-[13.4px] text-[#5f6368] mt-1">
                  {app.subtitle}
                </div>
                <p className="text-[14px] text-[#3c4043] mt-3 leading-snug">
                  {app.description}
                </p>
                <div className="text-[12.6px] text-[#1a73e8] mt-4">
                  {app.domain} →
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-14 bg-[#f8f9fa] border border-[#e8eaed] rounded-[20px] p-7">
          <div className="text-[18px] font-[600] text-[#202124]">
            Flow — ERP & Comptabilité PME
          </div>
          <p className="text-[#5f6368] mt-2 max-w-2xl">
            Simplifiez la gestion : factures XOF, stock, CRM, comptabilité
            OHADA. Paiements Orange Money / Wave intégrés. Pensé Afrique de
            l’Ouest. <b>Bientôt sur flow.scryboo.com</b>
          </p>
          <div className="mt-3 text-[13.5px] text-[#3c4043]">
            → Devis • Factures • Stock • Compta • Rapports
          </div>
        </div>

        <div className="mt-8 bg-[#fff8e1] border border-[#fde293] rounded-[20px] p-7">
          <div className="text-[18px] font-[600] text-[#202124]">
            Now — Créateur de site web complet
          </div>
          <p className="text-[#5f6368] mt-2 max-w-2xl">
            Créez votre site en 5 minutes : landing, boutique, blog. Hébergé
            Edge AF/EU, ultra-rapide. Gratuit pour démarrer.{" "}
            <b>now.scryboo.com</b>
          </p>
          <div className="mt-3 text-[13.5px] text-[#3c4043]">
            → Templates • E-commerce • Blog • Domaine custom • SSL auto
          </div>
        </div>

        <h2 className="text-[20px] font-[620] mt-12 mb-4">
          Outils — pages SEO pont
        </h2>
        <div className="flex flex-wrap gap-2">
          {tools.map((t) => (
            <Link
              key={t.slug}
              href={`/outils/${t.slug}`}
              className="px-3 py-[7px] rounded-full border border-[#dadce0] text-[13.3px] text-[#3c4043] hover:bg-[#f8f9fa]"
            >
              {t.name}
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}