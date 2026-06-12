'use client'
import { useSEO } from "@/lib/seo";

export default function SecurityPage() {
  useSEO({
    title: "Sécurité — Scryboo",
    description:
      "Sécurité Scryboo : Local-first, chiffrement E2E, divulgation responsable.",
    canonical: "/securite",
  });
  return (
    <div className="min-h-screen bg-[#08080d] text-zinc-100">
      <main className="pt-32 pb-24 max-w-3xl mx-auto px-6 sm:px-10 lg:px-14">
        <div className="text-[11.7px] uppercase tracking-widest text-zinc-500 font-mono">
          Sécurité
        </div>
        <h1 className="font-display text-[42px] md:text-[52px] tracking-[-0.024em] mt-2">
          Security @ Scryboo
        </h1>
        <div className="mt-8 text-zinc-300 text-[15.5px] leading-relaxed space-y-4">
          <p>
            <b>Local-first :</b> Les outils Tools tournent en WASM dans le
            navigateur. 0 upload par défaut.
          </p>
          <p>
            <b>Chiffrement :</b> TLS 1.3 partout. Vault : E2E.
          </p>
          <p>
            <b>Infra :</b> Edge NA/EU/AF, isolation, OpenTelemetry, audits
            réguliers.
          </p>
          <p>
            <b>Divulgation responsable :</b> security@scryboo.com — réponse sous
            48h. Hall of fame.
          </p>
          <p>
            <b>RGPD / ISO-ready</b>. Pas de tracking tiers. Pas de pub.
          </p>
        </div>
      </main>
    </div>
  );
}
