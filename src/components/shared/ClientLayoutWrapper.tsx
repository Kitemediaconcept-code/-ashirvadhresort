"use client";

import { usePathname } from "next/navigation";

import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { WhatsAppWidget } from "@/components/shared/WhatsAppWidget";
import { VirtualTourWidget } from "@/components/shared/VirtualTourWidget";

export function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const is360Page = pathname === "/ashirvad360" || pathname === "/360-tour";

  return (
    <>
      {!is360Page && <Header />}
      <main className="flex-1">{children}</main>
      {!is360Page && <Footer />}
      <WhatsAppWidget />
      <VirtualTourWidget />
    </>
  );
}
