import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Access Your Medico-Legal Course | MedicoLegalAid",
  description: "A step-by-step visual guide on how to log in, access, and watch the pre-recorded Medico-Legal Masterclasses on your computer or mobile device.",
  alternates: { canonical: "/access-course" }
};

export default function AccessCoursePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      
      <main className="flex-1">
        <section className="w-full box-border py-[72px] px-8 md:px-[64px] bg-background">
          <div className="max-w-[900px] mx-auto scroll-reveal text-center">
            <span className="font-mono text-[13px] tracking-[0.14em] uppercase text-[#7A5A22]">
              Student Support
            </span>
            <h1 className="mt-[16px] mb-[24px] font-serif font-semibold text-[38px] md:text-[46px] leading-[1.2] text-primary">
              How to Access Your Masterclass
            </h1>
            <p className="text-[17px] leading-[1.7] text-[#453F32] max-w-[60ch] mx-auto mb-[48px]">
              Follow this step-by-step visual guide to log in to the MedicoLegalAid learning portal from your mobile device, desktop browser, or via our dedicated mobile apps.
            </p>
          </div>

          <div className="max-w-[900px] mx-auto space-y-[96px] pb-[64px]">
            
            {/* Desktop Guide */}
            <div className="scroll-reveal">
              <h2 className="font-serif text-[28px] font-semibold text-primary border-b border-primary/20 pb-[16px] mb-[32px]">
                1. Access via Desktop Browser
              </h2>
              <div className="grid md:grid-cols-2 gap-[32px]">
                {[
                  { title: "Step 1: Open Portal", src: "/images/access-guide/desktop/step-1-annotated.png" },
                  { title: "Step 2: Enter OTP", src: "/images/access-guide/desktop/step-2.png" },
                  { title: "Step 3: Go to Library", src: "/images/access-guide/desktop/step-3.png" },
                  { title: "Step 4: Select Course", src: "/images/access-guide/desktop/step-4.png" },
                  { title: "Step 5: View Curriculum", src: "/images/access-guide/desktop/step-5.png" },
                  { title: "Step 6: Start Video", src: "/images/access-guide/desktop/step-6-start-video.jpg" }
                ].map((step, i) => (
                  <div key={i} className="flex flex-col gap-[12px] bg-card p-[16px] border border-primary/10">
                    <span className="font-mono text-[13px] font-bold text-primary">{step.title}</span>
                    <div className="relative w-full aspect-video bg-muted/50 border border-border flex items-center justify-center text-xs text-muted-foreground">
                       {/* Placeholder or actual image */}
                       <Image src={step.src} fill className="object-cover" alt={step.title} unoptimized />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Browser Guide */}
            <div className="scroll-reveal">
              <h2 className="font-serif text-[28px] font-semibold text-primary border-b border-primary/20 pb-[16px] mb-[32px]">
                2. Access via Mobile Browser
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-[24px]">
                {[
                  { title: "Step 1", src: "/images/access-guide/mobile/step-1-annotated.png" },
                  { title: "Step 2", src: "/images/access-guide/mobile/step-2.png" },
                  { title: "Step 3", src: "/images/access-guide/mobile/step-3.png" },
                  { title: "Step 4", src: "/images/access-guide/mobile/step-4.png" },
                  { title: "Step 5", src: "/images/access-guide/mobile/step-5.png" },
                  { title: "Step 6", src: "/images/access-guide/mobile/step-6.png" },
                  { title: "Step 7", src: "/images/access-guide/mobile/step-7.png" },
                  { title: "Step 8", src: "/images/access-guide/mobile/step-8-start-video.jpg" }
                ].map((step, i) => (
                  <div key={i} className="flex flex-col gap-[12px] bg-card p-[12px] border border-primary/10">
                    <span className="font-mono text-[12px] font-bold text-primary text-center">{step.title}</span>
                    <div className="relative w-full aspect-[9/16] bg-muted/50 border border-border">
                       <Image src={step.src} fill className="object-cover" alt={step.title} unoptimized />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* App Guide */}
            <div className="scroll-reveal">
              <h2 className="font-serif text-[28px] font-semibold text-primary border-b border-primary/20 pb-[16px] mb-[32px] flex items-center justify-between">
                <span>3. Access via Mobile App</span>
              </h2>
              
              <div className="flex gap-[16px] mb-[32px]">
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Image src="/images/badges/google-play-badge.svg" alt="Get it on Google Play" width={135} height={40} unoptimized />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Image src="/images/badges/app-store-badge.svg" alt="Download on the App Store" width={120} height={40} unoptimized />
                </a>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-[24px]">
                {[
                  { title: "Step 1", src: "/images/access-guide/app/step-1.png" },
                  { title: "Step 2", src: "/images/access-guide/app/step-2.png" },
                  { title: "Step 3", src: "/images/access-guide/app/step-3.png" },
                  { title: "Step 4", src: "/images/access-guide/app/step-4.png" },
                  { title: "Step 5", src: "/images/access-guide/app/step-5.png" }
                ].map((step, i) => (
                  <div key={i} className="flex flex-col gap-[12px] bg-card p-[12px] border border-primary/10">
                    <span className="font-mono text-[12px] font-bold text-primary text-center">{step.title}</span>
                    <div className="relative w-full aspect-[9/16] bg-muted/50 border border-border">
                       <Image src={step.src} fill className="object-cover" alt={step.title} unoptimized />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
