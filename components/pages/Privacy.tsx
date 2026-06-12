'use client'
import { useSEO } from "@/lib/seo";

export default function PrivacyPage() {
  useSEO({
    title: "Confidentialité — Scryboo Privacy by Design",
    description:
      "Politique de confidentialité Scryboo. Traitement local, 0 tracking, RGPD. 95% gratuit.",
    canonical: "/confidentialite",
  });
  return (
    <div className="min-h-screen bg-[#08080d] text-zinc-100">
      <main className="pt-32 pb-24 max-w-3xl mx-auto px-6 sm:px-10 lg:px-14">
        <div className="text-[11.7px] uppercase tracking-widest text-zinc-500 font-mono">
          Légal
        </div>
        <h1 className="font-display text-[42px] md:text-[52px] tracking-[-0.024em] mt-2">
          Confidentialité
        </h1>
        <article className="prose prose-invert mt-8 text-zinc-300 leading-relaxed space-y-5 text-[15.6px]">
          <p>
            <b>Privacy by design.</b> La majorité des outils Scryboo tournent
            100% dans votre navigateur (WASM). Vos fichiers ne sont jamais
            uploadés.
          </p>
          <p>
            <b>Cookies :</b> 0 cookies tiers. Uniquement un cookie fonctionnel
            pour la session SSO, si vous créez un compte.
          </p>
          <p>
            <b>Analytics :</b> Mesure d'audience anonyme, sans identifiant
            cross-site. Pas de pub, pas de revente de données — jamais.
          </p>
          <p>
            <b>RGPD :</b> Responsable : Scryboo SAS. Contact DPO :
            privacy@scryboo.com. Hébergement UE / Afrique.
          </p>
          <p>
            <b>Modèle gratuit :</b> Comme Google et Facebook, l'accès de base
            est gratuit. On ne monétise pas vos données, mais les usages Pro
            (API, volume).
          </p>
          <p className="text-zinc-400 text-[13.8px]">
            Dernière mise à jour : 12 février 2026
          </p>
        </article>
      </main>
    </div>
  );
}
