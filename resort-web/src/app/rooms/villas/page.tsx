import { Metadata } from "next";
import { DetailedCatalog } from "@/components/sections/DetailedCatalog";

export const metadata: Metadata = {
  title: "Rustic Private Villas in Wayanad | Ashirvadh Nature Resort",
  description: "Secluded rustic luxury villas in Wayanad Wayanad. Pepper Villa offers a private sit-out, tranquil forest surrounds, and high-end privacy.",
  alternates: { canonical: "/rooms/villas/" }
};

export default function VillasPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white text-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-2xl mb-16">
          <h1 className="text-5xl md:text-6xl font-serif mb-6 text-black">Villas</h1>
          <p className="text-gray-700 text-lg">
            Tucked away in the quietest corners of the resort, our villas feature rustic charm blended with premium comforts, perfect for secluded escapes.
          </p>
        </div>

        <DetailedCatalog filterCategory="Villas" />
      </div>
    </div>
  );
}
