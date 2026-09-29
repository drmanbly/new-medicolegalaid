import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | MedicoLegalAid",
  description: "Terms and conditions governing the use of MedicoLegalAid courses, webinars, and 1-on-1 consultations.",
  alternates: { canonical: "/termsofuse" },
};

export default function TermsOfUsePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      
      <main className="flex-1">
        {/* Header Banner */}
        <section className="bg-primary pt-24 pb-12 text-white">
          <div className="max-w-[1200px] mx-auto px-6 md:px-[64px]">
            <div className="flex items-center gap-2 text-sm text-white/70 mb-4">
              <Link className="hover:text-white transition-colors" href="/">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-white">Terms of Use</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-[#eab308]">Terms of Use</h1>
            <p className="text-white/80 max-w-2xl text-lg">
              Please read these terms carefully before using our platform or enrolling in any masterclass.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-6 md:px-[64px]">
          <div className="max-w-4xl mx-auto bg-card border border-primary/15 p-8 md:p-12 shadow-sm rounded-sm">
            <div className="space-y-8 text-[#453F32] leading-relaxed">
              <div>
                <h2 className="font-serif text-2xl font-bold text-primary mb-3">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using the MedicoLegalAid platform ("Website", "Platform"), enrolling in masterclasses, booking 1-on-1 peer consultations, or registering for live webinars, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-primary mb-3">2. Scope of Educational Content & 1-on-1 Consultations</h2>
                <p className="mb-3">
                  All general content provided on this platform—including course videos, articles, legal tip checklists, and live webinars—is strictly for educational and informational purposes.
                </p>
                <p>
                  <strong className="text-primary font-semibold">Regarding 1-on-1 Peer Consultations (<Link href="/consult" className="text-accent underline hover:opacity-80">/consult</Link>):</strong> Sessions conducted with Dr. Vinay Kumar S are structured as collegial, doctor-to-doctor peer advisory discussions. While conducted under strict medical secrecy and designed to offer practical defensive strategies and medicolegal clarity, they do not constitute official legal representation, courtroom advocacy, or formal drafting of pleadings unless a separate, explicit formal engagement is executed.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-primary mb-3">3. Intellectual Property & Webinar Conduct</h2>
                <p>
                  All proprietary materials, including recorded videos, case breakdown slides, and live webinar broadcasts, remain the intellectual property of MedicoLegalAid and Dr. Vinay Kumar S. Unauthorized recording, screen capture, rebroadcasting, or distribution of webinar links or course materials is strictly prohibited and violates copyright regulations.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-primary mb-3">4. User Accounts & Confidentiality</h2>
                <p>
                  You are responsible for maintaining the confidentiality of your platform credentials and for any activities under your account. When participating in live interactive webinars or peer discussions, you agree to respect community decorum and patient confidentiality when discussing case scenarios.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-primary mb-3">5. Limitation of Liability</h2>
                <p>
                  MedicoLegalAid shall not be liable for direct, indirect, incidental, or consequential damages arising from the practical application of educational insights or strategic peer guidance. Individual legal outcomes depend heavily on specific clinical records, hospital documentation, and judicial discretion.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-primary mb-3">6. Modifications to Terms</h2>
                <p>
                  We reserve the right to modify or replace these Terms of Use at any time. Any changes will be posted on this page, and your continued use of the platform after such changes constitutes acceptance of the new terms.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-primary mb-3">7. Contact Us</h2>
                <p>
                  If you have any questions about these Terms, please contact us at{" "}
                  <a href="mailto:contact@medicolegalaid.com" className="text-accent underline font-semibold hover:opacity-80">
                    contact@medicolegalaid.com
                  </a>.
                </p>
              </div>

              <div className="pt-8 border-t border-primary/10">
                <p className="font-mono text-xs text-muted-foreground">Last updated: September 2026</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
