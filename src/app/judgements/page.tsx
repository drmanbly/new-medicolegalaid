import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Landmark Judgements | MedicoLegalAid",
  description: "Curated grid of landmark Supreme Court rulings affecting doctors in India. Download the original PDFs.",
};

const JUDGEMENTS = [
  {
    title: "Jacob Mathew vs State of Punjab",
    description: "Landmark ruling establishing that an independent expert opinion is required before a doctor can be arrested on a criminal negligence complaint.",
    slug: "jacob-mathew-vs-state-of-punjab"
  },
  {
    title: "IMA vs VP Shantha",
    description: "Founded consumer-forum jurisdiction over doctors and hospitals, bringing medical services under the Consumer Protection Act.",
    slug: "ima-vs-vp-shantha"
  },
  {
    title: "Rajani Prakash Malik vs Hospital",
    description: "Important judgement regarding hospital liability and the standard of care expected in emergency situations.",
    slug: "rajani-prakash-malik-vs-hospital"
  },
  {
    title: "MIOT vs Balaraman Palaniappan",
    description: "Crucial ruling detailing the expectations of informed consent and documentation standards in surgical procedures.",
    slug: "miot-vs-balaraman-palaniappan"
  },
  {
    title: "Dr. Dilip Shah vs Subhashchandra",
    description: "Ruling focusing on vicarious liability and the responsibilities of a consultant versus hospital staff.",
    slug: "dr-dilip-shah-vs-subhashchandra"
  },
  {
    title: "Samira Kohli vs Dr. Prabha Manchanda",
    description: "Established that blanket consent forms are legally insufficient — consent must be specific to the procedure actually performed.",
    slug: "samira-kohli-vs-dr-prabha-manchanda"
  },
  {
    title: "Martin Dsouza vs Mohd Ishfaq",
    description: "Required an independent expert-opinion threshold before a negligence complaint against a doctor is admitted for trial.",
    slug: "martin-dsouza-vs-mohd-ishfaq"
  }
];

export default function JudgementsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      
      <main className="flex-1">
        <section className="w-full box-border py-[72px] px-8 md:px-[64px] bg-background">
          <div className="max-w-[1200px] mx-auto">
            <div className="scroll-reveal mb-[64px]">
              <span className="font-mono text-[13px] tracking-[0.14em] uppercase text-[#7A5A22]">
                Knowledge Hub
              </span>
              <h1 className="mt-[16px] font-serif font-semibold text-[38px] md:text-[46px] leading-[1.2] text-primary">
                Landmark Judgements
              </h1>
              <p className="mt-[16px] text-[17px] leading-[1.7] text-[#453F32] max-w-[60ch]">
                The landmark cases, articles, and current developments every practising doctor should be aware of — curated by Dr. Vinaykumar S.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[32px] mb-[64px]">
              {JUDGEMENTS.map((item, i) => (
                <div key={i} className="flex flex-col bg-card border border-primary/20 p-[32px] scroll-reveal shadow-sm hover:shadow-md transition-shadow group">
                  <Link href={`/judgements/${item.slug}`} className="flex-1 flex flex-col mb-[32px]">
                    <h3 className="font-serif font-semibold text-[22px] text-primary leading-[1.3] mb-[16px] group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[15px] leading-[1.6] text-[#453F32] flex-1">
                      {item.description}
                    </p>
                  </Link>
                  <div className="flex flex-col xl:flex-row items-center gap-[12px] pt-[24px] border-t border-primary/10">
                    <Link 
                      href={`/judgements/${item.slug}`}
                      className="w-full xl:w-auto text-center bg-primary text-background font-semibold text-[13px] py-[10px] px-[16px] hover:bg-[#16212C] transition-colors whitespace-nowrap"
                    >
                      Read Analysis
                    </Link>
                    <div className="flex items-center gap-[8px] w-full xl:w-auto xl:flex-1">
                      <a 
                        href={`/judgements/${item.slug}.pdf`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 text-center bg-transparent text-primary font-semibold text-[13px] py-[10px] px-[12px] border border-primary hover:bg-primary/5 transition-colors"
                      >
                        View PDF
                      </a>
                      <a 
                        href={`/judgements/${item.slug}.pdf`} 
                        download
                        className="flex-1 text-center bg-transparent text-primary font-semibold text-[13px] py-[10px] px-[12px] border border-primary hover:bg-primary/5 transition-colors"
                      >
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#FAF6EC] border border-[#D9D2C0] p-[24px] rounded-sm text-center max-w-[800px] mx-auto scroll-reveal">
              <p className="font-mono text-[12px] uppercase tracking-[0.05em] text-[#6B6350] leading-[1.6]">
                <strong>Disclaimer:</strong> Case summaries and legal principles on this page are for educational purposes only and do not constitute legal advice. PDFs are sourced from public Indian court records.
              </p>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
