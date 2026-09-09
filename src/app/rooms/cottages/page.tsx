import { Metadata } from "next";
import { DetailedCatalog } from "@/components/sections/DetailedCatalog";

export const metadata: Metadata = {
  title: "Luxury Cottages in Wayanad | Ashirvadh Nature Resort",
  description: "Experience premium nature stays in our luxury cottages in Wayanad. Explore Cardamom Suite, Cinnamon Luxury, and Clove Deluxe cottages designed for relaxation.",
  alternates: { canonical: "/rooms/cottages/" }
};

export default function CottagesPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white text-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-2xl mb-16">
          <h1 className="text-5xl md:text-6xl font-serif mb-6 text-black">Cottages</h1>
          <p className="text-gray-700 text-lg">
            Curated comfort featuring private sit-outs, balcony forest views, and wooden-accented luxury cottages designed for a peaceful stay.
          </p>
        </div>

        <DetailedCatalog filterCategory="Cottages" />
      </div>
    </div>
  );
}
