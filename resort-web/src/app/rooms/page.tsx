import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Cottages & Rooms in Wayanad | Ashirvadh Resort",
  description: "Explore our luxurious cottages, villas, and lake view rooms in Wayanad. Perfect accommodations designed for comfort and nature immersion in Kerala.",
  alternates: { canonical: "/rooms/" }
};

const allRooms = [
  { id: 1, title: "Cottages", image: "/cottages1.jpg", capacity: "1 - 2 Guests", desc: "Cozy architectural marvel perfect for romantic getaways." },
  { id: 2, title: "Pool Villas", image: "/poolvilla.png", capacity: "1 - 4 Guests", desc: "Spacious cottage with a private balcony overlooking the forest." },
  { id: 3, title: "Villas", image: "/villa2.jpg", capacity: "1 - 6 Guests", desc: "Expansive villa featuring multiple bedrooms and premium amenities." },
];

export default function RoomsPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white text-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-2xl mb-16">
          <h1 className="text-5xl md:text-6xl font-serif mb-6 text-black">Rooms & Suites</h1>
          <p className="text-gray-700 text-lg">
            Discover our range of thoughtfully designed accommodations, blending modern comfort with natural elegance.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {allRooms.map((room, idx) => (
            <div key={room.id} className={`flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 lg:gap-16 items-center`}>
              <div className="w-full md:w-1/2 h-[400px] relative rounded-[32px] overflow-hidden">
                <Image src={room.image} alt={room.title} fill className="object-cover" />
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  {room.capacity}
                </div>
                <h2 className="text-3xl md:text-4xl font-serif text-black">{room.title}</h2>
                <p className="text-gray-700 leading-relaxed">
                  {room.desc}
                </p>
                <Link href="/contact" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-all">
                  Inquire Availability
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
