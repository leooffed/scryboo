import type { Metadata } from "next";

// 1. Configuration des métadonnées de conformité sur le serveur
export const metadata: Metadata = {
  title: "Politique de Confidentialité & Règlements — Scryboo",
  description:
    "Découvrez l'engagement de Scryboo pour la protection de vos données : architecture Local-First (WASM), absence de traçage publicitaire et conformité stricte au RGPD.",
  alternates: {
    canonical: "https://scryboo.com/confidentialite",
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#08080d] text-zinc-100 antialiased">
      <main className="pt-32 pb-24 max-w-3xl mx-auto px-6 sm:px-10 lg:px-14">
        <div className="text-[11.7px] uppercase tracking-widest text-zinc-500 font-mono">
          Cadre Juridique & Protection
        </div>

        <h1 className="font-display text-[42px] md:text-[52px] tracking-[-0.024em] mt-2 font-bold text-white">
          Politique de Confidentialité
        </h1>

        {/* Corps du Manifeste Légal */}
        <div className="mt-10 text-zinc-300 text-[15.5px] leading-relaxed space-y-8">
          {/* Section 1 : Privacy by Design */}
          <section className="space-y-3">
            <h2 className="text-white font-display text-[20px] font-semibold tracking-tight">
              1. Architecture locale et respect de la vie privée (Privacy by
              Design)
            </h2>
            <p className="text-zinc-400">
              Le cœur technique de la suite d'applications Scryboo repose sur un
              paradigme de traitement décentralisé. La quasi-totalité de nos
              outils s'exécutent de manière autonome directement au sein de
              votre navigateur web via des binaires sécurisés (WebAssembly /
              WASM). En conséquence,{" "}
              <b className="text-zinc-200 font-medium">
                vos documents et fichiers ne sont jamais téléversés, stockés ou
                analysés sur des serveurs distants.
              </b>{" "}
              Ils restent sous votre contrôle exclusif dans la mémoire volatile
              de votre appareil.
            </p>
          </section>

          {/* Section 2 : Gestion des traceurs */}
          <section className="space-y-3">
            <h2 className="text-white font-display text-[20px] font-semibold tracking-tight">
              2. Utilisation des traceurs et cookies
            </h2>
            <p className="text-zinc-400">
              Scryboo applique une politique d'exclusion stricte vis-à-vis des
              régies publicitaires et des courtiers de données :
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-zinc-400">
              <li>
                <b className="text-zinc-300 font-medium">Zéro cookie tiers :</b>{" "}
                Aucun mouchard croisé ou outil de profilage commercial n'est
                injecté sur nos plateformes.
              </li>
              <li>
                <b className="text-zinc-300 font-medium">
                  Cookies de session uniques :
                </b>{" "}
                Si et seulement si vous décidez de créer un compte utilisateur,
                un identifiant de session chiffré et fonctionnel est
                temporairement mémorisé pour assurer le fonctionnement de notre
                infrastructure d'authentification unifiée (SSO).
              </li>
            </ul>
          </section>

          {/* Section 3 : Analytics */}
          <section className="space-y-3">
            <h2 className="text-white font-display text-[20px] font-semibold tracking-tight">
              3. Mesure d'audience anonyme
            </h2>
            <p className="text-zinc-400">
              Pour ajuster la capacité de nos infrastructures réseau et
              identifier d'éventuelles anomalies techniques, nous exploitons des
              solutions de mesures d'audience agrégées et entièrement
              anonymisées. Ces données ne contiennent aucune adresse IP
              identifiable, aucun identifiant permanent de terminal, et
              empêchent tout suivi comportemental inter-sites.
            </p>
          </section>

          {/* Section 4 : RGPD & Localisation */}
          <section className="space-y-3">
            <h2 className="text-white font-display text-[20px] font-semibold tracking-tight">
              4. Conformité réglementaire et hébergement (RGPD)
            </h2>
            <p className="text-zinc-400">
              Le traitement des données résiduelles est opéré sous la
              responsabilité éditoriale de Scryboo SAS. Conformément au
              Règlement Général sur la Protection des Données (RGPD) européen et
              aux réglementations de protection des données d'Afrique de
              l'Ouest, vos rares données de profil (adresse e-mail
              d'authentification et logs de sécurité) sont localisées sur des
              serveurs hautement sécurisés situés au sein de l'Union Européenne
              et de nœuds de distribution régionaux en Afrique.
            </p>
            <p className="text-zinc-400">
              Pour toute demande de consultation, de rectification ou de
              suppression définitive de vos données de compte, vous pouvez
              solliciter notre délégué à la protection des données (DPO) à
              l'adresse dédiée :{" "}
              <a
                href="mailto:privacy@scryboo.com?subject=Demande relative aux données personnelles — Droits RGPD"
                className="text-white underline underline-offset-4 decoration-white/[0.2] hover:text-blue-400 hover:decoration-blue-400 transition-colors font-medium"
              >
                privacy@scryboo.com
              </a>
              .
            </p>
          </section>

          {/* Section 5 : Modèle Financier Éthique */}
          <section className="space-y-3">
            <h2 className="text-white font-display text-[20px] font-semibold tracking-tight">
              5. Indépendance et intégrité commerciale
            </h2>
            <p className="text-zinc-400">
              Contrairement aux modèles traditionnels financés par la capture
              d'attention, notre suite d'outils grand public maintient un accès
              libre et gratuit sans contrepartie cachée. Nous refusons
              catégoriquement de monétiser vos habitudes ou vos profils de
              connexion. Notre équilibre financier repose exclusivement sur la
              souscription d'offres Premium par des clients professionnels
              (volumes industriels, déploiements d'API et consommation de
              ressources de calcul d'intelligence artificielle).
            </p>
          </section>

          {/* Footer de mise à jour */}
          <div className="pt-6 border-t border-white/[0.06] text-zinc-500 text-[13.5px] font-mono">
            Dernière révision : 12 juin 2026 · Version 1.2
          </div>
        </div>
      </main>
    </div>
  );
}
