"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValueEvent, useSpring } from "framer-motion";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const frameCount = 46;
const currentFrame = (index: number) => 
  `/mouse scroll animation desktop/frame_${index.toString().padStart(3, '0')}.jpg`;

export function Hero() {
  const [timeLeft, setTimeLeft] = useState({ days: 10, hours: 8, minutes: 32, seconds: 45 });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Preload images for smooth animation
    if (typeof window !== "undefined") {
      for (let i = 1; i <= frameCount; i++) {
        const img = new window.Image();
        img.src = currentFrame(i);
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

  const frameIndex = useTransform(smoothProgress, [0, 1], [1, frameCount]);

  useMotionValueEvent(frameIndex, "change", (latest) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    const img = new window.Image();
    img.src = currentFrame(Math.round(latest));
    
    img.onload = () => {
      const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
      const x = (canvas.width / 2) - (img.width / 2) * scale;
      const y = (canvas.height / 2) - (img.height / 2) * scale;
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, x, y, img.width * scale, img.height * scale);
    };
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      const img = new window.Image();
      img.src = currentFrame(1);
      img.onload = () => {
        const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
        const x = (canvas.width / 2) - (img.width / 2) * scale;
        const y = (canvas.height / 2) - (img.height / 2) * scale;
        context.drawImage(img, x, y, img.width * scale, img.height * scale);
      };
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

  return (
    <div ref={sectionRef} className="relative w-full md:h-[300vh]">
      <section className="relative md:sticky md:top-0 w-full min-h-[750px] md:h-screen md:min-h-0 flex flex-col justify-center pb-8 pt-24 md:pt-28 lg:pt-32 overflow-hidden bg-[#15120F]">
        {/* Background Image (Mobile Fallback) */}
        <div className="absolute inset-0 z-0 md:hidden">
          <Image
            src="/hero3.png"
            alt="Ashirvadh Nature Resort Grand Launch"
            fill
            className="object-cover object-[center_bottom]"
            priority
            quality={100}
          />
        </div>

        {/* Canvas for Desktop */}
        <div className="hidden md:block absolute inset-0 z-0">
          <canvas ref={canvasRef} className="w-full h-full object-cover" />
        </div>

        {/* Professional smooth dark gradient overlay for text readability */}
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#15120F] via-[#15120F]/40 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-24 relative z-10 w-full flex flex-col gap-10 md:gap-12 lg:gap-16">
        {/* Main Typography */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl"
        >
          <h1 className="text-[2.75rem] leading-[1.05] md:text-6xl lg:text-[4rem] font-serif text-white mb-4 md:mb-6">
            Your Sanctuary <br className="hidden md:block" />
            <span className="text-[#DFCCA0]">Wayanad</span>
          </h1>
          <p className="text-[0.95rem] md:text-lg text-white/90 max-w-xl mb-6 md:mb-8">
            Luxury stays nestled in the heart of nature.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 md:gap-3">
            <span className="px-4 md:px-5 py-2 rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-white/90 text-xs md:text-sm">
              Nature Immersion
            </span>
            <span className="px-4 md:px-5 py-2 rounded-full border border-white/20 bg-[#3A1414]/60 backdrop-blur-md text-white/90 text-xs md:text-sm">
              Premium Hospitality
            </span>
            <span className="px-4 md:px-5 py-2 rounded-full border border-white/20 bg-[#2A0F0F]/60 backdrop-blur-md text-white/90 text-xs md:text-sm">
              Scenic Views
            </span>
            <span className="px-4 md:px-5 py-2 rounded-full border border-white/20 bg-[#1A0B0B]/60 backdrop-blur-md text-white/90 text-xs md:text-sm">
              Comfort & Relaxation
            </span>
          </div>
        </motion.div>

        {/* Launch Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full lg:w-fit bg-[#181511]/30 backdrop-blur-xl border border-white/10 rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-6 lg:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-start gap-5 lg:gap-8 shadow-2xl"
        >
          {/* Countdown */}
          <div className="flex flex-col gap-3 md:gap-4 w-full lg:w-auto">
            <h3 className="text-white/90 text-base md:text-lg font-medium tracking-wide">Grand Launch</h3>
            <div className="flex justify-between lg:justify-start lg:gap-8 w-full">
              <div className="flex flex-col items-center">
                <span className="text-[#DFCCA0] text-3xl md:text-4xl font-serif leading-none">{String(timeLeft.days).padStart(2, '0')}</span>
                <span className="text-white/50 text-[0.6rem] md:text-xs mt-1.5 md:mt-2 tracking-widest uppercase">Days</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[#DFCCA0] text-3xl md:text-4xl font-serif leading-none">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="text-white/50 text-[0.6rem] md:text-xs mt-1.5 md:mt-2 tracking-widest uppercase">Hours</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[#DFCCA0] text-3xl md:text-4xl font-serif leading-none">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="text-white/50 text-[0.6rem] md:text-xs mt-1.5 md:mt-2 tracking-widest uppercase">Minutes</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[#DFCCA0] text-3xl md:text-4xl font-serif leading-none">{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className="text-white/50 text-[0.6rem] md:text-xs mt-1.5 md:mt-2 tracking-widest uppercase">Seconds</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block w-px h-16 bg-white/10" />

          {/* Details */}
          <div className="flex flex-col gap-2.5 md:gap-3 w-full lg:w-auto mt-1 lg:mt-0">
            <div className="flex items-center gap-3 md:gap-3 text-white/90">
              <CalendarDays className="w-4 h-4 md:w-4 md:h-4 text-[#DFCCA0]/80" strokeWidth={1.5} />
              <span className="text-sm md:text-base tracking-wide">23/08/2026, Sunday</span>
            </div>
            <div className="flex items-center gap-3 md:gap-3 text-white/90">
              <Clock className="w-4 h-4 md:w-4 md:h-4 text-[#DFCCA0]/80" strokeWidth={1.5} />
              <span className="text-sm md:text-base tracking-wide">5:00 PM</span>
            </div>
            <div className="flex items-center gap-3 md:gap-3 text-white/90">
              <MapPin className="w-4 h-4 md:w-4 md:h-4 text-[#DFCCA0]/80" strokeWidth={1.5} />
              <span className="text-sm md:text-base tracking-wide">Krishnagiri, Wayanad</span>
            </div>
          </div>

          {/* Button */}
          <div className="w-full lg:w-auto flex-shrink-0 mt-2 lg:mt-0">
            <button className="w-full lg:w-auto bg-[#DBC28D] hover:bg-[#EBD3A0] text-[#2A241C] px-5 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl font-medium text-sm md:text-base transition-colors text-center shadow-lg shadow-black/20">
              Be the first to experience<br className="hidden md:block" /> Ashirvadh Nature Resort
            </button>
          </div>

        </motion.div>
      </div>
    </section>
  </div>
  );
}
