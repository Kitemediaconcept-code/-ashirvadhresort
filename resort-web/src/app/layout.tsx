import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ashirvadhresorts.com"),
  title: {
    default: "Ashirvadh Resorts Wayanad | Best Nature Resort in Wayanad",
    template: "%s | Ashirvadh Resorts Wayanad",
  },
  description: "Ashirvadh Resorts in Wayanad — experience luxury nature stays, private cottages, and breathtaking hill views. One of the best resorts in Wayanad for families, couples & nature lovers.",
  keywords: [
    "ashirvadhresorts in wayanad",
    "ashirvadh resorts wayanad",
    "resorts in wayanad",
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
    description: "Ashirvadh Resorts in Wayanad — experience luxury nature stays, private cottages, and breathtaking hill views. One of the best resorts in Wayanad.",
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
  }
};

import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { WhatsAppWidget } from "@/components/shared/WhatsAppWidget";
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
      className={`${manrope.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        <LocalBusinessSchema />
      </head>
      <body className="min-h-full flex flex-col font-sans relative">
        <SmoothScroll />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
