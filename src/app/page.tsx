import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MedicoLegalAid | Medico-Legal Masters Course for Indian Doctors",
  description: "Protect your medical practice and reputation. Practical, case-based masterclasses on consent, documentation, consumer court, and legal issues for Indian doctors by Dr. Vinaykumar S.",
  alternates: { canonical: "/" }
};

const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Medico-Legal Masters Course for Indian Doctors",
  "description": "8 comprehensive modules covering the essential medical laws, consent rules, MLC handling, and negligence definitions in India.",
  "provider": {
    "@type": "Organization",
    "name": "MedicoLegalAid",
    "sameAs": "https://medicolegalaid.com"
  }
};


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans">
      <Navbar />

      <main className="flex-1">
        {/* ===== HERO ===== */}
        <section className="w-full box-border py-[88px] px-8 md:px-[64px] bg-background">
          <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[1.15fr_0.85fr] gap-[72px] items-start">
            <div className="flex flex-col gap-[28px] scroll-reveal">
              <span className="font-mono text-[13px] tracking-[0.14em] uppercase text-[#7A5A22]">
                For Practising Indian Doctors
              </span>
              <h1 className="m-0 font-serif font-semibold text-[40px] md:text-[54px] leading-[1.12] text-primary">
                <span className="text-secondary">Protect Your Practice.</span><br />
                Master Medico-Legal Knowledge.
              </h1>
              <p className="m-0 text-[18px] leading-[1.6] text-[#453F32] max-w-[50ch]">
                We make the law simple for doctors. Our program gives you a practical medicolegal book, a 20-hour pre-recorded video masterclass, and monthly live training. Pick your mode of learning, and practise with confidence.
              </p>

              <div className="flex items-center gap-[18px] border-y border-primary/25 py-[18px]">
                <span className="font-serif italic text-[17px] leading-[1.5] text-primary">
                  "Medical negligence cases are rising. Ignorance of law is no longer an excuse."
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-[14px] mt-2 max-w-[440px]">
                <Link href="/webinars" className="w-full">
                  <Button className="w-full text-center bg-primary text-background text-[15px] font-semibold py-[28px] px-[32px] border border-primary hover:bg-[#16212C] rounded-none transition-colors">
                    Join Our Live Training on Sunday
                  </Button>
                </Link>
                <Link href="/book-course" className="w-full">
                  <Button className="w-full text-center bg-secondary text-background text-[15px] font-semibold py-[28px] px-[32px] border border-secondary hover:bg-[#6B241D] rounded-none transition-colors">
                    Get the Book + 20-Hour Masterclass
                  </Button>
                </Link>
              </div>
            </div>

            <div className="hidden lg:flex flex-col gap-[12px] scroll-reveal" style={{ animationDelay: '0.1s' }}>
              <div className="relative w-full aspect-[917/1191] box-border overflow-hidden flex items-end justify-center">
                <Image 
                  src="/dr-vinay-new-home-image.png" 
                  alt="Dr. Vinaykumar S, Founder of MedicoLegalAid" 
                  fill 
                  className="object-contain block"
                  priority
                />
              </div>
              <div className="flex justify-between items-baseline font-mono text-[12px] tracking-[0.06em] color-[#6B6350]">
                <span>FOUNDER</span>
                <span>DR. VINAYKUMAR S</span>
              </div>
            </div>
          </div>
        </section>

        {/* ===== NOTICE BAR ===== */}
        <div className="w-full bg-[#8C2F26] text-[#F2EBDC]">
          <div className="max-w-[1200px] mx-auto px-8 md:px-[64px] py-[14px] flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-[14px] font-mono text-[12px] tracking-[0.06em]">
              <span className="font-bold uppercase tracking-[0.1em]">Notice of Registration —</span>
              <span className="hidden md:inline">This month's Live Medico-Legal Training · 27 September 2026 · Only 30 seats available</span>
            </div>
            <Link href="/webinars" className="font-mono text-[12px] uppercase font-bold tracking-[0.06em] border-b border-[#F2EBDC] pb-[2px] hover:opacity-80 transition-opacity">
              Reserve a seat →
            </Link>
          </div>
        </div>

        {/* ===== VIDEO / WATCH ===== */}
        <section className="w-full box-border py-[96px] px-8 md:px-[64px] bg-[#FAF6EC]">
          <div className="max-w-[1000px] mx-auto flex flex-col items-center gap-[48px] scroll-reveal">
            <div className="text-center flex flex-col gap-[14px]">
              <span className="font-mono text-[13px] tracking-[0.14em] uppercase text-[#7A5A22]">Watch</span>
              <h2 className="m-0 font-serif font-semibold text-[38px] text-primary">Why This Course Matters</h2>
            </div>
            <div className="w-full aspect-video bg-[#1B2A38] border border-[rgba(27,42,56,0.2)] shadow-xl relative cursor-pointer group flex items-center justify-center overflow-hidden">
               {/* Video Thumbnail Placeholder */}
              <Image src="/video-thumbnail.jpg" fill alt="Video Thumbnail" className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500" />
              
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>

              <div className="w-[88px] h-[88px] border border-[#D3A857] rounded-full flex items-center justify-center transition-transform group-hover:scale-105 z-10 bg-primary/60 backdrop-blur-md">
                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-[#D3A857] border-b-[8px] border-b-transparent ml-1"></div>
              </div>
              <div className="absolute bottom-[20px] right-[24px] font-mono text-[11px] tracking-[0.1em] uppercase text-white drop-shadow-md z-10">
                Dr. Vinaykumar S
              </div>
            </div>
          </div>
        </section>

        {/* ===== THE EXPOSURE ===== */}
        <section className="w-full box-border py-[96px] px-8 md:px-[64px] bg-primary">
          <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-[64px] scroll-reveal">
            <div className="flex flex-col gap-[24px]">
              <span className="font-mono text-[13px] tracking-[0.14em] uppercase text-[#D3A857]">
                § 01 — The Exposure
              </span>
              <h2 className="m-0 font-serif font-semibold text-[38px] leading-[1.2] text-background">
                The Legal Risk Every Doctor Faces
              </h2>
              <div className="flex flex-col gap-[18px] mt-2">
                <p className="m-0 text-[16px] leading-[1.65] text-[#D9D2C0] border-t border-background/20 pt-[18px]">
                  Doctors are being taken to court, paying huge compensations, and facing criminal charges.
                </p>
                <p className="m-0 text-[16px] leading-[1.65] text-[#D9D2C0] border-t border-background/20 pt-[18px]">
                  Patients increasingly use AI tools to detect errors, leading to legal harassment.
                </p>
                <p className="m-0 text-[16px] leading-[1.65] text-[#D9D2C0] border-t border-background/20 pt-[18px]">
                  A single mistake in consent, communication, or documentation can destroy years of reputation.
                </p>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex justify-between font-mono text-[11px] tracking-[0.1em] uppercase text-[#8D8875] pb-[10px] border-b border-background/30">
                <span>Case on Record</span>
                <span>Compensation Awarded</span>
              </div>
              
              {[
                { case: "Kunal Saha vs Dr. Sukumar Mukherjee", amount: "₹11 crore" },
                { case: "V. Krishnakumar vs State of TN", amount: "₹1.38 cr + 18%" },
                { case: "Indu Sharma vs Apollo Hospital", amount: "₹1 crore" },
                { case: "Maharaja Agrasen Hospital vs Master Rishabh", amount: "₹76 lakhs" },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-baseline py-[20px] border-b border-background/15 gap-[24px]">
                  <span className="text-[15px] text-background">{item.case}</span>
                  <span className="font-serif font-semibold text-[20px] text-[#D3A857] whitespace-nowrap">
                    {item.amount}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== INSTRUCTOR ===== */}
        <section className="w-full box-border py-[72px] px-8 md:px-[64px] bg-background">
          <div className="max-w-[1200px] mx-auto grid md:grid-cols-[220px_minmax(0,1fr)] gap-[48px] items-center scroll-reveal">
            <div className="hidden md:block w-[220px] h-[220px] rounded-full border border-primary/35 bg-[#E8DEC8] overflow-hidden box-border mx-auto md:mx-0">
              <Image 
                src="/dr-vinay-new-home-image.png" 
                alt="Dr. Vinaykumar S" 
                width={220} 
                height={220} 
                className="w-full h-full object-cover object-[50%_18%]" 
              />
            </div>
            <div className="flex flex-col gap-[14px]">
              <span className="font-mono text-[13px] tracking-[0.14em] uppercase text-[#7A5A22]">The Founder</span>
              <h2 className="m-0 font-serif font-semibold text-[34px] text-primary">Meet Your Medicolegal Expert</h2>
              <span className="font-serif font-semibold text-[19px] text-[#A97C34]">Dr. Vinaykumar S</span>
              <p className="m-0 text-[16px] leading-[1.6] text-[#453F32] max-w-[66ch]">
                Widely regarded as one of India's most trusted medicolegal consultants and advisors for the medical community. He is a top choice for medical associations and is regularly invited to provide expert medical legal aid and speak on topics affecting doctors.
              </p>
              <p className="m-0 text-[16px] leading-[1.6] text-[#453F32] max-w-[66ch]">
                His rare combination of medical and legal expertise allows him to explain complex medicolegal issues with unmatched clarity and relevance for practising doctors.
              </p>
              <div className="mt-[10px] bg-card border border-primary/15 border-l-4 border-l-[#A97C34] box-border p-[22px_26px] flex flex-col gap-[12px] max-w-[480px]">
                <span className="font-serif font-semibold text-[16px] text-primary">Qualifications</span>
                <div className="flex flex-col gap-[8px]">
                  <span className="flex items-baseline gap-[8px] text-[14px] text-foreground">
                    <span className="text-[#A97C34] font-bold">✓</span> MBBS, DCH, DNB, MNAMS
                  </span>
                  <span className="flex items-baseline gap-[8px] text-[14px] text-foreground">
                    <span className="text-[#A97C34] font-bold">✓</span> Professor of Paediatrics
                  </span>
                  <span className="flex items-baseline gap-[8px] text-[14px] text-foreground">
                    <span className="text-[#A97C34] font-bold">✓</span> LLB
                  </span>
                  <span className="flex items-baseline gap-[8px] text-[14px] text-foreground">
                    <span className="text-[#A97C34] font-bold">✓</span> PGDMLE — National Law School of India University (NLSIU), Bengaluru
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== CONTACT ===== */}
        <section id="contact" className="w-full box-border py-[96px] px-8 md:px-[64px] bg-background">
          <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[0.8fr_1.2fr] gap-[64px] scroll-reveal">
            <div className="flex flex-col gap-[18px]">
              <span className="font-mono text-[13px] tracking-[0.14em] uppercase text-[#7A5A22]">Get in Touch</span>
              <h2 className="m-0 font-serif font-semibold text-[32px] text-primary">Have a Question?</h2>
              <p className="m-0 text-[15px] leading-[1.6] text-[#453F32]">Write to us or call directly — we typically respond within 24 hours.</p>
              <div className="flex flex-col gap-[6px] mt-[8px] text-[15px] text-[#453F32]">
                <span>+91 91106 89797</span>
                <span>contact@medicolegalaid.com</span>
                <span>Bengaluru, Karnataka</span>
              </div>
            </div>
            <form className="flex flex-col gap-[20px]">
              <div className="grid md:grid-cols-2 gap-[20px]">
                <div className="flex flex-col gap-[8px]">
                  <label htmlFor="mla-name" className="font-mono text-[12px] tracking-[0.06em] uppercase text-[#6B6350]">Name</label>
                  <input id="mla-name" type="text" className="box-border py-[14px] px-[16px] border border-primary/30 bg-[#FAF6EC] text-[15px] text-foreground focus:outline-none focus:ring-2 focus:ring-accent" />
                </div>
                <div className="flex flex-col gap-[8px]">
                  <label htmlFor="mla-phone" className="font-mono text-[12px] tracking-[0.06em] uppercase text-[#6B6350]">Phone</label>
                  <input id="mla-phone" type="tel" className="box-border py-[14px] px-[16px] border border-primary/30 bg-[#FAF6EC] text-[15px] text-foreground focus:outline-none focus:ring-2 focus:ring-accent" />
                </div>
              </div>
              <div className="flex flex-col gap-[8px]">
                <label htmlFor="mla-email" className="font-mono text-[12px] tracking-[0.06em] uppercase text-[#6B6350]">Email</label>
                <input id="mla-email" type="email" className="box-border py-[14px] px-[16px] border border-primary/30 bg-[#FAF6EC] text-[15px] text-foreground focus:outline-none focus:ring-2 focus:ring-accent" />
              </div>
              <div className="flex flex-col gap-[8px]">
                <label htmlFor="mla-message" className="font-mono text-[12px] tracking-[0.06em] uppercase text-[#6B6350]">Message</label>
                <textarea id="mla-message" rows={4} className="box-border py-[14px] px-[16px] border border-primary/30 bg-[#FAF6EC] text-[15px] text-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-y"></textarea>
              </div>
              <button type="submit" className="self-start bg-primary text-background text-[15px] font-semibold py-[16px] px-[32px] border border-primary cursor-pointer hover:bg-[#16212C] transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
