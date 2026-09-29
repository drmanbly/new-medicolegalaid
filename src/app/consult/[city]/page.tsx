import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ConsultForm } from "@/components/consult/consult-form";
import { Metadata } from "next";
import { Shield, PhoneCall, Phone, FileText, Video, CheckCircle2 } from "lucide-react";

const CITIES = [
  "delhi", "mumbai", "bangalore", "chennai", "hyderabad", 
  "pune", "ahmedabad", "kolkata", "jaipur", "lucknow"
];

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function generateStaticParams() {
  return CITIES.map((city) => ({
    city,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const cityName = capitalize(city);
  return {
    title: `Top Medicolegal Consultant in ${cityName} | MedicoLegalAid`,
    description: `Face a consumer court notice, MLC case, or legal dispute in ${cityName}? Get direct, expert guidance from Dr. Vinay Kumar S — protecting doctors across top corporate hospitals in ${cityName}.`,
    alternates: { canonical: `/consult/${city}` },
    openGraph: {
      title: `Top Medicolegal Consultant in ${cityName} | MedicoLegalAid`,
      description: `Confidential 30-minute consultation for medical practitioners in ${cityName} facing legal challenges.`,
      url: `https://www.medicolegalaid.com/consult/${city}`,
      type: "website",
    },
  };
}

export default async function CityConsultPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const cityName = capitalize(city);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      
      <main className="flex-1">
        {/* ===== HERO SECTION ===== */}
        <section className="relative overflow-hidden bg-primary text-white pt-20 pb-20 border-b border-primary/20">
          <div 
            className="absolute inset-0 opacity-20 pointer-events-none" 
            style={{ 
              backgroundImage: "radial-gradient(ellipse at 70% 40%, hsl(43 74% 49%) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, hsl(226 60% 25%) 0%, transparent 55%)" 
            }}
          />
          
          <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/20 border border-accent/30 mb-6">
              <Shield className="h-4 w-4 text-accent" />
              <span className="text-xs font-bold tracking-wider uppercase text-accent">Serving Doctors in {cityName}</span>
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
              Top Medicolegal Consultant in<br className="hidden md:block" />
              <span className="text-accent"> {cityName}</span>
            </h1>
            
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
              Face a consumer court notice, MLC case, or legal dispute in {cityName}? Get direct, expert guidance from <strong className="text-white">Dr. Vinay Kumar S</strong> — protecting doctors across top corporate hospitals in {cityName}.
            </p>

            {/* Emergency / Call Box */}
            <div className="max-w-xl mx-auto bg-white/10 border border-white/20 backdrop-blur-sm rounded-sm p-6 mb-8 shadow-xl">
              <p className="text-xs text-white/70 uppercase tracking-widest font-semibold mb-2">
                📞 Talk to us first — it's free
              </p>
              <p className="text-white/90 text-base mb-4">
                Not sure how to proceed? Call us right now and we'll guide you through the process.
              </p>
              <a 
                href="tel:+918105633270" 
                className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-sm bg-accent text-white font-bold text-lg hover:bg-accent/90 transition-all duration-200 active:scale-[0.98] shadow-lg shadow-black/20"
              >
                <Phone className="w-5 h-5" />
                +91 81056 33270
              </a>
              <p className="text-xs text-white/50 mt-3 font-mono">
                Mon–Sat · 9 AM to 9 PM IST · For emergencies, call anytime
              </p>
            </div>

            {/* Key Perks */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-white/80 font-medium">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent" /> 30-minute private session
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent" /> Zoom video call
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent" /> 100% confidential
              </span>
            </div>
          </div>
        </section>

        {/* ===== HOW IT WORKS SECTION ===== */}
        <section className="py-16 bg-[#FAF6EC] border-b border-primary/10">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-center font-serif text-3xl font-bold text-primary mb-10">
              How It Works
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="relative flex flex-col gap-3 p-6 rounded-sm bg-card border border-primary/15 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-accent tracking-widest">01</span>
                  <PhoneCall className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-serif font-bold text-primary text-base">Call Us First</h3>
                <p className="text-[#453F32] text-sm leading-relaxed">
                  Call +91 81056 33270 to speak with us. We'll understand your situation and guide you to book.
                </p>
              </div>

              <div className="relative flex flex-col gap-3 p-6 rounded-sm bg-card border border-primary/15 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-accent tracking-widest">02</span>
                  <FileText className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-serif font-bold text-primary text-base">Fill Your Details</h3>
                <p className="text-[#453F32] text-sm leading-relaxed">
                  Describe your case and optionally upload relevant documents for Dr. Vinay to review in advance.
                </p>
              </div>

              <div className="relative flex flex-col gap-3 p-6 rounded-sm bg-card border border-primary/15 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-accent tracking-widest">03</span>
                  <Shield className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-serif font-bold text-primary text-base">Pay Securely</h3>
                <p className="text-[#453F32] text-sm leading-relaxed">
                  Secure your slot via Razorpay. Your consultation is confirmed instantly after payment.
                </p>
              </div>

              <div className="relative flex flex-col gap-3 p-6 rounded-sm bg-card border border-primary/15 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-accent tracking-widest">04</span>
                  <Video className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-serif font-bold text-primary text-base">Join on Zoom</h3>
                <p className="text-[#453F32] text-sm leading-relaxed">
                  You'll receive the Zoom link immediately via email and WhatsApp. Dr. Vinay will confirm your slot via call.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== WHY CONSULT SECTION ===== */}
        <section className="py-20 bg-primary text-white border-b border-primary/20">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="font-mono text-xs font-bold tracking-widest uppercase text-accent mb-3">
              Why Consult With Dr. Vinay Kumar S
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 leading-tight">
              The Only Advisor Who Understands <span className="text-accent">Both Sides of the Table</span>
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
              Most legal advisors have never stood in an OT. Most doctors have never argued in court. Dr. Vinay has done both — and that changes everything about the advice you receive.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="p-8 rounded-sm bg-white/5 border border-white/15 space-y-4">
                <div className="text-3xl">🩺</div>
                <h3 className="font-serif font-bold text-xl text-white">As a Doctor, He Knows…</h3>
                <ul className="space-y-3 text-sm text-white/85">
                  <li className="flex items-start gap-2.5">
                    <span className="text-accent font-bold mt-0.5">✓</span>
                    <span>How clinical decisions are made under pressure</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-accent font-bold mt-0.5">✓</span>
                    <span>What a standard of care truly looks like in practice</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-accent font-bold mt-0.5">✓</span>
                    <span>The difference between a complication and negligence</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-accent font-bold mt-0.5">✓</span>
                    <span>How to read your case sheet the way a court would</span>
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-sm bg-white/5 border border-white/15 space-y-4">
                <div className="text-3xl">⚖️</div>
                <h3 className="font-serif font-bold text-xl text-white">As a Lawyer, He Knows…</h3>
                <ul className="space-y-3 text-sm text-white/85">
                  <li className="flex items-start gap-2.5">
                    <span className="text-accent font-bold mt-0.5">✓</span>
                    <span>Exactly how consumer courts evaluate medical cases</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-accent font-bold mt-0.5">✓</span>
                    <span>What lawyers look for when drafting a legal notice</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-accent font-bold mt-0.5">✓</span>
                    <span>Which documents can make or break your defence</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-accent font-bold mt-0.5">✓</span>
                    <span>When to settle, when to fight, and how to do both safely</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-white/60 text-sm mt-10 italic font-serif">
              MBBS · DCH · DNB · MNAMS · LLB · PGDMLE (NLSIU) — Professor of Pediatrics & President, KIAP Medico-legal Group
            </p>
          </div>
        </section>

        {/* ===== FORM SECTION ===== */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <ConsultForm city={cityName} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
