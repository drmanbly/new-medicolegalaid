import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { getAllPosts } from "@/lib/mdx";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | MedicoLegalAid",
  description: "Read the latest articles on medical law, practice protection, and documentation by Dr. Vinaykumar S.",
};

export default async function BlogIndexPage() {
  const posts = await getAllPosts("blog");

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      
      <main className="flex-1">
        {/* Header Section */}
        <section className="bg-primary text-white pt-24 pb-16 px-8 md:px-[64px] border-b border-primary/20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 70% 40%, hsl(43 74% 49%) 0%, transparent 55%)" }}></div>
          <div className="max-w-[1200px] mx-auto relative z-10 scroll-reveal">
            <span className="inline-flex items-center text-xs font-bold px-3 py-1.5 rounded-full border bg-white/10 border-white/20 text-white uppercase tracking-wider mb-6">
              Knowledge Hub
            </span>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-white leading-tight mb-5">
              Medico-Legal Blog
            </h1>
            <p className="text-lg text-white/80 max-w-[60ch] leading-relaxed">
              Read the latest articles, practical tips, and expert analysis on medical law, practice protection, and documentation by Dr. Vinaykumar S.
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="w-full box-border py-[72px] px-8 md:px-[64px] bg-background">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
              {posts.map((post) => (
                <div key={post.slug} className="flex flex-col bg-card border border-primary/20 p-[32px] scroll-reveal shadow-sm hover:shadow-md transition-shadow group">
                  <Link href={`/blog/${post.slug}`} className="flex-1 flex flex-col">
                    <span className="font-mono text-[12px] font-bold text-secondary mb-[16px] uppercase tracking-wider">
                      {post.meta.category} • {new Date(post.meta.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <h2 className="font-serif font-semibold text-[22px] text-primary leading-[1.3] mb-[16px] group-hover:text-accent transition-colors">
                      {post.meta.title}
                    </h2>
                    <p className="text-[15px] leading-[1.6] text-[#453F32] flex-1">
                      {post.meta.excerpt}
                    </p>
                  </Link>
                  <div className="flex items-center gap-[6px] pt-[24px] mt-[32px] border-t border-primary/10 font-semibold text-[13px] text-primary group-hover:text-accent transition-colors">
                    <Link href={`/blog/${post.slug}`} className="flex items-center gap-1 w-full">
                      Read Article <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
