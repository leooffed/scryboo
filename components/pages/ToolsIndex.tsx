'use client'
import { toolsByCategory } from "@/data/tools";
import { useSEO } from "@/lib/seo";
import Link from "next/link";


export default function ToolsIndex() {
  useSEO({
    title: "Tous les outils Scryboo — Gratuit, local, sans pub",
    description:
      "42 outils web gratuits : PDF, images, texte, dev, QR. 100% local, privacy-by-design. Comme Google : gratuit pour toujours.",
    canonical: "/outils",
  });

  return (
    <div className="min-h-screen bg-[#08080d] text-zinc-100">
      <main className="pt-32 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pb-24">
        <div className="max-w-2xl">
          <div className="text-[11.7px] uppercase tracking-widest text-zinc-500 font-mono">
            Outils · SEO Hub
          </div>
          <h1 className="font-display text-[42px] md:text-[56px] tracking-[-0.025em] mt-2">
            Tous les outils Scryboo
          </h1>
          <p className="text-zinc-400 mt-3 text-[16.8px]">
            Pages SEO dédiées pour chaque outil. Chaque page capture le trafic
            Google et redirige vers l’app sur app.scryboo.com — la stratégie
            “Pont”.
          </p>
        </div>

        <div className="mt-10 rounded-[20px] border border-[#e6ff9c]/18 bg-[linear-gradient(180deg,rgba(226,255,123,0.07),rgba(226,255,123,0.022))] px-5 py-4 text-[14.2px] text-[#e3f9c7]">
          <b>95% gratuit pour toujours, comme Google et Facebook.</b> Sans pub,
          sans tracking. Les équipes Pro paient API / batch / AI.
        </div>

        {Object.entries(toolsByCategory).map(([cat, list]) => (
          <div key={cat} className="mt-12">
            <h2 className="text-[15.5px] text-zinc-300 font-[600] mb-4">
              {cat}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {list.map((t) => (
                <Link
                  key={t.slug}
                  href={`/outils/${t.slug}`}
                  className="rounded-[18px] bg-white/[0.028] border border-white/[0.10] px-5 py-4 hover:border-white/[0.18] transition"
                >
                  <div className="text-[16.8px] text-zinc-100 font-[600]">
                    {t.name}
                  </div>
                  <div className="text-[13.6px] text-zinc-400 mt-1">
                    {t.tagline}
                  </div>
                  <div className="text-[12.2px] text-zinc-500 mt-2 font-mono">
                    scryboo.com/outils/{t.slug}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-14 text-[13.3px] text-zinc-400">
          Astuce SEO : faites des backlinks vers{" "}
          <b className="text-zinc-200">scryboo.com/outils/…</b>, pas vers
          app.scryboo.com. Ajoutez{" "}
          <code>
            &lt;link rel="canonical" href="https://scryboo.com/outils/…" /&gt;
          </code>{" "}
          sur vos pages d’app si le contenu est dupliqué.
        </div>
      </main>
    </div>
  );
}
