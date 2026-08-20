import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "wayanad resorts with private pool | Resorts in Krishnagiri",
  description: "Get a glimpse of paradise! View photos of Ashirvadh Resorts, featuring luxury Wayanad resorts with private pool in Krishnagiri. Plan your dream getaway now.",
  alternates: { canonical: "/gallery/" }
};

const images = [
  "/villa2.jpg",
  "/r1.png",
  "/r2.png",
  "/r4.png",
  "/r5.png",
  "/r6.png",
  "/r7.png",
  "/r8.png",
  "/r9.png",
  "/deluxe-cottage-king-bed.jpg",
  "/r11.png",
  "/r12.png",
  "/08.jpg",
  "/exp-amphi1.jpg",
  "/exp-amphi2.jpg",
  "/exp-room.jpg",
  "/exp-pool.jpg",
];

export default function GalleryPage() {
  return (
    <div className="pt-32 pb-32 min-h-screen bg-white text-black">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div>
            <div className="inline-block bg-black/5 border border-black/10 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide mb-6">
              Our Stories
            </div>
            <h1 className="text-5xl md:text-7xl font-sans tracking-tight font-medium text-black">Photo Gallery</h1>
          </div>
          <p className="text-gray-700 max-w-xs mt-6 md:mt-0 text-sm md:text-base md:text-right leading-relaxed">
            Captured moments showcasing our nature resort in Wayanad, scenic surroundings, and private pool villas.
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


