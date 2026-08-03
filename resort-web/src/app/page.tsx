import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Luxury Nature Resort in Wayanad | Ashirvadh Resort",
  description: "Looking for the best resorts in Wayanad? Ashirvadh Nature Resort offers luxury stays, private cottages, lake views, and nature trails in the heart of Kerala.",
  alternates: { canonical: "/" }
};

import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { CatalogCarousel } from "@/components/sections/CatalogCarousel";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { RoomPreview } from "@/components/sections/RoomPreview";
import { ExperiencesPreview } from "@/components/sections/ExperiencesPreview";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-white text-black">
      <Hero />
      <StatsBar />
      <CatalogCarousel />
      <div className="container mx-auto px-6 md:px-12 py-16 flex flex-col gap-32">
        <AboutPreview />
        <RoomPreview />
        <ExperiencesPreview />
      </div>
    </div>
  );
}
