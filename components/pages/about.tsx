import Link from "next/link";
import type { Metadata } from "next";

// 1. Configuration SEO native gérée sur le serveur
export const metadata: Metadata = {
  title: "À propos — L'histoire et la mission de Scryboo",
  description:
    "Découvrez Scryboo, une startup technologique innovante qui bâtit un écosystème d'applications fluides, sécurisées et accessibles. Notre modèle freemium s'inspire des plus grands standards de la tech.",
  alternates: {
    canonical: "https://scryboo.com/a-propos",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#08080d] text-zinc-100 antialiased">
      <main className="pt-32 pb-24 max-w-4xl mx-auto px-6 sm:px-10 lg:px-14">
        <div className="text-[11.7px] uppercase tracking-widest text-zinc-500 font-mono">
          Manifeste
        </div>

        <h1 className="font-display text-[44px] md:text-[56px] tracking-[-0.025em] mt-2 font-bold text-white leading-tight">
          Scryboo, un hub technologique d'utilité publique.
        </h1>

        {/* Corps du texte - Style éditorial premium */}
        <div className="mt-10 text-zinc-300 text-[16.5px] leading-relaxed space-y-6">
          <p>
            Scryboo est une startup technologique dynamique, innovante et
            résolument tournée vers l'excellence produit. Notre mission est
            simple : concevoir et déployer un écosystème d'applications
            interconnectées, rapides et profondément respectueuses de votre vie
            privée, en suivant les standards de robustesse d'acteurs de
            référence mondiaux.
          </p>

          <p>
            L'ensemble de notre architecture s'organise autour d'un portail
            unifié. La plateforme mère{" "}
            <b className="text-zinc-100 font-medium">scryboo.com</b> centralise
            l'accès et l'identité de nos utilisateurs, tandis que nos solutions
            logicielles spécialisées s'exécutent sur des infrastructures dédiées
            :{" "}
            <span className="text-zinc-100 font-mono text-[15px]">
              app.scryboo.com
            </span>{" "}
            pour notre suite d'outils,{" "}
            <span className="text-zinc-100 font-mono text-[15px]">
              ai.scryboo.com
            </span>{" "}
            pour nos technologies d'intelligence artificielle, et très
            prochainement nos modules de gestion commerciale, de réservation et
            de communication.
          </p>

          <h2 className="text-white font-display text-[26px] font-bold pt-6 tracking-tight">
            Un modèle économique transparent et honnête
          </h2>
          <p>
            Inspiré par les géants du web, notre modèle repose sur une
            accessibilité totale.{" "}
            <b className="text-zinc-100 font-semibold">
              95% de nos utilitaires quotidiens sont et resteront 100% gratuits
            </b>
            , sans création de compte obligatoire et sans aucune pollution
            publicitaire.
          </p>
          <p>
            Nous assurons la viabilité et le développement de notre
            infrastructure en monétisant exclusivement les usages industriels et
            professionnels : accès aux API à forte charge, traitements de
            volumes en masse, intégrations d'intelligence artificielle
            illimitées et support technique prioritaire pour les entreprises.
          </p>

          <h2 className="text-white font-display text-[26px] font-bold pt-6 tracking-tight">
            Une ingénierie Local-First & Multi-Régions
          </h2>
          <p>
            Née à Dakar et opérée depuis Paris, Scryboo fait le pont entre les
            réalités économiques locales et les technologies mondiales les plus
            avancées. Nos architectures intègrent nativement les paiements par
            réseaux mobiles (Orange Money, Wave), gèrent les devises régionales
            (XOF, XAF) et s'adaptent à la diversité culturelle à travers des
            interfaces traduites en Français, Anglais et Wolof.
          </p>
          <p>
            Grâce à un déploiement sur des serveurs distribués à la périphérie
            des réseaux (Edge AI et Edge Workers), nous garantissons un temps de
            réponse instantané en Afrique, en Europe et en Amérique du Nord,
            adossé à un engagement de haute disponibilité.
          </p>

          {/* Section Contacts et Actions */}
          <div className="pt-8 mt-8 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[15px]">
            <div className="text-zinc-400">
              Une question ou un partenariat ? Écrivez-nous sur :{" "}
              <a
                href="mailto:hello@scryboo.com?subject=Contact depuis la vitrine Scryboo"
                className="text-white underline underline-offset-4 decoration-white/[0.2] hover:text-blue-400 hover:decoration-blue-400 transition-all font-medium"
              >
                hello@scryboo.com
              </a>
            </div>

            <Link
              href="/carrieres"
              className="inline-flex items-center gap-1.5 text-white font-semibold hover:text-zinc-300 transition-colors"
            >
              L'équipe s'agrandit, rejoignez-nous
              <span className="font-mono">→</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
