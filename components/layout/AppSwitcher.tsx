'use client'

import { motion } from "framer-motion";
import {
  Wrench,
  Sparkles,
  Layers,
  CalendarDays,
  Radio,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

const apps = [
  {
    name: "Tools",
    domain: "app.scryboo.com",
    desc: "Suite d'outils",
    Icon: Wrench,
    tone: "bg-violet-500/14 text-violet-300",
  },
  {
    name: "AI Lab",
    domain: "ai.scryboo.com",
    desc: "Génération",
    Icon: Sparkles,
    tone: "bg-amber-400/10 text-amber-200",
  },
  {
    name: "Flow",
    domain: "flow.scryboo.com",
    desc: "ERP",
    Icon: Layers,
    tone: "bg-sky-400/10 text-sky-200",
  },
  {
    name: "Book",
    domain: "book.scryboo.com",
    desc: "Réservations",
    Icon: CalendarDays,
    tone: "bg-emerald-400/10 text-emerald-200",
  },
  {
    name: "Pulse",
    domain: "pulse.scryboo.com",
    desc: "Social suite",
    Icon: Radio,
    tone: "bg-rose-400/10 text-rose-200",
  },
  {
    name: "Vault",
    domain: "vault.scryboo.com",
    desc: "Secrets",
    Icon: ShieldCheck,
    tone: "bg-zinc-400/10 text-zinc-200",
  },
];

export default function AppSwitcher({ onClose }: { onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, [onClose]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 8, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 6, scale: 0.98 }}
      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
      className="absolute right-0 top-[46px] w-[370px] rounded-[26px] sb-glass p-[18px] shadow-[0_24px_80px_rgba(0,0,0,.65)] z-50"
    >
      <div className="flex items-center justify-between px-2 pb-3 pt-1">
        <div className="text-[11.5px] uppercase tracking-wider text-zinc-400 font-mono">
          Écosystème Scryboo
        </div>
        <div className="text-[11px] text-zinc-500">6 apps</div>
      </div>
      <div className="grid grid-cols-3 gap-[10px]">
        {apps.map((a) => (
          <Link
            key={a.name}
            href={`https://${a.domain}`}
            className="group rounded-[16px] bg-white/[0.032] border border-white/[0.08] hover:bg-white/[0.06] hover:border-white/[0.14] transition px-3 py-3.5"
          >
            <div
              className={`w-8 h-8 rounded-[11px] flex items-center justify-center mb-2.5 ${a.tone}`}
            >
              <a.Icon size={16} strokeWidth={1.9} />
            </div>
            <div className="text-[13.5px] font-[600] text-zinc-100">
              {a.name}
            </div>
            <div className="text-[11.6px] text-zinc-400 mt-0.5 leading-snug">
              {a.desc}
            </div>
            <div className="text-[10.4px] text-zinc-500 mt-1.5 font-mono">
              {a.domain.replace("scryboo.com", "")}
            </div>
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-between pt-3.5 mt-3 border-t border-white/[0.082] px-2 text-[12.6px]">
        <span className="text-zinc-400">SSO unifié • Accès instantané</span>
        <Link
          href="https://app.scryboo.com"
          className="text-zinc-200 hover:text-white font-[550]"
        >
          Voir tout →
        </Link>
      </div>
    </motion.div>
  );
}
