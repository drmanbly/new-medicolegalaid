import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  const modules = [
    { num: "01", title: "Introduction to the Legal System & Civil vs Criminal Medical Negligence", desc: "How law and healthcare are interconnected — the structure of the legal system, civil vs criminal negligence, and how a medical act becomes a criminal offence." },
    { num: "02", title: "Understanding Medical Negligence", desc: "What constitutes breach of duty, standard of care, and how proper documentation prevents false cases. The focus is on understanding legal boundaries to protect professional reputation." },
    { num: "03", title: "Learning How to Take a Valid Consent", desc: "Components of legally valid consent, common errors, and how courts evaluate consent forms. Model formats and landmark judgments — draft strong, court-proof consent. Standard templates included." },
    { num: "04", title: "How to Handle Medico-Legal Cases (MLCs) Effectively", desc: "Confidently handle MLCs — police intimation, summons, dying declarations, brought-dead cases, poisoning cases, and sexual assault cases." },
    { num: "05", title: "Understand Vicarious Liability & How It Affects Doctors", desc: "How you can be held liable for mistakes by junior doctors, nurses, technicians, and paramedics. Vicarious liability, hiring principles, and safe delegation practices." },
    { num: "06", title: "Write a Legally Valid Medical, Wound & Death Certificate", desc: "Accurate and defensible medical certificates, wound certificates, and death certificates. Mandatory identity verification, essential components, and common mistakes. Model certificates provided." },
    { num: "07", title: "Select the Right Professional Indemnity Insurance", desc: "Coverage types, exclusions, limits, add-ons, and how compensation awards are handled in consumer courts — so you stay financially protected against litigation." },
    { num: "08", title: "How to Reply to a Legal Notice", desc: "What evidence needs to be provided, and how to draft a proper written statement when a case is filed in the Consumer Forum." },
    { num: "09", title: "Medico-Legal Pitfalls (Part I): Common Mistakes Doctors Must Avoid", desc: "The most frequent medico-legal mistakes in daily practice — with examples, consequences, and corrective strategies." },
    { num: "10", title: "Medico-Legal Pitfalls (Part II): Common Mistakes Doctors Must Avoid", desc: "Additional medico-legal errors not included in Part I — showing how small errors in documentation or communication can lead to major litigation." },
    { num: "11", title: "Concept of Dental Negligence", isNew: true, desc: "How courts decide negligence, what constitutes breach of duty, and how to protect yourself from false allegations through proper practice and documentation." },
    { num: "12", title: "Consent for Dental Procedures — Legal Perspective", isNew: true, desc: "Legally valid consent for all dental procedures, including risks, alternatives, complications, and documentation standards." },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="flex-1">

        {/* ===== HERO ===== */}
        <section className="w-full bg-[#F2EBDC] px-6 md:px-[64px] pt-16 pb-16 scroll-reveal text-center">
          <div className="max-w-[1000px] mx-auto flex flex-col items-center">
            
            {/* Top label row */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="font-mono text-[12px] tracking-[0.14em] uppercase text-[#7A5A22]">For Practising Indian Doctors</span>
              <span className="font-mono text-[11px] font-bold tracking-wider text-[#FAF6EC] bg-[#8C2F26] px-2 py-0.5">NOW LIVE</span>
            </div>

            {/* Main title */}
            <h1 className="m-0 font-serif font-semibold text-[38px] md:text-[54px] leading-[1.1] text-primary max-w-[22ch]">
              MedicoLegalAid for Doctors
            </h1>

            {/* Subheading emphasizing combo */}
            <p className="mt-3 font-mono text-[13px] md:text-[14px] tracking-wider uppercase text-[#8C2F26] font-bold">
              Physical Book + 20-Hour Video Masterclass — Sold Exclusively as One Combined Bundle
            </p>

            <p className="mt-4 text-[16px] md:text-[17px] leading-[1.7] text-[#453F32] max-w-[62ch]">
              A practical, case-based guide to surviving India&apos;s legal system as a doctor. Written by Dr. Vinaykumar S — a practising paediatrician, legal expert, and founder of MedicoLegalAid. The physical book and companion 20-hour video masterclass are delivered together as an all-in-one defense program.
            </p>

            {/* ===== CENTERPIECE: COMBO SHOWCASE ===== */}
            <div className="my-10 w-full max-w-[840px] relative bg-[#FAF6EC] border-2 border-[#A97C34] shadow-[0_16px_50px_rgba(27,42,56,0.14),0_0_0_6px_rgba(169,124,52,0.08)] p-6 sm:p-10 text-left">
              
              {/* Floating Top Banner */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#8C2F26] text-[#FAF6EC] font-mono text-[11px] font-bold tracking-widest uppercase px-5 py-1 shadow-md whitespace-nowrap border border-[#F2EBDC]/20">
                ★ 2-IN-1 EXCLUSIVE COMBO — BOTH INCLUDED FOR ₹4,999
              </div>

              {/* Visual Duo: Book + Course */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 pt-4 pb-6">
                
                {/* 1. Physical Book */}
                <div className="flex flex-col items-center text-center gap-3 flex-1 max-w-[240px]">
                  <div className="relative group">
                    <div className="absolute -inset-2 bg-[#A97C34]/20 blur-xl rounded-full group-hover:bg-[#A97C34]/35 transition-all"></div>
                    <img 
                      src="/book-cover-front.jpg" 
                      alt="MedicoLegalAid for Doctors Physical Book" 
                      className="relative w-[180px] sm:w-[200px] shadow-[0_20px_45px_rgba(27,42,56,0.25)] border border-primary/10 hover:scale-[1.03] transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <span className="font-serif font-bold text-[18px] text-primary block leading-tight">
                      Physical Hardcopy Book
                    </span>
                    <span className="inline-block mt-1 font-mono text-[10px] font-bold uppercase tracking-wider text-[#A97C34] bg-[#A97C34]/10 border border-[#A97C34]/30 px-2 py-0.5">
                      Delivered to Your Door
                    </span>
                    <p className="text-[12px] text-[#6B6350] mt-1 leading-snug">
                      Consent templates, checklists & landmark case summaries
                    </p>
                  </div>
                </div>

                {/* PLUS CONNECTOR BADGE */}
                <div className="flex flex-col items-center justify-center gap-1 shrink-0 py-2">
                  <span className="font-serif text-[42px] font-bold text-[#A97C34] leading-none">+</span>
                  <span className="font-mono text-[10px] font-bold tracking-widest uppercase bg-[#A97C34] text-white px-2.5 py-0.5 shadow-sm">
                    COMBO
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-[#8A8267] mt-0.5">
                    Not Sold Separately
                  </span>
                </div>

                {/* 2. 20-Hour Masterclass */}
                <div className="flex flex-col items-center text-center gap-3 flex-1 max-w-[240px]">
                  <div className="relative w-[150px] sm:w-[170px] aspect-[3/4.2] bg-[#1B2A38] border-2 border-[#A97C34]/80 shadow-[0_20px_45px_rgba(27,42,56,0.3)] flex flex-col items-center justify-center gap-3 p-4 hover:scale-[1.03] transition-transform duration-300">
                    <div className="w-13 h-13 rounded-full border-2 border-[#A97C34] flex items-center justify-center bg-[#A97C34]/15 shadow-inner">
                      <div className="w-0 h-0 border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent border-l-[13px] border-l-[#A97C34] ml-1" />
                    </div>
                    <div>
                      <span className="font-mono text-[11px] font-bold tracking-wider uppercase text-[#F2EBDC] block leading-tight">
                        20-Hour<br />Masterclass
                      </span>
                      <span className="font-mono text-[9px] text-[#D3A857] uppercase tracking-widest mt-1 block">
                        12 Video Modules
                      </span>
                    </div>
                    <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#A97C34]" />
                    <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#A97C34]" />
                  </div>
                  <div>
                    <span className="font-serif font-bold text-[18px] text-primary block leading-tight">
                      20-Hour Video Masterclass
                    </span>
                    <span className="inline-block mt-1 font-mono text-[10px] font-bold uppercase tracking-wider text-[#7A5A22] bg-[#7A5A22]/10 border border-[#7A5A22]/30 px-2 py-0.5">
                      Lifetime Online Access
                    </span>
                    <p className="text-[12px] text-[#6B6350] mt-1 leading-snug">
                      Learn on mobile or desktop + Shareable certificate
                    </p>
                  </div>
                </div>

              </div>

              {/* Combo Price Strip inside the box */}
              <div className="pt-4 border-t border-[#A97C34]/30 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#F2EBDC]/70 -mx-6 -mb-6 sm:-mx-10 sm:-mb-10 p-5 sm:px-8">
                <div className="flex items-baseline gap-3">
                  <span className="font-serif font-bold text-[36px] sm:text-[42px] text-primary leading-none">₹4,999</span>
                  <div className="flex flex-col">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#8C2F26]">All-Inclusive Combo Price</span>
                    <span className="text-[12px] text-[#6B6350]">Physical Book Delivered + 20-Hour Video Masterclass</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a href="#enroll" className="flex-1 sm:flex-initial text-center bg-[#8C2F26] text-[#FAF6EC] font-bold text-[15px] px-8 py-3.5 hover:bg-[#6e221b] transition-colors shadow-md">
                    Enroll in Combo — ₹4,999
                  </a>
                </div>
              </div>

            </div>

            {/* Quick action buttons & assurance */}
            <div className="flex flex-col items-center gap-3">
              <div className="flex gap-4 flex-wrap justify-center">
                <a href="#enroll" className="bg-primary text-[#F2EBDC] text-[15px] font-semibold px-8 py-4 border border-primary hover:bg-[#0d1720] transition-colors shadow-sm">
                  Enroll in Combo — ₹4,999
                </a>
                <a href="#curriculum" className="bg-transparent text-primary text-[15px] font-semibold px-8 py-4 border border-primary hover:bg-primary/5 transition-colors">
                  See All 12 Modules ↓
                </a>
              </div>
              <p className="font-mono text-[12px] text-[#6B6350] tracking-wide">
                One-time payment · Physical book delivered pan-India · Lifetime video access · Certificate of completion
              </p>
            </div>

            {/* Social proof stat row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-primary/20 w-full mt-10">
              <div className="flex flex-col items-center text-center">
                <span className="font-serif font-semibold text-[28px] text-primary">500+</span>
                <span className="font-mono text-[11px] text-[#7A5A22] uppercase tracking-wider">Doctors trained</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="font-serif font-semibold text-[28px] text-primary">20 hrs</span>
                <span className="font-mono text-[11px] text-[#7A5A22] uppercase tracking-wider">Case-based video</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="font-serif font-semibold text-[28px] text-primary">12</span>
                <span className="font-mono text-[11px] text-[#7A5A22] uppercase tracking-wider">Comprehensive modules</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="font-serif font-semibold text-[28px] text-primary">Hardcover</span>
                <span className="font-mono text-[11px] text-[#7A5A22] uppercase tracking-wider">Delivered to clinic</span>
              </div>
            </div>

          </div>
        </section>

        {/* ===== TRUST STRIP ===== */}
        <div className="w-full bg-primary text-[#F2EBDC] py-4 px-6 md:px-[64px]">
          <div className="max-w-[1200px] mx-auto flex flex-wrap items-center justify-between gap-4 font-mono text-[12px] tracking-[0.06em]">
            <span>✓ Physical book delivered to your door</span>
            <span>✓ Lifetime access to 20-hour video</span>
            <span>✓ Shareable certificate of completion</span>
            <span>✓ Dental negligence module included</span>
          </div>
        </div>



        {/* ===== ABOUT THE BOOK ===== */}
        <section className="w-full bg-primary px-6 md:px-[64px] py-[72px] scroll-reveal">
          <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[1fr_280px] gap-16 items-start">
            <div className="flex flex-col gap-5">
              <span className="font-mono text-[12px] tracking-[0.14em] uppercase text-[#D3A857]">About the Book</span>
              <h2 className="m-0 font-serif font-semibold text-[34px] text-[#F2EBDC] leading-tight">
                Empowering Doctors with Legal Clarity
              </h2>
              <p className="text-[16px] leading-[1.7] text-[#D9D2C0] max-w-[60ch]">
                MedicoLegalAid for Doctors is a practical guide designed to help doctors understand, prevent, and manage medico-legal challenges in everyday practice. Written by Dr. Vinaykumar S — a practising paediatrician and medical law expert — this book brings together real-world insights, legal principles, and practical guidance.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
                {["Understand the Law", "Prevent Risk", "Handle Challenges", "Practice with Confidence"].map(item => (
                  <div key={item} className="flex flex-col gap-2 border-t border-[#F2EBDC]/20 pt-3">
                    <span className="text-[#D3A857] font-bold text-lg">✓</span>
                    <span className="font-serif font-semibold text-[14px] text-[#F2EBDC] leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full shadow-[0_24px_48px_rgba(0,0,0,0.35)] border border-[#F2EBDC]/10 hover:scale-[1.02] transition-transform duration-500">
              <img src="/book-cover-back.png" alt="Back cover — MedicoLegalAid for Doctors" className="w-full block" />
            </div>
          </div>
        </section>

        {/* ===== AUTHOR ===== */}
        <section className="w-full bg-[#F2EBDC] px-6 md:px-[64px] py-[72px] scroll-reveal">
          <div className="max-w-[1200px] mx-auto grid md:grid-cols-[200px_1fr] gap-10 items-start">
            <div className="w-[200px] h-[200px] rounded-full border border-primary/25 bg-[#E8DEC8] overflow-hidden mx-auto md:mx-0 shadow-md">
              <img src="/dr-vinaykumar-circle.jpg" alt="Dr. Vinaykumar S" className="w-full h-full object-cover object-top" />
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-mono text-[12px] tracking-[0.14em] uppercase text-[#7A5A22]">About the Author</span>
              <h2 className="m-0 font-serif font-semibold text-[30px] text-primary">Dr. Vinaykumar S</h2>
              <p className="font-mono text-[12px] tracking-wider text-[#453F32]">MBBS · DCH · DNB · MNAMS · LLB · PGDMLE (NLSIU)</p>
              <p className="text-[16px] leading-[1.65] text-[#453F32] max-w-[65ch]">
                Dr. Vinaykumar S is a practising Senior Paediatrician and Medical Law expert. He is the Founder of MedicoLegalAid.com, widely regarded as one of India's leading voices on medico-legal risk, documentation, consent, and doctor-patient communication.
              </p>
              <div className="bg-card border border-primary/15 border-l-4 border-l-[#A97C34] p-5 flex flex-col gap-3 max-w-[440px] mt-2">
                <span className="font-serif font-semibold text-[15px] text-primary">Qualifications</span>
                <div className="flex flex-col gap-2">
                  {["MBBS, DCH, DNB, MNAMS", "Professor of Paediatrics", "LLB", "PGDMLE — National Law School, Bangalore"].map(q => (
                    <span key={q} className="flex items-baseline gap-2 text-[14px] text-foreground">
                      <span className="text-[#A97C34] font-bold">✓</span> {q}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== CURRICULUM ===== */}
        <section id="curriculum" className="w-full bg-[#F2EBDC] px-6 md:px-[64px] pb-[80px] scroll-reveal">
          <div className="max-w-[1200px] mx-auto bg-[#FAF6EC] border border-primary/25 p-10 md:p-14 flex flex-col gap-2">
            <span className="font-mono text-[12px] tracking-[0.14em] uppercase text-[#7A5A22]">The Curriculum</span>
            <h2 className="m-0 font-serif font-semibold text-[30px] text-primary mb-6">The 20-Hour Masterclass</h2>
            <div className="flex flex-col">
              {modules.map((mod) => (
                <div key={mod.num} className={`flex gap-6 py-6 border-t border-primary/15 group hover:bg-primary/[0.02] transition-colors px-2 -mx-2 ${mod.isNew ? "bg-[#8C2F26]/[0.03]" : ""}`}>
                  <span className={`font-mono text-[13px] w-8 flex-shrink-0 pt-0.5 ${mod.isNew ? "text-[#8C2F26]" : "text-[#7A5A22]"}`}>{mod.num}</span>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-serif font-semibold text-[18px] text-primary leading-snug">{mod.title}</span>
                      {mod.isNew && <span className="font-mono text-[10px] font-bold tracking-wider text-white bg-[#8C2F26] px-2 py-0.5">NEW</span>}
                    </div>
                    <p className="m-0 text-[15px] leading-[1.65] text-[#453F32]">{mod.desc}</p>
                  </div>
                </div>
              ))}
              <div className="flex items-center justify-between flex-wrap gap-5 mt-6 pt-8 border-t border-primary/20">
                <span className="font-mono text-[12px] text-[#6B6350]">20 hours · Case-based video lessons · Shareable certificate</span>
                <a href="#" className="bg-primary text-[#F2EBDC] text-[15px] font-semibold px-8 py-4 border border-primary hover:bg-[#0d1720] transition-colors">
                  Enroll Now — ₹4,999
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ===== FINAL CTA STRIP ===== */}
        <section className="w-full bg-primary px-6 md:px-[64px] py-14 scroll-reveal">
          <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col gap-2">
              <span className="font-serif italic text-[20px] text-[#F2EBDC]">"Knowledge today for a safer tomorrow."</span>
              <span className="font-mono text-[12px] tracking-wider uppercase text-[#D3A857]">Book + 20-Hr Masterclass · ₹4,999</span>
            </div>
            <a href="#" className="bg-[#A97C34] text-white text-[15px] font-semibold px-10 py-4 hover:bg-[#8C6A2A] transition-colors whitespace-nowrap shadow-lg shadow-[#A97C34]/20">
              Enroll Now — ₹4,999 →
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
