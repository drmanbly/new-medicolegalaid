import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  "title": "Consultation Booked Successfully",
  "description": "Your 1:1 consultation with Dr. Vinaykumar S has been booked.",
  "robots": {
    "index": false,
    "follow": false
  }
};

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="flex-1 py-[96px] px-8 text-center scroll-reveal">
        <h1 className="font-serif text-[38px] text-primary mb-4">Consultation Booked Successfully</h1>
        <p className="text-[17px] text-[#453F32] max-w-[60ch] mx-auto">Your 1:1 consultation with Dr. Vinaykumar S has been booked.</p>
      </main>
      <Footer />
    </div>
  );
}
