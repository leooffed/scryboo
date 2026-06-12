'use client'
import { useSEO } from "@/lib/seo";

export default function TermsPage() {
  useSEO({
    title: "Conditions d'utilisation — Scryboo",
    description: "Conditions d'utilisation de Scryboo. Outils gratuits, usage fair-use, API Pro.",
    canonical: "/conditions"
  });
  return (
    <div className="min-h-screen bg-[#08080d] text-zinc-100">
      <main className="pt-32 pb-24 max-w-3xl mx-auto px-6 sm:px-10 lg:px-14">
        <div className="text-[11.7px] uppercase tracking-widest text-zinc-500 font-mono">Légal</div>
        <h1 className="font-display text-[42px] md:text-[52px] tracking-[-0.024em] mt-2">Conditions d'utilisation</h1>
        <div className="mt-8 text-zinc-300 text-[15.5px] leading-relaxed space-y-4">
          <p>1. Scryboo fournit des outils web gratuits, exécutés localement. 95% gratuit pour toujours, à la manière de Google / Meta.</p>
          <p>2. Usage fair-use. Les abus automatisés massifs peuvent être limités. Offre Pro disponible pour API et volumes.</p>
          <p>3. Aucune garantie sur les fichiers traités localement — gardez toujours une copie.</p>
          <p>4. Compte SSO optionnel. Vous pouvez utiliser la majorité des outils sans compte.</p>
          <p>5. Droit applicable : OHADA / France. Contact : legal@scryboo.com</p>
          <p className="text-zinc-500 text-[13.5px]">v1.4 — 12 février 2026</p>
        </div>
      </main>
    </div>
  );
}