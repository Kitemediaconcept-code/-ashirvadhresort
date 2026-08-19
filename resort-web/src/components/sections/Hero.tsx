"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValueEvent, useSpring } from "framer-motion";
import { CalendarDays, Clock, MapPin, Leaf, ConciergeBell, Waves, Flower2 } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const desktopFrameCount = 46;
const desktopFrame = (index: number) => 
  `/mouse scroll animation desktop/frame_${index.toString().padStart(3, '0')}.jpg`;

const mobileFrameCount = 32;
const mobileFrame = (index: number) => 
  `/mobile mouse scroll animation/frame_${index.toString().padStart(3, '0')}.jpg`;

export function Hero() {
  const [timeLeft, setTimeLeft] = useState({ days: 10, hours: 8, minutes: 32, seconds: 45 });
  const desktopCanvasRef = useRef<HTMLCanvasElement>(null);
  const mobileCanvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const desktopImagesRef = useRef<HTMLImageElement[]>([]);
  const mobileImagesRef = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    // Preload images for smooth animation
    if (typeof window !== "undefined") {
      if (desktopImagesRef.current.length === 0) {
        for (let i = 1; i <= desktopFrameCount; i++) {
          const img = new window.Image();
          img.src = desktopFrame(i);
          desktopImagesRef.current.push(img);
        }
        for (let i = 1; i <= mobileFrameCount; i++) {
          const img = new window.Image();
          img.src = mobileFrame(i);
          mobileImagesRef.current.push(img);
        }
      }
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    if (typeof window === "undefined") return;
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      const canvas = mobileCanvasRef.current;
      if (!canvas) return;
      const context = canvas.getContext('2d', { alpha: false });
      if (!context) return;

      const frameIdx = Math.max(1, Math.min(mobileFrameCount, Math.round(latest * mobileFrameCount)));
      const img = mobileImagesRef.current[frameIdx - 1];
      
      if (img && img.complete) {
        const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
        const x = (canvas.width / 2) - (img.width / 2) * scale;
        const y = (canvas.height / 2) - (img.height / 2) * scale;
        context.drawImage(img, x, y, img.width * scale, img.height * scale);
      }
    } else {
      const canvas = desktopCanvasRef.current;
      if (!canvas) return;
      const context = canvas.getContext('2d', { alpha: false });
      if (!context) return;

      const frameIdx = Math.max(1, Math.min(desktopFrameCount, Math.round(latest * desktopFrameCount)));
      const img = desktopImagesRef.current[frameIdx - 1];
      
      if (img && img.complete) {
        const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
        const x = (canvas.width / 2) - (img.width / 2) * scale;
        const y = (canvas.height / 2) - (img.height / 2) * scale;
        context.drawImage(img, x, y, img.width * scale, img.height * scale);
      }
    }
  });

  useEffect(() => {
    const setCanvasSize = () => {
      const isMobile = window.innerWidth < 768;

      if (isMobile) {
        const canvas = mobileCanvasRef.current;
        if (!canvas) return;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        const context = canvas.getContext('2d', { alpha: false });
        if (!context) return;
        
        const img = mobileImagesRef.current[0];
        if (img) {
          if (img.complete) {
            const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
            const x = (canvas.width / 2) - (img.width / 2) * scale;
            const y = (canvas.height / 2) - (img.height / 2) * scale;
            context.drawImage(img, x, y, img.width * scale, img.height * scale);
          } else {
            img.onload = () => {
              const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
              const x = (canvas.width / 2) - (img.width / 2) * scale;
              const y = (canvas.height / 2) - (img.height / 2) * scale;
              context.drawImage(img, x, y, img.width * scale, img.height * scale);
            };
          }
        }
      } else {
        const canvas = desktopCanvasRef.current;
        if (!canvas) return;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        const context = canvas.getContext('2d', { alpha: false });
        if (!context) return;
        
        const img = desktopImagesRef.current[0];
        if (img) {
          if (img.complete) {
            const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
            const x = (canvas.width / 2) - (img.width / 2) * scale;
            const y = (canvas.height / 2) - (img.height / 2) * scale;
            context.drawImage(img, x, y, img.width * scale, img.height * scale);
          } else {
            img.onload = () => {
              const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
              const x = (canvas.width / 2) - (img.width / 2) * scale;
              const y = (canvas.height / 2) - (img.height / 2) * scale;
              context.drawImage(img, x, y, img.width * scale, img.height * scale);
            };
          }
        }
      }
    };

    // Small delay to ensure images are created in the other useEffect first
    setTimeout(setCanvasSize, 10);
    window.addEventListener('resize', setCanvasSize);
    return () => window.removeEventListener('resize', setCanvasSize);
  }, []);

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

  const launchBarContent = (
    <>
      {/* Countdown */}
      <div className="flex flex-col gap-3 w-full">
        <h3 className="text-white/70 text-xs md:text-sm font-light tracking-wide">Grand Launch</h3>
        <div className="flex items-center justify-between gap-3 w-full">
          <div className="flex flex-col items-center flex-1">
            <span className="text-[#DFCCA0] text-3xl md:text-[2rem] font-serif leading-none">{String(timeLeft.days).padStart(2, '0')}</span>
            <span className="text-white/40 text-[0.45rem] mt-2 tracking-widest uppercase font-light">Days</span>
          </div>
          <div className="w-px h-6 bg-white/10" />
          <div className="flex flex-col items-center flex-1">
            <span className="text-[#DFCCA0] text-3xl md:text-[2rem] font-serif leading-none">{String(timeLeft.hours).padStart(2, '0')}</span>
            <span className="text-white/40 text-[0.45rem] mt-2 tracking-widest uppercase font-light">Hours</span>
          </div>
          <div className="w-px h-6 bg-white/10" />
          <div className="flex flex-col items-center flex-1">
            <span className="text-[#DFCCA0] text-3xl md:text-[2rem] font-serif leading-none">{String(timeLeft.minutes).padStart(2, '0')}</span>
            <span className="text-white/40 text-[0.45rem] mt-2 tracking-widest uppercase font-light">Minutes</span>
          </div>
          <div className="w-px h-6 bg-white/10" />
          <div className="flex flex-col items-center flex-1">
            <span className="text-[#DFCCA0] text-3xl md:text-[2rem] font-serif leading-none">{String(timeLeft.seconds).padStart(2, '0')}</span>
            <span className="text-white/40 text-[0.45rem] mt-2 tracking-widest uppercase font-light">Seconds</span>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="flex flex-col gap-2.5 w-full mt-1">
        <div className="flex items-center gap-2.5 text-white/70">
          <CalendarDays className="w-3 h-3 md:w-3.5 md:h-3.5 text-[#D1BD8A]" strokeWidth={1.5} />
          <span className="text-[0.7rem] md:text-[0.75rem] font-light tracking-wide">23/08/2026, Sunday</span>
        </div>
        <div className="flex items-center gap-2.5 text-white/70">
          <Clock className="w-3 h-3 md:w-3.5 md:h-3.5 text-[#D1BD8A]" strokeWidth={1.5} />
          <span className="text-[0.7rem] md:text-[0.75rem] font-light tracking-wide">5:00 PM</span>
        </div>
        <div className="flex items-center gap-2.5 text-white/70">
          <MapPin className="w-3 h-3 md:w-3.5 md:h-3.5 text-[#D1BD8A]" strokeWidth={1.5} />
          <span className="text-[0.7rem] md:text-[0.75rem] font-light tracking-wide">Krishnagiri, Wayanad</span>
        </div>
      </div>

      {/* Button */}
      <div className="w-full flex-shrink-0 mt-2">
        <button className="w-full bg-[#D2B980] hover:bg-[#EBD3A0] text-[#1A140E] px-4 py-2.5 rounded-xl font-normal text-[0.75rem] transition-colors text-center shadow-lg shadow-black/20 leading-relaxed">
          Be the first to experience Ashirvadh<br /> Nature Resort
        </button>
      </div>
    </>
  );

  return (
    <>
      <div ref={sectionRef} className="relative w-full h-[250vh] md:h-[300vh]">
        <section className="relative sticky top-0 w-full h-[100svh] min-h-[600px] md:min-h-0 flex flex-col pb-8 pt-24 md:pt-28 lg:pt-32 overflow-hidden bg-[#15120F]">
        {/* Canvas for Mobile */}
        <div className="block md:hidden absolute inset-0 z-0">
          <canvas ref={mobileCanvasRef} className="w-full h-full object-cover" />
        </div>

        {/* Canvas for Desktop */}
        <div className="hidden md:block absolute inset-0 z-0">
          <canvas ref={desktopCanvasRef} className="w-full h-full object-cover" />
        </div>

        {/* Professional smooth dark gradient overlay for text readability */}
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#15120F] via-[#15120F]/40 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-24 relative z-10 w-full h-full flex flex-col justify-end pb-12 md:pb-0 md:justify-center gap-8 md:gap-12 lg:gap-16">
        {/* Main Typography */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl w-full"
        >
          <h1 className="flex flex-col font-sans text-white mb-2 md:mb-6 text-left">
            <span className="text-[2.25rem] md:text-6xl lg:text-[4.5rem] tracking-tight leading-tight md:mb-1">Your Sanctuary</span>
            <span className="hidden md:block text-6xl lg:text-[4.5rem] tracking-tight leading-tight md:mb-2">Awaits in</span>
            <span className="text-[4.25rem] md:text-[6.5rem] lg:text-[7rem] leading-none text-[#DFCCA0] -mt-2 md:mt-0 font-rolinko">Wayanad</span>
          </h1>
          <p className="text-base md:text-lg text-white/90 font-light max-w-xl mb-5 md:mb-8 text-left">
            Luxury stays nestled in the heart of nature.
          </p>

          {/* Tags */}
          <div className="grid grid-cols-2 md:flex md:flex-row gap-2.5 md:gap-4 w-full max-w-[360px] md:max-w-none">
            <div className="flex items-center justify-start gap-2 px-3 md:px-6 py-2 md:py-2.5 rounded-full bg-[#241A12]/90 md:bg-black/20 backdrop-blur-md border border-white/5 md:border-white/30 text-white/90 text-[0.7rem] md:text-[0.8rem] font-light w-full md:w-auto transition-colors">
              <Leaf className="w-3.5 h-3.5 md:hidden text-[#D1BD8A] flex-shrink-0" strokeWidth={1.5} />
              <span className="truncate">Nature Immersion</span>
            </div>
            <div className="flex items-center justify-start gap-2 px-3 md:px-6 py-2 md:py-2.5 rounded-full bg-[#241A12]/90 md:bg-black/20 backdrop-blur-md border border-white/5 md:border-white/30 text-white/90 text-[0.7rem] md:text-[0.8rem] font-light w-full md:w-auto transition-colors">
              <ConciergeBell className="w-3.5 h-3.5 md:hidden text-[#D1BD8A] flex-shrink-0" strokeWidth={1.5} />
              <span className="truncate">Premium Hospitality</span>
            </div>
            <div className="flex items-center justify-start gap-2 px-3 md:px-6 py-2 md:py-2.5 rounded-full bg-[#241A12]/90 md:bg-black/20 backdrop-blur-md border border-white/5 md:border-white/30 text-white/90 text-[0.7rem] md:text-[0.8rem] font-light w-full md:w-auto transition-colors">
              <Waves className="w-3.5 h-3.5 md:hidden text-[#D1BD8A] flex-shrink-0" strokeWidth={1.5} />
              <span className="truncate">Scenic Views</span>
            </div>
            <div className="flex items-center justify-start gap-2 px-3 md:px-6 py-2 md:py-2.5 rounded-full bg-[#241A12]/90 md:bg-black/20 backdrop-blur-md border border-white/5 md:border-white/30 text-white/90 text-[0.7rem] md:text-[0.8rem] font-light w-full md:w-auto transition-colors">
              <Flower2 className="w-3.5 h-3.5 md:hidden text-[#D1BD8A] flex-shrink-0" strokeWidth={1.5} />
              <span className="truncate">Comfort & Relaxation</span>
            </div>
          </div>
        </motion.div>


      </div>
      </section>
    </div>

    {/* Launch Bars - Rendered completely after the Hero section */}
    <div className="w-full bg-white relative z-20 flex flex-col items-center justify-center py-10 md:py-16 px-4 md:px-12 lg:px-20 xl:px-24">
      {/* Mobile Launch Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="flex md:hidden w-full max-w-[340px] bg-[#17130F] border border-[#3E3122]/40 rounded-3xl p-5 flex-col items-start justify-start gap-5 shadow-2xl"
      >
        {launchBarContent}
      </motion.div>

      {/* Desktop Launch Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="hidden md:flex w-full max-w-[1400px] bg-[#17130F] border border-[#3E3122]/40 rounded-3xl lg:rounded-[2rem] p-6 lg:p-8 flex-row items-center justify-between gap-6 lg:gap-10 shadow-2xl"
      >
        {/* Left: Countdown */}
        <div className="flex flex-col gap-3">
          <h3 className="text-white/90 text-sm font-medium tracking-wide">Grand Launch</h3>
          <div className="flex items-center gap-6 lg:gap-8">
            <div className="flex flex-col items-center">
              <span className="text-[#DFCCA0] text-4xl lg:text-[2.75rem] font-serif leading-none">{String(timeLeft.days).padStart(2, '0')}</span>
              <span className="text-white/60 text-[0.65rem] lg:text-xs mt-1.5 tracking-widest uppercase font-light">Days</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[#DFCCA0] text-4xl lg:text-[2.75rem] font-serif leading-none">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="text-white/60 text-[0.65rem] lg:text-xs mt-1.5 tracking-widest uppercase font-light">Hours</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[#DFCCA0] text-4xl lg:text-[2.75rem] font-serif leading-none">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="text-white/60 text-[0.65rem] lg:text-xs mt-1.5 tracking-widest uppercase font-light">Minutes</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[#DFCCA0] text-4xl lg:text-[2.75rem] font-serif leading-none">{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span className="text-white/60 text-[0.65rem] lg:text-xs mt-1.5 tracking-widest uppercase font-light">Seconds</span>
            </div>
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="w-px h-20 bg-white/10 hidden md:block" />

        {/* Middle: Details */}
        <div className="flex flex-col gap-3.5">
          <div className="flex items-center gap-3 text-white/80">
            <CalendarDays className="w-4 h-4 lg:w-4.5 lg:h-4.5 text-[#D1BD8A]" strokeWidth={1.5} />
            <span className="text-sm lg:text-base font-light tracking-wide">23/08/2026, Sunday</span>
          </div>
          <div className="flex items-center gap-3 text-white/80">
            <Clock className="w-4 h-4 lg:w-4.5 lg:h-4.5 text-[#D1BD8A]" strokeWidth={1.5} />
            <span className="text-sm lg:text-base font-light tracking-wide">5:00 PM</span>
          </div>
          <div className="flex items-center gap-3 text-white/80">
            <MapPin className="w-4 h-4 lg:w-4.5 lg:h-4.5 text-[#D1BD8A]" strokeWidth={1.5} />
            <span className="text-sm lg:text-base font-light tracking-wide">Krishnagiri, Wayanad</span>
          </div>
        </div>

        {/* Right: Button */}
        <div className="flex-shrink-0 ml-auto">
          <button className="bg-[#D2B980] hover:bg-[#EBD3A0] text-[#1A140E] px-6 lg:px-10 py-4 lg:py-5 rounded-xl font-medium text-sm transition-colors text-center shadow-lg shadow-black/20 leading-relaxed">
            Be the first to experience<br />Ashirvadh Nature Resort
          </button>
        </div>
      </motion.div>
    </div>
    </>
  );
}
