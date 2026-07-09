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
        className="border border-white/10 rounded-[32px] md:rounded-[48px] p-6 md:p-8 bg-[#0a0a0a] grid grid-cols-2 md:flex md:flex-row flex-wrap lg:flex-nowrap items-start md:items-center justify-between gap-y-8 gap-x-4 md:gap-4 shadow-2xl"
      >
        <div className="order-1 md:order-none flex flex-row md:flex-col items-center md:justify-center text-left md:text-center w-full md:w-auto gap-3 md:gap-0">
          <Leaf className="text-primary mb-0 md:mb-2 shrink-0" size={24} />
          <div className="flex flex-col">
            <span className="text-sm font-medium text-white">Premium Eco-Resort</span>
            <span className="text-xs text-white/50">Without Compromise</span>
          </div>
        </div>
        
        <div className="hidden md:block w-px h-12 bg-white/10" />

        <div className="order-3 md:order-none flex flex-row md:flex-col items-center md:justify-center text-left md:text-center w-full md:w-auto gap-3 md:gap-0">
          <div className="w-6 shrink-0 flex justify-center md:hidden">
            <span className="text-primary text-xl font-light"></span>
          </div>
          <div className="flex flex-col md:items-center">
            <span className="text-lg md:text-2xl font-light mb-0 md:mb-1 text-white">25-Acre</span>
            <span className="text-xs text-white/50">Lush Green<br className="md:hidden"/> Estate</span>
          </div>
        </div>
        
        <div className="hidden md:block w-px h-12 bg-white/10" />

        <div className="order-5 md:order-none flex flex-row md:flex-col items-center md:justify-center text-left md:text-center w-full md:w-auto gap-3 md:gap-0">
          <div className="w-6 shrink-0 flex justify-center md:hidden">
            <span className="text-primary text-xl font-light"></span>
          </div>
          <div className="flex flex-col md:items-center">
            <span className="text-lg md:text-2xl font-light mb-0 md:mb-1 text-white">24/7</span>
            <span className="text-xs text-white/50">Dedicated<br className="md:hidden"/> Concierge</span>
          </div>
        </div>
        
        <div className="hidden md:block w-px h-12 bg-white/10" />

        <div className="order-2 md:order-none flex flex-row md:flex-col items-center md:justify-center text-left md:text-center w-full md:w-auto gap-3 md:gap-0">
          <MapPin className="text-white/50 mb-0 md:mb-2 shrink-0" size={24} />
          <div className="flex flex-col">
            <span className="text-sm font-medium text-white">11.662° N</span>
            <span className="text-xs text-white/50">Latitude</span>
          </div>
        </div>
        
        <div className="hidden md:block w-px h-12 bg-white/10" />

        <div className="order-4 md:order-none flex flex-row md:flex-col items-center md:justify-center text-left md:text-center w-full md:w-auto gap-3 md:gap-0">
          <MapPin className="text-white/50 mb-0 md:mb-2 shrink-0" size={24} />
          <div className="flex flex-col">
            <span className="text-sm font-medium text-white">76.190° E</span>
            <span className="text-xs text-white/50">Longitude</span>
          </div>
        </div>
        
        <div className="hidden md:block w-px h-12 bg-white/10" />

        <div className="order-6 md:order-none flex flex-row md:flex-col items-center md:justify-center text-left md:text-center w-full md:w-auto gap-3 md:gap-0">
          <Mountain className="text-white/50 mb-0 md:mb-2 shrink-0" size={24} />
          <div className="flex flex-col">
            <span className="text-sm font-medium text-white">2,100 ft</span>
            <span className="text-xs text-white/50">Above<br className="md:hidden"/> Sea Level</span>
          </div>
        </div>
        
        <div className="order-7 md:order-none col-span-2 w-full lg:w-auto flex justify-center mt-4 md:mt-0 lg:pl-4">
          <Link href="/rooms" className="w-full md:w-auto text-center px-8 py-3 rounded-full border border-white/30 text-white text-sm font-medium hover:bg-white hover:text-black transition-colors shrink-0">
            BOOK NOW
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
