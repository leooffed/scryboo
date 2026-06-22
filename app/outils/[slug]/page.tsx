import { Metadata } from "next";
import ToolLandingPage from "@/components/pages/ToolsPage";
import { generateSeoObject } from "@/lib/seo";
import { getTool } from "@/data/tools";

// Le type officiel exigé par Next.js
type PageProps = {
  params: Promise<{ slug: string }>;
};

// Next.js gère la Promise ici pour le SEO, c'est parfait
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getTool(slug);

  if (!tool) {
    return { title: "Outil introuvable | Scryboo" };
  }

  return generateSeoObject({
    title: `${tool.name} — Outil En Ligne 100% Gratuit`,
    description: tool.description,
    canonicalPath: `/outils/${tool.slug}`,
  });
}

// On passe directement la Promise 'params' sans l'unwrapper ici
export default function Page({ params }: PageProps) {
  return (
    <div>
      <ToolLandingPage params={params} />
    </div>
  );
}
