// app/conditions/page.tsx
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Conditions d'utilisation — scryboo",
  description:
    "Conditions d'utilisation des services Scryboo. Utilisation gratuite et fair-use des outils, confidentialité locale, offres Pro pour les volumes. Lisez nos engagements.",
  alternates: {
    canonical: "https://scryboo.com/conditions",
  },
  openGraph: {
    title: "Conditions d'utilisation — Scryboo",
    description:
      "Comprenez les droits et obligations liés à l'utilisation des outils gratuits et des offres Pro de l'écosystème Scryboo.",
    url: "https://scryboo.com/conditions",
    siteName: "Scryboo",
    locale: "fr_FR",
    type: "website",
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#08080d] text-zinc-100 antialiased">
      <main className="pt-32 pb-24 max-w-3xl mx-auto px-6 sm:px-10 lg:px-14">
        <div className="text-[11.7px] uppercase tracking-widest text-zinc-500 font-mono">
          Légal
        </div>
        <h1 className="font-display text-[42px] md:text-[52px] tracking-[-0.024em] mt-2 font-bold">
          Conditions d'utilisation
        </h1>
        <p className="text-zinc-400 text-[14px] mt-1">
          Dernière mise à jour : 12 février 2026 • Version 1.4
        </p>

        <div className="mt-8 text-zinc-300 text-[15.5px] leading-relaxed space-y-8">
          {/* 1. Acceptation */}
          <section>
            <h2 className="text-[19px] font-semibold text-white mb-2">
              1. Acceptation des conditions
            </h2>
            <p>
              En accédant à l’un des services fournis par Scryboo (le « Service »),
              vous acceptez d’être lié par les présentes Conditions d’utilisation.
              Si vous n’acceptez pas ces conditions, veuillez ne pas utiliser le
              Service. Ces conditions s’appliquent à tous les utilisateurs, qu’ils
              aient créé un compte ou non.
            </p>
          </section>

          {/* 2. Description du Service */}
          <section>
            <h2 className="text-[19px] font-semibold text-white mb-2">
              2. Description du Service
            </h2>
            <p>
              Scryboo propose un écosystème d’applications web (les « Outils »)
              accessibles gratuitement à 95 %. La plupart des Outils fonctionnent
              localement dans votre navigateur via WebAssembly : aucun fichier
              n’est téléversé sur nos serveurs. Certains services nécessitent
              un compte unifié (SSO) pour des fonctionnalités avancées ou des
              offres Pro payantes.
            </p>
            <p className="mt-2">
              Les Outils sont fournis « en l’état », sans garantie d’adéquation
              à un usage particulier. Nous nous réservons le droit de modifier,
              suspendre ou interrompre tout Outil à tout moment.
            </p>
          </section>

          {/* 3. Gratuité et usage loyal */}
          <section>
            <h2 className="text-[19px] font-semibold text-white mb-2">
              3. Utilisation gratuite et fair-use
            </h2>
            <p>
              Conformément à notre engagement de transparence, 95 % des Outils
              sont entièrement gratuits pour un usage personnel ou professionnel
              raisonnable, sans publicité intrusive et sans collecte de données
              personnelles.
            </p>
            <p>
              Nous appliquons une politique de <strong>fair-use</strong> : tout
              usage automatisé, abusif ou destiné à contourner les limitations
              techniques pourra être restreint ou bloqué. Les volumes élevés,
              l’accès aux API et les fonctionnalités d’intelligence artificielle
              avancées sont réservés aux offres Pro payantes.
            </p>
          </section>

          {/* 4. Propriété intellectuelle */}
          <section>
            <h2 className="text-[19px] font-semibold text-white mb-2">
              4. Propriété intellectuelle
            </h2>
            <p>
              L’ensemble des éléments constituant le Service (code source,
              interfaces, marques, logos, contenus éditoriaux) restent la
              propriété exclusive de Scryboo. Vous ne pouvez pas copier, modifier
              ou exploiter ces éléments en dehors de l’utilisation normale des
              Outils, sauf autorisation écrite préalable.
            </p>
            <p>
              Les fichiers que vous traitez avec nos Outils restent votre
              propriété et ne sont jamais stockés ni consultés par nos soins.
            </p>
          </section>

          {/* 5. Limitation de responsabilité */}
          <section>
            <h2 className="text-[19px] font-semibold text-white mb-2">
              5. Limitation de responsabilité
            </h2>
            <p>
              Scryboo ne pourra être tenu responsable des dommages directs ou
              indirects résultant de l’utilisation ou de l’impossibilité
              d’utiliser les Outils, y compris la perte de données. Il vous
              incombe de conserver une copie de sauvegarde de vos fichiers
              avant traitement.
            </p>
            <p>
              Notre responsabilité est limitée au montant que vous nous avez
              versé, le cas échéant, au cours des douze mois précédant le fait
              générateur.
            </p>
          </section>

          {/* 6. Données personnelles et confidentialité */}
          <section>
            <h2 className="text-[19px] font-semibold text-white mb-2">
              6. Confidentialité et données personnelles
            </h2>
            <p>
              Scryboo applique une politique de <strong>Privacy by Design</strong> :
              nous ne collectons aucune donnée personnelle lors de l’utilisation
              des Outils gratuits sans compte. Les informations éventuellement
              collectées lors de la création d’un compte sont strictement
              limitées à la fourniture du Service et ne sont jamais revendues.
            </p>
            <p>
              Pour plus de détails, consultez notre{" "}
              <a href="/confidentialite" className="text-indigo-400 hover:underline">
                Politique de confidentialité
              </a>
              .
            </p>
          </section>

          {/* 7. Droit applicable */}
          <section>
            <h2 className="text-[19px] font-semibold text-white mb-2">
              7. Droit applicable et juridiction
            </h2>
            <p>
              Les présentes Conditions sont régies par le droit de l’OHADA et,
              à titre subsidiaire, le droit français. Tout litige relatif à
              leur interprétation ou exécution sera soumis aux tribunaux
              compétents de notre siège social situé en Afrique.
            </p>
          </section>

          {/* 8. Contact */}
          <section>
            <h2 className="text-[19px] font-semibold text-white mb-2">
              8. Contact
            </h2>
            <p>
              Pour toute question juridique, contactez-nous à l’adresse{" "}
              <a href="mailto:legal@scryboo.com" className="text-indigo-400 hover:underline">
                legal@scryboo.com
              </a>
              . Les réponses sont généralement fournies sous 72 heures ouvrées.
            </p>
          </section>
        </div>

        {/* Version */}
        <div className="mt-12 pt-6 border-t border-white/[0.08] text-[13px] text-zinc-500">
          Historique des versions : v1.0 (janvier 2025), v1.2 (juillet 2025),
          v1.4 (février 2026). Toute modification substantielle fera l’objet
          d’une notification par e-mail aux utilisateurs enregistrés.
        </div>
      </main>
    </div>
  );
}