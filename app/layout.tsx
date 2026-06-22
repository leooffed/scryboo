import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script"; // Importation pour Plausible propre

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.scryboo.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  // 1. Titres dynamiques (Le template injectera automatiquement le H1 des sous-pages)
  title: {
    default: "Scryboo | L'écosystème technologique de votre succès digital",
    template: "%s | Scryboo",
  },

  description:
    "Scryboo conçoit des applications rapides, sans friction et pensées pour la productivité. Accédez à notre suite d'outils web gratuits exécutés directement dans votre navigateur. Innovation, sécurité locale et solutions adaptées aux professionnels en Afrique francophone et au-delà.",

  keywords: [
    "scryboo",
    "scryboo tools",
    "startup tech afrique",
    "écosystème technologique",
    "applications productivité",
    "generateur de QR code",
    "convertisseur PDF en Word",
    "generateur de website pour votre entreprise",
    "generateur de CV en ligne",
    "outils de compression d'images",
    "outils de conversion de fichiers",
    "calculateur de prix pour les freelances",
    "creation d'une facture",
    "outils web gratuits",
    "conversion pdf sans limite",
    "compression image navigateur",
    "outils ia gratuits",
    "zéro installation",
    "traitement local navigateur",
    "outils francophones",
    "générateur cv adapté",
    "calculateur tva cfa",
    "Outils gratuits CV",
    "Meilleurs outils pour CV",
    "Comment Structurer une demande d'emplois CV",
  ],

  authors: [{ name: "Scryboo Engineering", url: SITE_URL }],
  creator: "Scryboo",

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

  alternates: {
    canonical: SITE_URL,
    languages: {
      "fr-FR": `${SITE_URL}/fr`,
      "en-US": `${SITE_URL}/en`,
    },
  },

  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    title: "Scryboo | Innover pour propulser vos ideas",
    description:
      "Découvrez Scryboo Tools et notre écosystème d'applications. Des outils professionnels gratuits, exécutés instantanément dans votre navigateur pour une confidentialité totale.",
    siteName: "Scryboo",
    images: [
      {
        url: "/og-image-scryboo.png",
        width: 1200,
        height: 630,
        alt: "Écosystème Technologique Scryboo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Scryboo | Outils Web & Applications Innovantes",
    description:
      "La suite d'outils qui accélère votre quotidien numérique. Gratuit, rapide et respectueux de vos données.",
    images: ["/og-image-scryboo.png"],
    creator: "@ScrybooHQ",
  },

  icons: {
    shortcut: "/favicon.svg",
    icon: [{ url: "/favicon.svg" }],
    apple: [{ url: "/favicon.svg", sizes: "180x180", type: "image/svg" }],
  },
  other: {
    "google-adsense-account": "ca-pub-3686586093852095",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // FIX 1: Remplacement de "en" par "fr" pour correspondre au marché et au SEO ciblé
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#08080d]">
        {/* OPTIMISATION: Intégration propre de Plausible via Next.js Script si activé à l'avenir */}
        {/* <Script 
          src="https://plausible.io/js/pa-85LN_PC5JgRe6vTxDXxly.js" 
          data-domain="scryboo.com"
          strategy="afterInteractive" 
        /> */}

        {/* FIX 2: Le composant Analytics vit désormais obligatoirement dans le body */}
        <Analytics />

        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
