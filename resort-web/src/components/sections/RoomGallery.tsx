"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface RoomGalleryProps {
  images: string[];
  roomTitle: string;
}

export function RoomGallery({ images, roomTitle }: RoomGalleryProps) {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  // Keyboard navigation
  useEffect(() => {
    if (activeImageIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveImageIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [activeImageIndex]);

  if (!images || images.length === 0) return null;

  const mainImage = images[0];
  const rightImages = images.slice(1, 4); // Display up to 3 on the right side
  const remainingCount = images.length - 4;

  const handlePrev = () => {
    setActiveImageIndex((prev) => 
      prev !== null ? (prev === 0 ? images.length - 1 : prev - 1) : null
    );
  };

  const handleNext = () => {
    setActiveImageIndex((prev) => 
      prev !== null ? (prev === images.length - 1 ? 0 : prev + 1) : null
    );
  };

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-14">
        {/* Main Large Image */}
        <div 
          onClick={() => setActiveImageIndex(0)}
          className="lg:col-span-2 relative aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[400px] rounded-[24px] overflow-hidden shadow-sm cursor-pointer group"
        >
          <Image
            src={mainImage}
            alt={`Ashirvad Resort wayanad - ${roomTitle} - Main Gallery`}
            fill
            priority
            className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
            sizes="(max-width: 1024px) 100vw, 66vw"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        </div>

        {/* Right Stack Images */}
        <div className="grid grid-cols-3 lg:grid-cols-1 gap-4">
          {rightImages.map((src, index) => {
            const isLast = index === rightImages.length - 1;
            const hasRemaining = remainingCount > 0;
            const originalIndex = index + 1;

            return (
              <div 
                key={src} 
                onClick={() => setActiveImageIndex(originalIndex)}
                className="relative aspect-square lg:aspect-[3/2] rounded-[16px] overflow-hidden shadow-sm cursor-pointer group"
              >
                <Image
                  src={src}
                  alt={`Ashirvad Resort wayanad - ${roomTitle} - Gallery Photo ${index + 2}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 30vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-350" />
                {isLast && hasRemaining && (
                  <div className="absolute inset-0 bg-black/45 flex flex-col items-center justify-center text-white z-10 transition-colors group-hover:bg-black/55">
                    <span className="text-xl md:text-2xl font-serif font-semibold">+{remainingCount}</span>
                    <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider">Photos</span>
                  </div>
                )}
              </div>
            );
          })}
          
          {/* Fallback empty blocks if room has fewer than 4 images to maintain clean layout grid */}
          {rightImages.length < 3 && Array.from({ length: 3 - rightImages.length }).map((_, i) => (
            <div 
              key={i} 
              className="hidden lg:block relative aspect-[3/2] rounded-[16px] bg-gray-50 border border-dashed border-gray-200"
            />
          ))}
        </div>
      </div>

      {/* Lightbox / Popup Modal */}
      {activeImageIndex !== null && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 md:p-10 select-none">
          {/* Lightbox Header */}
          <div className="flex justify-between items-center text-white z-10">
            <span className="text-sm font-medium opacity-80 tracking-wide font-sans">
              {roomTitle} — {activeImageIndex + 1} of {images.length}
            </span>
            <button 
              onClick={() => setActiveImageIndex(null)}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              aria-label="Close Lightbox"
            >
              <X size={20} />
            </button>
          </div>

          {/* Lightbox Main Image & Navigation */}
          <div className="flex-1 flex items-center justify-between relative max-w-7xl mx-auto w-full py-4">
            {/* Left Button */}
            <button
              onClick={handlePrev}
              className="absolute left-2 md:left-4 z-10 w-12 h-12 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-white transition-all hover:scale-105"
              aria-label="Previous Image"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Image Container */}
            <div className="relative w-full h-[60vh] md:h-[70vh]">
              <Image
                src={images[activeImageIndex]}
                alt={`Ashirvad Resort wayanad - ${roomTitle} - Lightbox Photo`}
                fill
                className="object-contain"
                priority
                sizes="100vw"
              />
            </div>

            {/* Right Button */}
            <button
              onClick={handleNext}
              className="absolute right-2 md:right-4 z-10 w-12 h-12 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-white transition-all hover:scale-105"
              aria-label="Next Image"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Bottom Thumbnails Strip */}
          <div className="z-10 py-2 max-w-3xl mx-auto w-full">
            <div className="flex gap-2 md:gap-3 overflow-x-auto justify-start md:justify-center py-2 px-4 scrollbar-none">
              {images.map((src, index) => {
                const isActive = index === activeImageIndex;

                return (
                  <button
                    key={src}
                    onClick={() => setActiveImageIndex(index)}
                    className={`relative w-16 h-12 md:w-20 md:h-14 rounded-lg overflow-hidden shrink-0 transition-all ${
                      isActive 
                        ? "ring-2 ring-[#D4C78B] opacity-100 scale-105 shadow-md" 
                        : "opacity-40 hover:opacity-80 hover:scale-102"
                    }`}
                  >
                    <Image
                      src={src}
                      alt={`Ashirvad Resort wayanad - Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
