'use client'
import { useSEO } from "@/lib/seo";
import Link from "next/link";
import { Zap, Globe2, LockKeyhole, Heart } from "lucide-react";

export default function VisionPage() {
  useSEO({
    title:
      "Vision — Scryboo, l'écosystème tech pour l'Afrique francophone et le monde",
    description:
      "La vision Scryboo : des applications ultra-rapides, locales, privacy-by-design. 95% gratuit, comme Google. Construit à Dakar & Paris.",
    canonical: "/vision",
  });

  return (
    <div className="min-h-screen bg-[#08080d] text-zinc-100">
      <main className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-14">
          <div className="max-w-3xl">
            <div className="text-[11.7px] uppercase tracking-widest text-zinc-500 font-mono">
              Notre Vision
            </div>
            <h1 className="font-display text-[44px] md:text-[62px] tracking-[-0.027em] leading-[0.98] mt-3">
              L'écosystème technologique qui propulse vos idées.
            </h1>
            <p className="text-[18px] text-zinc-300 mt-6 leading-relaxed">
              Scryboo est né à Dakar, grandi à Paris. On construit les outils
              qu'on aurait aimé avoir : rapides même en 3G, respectueux de vos
              données, pensés pour les contextes locaux — Orange Money, Wave,
              XOF, FR/WO.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-7 mt-16">
            {[
              {
                Icon: Zap,
                title: "Vitesse extrême",
                text: "Edge-first. <48kb / outil. P95 < 92ms. Instantané, même offline.",
              },
              {
                Icon: Globe2,
                title: "Adaptation locale",
                text: "Afrique francophone first. Paiements mobile money, devises XOF/XAF, langues FR/EN/WO.",
              },
              {
                Icon: LockKeyhole,
                title: "Privacy by design",
                text: "Traitement local WASM. 0 tracking. 0 pub. Vos fichiers ne quittent jamais votre appareil.",
              },
            ].map((b) => (
              <div
                key={b.title}
                className="rounded-[24px] bg-white/[0.032] border border-white/[0.10] p-7"
              >
                <b.Icon size={20} className="text-zinc-200" />
                <div className="text-[19.5px] font-[620] mt-4">{b.title}</div>
                <p className="text-zinc-400 text-[14.7px] mt-2">{b.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-[28px] border border-[#e6ff9c]/18 bg-[linear-gradient(180deg,rgba(226,255,123,0.065),rgba(226,255,123,0.018))] p-8 md:p-10">
            <div className="flex items-center gap-2 text-[#d8f999] text-[13.5px] font-[600]">
              <Heart size={16} /> Notre promesse
            </div>
            <h2 className="font-display text-[30px] md:text-[38px] text-zinc-100 mt-3 tracking-[-0.018em]">
              95% gratuit, pour toujours.
            </h2>
            <p className="text-[#cde8a6] mt-3 max-w-2xl text-[16.2px] leading-relaxed">
              Comme Google et Facebook : l’accès aux outils de base est gratuit,
              sans pub, sans compte — et le restera. On monétise uniquement les
              usages pro : API, volumes, AI illimitée, support prioritaire.
              C’est ce qui nous permet de garder l’écosystème ouvert à tous, de
              Africa.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8 text-[15.2px] text-zinc-300 leading-relaxed">
            <div>
              <h3 className="text-zinc-100 text-[21px] font-[620] mb-3">
                Pourquoi un écosystème ?
              </h3>
              <p>
                Un seul compte SSO pour Tools, AI, Book, Pulse, Flow, Vault. Un
                design system cohérent. Vos données restent portables. On ne
                vous enferme pas — au contraire, export libre, API ouverte.
              </p>
            </div>
            <div>
              <h3 className="text-zinc-100 text-[21px] font-[620] mb-3">
                Local-first, Global-ready
              </h3>
              <p>
                On commence par bien servir l’Afrique francophone — puis le
                reste du monde. Edge NA • EU • AF. 99.98% uptime. OpenTelemetry.
                Rust / WASM.
              </p>
            </div>
          </div>

          <div className="mt-14 flex gap-4 flex-wrap">
            <Link
              href="/outils"
              className="rounded-full bg-white text-zinc-900 px-5 py-3 text-[14.3px] font-[620]"
            >
              Explorer les outils gratuits →
            </Link>
            <Link
              href="/a-propos"
              className="text-zinc-300 hover:text-white px-2 py-3 text-[14.2px]"
            >
              À propos de Scryboo →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
