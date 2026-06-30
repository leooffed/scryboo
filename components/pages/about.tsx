import Link from "next/link";
import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "À propos de Scryboo — La startup tech africaine qui connecte les talents",
  description:
    "Scryboo est une startup panafricaine qui construit un écosystème d'applications utiles, gratuites à 95 %, respectueuses de la vie privée et pensées pour l'Afrique. Découvrez notre mission, nos produits et notre vision.",
  alternates: {
    canonical: "https://scryboo.com/a-propos",
  },
  // Optionnel : ajouter openGraph pour les partages
  openGraph: {
    title: "À propos de Scryboo — L'écosystème tech made in Africa",
    description:
      "Scryboo, startup panafricaine, conçoit des outils web gratuits, confidentiels et local-first pour les indépendants et les PME du continent.",
    url: "https://scryboo.com/a-propos",
    siteName: "Scryboo",
    locale: "fr_FR",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-[#202124]">
      <main className="max-w-[760px] mx-auto px-5 sm:px-8 py-14">
        <div className="text-[12.5px] text-[#5f6368] uppercase tracking-wide">
          À propos
        </div>
        <h1 className="text-[36px] sm:text-[44px] font-[650] tracking-[-0.022em] mt-2">
          Scryboo, l’écosystème tech qui rend l’Afrique plus productive
        </h1>

        <div className="text-[16.5px] text-[#3c4043] leading-relaxed space-y-5 mt-6">
          {/* Introduction */}
          <section>
            <h2 className="text-[20px] font-semibold text-[#202124] mb-2">
              Notre mission
            </h2>
            <p>
              Scryboo est née d’une conviction simple : chaque entrepreneur,
              créatif ou étudiant africain mérite des outils numériques puissants,
              sans barrières techniques ni financières. Nous concevons un
              écosystème d’applications interconnectées qui couvre les besoins
              essentiels du quotidien professionnel, de la création de PDF à la
              gestion d’entreprise, en passant par l’intelligence artificielle.
            </p>
            <p>
              Notre siège est basé en Afrique, avec une équipe distribuée sur
              tout le continent. Nous croyons au potentiel du local-first :
              nos services sont hébergés en périphérie (Edge) à proximité des
              utilisateurs africains, pour une rapidité maximale même en 3G.
            </p>
          </section>

          {/* Écosystème */}
          <section>
            <h2 className="text-[20px] font-semibold text-[#202124] mb-2">
              Un hub, six applications
            </h2>
            <p>
              Scryboo, c’est six produits complémentaires accessibles avec un
              seul compte (SSO). Chacun résout un problème concret :
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Tools</strong> — 42 outils web gratuits (PDF, image,
                QR code, texte…) pour les tâches rapides.
              </li>
              <li>
                <strong>Flow</strong> — ERP et comptabilité adaptés aux normes
                africaines (OHADA, SYSCOA). Factures, stocks, CRM.
              </li>
              <li>
                <strong>Now</strong> — Constructeur de sites web et boutiques
                en ligne, avec templates prêts à l’emploi.
              </li>
              <li>
                <strong>AI</strong> — Laboratoire d’intelligence artificielle
                pour générer du texte, des images et automatiser des workflows.
              </li>
              <li>
                <strong>Book</strong> — Système de réservation en ligne pour
                les prestataires de services (coiffeurs, consultants, etc.).
              </li>
              <li>
                <strong>Pulse</strong> — Suite sociale et analytics pour
                suivre sa marque et interagir avec sa communauté.
              </li>
            </ul>
            <p className="mt-3">
              Toutes ces applications sont hébergées sur des sous-domaines
              distincts (app.scryboo.com, flow.scryboo.com…) mais partagent un
              socle technique commun et une identité visuelle cohérente.
            </p>
          </section>

          {/* Modèle économique */}
          <section>
            <h2 className="text-[20px] font-semibold text-[#202124] mb-2">
              Un modèle économique transparent
            </h2>
            <p>
              Nous avons choisi la transparence : <strong>95 % de nos outils
                sont gratuits, sans publicité intrusive et sans collecte de
                données personnelles.</strong> Comme Google et Facebook, l’accès
              de base reste libre pour tous, parce que nous pensons que la
              productivité ne doit pas être un luxe.
            </p>
            <p>
              Notre rentabilité repose sur les offres professionnelles (API,
              traitement par lots, fonctionnalités avancées) et sur
              l’abonnement Pro pour les utilisateurs ayant des besoins de
              volume. Ainsi, les indépendants et les petites entreprises
              bénéficient gratuitement d’outils de qualité, tandis que les
              grands comptes contribuent au développement.
            </p>
          </section>

          {/* Technologie et confidentialité */}
          <section>
            <h2 className="text-[20px] font-semibold text-[#202124] mb-2">
              Une technologie respectueuse de la vie privée
            </h2>
            <p>
              Tous nos outils fonctionnent selon le principe du{" "}
              <strong>local-first</strong> : les fichiers que vous traitez
              (PDF, images, etc.) ne quittent jamais votre appareil. Les calculs
              sont effectués directement dans le navigateur grâce au WebAssembly
              (WASM), garantissant confidentialité et rapidité. Aucun serveur
              n’a accès à vos documents.
            </p>
            <p>
              Nous sommes conformes au RGPD et nous engageons à ne jamais
              revendre vos données. Notre infrastructure est déployée sur des
              serveurs Edge en Afrique, en Europe et en Amérique du Nord pour
              une latence minimale.
            </p>
          </section>

          {/* Équipe et recrutement */}
          <section>
            <h2 className="text-[20px] font-semibold text-[#202124] mb-2">
              Une équipe africaine, des valeurs fortes
            </h2>
            <p>
              Scryboo est portée par des ingénieurs et des designers passionnés,
              répartis entre plusieurs pays d’Afrique. Nous travaillons en
              remote-first avec un rythme de développement continu. Nos valeurs
              : l’excellence technique, la simplicité d’usage, l’inclusion
              numérique et la transparence.
            </p>
            <p>
              <Link
                href="/carrieres"
                className="text-[#1a73e8] underline hover:no-underline"
              >
                Consultez nos offres d’emploi →
              </Link>
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-[20px] font-semibold text-[#202124] mb-2">
              Nous contacter
            </h2>
            <p>
              Pour les partenariats, les demandes presse ou simplement pour
              échanger, écrivez-nous à{" "}
              <a
                href="mailto:hello@scryboo.com"
                className="text-[#1a73e8] underline hover:no-underline"
              >
                hello@scryboo.com
              </a>
              . Nous sommes également présents sur les réseaux sociaux
              (Twitter/X, LinkedIn).
            </p>
          </section>

          {/* Référence rapide aux produits (SEO) */}
          <section>
            <h2 className="text-[20px] font-semibold text-[#202124] mb-2">
              Découvrez nos produits
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { name: "Tools", url: "https://app.scryboo.com" },
                { name: "Flow", url: "https://flow.scryboo.com" },
                { name: "Now", url: "https://now.scryboo.com" },
                { name: "AI", url: "https://ai.scryboo.com" },
                { name: "Book", url: "https://book.scryboo.com" },
                { name: "Pulse", url: "https://pulse.scryboo.com" },
              ].map((product) => (
                <a
                  key={product.name}
                  href={product.url}
                  className="px-4 py-2 rounded-lg border border-gray-200 text-[14px] text-[#1a73e8] hover:bg-gray-50"
                >
                  {product.name} →
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}