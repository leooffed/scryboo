// app/components/pages/JournalSlug.tsx (ou le chemin réel)
import { getPost } from "@/data/blog";
import { getTool } from "@/data/tools";
import Link from "next/link";
import { notFound } from "next/navigation";

// Typage simple
interface JournalSlugProps {
  slug: string;
}

// Composant serveur principal
export default async function BlogPostPage({ slug }: JournalSlugProps) {
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  const tool = post.toolSlug ? getTool(post.toolSlug) : undefined;

  const formattedDate = new Date(post.date).toLocaleDateString("fr-FR", {
    dateStyle: "long",
  });

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "Scryboo Editorial",
      url: "https://scryboo.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Scryboo",
      logo: "https://scryboo.com/logo.png",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://scryboo.com/journal/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="min-h-screen bg-[#08080d] text-zinc-100 antialiased">
        <main className="pt-32 max-w-3xl mx-auto px-6 sm:px-10 pb-24">
          <Link
            href="/journal"
            className="text-[13.3px] text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            ← Journal
          </Link>

          <h1 className="font-display text-[36px] md:text-[48px] tracking-[-0.022em] mt-4 text-zinc-100 leading-tight">
            {post.title}
          </h1>

          <div className="text-[13.2px] text-zinc-400 mt-2">
            {formattedDate} · Admin Scryboo
          </div>

          <p className="text-[17.5px] text-zinc-300 mt-7 leading-relaxed whitespace-pre-line">
            {post.content}
          </p>

          {tool && (
            <div className="mt-10 rounded-[20px] border border-white/[0.12] bg-white/[0.027] p-6 backdrop-blur-sm">
              <div className="text-[13.6px] text-zinc-300 font-medium">
                Outil lié
              </div>
              <div className="text-[20px] font-[620] mt-1 text-white">
                {tool.name}
              </div>
              <p className="text-zinc-400 mt-2 text-[14.5px] leading-relaxed">
                {tool.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href={`/outils/${tool.slug}`}
                  className="rounded-full bg-white/[0.09] border border-white/[0.14] px-4 py-2 text-[13.5px] text-zinc-100 hover:bg-white/[0.14] transition-all"
                >
                  Voir la page SEO →
                </Link>

                <Link
                  href={`https://app.scryboo.com${tool.appPath}`}
                  className="rounded-full bg-white text-zinc-900 px-4 py-2 text-[13.5px] font-[600] hover:bg-zinc-200 transition-all shadow-lg shadow-white/5"
                >
                  Lancer l’outil
                </Link>
              </div>
            </div>
          )}

          <p className="text-[13.7px] text-zinc-500 mt-12 border-t border-white/[0.08] pt-6 leading-relaxed">
            Scryboo est gratuit comme Google et Facebook : 95% des outils sont
            libres, sans pub. Soutenez-nous avec le plan Pro (API, batch).
          </p>
        </main>
      </div>
    </>
  );
}
