import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Ashirvadh Nature Resort",
  description: "Visual journey through the pristine nature and luxurious architecture of Ashirvadh Nature Resort.",
};

const images = [
  "/hero-bg.jpg",
  "/room-1.png",
  "/room-2.png",
  "/room-3.png",
  "/room-4.png",
];

export default function GalleryPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-5xl md:text-6xl font-serif mb-12 text-center">Gallery</h1>
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, idx) => (
            <div key={idx} className="relative w-full rounded-2xl overflow-hidden break-inside-avoid">
              <Image 
                src={src} 
                alt={`Gallery image ${idx + 1}`}
                width={800}
                height={600}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
          {/* Duplicate some for masonry effect visualization */}
          {images.slice(0, 3).map((src, idx) => (
            <div key={`dup-${idx}`} className="relative w-full rounded-2xl overflow-hidden break-inside-avoid">
              <Image 
                src={src} 
                alt={`Gallery image dup ${idx + 1}`}
                width={800}
                height={600}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
