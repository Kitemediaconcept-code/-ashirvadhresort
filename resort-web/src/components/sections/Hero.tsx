"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

export function Hero() {
  const [timeLeft, setTimeLeft] = useState({ days: 10, hours: 8, minutes: 32, seconds: 45 });

  useEffect(() => {
    // Set for Sunday 23/08/2026 at 5:00 PM
    const targetDate = new Date("2026-08-23T17:00:00").getTime();
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-[750px] md:min-h-0 md:aspect-video xl:aspect-[21/9] flex flex-col justify-end pb-8 pt-24 md:pt-32 overflow-hidden rounded-b-[40px] md:rounded-b-[60px] bg-[#15120F]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero3.png"
          alt="Ashirvadh Nature Resort Grand Launch"
          fill
          className="object-cover object-[center_bottom] md:object-center"
          priority
          quality={100}
        />
        {/* Professional smooth dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#15120F] via-[#15120F]/40 to-transparent" />
      </div>

      <div className="container mx-auto px-5 md:px-12 relative z-10 w-full flex flex-col gap-12 md:gap-24">
        {/* Main Typography */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl"
        >
          <h1 className="text-[2.75rem] leading-[1.05] md:text-7xl lg:text-[5.5rem] font-serif text-white mb-4 md:mb-6">
            Your Sanctuary <br className="hidden md:block" />
            <span className="text-[#DFCCA0]">Wayanad</span>
          </h1>
          <p className="text-[0.95rem] md:text-xl text-white/90 max-w-xl mb-6 md:mb-8">
            Luxury stays nestled in the heart of nature.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 md:gap-4">
            <span className="px-5 md:px-6 py-2 md:py-2.5 rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-white/90 text-[0.8rem] md:text-base">
              Nature Immersion
            </span>
            <span className="px-5 md:px-6 py-2 md:py-2.5 rounded-full border border-white/20 bg-[#3A1414]/60 backdrop-blur-md text-white/90 text-[0.8rem] md:text-base">
              Premium Hospitality
            </span>
            <span className="px-5 md:px-6 py-2 md:py-2.5 rounded-full border border-white/20 bg-[#2A0F0F]/60 backdrop-blur-md text-white/90 text-[0.8rem] md:text-base">
              Scenic Views
            </span>
            <span className="px-5 md:px-6 py-2 md:py-2.5 rounded-full border border-white/20 bg-[#1A0B0B]/60 backdrop-blur-md text-white/90 text-[0.8rem] md:text-base">
              Comfort & Relaxation
            </span>
          </div>
        </motion.div>

        {/* Launch Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full bg-[#181511]/30 backdrop-blur-xl border border-white/10 rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 lg:gap-12 shadow-2xl"
        >
          {/* Countdown */}
          <div className="flex flex-col gap-3 md:gap-5 w-full lg:w-auto">
            <h3 className="text-white/90 text-base md:text-xl font-medium tracking-wide">Grand Launch</h3>
            <div className="flex justify-between lg:justify-start lg:gap-10 w-full">
              <div className="flex flex-col items-center">
                <span className="text-[#DFCCA0] text-3xl md:text-5xl font-serif leading-none">{String(timeLeft.days).padStart(2, '0')}</span>
                <span className="text-white/50 text-[0.6rem] md:text-sm mt-1.5 md:mt-3 tracking-widest uppercase">Days</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[#DFCCA0] text-3xl md:text-5xl font-serif leading-none">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="text-white/50 text-[0.6rem] md:text-sm mt-1.5 md:mt-3 tracking-widest uppercase">Hours</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[#DFCCA0] text-3xl md:text-5xl font-serif leading-none">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="text-white/50 text-[0.6rem] md:text-sm mt-1.5 md:mt-3 tracking-widest uppercase">Minutes</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[#DFCCA0] text-3xl md:text-5xl font-serif leading-none">{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className="text-white/50 text-[0.6rem] md:text-sm mt-1.5 md:mt-3 tracking-widest uppercase">Seconds</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block w-px h-24 bg-white/10" />

          {/* Details */}
          <div className="flex flex-col gap-2.5 md:gap-4 w-full lg:w-auto mt-1 lg:mt-0">
            <div className="flex items-center gap-3 md:gap-4 text-white/90">
              <CalendarDays className="w-4 h-4 md:w-5 md:h-5 text-[#DFCCA0]/80" strokeWidth={1.5} />
              <span className="text-sm md:text-lg tracking-wide">23/08/2026, Sunday</span>
            </div>
            <div className="flex items-center gap-3 md:gap-4 text-white/90">
              <Clock className="w-4 h-4 md:w-5 md:h-5 text-[#DFCCA0]/80" strokeWidth={1.5} />
              <span className="text-sm md:text-lg tracking-wide">5:00 PM</span>
            </div>
            <div className="flex items-center gap-3 md:gap-4 text-white/90">
              <MapPin className="w-4 h-4 md:w-5 md:h-5 text-[#DFCCA0]/80" strokeWidth={1.5} />
              <span className="text-sm md:text-lg tracking-wide">Krishnagiri, Wayanad</span>
            </div>
          </div>

          {/* Button */}
          <div className="w-full lg:w-auto flex-shrink-0 mt-2 lg:mt-0">
            <button className="w-full lg:w-auto bg-[#DBC28D] hover:bg-[#EBD3A0] text-[#2A241C] px-5 py-3 md:px-8 md:py-5 rounded-xl md:rounded-[1.25rem] font-medium text-sm md:text-lg transition-colors text-center shadow-lg shadow-black/20">
              Be the first to experience<br className="hidden md:block" /> Ashirvadh Nature Resort
            </button>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
