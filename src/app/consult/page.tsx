import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "1:1 Medico-Legal Consultation for Doctors | MedicoLegalAid",
  description: "Book a confidential 1:1 peer consultation session with Dr. Vinay Kumar S — India's leading medico-legal expert. Defensive guidance for consumer court notices, MLC cases, and NMC complaints.",
  alternates: { canonical: "/consult" },
};

const topics = [
  { num: "01", label: "Consumer court notices & defense strategy" },
  { num: "02", label: "Medical negligence allegations & MLC cases" },
  { num: "03", label: "Professional indemnity insurance claims" },
  { num: "04", label: "Consent documentation issues" },
  { num: "05", label: "NMC / State Medical Council notices" },
];

const steps = [
  "Share a brief description of your situation and your preferred time slot.",
  "Receive a confirmation and a private, secure Zoom link.",
  "Meet 1:1 with Dr. Vinaykumar S — 100% confidential, no recordings made.",
  "Leave with a clear, written next-steps summary tailored to your situation.",
];

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="flex-1">

        {/* ===== HERO ===== */}
        <section className="w-full bg-[#F2EBDC] px-6 md:px-[64px] pt-20 pb-16 scroll-reveal">
          <div className="max-w-[1200px] mx-auto grid md:grid-cols-[1fr_340px] gap-12 items-start">
            <div className="flex flex-col gap-6">
              <span className="font-mono text-[12px] tracking-[0.14em] uppercase text-[#7A5A22]">Personal Advisory</span>
              <h1 className="m-0 font-serif font-semibold text-[38px] md:text-[48px] leading-[1.15] text-primary">
                1:1 Consultation with<br className="hidden md:block" /> Dr. Vinaykumar S
              </h1>
              <p className="text-[17px] leading-[1.65] text-[#453F32] max-w-[54ch]">
                A private, 100% confidential Zoom session with a founder who is both physician and lawyer — for the doctor who needs a direct read on their own situation, not a general lecture.
              </p>

              {/* Differentiators */}
              <div className="flex flex-col gap-3 py-5 border-y border-primary/20">
                {["Completely confidential — no recordings", "Physician + lawyer in the same session", "Written next-steps summary provided", "Available pan-India via Zoom"].map(d => (
                  <span key={d} className="flex items-center gap-3 text-[15px] text-[#453F32]">
                    <span className="text-[#A97C34] font-bold text-lg flex-shrink-0">✓</span> {d}
                  </span>
                ))}
              </div>

              {/* Fee + CTA */}
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[11px] tracking-wider uppercase text-[#7A5A22]">Consultation Fee</span>
                  <span className="font-serif font-semibold text-[30px] text-primary">On Request</span>
                  <p className="text-[13px] text-[#6B6350]">Fee discussed during booking call. Slot confirmed only after mutual agreement.</p>
                </div>
                <a href="tel:8105633270" className="inline-flex items-center gap-3 bg-primary text-[#F2EBDC] text-[15px] font-semibold px-8 py-4 border border-primary hover:bg-[#0d1720] transition-colors self-start mt-1">
                  📞 Call to Book — 810-563-3270
                </a>
                <p className="text-[12px] text-[#8A8267]">Mon – Sat · 10 AM – 6 PM IST</p>
              </div>
            </div>

            {/* Doctor photo */}
            <div className="hidden md:block w-full aspect-[4/5] bg-[#E8DEC8] border border-primary/15 overflow-hidden shadow-[0_16px_40px_rgba(27,42,56,0.12)]">
              <img src="/dr-vinaykumar-circle.jpg" alt="Dr. Vinaykumar S" className="w-full h-full object-cover object-top" />
            </div>
          </div>
        </section>

        {/* ===== WHAT WE COVER ===== */}
        <section className="w-full bg-primary px-6 md:px-[64px] py-[72px] scroll-reveal">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-10">
            <div className="flex flex-col gap-3 max-w-[55ch]">
              <span className="font-mono text-[12px] tracking-[0.14em] uppercase text-[#D3A857]">What We Cover</span>
              <h2 className="m-0 font-serif font-semibold text-[30px] text-[#F2EBDC] leading-snug">
                Bring Your Specific Situation to the Table
              </h2>
              <p className="text-[15px] text-[#D9D2C0] leading-relaxed">
                Whether you've received a legal notice today or want to audit your practice proactively — each session is tailored to your exact situation.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#F2EBDC]/10">
              {topics.map((t) => (
                <div key={t.num} className="bg-[#1a2d3d] p-8 flex flex-col gap-3 hover:bg-[#1e3347] transition-colors">
                  <span className="font-mono text-[12px] text-[#D3A857]">{t.num}</span>
                  <span className="text-[16px] text-[#F2EBDC] font-medium leading-snug">{t.label}</span>
                </div>
              ))}
              {/* Filler card for even grid */}
              <div className="bg-[#1a2d3d] p-8 flex flex-col gap-3 justify-center items-start">
                <span className="text-[14px] text-[#D9D2C0] italic">And any other medico-legal matter specific to your practice.</span>
              </div>
            </div>
          </div>
        </section>

        {/* ===== HOW IT WORKS ===== */}
        <section className="w-full bg-[#F2EBDC] px-6 md:px-[64px] py-[72px] scroll-reveal">
          <div className="max-w-[800px] mx-auto flex flex-col gap-8">
            <span className="font-mono text-[12px] tracking-[0.14em] uppercase text-[#7A5A22]">How It Works</span>
            <h2 className="m-0 font-serif font-semibold text-[28px] text-primary">Four Simple Steps</h2>
            <div className="flex flex-col border-t border-primary/20">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-6 py-5 border-b border-primary/15 group hover:bg-primary/[0.02] -mx-2 px-2 transition-colors">
                  <span className="font-mono text-[12px] text-[#7A5A22] w-8 flex-shrink-0 pt-0.5">0{i + 1}</span>
                  <span className="text-[15px] text-[#201C14] leading-relaxed">{step}</span>
                </div>
              ))}
            </div>
            <a href="tel:8105633270" className="inline-flex items-center gap-3 bg-primary text-[#F2EBDC] text-[15px] font-semibold px-8 py-4 border border-primary hover:bg-[#0d1720] transition-colors self-start">
              📞 Call to Book — 810-563-3270
            </a>
          </div>
        </section>

        {/* ===== FINAL CTA ===== */}
        <section className="w-full bg-[#8C2F26] px-6 md:px-[64px] py-14 scroll-reveal">
          <div className="max-w-[800px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col gap-1">
              <span className="font-serif italic text-[18px] text-[#F6E9E2]">"One session can change the course of a case."</span>
              <span className="font-mono text-[12px] tracking-wider uppercase text-[#F6E9E2]/60">Confidential · Pan-India via Zoom</span>
            </div>
            <a href="tel:8105633270" className="bg-[#F2EBDC] text-[#8C2F26] text-[15px] font-bold px-10 py-4 hover:bg-white transition-colors whitespace-nowrap shadow-lg">
              Call to Book →
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
