export type Tool = {
  slug: string;
  name: string;
  h1: string;
  tagline: string;
  appPath: string; // path on app.scryboo.com
  category: "PDF" | "Image" | "Texte" | "Dev" | "QR" | "Couleur";
  free: boolean;
  pro?: string;
  description: string;
  long: string;
  features: string[];
  faqs: {q:string,a:string}[];
  keywords: string[];
};

export const tools: Tool[] = [
  {
    slug: "compresser-pdf",
    name: "Compresser PDF",
    h1: "Compresser un PDF gratuitement et sans perte",
    tagline: "100% local • Rapide • Confidentiel",
    appPath: "/compresser-pdf",
    category: "PDF",
    free: true,
    description: "Réduisez le poids de vos PDF en 1 clic, directement dans votre navigateur. Idéal pour les candidatures, WhatsApp, et les connexions lentes.",
    long: "Scryboo Compresser PDF tourne entièrement en WASM, dans votre navigateur. Aucun fichier n'est uploadé. Parfait pour l’Afrique francophone : CV, dossiers, factures — envoyez vos PDF légers sur WhatsApp, Orange Money, ou email, même en 3G.",
    features: ["Compression intelligente", "0 upload • Privacy by design", "Batch illimité", "< 2s par fichier", "Conserve la qualité"],
    faqs: [
      {q:"Est-ce vraiment gratuit ?", a:"Oui. 95% des outils Scryboo sont gratuits pour toujours, comme Google et Facebook. Compresser PDF est illimité, sans compte."},
      {q:"Mes fichiers sont-ils envoyés sur un serveur ?", a:"Non. Tout se passe localement dans votre navigateur. Vos PDF ne quittent jamais votre appareil."},
      {q:"Ça marche en Afrique avec une connexion lente ?", a:"Oui, c'est précisément pour ça qu'on l'a construit. L'outil pèse < 48kb, fonctionne offline après le premier chargement."},
    ],
    keywords: ["compresser pdf", "reduire pdf", "compresseur pdf gratuit", "pdf afrique", "pdf whatsapp"]
  },
  {
    slug: "pdf-en-jpg",
    name: "PDF → JPG",
    h1: "Convertir un PDF en JPG gratuitement",
    tagline: "Haute résolution • Local",
    appPath: "/pdf-to-jpg",
    category: "PDF",
    free: true,
    description: "Transformez chaque page de votre PDF en image JPG nette. Parfait pour partager sur les réseaux.",
    long: "Conversion PDF → JPG 100% locale. Choisissez la résolution, téléchargez en ZIP. Idéal pour CV, affiches, factures à partager sur WhatsApp / Facebook.",
    features: ["300 DPI", "Batch complet", "ZIP auto", "Hors ligne", "Sans filigrane"],
    faqs: [
      {q:"Le convertisseur est-il gratuit ?", a:"Oui, gratuit et illimité. Comme tous les outils de base Scryboo."},
      {q:"La qualité est-elle conservée ?", a:"Oui, export jusqu'à 300 DPI. Parfait pour l'impression."},
    ],
    keywords: ["pdf en jpg", "convertir pdf jpg", "pdf to jpg gratuit"]
  },
  {
    slug: "fusionner-pdf",
    name: "Fusionner PDF",
    h1: "Fusionner des PDF en ligne, gratuit",
    tagline: "Assemblez en 3s",
    appPath: "/merge-pdf",
    category: "PDF",
    free: true,
    description: "Glissez-déposez vos PDF, réorganisez, fusionnez. 100% local.",
    long: "Fusionnez CV + lettre de motivation + diplômes en un seul PDF propre. Sans upload, sans pub.",
    features: ["Drag & drop", "Réordonner", "Illimité", "Local-first"],
    faqs: [{q:"Limite de taille ?", a:"Non. Comme tout tourne en local, la limite c'est votre ordinateur."}],
    keywords: ["fusionner pdf", "merge pdf gratuit", "assembler pdf"]
  },
  {
    slug: "compresser-image",
    name: "Compresser Image",
    h1: "Compresser des images JPG / PNG / WebP",
    tagline: "200 images en 4s",
    appPath: "/compress-image",
    category: "Image",
    free: true,
    description: "Optimisez vos photos pour site web, boutique en ligne, WhatsApp Business. Sans perte visible.",
    long: "Compresseur WASM ultra-rapide. Batch de 200 images en 4 secondes. Parfait pour les e-commerçants en Afrique francophone.",
    features: ["JPG/PNG/WebP/AVIF", "Batch 200+", "Glisser-déposer", "Aperçu avant/après"],
    faqs: [{q:"Perte de qualité ?", a:"Compression intelligente. Visuellement identique à -70% de poids."}],
    keywords: ["compresser image", "reduire photo", "optimiser image web"]
  },
  {
    slug: "redimensionner-image",
    name: "Redimensionner Image",
    h1: "Redimensionner une image en ligne",
    tagline: "Pixels exacts",
    appPath: "/resize",
    category: "Image",
    free: true,
    description: "Redimensionnez pour Instagram, WhatsApp, CV, e-commerce. Préréglages inclus.",
    long: "Préréglages FR/Afrique : carte d'identité, passeport, Instagram, WhatsApp Status. Export net.",
    features: ["Préréglages sociaux", "Ratio verrouillable", "HD Export"],
    faqs: [],
    keywords: ["redimensionner image", "resize photo"]
  },
  {
    slug: "supprimer-arriere-plan",
    name: "Supprimer arrière-plan",
    h1: "Supprimer l'arrière-plan d'une photo",
    tagline: "IA locale",
    appPath: "/remove-bg",
    category: "Image",
    free: true,
    pro: "HD Pro",
    description: "Détourez vos produits et portraits en 1 clic. Modèle léger, tourne dans le navigateur.",
    long: "Remove BG Scryboo : idéal pour boutiques WhatsApp / Jumia. Fond transparent PNG instantané.",
    features: ["IA on-device", "PNG transparent", "Batch", "E-commerce ready"],
    faqs: [],
    keywords: ["supprimer fond photo", "remove background", "detourage"]
  },
  {
    slug: "convertir-jpg-pdf",
    name: "JPG en PDF",
    h1: "Convertir JPG en PDF gratuitement",
    tagline: "Photos → PDF",
    appPath: "/jpg-to-pdf",
    category: "Image",
    free: true,
    description: "Transformez vos photos / scans en un PDF propre. Parfait pour les dossiers administratifs.",
    long: "JPG → PDF : assemblez vos scans de CNI, diplômes, reçus. A4 auto, qualité maximale.",
    features: ["Multi-pages", "A4 auto", "Compression auto"],
    faqs: [],
    keywords: ["jpg en pdf", "photo en pdf", "convertir image pdf"]
  },
  {
    slug: "qr-generator",
    name: "Générateur QR",
    h1: "Générateur de QR Code gratuit",
    tagline: "Logo • Couleurs • UTM",
    appPath: "/qr",
    category: "QR",
    free: true,
    description: "QR Codes avec logo, couleurs de marque, tracking UTM. Téléchargement SVG/PNG.",
    long: "QR Generator Scryboo : parfait pour menus, paiements Wave / Orange Money, cartes de visite en Afrique.",
    features: ["Logo intégré", "Couleurs custom", "SVG vectoriel", "UTM tracking"],
    faqs: [],
    keywords: ["qr code gratuit", "générateur qr", "qr code logo"]
  },
  {
    slug: "formatter-json",
    name: "Formatter JSON",
    h1: "Formatter / Valider JSON en ligne",
    tagline: "Dev tool",
    appPath: "/json",
    category: "Dev",
    free: true,
    description: "Formatez, validez, minifiez votre JSON instantanément. 100% local.",
    long: "JSON Formatter ultra-rapide pour développeurs. Coloration, tree view, erreurs claires.",
    features: ["Validation", "Minify", "Tree view", "Copier 1-clic"],
    faqs: [],
    keywords: ["formatter json", "json beautifier", "valider json"]
  },
  {
    slug: "csv-en-json",
    name: "CSV → JSON",
    h1: "Convertir CSV en JSON",
    tagline: "Dev tool",
    appPath: "/csv-to-json",
    category: "Dev",
    free: true,
    description: "Convertissez vos fichiers CSV en JSON propre. Détection auto des séparateurs.",
    long: "CSV → JSON : parfait pour importer des données dans vos apps.",
    features: ["Auto-détection ; ,", "UTF-8", "Aperçu live"],
    faqs: [],
    keywords: ["csv en json", "convertir csv json"]
  },
  {
    slug: "compteur-mots",
    name: "Compteur de mots",
    h1: "Compteur de mots et caractères en ligne",
    tagline: "Texte",
    appPath: "/word-count",
    category: "Texte",
    free: true,
    description: "Comptez mots, caractères, paragraphes, temps de lecture. FR/EN/WO.",
    long: "Idéal pour CV, lettres, posts LinkedIn. Temps de lecture estimé.",
    features: ["Mots / Caractères", "Temps lecture", "Sans tracking"],
    faqs: [],
    keywords: ["compteur mots", "compter caractères", "word count"]
  },
  {
    slug: "generateur-bio-ia",
    name: "Générateur de Bio IA",
    h1: "Générateur de Bio Instagram / LinkedIn IA",
    tagline: "Scryboo AI",
    appPath: "/ai/bio",
    category: "Texte",
    free: true,
    pro: "50 crédits/mois gratuits",
    description: "Générez des bios percutantes FR/EN/Wolof pour vos réseaux. Localisé Afrique.",
    long: "Scryboo AI Bio : 3 variantes en 2s. Ton pro, fun, local. 50 crédits gratuits / mois.",
    features: ["FR / EN / WO", "3 tons", "Copier 1-clic", "Gratuit 50/mois"],
    faqs: [
      {q:"C'est gratuit ?", a:"Oui, 50 générations gratuites par mois. Comme Google : l'accès de base est libre. Le Pro débloque l'illimité."}
    ],
    keywords: ["générateur bio ia", "bio instagram", "bio linkedin ia"]
  },
];

export const getTool = (slug: string) => tools.find(t => t.slug === slug);

export const toolsByCategory = tools.reduce((acc, t) => {
  (acc[t.category] = acc[t.category] || []).push(t);
  return acc;
}, {} as Record<string, Tool[]>);
