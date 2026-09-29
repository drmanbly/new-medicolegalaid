import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Image from "next/image";
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
        <section className="w-full box-border py-[72px] px-8 md:px-[64px] bg-background">
          <div className="max-w-[1200px] mx-auto grid md:grid-cols-[1fr_1.5fr] gap-[64px] items-start scroll-reveal">
            
            <div className="w-full relative aspect-[3/4] bg-[#E8DEC8] border border-primary/20 overflow-hidden">
              <Image 
                src="/dr-vinay.jpg" 
                alt="Dr. Vinaykumar S" 
                fill 
                className="object-cover object-center" 
                priority
              />
            </div>
            
            <div className="flex flex-col gap-[24px]">
              <span className="font-mono text-[13px] tracking-[0.14em] uppercase text-[#7A5A22]">
                About Us
              </span>
              <h1 className="m-0 font-serif font-semibold text-[38px] md:text-[50px] leading-[1.1] text-primary">
                Meet Dr. Vinaykumar S — India's Premier Medico-Legal Expert
              </h1>
              
              <div className="bg-card border-l-4 border-[#A97C34] py-[16px] px-[24px]">
                <p className="font-mono text-[14px] text-primary font-bold">
                  MBBS, DCH, DNB, MNAMS, LLB, PGDMLE (NLSIU).
                  <br/>
                  Professor of Pediatrics & President of KIAP Medico-legal Group.
                </p>
              </div>

              <div className="flex flex-col gap-[16px] text-[17px] leading-[1.7] text-[#453F32]">
                <p>
                  When doctors face consumer court notices or medical negligence allegations, they don't just need a lawyer. They need someone who understands the clinical realities of the operation theater <em>and</em> the harsh realities of the courtroom.
                </p>
                <p>
                  <strong>Dr. Vinaykumar S</strong> is that rare combination. As a practicing senior clinician and a highly qualified legal expert, he bridges the gap between medicine and law. He understands exactly what happens during an emergency code, why documentation can slip in a busy OPD, and how opposing lawyers exploit those clinical realities.
                </p>
                <p>
                  Through <em>MedicoLegalAid</em>, Dr. Vinaykumar has defended countless doctors across India, trained major corporate hospital chains in risk management, and empowered practitioners to document their procedures in a way that is legally ironclad.
                </p>
                <p className="font-serif italic text-[20px] text-primary border-t border-primary/20 pt-[24px] mt-[16px]">
                  "My mission is to ensure that no honest doctor ever loses their practice or peace of mind due to a legal loophole. Practise medicine with confidence, not fear."
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
