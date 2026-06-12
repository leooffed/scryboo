import type { Metadata } from "next";

// 1. Définition des métadonnées de sécurité gérées côté serveur
export const metadata: Metadata = {
  title: "Sécurité & Protection des Infrastructures — Scryboo",
  description:
    "Découvrez les protocoles de sécurité de Scryboo : architecture décentralisée Local-first (WASM), chiffrement de bout en bout (E2E) et politique de divulgation responsable.",
  alternates: {
    canonical: "https://scryboo.com/securite",
  },
};

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-[#08080d] text-zinc-100 antialiased">
      <main className="pt-32 pb-24 max-w-3xl mx-auto px-6 sm:px-10 lg:px-14">
        <div className="text-[11.7px] uppercase tracking-widest text-zinc-500 font-mono">
          Confiance & Fiabilité
        </div>

        <h1 className="font-display text-[42px] md:text-[52px] tracking-[-0.024em] mt-2 font-bold text-white">
          Sécurité & Robustesse
        </h1>

        {/* Corps des engagements de sécurité */}
        <div className="mt-10 text-zinc-300 text-[15.5px] leading-relaxed space-y-8">
          {/* Section 1 : Local-first */}
          <section className="space-y-3">
            <h2 className="text-white font-display text-[20px] font-semibold tracking-tight">
              1. Paradigme Local-First & Isolation en Sandbox
            </h2>
            <p className="text-zinc-400">
              La meilleure façon de sécuriser une donnée est de ne pas la
              collecter. L'écosystème{" "}
              <span className="font-medium text-zinc-200">Scryboo Tools</span>{" "}
              s'appuie exclusivement sur des technologies d'exécution côté
              client. Grâce à des binaires WebAssembly (WASM) hautement
              optimisés, le traitement de vos documents s'opère de manière
              isolée directement dans le bac à sable (sandbox) de votre
              navigateur.{" "}
              <b className="text-zinc-200 font-medium">
                Zéro téléversement par défaut, zéro persistance externe.
              </b>
            </p>
          </section>

          {/* Section 2 : Chiffrement */}
          <section className="space-y-3">
            <h2 className="text-white font-display text-[20px] font-semibold tracking-tight">
              2. Chiffrement des flux et des données stockées
            </h2>
            <p className="text-zinc-400">
              Tous nos échanges réseaux transitent obligatoirement par des
              tunnels sécurisés exploitant le protocole{" "}
              <b className="text-zinc-300 font-medium">TLS 1.3</b> combiné à une
              politique HSTS stricte. Pour nos modules nécessitant la
              conservation de préférences ou de clés d'accès (comme
              l'architecture Vault), nous appliquons des mécanismes de
              chiffrement de bout en bout (
              <b className="text-zinc-300 font-medium">E2E</b>) où les clés de
              déchiffrement restent en votre possession et ne sont jamais
              transmises en clair à nos services.
            </p>
          </section>

          {/* Section 3 : Infrastructure */}
          <section className="space-y-3">
            <h2 className="text-white font-display text-[20px] font-semibold tracking-tight">
              3. Résilience et Observabilité de l'Infrastructure
            </h2>
            <p className="text-zinc-400">
              Nos services cloud sont déployés sur un réseau hautement
              disponible distribué à la périphérie (Edge nodes) couvrant
              l'Amérique du Nord, l'Europe et l'Afrique. Nous cloisonnons
              strictement nos micro-services pour interdire les privilèges
              croisés. Notre télémétrie en temps réel s'appuie sur le framework{" "}
              <b className="text-zinc-300 font-medium">OpenTelemetry</b>, nous
              permettant de détecter, tracer et neutraliser les anomalies ou
              comportements suspects de manière proactive.
            </p>
          </section>

          {/* Section 4 : Divulgation responsable */}
          <section className="space-y-3">
            <h2 className="text-white font-display text-[20px] font-semibold tracking-tight">
              4. Programme de divulgation responsable (Responsible Disclosure)
            </h2>
            <p className="text-zinc-400">
              La sécurité est un processus collaboratif continu. Nous
              accueillons avec beaucoup d'intérêt le travail des chercheurs en
              sécurité et des hackers éthiques. Si vous identifiez une faille ou
              une faiblesse au sein de l'écosystème Scryboo, veuillez nous le
              signaler exclusivement via notre canal dédié :{" "}
              <a
                href="mailto:security@scryboo.com?subject=Vulnerability Report : [Insérer le composant concerné]"
                className="text-white underline underline-offset-4 decoration-white/[0.2] hover:text-blue-400 hover:decoration-blue-400 transition-colors font-medium font-mono text-[14.5px]"
              >
                security@scryboo.com
              </a>
              .
            </p>
            <p className="text-zinc-400">
              Nous nous engageons à analyser votre rapport et à vous apporter un
              premier retour technique sous{" "}
              <span className="text-zinc-200 font-medium">
                48 heures ouvrées
              </span>
              . Les contributions valides et documentées de manière responsable
              seront publiquement saluées au sein de notre{" "}
              <span className="italic text-zinc-300">Hall of Fame</span>.
            </p>
          </section>

          {/* Section 5 : Conformité */}
          <section className="space-y-3">
            <h2 className="text-white font-display text-[20px] font-semibold tracking-tight">
              5. Conformité et Absence de Traçage commercial
            </h2>
            <p className="text-zinc-400">
              Notre infrastructure s'aligne rigoureusement sur les exigences du
              RGPD et intègre les bonnes pratiques de la norme ISO 27001. Nous
              n'hébergeons aucun traceur tiers à visée publicitaire et refusons
              tout partenariat impliquant le profilage de nos utilisateurs.
            </p>
          </section>

          {/* Footer de versioning de sécurité */}
          <div className="pt-6 border-t border-white/[0.06] text-zinc-500 text-[13.5px] font-mono">
            Dernière révision de sécurité : 12 juin 2026 · Version SEC-2.1
          </div>
        </div>
      </main>
    </div>
  );
}
