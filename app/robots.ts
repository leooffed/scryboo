import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/private/',
                    '/api/',          // Évite l'indexation des routes API
                    '/_next/',        // Fichiers internes Next.js
                ],
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
                disallow: ['/private/', '/api/'],
            },
            {
                userAgent: 'Bingbot',
                allow: '/',
                disallow: ['/private/', '/api/'],
            },
        ],
        // Multiples sitemaps pour une découverte complète de l'écosystème
        sitemap: [
            'https://scryboo.com/sitemap.xml',           // Sitemap principal
            'https://scryboo.com/sitemap-tools.xml',     // Pages outils SEO
            'https://scryboo.com/sitemap-blog.xml',      // Blog & journal
            'https://app.scryboo.com/sitemap.xml',       // Sous‑domaine Tools
            'https://now.scryboo.com/sitemap.xml',       // Sous‑domaine Now
        ],
        // Optionnel : crawl delay pour les robots qui le respectent (Google ignore)

        // crawlDelay: 10,
    };
}