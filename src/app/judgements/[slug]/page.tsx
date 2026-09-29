import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import judgementsData from "@/content/judgements.json";
import Link from "next/link";

// We have to assert the type since we're importing from JSON
const JUDGEMENTS = judgementsData as Record<string, any>;

export async function generateStaticParams() {
  return Object.keys(JUDGEMENTS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const judgement = JUDGEMENTS[slug];
  if (!judgement) return { title: "Not Found" };

  return {
    title: `${judgement.title} | Supreme Court Judgement`,
    description: judgement.description,
    alternates: { canonical: `/judgements/${slug}` },
    openGraph: {
      title: judgement.title,
      description: judgement.description,
      url: `https://www.medicolegalaid.com/judgements/${slug}`,
      type: "article",
    }
  };
}

export default async function JudgementSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const judgement = JUDGEMENTS[slug];

  if (!judgement) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      
      <main className="flex-1 py-[72px]">
        {/* Header Section */}
        <section className="bg-primary text-white pt-12 pb-16 px-8 md:px-[64px] border-b border-primary/20">
          <div className="max-w-[800px] mx-auto scroll-reveal">
            <Link href="/judgements" className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white/90 transition-colors mb-8">
              ← All Judgements
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <span className="inline-flex items-center text-xs font-semibold px-3 py-1.5 rounded-full border bg-white/10 border-white/20 text-white uppercase tracking-wider">
                Supreme Court Judgement
              </span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-serif font-bold text-white leading-tight mb-5">
              {judgement.title}
            </h1>
          </div>
        </section>

        {/* Content Section */}
        <section className="px-8 md:px-[64px] py-16 max-w-[800px] mx-auto space-y-12">
          
          {judgement.background && (
            <div className="scroll-reveal">
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">Background</h2>
              <p className="text-[17px] leading-[1.7] text-[#453F32]">{judgement.background}</p>
            </div>
          )}

          {judgement.legalQuestion && (
            <div className="scroll-reveal">
              <h2 className="text-xl font-serif font-bold text-primary mb-4">The Legal Question</h2>
              <p className="text-[16px] leading-[1.7] text-[#453F32] bg-muted/40 p-6 rounded-sm border-l-4 border-accent">
                {judgement.legalQuestion}
              </p>
            </div>
          )}

          {judgement.courtsDecision && (
            <div className="scroll-reveal">
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">The Court's Decision</h2>
              <p className="text-[17px] leading-[1.7] text-[#453F32]">{judgement.courtsDecision}</p>
            </div>
          )}

          {judgement.principle && (
            <div className="scroll-reveal border-l-4 border-accent bg-primary/[0.04] p-7 rounded-sm mt-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold text-primary uppercase tracking-widest">Principle Established</span>
              </div>
              <p className="text-base text-primary/90 leading-relaxed font-semibold">
                {judgement.principle}
              </p>
            </div>
          )}

          {judgement.practicalImpact && judgement.practicalImpact.length > 0 && (
            <div className="scroll-reveal bg-primary text-white p-8 rounded-sm mt-12">
              <h2 className="text-2xl font-serif font-bold text-white mb-6">What This Means for Your Practice</h2>
              <ul className="space-y-4">
                {judgement.practicalImpact.map((impact: string, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-accent shrink-0 mt-1">→</span>
                    <p className="text-sm text-white/90 leading-relaxed">{impact}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Buttons */}
          <div className="scroll-reveal pt-8 border-t border-border flex flex-col sm:flex-row gap-[16px]">
            <a href={`/judgements/${slug}.pdf`} target="_blank" rel="noopener noreferrer" className="bg-primary text-background text-center px-6 py-3 font-semibold hover:opacity-90 transition-opacity">
              View Original PDF
            </a>
            <a href={`/judgements/${slug}.pdf`} download target="_blank" rel="noopener noreferrer" className="bg-transparent text-primary text-center border border-primary px-6 py-3 font-semibold hover:bg-primary/5 transition-colors">
              Download PDF
            </a>
          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}
