"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const catalog = [
  { id: 1, title: "Cottages", price: "from ₹7,200", images: ["/cottages1.jpg", "/cottages1 (1).jpg", "/cottages1 (2).jpg", "/cottages1 (3).jpg"] },
  { id: 2, title: "Pool Villas", price: "from ₹10,000", images: ["/poolvilla.png", "/poolvilla2.jpg", "/poolvilla3.jpg", "/poolvilla4.png"] },
  { id: 3, title: "Villas", price: "from ₹15,000", images: ["/villa2.jpg", "/villa3.jpg", "/villa4.jpg"] },
];

function AutoSlideImage({ images, alt }: { images: string[], alt: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // 4s per slide
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="absolute inset-0 overflow-hidden w-full h-full">
      <motion.div 
        className="flex w-full h-full"
        animate={{ x: `-${currentIndex * 100}%` }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
      >
        {images.map((src, idx) => (
          <div key={idx} className="relative w-full h-full shrink-0">
            <Image
              src={src}
              alt={`${alt} ${idx + 1}`}
              fill
              sizes="(max-width: 768px) 85vw, (max-width: 1024px) 420px, 33vw"
              priority={idx === 0}
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function CatalogCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = current.clientWidth * 0.8;
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-white text-[#365b30] py-6 md:py-14 my-12 overflow-hidden w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-10 px-6 md:px-12 lg:px-20">
        <h2 className="text-2xl md:text-3xl font-sans font-medium leading-tight max-w-lg text-[#365b30]">
          Catalog of our stays
        </h2>
        <p className="text-sm text-[#365b30]/80 max-w-xs text-left md:text-right">
          Premium eco-friendly hospitality and modern luxury in the heart of nature
        </p>
      </div>

      {/* Carousel */}
      <div 
        ref={scrollRef}
        className="flex lg:grid lg:grid-cols-3 gap-4 md:gap-6 overflow-x-auto lg:overflow-visible snap-x snap-mandatory pb-8 lg:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-6 md:px-12 lg:px-20 scroll-pl-6 md:scroll-pl-12 lg:scroll-pl-20"
      >
        {catalog.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="relative w-[85vw] md:w-[420px] lg:w-full aspect-[4/5] lg:aspect-[4/5] rounded-[24px] md:rounded-[32px] overflow-hidden snap-start shrink-0 group"
          >
            <AutoSlideImage images={item.images} alt={item.title} />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80 pointer-events-none" />
            
            {/* Top row */}
            <div className="absolute top-6 left-6 right-6 flex justify-between items-center text-white z-10">
              <span className="text-sm font-medium tracking-wide">Discover stay</span>
              <MoreHorizontal className="w-5 h-5 text-white/90" />
            </div>

            {/* Bottom row */}
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end z-10">
              <h4 className="text-white font-medium text-2xl md:text-[28px] leading-tight max-w-[70%]">
                {item.title}
              </h4>
              <button 
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 hover:scale-105 transition-transform"
                aria-label={`View ${item.title}`}
              >
                <ArrowRight className="w-5 h-5 text-black" strokeWidth={2} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer Controls */}
      <div className="flex justify-between items-center mt-4 px-6 md:px-12 lg:px-20">
        <button className="bg-black text-white px-8 py-3.5 rounded-full font-medium hover:bg-black/90 transition-colors flex items-center gap-2 text-sm">
          View Catalog
        </button>

        <div className="flex gap-3">
          <button 
            onClick={() => scroll("left")}
            className="w-12 h-12 bg-black hover:bg-black/80 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-colors"
            aria-label="Scroll Left"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={() => scroll("right")}
            className="w-12 h-12 bg-black hover:bg-black/80 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-colors"
            aria-label="Scroll Right"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}


