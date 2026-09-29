import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Live Medico-Legal Webinars & Training for Doctors",
  description: "Join upcoming live webinars on professional indemnity, handling legal notices, and consent documentation.",
  alternates: { canonical: "/webinars" }
};

const sessions = [
  { num: "01", time: "9:00 – 10:30 AM", title: "Introduction to the Legal System & Civil vs Criminal Negligence", desc: "How law and healthcare are interconnected — the structure of the legal system, civil vs criminal negligence, and how a medical act becomes a criminal offence." },
  { num: "02", time: "10:45 AM – 12:15 PM", title: "Understanding Medical Negligence", desc: "How courts analyse allegations against doctors — what constitutes breach of duty, standard of care, and how proper documentation prevents false cases." },
  { num: "03", time: "1:00 – 2:15 PM", title: "Learning How to Take a Valid Consent", desc: "Components of consent, common errors, and how courts evaluate consent forms — with model formats and landmark judgments so you can draft strong, court-proof consent." },
  { num: "04", time: "2:30 – 3:45 PM", title: "Writing a Legally Valid Medical, Wound & Death Certificate", desc: "Mandatory identity verification, essential components, and common mistakes that lead to legal complications — with model certificates for routine use." },
  { num: "05", time: "4:00 – 5:15 PM", title: "How to Reply to a Legal Notice", desc: "What evidence needs to be provided, and how to draft a proper written statement when a case is filed in the Consumer Forum." },
];

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="flex-1">

        {/* ===== HERO ===== */}
        <section className="w-full bg-[#F2EBDC] px-6 md:px-[64px] pt-20 pb-16 scroll-reveal">
          <div className="max-w-[800px] mx-auto flex flex-col gap-6">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="font-mono text-[12px] tracking-[0.14em] uppercase text-[#7A5A22]">A New Cohort Every Month</span>
              <span className="inline-flex items-center gap-1.5 bg-red-600 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-300 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                Live · Oct 18th
              </span>
            </div>

            <h1 className="m-0 font-serif font-semibold text-[40px] md:text-[50px] leading-[1.1] text-primary">
              Monthly Live Medico-Legal Training
            </h1>

            <p className="text-[17px] leading-[1.65] text-[#453F32]">
              A single, focused Sunday with Dr. Vinaykumar S — live on Zoom, capped at just <strong className="text-primary">30 doctors</strong>, with direct Q&amp;A and model templates you can apply the same week.
            </p>

            <div className="bg-primary/5 border border-primary/20 px-5 py-4 flex items-center gap-4 flex-wrap">
              <span className="font-mono text-[13px] font-bold text-primary uppercase tracking-wider">Next Session:</span>
              <span className="text-[15px] text-[#453F32] font-medium">Sunday, 18 October 2026 · 9 AM – 6 PM · Live on Zoom</span>
            </div>

            {/* Stats row */}
            <div className="flex items-center gap-6 py-5 border-y border-primary/20 flex-wrap">
              <div className="flex flex-col">
                <span className="font-serif font-semibold text-[26px] text-primary">30</span>
                <span className="font-mono text-[11px] text-[#7A5A22] uppercase tracking-wider">Seats only</span>
              </div>
              <div className="w-px h-10 bg-primary/20 hidden sm:block" />
              <div className="flex flex-col">
                <span className="font-serif font-semibold text-[26px] text-primary">9 AM</span>
                <span className="font-mono text-[11px] text-[#7A5A22] uppercase tracking-wider">to 6 PM · Full Day</span>
              </div>
              <div className="w-px h-10 bg-primary/20 hidden sm:block" />
              <div className="flex flex-col">
                <span className="font-serif font-semibold text-[26px] text-primary">Live</span>
                <span className="font-mono text-[11px] text-[#7A5A22] uppercase tracking-wider">Q&A with Dr. Vinay</span>
              </div>
            </div>

            {/* Price + CTA */}
            <div className="flex flex-col gap-3">
              <div className="flex items-baseline gap-3 flex-wrap">
                <span className="font-serif font-semibold text-[36px] text-primary">₹2,999</span>
                <span className="text-[18px] text-[#8A8267] line-through">₹4,999</span>
                <span className="font-mono text-[11px] font-bold tracking-wider text-white bg-[#A97C34] px-2 py-1">40% OFF</span>
              </div>
              <p className="text-[13px] text-[#6B6350]">30 seats only · E-certificate included · WhatsApp group access for follow-up questions</p>
              <div className="flex gap-3 flex-wrap mt-1">
                <a href="#" className="bg-primary text-[#F2EBDC] text-[15px] font-semibold px-8 py-4 border border-primary hover:bg-[#0d1720] transition-colors">
                  Reserve Your Seat — ₹2,999
                </a>
                <a href="#sessions" className="bg-transparent text-primary text-[15px] font-semibold px-8 py-4 border border-primary hover:bg-primary/5 transition-colors">
                  See Day Schedule ↓
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ===== URGENCY STRIP ===== */}
        <div className="w-full bg-[#8C2F26] px-6 md:px-[64px] py-4">
          <div className="max-w-[1200px] mx-auto flex items-center justify-between flex-wrap gap-3">
            <span className="font-mono text-[12px] tracking-wider text-[#F6E9E2]">
              <strong className="text-white">NOTICE OF REGISTRATION —</strong>&nbsp; Only 30 seats available for the 18 October cohort
            </span>
            <a href="#" className="font-mono text-[12px] font-bold text-white border-b border-white pb-px hover:opacity-80 transition-opacity">Reserve a seat →</a>
          </div>
        </div>

        {/* ===== WHY LIVE STATS ===== */}
        <section className="w-full bg-primary px-6 md:px-[64px] py-14 scroll-reveal">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#F2EBDC]/15">
            {[
              { stat: "30", label: "Seats per cohort — small enough for real Q&A" },
              { stat: "Monthly", label: "A new live cohort every month — never a long wait" },
              { stat: "Direct", label: "Live Q&A with Dr. Vinaykumar S, not a recording" },
            ].map(item => (
              <div key={item.stat} className="flex flex-col gap-2 px-8 py-6 first:pl-0 last:pr-0">
                <span className="font-serif font-semibold text-[28px] text-[#D3A857]">{item.stat}</span>
                <span className="text-[14px] text-[#D9D2C0] leading-snug">{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ===== CURRICULUM ===== */}
        <section id="sessions" className="w-full bg-[#F2EBDC] px-6 md:px-[64px] py-[80px] scroll-reveal">
          <div className="max-w-[1000px] mx-auto bg-[#FAF6EC] border border-primary/25 p-10 md:p-14">
            <span className="font-mono text-[12px] tracking-[0.14em] uppercase text-[#7A5A22]">The Day, Session by Session</span>
            <h2 className="font-serif font-semibold text-[28px] text-primary mt-2 mb-8">Five Sessions Covered</h2>
            <div className="flex flex-col">
              {sessions.map((s, i) => (
                <div key={s.num}>
                  <div className="flex gap-6 py-6 group hover:bg-primary/[0.02] px-2 -mx-2 transition-colors border-t border-primary/15">
                    <span className="font-mono text-[13px] text-[#7A5A22] w-8 flex-shrink-0 pt-0.5">{s.num}</span>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-baseline gap-3 flex-wrap">
                        <span className="font-serif font-semibold text-[17px] text-primary leading-snug">{s.title}</span>
                        <span className="font-mono text-[11px] text-[#7A5A22] whitespace-nowrap">{s.time}</span>
                      </div>
                      <p className="m-0 text-[15px] leading-[1.65] text-[#453F32]">{s.desc}</p>
                    </div>
                  </div>
                  {/* Break rows */}
                  {i === 0 && <div className="py-2 px-2 border-t border-primary/10 font-mono text-[12px] text-[#8A8267]">☕ Tea Break · 10:30 – 10:45 AM</div>}
                  {i === 1 && <div className="py-2 px-2 border-t border-primary/10 font-mono text-[12px] text-[#8A8267]">🍽 Lunch Break · 12:15 – 1:00 PM</div>}
                  {i === 2 && <div className="py-2 px-2 border-t border-primary/10 font-mono text-[12px] text-[#8A8267]">☕ Tea Break · 2:15 – 2:30 PM</div>}
                  {i === 3 && <div className="py-2 px-2 border-t border-primary/10 font-mono text-[12px] text-[#8A8267]">☕ Short Break · 3:45 – 4:00 PM</div>}
                </div>
              ))}
              <div className="py-3 px-2 border-t border-primary/10 font-mono text-[12px] text-[#8A8267]">Open Q&A & Certificate Distribution · 5:15 – 6:00 PM</div>

              <div className="flex items-center justify-between flex-wrap gap-5 mt-6 pt-8 border-t border-primary/20">
                <span className="font-mono text-[12px] text-[#6B6350]">Live on Zoom · 9 AM – 6 PM · 30 seats · E-certificate included</span>
                <a href="#" className="bg-primary text-[#F2EBDC] text-[15px] font-semibold px-8 py-4 hover:bg-[#0d1720] transition-colors">
                  Reserve Your Seat — ₹2,999
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ===== FINAL CTA ===== */}
        <section className="w-full bg-primary px-6 md:px-[64px] py-14 scroll-reveal">
          <div className="max-w-[800px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col gap-2">
              <span className="font-serif italic text-[20px] text-[#F2EBDC]">"Learn it live. Apply it immediately."</span>
              <span className="font-mono text-[12px] tracking-wider uppercase text-[#D3A857]">Next Session: 18 October 2026 · Only 30 Seats</span>
            </div>
            <a href="#" className="bg-[#A97C34] text-white text-[15px] font-semibold px-10 py-4 hover:bg-[#8C6A2A] transition-colors whitespace-nowrap shadow-lg shadow-[#A97C34]/20">
              Reserve Your Seat →
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
