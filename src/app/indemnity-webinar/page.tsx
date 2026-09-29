import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  "title": "Professional Indemnity Webinar",
  "description": "Learn exactly how much professional indemnity cover you need and what hidden clauses to look out for in your policy."
};

export default function Page() {
  redirect("/webinars/indemnity-webinar");
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="flex-1 py-[96px] px-8 text-center scroll-reveal">
        <h1 className="font-serif text-[38px] text-primary mb-4">Professional Indemnity Webinar</h1>
        <p className="text-[17px] text-[#453F32] max-w-[60ch] mx-auto">Learn exactly how much professional indemnity cover you need and what hidden clauses to look out for in your policy.</p>
      </main>
      <Footer />
    </div>
  );
}
