import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  "title": "Hospital Medico-Legal Audits & CME Training",
  "description": "Protect your hospital from corporate liability and negligence claims with expert medico-legal audits and staff training by Dr. Vinaykumar S."
};

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="flex-1 py-[96px] px-8 text-center scroll-reveal">
        <h1 className="font-serif text-[38px] text-primary mb-4">Hospital Medico-Legal Audits & CME Training</h1>
        <p className="text-[17px] text-[#453F32] max-w-[60ch] mx-auto">Protect your hospital from corporate liability and negligence claims with expert medico-legal audits and staff training by Dr. Vinaykumar S.</p>
      </main>
      <Footer />
    </div>
  );
}
