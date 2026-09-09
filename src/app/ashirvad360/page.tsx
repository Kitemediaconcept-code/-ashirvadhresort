import { Metadata } from "next";

export const metadata: Metadata = {
  title: "360° Virtual Tour | Ashirvadh Nature Resorts Wayanad",
  description:
    "Explore Ashirvadh Nature Resort in an interactive 360° virtual tour. Step inside our luxury pool villas, spice cottages, swimming pools, and scenic mountain views in Wayanad.",
  openGraph: {
    title: "360° Virtual Tour | Ashirvadh Nature Resorts Wayanad",
    description:
      "Step inside Ashirvadh Nature Resort with our interactive 360-degree virtual tour experience.",
    images: ["/hero.png"],
  },
};

export default function VirtualTour360Page() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <iframe
        src="/ashirvad360/index.htm"
        title="Ashirvadh Resort 360° Virtual Tour"
        className="w-full h-full border-0 absolute inset-0 bg-black"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; xr-spatial-tracking"
        allowFullScreen
      />
    </div>
  );
}
