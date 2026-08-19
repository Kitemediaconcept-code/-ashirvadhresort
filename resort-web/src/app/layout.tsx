import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ashirvadhresorts.com"),
  title: {
    default: "Ashirvadh Resorts Wayanad | Best Nature Resort in Wayanad",
    template: "%s | Ashirvadh Resorts Wayanad",
  },
  description: "Ashirvadh Nature Resorts Wayanad — experience luxury nature stays, private cottages, and breathtaking hill views. One of the best resorts in Wayanad for families, couples & nature lovers.",
  keywords: [
    "ashirvadhresorts in wayanad",
    "ashirvadh resorts wayanad",
    "resorts in wayanad",
    "Ashirvadh Nature Resorts wayanad",
    "Ashirvadh Nature Resort",
    "best resort in Wayanad",
    "luxury resort Wayanad",
    "nature resort Wayanad",
    "Wayanad accommodation",
    "Wayanad stay",
    "resort Wayanad Kerala",
    "lake view resort Wayanad",
    "Krishnagiri resort Wayanad"
  ],
  authors: [{ name: "Ashirvadh Resort" }],
  creator: "Ashirvadh Resort",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ashirvadhresorts.com",
    title: "Ashirvadh Resorts Wayanad | Best Nature Resort in Wayanad",
    description: "Ashirvadh Nature Resorts Wayanad — luxury nature stays, private cottages, and breathtaking hill views. One of the best resorts in Wayanad.",
    siteName: "Ashirvadh Nature Resort",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Ashirvadh Nature Resort Wayanad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashirvadh Resorts Wayanad | Best Nature Resort in Wayanad",
    description: "Ashirvadh Resorts in Wayanad — luxury nature stays, private cottages & breathtaking views. One of the best resorts in Wayanad.",
    images: ["/hero.png"],
  },
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "PASTE_YOUR_TOKEN_HERE",
  },
};

import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { WhatsAppWidget } from "@/components/shared/WhatsAppWidget";
import { VirtualTourWidget } from "@/components/shared/VirtualTourWidget";
import { SmoothScroll } from "@/components/shared/SmoothScroll";
import { LocalBusinessSchema } from "@/components/shared/LocalBusinessSchema";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
        <LocalBusinessSchema />
      </head>
      <body className="min-h-full flex flex-col font-sans relative">
        <SmoothScroll />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppWidget />
        <VirtualTourWidget />
      </body>
    </html>
  );
}
