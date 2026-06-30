// components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Grid2X2, Search } from "lucide-react";

const links = [
  { label: "Outils", href: "/outils" },
  { label: "Produits", href: "/produits" },
  { label: "Vision", href: "/vision" },
  { label: "Journal", href: "/journal" },
];

export default function Navbar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-[#e5e7eb]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-[64px] flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <div className="w-8 h-8 rounded-xl bg-[#1a73e8] text-white flex items-center justify-center font-display font-600 text-[17px] shadow-sm">
            S
          </div>
          <span className="text-[21px] tracking-[-0.012em] font-[600] text-[#202124]">
            scryboo
          </span>
          <span className="hidden sm:inline text-[12px] text-[#5f6368] ml-1">
            Écosystème
          </span>
        </Link>

        {/* Search - google style small */}
        <div className="hidden md:flex flex-1 max-w-[520px] mx-4">
          <div className="w-full relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5f6368]"
              size={18}
            />
            <input
              placeholder="Rechercher un outil : PDF, image, QR…"
              className="w-full h-11 pl-11 pr-4 rounded-full border border-[#dadce0] bg-white text-[14.4px] text-[#202124] placeholder-[#5f6368] focus:outline-none focus:border-[#1a73e8] focus:ring-[3px] focus:ring-[#1a73e8]/13"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  router.push("/outils");
                }
              }}
            />
          </div>
        </div>

        {/* nav */}
        <nav className="hidden lg:flex items-center gap-6 text-[14.2px] text-[#5f6368]">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="hover:text-[#1a73e8]"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <div className="relative">
            <button
              onClick={() => setOpen((v) => !v)}
              className="w-10 h-10 rounded-full hover:bg-[#f1f3f4] flex items-center justify-center text-[#5f6368]"
              aria-label="Apps"
            >
              <Grid2X2 size={20} />
            </button>
            {open && (
              <div
                className="absolute right-0 top-12"
                onMouseLeave={() => setOpen(false)}
              >
                <AppSwitcherLight onClose={() => setOpen(false)} />
              </div>
            )}
          </div>
          <Link
            href="/outils"
            className="hidden sm:inline-flex bg-[#1a73e8] text-white text-[13.9px] font-[560] px-4 py-[9px] rounded-full hover:bg-[#1765cc]"
          >
            Ouvrir Tools
          </Link>
          <button
            onClick={() => setMobile(!mobile)}
            className="lg:hidden w-10 h-10 rounded-full hover:bg-[#f1f3f4] flex items-center justify-center"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#5f6368"
              strokeWidth="2"
            >
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
          </button>
        </div>
      </div>

      {/* mobile */}
      {mobile && (
        <div className="lg:hidden border-t border-[#eceff1] px-4 py-3 bg-white">
          <div className="relative mb-3">
            <Search
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#5f6368]"
              size={17}
            />
            <input
              placeholder="Rechercher un outil…"
              className="w-full h-11 pl-10 pr-3 rounded-full border border-[#dadce0] text-[14px]"
            />
          </div>
          <div className="flex flex-wrap gap-4 text-[14px] text-[#3c4043]">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setMobile(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link href="/a-propos" onClick={() => setMobile(false)}>
              À propos
            </Link>
            <Link href="/contact" onClick={() => setMobile(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

// Light app switcher inline
function AppSwitcherLight({ onClose }: { onClose: () => void }) {
  const apps = [
    { n: "Tools", d: "app.scryboo.com", c: "i-blue", sub: "42 outils" },
    { n: "Flow", d: "flow.scryboo.com", c: "i-green", sub: "ERP" },
    { n: "Now", d: "now.scryboo.com", c: "i-purple", sub: "Sites" },
    { n: "AI", d: "ai.scryboo.com", c: "i-yellow", sub: "Lab" },
    { n: "Book", d: "book.scryboo.com", c: "i-teal", sub: "RDV" },
    { n: "Pulse", d: "pulse.scryboo.com", c: "i-red", sub: "Social" },
  ];
  return (
    <div className="w-[340px] rounded-[22px] bg-white border border-[#dadce0] shadow-[0_8px_28px_rgba(60,64,67,0.18)] p-4">
      <div className="text-[12px] text-[#5f6368] px-2 pb-3">
        Écosystème Scryboo
      </div>
      <div className="grid grid-cols-3 gap-3">
        {apps.map((a) => (
          <a
            key={a.n}
            href={`https://${a.d}`}
            className="rounded-[14px] hover:bg-[#f8f9fa] p-3 text-center"
          >
            <div
              className={`w-10 h-10 mx-auto rounded-[12px] flex items-center justify-center text-[14px] font-[600] ${a.c}`}
            >
              {a.n[0]}
            </div>
            <div className="text-[13px] mt-2 text-[#202124]">{a.n}</div>
            <div className="text-[10.8px] text-[#5f6368]">{a.sub}</div>
          </a>
        ))}
      </div>
      <div className="mt-3 pt-3 border-t border-[#eceff1] text-[12.6px] text-[#5f6368] px-2 flex justify-between">
        <span>6 apps • SSO unifié</span>
        <a href="/produits" className="text-[#1a73e8]">
          Voir tout →
        </a>
      </div>
    </div>
  );
}