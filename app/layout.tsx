import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.scryboo.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Scryboo | L’écosystème technologique de votre succès digital",
    template: "%s | Scryboo",
  },

  description:
    "Scryboo conçoit des applications rapides, sans friction et pensées pour la productivité. Outils web gratuits exécutés directement dans votre navigateur. Innovation locale, sécurité et solutions adaptées à l’Afrique francophone.",

  keywords: [
    "scryboo",
    "Scryboo",
    "scryboo tools",
    "startup tech afrique",
    "applications productivité",
    "outils web gratuits",
    "CV en ligne",
    "générateur CV",
    "compression PDF",
    "conversion PDF Word",
    "créateur site web",
    "générateur QR code",
    "calculateur TVA CFA",
    "outils IA gratuits",
    "traitement local navigateur",
    "confidentialité",
    "sans publicité",
    "Afrique francophone",
  ],

  authors: [{ name: "Scryboo Engineering", url: SITE_URL }],
  creator: "Scryboo",
  publisher: "Scryboo",

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
      "fr-FR": SITE_URL,
      "en-US": `${SITE_URL}/en`,
    },
  },

  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    title: "Scryboo | Innover pour propulser vos idées",
    description:
      "Découvrez Scryboo Tools et notre écosystème d’applications. Des outils professionnels gratuits, exécutés dans votre navigateur pour une confidentialité totale.",
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
      "La suite d’outils qui accélère votre quotidien numérique. Gratuit, rapide et respectueux de vos données.",
    images: ["/og-image-scryboo.png"],
    creator: "@ScrybooHQ",
  },

  icons: {
    shortcut: "/favicon.svg",
    icon: [{ url: "/favicon.svg" }],
    apple: [{ url: "/favicon.svg", sizes: "180x180", type: "image/svg" }],
  },

  // Balises supplémentaires utiles
  other: {
    "google-adsense-account": "ca-pub-3686586093852095",
    "google-site-verification": "l9BtoazzaNN2wEZBVgSC3ADVJC-bfxLnYMqKdbi2R-k",
    "theme-color": "#08080d",
    "application-name": "Scryboo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Google AdSense – chargement asynchrone propre */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3686586093852095"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        {/* Plausible Analytics (actif une fois décommenté) */}
        {/* <Script
          src="https://plausible.io/js/script.js"
          data-domain="scryboo.com"
          strategy="afterInteractive"
        /> */}
      </head>
      <body className="min-h-full flex flex-col bg-[#08080d]">
        {/* Données structurées JSON‑LD pour l’organisation (marque forte) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Scryboo",
              alternateName: "Scryboo Tools",
              url: SITE_URL,
              logo: `${SITE_URL}/favicon.svg`,
              sameAs: [
                "https://twitter.com/ScrybooHQ",
                "https://linkedin.com/company/scryboo",
                "https://github.com/scryboo",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                email: "hello@scryboo.com",
                contactType: "customer service",
              },
            }),
          }}
        />

        <Analytics />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}