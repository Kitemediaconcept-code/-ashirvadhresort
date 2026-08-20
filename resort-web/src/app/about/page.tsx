import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resorts in Krishnagiri | wayanad resorts with private pool",
  description: "Looking for luxury resorts in Krishnagiri? Learn about Ashirvadh Resorts—offering premium Wayanad resorts with private pool stays, nature, and comfort.",
  alternates: { canonical: "/about/" }
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white text-black">
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-5xl md:text-6xl font-serif mb-8 text-black">Our Story</h1>
        
        <div className="relative w-full h-[60vh] min-h-[400px] rounded-[40px] overflow-hidden mb-16">
          <Image src="/03.jpg" alt="About Ashirvadh" fill priority sizes="100vw" className="object-cover" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <div>
            <h2 className="text-3xl font-serif mb-6 text-primary">A Vision of Tranquility</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Ashirvadh Nature Resort was born out of a desire to create a sanctuary where modern luxury meets untouched nature. Situated in Krishnagiri, Wayanad, we stand out among top resorts in Krishnagiri by providing our guests with an experience that rejuvenates the mind, body, and soul.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our hospitality philosophy is simple: every guest is treated like royalty, yet feels entirely at home. We have carefully curated every aspect of our resort from our eco-friendly architecture to our locally-sourced culinary delights—to ensure your stay is unforgettable.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-64 rounded-2xl overflow-hidden mt-8">
              <Image src="/exp-room.jpg" alt="Nature" fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover" />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden">
              <Image src="/exp-amphi1.jpg" alt="Comfort" fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


