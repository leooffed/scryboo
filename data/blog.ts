export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  toolSlug?: string;
  content: string;
};

export const posts: BlogPost[] = [
  {
    slug: "compresser-pdf-cv-whatsapp",
    title: "Comment alléger son CV PDF pour postuler sur WhatsApp",
    excerpt: "Votre CV fait 8 Mo ? Voici comment le passer sous 500 Ko sans perte, 100% gratuit.",
    date: "2026-02-12",
    toolSlug: "compresser-pdf",
    content: "En Afrique francophone, beaucoup de candidatures passent par WhatsApp. Un PDF lourd échoue souvent. Avec Scryboo Compresser PDF, glissez votre CV, il est réduit instantanément, sans upload. 100% gratuit, comme Google Docs."
  },
  {
    slug: "optimiser-photos-boutique-en-ligne",
    title: "Optimiser 200 photos produit en 4 secondes",
    excerpt: "Guide e-commerce : compresser en batch pour Jumia, WhatsApp Business, Shopify.",
    date: "2026-02-05",
    toolSlug: "compresser-image",
    content: "Notre compresseur WASM tourne dans votre navigateur. 200 images en 4s. Idéal pour les boutiques à Dakar, Abidjan, Douala."
  },
  {
    slug: "bio-instagram-ia-francophone",
    title: "Générateur de Bio IA localisé FR / Wolof",
    excerpt: "3 variantes de bio en 2s. Ton pro, fun, local. 50 crédits gratuits / mois.",
    date: "2026-01-29",
    toolSlug: "generateur-bio-ia",
    content: "Scryboo AI comprend le contexte ouest-africain. Générez des bios Instagram / LinkedIn qui sonnent vrai."
  },
  {
    slug: "qr-code-orange-money-wave",
    title: "Créer un QR Code de paiement Orange Money / Wave",
    excerpt: "QR avec logo, couleurs, tracking UTM. Gratuit.",
    date: "2026-01-22",
    toolSlug: "qr-generator",
    content: "Générez un QR Code pour vos paiements mobile money. Téléchargez en SVG pour l'impression."
  },
];

export const getPost = (slug:string)=> posts.find(p=>p.slug===slug);