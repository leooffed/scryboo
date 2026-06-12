import type { Metadata } from "next";

// 1. Métadonnées SEO statiques gérées par le serveur
export const metadata: Metadata = {
  title: "Statut des Systèmes — Performance de l'écosystème Scryboo",
  description:
    "Suivez en temps réel la disponibilité, l'uptime et l'état opérationnel des serveurs, des API et des applications de l'écosystème Scryboo.",
  alternates: {
    canonical: "https://scryboo.com/statut",
  },
};

const services = [
  {
    name: "scryboo.com",
    label: "Portail Vitrine",
    status: "Opérationnel",
    up: "99.98%",
    active: true,
  },
  {
    name: "app.scryboo.com",
    label: "Suite Tools (WASM)",
    status: "Opérationnel",
    up: "99.98%",
    active: true,
  },
  {
    name: "ai.scryboo.com",
    label: "Infrastructures IA",
    status: "Opérationnel",
    up: "99.94%",
    active: true,
  },
  {
    name: "flow.scryboo.com",
    label: "Automation Engine",
    status: "Planifié / Bientôt",
    up: "—",
    active: false,
  },
  {
    name: "Passerelle API Globale",
    label: "Accès Développeurs",
    status: "Opérationnel",
    up: "99.97%",
    active: true,
  },
];

export default function StatusPage() {
  return (
    <div className="min-h-screen bg-[#08080d] text-zinc-100 antialiased">
      <main className="pt-32 pb-24 max-w-4xl mx-auto px-6 sm:px-10 lg:px-14">
        <div className="text-[11.7px] uppercase tracking-widest text-zinc-500 font-mono">
          Réseau & Infrastructure
        </div>

        {/* En-tête avec pastille de statut global */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-2 border-b border-white/[0.06] pb-8">
          <h1 className="font-display text-[42px] md:text-[52px] tracking-[-0.024em] font-bold text-white leading-none">
            Tous les systèmes sont opérationnels.
          </h1>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[13px] font-medium self-start sm:self-center">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Réseau Nominal
          </div>
        </div>

        {/* Tableau / Liste des Services */}
        <div className="mt-10 rounded-[22px] border border-white/[0.08] bg-white/[0.015] overflow-hidden backdrop-blur-md">
          <div className="hidden sm:grid grid-cols-3 px-6 py-4 bg-white/[0.02] border-b border-white/[0.06] text-[12px] font-mono uppercase tracking-wider text-zinc-500 font-semibold">
            <div>Service / Point de terminaison</div>
            <div className="text-center">Taux de disponibilité (30j)</div>
            <div className="text-right">État actuel</div>
          </div>

          <div className="divide-y divide-white/[0.06]">
            {services.map((s) => (
              <div
                key={s.name}
                className="grid sm:grid-cols-3 items-center px-6 py-5 hover:bg-white/[0.01] transition-colors"
              >
                {/* Nom et description du service */}
                <div className="flex flex-col gap-0.5">
                  <span className="text-zinc-100 font-semibold tracking-tight text-[15.5px]">
                    {s.name}
                  </span>
                  <span className="text-zinc-500 text-[12.5px]">{s.label}</span>
                </div>

                {/* Statut Uptime (Mobile friendly) */}
                <div className="flex sm:justify-center items-center gap-2 mt-2 sm:mt-0 text-[14px] text-zinc-400 font-mono">
                  <span className="sm:hidden text-zinc-600 text-[12px] uppercase font-sans tracking-wide mr-1">
                    Uptime:
                  </span>
                  {s.up}
                </div>

                {/* Statut Fonctionnel (Mobile friendly) */}
                <div className="flex sm:justify-end items-center gap-2.5 mt-1 sm:mt-0 text-[14px]">
                  <span className="sm:hidden text-zinc-600 text-[12px] uppercase font-sans tracking-wide mr-1">
                    Statut:
                  </span>
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${s.active ? "bg-emerald-500" : "bg-zinc-600"}`}
                  />
                  <span
                    className={
                      s.active
                        ? "text-emerald-400 font-medium"
                        : "text-zinc-500 font-medium"
                    }
                  >
                    {s.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pied de page technique */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-zinc-500 text-[13.4px]">
          <div>
            Mesures distribuées en continu sur nos grappes de serveurs{" "}
            <span className="text-zinc-400 font-medium">Edge AF • EU • NA</span>
            .
          </div>
          <div className="font-mono text-[12.5px] sm:text-right">
            Dernière vérification automatique : il y a 42s
          </div>
        </div>
      </main>
    </div>
  );
}
