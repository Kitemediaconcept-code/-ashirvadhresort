"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Mountain, Leaf, Sun, CloudRain, Snowflake, ArrowRight } from "lucide-react";

export function WayanadFeatures() {
  return (
    <section className="flex flex-col gap-6 text-white max-w-[1400px] mx-auto px-4 md:px-8">

      {/* Middle Location Block */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="relative border border-white/10 rounded-3xl overflow-hidden min-h-[450px] bg-[#050505] flex items-center"
      >
        <div className="absolute inset-0 z-0">
          <Image src="/map-bg.png" alt="Map Background" fill className="object-cover opacity-60" />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10 w-full md:w-2/3" />

        <div className="relative z-20 p-8 md:p-12 lg:p-16 max-w-xl">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="text-primary" size={28} />
            <h2 className="text-3xl md:text-4xl font-serif text-white">Located in the Heart of Wayanad</h2>
          </div>
          
          <p className="text-white/70 leading-relaxed mb-8">
            Wayanad district of Kerala, is located at coordinates <strong className="text-white font-medium">11.662° N</strong> latitude and <strong className="text-white font-medium">76.190° E</strong> longitude. It sits at an average altitude of approximately <strong className="text-white font-medium">2,100 feet</strong> (640 meters) above sea level.
          </p>

          <Link href="/about" className="inline-flex items-center gap-4 px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors group">
            <span className="text-sm">Explore Wayanad</span>
            <div className="bg-primary text-black rounded-full p-1.5 group-hover:scale-110 transition-transform">
              <ArrowRight size={16} />
            </div>
          </Link>
        </div>

        {/* Map Pin UI */}
        <div className="hidden md:flex absolute right-[10%] lg:right-[20%] top-1/2 -translate-y-1/2 z-20 flex-col items-center">
          <div className="text-primary drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]">
            <svg width="40" height="50" viewBox="0 0 24 24" fill="currentColor" stroke="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
          </div>
          <div className="mt-2 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 transform translate-x-12">
            <p className="text-white text-sm font-medium">Ashirvadh Nature Resort</p>
            <p className="text-white/50 text-xs">Wayanad, Kerala, India</p>
          </div>
        </div>
      </motion.div>

      {/* Bottom Seasons Block */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="border border-white/10 rounded-3xl p-8 md:p-12 bg-[#0a0a0a] flex flex-col xl:flex-row gap-12 xl:gap-8"
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
            <Image src="/summer.png" alt="Summer in Wayanad" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
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
            <Image src="/monsoon.png" alt="Monsoon in Wayanad" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
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
            <Image src="/autumn.png" alt="Autumn in Wayanad" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
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
            <Image src="/winter.png" alt="Winter in Wayanad" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
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
