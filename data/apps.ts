export type EcoApp = {
    id: string;
    name: string;
    subtitle: string;
    domain: string;
    url: string;
    description: string;
    features: string[];
    color: "blue" | "green" | "yellow" | "red" | "purple" | "teal";
    badge?: string;
    highlight?: boolean;
};

export const ecoApps: EcoApp[] = [
    {
        id: "tools",
        name: "Scryboo Tools",
        subtitle: "42 outils gratuits",
        domain: "app.scryboo.com",
        url: "https://app.scryboo.com",
        description: "La suite d’utilitaires la plus rapide : PDF, images, texte, dev — 100% local, privacy-by-design.",
        features: ["42 outils", "0 tracking", "< 48kb"],
        color: "blue",
        badge: "Gratuit",
        highlight: true,
    },
    {
        id: "flow",
        name: "Flow",
        subtitle: "ERP & Comptabilité",
        domain: "flow.scryboo.com",
        url: "https://flow.scryboo.com",
        description: "Simplifiez la gestion de votre PME : factures, stock, CRM, comptabilité OHADA — pensé Afrique de l’Ouest.",
        features: ["Factures XOF", "Stock", "Compta OHADA"],
        color: "green",
        badge: "Bientôt",
    },
    {
        id: "now",
        name: "Now",
        subtitle: "Créateur de site",
        domain: "now.scryboo.com",
        url: "https://now.scryboo.com",
        description: "Créateur de site web complet, ultra-rapide. Landing, boutique, blog — hébergé Edge AF/EU.",
        features: ["No-code", "Edge AF", "0€/mois start"],
        color: "purple",
        badge: "Nouveau",
        highlight: true,
    },
    {
        id: "ai",
        name: "Scryboo AI",
        subtitle: "Génération locale",
        domain: "ai.scryboo.com",
        url: "https://ai.scryboo.com",
        description: "Copywriting FR/EN/Wolof, résumés, idées. 50 crédits/mois gratuits.",
        features: ["FR • EN • WO", "RAG natif", "50 crédits/mois"],
        color: "yellow",
    },
    {
        id: "book",
        name: "Book",
        subtitle: "Réservations",
        domain: "book.scryboo.com",
        url: "https://book.scryboo.com",
        description: "Rendez-vous & paiements Orange Money / Wave. Simple et rapide.",
        features: ["OM / Wave", "Calendrier", "SMS"],
        color: "teal",
    },
    {
        id: "pulse",
        name: "Pulse",
        subtitle: "Social toolkit",
        domain: "pulse.scryboo.com",
        url: "https://pulse.scryboo.com",
        description: "Planification, analytics et automatisations pour vos réseaux sociaux.",
        features: ["Planif", "Analytics", "Auto-post"],
        color: "red",
        badge: "Bêta",
    },
];

export const colorMap = {
    blue: { bg: "i-blue", ring: "#d2e3fc", text: "#174ea6" },
    green: { bg: "i-green", ring: "#cce8d0", text: "#137333" },
    yellow: { bg: "i-yellow", ring: "#fde293", text: "#b05a00" },
    red: { bg: "i-red", ring: "#f6c5c0", text: "#c5221f" },
    purple: { bg: "i-purple", ring: "#e1d5f9", text: "#6b2fc4" },
    teal: { bg: "i-teal", ring: "#b2dfdb", text: "#00695c" },
};
