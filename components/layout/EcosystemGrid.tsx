'use client'

import { motion, useMotionValue, useTransform } from "framer-motion";
import {
  Wrench,
  Sparkles,
  CalendarDays,
  Radio,
  Layers,
  ArrowUpRight,
} from "lucide-react";
import { useRef } from "react";

function TiltCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useTransform(my, [-0.5, 0.5], [7, -7]);
  const ry = useTransform(mx, [-0.5, 0.5], [-7, 7]);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const reset = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function EcosystemGrid() {
  return (
    <section
      id="produits"
      className="relative bg-[#0a0a10] border-t border-white/[0.07]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-24 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12 md:mb-14">
          <div>
            <div className="text-[11.7px] uppercase tracking-widest text-zinc-500 font-mono">
              Nos applications
            </div>
            <h2 className="font-display text-[34px] sm:text-[44px] md:text-[54px] tracking-[-0.025em] text-zinc-100 mt-2">
              Un hub, des produits qui collaborent.
            </h2>
            <p className="text-[15.8px] text-zinc-400 mt-3 max-w-xl">
              Chaque app Scryboo partage le même compte, le même design system,
              et la même promesse : vitesse, confidentialité, et surtout —{" "}
              <span className="text-zinc-200">la majorité gratuite</span>.
            </p>
          </div>
          <a
            href="https://app.scryboo.com"
            className="text-[13.7px] text-zinc-300 hover:text-white"
          >
            Voir les 42 outils gratuits →
          </a>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-5 md:gap-6 auto-rows-[220px] md:auto-rows-[238px]">
          {/* Main - Tools */}
          <TiltCard className="col-span-12 lg:col-span-7 row-span-2">
            <a
              href="https://app.scryboo.com"
              className="relative group block h-full rounded-[28px] bg-[linear-gradient(180deg,rgba(255,255,255,0.060),rgba(255,255,255,0.025))] border border-white/[0.11] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.11] via-sky-400/[0.06] to-lime-300/[0.06] opacity-90" />
              <div className="absolute -right-16 top-10 w-[420px] h-[320px] rounded-full blur-[80px] bg-[radial-gradient(circle_at_center,rgba(158,138,255,0.23),transparent_68%)] pointer-events-none" />
              <div className="relative z-10 p-8 md:p-11 h-full flex flex-col">
                <div className="flex items-center gap-3 text-[12.7px] text-zinc-300">
                  <span className="px-2.5 py-1 rounded-full bg-white/[0.075] border border-white/[0.10] text-zinc-200">
                    Gratuit · Instantané
                  </span>
                  <span className="text-zinc-400 font-mono">
                    app.scryboo.com
                  </span>
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <div className="size-11 rounded-[14px] bg-white text-[#12131b] flex items-center justify-center shadow-sm">
                    <Wrench size={19} />
                  </div>
                  <div className="text-[29px] md:text-[34px] font-[650] tracking-[-0.018em]">
                    Scryboo Tools
                  </div>
                </div>
                <p className="mt-4 text-[16.6px] leading-relaxed text-zinc-300 max-w-xl">
                  La suite d’utilitaires la plus rapide du web. Conversion, PDF,
                  images, texte — tout se passe localement dans votre
                  navigateur. Aucune donnée n’uploadée.
                </p>

                {/* preview */}
                <div className="mt-auto pt-8">
                  <div className="rounded-[18px] border border-white/[0.11] bg-[#101118]/70 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                    <div className="flex flex-wrap gap-2 text-[11.7px] text-zinc-300">
                      {[
                        "PDF → JPG",
                        "Compresseur Image",
                        "QR Generator",
                        "JSON Formatter",
                        "Couleurs",
                        "Remove BG",
                        "Resize",
                        "Merge PDF",
                      ].map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-full bg-white/[0.045] border border-white/[0.07]"
                        >
                          {t}
                        </span>
                      ))}
                      <span className="px-2.5 py-1 text-zinc-400">
                        +34 autres
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 mt-5 text-[12.8px] text-zinc-400">
                    <span>
                      <b className="text-zinc-200 font-[620]">42</b> outils
                    </span>
                    <span>
                      <b className="text-zinc-200 font-[620]">0</b> tracking
                    </span>
                    <span>
                      <b className="text-zinc-200 font-[620]">&lt;48kb</b> /
                      outil
                    </span>
                    <span className="ml-auto inline-flex items-center gap-1.5 text-zinc-200">
                      Ouvrir <ArrowUpRight size={15} />
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </TiltCard>

          {/* AI */}
          <TiltCard className="col-span-12 md:col-span-6 lg:col-span-5">
            <a
              href="https://ai.scryboo.com"
              className="relative group h-full block rounded-[28px] bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.022))] border border-white/[0.10] p-7 md:p-8 overflow-hidden"
            >
              <div className="absolute right-[-30px] top-[-30px] w-36 h-36 rounded-full blur-[44px] bg-amber-300/10" />
              <div className="flex items-center justify-between">
                <div className="size-10 rounded-[12px] bg-amber-200/10 text-amber-200 flex items-center justify-center border border-amber-200/15">
                  <Sparkles size={18} />
                </div>
                <span className="text-[11.5px] text-zinc-400 font-mono">
                  ai.scryboo.com
                </span>
              </div>
              <div className="mt-5 text-[23px] font-[650] tracking-[-0.015em] text-zinc-100">
                Scryboo AI
              </div>
              <p className="mt-2.5 text-[14.9px] leading-relaxed text-zinc-400">
                Génération de contenu localisée. Rapide, sobre, respectueuse.
              </p>
              <div className="mt-5 text-[12.3px] text-zinc-400 flex items-center gap-3">
                <span className="px-2 py-1 rounded-full bg-white/[0.045] border border-white/[0.08]">
                  FR • EN • WO
                </span>
                <span>RAG natif</span>
              </div>
            </a>
          </TiltCard>

          {/* Book */}
          <TiltCard className="col-span-12 md:col-span-6 lg:col-span-3">
            <a
              href="https://book.scryboo.com"
              className="relative h-full block rounded-[28px] bg-white/[0.03] border border-white/[0.10] p-7"
            >
              <div className="size-10 rounded-[12px] bg-emerald-300/10 text-emerald-200 flex items-center justify-center">
                <CalendarDays size={18} />
              </div>
              <div className="mt-5 text-[20.5px] font-[650] tracking-[-0.014em]">
                Book
              </div>
              <p className="mt-2 text-[14.2px] text-zinc-400 leading-relaxed">
                Réservations OM / Wave. Simple et rapide.
              </p>
              <div className="mt-5 text-[11.6px] text-zinc-500 font-mono">
                book.scryboo.com
              </div>
            </a>
          </TiltCard>

          {/* Pulse */}
          <TiltCard className="col-span-12 md:col-span-6 lg:col-span-4">
            <a
              href="https://pulse.scryboo.com"
              className="relative h-full block rounded-[28px] bg-white/[0.03] border border-white/[0.10] p-7"
            >
              <div className="size-10 rounded-[12px] bg-rose-300/10 text-rose-200 flex items-center justify-center">
                <Radio size={18} />
              </div>
              <div className="mt-5 text-[20.5px] font-[650] tracking-[-0.014em]">
                Pulse
              </div>
              <p className="mt-2 text-[14.2px] text-zinc-400 leading-relaxed">
                Outils sociaux — planification et analytics.
              </p>
              <div className="mt-5 text-[11.6px] text-zinc-500 font-mono">
                pulse.scryboo.com
              </div>
            </a>
          </TiltCard>

          {/* Flow ERP - small wide */}
          <TiltCard className="col-span-12 md:col-span-6 lg:col-span-5">
            <div className="relative h-full rounded-[28px] bg-white/[0.024] border border-dashed border-white/[0.14] p-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5">
                  <div className="size-9 rounded-[11px] bg-white/[0.05] text-zinc-300 flex items-center justify-center border border-white/[0.09]">
                    <Layers size={16} />
                  </div>
                  <div className="text-[18.5px] font-[620] text-zinc-200">
                    Flow ERP
                  </div>
                  <span className="ml-2 text-[11px] px-2 py-1 rounded-full bg-white/[0.055] text-zinc-300 border border-white/[0.09]">
                    Bientôt
                  </span>
                </div>
                <p className="mt-3 text-[14.2px] text-zinc-400">
                  Factures, stock, CRM — pensé PME Afrique de l’Ouest.
                </p>
              </div>
              <div className="text-[11.8px] text-zinc-500 font-mono">
                flow.scryboo.com
              </div>
            </div>
          </TiltCard>
        </div>

        <div className="mt-7 text-[12.7px] text-zinc-500">
          SSO unifié sur tout l’écosystème • API publique • Webhooks
        </div>
      </div>
    </section>
  );
}
