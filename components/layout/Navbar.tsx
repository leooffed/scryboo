'use client'

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Grid2X2, ArrowUpRight } from "lucide-react";
import AppSwitcher from "./AppSwitcher";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Vision", href: "#vision" },
  { label: "Produits", href: "#produits" },
  { label: "Infrastructure", href: "#infrastructure" },
  { label: "Journal", href: "#journal" },
];

export default function Navbar() {
  const [switcherOpen, setSwitcherOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "pt-3" : "pt-5"}`}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-7 lg:px-8">
        <div
          className={`flex items-center justify-between rounded-full px-[14px] sm:px-6 md:px-7 h-[58px] sm:h-[64px] transition-all duration-300 ${
            scrolled
              ? "sb-glass"
              : "bg-[rgba(15,15,22,0.46)] border border-white/[0.075] backdrop-blur-xl"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative size-8 rounded-[11px] bg-[#ededf6] text-[#0b0b10] flex items-center justify-center shadow-sm">
              <span className="font-display text-[17px] font-600 tracking-tight">
                <Image src="/scryboo.png" alt="Scryboo" width={26} height={26} />
              </span>
              <div className="absolute inset-0 rounded-[11px] ring-1 ring-black/8"></div>
            </div>
            <span className="text-[17.5px] tracking-[-0.012em] font-[550] text-zinc-100">
              scryboo
            </span>
          </Link>

          {/* Center nav */}
          <nav className="hidden lg:flex items-center gap-8 text-[13.8px] text-zinc-400">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="hover:text-zinc-100 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            <div className="relative hidden sm:block">
              <button
                onClick={() => setSwitcherOpen((v) => !v)}
                className="flex items-center gap-2 text-[13px] text-zinc-300 hover:text-white px-3 py-2 rounded-full hover:bg-white/[0.055] transition"
                aria-expanded={switcherOpen}
                aria-label="Ouvrir l'écosystème"
              >
                <Grid2X2 className="w-[17px] h-[17px] opacity-90" />
                <span className="hidden md:inline">Écosystème</span>
              </button>
              <AnimatePresence>
                {switcherOpen && (
                  <AppSwitcher onClose={() => setSwitcherOpen(false)} />
                )}
              </AnimatePresence>
            </div>

            <div className="h-5 w-px bg-white/10 hidden sm:block" />

            <Link
              href="https://app.scryboo.com"
              className="group relative rounded-full bg-[#f1f1f7] text-zinc-900 text-[13.3px] font-[600] px-4 sm:px-[18px] py-[10px] sm:py-[11px] transition hover:bg-white shadow-sm flex items-center gap-1.5"
            >
              <span className="hidden sm:inline">Explorer</span>
              <span className="sm:hidden">Explorer</span>
              <ArrowUpRight className="w-[15px] h-[15px] text-zinc-600 transition-transform group-hover:translate-x-[1px] group-hover:-translate-y-[1px]" />
            </Link>

            <button
              className="lg:hidden size-10 rounded-full flex items-center justify-center text-zinc-300 hover:bg-white/[0.06] border border-white/[0.08]"
              aria-label="Menu"
              onClick={() => {
                const el = document.getElementById("mobile-nav");
                if (el) el.classList.toggle("hidden");
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <line x1="4" y1="8" x2="20" y2="8" />
                <line x1="4" y1="16" x2="20" y2="16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        <div
          id="mobile-nav"
          className="hidden lg:hidden mt-2 rounded-[22px] sb-glass px-5 py-4 text-[13.8px] text-zinc-300"
        >
          <div className="flex flex-wrap gap-x-5 gap-y-3">
            {navLinks.map((l) => (
              <Link key={l.label} href={l.href} className="hover:text-white">
                {l.label}
              </Link>
            ))}
            <button
              onClick={() => setSwitcherOpen((o) => !o)}
              className="text-zinc-300 hover:text-white"
            >
              Écosystème
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
