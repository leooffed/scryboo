'use client'

import { Zap, Globe2, Lock } from "lucide-react";

const items = [
  { Icon: Zap, title: "Vitesse extrême", text: "Edge-first, <48kb / outil, P95 < 92ms. Instantané, même en 3G.", color: "i-blue" },
  { Icon: Globe2, title: "Adaptation locale", text: "Pensé Afrique francophone : OM / Wave, XOF, FR/EN/WO.", color: "i-green" },
  { Icon: Lock, title: "Privacy by design", text: "100% local WASM. 0 tracking. 0 pub. Vos fichiers restent chez vous.", color: "i-yellow" },
];

export default function Innovation() {
  return (
    <section id="infrastructure" className="bg-[#f8f9fa] border-y border-[#eceff1] py-16">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-10">
        <h2 className="text-[26px] sm:text-[30px] font-[650] text-[#202124] tracking-[-0.017em]">Pourquoi Scryboo ?</h2>
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          {items.map(it => (
            <div key={it.title} className="bg-white rounded-[18px] border border-[#dadce0] p-6">
              <div className={`w-11 h-11 rounded-[13px] flex items-center justify-center ${it.color} mb-4`}>
                <it.Icon size={20} />
              </div>
              <div className="text-[17.5px] font-[620] text-[#202124]">{it.title}</div>
              <p className="text-[14.2px] text-[#5f6368] mt-2 leading-relaxed">{it.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 text-[13.6px] text-[#5f6368]">Rust / WASM • Edge NA • EU • AF • 99.98% uptime • RGPD</div>
      </div>
    </section>
  );
}
