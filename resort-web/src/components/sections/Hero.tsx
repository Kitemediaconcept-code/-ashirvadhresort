"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative w-full h-[90vh] min-h-[600px] flex items-end pb-12 pt-32 overflow-hidden rounded-b-[40px] md:rounded-b-[60px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Ashirvadh Nature Resort"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-black/30" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          
          {/* Main Typography */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.05] mb-4">
              Your Sanctuary <br className="hidden md:block" />
              Awaits in <span className="text-primary">Wayanad</span>
            </h1>
            <p className="text-base md:text-xl text-white/90 max-w-xl mb-6">
              Luxury stays nestled in the heart of nature.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              {["Nature Immersion", "Premium Hospitality", "Scenic Views", "Comfort & Relaxation"].map((tag, i) => (
                <span key={i} className="px-5 py-2 rounded-full border border-white/20 bg-black/20 backdrop-blur-md text-white text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Floating Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden md:flex bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-4 pr-6 items-center gap-4 max-w-[320px]"
          >
            <div className="relative w-28 h-12 shrink-0">
              <Image src="/text-01.png" alt="Ashirvadh Logo" fill className="object-contain object-left" />
            </div>
            <div>
              <p className="text-white font-medium text-sm mb-1.5 leading-snug">Luxury in the Lap of Nature</p>
              <Link href="/about" className="text-primary text-xs flex items-center gap-1 hover:gap-2 transition-all">
                Discover more <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
