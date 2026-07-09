import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Ashirvadh Nature Resort",
  description: "Visual journey through the pristine nature and luxurious architecture of Ashirvadh Nature Resort.",
};

const images = [
  "/CARD3.png",
  "/CARD6.png",
  "/CARD4.png",
  "/autumn.png",
  "/hero.png",
  "/monsoon.png",
  "/card2.png",
  "/ROOMS.png",
  "/REORT PULL.png",
  "/summer.png",
  "/winter.png",
];

export default function GalleryPage() {
  return (
    <div className="pt-32 pb-32 min-h-screen bg-background">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div>
            <div className="inline-block bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide mb-6">
              Our Stories
            </div>
            <h1 className="text-5xl md:text-7xl font-sans tracking-tight font-medium">Photo Gallery</h1>
          </div>
          <p className="text-muted-foreground max-w-xs mt-6 md:mt-0 text-sm md:text-base md:text-right leading-relaxed">
            Captured moments from our nature resort and scenic surroundings.
          </p>
        </div>
        
        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
          {images.map((src, idx) => (
            <div key={idx} className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden break-inside-avoid group cursor-pointer">
              <Image 
                src={src} 
                alt={`Gallery image ${idx + 1}`}
                width={800}
                height={800}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              {/* Optional subtle overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
