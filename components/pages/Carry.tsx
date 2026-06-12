import type { Metadata } from "next";

// 1. Métadonnées SEO statiques gérées par le serveur
export const metadata: Metadata = {
  title: "Carrières — Rejoindre l'équipe Scryboo",
  description:
    "Découvrez nos opportunités en ingénierie et design chez Scryboo. Rejoignez une équipe agile, adoptez une culture remote globale et bâtissez des outils utilisés par des milliers d'utilisateurs.",
  alternates: {
    canonical: "https://scryboo.com/carrieres",
  },
};

const jobs = [
  {
    title: "Full-Stack Engineer (Rust / TS)",
    location: "Remote · Dakar / Paris",
    type: "CDI",
    desc: "Conception de workers à la périphérie (Edge), compilation WASM et optimisation de notre architecture globale. Vous ferez évoluer nos produits Tools et IA.",
  },
  {
    title: "Product Designer — Design System",
    location: "Remote",
    type: "CDI / Freelance",
    desc: "Propulsion de notre identité visuelle sur Figma, intégrations interactives fluides et attention stricte à l'accessibilité globale de l'écosystème.",
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-[#08080d] text-zinc-100 antialiased">
      <main className="pt-32 pb-24 max-w-5xl mx-auto px-6 sm:px-10 lg:px-14">
        <div className="text-[11.7px] uppercase tracking-widest text-zinc-500 font-mono">
          Carrières
        </div>

        <h1 className="font-display text-[44px] md:text-[56px] tracking-[-0.025em] mt-2 font-bold text-white leading-tight">
          Construire les outils de demain.
        </h1>

        <p className="text-zinc-400 mt-4 text-[16.8px] max-w-2xl leading-relaxed">
          Rejoignez une équipe agile animée par une ambition claire : éliminer
          les frictions numériques quotidiennes. Une culture fortement orientée
          produit, un haut niveau d'exigence technique et le remote au cœur de
          notre ADN.
        </p>

        {/* Grille des Offres d'Emploi */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {jobs.map((j) => (
            <div
              key={j.title}
              className="group rounded-[22px] bg-white/[0.02] border border-white/[0.08] p-7 hover:border-white/[0.18] hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between min-h-[220px]"
            >
              <div>
                <div className="text-[12.3px] text-zinc-400 font-medium flex items-center gap-2">
                  <span>{j.location}</span>
                  <span className="text-zinc-600">•</span>
                  <span className="text-zinc-500 font-mono text-[11.5px]">
                    {j.type}
                  </span>
                </div>

                <h2 className="text-[21px] font-semibold mt-3 text-zinc-100 group-hover:text-white transition-colors tracking-tight">
                  {j.title}
                </h2>

                <p className="text-zinc-400 text-[14.5px] mt-2 leading-relaxed">
                  {j.desc}
                </p>
              </div>

              {/* Action de candidature par e-mail avec Sujet pré-rempli pour l'UX */}
              <div className="mt-6 pt-4 border-t border-white/[0.05]">
                <a
                  href={`mailto:jobs@scryboo.com?subject=Candidature : ${encodeURIComponent(j.title)}`}
                  className="inline-flex items-center gap-1 text-[13.6px] text-zinc-300 font-medium group-hover:text-white transition-colors"
                >
                  Postuler à l'offre
                  <span className="transform group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bloc Candidature Spontanée */}
        <div className="mt-16 border-t border-white/[0.06] pt-8 text-zinc-400 text-[14.8px] leading-relaxed max-w-2xl">
          <span className="font-semibold text-zinc-200 block mb-1 text-[16px] tracking-tight">
            Aucun rôle ne correspond à votre profil ?
          </span>
          Les candidatures spontanées et les profils atypiques sont toujours
          analysés avec une grande attention par l'équipe fondatrice.
          Écrivez-nous directement sur{" "}
          <a
            className="text-white underline underline-offset-4 decoration-white/[0.2] hover:text-blue-400 hover:decoration-blue-400 transition-all font-medium"
            href="mailto:jobs@scryboo.com?subject=Candidature Spontanée — Scryboo"
          >
            jobs@scryboo.com
          </a>
        </div>
      </main>
    </div>
  );
}
