import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from 'next/font/google';
import { SmoothScroll } from "@/components/shared/SmoothScroll";
import { LocalBusinessSchema } from "@/components/shared/LocalBusinessSchema";
import { ClientLayoutWrapper } from "@/components/shared/ClientLayoutWrapper";
import { GoogleAnalytics } from "@next/third-parties/google";

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ashirvadhresorts.com"),
  title: "Resorts in Wayand | Wedding venues in Wayanad",
  description: "Looking for top resorts in Wayanad? Ashirvadh Resorts provides tranquil stays and elegant wedding venues in Kerala. View our packages and book your stay!",
  keywords: [
    "Resorts in Wayand", 
    "Wedding venues in Wayanad", 
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${manrope.variable}`}
    >
      <head>
        <LocalBusinessSchema />
      </head>
      <body className="min-h-full flex flex-col font-sans relative">
        <SmoothScroll />
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
      <GoogleAnalytics gaId="G-0C2Q8TGJ11" />
    </html>
  );
}
