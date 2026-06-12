'use client'

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="vision"
      className="relative min-h-[96vh] flex items-center overflow-hidden bg-[#08080d]"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 sb-grid opacity-[0.58] [mask-image:radial-gradient(1100px_700px_at_50%_20%,black,transparent)]" />
        <div className="absolute left-1/2 -translate-x-1/2 top-[-58px] w-[980px] h-[640px] aurora-orb opacity-90" />
        {/* Orb / Mesh */}
        <div className="absolute left-1/2 top-[124px] -translate-x-1/2">
          <div className="relative w-[740px] h-[420px] opacity-[0.85]">
            {/* glow center */}
            <div className="absolute left-1/2 top-[168px] -translate-x-1/2 w-[270px] h-[128px] rounded-full blur-[70px] bg-[radial-gradient(circle_at_center,rgba(174,164,255,.55),rgba(120,186,255,.18),transparent_72%)]" />
            {/* orbital rings */}
            <motion.svg
              viewBox="0 0 740 420"
              className="absolute inset-0 w-full h-full"
              fill="none"
            >
              <defs>
                <linearGradient
                  id="orbStroke"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
                  <stop offset="18%" stopColor="#dcd8ff" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#ffffff" stopOpacity="0.72" />
                  <stop offset="82%" stopColor="#dbff9c" stopOpacity="0.56" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </linearGradient>
              </defs>
              <motion.ellipse
                cx="370"
                cy="208"
                rx="324"
                ry="92"
                stroke="url(#orbStroke)"
                strokeWidth="1.15"
                opacity="0.92"
                initial={{ rotate: -8 }}
                animate={{ rotate: 8 }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                style={{ transformOrigin: "370px 208px" }}
              />
              <ellipse
                cx="370"
                cy="208"
                rx="247"
                ry="76"
                stroke="rgba(255,255,255,0.19)"
                strokeWidth="1"
              />
              <ellipse
                cx="370"
                cy="208"
                rx="167"
                ry="55"
                stroke="rgba(255,255,255,0.16)"
                strokeWidth="1"
              />
              {/* tick marks */}
              <g
                opacity="0.9"
                stroke="rgba(255,255,255,0.76)"
                strokeWidth="1.1"
              >
                <line x1="370" y1="116" x2="370" y2="128" />
                <line x1="370" y1="288" x2="370" y2="300" />
                <line x1="46" y1="208" x2="60" y2="208" />
                <line x1="680" y1="208" x2="694" y2="208" />
              </g>
              {/* nodes */}
              {[
                [370 - 247, 208],
                [370 + 247, 208],
                [370 - 120, 208 - 42],
                [370 + 124, 208 + 41],
              ].map(([x, y], i) => (
                <g key={i}>
                  <circle cx={x} cy={y} r="3.6" fill="white" opacity="0.95" />
                  <circle cx={x} cy={y} r="8.4" fill="white" opacity="0.07" />
                </g>
              ))}
            </motion.svg>
          </div>
        </div>
        {/* bottom vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_50%_-40px,transparent,transparent_45%,#08080d_80%)] pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-[320px] bg-gradient-to-t from-[#08080d] via-[#08080d]/92 to-transparent" />
        <div className="sb-noise absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pt-36 pb-24 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/[0.11] bg-white/[0.035] px-3.5 py-1.6 text-[11.5px] text-zinc-300"
        >
          <span className="inline-block size-1.5 rounded-full bg-[#e7ff90]" />
          Scryboo Ecosystem · v2.4 · Live
          <span className="text-zinc-500">—</span>
          <span className="font-mono text-zinc-400">Innovation • Afrique</span>
        </motion.div>

        <h1 className="mt-8 max-w-[980px] font-display text-[46px] sm:text-[68px] md:text-[86px] lg:text-[98px] leading-[0.935] tracking-[-0.035em] text-[#f2f2f7]">
          <motion.span
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.058, delayChildren: 0.08 },
              },
            }}
            className="block"
          >
            {["L'écosystème", "technologique"].map((w) => (
              <span
                key={w}
                className="inline-block overflow-hidden pb-[0.08em] mr-[0.24em] align-bottom"
              >
                <motion.span
                  variants={{
                    hidden: { y: "110%", opacity: 0 },
                    show: {
                      y: "0%",
                      opacity: 1,
                      transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                  className="inline-block will-change-transform"
                >
                  {w}
                </motion.span>
              </span>
            ))}
          </motion.span>
          <motion.span
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.052, delayChildren: 0.38 },
              },
            }}
            className="block text-zinc-400/95"
          >
            {["qui", "propulse", "vos", "idées."].map((w) => (
              <span
                key={w}
                className="inline-block overflow-hidden pb-[0.08em] mr-[0.27em] align-bottom"
              >
                <motion.span
                  variants={{
                    hidden: { y: "108%", opacity: 0 },
                    show: {
                      y: "0%",
                      opacity: 1,
                      transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                  className="inline-block will-change-transform"
                >
                  {w}
                </motion.span>
              </span>
            ))}
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.78, duration: 0.55 }}
          className="mt-7 md:mt-8 max-w-[720px] text-[17.5px] md:text-[19.3px] leading-relaxed text-zinc-400"
        >
          Scryboo conçoit des applications rapides, sans friction et pensées
          pour la productivité quotidienne. Un hub unifié, privacy-by-design,
          adapté aux contextes locaux — Afrique francophone et au-delà.
          <span className="text-zinc-300">
            {" "}
            La majorité des outils sont 100% gratuits, sans compte — comme
            Google et Facebook.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.92, duration: 0.5 }}
          className="mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <a
            href="https://app.scryboo.com"
            className="group inline-flex items-center gap-3 rounded-full bg-[#f1f1f6] text-zinc-900 font-[630] px-[22px] py-[14px] text-[15.3px] shadow-[0_8px_36px_rgba(255,255,255,0.08)] hover:bg-white transition"
          >
            Ouvrir Scryboo Tools
            <span className="w-7 h-7 rounded-full bg-zinc-900/90 text-zinc-100 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
              <ArrowUpRight size={16} />
            </span>
          </a>
          <a
            href="#produits"
            className="text-[14.6px] text-zinc-300 hover:text-white px-2 py-2"
          >
            Découvrir l’écosystème →
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.07 }}
          className="mt-10 flex flex-wrap items-center gap-7 text-[12.8px] text-zinc-400"
        >
          <div className="flex -space-x-2">
            {["#bbaaff", "#ffe49a", "#9fd3ff", "#e8ffb7"].map((c, i) => (
              <div
                key={i}
                style={{ backgroundColor: c }}
                className="w-7 h-7 rounded-full ring-[2.5px] ring-[#0b0b12]"
              />
            ))}
          </div>
          <div>
            14k+ créateurs <span className="text-zinc-500">·</span> 95% gratuit{" "}
            <span className="text-zinc-500">·</span> 99.98% uptime
          </div>
          <div className="hidden md:flex items-center gap-5 text-zinc-500 font-mono text-[11.6px]">
            <span>FREE-FOREVER</span>
            <span>GDPR</span>
            <span>EDGE-NA • EU • AF</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade / divider */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
