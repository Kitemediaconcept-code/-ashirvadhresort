"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Leaf, Music, Waves, Flame } from "lucide-react";
const experiences = [
  {
    id: 1,
    icon: Leaf,
    title: "Amphitheater",
    desc: "Explore scenic forest paths",
    image: "/exp-amphi2.jpg",
  },
  {
    id: 2,
    icon: Music,
    title: "DJ Hall",
    desc: "Dance the night away",
    image: "/dj hall.JPG",
  },
  {
    id: 3,
    icon: Waves,
    title: "Infinity Pool",
    desc: "Swim into pure serenity",
    image: "/exp-pool.jpg",
  },
  {
    id: 4,
    icon: Flame,
    title: "Campfire Nights",
    desc: "Warm evenings under the stars",
    image: "/campfire night.png",
  },
];

export function ExperiencesPreview() {
  return (
    <section className="space-y-16">
      {/* Header */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-end">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-serif text-[#365b30] mb-6">Experiences</h2>
          <p className="text-[#365b30]/80 text-sm leading-relaxed max-w-sm">
            At Ashirvadh Resorts Wayanad, from peaceful nature trails to exciting outdoor activities and delightful dining, there&apos;s something for everyone visiting the resort in Wayanad.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-3xl md:text-4xl font-sans leading-tight text-[#365b30]">
            Here begins an adventure: a new gastronomic experience in harmony with nature.
          </h3>
        </motion.div>
      </div>

      {/* Experience Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group relative h-[320px] rounded-[24px] overflow-hidden"
          >
            <Image 
              src={exp.image} 
              alt={exp.title} 
              fill 
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
            
            <div className="absolute bottom-6 left-6 right-6 flex items-end gap-4">
              <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center shrink-0 text-white backdrop-blur-sm group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                <exp.icon size={20} />
              </div>
              <div>
                <h4 className="text-white font-medium text-lg leading-tight">{exp.title}</h4>
                <p className="text-white/70 text-xs mt-1">{exp.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


