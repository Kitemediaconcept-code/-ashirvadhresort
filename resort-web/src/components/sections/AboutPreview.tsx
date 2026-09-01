"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Mountain, Leaf, Dumbbell } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function AboutPreview() {
  return (
    <section className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center text-[#2b3a2a] bg-white py-4">

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="order-2 lg:order-1 flex flex-col justify-center space-y-6 relative z-10"
      >
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-serif leading-snug text-[#365b30]">
            As one of the top resorts in Wayanad, Ashirvadh Resorts creates the perfect setting for relaxation, where every guest finds tranquility in nature&apos;s embrace.
          </h2>
        </div>

        <div className="text-sm text-gray-600 leading-relaxed max-w-xl space-y-4">
          <p>
            At Ashirvadh Resorts, we offer more than just a stay — we offer an experience. Surrounded by lush greenery, misty hills, and breathtaking landscapes, our property stands among the finest choices in the region, crafted for your comfort and peace.
          </p>
        </div>

        <Link 
          href="/about"
          className="inline-flex items-center gap-4 group mt-6"
        >
          <span className="text-base font-medium border-b border-[#D4C78B] pb-1 text-[#365b30] hover:text-[#365b30]/80 transition-colors">
            Learn More
          </span>
          <div className="w-10 h-10 rounded-full border border-[#D4C78B] flex items-center justify-center text-[#365b30] group-hover:bg-[#365b30] group-hover:text-white group-hover:border-transparent transition-all duration-300">
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
          </div>
        </Link>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="order-1 lg:order-2 relative"
      >
        <div className="relative w-full aspect-[4/3] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-2xl mb-8 md:mb-0">
          <Image
            src="/aboutphoto.jpeg"
            alt="Ashirvadh Nature Resort"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover hover:scale-105 transition-transform duration-1000"
          />
        </div>

        {/* Floating Features Bar */}
        <div className="lg:absolute lg:-bottom-12 lg:left-1/2 lg:-translate-x-1/2 w-full lg:w-[115%] bg-white border border-gray-100 rounded-[28px] py-7 px-4 shadow-xl z-20">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-6 gap-x-2 lg:gap-0">
            {/* Feature 1 */}
            <div className="flex flex-col items-center justify-center gap-3 px-2">
              <Sparkles className="text-[#D4C78B]" size={24} />
              <p className="text-[11px] sm:text-xs font-semibold text-gray-700 uppercase tracking-wider text-center">Nature<br/>Immersed</p>
            </div>
            {/* Feature 2 */}
            <div className="flex flex-col items-center justify-center gap-3 px-2 lg:border-l lg:border-gray-100">
              <Mountain className="text-[#D4C78B]" size={24} />
              <p className="text-[11px] sm:text-xs font-semibold text-gray-700 uppercase tracking-wider text-center">Scenic<br/>Landscapes</p>
            </div>
            {/* Feature 3 */}
            <div className="flex flex-col items-center justify-center gap-3 px-2 lg:border-l lg:border-gray-100">
              <Leaf className="text-[#D4C78B]" size={24} />
              <p className="text-[11px] sm:text-xs font-semibold text-gray-700 uppercase tracking-wider text-center">Peaceful<br/>Retreat</p>
            </div>
            {/* Feature 4 */}
            <div className="flex flex-col items-center justify-center gap-3 px-2 lg:border-l lg:border-gray-100">
              <svg className="w-6 h-6 text-[#D4C78B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 4v2" />
                <path d="M5 12h14a1 1 0 0 0 1-1 7 7 0 0 0-16 0 1 1 0 0 0 1 1Z" />
                <path d="M2 17h20" />
              </svg>
              <p className="text-[11px] sm:text-xs font-semibold text-gray-700 uppercase tracking-wider text-center">Restaurant</p>
            </div>
            {/* Feature 5 */}
            <div className="flex flex-col items-center justify-center gap-3 px-2 lg:border-l lg:border-gray-100">
              <svg className="w-6 h-6 text-[#D4C78B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="10" cy="10" r="6" />
                <path d="m14.5 14.5 5 5" />
                <circle cx="17" cy="7" r="1.5" />
              </svg>
              <p className="text-[11px] sm:text-xs font-semibold text-gray-700 uppercase tracking-wider text-center">Indoor<br/>Games</p>
            </div>
            {/* Feature 6 */}
            <div className="flex flex-col items-center justify-center gap-3 px-2 lg:border-l lg:border-gray-100">
              <Dumbbell className="text-[#D4C78B]" size={24} />
              <p className="text-[11px] sm:text-xs font-semibold text-gray-700 uppercase tracking-wider text-center">Gym</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}


