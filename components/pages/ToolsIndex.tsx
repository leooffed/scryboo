// app/outils/page.tsx
import { toolsByCategory } from "@/data/tools";
import Link from "next/link";
import type { Metadata } from "next";
import { generateSeoObject } from "@/lib/seo";


export const metadata: Metadata = generateSeoObject({
  title: "Tous les outils Scryboo — Gratuit, local, sans pub",
  description:
    "42 outils web gratuits : PDF, images, texte, dev, QR. 100% local, privacy-by-design. Comme Google : gratuit pour toujours.",
  canonicalPath: "/outils",
});

export default function ToolsIndex() {
  return (
    <div className="min-h-screen bg-white text-[#202124]">
      <main className="max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-10 py-12">
        <h1 className="text-[32px] sm:text-[40px] font-[650] tracking-[-0.022em]">
          Tous les outils Scryboo
        </h1>
        <p className="text-[#5f6368] mt-2 text-[16px] max-w-2xl">
          Pages SEO dédiées (scryboo.com/outils/…) qui redirigent vers
          app.scryboo.com — stratégie Pont.
        </p>
        <div className="mt-5 inline-flex items-center gap-2 text-[13.8px] bg-[#e6f4ea] text-[#137333] px-3 py-1.5 rounded-full font-[500]">
          95% gratuit • Sans pub • Comme Google
        </div>

        {Object.entries(toolsByCategory).map(([cat, list]) => (
          <div key={cat} className="mt-10">
            <h2 className="text-[18px] font-[620] text-[#202124] mb-4">
              {cat}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {list.map((t) => (
                <Link
                  key={t.slug}
                  href={`/outils/${t.slug}`}
                  className="g-card p-5"
                >
                  <div className="text-[16.8px] font-[600] text-[#1a73e8]">
                    {t.name}
                  </div>
                  <div className="text-[13.6px] text-[#5f6368] mt-1">
                    {t.tagline}
                  </div>
                  <div className="text-[11.8px] text-[#70757a] mt-3 font-mono">
                    scryboo.com/outils/{t.slug}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
        <p className="text-[13.4px] text-[#5f6368] mt-10">
          Backlinks → <b>scryboo.com/outils/…</b> — canonical vers le domaine
          principal.
        </p>
      </main>
    </div>
  );
}