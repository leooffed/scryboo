// components/Footer.tsx
import Link from "next/link";
import { tools } from "@/data/tools";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#f8f9fa] border-t border-[#dadce0] text-[#5f6368]">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-10 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 text-[14px]">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-[10px] bg-[#1a73e8] text-white flex items-center justify-center font-display text-[16px]">
                S
              </div>
              <span className="text-[18px] font-[600] text-[#202124]">
                scryboo
              </span>
            </div>
            <p className="mt-3 text-[13.8px] leading-relaxed max-w-sm">
              L’écosystème d’applications utiles : Tools (42 outils gratuits),
              Flow ERP & comptabilité, Now créateur de site, AI, Book, Pulse.
              95% gratuit, Innovante pour vous.
            </p>
          </div>

          <div>
            <div className="text-[13px] font-[600] text-[#202124] mb-3">
              Produits
            </div>
            <ul className="space-y-2 text-[13.6px]">
              <li>
                <a href="https://app.scryboo.com" className="hover:text-[#1a73e8]">
                  Scryboo Tools
                </a>
              </li>
              <li>
                <a href="https://flow.scryboo.com" className="hover:text-[#1a73e8]">
                  Flow ERP
                </a>
              </li>
              <li>
                <a href="https://now.scryboo.com" className="hover:text-[#1a73e8]">
                  Now Sites
                </a>
              </li>
              <li>
                <a href="https://ai.scryboo.com" className="hover:text-[#1a73e8]">
                  Scryboo AI
                </a>
              </li>
              <li>
                <a href="https://book.scryboo.com" className="hover:text-[#1a73e8]">
                  Book
                </a>
              </li>
              <li>
                <a href="https://pulse.scryboo.com" className="hover:text-[#1a73e8]">
                  Pulse
                </a>
              </li>
              <li>
                <Link href="/outils" className="hover:text-[#1a73e8]">
                  Tous les outils →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-[13px] font-[600] text-[#202124] mb-3">
              Entreprise
            </div>
            <ul className="space-y-2 text-[13.6px]">
              <li>
                <Link href="/vision" className="hover:text-[#1a73e8]">
                  Vision
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="hover:text-[#1a73e8]">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/carrieres" className="hover:text-[#1a73e8]">
                  Carrières
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#1a73e8]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-[13px] font-[600] text-[#202124] mb-3">
              Légal
            </div>
            <ul className="space-y-2 text-[13.6px]">
              <li>
                <Link href="/confidentialite" className="hover:text-[#1a73e8]">
                  Confidentialité
                </Link>
              </li>
              <li>
                <Link href="/conditions" className="hover:text-[#1a73e8]">
                  Conditions
                </Link>
              </li>
              <li>
                <Link href="/securite" className="hover:text-[#1a73e8]">
                  Sécurité
                </Link>
              </li>
              <li>
                <Link href="/statut" className="hover:text-[#1a73e8]">
                  Statut
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* tools SEO links */}
        <div className="mt-10 pt-6 border-t border-[#e8eaed] text-[12.6px] leading-relaxed">
          <div className="flex flex-wrap gap-x-4 gap-y-1.5">
            {tools.map((t) => (
              <Link
                key={t.slug}
                href={`/outils/${t.slug}`}
                className="hover:text-[#1a73e8]"
              >
                {t.name}
              </Link>
            ))}
          </div>
          <p className="mt-3 text-[#70757a]">
            Pages SEO : scryboo.com/outils/… → Lancer → app.scryboo.com —
            Stratégie Pont. 95% gratuit.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-[12.5px] text-[#70757a] border-t border-[#e8eaed] pt-5">
          <div>© {year} Scryboo · Africa • Paris · 95% gratuit</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#1a73e8]">
              X
            </a>
            <a href="#" className="hover:text-[#1a73e8]">
              GitHub
            </a>
            <a href="mailto:hello@scryboo.com" className="hover:text-[#1a73e8]">
              hello@scryboo.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}