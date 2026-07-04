"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Leaf, Flame, Utensils, Mountain } from "lucide-react";

const experiences = [
  {
    id: 1,
    icon: Leaf,
    title: "Nature Trails",
    desc: "Explore scenic forest paths",
    image: "/card1.png", // Using available images as placeholders for experience backgrounds
  },
  {
    id: 2,
    icon: Flame,
    title: "Campfire Nights",
    desc: "Unwind under the stars",
    image: "/hero-bg.jpg",
  },
  {
    id: 3,
    icon: Utensils,
    title: "Local Cuisine",
    desc: "Savor authentic flavors",
    image: "/card1.png",
  },
  {
    id: 4,
    icon: Mountain,
    title: "Adventure Activities",
    desc: "Live the thrill outdoors",
    image: "/hero-bg.jpg",
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
          <p className="text-sm text-muted-foreground mb-2">(03)</p>
          <h2 className="text-3xl font-serif text-foreground mb-6">Experiences</h2>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
            From peaceful nature trails to exciting outdoor activities and delightful dining experiences, there&apos;s something for every soul.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-3xl md:text-4xl font-serif leading-tight text-foreground">
            Here begins an adventure, a new gastronomic experience and harmony with nature.
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
