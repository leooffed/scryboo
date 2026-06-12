"use client";
import { useSEO } from "@/lib/seo";
import Link from "next/link";

export default function AboutPage() {
  useSEO({
    title: "À propos — Scryboo, startup tech Dakar / Paris",
    description:
      "Scryboo construit un écosystème d'applications utiles, rapides et privées. Mission, équipe, modèle gratuit à la Google.",
    canonical: "/a-propos",
  });

  return (
    <div className="min-h-screen bg-[#08080d] text-zinc-100">
      <main className="pt-32 pb-24 max-w-4xl mx-auto px-6 sm:px-10 lg:px-14">
        <div className="text-[11.7px] uppercase tracking-widest text-zinc-500 font-mono">
          À propos
        </div>
        <h1 className="font-display text-[44px] md:text-[56px] tracking-[-0.025em] mt-2">
          Scryboo, un hub tech utile.
        </h1>
        <div className="prose prose-invert max-w-none mt-8 text-zinc-300 text-[16.6px] leading-relaxed space-y-5">
          <p>
            Scryboo est une jeune startup technologique, dynamique et innovante.
            On construit un écosystème d'applications utiles et d'outils
            puissants — à la manière de Google ou Stripe.
          </p>
          <p>
            Le domaine principal <b className="text-zinc-100">scryboo.com</b>{" "}
            est la vitrine de la marque et le portail central SEO. Les produits
            vivent sur des sous-domaines : <b>app.scryboo.com</b> pour Tools,{" "}
            <b>ai.scryboo.com</b> pour l'IA, et bientôt Flow, Book, Pulse…
          </p>
          <h2 className="text-zinc-100 font-display text-[28px] mt-10">
            Notre modèle
          </h2>
          <p>
            Comme Google et Facebook :{" "}
            <b className="text-zinc-100">
              95% des outils sont 100% gratuits, sans compte, sans pub, pour
              toujours.
            </b>{" "}
            On monétise les usages pro : API, batch volumineux, AI illimitée,
            support prioritaire. Simple, honnête.
          </p>
          <h2 className="text-zinc-100 font-display text-[28px] mt-10">
            Local-first
          </h2>
          <p>
            Né à Dakar, opéré depuis Paris. Paiements Orange Money / Wave.
            Devises XOF/XAF. Langues FR / EN / WO. Edge AF • EU • NA. 99.98%
            uptime.
          </p>
          <p>
            Contact :{" "}
            <a
              href="mailto:hello@scryboo.com"
              className="text-zinc-100 underline"
            >
              hello@scryboo.com
            </a>
          </p>
          <p className="pt-4">
            <Link href="/carrieres" className="text-zinc-100 underline">
              Nous recrutons → Carrières
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
