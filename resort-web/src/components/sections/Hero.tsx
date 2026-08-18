"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValueEvent, useSpring } from "framer-motion";
import { CalendarDays, Clock, MapPin } from "lucide-react";
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

  useEffect(() => {
    // Preload images for smooth animation
    if (typeof window !== "undefined") {
      for (let i = 1; i <= desktopFrameCount; i++) {
        const img = new window.Image();
        img.src = desktopFrame(i);
      }
      for (let i = 1; i <= mobileFrameCount; i++) {
        const img = new window.Image();
        img.src = mobileFrame(i);
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
      const context = canvas.getContext('2d');
      if (!context) return;

      const frameIdx = Math.max(1, Math.round(latest * mobileFrameCount));
      const img = new window.Image();
      img.src = mobileFrame(frameIdx);
      
      img.onload = () => {
        const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
        const x = (canvas.width / 2) - (img.width / 2) * scale;
        const y = (canvas.height / 2) - (img.height / 2) * scale;
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, x, y, img.width * scale, img.height * scale);
      };
    } else {
      const canvas = desktopCanvasRef.current;
      if (!canvas) return;
      const context = canvas.getContext('2d');
      if (!context) return;

      const frameIdx = Math.max(1, Math.round(latest * desktopFrameCount));
      const img = new window.Image();
      img.src = desktopFrame(frameIdx);
      
      img.onload = () => {
        const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
        const x = (canvas.width / 2) - (img.width / 2) * scale;
        const y = (canvas.height / 2) - (img.height / 2) * scale;
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, x, y, img.width * scale, img.height * scale);
      };
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
        
        const context = canvas.getContext('2d');
        if (!context) return;
        
        const img = new window.Image();
        img.src = mobileFrame(1);
        img.onload = () => {
          const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
          const x = (canvas.width / 2) - (img.width / 2) * scale;
          const y = (canvas.height / 2) - (img.height / 2) * scale;
          context.drawImage(img, x, y, img.width * scale, img.height * scale);
        };
      } else {
        const canvas = desktopCanvasRef.current;
        if (!canvas) return;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        const context = canvas.getContext('2d');
        if (!context) return;
        
        const img = new window.Image();
        img.src = desktopFrame(1);
        img.onload = () => {
          const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
          const x = (canvas.width / 2) - (img.width / 2) * scale;
          const y = (canvas.height / 2) - (img.height / 2) * scale;
          context.drawImage(img, x, y, img.width * scale, img.height * scale);
        };
      }
    };

    setCanvasSize();
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
    <div ref={sectionRef} className="relative w-full md:h-[300vh]">
      <section className="relative md:sticky md:top-0 w-full min-h-[750px] md:h-screen md:min-h-0 flex flex-col pb-8 pt-24 md:pt-28 lg:pt-32 overflow-hidden bg-[#15120F]">
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

      <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-24 relative z-10 w-full flex flex-col justify-center gap-10 md:gap-12 lg:gap-16">
        {/* Main Typography */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-6xl lg:text-[4rem] leading-tight md:leading-tight font-serif text-white mb-3 md:mb-6">
            Your Sanctuary <br />
            <span className="text-[#DFCCA0]">Wayanad</span>
          </h1>
          <p className="text-sm md:text-lg text-white/80 font-light max-w-xl mb-6 md:mb-8">
            Luxury stays nestled in the heart of nature.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2.5 md:gap-3 max-w-[300px] md:max-w-none">
            <span className="px-4 md:px-5 py-1.5 md:py-2 rounded-full bg-[#3B2C20]/80 backdrop-blur-md text-white/80 text-[0.75rem] md:text-sm font-light">
              Nature Immersion
            </span>
            <span className="px-4 md:px-5 py-1.5 md:py-2 rounded-full bg-[#3B2C20]/80 backdrop-blur-md text-white/80 text-[0.75rem] md:text-sm font-light">
              Premium Hospitality
            </span>
            <span className="px-4 md:px-5 py-1.5 md:py-2 rounded-full bg-[#3B2C20]/80 backdrop-blur-md text-white/80 text-[0.75rem] md:text-sm font-light">
              Scenic Views
            </span>
            <span className="px-4 md:px-5 py-1.5 md:py-2 rounded-full bg-[#3B2C20]/80 backdrop-blur-md text-white/80 text-[0.75rem] md:text-sm font-light">
              Comfort & Relaxation
            </span>
          </div>
        </motion.div>

        {/* Launch Bar Desktop */}
        <div className="hidden md:block w-fit">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-fit max-w-[340px] md:max-w-sm bg-[#17130F]/95 backdrop-blur-xl border border-[#3E3122]/40 rounded-3xl p-5 flex flex-col items-start justify-start gap-5 shadow-2xl"
          >
            {launchBarContent}
          </motion.div>
        </div>
      </div>
    </section>

    {/* Launch Bar Mobile - Rendered completely after the Hero section */}
    <div className="flex md:hidden w-full justify-center px-4 py-10 bg-white relative z-20">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-[340px] bg-[#17130F]/95 backdrop-blur-xl border border-[#3E3122]/40 rounded-3xl p-5 flex flex-col items-start justify-start gap-5 shadow-2xl"
      >
        {launchBarContent}
      </motion.div>
    </div>
  </div>
  );
}
