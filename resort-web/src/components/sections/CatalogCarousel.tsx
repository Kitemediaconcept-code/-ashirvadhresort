"use client";

import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const catalog = [
  { id: 1, title: "Deluxe Cottage, 50m²", price: "from ₹5,000", image: "/card1.png" },
  { id: 2, title: "A-Frame Cabin, 45m²", price: "from ₹7,200", image: "/hero-bg.jpg" },
  { id: 3, title: "Luxury Villa, 85m²", price: "from ₹12,000", image: "/card1.png" },
  { id: 4, title: "Lake View Room, 60m²", price: "from ₹8,500", image: "/hero-bg.jpg" },
  { id: 5, title: "Forest Suite, 70m²", price: "from ₹10,000", image: "/card1.png" },
];

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
    <section className="bg-transparent text-foreground rounded-[32px] md:rounded-[48px] p-0 md:p-14 my-12 overflow-hidden mx-4 md:mx-12 lg:mx-auto lg:max-w-[1400px]">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-10 px-2 md:px-0">
        <h2 className="text-2xl md:text-3xl font-sans font-medium leading-tight max-w-lg">
          Catalog of our stays for 2024
        </h2>
        <p className="text-sm text-foreground/70 max-w-xs text-left md:text-right">
          Premium eco-friendly hospitality and modern luxury in the heart of nature
        </p>
      </div>

      {/* Carousel */}
      <div 
        ref={scrollRef}
        className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-2 md:px-0"
      >
        {catalog.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="relative min-w-[280px] md:min-w-[340px] h-[400px] md:h-[500px] rounded-[24px] md:rounded-[32px] overflow-hidden snap-start shrink-0 group"
          >
            <Image 
              src={item.image} 
              alt={item.title} 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
            
            <div className="absolute bottom-6 left-6 right-6">
              <h4 className="text-white font-medium text-lg mb-1">{item.title}</h4>
              <p className="text-white/80 text-sm">{item.price}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer Controls */}
      <div className="flex justify-between items-center mt-4 px-2 md:px-0">
        <button className="bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-medium hover:bg-primary/90 transition-colors flex items-center gap-2 text-sm">
          View Catalog
        </button>

        <div className="flex gap-3">
          <button 
            onClick={() => scroll("left")}
            className="w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-colors"
            aria-label="Scroll Left"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={() => scroll("right")}
            className="w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-colors"
            aria-label="Scroll Right"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
