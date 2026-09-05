"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function MoreThanStay() {
  return (
    <section className="py-16 md:py-32 w-full bg-[#fdfdfc] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-24">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#365b30]/20 pb-8 mb-20 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-[56px] leading-[1.1] font-serif text-[#365b30] mb-4">More Than a Stay</h2>
            <p className="text-[#365b30]/70 text-sm md:text-base">
              Discover spaces designed for relaxation, connection and unforgettable moments.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/gallery" className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#365b30] flex items-center gap-2 hover:opacity-70 whitespace-nowrap">
              OUR EXPERIENCES <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>

        <div className="flex flex-col gap-28 md:gap-40">
          {/* Infinity Pool Block */}
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 relative">
            {/* Decorative vertical text */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="hidden lg:flex absolute -left-16 xl:-left-24 top-1/2 -translate-y-1/2 -rotate-180 items-center justify-center h-full" 
              style={{ writingMode: 'vertical-rl' }}
            >
              <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#365b30]/50 border-l border-[#365b30]/30 pl-4 py-2">
                NATURE ELEVATES EVERY MOMENT
              </span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-[60%] relative aspect-[4/3] lg:aspect-[16/10] rounded-[24px] overflow-hidden z-10"
            >
              <div className="absolute inset-0 bg-[#e9e6df] -z-10 translate-x-[-10px] translate-y-[10px] rounded-[24px]" />
              <Image src="/exp-pool.jpg" alt="Ashirvad Resort wayanad - Infinity Pool" fill className="object-cover transition-transform duration-1000 hover:scale-105" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="w-full lg:w-[40%] flex flex-col gap-5 lg:pr-8"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#365b30]/60">INFINITY POOL</span>
              <h3 className="text-4xl lg:text-[44px] font-serif text-[#365b30] leading-[1.15]">
                Swim Above<br />the Ordinary
              </h3>
              <p className="text-[#365b30]/70 text-[15px] leading-relaxed mt-2 mb-4 max-w-sm">
                Unwind in our infinity pool, where crystal-clear waters meet lush greenery and open skies. A serene escape to refresh your body and mind, surrounded by nature&apos;s beauty.
              </p>
              <Link href="/gallery" className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#365b30] flex items-center gap-2 hover:opacity-70 w-fit group">
                DISCOVER THE POOL <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* Amphitheater Block */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-20 relative">
            {/* Decorative vertical text */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="hidden lg:flex absolute -right-16 xl:-right-24 top-1/2 -translate-y-1/2 items-center justify-center h-full" 
              style={{ writingMode: 'vertical-rl' }}
            >
              <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#365b30]/50 border-l border-[#365b30]/30 pl-4 py-2 rotate-180">
                A STAGE FOR MEANINGFUL CONNECTIONS
              </span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-[60%] relative aspect-[4/3] lg:aspect-[16/10] rounded-[24px] overflow-hidden z-10"
            >
              <div className="absolute inset-0 bg-[#e9e6df] -z-10 translate-x-[10px] translate-y-[10px] rounded-[24px]" />
              <Image src="/extra area/ashirvad5.jpg.jpeg" alt="Ashirvad Resort wayanad - Amphitheater" fill className="object-cover transition-transform duration-1000 hover:scale-105" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="w-full lg:w-[40%] flex flex-col gap-5 lg:pl-8"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#365b30]/60">AMPHITHEATER</span>
              <h3 className="text-4xl lg:text-[44px] font-serif text-[#365b30] leading-[1.15]">
                Moments Made<br />to Come Together
              </h3>
              <p className="text-[#365b30]/70 text-[15px] leading-relaxed mt-2 mb-4 max-w-sm">
                An open-air amphitheater set amidst nature, perfect for gatherings, celebrations and memorable evenings under the sky.
              </p>
              <Link href="/gallery" className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#365b30] flex items-center gap-2 hover:opacity-70 w-fit group">
                EXPLORE THE SPACE <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
