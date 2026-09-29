import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { ChevronRight, ShieldAlert } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | MedicoLegalAid",
  description: "Our straightforward policy regarding course cancellations, consultations, and refunds.",
  alternates: { canonical: "/refunds" },
};

export default function RefundsPage() {
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
              <span className="text-white">Refund Policy</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-[#eab308]">Refund Policy</h1>
            <p className="text-white/80 max-w-2xl text-lg">
              Our straightforward policy regarding course cancellations and refunds.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 px-6 md:px-[64px]">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card border border-primary/15 rounded-sm p-8 md:p-12 text-left space-y-8 shadow-sm">
              <div className="text-center max-w-xl mx-auto">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4 text-accent">
                  <ShieldAlert className="h-8 w-8" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-primary mb-2">Comprehensive Policy Summary</h2>
                <p className="text-sm text-muted-foreground">
                  Our clear, structured guidelines covering online masterclasses, live interactive webinars, and 1-on-1 peer consultations.
                </p>
              </div>

              <div className="space-y-6">
                <div className="p-6 rounded-sm bg-background border border-primary/10">
                  <h3 className="font-serif font-bold text-lg text-primary mb-2">1. Online Courses & Masterclasses</h3>
                  <p className="text-sm text-[#453F32] leading-relaxed">
                    Due to the immediate digital nature of our educational content—including video masterclasses, downloadable PDFs, and proprietary legal templates—<strong className="text-primary font-semibold">we maintain a strict no-refund policy</strong> once enrollment access is granted.
                  </p>
                </div>

                <div className="p-6 rounded-sm bg-background border border-primary/10">
                  <h3 className="font-serif font-bold text-lg text-primary mb-2">2. 1-on-1 Peer Consultations</h3>
                  <p className="text-sm text-[#453F32] leading-relaxed mb-3">
                    When you book a dedicated 1-on-1 peer consultation session with Dr. Vinay Kumar S, that specific time slot is exclusively locked and reserved on his clinical and legal calendar.
                  </p>
                  <ul className="text-sm text-[#453F32] space-y-2 list-disc list-inside ml-1">
                    <li>
                      <strong className="text-primary font-semibold">Rescheduling:</strong> You may reschedule your session to another available date/time slot without any penalty provided you notify our team at least <strong className="text-primary font-semibold">24 hours prior</strong> to the scheduled time.
                    </li>
                    <li>
                      <strong className="text-primary font-semibold">Cancellations & No-Shows:</strong> Cancellations made within 24 hours of the appointment or failure to join the Zoom room (no-shows) are non-refundable, as the time reserved cannot be reallocated to another doctor.
                    </li>
                  </ul>
                </div>

                <div className="p-6 rounded-sm bg-background border border-primary/10">
                  <h3 className="font-serif font-bold text-lg text-primary mb-2">3. Live Webinars & Seminars</h3>
                  <p className="text-sm text-[#453F32] leading-relaxed">
                    Paid ticket registrations for live online webinars or offline seminars are non-refundable once processed. If unforeseen clinical duties prevent you from attending a live webinar, our team will provide access to session recordings or transfer your registration to the next scheduled live batch upon request.
                  </p>
                </div>
              </div>

              <div className="text-center pt-4 border-t border-primary/10">
                <p className="text-sm text-[#453F32]">
                  For rescheduling requests or pre-purchase queries, please contact our support desk at{" "}
                  <a href="mailto:contact@medicolegalaid.com" className="text-accent hover:underline font-semibold">
                    contact@medicolegalaid.com
                  </a>.
                </p>
              </div>
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
              >
                Return to Home
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
