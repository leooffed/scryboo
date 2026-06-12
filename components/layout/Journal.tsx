'use client'

import { ArrowRight } from "lucide-react";

const posts = [
  {
    tag: "Nouvel outil",
    title: "PDF → JPG : conversion instantanée, 100% locale",
    excerpt:
      "Aucun upload. Glissez vos PDF, récupérez des images nettes en 1 clic. Gratuit et illimité.",
    date: "12 févr. 2026",
    read: "3 min",
    tool: "Scryboo Tools",
    href: "https://app.scryboo.com/pdf-to-jpg",
    featured: true,
  },
  {
    tag: "Guide",
    title: "Compresser 200 images en 4s sans perte visible",
    excerpt:
      "Notre compresseur WASM tourne dans votre navigateur. Idéal pour boutiques e-commerce en Afrique.",
    date: "5 févr. 2026",
    read: "5 min",
    tool: "Image Compressor",
    href: "https://app.scryboo.com",
    featured: true,
  },
  {
    tag: "Lab IA",
    title: "Copywriting FR / Wolof localisé pour vos ads",
    excerpt:
      "Scryboo AI génère des textes qui sonnent vraiment local. Testez gratuitement 50 crédits/mois.",
    date: "29 janv. 2026",
    read: "4 min",
    tool: "Scryboo AI",
    href: "https://ai.scryboo.com",
    featured: true,
  },
];

const morePosts = [
  {
    title: "QR Generator : logos, couleurs, tracking UTM",
    date: "22 janv.",
    href: "#",
  },
  {
    title: "Fusionner / scinder des PDF, offline",
    date: "14 janv.",
    href: "#",
  },
  { title: "Formatter JSON, CSV → JSON en 1 clic", date: "8 janv.", href: "#" },
  {
    title: "Remove BG : détourage rapide côté navigateur",
    date: "2 janv.",
    href: "#",
  },
];

export default function Journal() {
  return (
    <section
      id="journal"
      className="relative bg-[#0a0a10] border-t border-white/[0.072]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-24 md:py-28">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10 md:mb-14">
          <div>
            <div className="text-[11.7px] uppercase tracking-widest text-zinc-500 font-mono">
              Journal · Blog produit
            </div>
            <h2 className="font-display text-[36px] md:text-[54px] tracking-[-0.024em] text-zinc-100 mt-2.5">
              Chaque outil, expliqué.
            </h2>
            <p className="text-[15.8px] text-zinc-400 mt-3 max-w-xl">
              Publié par l’équipe Scryboo. Guides, nouveautés, cas d’usage —
              pour tirer le maximum de l’écosystème, gratuitement.
            </p>
          </div>
          <a href="#" className="text-[13.7px] text-zinc-300 hover:text-white">
            Voir tous les articles →
          </a>
        </div>

        {/* Free model callout */}
        <div className="mb-10 md:mb-12 rounded-[22px] border border-[#e6ff9c]/18 bg-[linear-gradient(180deg,rgba(226,255,123,0.075),rgba(226,255,123,0.022))] px-5 md:px-7 py-5 flex flex-wrap items-center justify-between gap-4">
          <div className="text-[13.9px] md:text-[14.7px] text-[#e7f7c6]">
            <b className="font-[650]">
              95% des outils Scryboo sont 100% gratuits, sans compte.
            </b>
            <span className="text-[#bedc90]">
              {" "}
              Comme Google et Facebook : l’accès de base reste libre pour tous.
              On monétise uniquement les usages pro avancés — API, batch
              volumineux, IA.
            </span>
          </div>
          <div className="text-[11.7px] text-[#c7e28c] font-mono">
            FREE-FOREVER · NO ADS
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 md:gap-7">
          {/* Featured posts */}
          <div className="lg:col-span-8 grid md:grid-cols-2 gap-6 md:gap-6">
            {posts.map((p) => (
              <a
                key={p.title}
                href={p.href}
                className="group relative rounded-[24px] bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.020))] border border-white/[0.10] p-7 md:p-8 hover:border-white/[0.18] transition flex flex-col"
              >
                <div className="flex items-center gap-2 text-[11.4px] text-zinc-400">
                  <span className="px-2 py-1 rounded-full bg-white/[0.05] border border-white/[0.09] text-zinc-200">
                    {p.tag}
                  </span>
                  <span>·</span>
                  <span>{p.date}</span>
                  <span className="text-zinc-500">· {p.read}</span>
                </div>
                <h3 className="mt-4 text-[21.5px] font-[630] tracking-[-0.014em] text-zinc-100 leading-snug group-hover:text-white">
                  {p.title}
                </h3>
                <p className="mt-3 text-[14.6px] text-zinc-400 leading-relaxed">
                  {p.excerpt}
                </p>
                <div className="mt-auto pt-6 flex items-center justify-between text-[12.8px]">
                  <div className="flex items-center gap-2.5 text-zinc-400">
                    <div className="w-7 h-7 rounded-full bg-zinc-100 text-zinc-900 flex items-center justify-center font-display text-[13px]">
                      S
                    </div>
                    <span>Équipe Scryboo</span>
                  </div>
                  <span className="text-zinc-300 flex items-center gap-1 group-hover:gap-1.5 transition-all">
                    Lire <ArrowRight size={14} />
                  </span>
                </div>
              </a>
            ))}
            {/* Big featured spanning */}
            <a
              href="https://app.scryboo.com"
              className="md:col-span-2 group rounded-[24px] border border-white/[0.11] bg-white/[0.028] p-7 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
            >
              <div>
                <div className="text-[11.6px] text-zinc-400">
                  Catalogue · 42 outils
                </div>
                <div className="text-[20px] md:text-[22px] font-[630] text-zinc-100 mt-1">
                  Parcourir tous les outils Scryboo Tools, gratuitement
                </div>
                <div className="text-[13.6px] text-zinc-400 mt-1.5">
                  PDF, Images, Texte, Dev, Couleurs — tout en local.
                </div>
              </div>
              <span className="shrink-0 rounded-full bg-white text-zinc-900 px-4 py-2.5 text-[13.4px] font-[600]">
                Ouvrir app.scryboo.com →
              </span>
            </a>
          </div>

          {/* Right sidebar */}
          <div className="lg:col-span-4">
            <div className="rounded-[24px] bg-white/[0.025] border border-white/[0.10] p-7 md:p-8 h-full">
              <div className="text-[12.2px] font-[620] text-zinc-200">
                Derniers guides outils
              </div>
              <ul className="mt-5 divide-y divide-white/[0.07]">
                {morePosts.map((m) => (
                  <li key={m.title} className="py-3.5 first:pt-0">
                    <a href={m.href} className="block group">
                      <div className="text-[14.8px] text-zinc-200 group-hover:text-white leading-snug">
                        {m.title}
                      </div>
                      <div className="text-[12.3px] text-zinc-500 mt-1">
                        {m.date} · par Admin
                      </div>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-white/[0.08]">
                <div className="text-[13.2px] text-zinc-300 font-[550]">
                  Le Modèle Scryboo
                </div>
                <p className="text-[13.35px] text-zinc-400 mt-2 leading-relaxed">
                  Comme <b className="text-zinc-200 font-[560]">Google</b> et{" "}
                  <b className="text-zinc-200 font-[560]">Meta</b>, l’accès aux
                  outils de base est gratuit et le restera. Les équipes avancées
                  paient pour : API, volumes, AI Pro, et support prioritaire.
                </p>
                <div className="mt-3 flex flex-wrap gap-2 text-[11.4px] text-zinc-300">
                  <span className="px-2.5 py-1 rounded-full bg-white/[0.045] border border-white/[0.09]">
                    Gratuit pour toujours
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-white/[0.045] border border-white/[0.09]">
                    Sans pub
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-white/[0.045] border border-white/[0.09]">
                    Sans tracking
                  </span>
                </div>
              </div>

              <form onSubmit={(e) => e.preventDefault()} className="mt-6">
                <label className="text-[12.4px] text-zinc-300">
                  Recevoir les nouveaux outils
                </label>
                <div className="mt-2 flex gap-2">
                  <input
                    type="email"
                    placeholder="email@exemple.com"
                    className="flex-1 min-w-0 bg-[#12121a] border border-white/[0.13] rounded-full px-3.5 py-2.5 text-[13.2px] text-zinc-200 placeholder-zinc-500 outline-none focus:border-white/[0.27]"
                  />
                  <button className="rounded-full bg-white text-zinc-900 px-4 py-2.5 text-[13.1px] font-[600]">
                    OK
                  </button>
                </div>
                <p className="text-[11.5px] text-zinc-500 mt-2">
                  1 email / mois. Posté par l’admin.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
