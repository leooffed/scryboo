// components/Journal.tsx
import Link from "next/link";

const posts = [
  {
    tag: "Guide",
    title: "Comment alléger son CV PDF pour postuler sur WhatsApp",
    excerpt: "CV 8 Mo → 500 Ko, sans perte. 100% gratuit.",
    href: "/journal/compresser-pdf-cv-whatsapp",
    toolPage: "/outils/compresser-pdf",
  },
  {
    tag: "E-commerce",
    title: "Optimiser 200 photos produit en 4 secondes",
    excerpt: "Compresseur WASM pour boutiques Jumia / WhatsApp Business.",
    href: "/journal/optimiser-photos-boutique-en-ligne",
    toolPage: "/outils/compresser-image",
  },
  {
    tag: "IA",
    title: "Générateur de Bio IA localisé FR / Wolof",
    excerpt: "3 variantes en 2s. 50 crédits gratuits / mois.",
    href: "/journal/bio-instagram-ia-francophone",
    toolPage: "/outils/generateur-bio-ia",
  },
];

export default function Journal() {
  return (
    <section
      id="journal"
      className="bg-white py-16 sm:py-20 border-t border-[#f1f3f4]"
    >
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-7">
          <div>
            <div className="text-[12.8px] text-[#5f6368] uppercase tracking-wide">
              Journal · Blog produit
            </div>
            <h2 className="text-[27px] sm:text-[30px] font-[650] text-[#202124] mt-1 tracking-[-0.017em]">
              Chaque outil, expliqué.
            </h2>
          </div>
          <Link
            href="/journal"
            className="text-[#1a73e8] text-[14px]"
          >
            Tous les articles →
          </Link>
        </div>

        <div className="bg-[#e8f0fe] border border-[#d2e3fc] rounded-[16px] px-5 py-4 mb-8 text-[14.5px] text-[#174ea6]">
          <b>95% des outils Scryboo sont 100% gratuits, sans compte.</b> Comme
          Google et Facebook — l’accès de base reste libre pour tous.
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {posts.map((p) => (
            <div key={p.title} className="g-card p-5 flex flex-col">
              <div className="text-[11.8px] px-2 py-1 rounded-full bg-[#f1f3f4] text-[#5f6368] w-fit">
                {p.tag}
              </div>
              <Link
                href={p.href}
                className="text-[17px] font-[600] text-[#1a73e8] mt-3 leading-snug hover:underline"
              >
                {p.title}
              </Link>
              <p className="text-[13.8px] text-[#5f6368] mt-2 flex-1">
                {p.excerpt}
              </p>
              <div className="text-[12.6px] text-[#5f6368] mt-4">
                Outil lié :{" "}
                <Link
                  href={p.toolPage}
                  className="text-[#1a73e8] hover:underline"
                >
                  voir la page SEO
                </Link>
              </div>
              <div className="text-[12.2px] text-[#5f6368] mt-3">
                par Admin Scryboo
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}