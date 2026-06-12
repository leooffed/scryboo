'use client'

import Link from "next/link";
import { useSEO } from "@/lib/seo";

const jobs = [
  {
    title: "Full-Stack Engineer (Rust / TS)",
    location: "Remote · Dakar/Paris",
    type: "CDI",
    desc: "Edge workers, WASM, design system. Produit Tools + AI.",
  },
  {
    title: "Product Designer — Design System",
    location: "Remote",
    type: "CDI / Freelance",
    desc: "Figma, Framer Motion, accessibilité. Écosystème Scryboo.",
  },
];

export default function CareersPage() {
  useSEO({
    title: "Carrières — Rejoindre Scryboo",
    description:
      "Scryboo recrute. Full-stack, design. Remote, Africa / World. Outils gratuits pour des millions d'utilisateurs.",
    canonical: "/carrieres",
  });

  return (
    <div className="min-h-screen bg-[#08080d] text-zinc-100">
      <main className="pt-32 pb-24 max-w-5xl mx-auto px-6 sm:px-10 lg:px-14">
        <div className="text-[11.7px] uppercase tracking-widest text-zinc-500 font-mono">
          Carrières
        </div>
        <h1 className="font-display text-[44px] md:text-[56px] tracking-[-0.025em] mt-2">
          Construire les outils de demain.
        </h1>
        <p className="text-zinc-400 mt-4 text-[16.8px] max-w-2xl">
          Petite équipe, gros impact. 14k+ utilisateurs. 95% gratuit.
          Remote-friendly, Africa / world.
        </p>

        <div className="grid md:grid-cols-2 gap-5 mt-12">
          {jobs.map((j) => (
            <div
              key={j.title}
              className="rounded-[22px] bg-white/[0.032] border border-white/[0.11] p-7"
            >
              <div className="text-[12.3px] text-zinc-400">
                {j.location} · {j.type}
              </div>
              <div className="text-[20px] font-[620] mt-2 text-zinc-100">
                {j.title}
              </div>
              <p className="text-zinc-400 text-[14.4px] mt-2">{j.desc}</p>
              <Link
                href="mailto:jobs@scryboo.com"
                className="inline-block mt-4 text-[13.6px] text-zinc-200 hover:text-white"
              >
                Postuler → jobs@scryboo.com
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-zinc-400 text-[14.8px]">
          Candidature spontanée bienvenue :{" "}
          <Link className="text-zinc-200 underline" href="mailto:jobs@scryboo.com">
            jobs@scryboo.com
          </Link>
        </div>
      </main>
    </div>
  );
}
