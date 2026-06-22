// lib/seo.ts
import type { Metadata } from "next";

// Passées en MAJUSCULES pour être de vraies constantes globales propres
export const SITE_NAME = "Scryboo";
export const SITE_DESC =
  "Scryboo est une collection d'outils web gratuits, conçus pour les créateurs et entrepreneurs africains. Notre mission : simplifier votre quotidien numérique avec des solutions rapides, efficaces et accessibles à tous.";

type SeoConfigProps = {
  title: string;
  description: string;
  canonicalPath: string;
  ogImage?: string;
};

const CANON_BASE = "https://scryboo.com";

export function generateSeoObject({
  title,
  description,
  canonicalPath,
  ogImage = "/default-og.png",
}: SeoConfigProps): Metadata {
  
  const cleanPath = canonicalPath.startsWith("/") ? canonicalPath : `/${canonicalPath}`;
  const fullUrl = `${CANON_BASE}${cleanPath}`;
  const fullTitle = `${title} | ${SITE_NAME}`;
  
  // Utilisation de SITE_DESC ici en fallback
  const finalDesc = description || SITE_DESC;

  return {
    title: fullTitle,
    description: finalDesc,
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title: fullTitle,
      description: finalDesc,
      url: fullUrl,
      siteName: SITE_NAME,
      type: "website",
      images: [
        {
          url: ogImage.startsWith("http") ? ogImage : `${CANON_BASE}${ogImage}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: finalDesc,
      images: [ogImage.startsWith("http") ? ogImage : `${CANON_BASE}${ogImage}`],
    },
  };
}