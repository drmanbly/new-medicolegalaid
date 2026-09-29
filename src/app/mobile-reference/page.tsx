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
          {/* ===== QUICK NAV STRIP ===== */}
          <nav className="mla-navstrip" style={{width: '100%', boxSizing: 'border-box', padding: '12px 20px', display: 'flex', alignItems: 'center', gap: 16, borderBottom: '1px solid rgba(27,42,56,0.15)', whiteSpace: 'nowrap', position: 'sticky', top: 61, zIndex: 49, background: '#F2EBDC'}}>
            <a href="/" style={{fontSize: 13, fontWeight: 500, color: '#1B2A38'}}>Book + Course</a>
            <a href="/" style={{fontSize: 13, fontWeight: 500, color: '#1B2A38'}}>Live Training</a>
            <a href="/" style={{display: 'flex', alignItems: 'center', gap: 5, fontSize: 12, fontWeight: 700, color: '#8C2F26', background: 'rgba(140,47,38,0.09)', border: '1px solid rgba(140,47,38,0.4)', padding: '6px 10px', flexShrink: 0}}>
              <span style={{width: 5, height: 5, borderRadius: '50%', background: '#8C2F26', display: 'inline-block'}} /> Free Resources ▾
            </a>
            <a href="/" style={{fontSize: 13, fontWeight: 500, color: '#1B2A38'}}>1:1 Consult</a>
            <a href="/" style={{fontSize: 13, fontWeight: 500, color: '#1B2A38'}}>Corporate Training</a>
          </nav>
          {/* ===== UTILITY / CONTACT ===== */}
          <div style={{width: '100%', background: '#16212C', boxSizing: 'border-box', padding: '10px 20px', display: 'flex', flexDirection: 'column', gap: 2, fontFamily: '"IBM Plex Mono", monospace', fontSize: 11, color: '#C9BFA9'}}>
            <span>+91 91106 89797 · contact@medicolegalaid.com</span>
          </div>
          {/* ===== HERO ===== */}
          <section className="scroll-reveal" style={{width: '100%', boxSizing: 'border-box', padding: '40px 20px 36px'}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: 18}}>
              <span style={{fontFamily: '"IBM Plex Mono", monospace', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#7A5A22'}}>For Practising Indian Doctors</span>
              <h1 style={{margin: 0, fontFamily: '"Source Serif 4", Georgia, serif', fontWeight: 600, fontSize: 32, lineHeight: '1.15', color: '#1B2A38'}}><span style={{color: '#8C2F26'}}>Protect Your Practice.</span> Master Medico-Legal Knowledge.</h1>
              <p style={{margin: 0, fontSize: 16, lineHeight: '1.6', color: '#453F32'}}>We make the law simple for doctors. Our program gives you a practical medicolegal book, a 20-hour pre-recorded video masterclass, and monthly live training. Pick your mode of learning, and practise with confidence.</p>
              <div style={{borderTop: '1px solid rgba(27,42,56,0.25)', borderBottom: '1px solid rgba(27,42,56,0.25)', padding: '16px 0'}}>
                <span style={{fontFamily: '"Source Serif 4", Georgia, serif', fontStyle: 'italic', fontSize: 15, lineHeight: '1.5', color: '#1B2A38'}}>"Medical negligence cases are rising. Ignorance of law is no longer an excuse."</span>
              </div>
              <div style={{width: '100%', aspectRatio: '917 / 1191', boxSizing: 'border-box', marginTop: 4, overflow: 'hidden'}}>
                <img src="/dr-vinay-cutout.png" alt="Dr. Vinaykumar S, Founder of MedicoLegalAid" style={{width: '100%', height: '100%', objectFit: 'contain', display: 'block'}} />
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 12, marginTop: 4}}>
                <a href="/" style={{textAlign: 'center', background: '#1B2A38', color: '#F2EBDC', fontSize: 15, fontWeight: 600, padding: '16px 24px', border: '1px solid #1B2A38'}}>Join Our Live Training on Sunday</a>
                <a href="/" style={{textAlign: 'center', background: '#8C2F26', color: '#F2EBDC', fontSize: 15, fontWeight: 600, padding: '16px 24px', border: '1px solid #8C2F26'}}>Get the Book + 20-Hour Masterclass</a>
              </div>
            </div>
          </section>
          {/* ===== ANNOUNCEMENT ===== */}
          <section className="scroll-reveal" style={{width: '100%', boxSizing: 'border-box', background: '#8C2F26', borderTop: '1px solid rgba(242,235,220,0.35)', borderBottom: '1px solid rgba(242,235,220,0.35)', padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <span style={{fontFamily: '"IBM Plex Mono", monospace', fontSize: 12, lineHeight: '1.5', color: '#F6E9E2'}}><strong style={{color: '#FFFFFF'}}>NOTICE OF REGISTRATION —</strong> This month's Live Training · 27 Sep 2026 · Only 30 seats</span>
            <a href="/" style={{fontSize: 13, fontWeight: 600, color: '#FFFFFF', borderBottom: '1px solid #FFFFFF', alignSelf: 'flex-start'}}>Reserve a seat →</a>
          </section>
          {/* ===== VIDEO ===== */}
          <section className="scroll-reveal" style={{width: '100%', boxSizing: 'border-box', padding: '44px 20px 36px'}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, textAlign: 'center'}}>
              <span style={{fontFamily: '"IBM Plex Mono", monospace', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#7A5A22'}}>Watch</span>
              <h2 style={{margin: 0, fontFamily: '"Source Serif 4", Georgia, serif', fontWeight: 600, fontSize: 24, color: '#1B2A38'}}>Why This Course Matters</h2>
              <button aria-label="Play video: Why This Course Matters" style={{position: 'relative', width: '100%', aspectRatio: '16 / 9', background: '#1B2A38', border: '1px solid rgba(27,42,56,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0, cursor: 'pointer'}}>
                <svg width={52} height={52} viewBox="0 0 64 64" aria-hidden="true"><circle cx={32} cy={32} r={31} fill="none" stroke="#D3A857" strokeWidth="1.5" /><path d="M26 20 L46 32 L26 44 Z" fill="#D3A857" /></svg>
              </button>
            </div>
          </section>
          {/* ===== RISK / CASE DOCKET ===== */}
          <section className="scroll-reveal" style={{width: '100%', boxSizing: 'border-box', padding: '56px 20px', background: '#1B2A38'}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: 20}}>
              <span style={{fontFamily: '"IBM Plex Mono", monospace', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#D3A857'}}>§ 01 — The Exposure</span>
              <h2 style={{margin: 0, fontFamily: '"Source Serif 4", Georgia, serif', fontWeight: 600, fontSize: 28, lineHeight: '1.2', color: '#F2EBDC'}}>The Legal Risk Every Doctor Faces</h2>
              <p style={{margin: 0, fontSize: 15, lineHeight: '1.6', color: '#D9D2C0', borderTop: '1px solid rgba(242,235,220,0.2)', paddingTop: 16}}>Doctors are being taken to court, paying huge compensations, and facing criminal charges.</p>
              <p style={{margin: 0, fontSize: 15, lineHeight: '1.6', color: '#D9D2C0', borderTop: '1px solid rgba(242,235,220,0.2)', paddingTop: 16}}>Patients increasingly use AI tools to detect errors, leading to legal harassment.</p>
              <p style={{margin: 0, fontSize: 15, lineHeight: '1.6', color: '#D9D2C0', borderTop: '1px solid rgba(242,235,220,0.2)', paddingTop: 16}}>A single mistake in consent, communication, or documentation can destroy years of reputation.</p>
              <div style={{display: 'flex', flexDirection: 'column', marginTop: 12}}>
                <span style={{fontFamily: '"IBM Plex Mono", monospace', fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#8D8875', paddingBottom: 8, borderBottom: '1px solid rgba(242,235,220,0.3)'}}>Cases on Record</span>
                <div style={{display: 'flex', flexDirection: 'column', padding: '16px 0', borderBottom: '1px solid rgba(242,235,220,0.15)', gap: 4}}><span style={{fontSize: 14, color: '#F2EBDC'}}>Kunal Saha vs Dr. Sukumar Mukherjee</span><span style={{fontFamily: '"Source Serif 4", Georgia, serif', fontWeight: 600, fontSize: 18, color: '#D3A857'}}>₹11 crore</span></div>
                <div style={{display: 'flex', flexDirection: 'column', padding: '16px 0', borderBottom: '1px solid rgba(242,235,220,0.15)', gap: 4}}><span style={{fontSize: 14, color: '#F2EBDC'}}>V. Krishnakumar vs State of TN</span><span style={{fontFamily: '"Source Serif 4", Georgia, serif', fontWeight: 600, fontSize: 18, color: '#D3A857'}}>₹1.38 cr + 18%</span></div>
                <div style={{display: 'flex', flexDirection: 'column', padding: '16px 0', borderBottom: '1px solid rgba(242,235,220,0.15)', gap: 4}}><span style={{fontSize: 14, color: '#F2EBDC'}}>Indu Sharma vs Apollo Hospital</span><span style={{fontFamily: '"Source Serif 4", Georgia, serif', fontWeight: 600, fontSize: 18, color: '#D3A857'}}>₹1 crore</span></div>
                <div style={{display: 'flex', flexDirection: 'column', padding: '16px 0', gap: 4}}><span style={{fontSize: 14, color: '#F2EBDC'}}>Maharaja Agrasen Hospital vs Master Rishabh</span><span style={{fontFamily: '"Source Serif 4", Georgia, serif', fontWeight: 600, fontSize: 18, color: '#D3A857'}}>₹76 lakhs</span></div>
              </div>
            </div>
          </section>
          {/* ===== INSTRUCTOR ===== */}
          <section className="scroll-reveal" style={{width: '100%', boxSizing: 'border-box', padding: '44px 20px'}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start'}}>
              <div style={{width: 120, height: 120, borderRadius: '50%', border: '1px solid rgba(27,42,56,0.35)', background: '#E8DEC8', overflow: 'hidden', boxSizing: 'border-box'}}>
                <img src="/dr-vinay-cutout.png" alt="Dr. Vinaykumar S" style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 18%'}} />
              </div>
              <span style={{fontFamily: '"IBM Plex Mono", monospace', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#7A5A22'}}>The Founder</span>
              <h2 style={{margin: 0, fontFamily: '"Source Serif 4", Georgia, serif', fontWeight: 600, fontSize: 26, color: '#1B2A38'}}>Dr. Vinaykumar S</h2>
              <p style={{margin: 0, fontFamily: '"IBM Plex Mono", monospace', fontSize: 12, color: '#453F32'}}>MBBS · DCH · DNB · MNAMS · LLB · PGDMLE (NLSIU)</p>
              <p style={{margin: 0, fontSize: 15, lineHeight: '1.6', color: '#453F32'}}>Professor of Paediatrics, SS Institute of Medical Sciences &amp; Research Centre, Davangere. Past President, IAP Karnataka Medico-Legal Group. Built MedicoLegalAid to bridge medicine and law.</p>
            </div>
          </section>
          {/* ===== KEY LEGAL FACTS ===== */}
          <section className="scroll-reveal" style={{width: '100%', boxSizing: 'border-box', padding: '56px 20px'}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: 28}}>
              <span style={{fontFamily: '"IBM Plex Mono", monospace', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#7A5A22'}}>§ 02 — What Every Doctor Must Know</span>
              <h2 style={{margin: 0, fontFamily: '"Source Serif 4", Georgia, serif', fontWeight: 600, fontSize: 26, color: '#1B2A38'}}>Six Things Every Doctor Learns the Hard Way</h2>
              <div style={{display: 'flex', flexDirection: 'column', border: '1px solid rgba(27,42,56,0.2)'}}>
                <div style={{padding: 24, display: 'flex', gap: 16, borderBottom: '1px solid rgba(27,42,56,0.2)'}}><span style={{fontFamily: '"Source Serif 4", Georgia, serif', fontWeight: 600, fontSize: 24, color: '#A97C34'}}>§1</span><p style={{margin: 0, fontSize: 15, lineHeight: '1.6', color: '#201C14'}}>Immediate MLC police reporting is legally mandatory.</p></div>
                <div style={{padding: 24, display: 'flex', gap: 16, borderBottom: '1px solid rgba(27,42,56,0.2)'}}><span style={{fontFamily: '"Source Serif 4", Georgia, serif', fontWeight: 600, fontSize: 24, color: '#A97C34'}}>§2</span><p style={{margin: 0, fontSize: 15, lineHeight: '1.6', color: '#201C14'}}>No hospital can refuse emergency treatment regardless of medicolegal implications.</p></div>
                <div style={{padding: 24, display: 'flex', gap: 16, borderBottom: '1px solid rgba(27,42,56,0.2)'}}><span style={{fontFamily: '"Source Serif 4", Georgia, serif', fontWeight: 600, fontSize: 24, color: '#A97C34'}}>§3</span><p style={{margin: 0, fontSize: 15, lineHeight: '1.6', color: '#201C14'}}>MLC reports serve as crucial criminal trial evidence.</p></div>
                <div style={{padding: 24, display: 'flex', gap: 16, borderBottom: '1px solid rgba(27,42,56,0.2)'}}><span style={{fontFamily: '"Source Serif 4", Georgia, serif', fontWeight: 600, fontSize: 24, color: '#A97C34'}}>§4</span><p style={{margin: 0, fontSize: 15, lineHeight: '1.6', color: '#201C14'}}>A single mistake in consent documentation can lead to massive compensation claims.</p></div>
                <div style={{padding: 24, display: 'flex', gap: 16, borderBottom: '1px solid rgba(27,42,56,0.2)'}}><span style={{fontFamily: '"Source Serif 4", Georgia, serif', fontWeight: 600, fontSize: 24, color: '#A97C34'}}>§5</span><p style={{margin: 0, fontSize: 15, lineHeight: '1.6', color: '#201C14'}}>Indemnity insurance cannot protect you from criminal negligence.</p></div>
                <div style={{padding: 24, display: 'flex', gap: 16}}><span style={{fontFamily: '"Source Serif 4", Georgia, serif', fontWeight: 600, fontSize: 24, color: '#A97C34'}}>§6</span><p style={{margin: 0, fontSize: 15, lineHeight: '1.6', color: '#201C14'}}>Ignorance of the law is never an excuse in court.</p></div>
              </div>
            </div>
          </section>
          {/* ===== KNOWLEDGE HUB (teaser) ===== */}
          <section className="scroll-reveal" style={{width: '100%', boxSizing: 'border-box', padding: '56px 20px', background: '#1B2A38'}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: 36}}>
              <div style={{display: 'flex', flexDirection: 'column', gap: 14}}>
                <span style={{fontFamily: '"IBM Plex Mono", monospace', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#D3A857'}}>§ 03 — The Knowledge Hub</span>
                <h2 style={{margin: 0, fontFamily: '"Source Serif 4", Georgia, serif', fontWeight: 600, fontSize: 26, color: '#F2EBDC'}}>Free Resources, Judgements &amp; News</h2>
                <a href="/" style={{fontFamily: '"IBM Plex Mono", monospace', fontSize: 12, fontWeight: 600, color: '#D3A857', alignSelf: 'flex-start', borderBottom: '1px solid #D3A857'}}>Get Free Legal Tips →</a>
              </div>
              {/* Landmark Judgements */}
              <div style={{display: 'flex', flexDirection: 'column'}}>
                <span style={{fontFamily: '"IBM Plex Mono", monospace', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#D3A857', paddingBottom: 10, borderBottom: '1px solid rgba(242,235,220,0.3)'}}>Landmark Judgements</span>
                <div style={{padding: '14px 0', borderBottom: '1px solid rgba(242,235,220,0.15)', display: 'flex', flexDirection: 'column', gap: 3}}>
                  <span style={{fontSize: 14, fontWeight: 600, color: '#F2EBDC'}}>IMA vs V.P. Shantha &amp; Others (1995)</span>
                  <span style={{fontFamily: '"IBM Plex Mono", monospace', fontSize: 10, color: '#8D8875'}}>AIR 1996 SC 550</span>
                  <span style={{fontSize: 13, color: '#C9BFA9'}}>Founded consumer-forum jurisdiction over doctors and hospitals.</span>
                </div>
                <div style={{padding: '14px 0', borderBottom: '1px solid rgba(242,235,220,0.15)', display: 'flex', flexDirection: 'column', gap: 3}}>
                  <span style={{fontSize: 14, fontWeight: 600, color: '#F2EBDC'}}>Samira Kohli vs Dr. Prabha Manchanda (2008)</span>
                  <span style={{fontFamily: '"IBM Plex Mono", monospace', fontSize: 10, color: '#8D8875'}}>(2008) 2 SCC 1</span>
                  <span style={{fontSize: 13, color: '#C9BFA9'}}>Blanket consent forms are legally insufficient.</span>
                </div>
                <a href="/" className="mla-link" style={{marginTop: 14, fontFamily: '"IBM Plex Mono", monospace', fontSize: 12, fontWeight: 600, color: '#D3A857'}}>Explore More Judgements →</a>
              </div>
              {/* Blog */}
              <div style={{display: 'flex', flexDirection: 'column'}}>
                <span style={{fontFamily: '"IBM Plex Mono", monospace', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#D3A857', paddingBottom: 10, borderBottom: '1px solid rgba(242,235,220,0.3)'}}>From the Blog</span>
                <div style={{padding: '14px 0', borderBottom: '1px solid rgba(242,235,220,0.15)', display: 'flex', flexDirection: 'column', gap: 3}}>
                  <span style={{fontFamily: '"IBM Plex Mono", monospace', fontSize: 10, color: '#8D8875'}}>1 Aug 2026</span>
                  <span style={{fontFamily: '"Source Serif 4", Georgia, serif', fontSize: 15, fontWeight: 600, color: '#F2EBDC'}}>The Doctor's Guide to Responding to Legal Notices</span>
                </div>
                <div style={{padding: '14px 0', display: 'flex', flexDirection: 'column', gap: 3}}>
                  <span style={{fontFamily: '"IBM Plex Mono", monospace', fontSize: 10, color: '#8D8875'}}>28 Jul 2026</span>
                  <span style={{fontFamily: '"Source Serif 4", Georgia, serif', fontSize: 15, fontWeight: 600, color: '#F2EBDC'}}>3 Hidden Traps in Hospital Employment Contracts</span>
                </div>
                <a href="/" className="mla-link" style={{marginTop: 14, fontFamily: '"IBM Plex Mono", monospace', fontSize: 12, fontWeight: 600, color: '#D3A857'}}>View All Posts →</a>
              </div>
              {/* News */}
              <div style={{display: 'flex', flexDirection: 'column'}}>
                <span style={{fontFamily: '"IBM Plex Mono", monospace', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#D3A857', paddingBottom: 10, borderBottom: '1px solid rgba(242,235,220,0.3)'}}>Medico-Legal News</span>
                <div style={{padding: '14px 0', borderBottom: '1px solid rgba(242,235,220,0.15)', display: 'flex', flexDirection: 'column', gap: 3}}>
                  <span style={{fontFamily: '"IBM Plex Mono", monospace', fontSize: 9, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#8D8875'}}>Supreme Court · 2 Aug 2026</span>
                  <span style={{fontSize: 14, color: '#F2EBDC'}}>"Doctors Cannot Be Held Liable for Every Unfortunate Death"</span>
                </div>
                <div style={{padding: '14px 0', display: 'flex', flexDirection: 'column', gap: 3}}>
                  <span style={{fontFamily: '"IBM Plex Mono", monospace', fontSize: 9, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#8D8875'}}>NCDRC · 20 Jun 2026</span>
                  <span style={{fontSize: 14, color: '#F2EBDC'}}>Ruling clarifies hospital liability for visiting consultants</span>
                </div>
                <a href="/" className="mla-link" style={{marginTop: 14, fontFamily: '"IBM Plex Mono", monospace', fontSize: 12, fontWeight: 600, color: '#D3A857'}}>View All News →</a>
              </div>
            </div>
          </section>
          {/* ===== TESTIMONIALS ===== */}
          <section className="scroll-reveal" style={{width: '100%', boxSizing: 'border-box', padding: '56px 20px', background: '#FAF6EC'}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: 28}}>
              <span style={{fontFamily: '"IBM Plex Mono", monospace', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#7A5A22'}}>§ 05 — Trusted by Practising Doctors Across India</span>
              <h2 style={{margin: 0, fontFamily: '"Source Serif 4", Georgia, serif', fontWeight: 600, fontSize: 26, color: '#1B2A38'}}>What Doctors Are Saying</h2>
              <div style={{display: 'flex', flexDirection: 'column', gap: 16}}>
                <div style={{background: '#F2EBDC', border: '1px solid rgba(27,42,56,0.2)', boxSizing: 'border-box', padding: 22, display: 'flex', flexDirection: 'column', gap: 14}}>
                  <span style={{fontFamily: '"IBM Plex Mono", monospace', fontSize: 10, color: '#8A8267'}}>REF. 01/06</span>
                  <p style={{margin: 0, fontFamily: '"Source Serif 4", Georgia, serif', fontStyle: 'italic', fontSize: 15, lineHeight: '1.55', color: '#201C14'}}>"This course completely changed how I document patient consent. I now feel legally protected and confident in my practice."</p>
                  <div style={{borderTop: '1px solid rgba(27,42,56,0.15)', paddingTop: 12}}><span style={{display: 'block', fontSize: 14, fontWeight: 600, color: '#1B2A38'}}>Dr. Priya Menon</span><span style={{fontFamily: '"IBM Plex Mono", monospace', fontSize: 11, color: '#6B6350'}}>General Physician · Bengaluru</span></div>
                </div>
                <div style={{background: '#F2EBDC', border: '1px solid rgba(27,42,56,0.2)', boxSizing: 'border-box', padding: 22, display: 'flex', flexDirection: 'column', gap: 14}}>
                  <span style={{fontFamily: '"IBM Plex Mono", monospace', fontSize: 10, color: '#8A8267'}}>REF. 02/06</span>
                  <p style={{margin: 0, fontFamily: '"Source Serif 4", Georgia, serif', fontStyle: 'italic', fontSize: 15, lineHeight: '1.55', color: '#201C14'}}>"Dr. Vinaykumar explains complex legal topics in such a practical, relatable way. The MLC module alone was worth it."</p>
                  <div style={{borderTop: '1px solid rgba(27,42,56,0.15)', paddingTop: 12}}><span style={{display: 'block', fontSize: 14, fontWeight: 600, color: '#1B2A38'}}>Dr. Arjun Nair</span><span style={{fontFamily: '"IBM Plex Mono", monospace', fontSize: 11, color: '#6B6350'}}>Orthopaedic Surgeon · Kochi</span></div>
                </div>
                <div style={{background: '#F2EBDC', border: '1px solid rgba(27,42,56,0.2)', boxSizing: 'border-box', padding: 22, display: 'flex', flexDirection: 'column', gap: 14}}>
                  <span style={{fontFamily: '"IBM Plex Mono", monospace', fontSize: 10, color: '#8A8267'}}>REF. 03/06</span>
                  <p style={{margin: 0, fontFamily: '"Source Serif 4", Georgia, serif', fontStyle: 'italic', fontSize: 15, lineHeight: '1.55', color: '#201C14'}}>"The case-based format is brilliant. Highly recommend to all colleagues."</p>
                  <div style={{borderTop: '1px solid rgba(27,42,56,0.15)', paddingTop: 12}}><span style={{display: 'block', fontSize: 14, fontWeight: 600, color: '#1B2A38'}}>Dr. Sunita Sharma</span><span style={{fontFamily: '"IBM Plex Mono", monospace', fontSize: 11, color: '#6B6350'}}>Gynaecologist &amp; Obstetrician · Jaipur</span></div>
                </div>
              </div>
            </div>
          </section>
          {/* ===== FINAL CTA ===== */}
          <section className="scroll-reveal" style={{width: '100%', boxSizing: 'border-box', padding: '56px 20px', background: '#1B2A38'}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 18}}>
              <h2 style={{margin: 0, fontFamily: '"Source Serif 4", Georgia, serif', fontWeight: 600, fontSize: 28, lineHeight: '1.2', color: '#F2EBDC'}}>Don't Practice Medicine Unprotected.</h2>
              <p style={{margin: 0, fontSize: 15, color: '#C9BFA9'}}>Join doctors across India already learning to protect their practice and reputation.</p>
              <div style={{display: 'flex', flexDirection: 'column', gap: 12, width: '100%', marginTop: 6}}>
                <a href="#programs" style={{textAlign: 'center', background: '#F2EBDC', color: '#1B2A38', fontSize: 15, fontWeight: 600, padding: '16px 24px', border: '1px solid #F2EBDC'}}>See Our Programs</a>
                <a href="/" style={{textAlign: 'center', background: 'transparent', color: '#F2EBDC', fontSize: 15, fontWeight: 600, padding: '16px 24px', border: '1px solid rgba(242,235,220,0.5)'}}>Talk to Us — 1:1 Consultation</a>
              </div>
              <span style={{fontFamily: '"IBM Plex Mono", monospace', fontSize: 11, color: '#8D8875', marginTop: 4}}>50,000+ doctors following @medicolegalaid on Instagram</span>
            </div>
          </section>
          {/* ===== CONTACT ===== */}
          <section id="contact" style={{width: '100%', boxSizing: 'border-box', padding: '56px 20px'}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: 20}}>
              <span style={{fontFamily: '"IBM Plex Mono", monospace', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#7A5A22'}}>Get in Touch</span>
              <h2 style={{margin: 0, fontFamily: '"Source Serif 4", Georgia, serif', fontWeight: 600, fontSize: 24, color: '#1B2A38'}}>Have a Question?</h2>
              <p style={{margin: 0, fontSize: 14, lineHeight: '1.6', color: '#453F32'}}>Write to us or call directly — we typically respond within 24 hours.</p>
              <div style={{display: 'flex', flexDirection: 'column', gap: 4, fontSize: 14, color: '#453F32'}}>
                <span>+91 91106 89797</span>
                <span>contact@medicolegalaid.com</span>
              </div>
              <form style={{display: 'flex', flexDirection: 'column', gap: 16, marginTop: 8}}>
                <div style={{display: 'flex', flexDirection: 'column', gap: 6}}>
                  <label htmlFor="mla-name-m" style={{fontFamily: '"IBM Plex Mono", monospace', fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#6B6350'}}>Name</label>
                  <input id="mla-name-m" type="text" style={{boxSizing: 'border-box', padding: '14px 16px', border: '1px solid rgba(27,42,56,0.3)', background: '#FAF6EC', fontSize: 15, color: '#201C14'}} />
                </div>
                <div style={{display: 'flex', flexDirection: 'column', gap: 6}}>
                  <label htmlFor="mla-email-m" style={{fontFamily: '"IBM Plex Mono", monospace', fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#6B6350'}}>Email</label>
                  <input id="mla-email-m" type="email" style={{boxSizing: 'border-box', padding: '14px 16px', border: '1px solid rgba(27,42,56,0.3)', background: '#FAF6EC', fontSize: 15, color: '#201C14'}} />
                </div>
                <div style={{display: 'flex', flexDirection: 'column', gap: 6}}>
                  <label htmlFor="mla-message-m" style={{fontFamily: '"IBM Plex Mono", monospace', fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#6B6350'}}>Message</label>
                  <textarea id="mla-message-m" rows={4} style={{boxSizing: 'border-box', padding: '14px 16px', border: '1px solid rgba(27,42,56,0.3)', background: '#FAF6EC', fontSize: 15, color: '#201C14', resize: 'vertical'}} defaultValue={""} />
                </div>
                <button type="submit" style={{background: '#1B2A38', color: '#F2EBDC', fontSize: 15, fontWeight: 600, padding: '16px 24px', border: '1px solid #1B2A38', cursor: 'pointer'}}>Send Message</button>
              </form>
            </div>
          </section>
          {/* ===== FOOTER ===== */}
        </div>
        
        
      </main>
      <Footer />
    </div>
  );
}
