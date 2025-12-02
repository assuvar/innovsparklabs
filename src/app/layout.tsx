"use client";

import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrackingWrapper from "@/components/TrackingWrapper";
import CookieBanner from "@/components/CookieBanner";
import StickyFooter from "@/components/StickyFooter";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { useReferral } from "@/hooks/useReferral";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
});

// Component to handle global referral tracking
function ReferralTracker() {
  useReferral(); // This hook handles the ?ref= parsing
  return null;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body
        className={`${outfit.variable} font-sans antialiased bg-brand-dark text-brand-light overflow-x-hidden`}
      >
        <TrackingWrapper />
        <ReferralTracker />
        <Navbar />
        {children}
        <Footer />
        <StickyFooter />
        <WhatsAppFloatingButton />
        <CookieBanner />
      </body>
    </html>
  );
}
