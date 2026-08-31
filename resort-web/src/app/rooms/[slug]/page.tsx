import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ArrowRight, Calendar, Bed, Check, ChevronRight, Trees } from "lucide-react";
import { roomsData } from "@/lib/roomsData";
import { RoomGallery } from "@/components/sections/RoomGallery";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(roomsData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const room = roomsData[slug];
  
  if (!room) {
    return {
      title: "Room Not Found",
    };
  }

  return {
    title: `${room.title} | Best Resorts in Wayanad`,
    description: `${room.description} Experience luxury nature stays, premium amenities, and gorgeous views at Ashirvad Resorts.`,
    alternates: {
      canonical: `/rooms/${slug}/`,
    }
  };
}

export default async function RoomPage({ params }: PageProps) {
  const { slug } = await params;
  const room = roomsData[slug];

  if (!room) {
    notFound();
  }



  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#FDFDFD] text-[#333333]">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
        
        {/* Navigation & Breadcrumbs Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
          <nav className="flex items-center gap-2 text-xs md:text-sm text-gray-500 font-medium">
            <Link href="/" className="hover:text-[#365b30] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/rooms" className="hover:text-[#365b30] transition-colors">Rooms</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-900 font-semibold">{room.title}</span>
          </nav>
          
          <Link
            href="/contact"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 text-xs md:text-sm font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all text-gray-800"
          >
            <Calendar className="w-4 h-4 text-[#365b30]" />
            Check Availability
          </Link>
        </div>

        {/* Room Title & Short Description */}
        <div className="mb-10 max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#365b30] leading-tight mb-4">
            {room.title}
          </h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            {room.description}
          </p>
        </div>

        {/* Quick Specs Icons bar */}
        <div className="flex flex-wrap gap-x-8 gap-y-4 py-6 border-y border-gray-100 mb-10 text-sm font-medium text-gray-700">
          {room.specs
            .filter((spec) => spec.type !== "guests" && spec.type !== "size")
            .map((spec, i) => {
              let IconComponent = Trees;
              if (spec.type === "bed") IconComponent = Bed;

              return (
                <div key={i} className="flex items-center gap-3">
                  <IconComponent className="w-5 h-5 text-[#365b30]/80" />
                  <span>{spec.label}</span>
                </div>
              );
            })}
        </div>

        {/* Room Gallery Section with Lightbox */}
        <RoomGallery images={room.images} roomTitle={room.title} />

        {/* Content Section: Highlights & Booking Card split */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
          
          {/* Highlights and Amenities (70%) */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Highlights */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-serif text-[#365b30]">
                Room Highlights
              </h2>
              <p className="text-gray-600 leading-relaxed text-[15px] md:text-base max-w-2xl">
                {room.highlights}
              </p>
            </div>

            {/* Checklist of amenities */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold uppercase tracking-wider text-gray-800">
                What this stay offers
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {room.amenities.map((amenity, i) => (
                  <div key={i} className="flex items-center gap-3.5 text-gray-700">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#365b30]/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-[#365b30]" strokeWidth={3} />
                    </div>
                    <span className="text-[15px]">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Floating Booking Card Widget (30%) */}
          <div className="lg:sticky lg:top-28 bg-white border border-gray-100 rounded-[28px] p-8 shadow-sm space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-serif text-[#365b30] font-semibold">
                Plan Your Stay
              </h3>
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                Experience unparalleled hospitality surrounded by the serene forest nature of Wayanad. Check availability to book your cottages or villas.
              </p>
            </div>

            <div className="h-px bg-gray-100 my-4" />

            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 w-full py-4 bg-[#365b30] hover:bg-[#2c4b27] text-white rounded-full text-sm font-semibold transition-all shadow-sm hover:shadow"
            >
              <Calendar className="w-4 h-4" />
              Check Availability
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}
