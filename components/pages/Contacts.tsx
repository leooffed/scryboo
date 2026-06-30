// app/contact/page.tsx
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Contact — Scryboo | Équipe basée en Afrique, disponible 24h/24",
  description:
    "Contactez l'équipe Scryboo pour toute question sur nos outils gratuits, les offres Pro, la presse ou les partenariats. Réponse sous 24h. Présence en Afrique et en Europe.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Scryboo, votre écosystème d'outils gratuits",
    description:
      "Une question, une suggestion ou une demande de partenariat ? L'équipe Scryboo vous répond en moins de 24h, où que vous soyez en Afrique.",
    url: "https://scryboo.com/contact",
    siteName: "Scryboo",
    locale: "fr_FR",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-[#202124]">
      <main className="max-w-[700px] mx-auto px-5 sm:px-8 py-14">
        <div className="text-[12.5px] text-[#5f6368] uppercase tracking-wide">
          Contact
        </div>
        <h1 className="text-[38px] sm:text-[44px] font-[650] mt-2 tracking-[-0.022em]">
          Parlons.
        </h1>
        <p className="text-[16px] text-[#5f6368] mt-3 leading-relaxed">
          Une question sur un outil, une suggestion, un partenariat ou juste
          envie d’échanger ? Nous sommes à votre écoute, en français et en
          anglais. Réponse garantie sous 24 heures ouvrées.
        </p>

        {/* Adresses de contact */}
        <div className="mt-8 space-y-4">
          {[
            {
              label: "Support général",
              email: "hello@scryboo.com",
              description: "Assistance utilisateur, questions sur les outils, demandes d'information.",
            },
            {
              label: "Presse & Partenariats",
              email: "press@scryboo.com",
              description: "Relations médias, collaborations, demandes de citations et interviews.",
            },
            {
              label: "Sécurité",
              email: "security@scryboo.com",
              description: "Signaler une vulnérabilité, Bug Bounty (récompenses), audits de sécurité.",
            },
            {
              label: "Juridique",
              email: "legal@scryboo.com",
              description: "Questions contractuelles, conformité, réclamations officielles.",
            },
          ].map(({ label, email, description }) => (
            <div key={email} className="g-card p-5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <div className="text-[#202124] font-[560] text-[16px]">
                    {label}
                  </div>
                  <div className="text-[13.5px] text-[#5f6368] mt-0.5">
                    {description}
                  </div>
                </div>
                <a
                  href={`mailto:${email}`}
                  className="text-[#1a73e8] text-[14.5px] font-medium hover:underline whitespace-nowrap"
                >
                  {email}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Présence géographique */}
        <div className="mt-10 pt-6 border-t border-[#f1f3f4]">
          <h2 className="text-[18px] font-[600] text-[#202124] mb-2">
            Notre présence
          </h2>
          <p className="text-[14.5px] text-[#5f6368]">
            Siège social en Afrique, équipe distribuée sur le continent, liaison
            permanente avec l’Europe. Nous sommes joignables par e-mail, sur
            Twitter/X et LinkedIn.
          </p>
          <p className="text-[13.5px] text-[#5f6368] mt-2">
            🇸🇳 Afrique · 🇫🇷 Europe · 🌍 Temps de réponse moyen : 6 h
          </p>
        </div>
      </main>
    </div>
  );
}