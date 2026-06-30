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
    <div className="min-h-screen bg-white text-[#202124]">
      <main className="max-w-[900px] mx-auto px-5 sm:px-8 py-14">
        <div className="text-[12.5px] text-[#5f6368] uppercase tracking-wide">
          Carrières
        </div>
        <h1 className="text-[36px] sm:text-[44px] font-[650] mt-2 tracking-[-0.022em]">
          Construire les outils de demain.
        </h1>
        <p className="text-[#5f6368] mt-3">
          Remote · Africa / Paris · 14k+ utilisateurs
        </p>

        <div className="grid md:grid-cols-2 gap-4 mt-8">
          {[
            ["Full-Stack Engineer (Rust / TS)", "Remote · CDI", "Edge, WASM"],
            ["Product Designer", "Remote", "Design System"],
          ].map(([t, l, d]) => (
            <div key={t} className="g-card p-5">
              <div className="text-[12.6px] text-[#5f6368]">{l}</div>
              <div className="text-[17.5px] font-[620] mt-1">{t}</div>
              <div className="text-[13.8px] text-[#5f6368] mt-1">{d}</div>
              <a
                href="mailto:jobs@scryboo.com"
                className="text-[#1a73e8] text-[13.5px] mt-3 inline-block"
              >
                Postuler →
              </a>
            </div>
          ))}
        </div>

        <p className="text-[#5f6368] mt-8 text-[14.5px]">
          Spontané : jobs@scryboo.com
        </p>
      </main>
    </div>
  );
}