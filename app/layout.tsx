import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://scryboo.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  // 1. Titres dynamiques (L'accroche premium de la maison mère)
  title: {
    default: "Scryboo | L'écosystème technologique de votre succès digital",
    template: "%s | Scryboo",
  },

  // 2. Descriptions percutantes (Met en avant la rapidité, l'absence de serveur côté client et la cible)
  description:
    "Scryboo conçoit des applications rapides, sans friction et pensées pour la productivité. Accédez à notre suite d'outils web gratuits exécutés directement dans votre navigateur. Innovation, sécurité locale et solutions adaptées aux professionnels en Afrique francophone et au-delà.",

  // 3. Mots-clés officiels (Mélange de la marque, des outils et du positionnement local)
  keywords: [
    // Marque & Écosystème
    "scryboo",
    "scryboo tools",
    "startup tech afrique",
    "écosystème technologique",
    "applications productivité",
    "generateur de QR code",
    "convertisseur PDF en Word",
    "generateur de website pour votre entreprise",
    "generateur de CV en ligne",
    "calculateur tva cfa",
    "outils de compression d'images",
    "outils de conversion de fichiers",
    "calculateur de prix pour les freelances",
    "creation d'une facture",
    // Outils & Caractéristiques techniques
    "outils web gratuits",
    "conversion pdf sans limite",
    "compression image navigateur",
    "outils ia gratuits",
    "zéro installation",
    "traitement local navigateur",
    // Positionnement marché
    "outils francophones",
    "générateur cv adapté",
    "calculateur tva cfa",
  ],

  authors: [{ name: "Scryboo Engineering", url: SITE_URL }],
  creator: "Scryboo",

  // 4. Indexation par les robots de Google (Ouverture totale pour la vitrine)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // 5. Gestion du multilingue (Optionnel mais recommandé si tu vises FR et EN à terme)
  alternates: {
    canonical: SITE_URL,
    languages: {
      "fr-FR": `${SITE_URL}/fr`,
      "en-US": `${SITE_URL}/en`,
    },
  },

  // 6. Open Graph (Ce qui s'affiche quand on partage scryboo.com sur LinkedIn, WhatsApp, etc.)
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    title: "Scryboo | Innover pour propulser vos idées",
    description:
      "Découvrez Scryboo Tools et notre écosystème d'applications. Des outils professionnels gratuits, exécutés instantanément dans votre navigateur pour une confidentialité totale.",
    siteName: "Scryboo",
    images: [
      {
        url: "/og-image-scryboo.png", // Crée un beau visuel corporate sombre/premium avec le logo Scryboo
        width: 1200,
        height: 630,
        alt: "Écosystème Technologique Scryboo",
      },
    ],
  },

  // 7. Twitter / X Cards
  twitter: {
    card: "summary_large_image",
    title: "Scryboo | Outils Web & Applications Innovantes",
    description:
      "La suite d'outils qui accélère votre quotidien numérique. Gratuit, rapide et respectueux de vos données.",
    images: ["/og-image-scryboo.png"],
    creator: "@ScrybooHQ", // Mets le futur compte de la startup ici
  },

  // 8. Icônes de l'application
  icons: {
    shortcut: "/scryboo.png",
    icon: [{ url: "/favicon.svg" }],
    apple: [{ url: "/favicon.svg", sizes: "180x180", type: "image/svg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      {/* <head>
        <script
          async
          src="https://plausible.io/js/pa-85LN_PC5JgRe6vTxDXxly.js"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.plausible = window.plausible || function() {
              (window.plausible.q = window.plausible.q || []).push(arguments)
            };
            window.plausible.init = window.plausible.init || function(i) {
              (window.plausible.o = i || {})
            };
            window.plausible.init();`,
          }}
        />
      </head> */}
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
