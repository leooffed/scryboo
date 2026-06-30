// components/EcosystemGrid.tsx
import { tools } from "@/data/tools";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function EcosystemGrid() {
  return (
    <section
      id="produits"
      className="bg-white py-16 sm:py-20 border-t border-[#f1f3f4]"
    >
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
          <div>
            <h2 className="text-[26px] sm:text-[32px] font-[650] tracking-[-0.018em] text-[#202124]">
              Tous les outils Scryboo
            </h2>
            <p className="text-[15.2px] text-[#5f6368] mt-2 max-w-xl">
              Pages SEO dédiées pour chaque outil. Cliquez → page explicative →
              bouton “Lancer l’outil” → app.scryboo.com
            </p>
          </div>
          <Link
            href="/outils"
            className="text-[14px] text-[#1a73e8] hover:underline"
          >
            Voir le catalogue →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tools.map((t) => (
            <Link
              key={t.slug}
              href={`/outils/${t.slug}`}
              className="g-card p-5 group"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-[13px] text-[#5f6368]">
                    {t.category}
                  </div>
                  <div className="text-[17.5px] font-[620] text-[#202124] mt-1">
                    {t.name}
                  </div>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-[#5f6368] group-hover:text-[#1a73e8] mt-1"
                />
              </div>
              <p className="text-[13.8px] text-[#5f6368] mt-3 leading-snug">
                {t.description}
              </p>
              <div className="mt-4 text-[12.5px] text-[#137333] font-[500]">
                Gratuit • scryboo.com/outils/{t.slug}
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center text-[13.8px] text-[#5f6368]">
          Stratégie Pont SEO : backlinks vers{" "}
          <b className="text-[#202124]">scryboo.com/outils/…</b> — pas vers
          app.scryboo.com
        </div>
      </div>
    </section>
  );
}