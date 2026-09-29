import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Dr. Vinaykumar S | India's Premier Medico-Legal Expert",
  description: "Learn about Dr. Vinaykumar S, a practicing senior clinician and legal expert who helps doctors navigate consumer courts, negligence claims, and legal notices.",
  alternates: { canonical: "/about" }
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      
      <main className="flex-1">
        {/* ===== HERO ===== */}
        <section className="w-full bg-[#F2EBDC] px-6 md:px-[64px] pt-24 pb-20 overflow-hidden">
          <div className="max-w-[1200px] mx-auto grid md:grid-cols-[1fr_1.2fr] gap-[64px] items-center stagger-children">
            
            <div className="flex flex-col gap-[24px] stagger-item">
              <span className="font-mono text-[13px] tracking-[0.14em] uppercase text-[#7A5A22]">
                Meet The Expert
              </span>
              <h1 className="m-0 font-serif font-semibold text-[42px] md:text-[56px] leading-[1.1] text-primary">
                Dr. Vinaykumar S
              </h1>
              <h2 className="m-0 font-sans text-[20px] md:text-[24px] font-medium text-[#453F32] leading-tight">
                India's Premier Medico-Legal Defender for Doctors
              </h2>
              
              <div className="bg-white border-l-4 border-[#A97C34] py-[20px] px-[24px] shadow-sm mt-4">
                <p className="font-mono text-[15px] text-primary font-bold leading-relaxed">
                  MBBS, DCH, DNB, MNAMS, LLB, PGDMLE (NLSIU)
                  <br/>
                  Professor of Pediatrics & President of KIAP Medico-legal Group
                </p>
              </div>

              <div className="mt-4 stagger-item">
                <Link href="/consult" className="inline-block bg-primary text-[#F2EBDC] font-mono text-[13px] uppercase tracking-[0.08em] px-[28px] py-[16px] hover:bg-[#343026] transition-colors shadow-lg">
                  Book a Consultation
                </Link>
              </div>
            </div>

            <div className="w-full relative aspect-[4/5] bg-[#E8DEC8] border border-primary/10 shadow-2xl stagger-item group">
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <Image 
                src="/dr-vinay.jpg" 
                alt="Dr. Vinaykumar S" 
                fill 
                className="object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-700" 
                priority
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 blur-2xl rounded-full z-0 pointer-events-none" />
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-accent/30 blur-3xl rounded-full z-0 pointer-events-none" />
            </div>

          </div>
        </section>

        {/* ===== STORY ===== */}
        <section className="w-full box-border py-[96px] px-6 md:px-[64px] bg-background">
          <div className="max-w-[800px] mx-auto stagger-children">
            <h2 className="font-serif text-[32px] md:text-[40px] text-primary mb-[40px] text-center stagger-item">
              Bridging Medicine and Law
            </h2>
            
            <div className="flex flex-col gap-[24px] text-[18px] leading-[1.8] text-[#453F32]">
              <p className="stagger-item">
                When doctors face consumer court notices or medical negligence allegations, they don't just need a lawyer. They need someone who understands the clinical realities of the operation theater <em>and</em> the harsh realities of the courtroom.
              </p>
              <p className="stagger-item">
                <strong>Dr. Vinaykumar S</strong> is that rare combination. As a practicing senior clinician and a highly qualified legal expert, he bridges the gap between medicine and law. He understands exactly what happens during an emergency code, why documentation can slip in a busy OPD, and how opposing lawyers exploit those clinical realities.
              </p>
              
              <div className="my-[32px] p-[40px] bg-[#F9F7F1] border border-[#E8DEC8] rounded-sm stagger-item">
                <p className="font-serif italic text-[24px] leading-[1.5] text-primary text-center">
                  "My mission is to ensure that no honest doctor ever loses their practice or peace of mind due to a legal loophole. Practise medicine with confidence, not fear."
                </p>
              </div>

              <p className="stagger-item">
                Through <em>MedicoLegalAid</em>, Dr. Vinaykumar has defended countless doctors across India, trained major corporate hospital chains in risk management, and empowered practitioners to document their procedures in a way that is legally ironclad.
              </p>
            </div>
          </div>
        </section>

        {/* ===== STATS / IMPACT ===== */}
        <section className="w-full bg-[#1A1814] text-[#E8DEC8] py-[80px] px-6 md:px-[64px]">
          <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-[40px] md:gap-[24px] text-center stagger-children">
            
            <div className="flex flex-col gap-2 stagger-item">
              <span className="font-serif text-[48px] md:text-[56px] font-semibold text-accent leading-none">20+</span>
              <span className="font-mono text-[13px] uppercase tracking-widest text-[#A97C34]">Years Experience</span>
            </div>
            
            <div className="flex flex-col gap-2 stagger-item">
              <span className="font-serif text-[48px] md:text-[56px] font-semibold text-accent leading-none">1000+</span>
              <span className="font-mono text-[13px] uppercase tracking-widest text-[#A97C34]">Doctors Defended</span>
            </div>
            
            <div className="flex flex-col gap-2 stagger-item">
              <span className="font-serif text-[48px] md:text-[56px] font-semibold text-accent leading-none">50+</span>
              <span className="font-mono text-[13px] uppercase tracking-widest text-[#A97C34]">Hospitals Trained</span>
            </div>
            
            <div className="flex flex-col gap-2 stagger-item">
              <span className="font-serif text-[48px] md:text-[56px] font-semibold text-accent leading-none">100%</span>
              <span className="font-mono text-[13px] uppercase tracking-widest text-[#A97C34]">Confidentiality</span>
            </div>

          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="w-full bg-[#F2EBDC] py-[80px] px-6 md:px-[64px] border-t border-[#E8DEC8]">
          <div className="max-w-[800px] mx-auto text-center flex flex-col items-center gap-[24px] stagger-children">
            <h2 className="font-serif text-[32px] md:text-[40px] text-primary leading-[1.2] stagger-item">
              Facing a Medico-Legal Challenge?
            </h2>
            <p className="text-[18px] text-[#453F32] max-w-[600px] stagger-item">
              Don't wait until a notice becomes a crisis. Get expert, confidential guidance from someone who understands both the clinical and legal realities.
            </p>
            <div className="stagger-item mt-4">
              <Link href="/consult" className="inline-block bg-primary text-[#F2EBDC] font-mono text-[14px] uppercase tracking-[0.08em] px-[32px] py-[18px] hover:bg-[#343026] transition-all hover:-translate-y-1 shadow-xl">
                Schedule a Consultation Today
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
