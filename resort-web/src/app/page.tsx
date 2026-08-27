import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ashirvadh Resorts Wayanad | Best Nature Resorts in Wayanad Kerala",
  description: "Welcome to Ashirvadh Resorts in Wayanad — Kerala's finest nature resort. Luxury cottages, lake views, and unforgettable experiences at one of the best resorts in Wayanad.",
  alternates: { canonical: "/" }
};

import dynamic from 'next/dynamic';
import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";


const AboutPreview = dynamic(() => import('@/components/sections/AboutPreview').then(mod => mod.AboutPreview), { ssr: true });
const DetailedCatalog = dynamic(() => import('@/components/sections/DetailedCatalog').then(mod => mod.DetailedCatalog), { ssr: true });
const ExperiencesPreview = dynamic(() => import('@/components/sections/ExperiencesPreview').then(mod => mod.ExperiencesPreview), { ssr: true });

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-white text-black">
      <Hero />
      <StatsBar />
      <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-24 py-16 flex flex-col gap-32">
        <AboutPreview />
        <DetailedCatalog />
        <ExperiencesPreview />
      </div>
    </div>
  );
}


