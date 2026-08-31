"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Mountain, Leaf, ChevronRight } from "lucide-react";

export function StatsBar() {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-8 md:py-12 relative z-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="border border-white/10 rounded-[32px] md:rounded-[48px] p-6 md:p-8 bg-[#0a0a0a] grid grid-cols-2 md:flex md:flex-row flex-wrap lg:flex-nowrap items-start md:items-center justify-between gap-y-8 gap-x-4 md:gap-4 shadow-2xl"
      >
        <div className="order-1 md:order-none col-span-2 md:col-span-1 flex flex-row md:flex-col items-center md:justify-center text-left md:text-center w-full md:w-auto gap-3 md:gap-0">
          <Leaf className="text-primary mb-0 md:mb-2 shrink-0" size={24} />
          <div className="flex flex-col">
            <span className="text-sm font-medium text-white whitespace-nowrap">Premium Eco-Resort</span>
            <span className="text-xs text-white/50 whitespace-nowrap">Without Compromise</span>
          </div>
        </div>
        
        <div className="hidden md:block w-px h-12 bg-white/10" />

        {/* 360 Virtual Tour Button */}
        <div className="order-2 md:order-none col-span-2 md:col-span-1 w-full md:w-auto flex justify-center md:px-2">
          <Link 
            href="https://cybozom.com/360/ashirvadresort/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-between md:justify-center gap-3 px-5 py-2.5 rounded-full border border-primary/40 hover:border-primary hover:bg-primary/5 transition-all group w-full md:w-auto"
          >
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="text-primary shrink-0">
                <path d="M21 12a9 4 0 0 0-9-4 9 4 0 0 0-9 4 9 4 0 0 0 9 4 9 4 0 0 0 9-4Z" />
                <path d="M21 12l-2-2" />
                <path d="M21 12l-2 2" />
                <path d="M3 12l2-2" />
                <path d="M3 12l2 2" />
                <text x="12" y="15" textAnchor="middle" fill="currentColor" stroke="none" fontSize="8" fontWeight="600" fontFamily="sans-serif">360</text>
              </svg>
              <div className="flex flex-col text-left">
                <span className="text-[0.8rem] font-medium text-primary leading-tight">360° View</span>
                <span className="text-[0.65rem] text-white/60 leading-tight mt-0.5">Virtual Tour</span>
              </div>
            </div>
            <ChevronRight className="text-primary/70 group-hover:text-primary transition-colors ml-1 w-4 h-4 shrink-0" />
          </Link>
        </div>

        <div className="hidden md:block w-px h-12 bg-white/10" />

        <div className="order-3 md:order-none flex flex-row md:flex-col items-center md:justify-center text-left md:text-center w-full md:w-auto gap-3 md:gap-0">
          <div className="w-6 shrink-0 flex justify-center md:hidden">
            <span className="text-primary text-xl font-light"></span>
          </div>
          <div className="flex flex-col md:items-center">
            <span className="text-lg md:text-2xl font-light mb-0 md:mb-1 text-white">10 Acre</span>
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


