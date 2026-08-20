import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best resorts in Wayanad for family | Resorts in Wayand",
  description: "Discover one of the best resorts in Wayanad for family. Explore spacious rooms, luxury family suites, and scenic views at Ashirvad Resorts. Book your stay!",
  alternates: { canonical: "/rooms/" }
};

const allRooms = [
  { id: 1, title: "Cottages", image: "/cottages1.jpg", capacity: "1 - 2 Guests", desc: "Cozy architectural marvel perfect for romantic getaways." },
  { id: 2, title: "Pool Villas", image: "/poolvilla.png", capacity: "1 - 4 Guests", desc: "Spacious cottage with a private balcony overlooking the forest." },
  { id: 3, title: "Villas", image: "/villa2.jpg", capacity: "1 - 6 Guests", desc: "Expansive villa featuring multiple bedrooms and premium amenities." },
  { id: 4, title: "One-Bedroom Pool Villa", image: "/one-bedroom-pool-villa.jpg", capacity: "1 - 2 Guests", desc: "A serene retreat featuring a private pool and elegant interiors." },
  { id: 5, title: "Two-Bedroom Cottage", image: "/two-bedroom-cottage.jpg", capacity: "1 - 4 Guests", desc: "Recognized among the best resorts in Wayanad for family vacations, our property features ample space and stunning views for an unforgettable getaway" },
  { id: 6, title: "Deluxe Cottage - King Bed", image: "/deluxe-cottage-king-bed.jpg", capacity: "1 - 2 Guests", desc: "Luxurious cottage with a king-size bed and premium comfort." },
  { id: 7, title: "Deluxe Cottage - Twin Beds", image: "/deluxe-cottage-twin-beds.jpg", capacity: "1 - 2 Guests", desc: "Comfortable and spacious cottage with twin beds." },
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


