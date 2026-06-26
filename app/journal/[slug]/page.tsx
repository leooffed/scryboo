import { Metadata } from "next";
import BlogPostPage from "@/components/pages/JournalSlug";
import { generateSeoObject } from "@/lib/seo";
import { getPost } from "@/data/blog";

type PageProps = {
  params: Promise<{ slug: string }>;
};

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

// ✅ Page asynchrone qui récupère le slug avant de le passer
export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  return <BlogPostPage slug={slug} />;
}
