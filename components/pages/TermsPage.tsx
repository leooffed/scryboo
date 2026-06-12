import type { Metadata } from "next";

// 1. Configuration des métadonnées de conformité sur le serveur
export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation — Scryboo",
  description:
    "Consultez les Conditions Générales d'Utilisation (CGU) de la plateforme Scryboo : cadre de service gratuit, politique d'usage loyal (Fair Use) et limites de responsabilité.",
  alternates: {
    canonical: "https://scryboo.com/conditions",
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#08080d] text-zinc-100 antialiased">
      <main className="pt-32 pb-24 max-w-3xl mx-auto px-6 sm:px-10 lg:px-14">
        <div className="text-[11.7px] uppercase tracking-widest text-zinc-500 font-mono">
          Légal & Cadre de Service
        </div>

        <h1 className="font-display text-[42px] md:text-[52px] tracking-[-0.024em] mt-2 font-bold text-white">
          Conditions Générales d'Utilisation
        </h1>

        {/* Corps des Conditions Générales (Style Contractuel Premium) */}
        <div className="mt-10 text-zinc-300 text-[15.5px] leading-relaxed space-y-8">
          {/* Article 1 : Description du Service */}
          <section className="space-y-3">
            <h2 className="text-white font-display text-[20px] font-semibold tracking-tight">
              1. Nature et objet des services en ligne
            </h2>
            <p className="text-zinc-400">
              Scryboo met à la disposition des utilisateurs une suite
              d'applications et d'utilitaires web exécutés localement au sein de
              leur navigateur web via des technologies d'isolation sécurisées
              (WebAssembly). Fidèle à un modèle freemium inspiré des standards
              ouverts du web mondial, l'accès fondamental à la très grande
              majorité de ces outils est permanent, gratuit et libre de toute
              pollution publicitaire.
            </p>
          </section>

          {/* Article 2 : Fair Use */}
          <section className="space-y-3">
            <h2 className="text-white font-display text-[20px] font-semibold tracking-tight">
              2. Politique d'usage loyal (Fair-Use Policy)
            </h2>
            <p className="text-zinc-400">
              L'infrastructure grand public gratuite est exclusivement
              dimensionnée pour un usage humain, raisonnable et de bonne foi.
              Tout comportement assimilé à un abus automatisé massif, à des
              requêtes scriptées répétitives, à du scraping de ressources ou à
              des tentatives de déstabilisation de nos serveurs de distribution
              entraînera une révocation immédiate et sans préavis de l'accès à
              la plateforme. Pour les besoins industriels ou automatisés,
              l'utilisateur est tenu de souscrire à notre offre Professionnelle
              dédiée (accès API et volumes de traitement étendus).
            </p>
          </section>

          {/* Article 3 : Garanties et Responsabilités */}
          <section className="space-y-3">
            <h2 className="text-white font-display text-[20px] font-semibold tracking-tight">
              3. Limitation de responsabilité et intégrité des données
            </h2>
            <p className="text-zinc-400">
              Puisque les traitements de fichiers s'effectuent de manière
              décentralisée sur le terminal de l'utilisateur (Edge computing),
              Scryboo n'exerce aucun contrôle et ne conserve aucune copie des
              documents traités. Le service est fourni "en l'état", sans aucune
              garantie de performance ininterrompue. Scryboo SAS ne saurait être
              tenu responsable des pertes de données, altérations de fichiers ou
              manques à gagner découlant de l'utilisation de nos utilitaires. Il
              incombe à l'utilisateur de maintenir systématiquement des copies
              de sauvegarde indépendantes de ses documents originaux.
            </p>
          </section>

          {/* Article 4 : Authentification */}
          <section className="space-y-3">
            <h2 className="text-white font-display text-[20px] font-semibold tracking-tight">
              4. Authentification et comptes d'accès unifiés
            </h2>
            <p className="text-zinc-400">
              L'accès à la majorité de notre catalogue applicatif ne requiert
              aucune inscription préalable. La création d'un compte utilisateur
              sous notre protocole d'authentification unique (SSO) est
              entièrement facultative. Elle devient requise uniquement pour
              débloquer les services avancés, sauvegarder des préférences
              multi-terminaux ou souscrire aux abonnements commerciaux payants.
            </p>
          </section>

          {/* Article 5 : Droit applicable */}
          <section className="space-y-3">
            <h2 className="text-white font-display text-[20px] font-semibold tracking-tight">
              5. Droit applicable et résolution des litiges
            </h2>
            <p className="text-zinc-400">
              Les présentes conditions d'utilisation sont régies conjointement
              par le droit commercial international (notamment le cadre de
              l'OHADA pour la conformité de nos opérations régionales) et le
              droit français. En cas de contestation ou pour toute demande
              d'arbitrage liée à l'interprétation des présents articles, notre
              cellule juridique est joignable à l'adresse électronique dédiée :{" "}
              <a
                href="mailto:legal@scryboo.com?subject=Demande de précision réglementaire — CGU Scryboo"
                className="text-white underline underline-offset-4 decoration-white/[0.2] hover:text-blue-400 hover:decoration-blue-400 transition-colors font-medium"
              >
                legal@scryboo.com
              </a>
              .
            </p>
          </section>

          {/* Footer de versioning légal */}
          <div className="pt-6 border-t border-white/[0.06] text-zinc-500 text-[13.5px] font-mono">
            Dernière mise à jour : 12 juin 2026 · Version 1.4 (Mise en
            conformité infrastructure)
          </div>
        </div>
      </main>
    </div>
  );
}
