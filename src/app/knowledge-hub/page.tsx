import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="flex-1">
        <div>
          {/* ===== HERO ===== */}
          <section className="scroll-reveal" style={{width: '100%', boxSizing: 'border-box', padding: '80px 64px 48px', background: '#F2EBDC'}}>
            <div style={{maxWidth: 840, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16}}>
              <span style={{fontFamily: '"IBM Plex Mono", monospace', fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#7A5A22'}}>§ 04 — The Knowledge Hub</span>
              <h1 style={{margin: 0, fontFamily: '"Source Serif 4", Georgia, serif', fontWeight: 600, fontSize: 42, color: '#1B2A38'}}>Judgements, Blog &amp; News</h1>
              <p style={{margin: 0, fontSize: 16, lineHeight: '1.6', color: '#453F32'}}>The landmark cases, articles, and current developments every practising doctor should be aware of — curated by Dr. Vinaykumar S.</p>
            </div>
          </section>
          {/* ===== JUDGEMENTS ===== */}
          <section id="judgements" style={{width: '100%', boxSizing: 'border-box', padding: '48px 64px 96px', background: '#F2EBDC'}}>
            <div style={{maxWidth: 900, margin: '0 auto', display: 'flex', flexDirection: 'column'}}>
              <span style={{fontFamily: '"IBM Plex Mono", monospace', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#7A5A22', paddingBottom: 14, borderBottom: '1px solid rgba(27,42,56,0.3)'}}>Landmark Judgements</span>
              <div className="mla-row" style={{display: 'flex', flexDirection: 'column', gap: 6, padding: '24px 0', borderBottom: '1px solid rgba(27,42,56,0.15)'}}>
                <span className="mla-row-title" style={{fontFamily: '"Source Serif 4", Georgia, serif', fontWeight: 600, fontSize: 19, color: '#1B2A38'}}>IMA vs V.P. Shantha &amp; Others (1995)</span>
                <span style={{fontFamily: '"IBM Plex Mono", monospace', fontSize: 11, color: '#6B6350'}}>AIR 1996 SC 550</span>
                <p style={{margin: 0, fontSize: 15, lineHeight: '1.6', color: '#453F32'}}>Founded consumer-forum jurisdiction over doctors and hospitals, bringing medical services under the Consumer Protection Act.</p>
              </div>
              <div className="mla-row" style={{display: 'flex', flexDirection: 'column', gap: 6, padding: '24px 0', borderBottom: '1px solid rgba(27,42,56,0.15)'}}>
                <span className="mla-row-title" style={{fontFamily: '"Source Serif 4", Georgia, serif', fontWeight: 600, fontSize: 19, color: '#1B2A38'}}>Jacob Mathew vs State of Punjab (2005)</span>
                <span style={{fontFamily: '"IBM Plex Mono", monospace', fontSize: 11, color: '#6B6350'}}>(2005) 6 SCC 1</span>
                <p style={{margin: 0, fontSize: 15, lineHeight: '1.6', color: '#453F32'}}>Held that an independent expert opinion is required before a doctor can be arrested on a criminal negligence complaint.</p>
              </div>
              <div className="mla-row" style={{display: 'flex', flexDirection: 'column', gap: 6, padding: '24px 0', borderBottom: '1px solid rgba(27,42,56,0.15)'}}>
                <span className="mla-row-title" style={{fontFamily: '"Source Serif 4", Georgia, serif', fontWeight: 600, fontSize: 19, color: '#1B2A38'}}>Samira Kohli vs Dr. Prabha Manchanda (2008)</span>
                <span style={{fontFamily: '"IBM Plex Mono", monospace', fontSize: 11, color: '#6B6350'}}>(2008) 2 SCC 1</span>
                <p style={{margin: 0, fontSize: 15, lineHeight: '1.6', color: '#453F32'}}>Established that blanket consent forms are legally insufficient — consent must be specific to the procedure performed.</p>
              </div>
              <div className="mla-row" style={{display: 'flex', flexDirection: 'column', gap: 6, padding: '24px 0', borderBottom: '1px solid rgba(27,42,56,0.15)'}}>
                <span className="mla-row-title" style={{fontFamily: '"Source Serif 4", Georgia, serif', fontWeight: 600, fontSize: 19, color: '#1B2A38'}}>Martin F. D'Souza vs Mohd. Ishfaq (2009)</span>
                <span style={{fontFamily: '"IBM Plex Mono", monospace', fontSize: 11, color: '#6B6350'}}>(2009) 3 SCC 1</span>
                <p style={{margin: 0, fontSize: 15, lineHeight: '1.6', color: '#453F32'}}>Required an independent expert-opinion threshold before a negligence complaint against a doctor is admitted for trial.</p>
              </div>
              <p style={{margin: '24px 0 0', fontSize: 14, color: '#6B6350'}}>More landmark judgements are covered in depth inside the Book + Masterclass and Monthly Live Training.</p>
            </div>
          </section>
          {/* ===== BLOG ===== */}
          <section id="blog" style={{width: '100%', boxSizing: 'border-box', padding: '0 64px 96px', background: '#1B2A38'}}>
            <div style={{maxWidth: 900, margin: '0 auto', display: 'flex', flexDirection: 'column', paddingTop: 80}}>
              <span style={{fontFamily: '"IBM Plex Mono", monospace', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#D3A857', paddingBottom: 14, borderBottom: '1px solid rgba(242,235,220,0.3)'}}>From the Blog</span>
              <div className="mla-row" style={{display: 'flex', flexDirection: 'column', gap: 6, padding: '24px 0', borderBottom: '1px solid rgba(242,235,220,0.12)'}}>
                <span style={{fontFamily: '"IBM Plex Mono", monospace', fontSize: 11, color: '#8D8875'}}>1 August 2026</span>
                <span className="mla-row-title" style={{fontFamily: '"Source Serif 4", Georgia, serif', fontWeight: 600, fontSize: 20, color: '#F2EBDC'}}>The Doctor's Guide to Responding to Legal Notices</span>
                <p style={{margin: 0, fontSize: 15, lineHeight: '1.6', color: '#C9BFA9'}}>A 5-step framework to respond safely, gather the right evidence, and protect your licence when a notice arrives.</p>
              </div>
              <div className="mla-row" style={{display: 'flex', flexDirection: 'column', gap: 6, padding: '24px 0', borderBottom: '1px solid rgba(242,235,220,0.12)'}}>
                <span style={{fontFamily: '"IBM Plex Mono", monospace', fontSize: 11, color: '#8D8875'}}>28 July 2026</span>
                <span className="mla-row-title" style={{fontFamily: '"Source Serif 4", Georgia, serif', fontWeight: 600, fontSize: 20, color: '#F2EBDC'}}>3 Hidden Traps in Hospital Employment Contracts</span>
                <p style={{margin: 0, fontSize: 15, lineHeight: '1.6', color: '#C9BFA9'}}>Liability risks buried in corporate hospital agreements that doctors routinely sign without reading closely.</p>
              </div>
              <div className="mla-row" style={{display: 'flex', flexDirection: 'column', gap: 6, padding: '24px 0'}}>
                <span style={{fontFamily: '"IBM Plex Mono", monospace', fontSize: 11, color: '#8D8875'}}>26 May 2026</span>
                <span className="mla-row-title" style={{fontFamily: '"Source Serif 4", Georgia, serif', fontWeight: 600, fontSize: 20, color: '#F2EBDC'}}>Top 5 Medico-Legal Mistakes Every Doctor Makes</span>
                <p style={{margin: 0, fontSize: 15, lineHeight: '1.6', color: '#C9BFA9'}}>Documentation, consent, and communication errors to fix before they become a case file.</p>
              </div>
            </div>
          </section>
          {/* ===== NEWS ===== */}
          <section id="news" style={{width: '100%', boxSizing: 'border-box', padding: '80px 64px 96px', background: '#F2EBDC'}}>
            <div style={{maxWidth: 900, margin: '0 auto', display: 'flex', flexDirection: 'column'}}>
              <span style={{fontFamily: '"IBM Plex Mono", monospace', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#7A5A22', paddingBottom: 14, borderBottom: '1px solid rgba(27,42,56,0.3)'}}>Medico-Legal News</span>
              <div className="mla-row" style={{display: 'flex', flexDirection: 'column', gap: 6, padding: '22px 0', borderBottom: '1px solid rgba(27,42,56,0.15)'}}>
                <span style={{fontFamily: '"IBM Plex Mono", monospace', fontSize: 10, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#6B6350'}}>Supreme Court · 2 August 2026</span>
                <span className="mla-row-title" style={{fontSize: 17, color: '#1B2A38', fontWeight: 600}}>"Doctors Cannot Be Held Liable for Every Unfortunate Death"</span>
              </div>
              <div className="mla-row" style={{display: 'flex', flexDirection: 'column', gap: 6, padding: '22px 0', borderBottom: '1px solid rgba(27,42,56,0.15)'}}>
                <span style={{fontFamily: '"IBM Plex Mono", monospace', fontSize: 10, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#6B6350'}}>Court Judgement · 25 June 2026</span>
                <span className="mla-row-title" style={{fontSize: 17, color: '#1B2A38', fontWeight: 600}}>Surgical complication alone does not imply negligence, court rules</span>
              </div>
              <div className="mla-row" style={{display: 'flex', flexDirection: 'column', gap: 6, padding: '22px 0'}}>
                <span style={{fontFamily: '"IBM Plex Mono", monospace', fontSize: 10, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#6B6350'}}>NCDRC · 20 June 2026</span>
                <span className="mla-row-title" style={{fontSize: 17, color: '#1B2A38', fontWeight: 600}}>Ruling clarifies hospital liability for visiting consultants</span>
              </div>
            </div>
          </section>
          {/* ===== ABOUT US ===== */}
          <section id="about" style={{width: '100%', boxSizing: 'border-box', padding: '0 64px 96px', background: '#F2EBDC'}}>
            <div style={{maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '220px minmax(0,1fr)', gap: 48, alignItems: 'center', background: '#FAF6EC', border: '1px solid rgba(27,42,56,0.3)', boxSizing: 'border-box', padding: 48}}>
              <div style={{width: 220, height: 220, borderRadius: '50%', border: '1px solid rgba(27,42,56,0.35)', background: '#E8DEC8', overflow: 'hidden', boxSizing: 'border-box'}}>
                <img src="/dr-vinaykumar-circle.jpg" alt="Dr. Vinaykumar S" style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center'}} />
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 14}}>
                <span style={{fontFamily: '"IBM Plex Mono", monospace', fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#7A5A22'}}>About Us</span>
                <h2 style={{margin: 0, fontFamily: '"Source Serif 4", Georgia, serif', fontWeight: 600, fontSize: 30, color: '#1B2A38'}}>MedicoLegalAid.com</h2>
                <p style={{margin: 0, fontFamily: '"IBM Plex Mono", monospace', fontSize: 13, color: '#453F32'}}>Founder: Dr. Vinaykumar S · MBBS · DCH · DNB · MNAMS · LLB · PGDMLE (NLSIU)</p>
                <p style={{margin: 0, fontSize: 15, lineHeight: '1.65', color: '#453F32', maxWidth: '66ch'}}>MedicoLegalAid is a platform dedicated to driving medico-legal literacy across the medical fraternity. Founded by Dr. Vinaykumar S — a practising Senior Paediatrician and medical law expert, and Professor of Paediatrics at SS Institute of Medical Sciences &amp; Research Centre, Davangere — it exists to bridge medicine and law, so doctors can practise from knowledge rather than fear. He is widely regarded as one of India's leading voices on medico-legal risk, documentation, consent, and doctor-patient communication.</p>
              </div>
            </div>
          </section>
          {/* ===== FOOTER ===== */}
        </div>
        
        
      </main>
      <Footer />
    </div>
  );
}
