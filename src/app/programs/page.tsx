import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Calendar, Building2, UserCircle, Scale, ShieldCheck, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Programs | MedicoLegalAid",
  description: "Explore our medico-legal masterclasses, live webinars, corporate training, and 1:1 consultations designed to protect Indian doctors.",
};

export default function ProgramsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans overflow-hidden">
      <Navbar />
      
      {/* Inline styles for custom animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float-1 {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg) scale(1); }
          33% { transform: translate(30px, -50px) rotate(10deg) scale(1.1); }
          66% { transform: translate(-20px, 20px) rotate(-5deg) scale(0.9); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg) scale(1); }
          33% { transform: translate(-30px, 40px) rotate(-10deg) scale(1.15); }
          66% { transform: translate(20px, -20px) rotate(5deg) scale(0.85); }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-float-1 { animation: float-1 18s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 22s ease-in-out infinite; }
        .animate-fade-up { animation: fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        
        .hero-gradient {
          background: linear-gradient(135deg, #0d1720 0%, #1a2a3a 50%, #121c25 100%);
        }
        
        .glass-panel {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
      `}} />

      <main className="flex-1">
        {/* Animated Hero Section */}
        <section className="hero-gradient text-white pt-24 pb-24 px-8 md:px-[64px] relative flex flex-col justify-center min-h-[40vh] border-b border-[#7A5A22]/20">
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Glowing orbs */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[60%] rounded-full bg-[#8C2F26]/20 blur-[120px] animate-float-1"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[70%] rounded-full bg-[#7A5A22]/15 blur-[100px] animate-float-2"></div>
            
            {/* Floating Icons */}
            <Scale className="absolute top-[20%] right-[15%] w-20 h-20 text-white/5 animate-float-2 opacity-50" strokeWidth={1} />
            <ShieldCheck className="absolute bottom-[20%] left-[10%] w-24 h-24 text-white/5 animate-float-1 opacity-50" strokeWidth={1} />
            <GraduationCap className="absolute top-[40%] left-[70%] w-12 h-12 text-[#7A5A22]/10 animate-float-1 opacity-70" strokeWidth={1.5} />
          </div>

          <div className="max-w-[900px] mx-auto relative z-10 text-center flex flex-col items-center">
            <div className="animate-fade-up opacity-0" style={{ animationDelay: "100ms" }}>
              <span className="inline-block py-1.5 px-4 rounded-full glass-panel text-[#eab308] text-[11px] font-bold tracking-[0.2em] uppercase mb-5 shadow-[0_0_15px_rgba(234,179,8,0.2)]">
                The Medico-Legal Ecosystem
              </span>
            </div>
            
            <h1 className="animate-fade-up opacity-0 text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.15] mb-5 drop-shadow-lg" style={{ animationDelay: "300ms" }}>
              Protect Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eab308] to-[#d9a05b]">Practice</span> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eab308] to-[#d9a05b]">Peace of Mind</span>
            </h1>
            
            <p className="animate-fade-up opacity-0 text-base md:text-lg text-white/70 max-w-[2xl] mx-auto leading-relaxed font-light" style={{ animationDelay: "500ms" }}>
              Comprehensive legal defense strategies, masterclasses, and corporate training designed exclusively for the realities of Indian healthcare.
            </p>
          </div>
        </section>

        {/* Programs List - Staggered & Interactive */}
        <section className="w-full box-border py-[72px] px-8 md:px-[64px] bg-background relative z-20 -mt-6">
          <div className="max-w-[850px] mx-auto flex flex-col gap-8">
            
            {/* 1. The Book + Masterclass */}
            <div className="group flex flex-col md:flex-row gap-6 bg-card border border-primary/10 p-6 md:p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] rounded-sm hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgb(0,0,0,0.06)] hover:border-[#8C2F26]/30 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#8C2F26] text-white text-[10px] font-bold uppercase tracking-widest py-1 px-4 shadow-sm transform origin-bottom-left group-hover:scale-105 transition-transform">
                Flagship Program
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#8C2F26]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-[#8C2F26]/10 text-[#8C2F26] group-hover:bg-[#8C2F26] group-hover:text-white transition-colors duration-500 shadow-inner">
                <BookOpen className="w-7 h-7 transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500" />
              </div>
              <div className="flex-1 relative z-10">
                <h2 className="font-serif font-semibold text-2xl md:text-3xl text-primary mb-3 group-hover:text-[#8C2F26] transition-colors duration-300">
                  The Book + 20-Hour Masterclass
                </h2>
                <p className="text-[15px] text-[#453F32] leading-relaxed mb-6 font-light">
                  The ultimate medico-legal protection bundle. Get Dr. Vinaykumar's physical book delivered to your doorstep, plus lifetime access to the comprehensive 20-hour video masterclass covering consent, documentation, consumer court defense, and criminal negligence.
                </p>
                <Link href="/book-course" className="inline-flex items-center gap-2 bg-primary text-background font-semibold text-[13px] py-3 px-6 hover:bg-[#8C2F26] hover:shadow-lg hover:shadow-[#8C2F26]/20 transition-all duration-300 transform group-hover:translate-x-1">
                  View Masterclass Details <span>→</span>
                </Link>
              </div>
            </div>

            {/* 2. Live Webinar */}
            <div className="group flex flex-col md:flex-row gap-6 bg-card border border-primary/10 p-6 md:p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] rounded-sm hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgb(0,0,0,0.06)] hover:border-[#7A5A22]/40 transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#7A5A22]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-[#7A5A22]/10 text-[#7A5A22] group-hover:bg-[#7A5A22] group-hover:text-white transition-colors duration-500 shadow-inner">
                <Calendar className="w-7 h-7 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500" />
              </div>
              <div className="flex-1 relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                  <h2 className="font-serif font-semibold text-2xl md:text-3xl text-primary group-hover:text-[#7A5A22] transition-colors duration-300">
                    Live Webinars
                  </h2>
                  <span className="inline-flex items-center gap-2 bg-red-50 text-red-700 border border-red-200 text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide shadow-sm">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                    </span>
                    Next Session: Oct 18th
                  </span>
                </div>
                <p className="text-[15px] text-[#453F32] leading-relaxed mb-6 font-light">
                  Join our exclusive live interactive training sessions held <strong className="text-primary font-semibold border-b border-primary/20 pb-0.5">once a month on a Sunday</strong>. Discuss real case studies, changing regulations, and ask your burning medico-legal questions directly to Dr. Vinaykumar in real-time.
                </p>
                <Link href="/webinars" className="inline-flex items-center gap-2 bg-transparent text-primary font-semibold text-[13px] py-3 px-6 border border-primary hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 transform group-hover:translate-x-1">
                  Register for Next Session <span>→</span>
                </Link>
              </div>
            </div>

            {/* 3. Hospital Corporate Training */}
            <div className="group flex flex-col md:flex-row gap-6 bg-card border border-primary/10 p-6 md:p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] rounded-sm hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgb(0,0,0,0.06)] hover:border-secondary/40 transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-500 shadow-inner">
                <Building2 className="w-7 h-7 transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500" />
              </div>
              <div className="flex-1 relative z-10">
                <h2 className="font-serif font-semibold text-2xl md:text-3xl text-primary mb-3 group-hover:text-secondary transition-colors duration-300">
                  Hospital Corporate Training
                </h2>
                <p className="text-[15px] text-[#453F32] leading-relaxed mb-6 font-light">
                  Protect your institution from vicarious liability. We conduct customized, on-site medico-legal seminars for your hospital staff, resident doctors, and nursing teams, standardizing your consent and emergency protocols.
                </p>
                <Link href="/seminars" className="inline-flex items-center gap-2 bg-transparent text-primary font-semibold text-[13px] py-3 px-6 border border-primary hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 transform group-hover:translate-x-1">
                  Request a Seminar <span>→</span>
                </Link>
              </div>
            </div>

            {/* 4. Consultation */}
            <div className="group flex flex-col md:flex-row gap-6 bg-card border border-primary/10 p-6 md:p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] rounded-sm hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgb(0,0,0,0.06)] hover:border-primary/40 transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500 shadow-inner">
                <UserCircle className="w-7 h-7 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500" />
              </div>
              <div className="flex-1 relative z-10">
                <h2 className="font-serif font-semibold text-2xl md:text-3xl text-primary mb-3 transition-colors duration-300">
                  1:1 Legal Consultation
                </h2>
                <p className="text-[15px] text-[#453F32] leading-relaxed mb-6 font-light">
                  Facing a legal notice or setting up a new practice? Book a private, confidential consultation with Dr. Vinaykumar to review your specific situation, audit your documents, or strategize your legal defense.
                </p>
                <Link href="/consult" className="inline-flex items-center gap-2 bg-transparent text-primary font-semibold text-[13px] py-3 px-6 border border-primary hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 transform group-hover:translate-x-1">
                  Book a Consultation <span>→</span>
                </Link>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
