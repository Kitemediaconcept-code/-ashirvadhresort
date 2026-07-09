import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Ashirvadh Nature Resort",
  description: "Learn about the story, vision, and hospitality philosophy of Ashirvadh Nature Resort.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-5xl md:text-6xl font-serif mb-8">Our Story</h1>
        
        <div className="relative w-full h-[60vh] min-h-[400px] rounded-[40px] overflow-hidden mb-16">
          <Image src="/hero-bg.jpg" alt="About Ashirvadh" fill className="object-cover" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <div>
            <h2 className="text-3xl font-serif mb-6 text-primary">A Vision of Tranquility</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Ashirvadh Nature Resort was born out of a desire to create a sanctuary where modern luxury meets untouched nature. Nestled in the heart of Wayanad, we believe in providing our guests with an experience that rejuvenates the mind, body, and soul.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our hospitality philosophy is simple: every guest is treated like royalty, yet feels entirely at home. We have carefully curated every aspect of our resort—from our eco-friendly architecture to our locally-sourced culinary delights—to ensure your stay is unforgettable.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-64 rounded-2xl overflow-hidden mt-8">
              <Image src="/hero.png" alt="Nature" fill className="object-cover" />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden">
              <Image src="/ROOMS.png" alt="Comfort" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
