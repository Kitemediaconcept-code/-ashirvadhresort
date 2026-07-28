"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function AboutPreview() {
  return (
    <section className="relative bg-[#f8f6f0] rounded-[40px] md:rounded-[60px] p-8 md:p-16 lg:p-20 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center text-[#2b3a2a] overflow-hidden">

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="order-2 lg:order-1 flex flex-col justify-center space-y-8 relative z-10"
      >
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <p className="text-sm text-[#2b3a2a]/60 font-medium tracking-widest uppercase">(01)</p>
            <div className="w-12 h-[1px] bg-[#2b3a2a]/20" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#2b3a2a]">About Us</h2>

          <h3 className="text-xl md:text-2xl font-serif leading-relaxed text-[#2b3a2a]/90">
            Our mission is to create the perfect conditions for relaxation, where every guest can find tranquility in the embrace of nature.
          </h3>
        </div>

        <div className="text-sm text-[#2b3a2a]/70 leading-relaxed max-w-md space-y-4">
          <p>
            At Ashirvadh, we offer more than just a stay — we offer an experience. Surrounded by lush greenery, misty hills, and breathtaking landscapes, our resort is crafted for your comfort and peace.
          </p>
        </div>

        <Link 
          href="/about"
          className="inline-flex items-center gap-4 bg-[#283627] text-[#e6ea97] px-6 py-2.5 rounded-full hover:bg-[#283627]/90 transition-all self-start mt-4 group"
        >
          <span className="text-sm font-medium pl-2">Learn More About Us</span>
          <div className="w-8 h-8 rounded-full bg-[#f2e6bf] flex items-center justify-center text-[#283627] group-hover:bg-[#e6ea97] transition-colors">
            <ArrowRight size={16} />
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
            src="/about-photo.png"
            alt="Ashirvadh Nature Resort"
            fill
            className="object-cover hover:scale-105 transition-transform duration-1000"
          />
        </div>

        {/* Floating Features Bar */}
        <div className="md:absolute -bottom-10 left-1/2 md:-translate-x-1/2 w-full md:w-[110%] bg-[#283627] text-[#f8f6f0] rounded-2xl md:rounded-[24px] p-5 md:p-6 shadow-xl z-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-2 md:gap-0 md:divide-x divide-white/20">
            {/* Feature 1 */}
            <div className="flex items-center justify-start gap-2 md:gap-3 md:px-4">
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-[#f2e6bf]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <p className="text-xs sm:text-sm md:text-xs font-medium leading-tight text-white/90">Nature<br/>Immersed</p>
            </div>
            {/* Feature 2 */}
            <div className="flex items-center justify-start gap-2 md:gap-3 md:px-4">
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-[#f2e6bf]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-xs sm:text-sm md:text-xs font-medium leading-tight text-white/90">Scenic<br/>Landscapes</p>
            </div>
            {/* Feature 3 */}
            <div className="flex items-center justify-start gap-2 md:gap-3 md:px-4">
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-[#f2e6bf]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9zM12 2.022A10.01 10.01 0 002.022 12H7a5 5 0 015-5V2.022zM12 21.978A10.01 10.01 0 0021.978 12h-5a5 5 0 01-5 5v4.978zM2.022 12H7a5 5 0 005 5v4.978A10.01 10.01 0 012.022 12z" />
                </svg>
              </div>
              <p className="text-xs sm:text-sm md:text-xs font-medium leading-tight text-white/90">Peaceful<br/>Retreat</p>
            </div>
            {/* Feature 4 */}
            <div className="flex items-center justify-start gap-2 md:gap-3 md:px-4">
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-[#f2e6bf]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <p className="text-xs sm:text-sm md:text-xs font-medium leading-tight text-white/90">Personalized<br/>Comfort</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
