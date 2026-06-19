'use client'

import { tools } from "@/data/tools";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-[#09090f] border-t border-white/[0.085]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="size-9 rounded-[12px] bg-[#eeeff6] text-[#12131b] flex items-center justify-center font-display text-[18px]">
                S
              </div>
              <span className="text-[17.5px] tracking-[-0.012em] font-[600] text-zinc-100">
                scryboo
              </span>
            </Link>
            <p className="mt-4 text-[14.4px] text-zinc-400 max-w-sm leading-relaxed">
              L’écosystème technologique qui propulse vos idées. Tools, AI, ERP
              — rapides, locaux, privés. 95% gratuit, comme Google et Facebook.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 flex gap-2 max-w-sm"
            >
              <input
                placeholder="votre@email.com"
                type="email"
                className="flex-1 rounded-full bg-white/[0.042] border border-white/[0.12] px-4 py-2.5 text-[13.4px] text-zinc-200 placeholder-zinc-500 outline-none focus:border-white/[0.28]"
              />
              <button className="rounded-full bg-white text-zinc-900 text-[13.2px] font-[600] px-4 py-2.5 hover:bg-zinc-100">
                S’abonner
              </button>
            </form>
            <p className="mt-2 text-[11.8px] text-zinc-500">
              Journal mensuel. Posté par l’admin. 0 spam.
            </p>
          </div>

          {/* Écosystème */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-[12.2px] font-[620] text-zinc-200 mb-4">
              Écosystème
            </div>
            <ul className="space-y-3 text-[13.6px] text-zinc-400">
              <li>
                <Link
                  href="https://app.scryboo.com"
                  className="hover:text-zinc-100"
                >
                  Scryboo Tools
                </Link>
              </li>
              <li>
                <Link
                  href="https://ai.scryboo.com"
                  className="hover:text-zinc-100"
                >
                  Scryboo AI
                </Link>
              </li>
              <li>
                <Link
                  href="https://flow.scryboo.com"
                  className="hover:text-zinc-100"
                >
                  Flow ERP
                </Link>
              </li>
              <li>
                <Link
                  href="https://book.scryboo.com"
                  className="hover:text-zinc-100"
                >
                  Book
                </Link>
              </li>
              <li>
                <Link
                  href="https://pulse.scryboo.com"
                  className="hover:text-zinc-100"
                >
                  Pulse
                </Link>
              </li>
              <li>
                <Link
                  href="https://vault.scryboo.com"
                  className="hover:text-zinc-100"
                >
                  Vault
                </Link>
              </li>
            </ul>
          </div>

          {/* Entreprise */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-[12.2px] font-[620] text-zinc-200 mb-4">
              Entreprise
            </div>
            <ul className="space-y-3 text-[13.6px] text-zinc-400">
              <li>
                <Link href="/vision" className="hover:text-zinc-100">
                  Vision
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-zinc-100">
                  Tools
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-zinc-100">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/carrieres" className="hover:text-zinc-100">
                  Carrières{" "}
                  <span className="text-[11px] text-emerald-300/90">2</span>
                </Link>
              </li>
              <li>
                <Link href="/journal" className="hover:text-zinc-100">
                  Journal
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-zinc-100">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="text-[12.2px] font-[620] text-zinc-200 mt-8 mb-3">
              Légal
            </div>
            <ul className="space-y-2.5 text-[13.4px] text-zinc-400">
              <li>
                <Link href="/confidential" className="hover:text-zinc-100">
                  Confidentialité
                </Link>
              </li>
              <li>
                <Link href="/conditions" className="hover:text-zinc-100">
                  Conditions
                </Link>
              </li>
              <li>
                <Link href="/securite" className="hover:text-zinc-100">
                  Sécurité
                </Link>
              </li>
              <li>
                <Link href="/statut" className="hover:text-zinc-100">
                  Statut
                </Link>
              </li>
            </ul>
          </div>

          {/* Outils SEO - Maillage interne */}
          <div className="col-span-2 md:col-span-4">
            <div className="text-[12.2px] font-[620] text-zinc-200 mb-4">
              Outils populaires — SEO
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-[13.35px] text-zinc-400">
              {tools.map((t) => (
                <Link
                  key={t.slug}
                  href={`/outils/${t.slug}`}
                  className="hover:text-zinc-100"
                >
                  {t.name}
                </Link>
              ))}
            </div>
            <div className="mt-4 text-[12.3px] text-zinc-500">
              Pages SEO : scryboo.com/outils/… → redirigent vers app.scryboo.com
              — Stratégie Pont.
            </div>
          </div>
        </div>

        {/* Big SEO footer links */}
        <div className="mt-14 pt-8 border-t border-white/[0.082] text-[12.7px] text-zinc-500 leading-relaxed">
          <div className="flex flex-wrap gap-x-4 gap-y-1.5">
            {tools.map((t) => (
              <Link
                key={t.slug}
                href={`/outils/${t.slug}`}
                className="hover:text-zinc-300"
              >
                {t.h1.split(" — ")[0] || t.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-7 pt-7 border-t border-white/[0.082] flex flex-col md:flex-row items-start md:items-center justify-between gap-5 text-[12.7px] text-zinc-500">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span>© {year} Scryboo SAS</span>
            <span className="hidden sm:inline text-zinc-600">•</span>
            <span>Made in Africa • Cameroon</span>
            <span className="hidden sm:inline text-zinc-600">•</span>
            <span>95% gratuit • avec pub</span>
          </div>
          <div className="flex items-center gap-5 text-zinc-400">
            <Link href="#" className="hover:text-zinc-200">
              X
            </Link>
            <Link href="#" className="hover:text-zinc-200">
              GitHub
            </Link>
            <Link href="#" className="hover:text-zinc-200">
              LinkedIn
            </Link>
            <Link
              href="mailto:hello@scryboo.com"
              className="hover:text-zinc-200"
            >
              hello@scryboo.com
            </Link>
          </div>
        </div>

        <div className="mt-6 text-[11.8px] text-zinc-500 leading-relaxed max-w-5xl">
          Scryboo — suite d’applications web rapides et respectueuses de la vie
          privée. Outils PDF, images, texte, AI locale, ERP, réservation. 95%
          des outils sont gratuits, avec un compte et avec pub — à la manière de
          Google et Facebook. Hébergé Edge AF/EU. RGPD. Toutes nos pages outils
          sont sur <b className="text-zinc-400">scryboo.com/outils/…</b> pour le
          SEO, et redirigent vers{" "}
          <b className="text-zinc-400">app.scryboo.com</b>.
        </div>
      </div>
    </footer>
  );
}
