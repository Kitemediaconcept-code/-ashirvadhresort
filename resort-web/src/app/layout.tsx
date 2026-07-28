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
    default: "Ashirvadh Nature Resort | Luxury Stays in Wayanad",
    template: "%s | Ashirvadh Nature Resort Wayanad",
  },
  description: "Experience the ultimate luxury and nature immersion at Ashirvadh Nature Resort, Wayanad. The best resort in Wayanad for family stays, couples, and nature lovers.",
  keywords: ["Wayanad resort", "luxury stay in Wayanad", "best resort in Wayanad", "nature resort Wayanad", "Wayanad accommodation", "resort in Wayanad with pool", "lake view resort Wayanad"],
  authors: [{ name: "Ashirvadh Resort" }],
  creator: "Ashirvadh Resort",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ashirvadhresorts.com",
    title: "Ashirvadh Nature Resort | Luxury Stays in Wayanad",
    description: "Experience the ultimate luxury and nature immersion at Ashirvadh Nature Resort, Wayanad. The best resort in Wayanad for family stays, couples, and nature lovers.",
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
    title: "Ashirvadh Nature Resort | Luxury Stays in Wayanad",
    description: "Experience the ultimate luxury and nature immersion at Ashirvadh Nature Resort, Wayanad.",
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
