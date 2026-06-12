import { MetadataRoute } from 'next';

// 1. Centralisation de la configuration de base
const BASE_URL = 'https://scryboo.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const currentDate = new Date();

    // 2. Pages statiques de ton site
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: BASE_URL,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 1.0
        },
        {
            url: `${BASE_URL}/services`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8
        },
        {
            url: `${BASE_URL}/contact`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7
        },
        {
            url: `${BASE_URL}/about-us`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6
        },
        {
            url: `${BASE_URL}/mention-legal`,
            lastModified: currentDate,
            changeFrequency: 'yearly',
            priority: 0.3 // 💡 Conseil SEO : baisse la priorité des pages légales pour valoriser tes services
        },
    ];

    // 3. Structure prête pour tes projets dynamiques (Portfolio, Blog, etc.)
    // Décommente ce bloc dès que tu branches ton CMS ou ton API !
    /*
    try {
      const projets = await getProjets(); // Exemple de fonction fetch
      
      const dynamicPages: MetadataRoute.Sitemap = projets.map((p) => ({
        url: `${BASE_URL}/portfolio/${p.slug}`,
        lastModified: p.updatedAt ? new Date(p.updatedAt) : currentDate,
        changeFrequency: 'monthly',
        priority: 0.8,
      }));
  
      return [...staticPages, ...dynamicPages];
    } catch (error) {
      console.error("Erreur lors de la génération du sitemap dynamique :", error);
      return staticPages; // Sécurité : si l'API crash, on livre quand même le sitemap statique
    }
    */

    return staticPages;
}