'use client'

import { useSEO } from "@/lib/seo";

export default function ContactPage() {
  useSEO({
    title: "Contact — Scryboo",
    description:
      "Contacter l'équipe Scryboo. Support, partenariats, presse. Dakar / Paris.",
    canonical: "/contact",
  });
  return (
    <div className="min-h-screen bg-[#08080d] text-zinc-100">
      <main className="pt-32 pb-24 max-w-3xl mx-auto px-6 sm:px-10 lg:px-14">
        <div className="text-[11.7px] uppercase tracking-widest text-zinc-500 font-mono">
          Contact
        </div>
        <h1 className="font-display text-[44px] md:text-[54px] tracking-[-0.024em] mt-2">
          Parlons.
        </h1>
        <div className="mt-8 grid gap-6 text-[15.7px] text-zinc-300">
          <div className="rounded-[20px] bg-white/[0.032] border border-white/[0.10] p-6">
            <div className="text-zinc-200 font-[600]">Support général</div>
            <a
              href="mailto:hello@scryboo.com"
              className="text-zinc-100 underline"
            >
              hello@scryboo.com
            </a>
          </div>
          <div className="rounded-[20px] bg-white/[0.032] border border-white/[0.10] p-6">
            <div className="text-zinc-200 font-[600]">
              Presse / Partenariats
            </div>
            <a
              href="mailto:press@scryboo.com"
              className="text-zinc-100 underline"
            >
              press@scryboo.com
            </a>
          </div>
          <div className="rounded-[20px] bg-white/[0.032] border border-white/[0.10] p-6">
            <div className="text-zinc-200 font-[600]">Sécurité</div>
            <a
              href="mailto:security@scryboo.com"
              className="text-zinc-100 underline"
            >
              security@scryboo.com
            </a>
          </div>
        </div>
        <p className="text-zinc-400 mt-8">
          Africa, SN · World, FR — Réponse sous 24h ouvrées.
        </p>
      </main>
    </div>
  );
}
