import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Metadata } from "next";
import { TipsClient } from "./tips-client";
import tipsData from "@/content/tips.json";

export const metadata: Metadata = {
  title: "Free Medico-Legal Tips | MedicoLegalAid",
  description: "Browse 48 practical medico-legal tips to protect your career and medical practice.",
};

export default function TipsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      
      <main className="flex-1">
        {/* Header Section */}
        <section className="bg-primary text-white pt-24 pb-16 px-8 md:px-[64px] border-b border-primary/20 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 50% 100%, hsl(43 74% 49%) 0%, transparent 60%)" }}></div>
          <div className="max-w-[800px] mx-auto relative z-10 scroll-reveal">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#eab308] mb-4">
              Free Legal Tips
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              Practical medico-legal guidance to protect your career and practice. Browse all {tipsData.length} tips or search by keyword.
            </p>
          </div>
        </section>

        {/* Client-side Search and Accordion */}
        <TipsClient tips={tipsData} />
        
      </main>

      <Footer />
    </div>
  );
}
