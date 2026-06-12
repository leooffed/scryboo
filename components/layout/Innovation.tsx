'use client'

import { Zap, Globe2, LockKeyhole } from "lucide-react";

const items = [
  {
    n: "01",
    Icon: Zap,
    title: "Vitesse extrême",
    desc: "Architecture Edge-first. Outils < 48kb, TTFB < 40ms, déploiement mondial en 300ms. Le ressenti est instantané.",
    points: ["Edge NA • EU • AF", "Cold-start 0ms", "P95 < 92ms"],
  },
  {
    n: "02",
    Icon: Globe2,
    title: "Adaptation locale",
    desc: "Conçu pour l’Afrique francophone. Paiements mobile money, formats locaux, langues FR/EN/WO, devises XOF/XAF.",
    points: ["Orange Money / Wave", "XOF natif", "Support Dakar UTC+0"],
  },
  {
    n: "03",
    Icon: LockKeyhole,
    title: "Privacy by design",
    desc: "Traitement local dans le navigateur. Zéro tracking. Chiffrement E2E sur Vault. Vos données restent chez vous.",
    points: ["Local-first", "0 cookies tiers", "E2E & audit open"],
  },
];

export default function Innovation() {
  return (
    <section
      id="infrastructure"
      className="relative bg-[#0b0b11] border-t border-white/[0.070]"
    >
      <div className="sb-noise absolute inset-0 opacity-[.45] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-24 md:py-28">
        <div className="max-w-2xl">
          <div className="text-[11.7px] uppercase tracking-widest text-zinc-500 font-mono">
            Innovation & Infrastructure
          </div>
          <h2 className="font-display text-[36px] md:text-[52px] leading-[1.05] tracking-[-0.023em] text-zinc-100 mt-3">
            L’ADN tech de Scryboo.
          </h2>
          <p className="text-zinc-400 text-[16px] md:text-[17px] mt-4">
            Rapide, local, confidentiel. Trois principes non négociables qui
            guident chaque produit.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-7 md:gap-8 mt-14">
          {items.map((it) => (
            <div
              key={it.n}
              className="relative rounded-[26px] bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.020))] border border-white/[0.10] p-8 md:p-9"
            >
              <div className="flex items-center justify-between text-zinc-500">
                <div className="size-11 rounded-[13px] bg-white/[0.055] border border-white/[0.10] flex items-center justify-center text-zinc-200">
                  <it.Icon size={19} />
                </div>
                <span className="font-mono text-[12.5px]">{it.n}</span>
              </div>
              <h3 className="text-[22px] font-[630] tracking-[-0.014em] text-zinc-100 mt-6">
                {it.title}
              </h3>
              <p className="text-[14.9px] leading-relaxed text-zinc-400 mt-3">
                {it.desc}
              </p>
              <ul className="mt-6 space-y-2 text-[13.1px] text-zinc-400">
                {it.points.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-zinc-500" /> {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* infra strip */}
        <div className="mt-12 rounded-[22px] border border-white/[0.09] bg-white/[0.025] px-5 md:px-8 py-5 flex flex-wrap items-center justify-between gap-4 text-[12.9px] text-zinc-400">
          <div className="flex flex-wrap items-center gap-x-7 gap-y-2">
            <span className="text-zinc-300 font-[560]">Stack:</span>
            <span>Rust / WASM</span>
            <span>Edge Workers</span>
            <span>PostgreSQL</span>
            <span>OpenTelemetry</span>
            <span className="text-zinc-500">—</span>
            <span>99.98% uptime (90j)</span>
          </div>
          <a href="#" className="text-zinc-200 hover:text-white">
            Voir le statut →
          </a>
        </div>
      </div>
    </section>
  );
}
