"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Mountain, Leaf } from "lucide-react";

export function StatsBar() {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-8 md:py-12 relative z-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="border border-white/10 rounded-[48px] p-6 md:p-8 bg-[#0a0a0a] flex flex-wrap lg:flex-nowrap items-center justify-between gap-8 lg:gap-4 shadow-2xl"
      >
        <div className="flex flex-col items-center justify-center text-center w-1/2 md:w-auto">
          <Leaf className="text-primary mb-2" size={24} />
          <span className="text-sm font-medium text-white">Premium Eco-Resort</span>
          <span className="text-xs text-white/50">Without Compromise</span>
        </div>
        
        <div className="hidden md:block w-px h-12 bg-white/10" />

        <div className="flex flex-col items-center justify-center text-center w-1/2 md:w-auto">
          <span className="text-2xl font-light mb-1 text-white">25-Acre</span>
          <span className="text-xs text-white/50">Lush Green<br/>Estate</span>
        </div>
        
        <div className="hidden md:block w-px h-12 bg-white/10" />

        <div className="flex flex-col items-center justify-center text-center w-1/2 md:w-auto">
          <span className="text-2xl font-light mb-1 text-white">24/7</span>
          <span className="text-xs text-white/50">Dedicated<br/>Concierge</span>
        </div>
        
        <div className="hidden md:block w-px h-12 bg-white/10" />

        <div className="flex flex-col items-center justify-center text-center w-1/2 md:w-auto">
          <MapPin className="text-white/50 mb-2" size={20} />
          <span className="text-sm font-medium text-white">11.662° N</span>
          <span className="text-xs text-white/50">Latitude</span>
        </div>
        
        <div className="hidden md:block w-px h-12 bg-white/10" />

        <div className="flex flex-col items-center justify-center text-center w-1/2 md:w-auto">
          <MapPin className="text-white/50 mb-2" size={20} />
          <span className="text-sm font-medium text-white">76.190° E</span>
          <span className="text-xs text-white/50">Longitude</span>
        </div>
        
        <div className="hidden md:block w-px h-12 bg-white/10" />

        <div className="flex flex-col items-center justify-center text-center w-1/2 md:w-auto">
          <Mountain className="text-white/50 mb-2" size={20} />
          <span className="text-sm font-medium text-white">2,100 ft</span>
          <span className="text-xs text-white/50">Above<br/>Sea Level</span>
        </div>
        
        <div className="w-full lg:w-auto flex justify-center mt-4 lg:mt-0 lg:pl-4">
          <Link href="/rooms" className="px-8 py-3 rounded-full border border-white/30 text-white text-sm font-medium hover:bg-white hover:text-black transition-colors shrink-0">
            BOOK NOW
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
