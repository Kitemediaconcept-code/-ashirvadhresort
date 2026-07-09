"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const rooms = [
  { id: 1, title: "Deluxe Cottage", image: "/ROOMS.png", capacity: "1 - 4 Guests" },
  { id: 2, title: "A-Frame Cabin", image: "/card2.png", capacity: "1 - 2 Guests" },
  { id: 3, title: "Luxury Villa", image: "/hero.png", capacity: "1 - 6 Guests" },
  { id: 4, title: "Lake View Room", image: "/CARD6.png", capacity: "1 - 4 Guests" },
];

export function RoomPreview() {
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
          <p className="text-sm text-muted-foreground mb-2">(02)</p>
          <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-6">Accommodation</h2>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
            All our rooms are thoughtfully designed to offer you the perfect blend of luxury, comfort, and nature. Whether you&apos;re looking for a romantic escape or a family retreat, we have the perfect stay for you.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-xl md:text-4xl font-serif leading-tight text-foreground">
            Wake up to the sound of birds and enjoy the view of lush forests, hills, and waters.
          </h3>
        </motion.div>
      </div>

      {/* Room Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {rooms.map((room, idx) => (
          <motion.div
            key={room.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group relative h-[400px] md:h-[500px] rounded-[32px] overflow-hidden block"
          >
            <Image 
              src={room.image} 
              alt={room.title} 
              fill 
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
            
            {/* Top Tag */}
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm text-black px-4 py-1.5 rounded-full text-xs font-medium">
              {room.capacity}
            </div>
            
            {/* Bottom Content */}
            <Link href="/rooms" className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
              <h4 className="text-white text-xl md:text-2xl font-serif">{room.title}</h4>
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black group-hover:bg-primary transition-colors">
                <ArrowRight size={20} />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
