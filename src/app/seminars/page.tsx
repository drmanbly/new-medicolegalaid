import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hospital & Corporate Medico-Legal Training | MedicoLegalAid",
  description: "On-site medico-legal training for hospitals and medical associations. CME-accredited, 6–7 hour full-day seminars covering consent, MLC handling, negligence and more.",
};

const areas = [
  "Consent documentation for procedures and admissions",
  "Handling MLCs — police intimation, dying declarations, brought-dead cases",
  "Understanding negligence liability and standard of care",
  "Writing legally valid medical, wound & death certificates",
  "Vicarious liability for junior staff, nurses & technicians",
  "Selecting adequate professional indemnity insurance",
  "Responding to legal notices and consumer forum filings",
];

const reasons = [
  { num: "01", text: "Vicarious liability — hospitals are legally answerable for a treating doctor's negligence, not just the individual." },
  { num: "02", text: "Reputation & patient trust — one mishandled MLC or negligence case can undo years of institutional goodwill." },
  { num: "03", text: "Insurance & accreditation — documented training strengthens indemnity cover and supports NABH audits." },
  { num: "04", text: "Consistent standard of care — training every doctor closes gaps in consent and MLC handling across departments." },
  { num: "05", text: "Faster, more confident doctors — clinicians who know their legal protections act decisively under pressure." },
];

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="flex-1">

        {/* ===== HERO ===== */}
        <section className="w-full bg-[#F2EBDC] px-6 md:px-[64px] pt-20 pb-16 scroll-reveal">
          <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col gap-6">
              <span className="font-mono text-[12px] tracking-[0.14em] uppercase text-[#7A5A22]">For Hospitals & Associations</span>
              <h1 className="m-0 font-serif font-semibold text-[38px] md:text-[48px] leading-[1.15] text-primary">
                Corporate &<br />Institutional Training
              </h1>
              <p className="text-[17px] leading-[1.65] text-[#453F32] max-w-[52ch]">
                Seven key areas including consent documentation, MLC handling, negligence liability, certificate drafting, indemnity insurance, and vicarious liability — brought on-site to your institution, with CME credit for attendees.
              </p>
              <div className="flex gap-3 flex-wrap mt-2">
                <a href="tel:8105633270" className="bg-primary text-[#F2EBDC] text-[15px] font-semibold px-8 py-4 border border-primary hover:bg-[#0d1720] transition-colors">
                  📞 Call to Request a Workshop
                </a>
                <a href="#curriculum" className="bg-transparent text-primary text-[15px] font-semibold px-8 py-4 border border-primary hover:bg-primary/5 transition-colors">
                  See What We Cover ↓
                </a>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-px bg-primary/15 border border-primary/15">
              {[
                { stat: "6–7 hrs", label: "Full-day, on-site session" },
                { stat: "50–200", label: "Doctors & clinical staff" },
                { stat: "CME", label: "Credit points applicable" },
                { stat: "On-site", label: "Conducted at your venue" },
              ].map(item => (
                <div key={item.stat} className="bg-[#FAF6EC] p-8 flex flex-col gap-2 hover:bg-[#F2EBDC] transition-colors">
                  <span className="font-serif font-semibold text-[28px] text-primary">{item.stat}</span>
                  <span className="text-[13px] text-[#6B6350]">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CURRICULUM ===== */}
        <section id="curriculum" className="w-full bg-primary px-6 md:px-[64px] py-[72px] scroll-reveal">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-10">
            <div className="flex flex-col gap-3 max-w-[55ch]">
              <span className="font-mono text-[12px] tracking-[0.14em] uppercase text-[#D3A857]">The Curriculum</span>
              <h2 className="m-0 font-serif font-semibold text-[30px] text-[#F2EBDC] leading-snug">
                Seven Key Areas We Cover On-Site
              </h2>
            </div>
            <div className="flex flex-col border-t border-[#F2EBDC]/15">
              {areas.map((area, i) => (
                <div key={i} className="flex items-center gap-6 py-5 border-b border-[#F2EBDC]/10 group hover:bg-[#F2EBDC]/[0.03] -mx-2 px-2 transition-colors">
                  <span className="font-mono text-[13px] text-[#D3A857] w-8 flex-shrink-0">0{i + 1}</span>
                  <span className="text-[16px] text-[#F2EBDC] leading-snug">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== BUSINESS CASE ===== */}
        <section className="w-full bg-[#F2EBDC] px-6 md:px-[64px] py-[72px] scroll-reveal">
          <div className="max-w-[1200px] mx-auto bg-[#FAF6EC] border border-primary/20 p-8 md:p-12 grid md:grid-cols-[1fr_1.5fr] gap-12">
            <div className="flex flex-col gap-5">
              <span className="font-mono text-[12px] tracking-wider uppercase text-[#7A5A22]">The Business Case</span>
              <h3 className="m-0 font-serif font-semibold text-[26px] text-primary leading-snug">
                Why Hospitals Invest in Training Their Doctors
              </h3>
              <p className="text-[15px] leading-[1.65] text-[#453F32]">
                A single untrained doctor's mistake becomes the hospital's legal and financial exposure — not just the individual's. Institution-wide training closes that gap before it becomes a courtroom problem.
              </p>
              <a href="tel:8105633270" className="bg-primary text-[#F2EBDC] text-[14px] font-semibold px-6 py-3.5 border border-primary hover:bg-[#0d1720] transition-colors self-start mt-2">
                Request a Workshop
              </a>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[11px] tracking-wider uppercase text-[#8A8267] pb-3 border-b border-primary/20">
                Five Reasons Hospitals Choose Us
              </span>
              {reasons.map(r => (
                <div key={r.num} className="flex gap-4 py-4 border-b border-primary/10 last:border-0 group hover:bg-primary/[0.02] -mx-1 px-1 transition-colors">
                  <span className="font-mono text-[12px] text-[#7A5A22] w-8 flex-shrink-0 pt-0.5">{r.num}</span>
                  <span className="text-[15px] text-[#201C14] leading-relaxed">{r.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FINAL CTA ===== */}
        <section className="w-full bg-primary px-6 md:px-[64px] py-14 scroll-reveal">
          <div className="max-w-[800px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col gap-2">
              <span className="font-serif italic text-[20px] text-[#F2EBDC]">"Protect your institution before it's too late."</span>
              <span className="font-mono text-[12px] tracking-wider uppercase text-[#D3A857]">On-site · CME Credited · Customisable</span>
            </div>
            <a href="tel:8105633270" className="bg-[#A97C34] text-white text-[15px] font-bold px-10 py-4 hover:bg-[#8C6A2A] transition-colors whitespace-nowrap shadow-lg shadow-[#A97C34]/20">
              Request a Workshop →
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
