"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function AutoSlideImage({ images, alt }: { images: string[], alt: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // 4s per slide
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={`${alt} - Image ${i + 1}`}
          fill
          className={`object-cover transition-all duration-1000 group-hover:scale-105 ${
            i === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}
    </>
  );
}

const catalogData = [
  {
    category: "Cottages",
    viewAllLink: "/rooms",
    items: [
      {
        title: "CARDOMON SUITE ROOMS",
        description: "Spacious suites with a private sit-out, curated for comfort and calm.",
        images: ["/cottages1 (1).jpg", "/cottages1 (2).jpg", "/cottages1 (3).jpg", "/cottages1.jpg"],
        link: "/rooms",
        linkText: "Explore Room"
      },
      {
        title: "CHINNAMON LUXURY ROOM",
        description: "Elegant luxury rooms with modern amenities and nature views.",
        images: [
          "/CHINNAMON LUXURY ROOM/08.jpg.jpeg", 
          "/CHINNAMON LUXURY ROOM/15.jpg.jpeg", 
          "/CHINNAMON LUXURY ROOM/16.jpg.jpeg", 
          "/CHINNAMON LUXURY ROOM/17.jpg.jpeg"
        ],
        link: "/rooms",
        linkText: "Explore Room"
      },
      {
        title: "CLOVE DELUX ROOMS",
        description: "Cozy deluxe rooms designed for a relaxed and refreshing stay.",
        images: [
          "/CLOVE DELUX ROOMS/12.jpg.jpeg",
          "/CLOVE DELUX ROOMS/13-(1).jpg.jpeg",
          "/CLOVE DELUX ROOMS/TRD00946-(1).jpg.jpeg"
        ],
        link: "/rooms",
        linkText: "Explore Room"
      }
    ]
  },
  {
    category: "Pool Villas",
    viewAllLink: "/rooms",
    items: [
      {
        title: "COFFEE LAND POOL VILLA",
        description: "Private pool villas with scenic views and a touch of indulgence.",
        images: [
          "/COFFEE LAND POOL VILLA/TRD00946-(1).jpg.jpeg",
          "/COFFEE LAND POOL VILLA/TRD01762.jpg.jpeg",
          "/COFFEE LAND POOL VILLA/TRD01785.jpg.jpeg",
          "/COFFEE LAND POOL VILLA/TRD01795.jpg.jpeg"
        ],
        link: "/rooms",
        linkText: "Explore Villa"
      },
      {
        title: "COFFEE LAND FAMILY POOL VILLA",
        description: "Spacious pool villas perfect for families and memorable getaways.",
        images: [
          "/COFFEE LAND FAMILY POOL VILLA/TRD00789.jpg.jpeg",
          "/COFFEE LAND FAMILY POOL VILLA/TRD00814.jpg.jpeg",
          "/COFFEE LAND FAMILY POOL VILLA/TRD00873.jpg.jpeg",
          "/COFFEE LAND FAMILY POOL VILLA/TRD01505.jpg.jpeg",
          "/COFFEE LAND FAMILY POOL VILLA/TRD01569.jpg.jpeg",
          "/COFFEE LAND FAMILY POOL VILLA/TRD01641.jpg.jpeg",
          "/COFFEE LAND FAMILY POOL VILLA/TRD01740.jpg.jpeg"
        ],
        link: "/rooms",
        linkText: "Explore Villa"
      }
    ]
  },
  {
    category: "Villas",
    viewAllLink: "/rooms",
    items: [
      {
        title: "PAPPER VILLA",
        description: "A secluded villa offering privacy, nature and peaceful moments.",
        images: [
          "/papper villa/TRD00698.jpg.jpeg",
          "/papper villa/TRD00814.jpg.jpeg"
        ],
        link: "/rooms",
        linkText: "Explore Villa",
        isWide: true
      }
    ]
  }
];

export function DetailedCatalog() {
  return (
    <section className="bg-white text-[#365b30] py-16 w-full">
      <div className="flex flex-col gap-20">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4">
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-serif text-[#365b30]">Catalog of our stays</h2>
          <p className="text-sm md:text-[15px] text-[#365b30]/70 max-w-lg leading-relaxed">
            Thoughtfully designed spaces, surrounded by nature, crafted for comfort, relaxation and memorable experiences.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-col gap-16 md:gap-24">
          {catalogData.map((category, catIdx) => (
            <div key={catIdx} className="flex flex-col gap-8 md:gap-10">
              {/* Category Header */}
              <div className="flex items-center gap-4 md:gap-6">
                <h3 className="text-2xl md:text-[28px] font-serif text-[#365b30] whitespace-nowrap">{category.category}</h3>
                <div className="h-px bg-[#365b30]/15 flex-1 mt-2"></div>
                <Link 
                  href={category.viewAllLink} 
                  className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.15em] flex items-center gap-2 hover:opacity-70 transition-opacity whitespace-nowrap mt-2 text-[#365b30]/80"
                >
                  View all {category.category} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Category Grid */}
              <div className={`grid gap-6 md:gap-8 ${
                category.items.length === 3 ? "grid-cols-1 md:grid-cols-3" :
                category.items.length === 2 ? "grid-cols-1 md:grid-cols-2" :
                "grid-cols-1"
              }`}>
                {category.items.map((item, itemIdx) => (
                  item.isWide ? (
                    // Wide Card (Villas)
                    <motion.div 
                      key={itemIdx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: itemIdx * 0.1 }}
                      className="bg-[#F8F9FA] rounded-[20px] overflow-hidden relative flex flex-col md:flex-row min-h-[300px] md:min-h-[360px] group w-full"
                    >
                      <div className="absolute inset-0 z-0">
                        {item.images ? (
                          <AutoSlideImage images={item.images} alt={item.title} />
                        ) : (
                          <Image src={item.image!} fill alt={item.title} className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                        )}
                      </div>
                      
                      {/* Gradient Overlay for Text */}
                      <div className="absolute inset-0 md:inset-y-0 md:left-0 md:w-3/5 bg-gradient-to-t md:bg-gradient-to-r from-[#F8F9FA] via-[#F8F9FA]/95 to-transparent z-10" />
                      
                      <div className="relative z-20 p-8 md:p-12 w-full md:w-1/2 flex flex-col justify-end md:justify-center gap-4 mt-auto md:mt-0">
                        <h4 className="text-xs md:text-sm font-bold uppercase tracking-wider text-[#365b30]">{item.title}</h4>
                        <p className="text-[13px] md:text-sm text-[#365b30]/75 leading-relaxed max-w-sm">
                          {item.description}
                        </p>
                        <Link 
                          href={item.link} 
                          className="text-[11px] md:text-xs font-bold uppercase tracking-wider flex items-center gap-2 mt-2 md:mt-4 hover:opacity-70 text-[#365b30]"
                        >
                          {item.linkText} <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </motion.div>
                  ) : (
                    // Standard Card
                    <motion.div 
                      key={itemIdx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: itemIdx * 0.1 }}
                      className="bg-[#F8F9FA] rounded-[20px] overflow-hidden flex flex-col group"
                    >
                      <div className="relative aspect-[4/3] md:aspect-[1.1/1] w-full overflow-hidden">
                        {item.images ? (
                          <AutoSlideImage images={item.images} alt={item.title} />
                        ) : (
                          <Image src={item.image!} fill alt={item.title} className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                        )}
                      </div>
                      <div className="p-6 md:p-8 flex flex-col gap-3 md:gap-4 flex-1">
                        <h4 className="text-xs md:text-sm font-bold uppercase tracking-[0.1em] text-[#365b30]">{item.title}</h4>
                        <p className="text-[13px] md:text-sm text-[#365b30]/75 leading-relaxed flex-1">
                          {item.description}
                        </p>
                        <Link 
                          href={item.link} 
                          className="text-[11px] md:text-xs font-bold uppercase tracking-wider flex items-center gap-2 mt-4 hover:opacity-70 text-[#365b30]"
                        >
                          {item.linkText} <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </motion.div>
                  )
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
