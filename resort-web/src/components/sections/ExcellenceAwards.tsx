"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Star, ShieldCheck } from "lucide-react";

const awards = [
  {
    icon: Award,
    title: "AD Design Award",
    desc: "Honored for outstanding architectural excellence in eco-friendly design.",
  },
  {
    icon: Star,
    title: "50 Best Resorts of India 2023",
    desc: "Recognized among India's finest resorts for exceptional hospitality and service.",
  },
  {
    icon: ShieldCheck,
    title: "Best Nature Resort",
    desc: "Awarded for providing an unmatched nature immersive experience.",
  },
];

export function ExcellenceAwards() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Light Card */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="bg-[#F9F6E8] text-[#111] p-12 md:p-16 rounded-[40px] flex flex-col justify-center"
      >
        <h2 className="text-3xl md:text-4xl font-serif leading-tight mb-12 max-w-md">
          Ashirvadh Nature Resort Awarded Excellence
        </h2>
        
        <div className="space-y-8">
          {awards.map((award, idx) => (
            <div key={idx} className="flex gap-6">
              <div className="mt-1 shrink-0">
                <award.icon size={24} className="text-[#111]" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">{award.title}</h4>
                <p className="text-[#555] text-sm leading-relaxed max-w-xs">{award.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Image Card */}
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative h-[500px] lg:h-auto rounded-[40px] overflow-hidden"
      >
        <Image 
          src="/room-2.png" 
          alt="Award winning architecture" 
          fill 
          className="object-cover hover:scale-105 transition-transform duration-1000"
        />
      </motion.div>
    </section>
  );
}
