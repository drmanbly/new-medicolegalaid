import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono, Source_Serif_4 } from "next/font/google";
import { ScrollObserver } from "@/components/layout/ScrollObserver";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.medicolegalaid.com"),
  title: {
    default: "MedicoLegalAid | Medico-Legal Masters Course for Indian Doctors",
    template: "%s | MedicoLegalAid",
  },
  description: "Protect your medical practice and reputation. Practical, case-based masterclasses on consent, documentation, consumer court, and legal issues for Indian doctors by Dr. Vinaykumar S.",
  openGraph: {
    title: "MedicoLegalAid | Medico-Legal Masters Course",
    description: "Case-based masterclasses on consent, documentation, consumer court, and legal defense for Indian doctors.",
    url: "https://www.medicolegalaid.com",
    siteName: "MedicoLegalAid",
    images: [
      {
        url: "/images/indemnity-webinar-og.jpeg",
        width: 1200,
        height: 630,
        alt: "MedicoLegalAid",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} ${sourceSerif.variable} antialiased`}
      >
        <ScrollObserver />
        {children}
      </body>
    </html>
  );
}
