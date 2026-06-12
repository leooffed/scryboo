import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/', // Optionnel : si tu as des pages que tu veux cacher
        },
        // On indique aux robots l'adresse exacte de ton sitemap
        sitemap: 'https://scryboo.com/sitemap.xml',
    };
}