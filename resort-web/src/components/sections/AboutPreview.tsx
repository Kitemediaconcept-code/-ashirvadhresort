"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function AboutPreview() {
  return (
    <section className="bg-white rounded-[40px] md:rounded-[60px] p-8 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center text-black">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="order-2 lg:order-1 flex flex-col justify-center space-y-8 lg:pr-8"
      >
        <div>
          <p className="text-sm text-black/50 mb-2 font-medium tracking-widest uppercase">(01)</p>
          <h2 className="text-3xl lg:text-4xl font-serif text-black mb-6">About Us</h2>
          
          <h3 className="text-2xl md:text-3xl font-serif leading-snug text-black/90 mb-4">
            Our mission is to create the perfect conditions for relaxation, where every guest can find tranquility in the embrace of nature.
          </h3>
        </div>

        <div className="space-y-4 text-black/70 leading-relaxed max-w-md">
          <p>
            At Ashirvadh, we offer more than just a stay — we offer an experience. Surrounded by lush greenery, misty hills, and breathtaking landscapes, our resort is crafted for your comfort and peace.
          </p>
        </div>

        <Link 
          href="/about"
          className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-full hover:bg-black/80 transition-all self-start mt-4"
        >
          <span className="text-sm font-medium">Learn More About Us</span>
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black">
            <ArrowRight size={16} />
          </div>
        </Link>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="order-1 lg:order-2"
      >
        <div className="relative w-full aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl">
          <Image
            src="/about-photo.png"
            alt="Ashirvadh Nature Resort"
            fill
            className="object-cover hover:scale-105 transition-transform duration-1000"
          />
        </div>
      </motion.div>
    </section>
  );
}
