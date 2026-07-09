import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { CatalogCarousel } from "@/components/sections/CatalogCarousel";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { WayanadFeatures } from "@/components/sections/WayanadFeatures";
import { RoomPreview } from "@/components/sections/RoomPreview";
import { ExperiencesPreview } from "@/components/sections/ExperiencesPreview";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-background">
      <Hero />
      <StatsBar />
      <CatalogCarousel />
      <div className="container mx-auto px-6 md:px-12 py-16 flex flex-col gap-32">
        <AboutPreview />
        <WayanadFeatures />
        <RoomPreview />
        <ExperiencesPreview />
      </div>
    </div>
  );
}
