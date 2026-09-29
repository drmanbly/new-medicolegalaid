import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";

export async function generateStaticParams() {
  const posts = await getAllPosts("blog");
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug("blog", slug);
  if (!post) return { title: "Not Found" };
  return {
    title: `${post.meta.title} | MedicoLegalAid Blog`,
    description: post.meta.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug("blog", slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      
      <main className="flex-1 py-[72px]">
        {/* Header Section */}
        <section className="bg-primary text-white pt-12 pb-16 px-8 md:px-[64px] border-b border-primary/20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 70% 40%, hsl(43 74% 49%) 0%, transparent 55%)" }}></div>
          <div className="max-w-[800px] mx-auto relative z-10 scroll-reveal">
            <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white/90 transition-colors mb-8">
              ← Back to Blog
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <span className="inline-flex items-center text-xs font-semibold px-3 py-1.5 rounded-full border bg-white/10 border-white/20 text-white uppercase tracking-wider">
                {post.meta.category}
              </span>
              <span className="text-white/60 text-sm font-mono">
                {new Date(post.meta.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-serif font-bold text-white leading-tight mb-5">
              {post.meta.title}
            </h1>
            <div className="flex items-center gap-3 mt-8 pt-6 border-t border-white/10">
              <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center border border-accent/30 text-accent font-serif font-bold">
                {post.meta.author.charAt(0)}
              </div>
              <span className="text-white/90 font-medium text-sm">By {post.meta.author}</span>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="px-8 md:px-[64px] py-16 max-w-[800px] mx-auto">
          <article className="prose prose-lg prose-headings:font-serif prose-headings:font-bold prose-headings:text-primary prose-p:text-[#453F32] prose-p:leading-[1.8] prose-a:text-accent prose-a:font-semibold prose-a:no-underline hover:prose-a:underline prose-li:text-[#453F32] max-w-none scroll-reveal">
            <MDXRemote source={post.content} />
          </article>

          {/* Action Footer */}
          <div className="scroll-reveal pt-12 mt-12 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-6">
            <Link href="/blog" className="text-primary font-semibold hover:text-accent transition-colors flex items-center gap-2">
              ← Read more articles
            </Link>
            <Link href="/consult" className="bg-primary text-background px-6 py-3 font-semibold hover:bg-[#16212C] transition-colors rounded-sm text-sm">
              Book a 1:1 Consultation
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
