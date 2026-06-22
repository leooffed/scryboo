import { Metadata } from "next";
import BlogPostPage from "@/components/pages/JournalSlug";
import { generateSeoObject } from "@/lib/seo";
import { getPost } from "@/data/blog";

// 1. Définition stricte du type attendu par Next.js 15
type PageProps = {
  params: Promise<{ slug: string }>;
};

// 2. Gestion du SEO au niveau du routeur de Next.js
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = slug ? getPost(slug) : undefined;

  if (!post) {
    return { title: "Page non trouvée | Scryboo" };
  }

  return generateSeoObject({
    title: `${post.title} — Journal`,
    description: post.excerpt,
    canonicalPath: `/journal/${post.slug}`,
  });
}

// 3. Ton composant passe-plat qui transmet 'params' à ton UI
export default function Page({ params }: PageProps) {
  return (
    <div>
      {/* On injecte la Promise params pour que BlogPostPage puisse faire son await */}
      <BlogPostPage params={params} />
    </div>
  );
}
