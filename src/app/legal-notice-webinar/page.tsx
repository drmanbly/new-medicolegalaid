import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  "title": "How to Handle a Legal Notice - Webinar",
  "description": "A comprehensive live webinar on the exact 48-hour protocol to follow when a patient serves you a legal notice."
};

export default function Page() {
  redirect("/webinars/legal-notice-webinar");
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="flex-1 py-[96px] px-8 text-center scroll-reveal">
        <h1 className="font-serif text-[38px] text-primary mb-4">How to Handle a Legal Notice - Webinar</h1>
        <p className="text-[17px] text-[#453F32] max-w-[60ch] mx-auto">A comprehensive live webinar on the exact 48-hour protocol to follow when a patient serves you a legal notice.</p>
      </main>
      <Footer />
    </div>
  );
}
