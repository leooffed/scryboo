// components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { Search, Wrench, Layers, Globe, Sparkles, CalendarCheck, Radio } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ecoApps, colorMap } from "@/data/apps";
import { tools } from "@/data/tools";

const appIcons: Record<string, any> = {
  tools: Wrench,
  flow: Layers,
  now: Globe,
  ai: Sparkles,
  book: CalendarCheck,
  pulse: Radio,
};

export default function Hero() {
  const [q, setQ] = useState("");
  const toolResults = q
    ? tools
      .filter((t) =>
        (t.name + " " + t.h1 + " " + t.keywords.join(" "))
          .toLowerCase()
          .includes(q.toLowerCase())
      )
      .slice(0, 6)
    : [];
  const appResults = q
    ? ecoApps.filter((a) =>
      (a.name + " " + a.description + " " + a.subtitle)
        .toLowerCase()
        .includes(q.toLowerCase())
    )
    : [];

  return (
    <section className="bg-white">
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8 lg:px-10 pt-10 sm:pt-14 pb-12">
        {/* Brand header */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-3"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-[16px] bg-[#1a73e8] text-white flex items-center justify-center font-display text-[28px] shadow-sm">
              S
            </div>
            <span className="font-display text-[40px] sm:text-[50px] tracking-[-0.025em] text-[#202124]">
              scryboo
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.42 }}
            className="mt-3 text-[24px] sm:text-[30px] md:text-[34px] text-[#202124] font-[620] tracking-[-0.017em]"
          >
            L’écosystème d’applications qui propulse vos idées.
          </motion.h1>
          <p className="mt-2 text-[15.8px] sm:text-[16.8px] text-[#5f6368] max-w-[760px] mx-auto">
            6 apps interconnectées — Tools, Flow ERP, Now Sites, AI, Book, Pulse —{" "}
            <b className="text-[#137333] font-[600]">
              95% gratuit, Innovante Africa
            </b>
            , privacy-by-design, pensé Pour vous.
          </p>
        </div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.4 }}
          className="mt-7 max-w-[680px] mx-auto"
        >
          <div className="relative">
            <Search
              className="absolute left-[18px] top-1/2 -translate-y-1/2 text-[#5f6368]"
              size={20}
            />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Rechercher une app ou un outil : Flow, Now, compresser PDF, QR…"
              className="w-full h-[54px] sm:h-[56px] pl-12 pr-5 rounded-full border border-[#dfe1e5] bg-white text-[16px] text-[#202124] shadow-[0_1px_1px_rgba(0,0,0,.06)] focus:outline-none focus:shadow-[0_1px_6px_rgba(32,33,36,.28)] focus:border-[#dfe1e5]"
            />
          </div>
          <div className="flex justify-center gap-3 mt-3 flex-wrap">
            <Link
              href="/outils"
              className="px-[18px] py-[9px] rounded-[6px] bg-[#f8f9fa] border border-[#f8f9fa] text-[14px] text-[#3c4043] hover:border-[#dadce0] hover:shadow-sm"
            >
              Explorer l’écosystème
            </Link>
            <a
              href="https://app.scryboo.com"
              className="px-[18px] py-[9px] rounded-[6px] bg-[#f8f9fa] border border-[#f8f9fa] text-[14px] text-[#3c4043] hover:border-[#dadce0] hover:shadow-sm"
            >
              J’ai de la chance
            </a>
          </div>
        </motion.div>

        {/* APPS ECOSYSTEM - always visible */}
        <div className="mt-12 sm:mt-14">
          <div className="flex items-center justify-between mb-4 px-1">
            <h2 className="text-[17.5px] sm:text-[19px] font-[620] text-[#202124]">
              Apps de l’écosystème
            </h2>
            <Link
              href="/produits"
              className="text-[13.8px] text-[#1a73e8] hover:underline"
            >
              Voir tout →
            </Link>
          </div>

          {/* If search */}
          {q ? (
            <div>
              {appResults.length > 0 && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  {appResults.map((app) => {
                    const Icon = appIcons[app.id] || Wrench;
                    const c = colorMap[app.color];
                    return (
                      <a
                        key={app.id}
                        href={app.url}
                        className="g-card p-5 block group"
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={`w-11 h-11 rounded-[13px] flex items-center justify-center ${c.bg}`}
                          >
                            <Icon size={20} />
                          </div>
                          <div className="flex-1">
                            <div className="text-[17px] font-[620] text-[#202124]">
                              {app.name}
                            </div>
                            <div className="text-[12.8px] text-[#5f6368]">
                              {app.subtitle}
                            </div>
                          </div>
                          {app.badge && (
                            <span className="text-[11px] px-2 py-1 rounded-full bg-[#f1f3f4] text-[#3c4043]">
                              {app.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-[13.7px] text-[#5f6368] mt-3">
                          {app.description}
                        </p>
                        <div className="text-[12.4px] text-[#1a73e8] mt-3">
                          {app.domain} →
                        </div>
                      </a>
                    );
                  })}
                </div>
              )}
              {toolResults.length > 0 && (
                <>
                  <div className="text-[13.5px] text-[#5f6368] mb-2">
                    Outils correspondants
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {toolResults.map((t) => (
                      <Link
                        key={t.slug}
                        href={`/outils/${t.slug}`}
                        className="g-card px-4 py-3 text-[14px] text-[#1a73e8] hover:underline"
                      >
                        {t.name}
                      </Link>
                    ))}
                  </div>
                </>
              )}
              {appResults.length === 0 && toolResults.length === 0 && (
                <div className="text-[14.5px] text-[#5f6368] py-8 text-center">
                  Aucun résultat pour “{q}”.{" "}
                  <Link href="/outils" className="text-[#1a73e8]">
                    Voir tous les outils
                  </Link>
                </div>
              )}
            </div>
          ) : (
            /* Default apps grid - 6 apps */
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {ecoApps.map((app) => {
                const Icon = appIcons[app.id] || Wrench;
                const c = colorMap[app.color];
                return (
                  <a
                    key={app.id}
                    href={app.url}
                    className={`g-card p-[22px] group relative ${app.highlight ? "ring-[1.5px] ring-[#1a73e8]/18" : ""
                      }`}
                  >
                    <div className="flex items-start justify-between">
                      <div
                        className={`w-12 h-12 rounded-[14px] flex items-center justify-center ${c.bg}`}
                      >
                        <Icon size={22} />
                      </div>
                      <div className="text-right">
                        {app.badge && (
                          <span className="text-[11.3px] px-[9px] py-[4px] rounded-full bg-[#f1f3f4] text-[#3c4043] font-[500]">
                            {app.badge}
                          </span>
                        )}
                        <div className="text-[11.7px] text-[#70757a] mt-1 font-mono">
                          {app.domain}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 text-[19.5px] font-[650] text-[#202124] tracking-[-0.012em]">
                      {app.name}
                    </div>
                    <div className="text-[13.4px] text-[#5f6368]">
                      {app.subtitle}
                    </div>
                    <p className="text-[13.9px] text-[#3c4043] mt-3 leading-[1.45]">
                      {app.description}
                    </p>
                    <div className="flex flex-wrap gap-[7px] mt-3">
                      {app.features.map((f) => (
                        <span
                          key={f}
                          className="text-[11.6px] px-[9px] py-[4px] rounded-full bg-[#f8f9fa] border border-[#eceff1] text-[#5f6368]"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 text-[13.6px] text-[#1a73e8] font-[500] group-hover:underline">
                      Ouvrir {app.name} →
                    </div>
                  </a>
                );
              })}
            </div>
          )}
        </div>

        {/* Quick tools strip */}
        {!q && (
          <div className="mt-10 border-t border-[#f1f3f4] pt-7">
            <div className="flex items-center justify-between mb-3">
              <div className="text-[15.8px] font-[600] text-[#202124]">
                Outils populaires — gratuits
              </div>
              <Link
                href="/outils"
                className="text-[13.5px] text-[#1a73e8] hover:underline"
              >
                Voir les 42 outils →
              </Link>
            </div>
            <div className="flex flex-wrap gap-2">
              {tools.slice(0, 12).map((t) => (
                <Link
                  key={t.slug}
                  href={`/outils/${t.slug}`}
                  className="px-3.5 py-[8px] rounded-full border border-[#dadce0] text-[13.3px] text-[#3c4043] bg-white hover:bg-[#f8f9fa]"
                >
                  {t.name}
                </Link>
              ))}
              <Link
                href="/outils"
                className="px-3.5 py-[8px] text-[13.3px] text-[#5f6368]"
              >
                +30 autres
              </Link>
            </div>
            <div className="text-[12.8px] text-[#5f6368] mt-3">
              95% gratuit • Compte • Pub — Une startup innovante •
              Privacy by design
            </div>
          </div>
        )}
      </div>

      {/* trust bar */}
      <div className="border-t border-[#eceff1] bg-[#f8f9fa]/90">
        <div className="max-w-[1160px] mx-auto px-5 sm:px-8 lg:px-10 py-[13px] text-[13px] text-[#5f6368] flex flex-wrap justify-center gap-x-6 gap-y-1.5">
          <span>14k+ utilisateurs</span>
          <span className="text-[#dadce0]">•</span>
          <span>99.98% uptime</span>
          <span className="text-[#dadce0]">•</span>
          <span>
            <b className="text-[#137333]">95% gratuit</b> pour toujours
          </span>
          <span className="text-[#dadce0]">•</span>
          <span>Africa • Paris • Edge AF/EU/NA</span>
        </div>
      </div>
    </section>
  );
}