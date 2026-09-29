import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WebinarCheckout } from "@/components/webinar/webinar-checkout";
import { db } from "@/db";
import { webinars, webinarRegistrations } from "@/db/schema";
import { eq, sql } from "drizzle-orm";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  
  // Since db might be empty initially, we won't strictly enforce DB existence for metadata
  // But we format it according to user request
  return {
    title: `Live Masterclass | MedicoLegalAid`,
    description: `Join this comprehensive live masterclass for Indian doctors.`,
    alternates: { canonical: `/webinars/${slug}` },
    openGraph: {
      title: "Live Masterclass | MedicoLegalAid",
      description: "Join this comprehensive live masterclass for Indian doctors.",
      url: `https://www.medicolegalaid.com/webinars/${slug}`,
      images: [{ url: "https://www.medicolegalaid.com/logo.png", width: 800, height: 800 }],
    }
  };
}

export default async function WebinarPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // In a real scenario, we fetch the webinar from DB:
  // const [webinar] = await db.select().from(webinars).where(eq(webinars.slug, slug));
  // if (!webinar) notFound();

  // Mocking the webinar for the UI since the DB is currently empty
  const webinar = {
    id: 1,
    slug,
    title: "How to Defend Against Medical Negligence Claims",
    subtitle: "A practical guide for surgeons and physicians",
    topic: "Medical Negligence",
    webinarDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // Next week
    registrationDeadline: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000),
    maxSeats: 100,
    seatCutoff: 95,
    priceInPaise: 9900,
    originalPriceInPaise: 49900,
  };

  // Mocking registrations count (Waitlist test: change this to >= 95)
  const registrationsCount = 90; 

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans">
      <Navbar />

      <main className="flex-1">
        <section className="bg-primary pt-16 pb-24 text-white overflow-hidden relative">
          <div className="container mx-auto px-4 relative z-10 max-w-5xl">
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              <div className="lg:col-span-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/30 mb-6">
                  <span className="text-xs font-bold tracking-wider uppercase text-accent">Live Masterclass</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 leading-tight">
                  {webinar.title}
                </h1>
                <p className="text-xl text-white/75 mb-8 font-light">
                  {webinar.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-6 text-sm font-medium text-white/90">
                  <div className="flex items-center gap-2">
                    <span className="p-2 rounded-full bg-white/10">🗓️</span>
                    <span>{webinar.webinarDate.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="p-2 rounded-full bg-white/10">⏰</span>
                    <span>{webinar.webinarDate.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })} IST</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2">
                <WebinarCheckout webinar={webinar} registrationsCount={registrationsCount} />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
