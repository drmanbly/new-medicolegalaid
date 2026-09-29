import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | MedicoLegalAid",
  description: "How we collect, use, and protect your information at MedicoLegalAid.",
  alternates: { canonical: "/privacypolicy" },
};

export default function PrivacyPolicyPage() {
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
              <span className="text-white">Privacy Policy</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-[#eab308]">Privacy Policy</h1>
            <p className="text-white/80 max-w-2xl text-lg">
              How we collect, use, and protect your information.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-6 md:px-[64px]">
          <div className="max-w-4xl mx-auto bg-card border border-primary/15 p-8 md:p-12 shadow-sm rounded-sm">
            <div className="space-y-8 text-[#453F32] leading-relaxed">
              <div>
                <h2 className="font-serif text-2xl font-bold text-primary mb-3">1. Information We Collect</h2>
                <p>
                  When you visit MedicoLegalAid, register for a masterclass, book a 1-on-1 consultation session, or enroll in live webinars, we collect necessary professional information including your name, email address, mobile phone number, medical qualification/specialty details, and brief case descriptions. For paid transactions, payment details are processed securely through certified gateways (Razorpay); we never store card numbers or banking passwords.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-primary mb-3">2. How We Use Your Information</h2>
                <p className="mb-2">We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-1.5 ml-2">
                  <li>Deliver our educational masterclasses, peer consultation sessions, and live interactive webinars.</li>
                  <li>Schedule Zoom video meetings and dispatch automated session reminders via Email, WhatsApp, or Telegram.</li>
                  <li>Process transactions and issue official invoices.</li>
                  <li>Share critical medicolegal news updates, legal practice tips, and Supreme Court/NMC regulatory summaries.</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-primary mb-3">3. 1-on-1 Consultation Document Secrecy & Auto-Deletion</h2>
                <p className="mb-3">
                  When booking a 1-on-1 peer consultation session with Dr. Vinay Kumar S, you may optionally upload case notes, court notices, or MLC reports. We treat these files with the highest standard of professional medical and legal confidentiality:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>
                    <strong className="text-primary font-semibold">Strict Doctor–Doctor Privilege:</strong> Uploaded documents are accessible exclusively by Dr. Vinay Kumar S and his clinical/medicolegal advisory team strictly for preparing your individual session.
                  </li>
                  <li>
                    <strong className="text-primary font-semibold">Secure Cloud Storage:</strong> Documents are encrypted in transit and at rest using enterprise-grade cloud infrastructure (Cloudflare R2).
                  </li>
                  <li>
                    <strong className="text-primary font-semibold">60-Day Automated Deletion:</strong> To ensure data privacy and minimize risk, all uploaded consultation documents are governed by strict lifecycle policies and are <strong className="text-primary">automatically permanently deleted from our servers after 60 days</strong>.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-primary mb-3">4. Data Protection & Security</h2>
                <p>
                  We implement industry-standard security measures behind protected network protocols. Sensitive information is restricted to authorized personnel who are legally and ethically obligated to maintain absolute professional secrecy.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-primary mb-3">5. Third-Party Disclosure</h2>
                <p>
                  We never sell, trade, or share your personally identifiable information or consultation details with external marketers or unauthorized third parties. Trusted infrastructure partners (such as Zoom for video calls, Razorpay for payments, and cloud providers) operate under strict data protection agreements.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-primary mb-3">6. Cookies</h2>
                <p>
                  We use cookies to save your user preferences, maintain session security, and analyze aggregate web traffic to continuously enhance our educational platform.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-primary mb-3">7. Your Consent</h2>
                <p>
                  By using our site, you consent to our website's privacy policy.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-primary mb-3">8. Contacting Us</h2>
                <p>
                  If there are any questions regarding this privacy policy, you may contact us using the information below:<br />
                  <strong className="text-primary">Email:</strong>{" "}
                  <a href="mailto:contact@medicolegalaid.com" className="text-accent underline font-semibold hover:opacity-80">
                    contact@medicolegalaid.com
                  </a>
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
