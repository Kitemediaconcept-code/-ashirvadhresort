import { Metadata } from "next";
import { DetailedCatalog } from "@/components/sections/DetailedCatalog";

export const metadata: Metadata = {
  title: "Private Pool Villas in Wayanad | Ashirvadh Nature Resort",
  description: "Book premium pool villas in Wayanad. Private swimming pool villas overlooking the coffee plantation, perfect for families and couples.",
  alternates: { canonical: "/rooms/pool-villas/" }
};

export default function PoolVillasPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white text-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-2xl mb-16">
          <h1 className="text-5xl md:text-6xl font-serif mb-6 text-black">Pool Villas</h1>
          <p className="text-gray-700 text-lg">
            Indulge in our private pool villas, overlooking the serene coffee plantations; they offer ultimate privacy, space, and leisure.
          </p>
        </div>

        <DetailedCatalog filterCategory="Pool Villas" />
      </div>
    </div>
  );
}
