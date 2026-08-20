"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Leaf, Sun, CloudRain, Snowflake, ArrowRight } from "lucide-react";

export function WayanadFeatures() {
  return (
    <section className="flex flex-col gap-6 md:gap-12 w-full">

      {/* Middle Location Block */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="relative rounded-[32px] overflow-hidden min-h-[500px] bg-[#f8f6f0] flex items-center shadow-xl"
      >
        <div className="absolute inset-0 z-0">
          <Image src="/western.png" alt="Wayanad Landscape" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-[#f8f6f0] from-30% via-[#f8f6f0]/70 via-50% to-transparent z-10" />

        <div className="relative z-20 p-8 md:p-12 lg:p-16 max-w-xl">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="text-[#a48650]" size={16} />
            <span className="text-[#a48650] text-sm font-bold tracking-widest uppercase">Wayanad</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1a1f1a] mb-6 leading-[1.1]">
            Located in the<br/>Heart Of Wayanad
          </h2>
          
          <p className="text-[#4a554a] leading-relaxed mb-10 max-w-md text-sm md:text-base">
            Ashirvadh Nature Resorts Wayanad is situated in the Wayanad district of Kerala at coordinates <strong className="text-[#a48650] font-medium">11.662° N</strong> latitude and <strong className="text-[#a48650] font-medium">76.190° E</strong> longitude, at an average altitude of approximately <strong className="text-[#a48650] font-medium">2,100 feet</strong> (640 meters) above sea level.
          </p>

          <Link href="/about" className="inline-flex items-center gap-4 bg-[#131613] text-white px-6 py-2.5 rounded-full hover:bg-black transition-colors group shadow-lg">
            <span className="text-sm font-medium pl-2">Explore Wayanad</span>
            <div className="bg-[#d4b572] text-black rounded-full w-8 h-8 flex items-center justify-center group-hover:scale-105 transition-transform">
              <ArrowRight size={16} />
            </div>
          </Link>
        </div>

        {/* Map Pin UI */}
        <div className="hidden md:flex absolute right-[10%] lg:right-[15%] top-[40%] z-20 flex-col items-center">
          {/* Static Pin */}
          <div className="relative flex flex-col items-center">
            <div className="text-[#d4b572] drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] z-10">
              <svg width="48" height="56" viewBox="0 0 24 24" fill="currentColor" stroke="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </div>
          </div>

          {/* Floating Card */}
          <div className="mt-4 bg-[#131613]/90 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-4 flex items-center gap-4 transform translate-x-12 shadow-2xl">
            <div className="w-10 h-10 rounded-full border border-[#d4b572]/30 flex items-center justify-center shrink-0">
              <Leaf size={18} className="text-[#d4b572]" />
            </div>
            <div>
              <p className="text-white text-sm font-medium">Ashirvadh Nature Resort</p>
              <p className="text-[#d4b572] text-xs mt-0.5">Wayanad, Kerala, India</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Seasons Block */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="border border-white/10 rounded-3xl p-8 md:p-12 bg-[#0a0a0a] flex flex-col xl:flex-row gap-12 xl:gap-8 text-white"
      >
        <div className="w-full xl:w-1/4 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6 leading-tight">Experience Every Season in Wayanad</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Each season brings a unique charm to Wayanad&apos;s landscapes, offering you unforgettable experiences all year round.
          </p>
        </div>

        <div className="w-full xl:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Summer */}
          <div className="relative h-[320px] rounded-2xl overflow-hidden group">
            <Image src="/summer.png" alt="Summer in Wayanad" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full p-6">
              <Sun className="text-primary mb-3" size={28} />
              <h3 className="text-xl font-medium mb-1">Summer</h3>
              <p className="text-xs font-medium text-white/80 mb-3">March – May</p>
              <p className="text-sm text-white/60 leading-snug">Pleasant and warm days, perfect for exploring nature.</p>
            </div>
          </div>

          {/* Monsoon */}
          <div className="relative h-[320px] rounded-2xl overflow-hidden group">
            <Image src="/monsoon.png" alt="Monsoon in Wayanad" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full p-6">
              <CloudRain className="text-white/80 mb-3" size={28} />
              <h3 className="text-xl font-medium mb-1">Monsoon</h3>
              <p className="text-xs font-medium text-white/80 mb-3">June – September</p>
              <p className="text-sm text-white/60 leading-snug">Lush greenery, waterfalls, and a refreshing escape.</p>
            </div>
          </div>

          {/* Autumn */}
          <div className="relative h-[320px] rounded-2xl overflow-hidden group">
            <Image src="/autumn.png" alt="Autumn in Wayanad" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full p-6">
              <Leaf className="text-[#d97736] mb-3" size={28} />
              <h3 className="text-xl font-medium mb-1">Autumn</h3>
              <p className="text-xs font-medium text-white/80 mb-3">October – November</p>
              <p className="text-sm text-white/60 leading-snug">Clear skies, breathtaking views and comfortable weather.</p>
            </div>
          </div>

          {/* Winter */}
          <div className="relative h-[320px] rounded-2xl overflow-hidden group">
            <Image src="/winter.png" alt="Winter in Wayanad" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full p-6">
              <Snowflake className="text-[#a4c2f4] mb-3" size={28} />
              <h3 className="text-xl font-medium mb-1">Winter</h3>
              <p className="text-xs font-medium text-white/80 mb-3">December – February</p>
              <p className="text-sm text-white/60 leading-snug">Cool and misty mornings, ideal for a cozy retreat.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}


