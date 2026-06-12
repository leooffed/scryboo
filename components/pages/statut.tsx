'use client'
import { useSEO } from "@/lib/seo";

const services = [
  { name: "scryboo.com", status: "Opérationnel", up: "99.98%" },
  { name: "app.scryboo.com", status: "Opérationnel", up: "99.98%" },
  { name: "ai.scryboo.com", status: "Opérationnel", up: "99.94%" },
  { name: "flow.scryboo.com", status: "Bientôt", up: "—" },
  { name: "API", status: "Opérationnel", up: "99.97%" },
];

export default function StatusPage() {
  useSEO({
    title: "Statut — Scryboo Status",
    description: "Statut en temps réel de l'écosystème Scryboo. Uptime 99.98%.",
    canonical: "/statut",
  });
  return (
    <div className="min-h-screen bg-[#08080d] text-zinc-100">
      <main className="pt-32 pb-24 max-w-4xl mx-auto px-6 sm:px-10 lg:px-14">
        <div className="text-[11.7px] uppercase tracking-widest text-zinc-500 font-mono">
          Statut
        </div>
        <h1 className="font-display text-[42px] md:text-[52px] tracking-[-0.024em] mt-2">
          Tous les systèmes opérationnels
        </h1>
        <div className="mt-8 rounded-[20px] border border-white/[0.10] bg-white/[0.025] overflow-hidden">
          {services.map((s) => (
            <div
              key={s.name}
              className="flex items-center justify-between px-6 py-4 border-b border-white/[0.07] last:border-0"
            >
              <div className="text-zinc-200">{s.name}</div>
              <div className="flex items-center gap-6 text-[13.5px] text-zinc-400">
                <span>{s.up}</span>
                <span className="text-emerald-300/90">{s.status}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-zinc-500 text-[13.4px] mt-4">
          Dernière vérif : il y a 42s · Edge AF/EU/NA
        </p>
      </main>
    </div>
  );
}
