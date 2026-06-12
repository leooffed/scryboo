import { useParams } from "next/navigation";
import { getPost } from "@/data/blog";
import { getTool } from "@/data/tools";
import { useSEO } from "@/lib/seo";
import Link from "next/link";


export default function BlogPostPage() {
    const { slug } = useParams();
    const slugParam = Array.isArray(slug) ? slug[0] : slug;
    const post = slugParam ? getPost(slugParam) : undefined;
  if (!post)
    return <div className="min-h-screen bg-[#08080d] text-white p-10">404</div>;
  const tool = post.toolSlug ? getTool(post.toolSlug) : undefined;

  useSEO({
    title: post.title + " — Journal Scryboo",
    description: post.excerpt,
    canonical: `/journal/${post.slug}`,
  });

  return (
    <div className="min-h-screen bg-[#08080d] text-zinc-100">
      <main className="pt-32 max-w-3xl mx-auto px-6 sm:px-10 pb-24">
        <Link
          href="/journal"
          className="text-[13.3px] text-zinc-400 hover:text-zinc-200"
        >
          ← Journal
        </Link>
        <h1 className="font-display text-[36px] md:text-[48px] tracking-[-0.022em] mt-4 text-zinc-100">
          {post.title}
        </h1>
        <div className="text-[13.2px] text-zinc-400 mt-2">
          {new Date(post.date).toLocaleDateString("fr-FR", {
            dateStyle: "long",
          })}{" "}
          · Admin Scryboo
        </div>
        <p className="text-[17.5px] text-zinc-300 mt-7 leading-relaxed">
          {post.content}
        </p>

        {tool && (
          <div className="mt-10 rounded-[20px] border border-white/[0.12] bg-white/[0.027] p-6">
            <div className="text-[13.6px] text-zinc-300">Outil lié</div>
            <div className="text-[20px] font-[620] mt-1">{tool.name}</div>
            <p className="text-zinc-400 mt-2 text-[14.5px]">
              {tool.description}
            </p>
            <div className="mt-4 flex gap-3">
              <Link
                href={`/outils/${tool.slug}`}
                className="rounded-full bg-white/[0.09] border border-white/[0.14] px-4 py-2 text-[13.5px] text-zinc-100 hover:bg-white/[0.14]"
              >
                Voir la page SEO →
              </Link>
              <Link
                href={`https://app.scryboo.com${tool.appPath}`}
                className="rounded-full bg-white text-zinc-900 px-4 py-2 text-[13.5px] font-[600]"
              >
                Lancer l’outil
              </Link>
            </div>
          </div>
        )}

        <p className="text-[13.7px] text-zinc-400 mt-10">
          Scryboo est gratuit comme Google et Facebook : 95% des outils sont
          libres, sans pub. Soutenez-nous avec le plan Pro (API, batch).
        </p>
      </main>
    </div>
  );
}
