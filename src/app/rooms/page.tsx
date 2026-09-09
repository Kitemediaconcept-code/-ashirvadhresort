import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best resorts in Wayanad for family | Resorts in Wayand",
  description: "Discover one of the best resorts in Wayanad for family. Explore spacious rooms, luxury family suites, and scenic views at Ashirvad Resorts. Book your stay!",
  alternates: { canonical: "/rooms/" }
};



import dynamic from 'next/dynamic';
const DetailedCatalog = dynamic(() => import('@/components/sections/DetailedCatalog').then(mod => mod.DetailedCatalog), { ssr: true });

export default function RoomsPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white text-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-2xl mb-16">
          <h1 className="text-5xl md:text-6xl font-serif mb-6 text-black">Rooms & Suites</h1>
          <p className="text-gray-700 text-lg">
            Discover our range of thoughtfully designed accommodations, blending modern comfort with natural elegance.
          </p>
        </div>

        <DetailedCatalog />


      </div>
    </div>
  );
}


