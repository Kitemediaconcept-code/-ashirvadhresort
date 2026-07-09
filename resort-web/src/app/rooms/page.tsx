import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rooms & Suites | Ashirvadh Nature Resort",
  description: "Explore our luxurious rooms, cabins, and villas designed for ultimate comfort and nature immersion.",
};

const allRooms = [
  { id: 1, title: "Deluxe Cottage", image: "/ROOMS.png", capacity: "1 - 4 Guests", desc: "Spacious cottage with a private balcony overlooking the forest." },
  { id: 2, title: "A-Frame Cabin", image: "/card2.png", capacity: "1 - 2 Guests", desc: "Cozy architectural marvel perfect for romantic getaways." },
  { id: 3, title: "Luxury Villa", image: "/hero.png", capacity: "1 - 6 Guests", desc: "Expansive villa featuring multiple bedrooms and premium amenities." },
  { id: 4, title: "Lake View Room", image: "/CARD6.png", capacity: "1 - 4 Guests", desc: "Wake up to serene lake views and gentle morning breezes." },
];

export default function RoomsPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-2xl mb-16">
          <h1 className="text-5xl md:text-6xl font-serif mb-6">Rooms & Suites</h1>
          <p className="text-muted-foreground text-lg">
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
                <h2 className="text-3xl md:text-4xl font-serif">{room.title}</h2>
                <p className="text-muted-foreground leading-relaxed">
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
