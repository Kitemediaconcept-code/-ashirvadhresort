"use client";

import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { WhatsAppWidget } from "@/components/shared/WhatsAppWidget";
import { VirtualTourWidget } from "@/components/shared/VirtualTourWidget";

export function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppWidget />
      <VirtualTourWidget />
    </>
  );
}
