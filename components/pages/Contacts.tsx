import type { Metadata } from "next";

// 1. Métadonnées SEO statiques gérées par le serveur
export const metadata: Metadata = {
  title: "Contact — Scryboo",
  description:
    "Contacter l'équipe Scryboo. Support technique, opportunités de partenariats et relations presse. À votre écoute depuis Dakar et Paris.",
  alternates: {
    canonical: "https://scryboo.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#08080d] text-zinc-100">
      <main className="pt-32 pb-24 max-w-3xl mx-auto px-6 sm:px-10 lg:px-14">
        <div className="text-[11.7px] uppercase tracking-widest text-zinc-500 font-mono">
          Contact
        </div>

        <h1 className="font-display text-[44px] md:text-[54px] tracking-[-0.024em] mt-2 font-bold text-white">
          Parlons.
        </h1>

        {/* Grille des contacts */}
        <div className="mt-8 grid gap-4 text-[15.7px]">
          {/* Support */}
          <div className="group rounded-[20px] bg-white/[0.02] border border-white/[0.08] p-6 hover:border-white/[0.15] hover:bg-white/[0.04] transition-all duration-300">
            <div className="text-zinc-400 text-[14px] group-hover:text-zinc-300 transition-colors">
              Support général
            </div>
            <a
              href="mailto:hello@scryboo.com"
              className="text-white font-medium block mt-1 hover:text-blue-400 transition-colors underline underline-offset-4 decoration-white/[0.2] hover:decoration-blue-400"
            >
              hello@scryboo.com
            </a>
          </div>

          {/* Presse / Partenariats */}
          <div className="group rounded-[20px] bg-white/[0.02] border border-white/[0.08] p-6 hover:border-white/[0.15] hover:bg-white/[0.04] transition-all duration-300">
            <div className="text-zinc-400 text-[14px] group-hover:text-zinc-300 transition-colors">
              Presse / Partenariats
            </div>
            <a
              href="mailto:press@scryboo.com"
              className="text-white font-medium block mt-1 hover:text-blue-400 transition-colors underline underline-offset-4 decoration-white/[0.2] hover:decoration-blue-400"
            >
              press@scryboo.com
            </a>
          </div>

          {/* Sécurité */}
          <div className="group rounded-[20px] bg-white/[0.02] border border-white/[0.08] p-6 hover:border-white/[0.15] hover:bg-white/[0.04] transition-all duration-300">
            <div className="text-zinc-400 text-[14px] group-hover:text-zinc-300 transition-colors">
              Sécurité
            </div>
            <a
              href="mailto:security@scryboo.com"
              className="text-white font-medium block mt-1 hover:text-blue-400 transition-colors underline underline-offset-4 decoration-white/[0.2] hover:decoration-blue-400"
            >
              security@scryboo.com
            </a>
          </div>
        </div>

        <p className="text-zinc-500 mt-10 text-[14px] border-t border-white/[0.06] pt-6">
          Africa, SN · World, FR — Réponse sous 24h ouvrées.
        </p>
      </main>
    </div>
  );
}
