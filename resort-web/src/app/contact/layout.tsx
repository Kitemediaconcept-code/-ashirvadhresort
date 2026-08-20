import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wedding venues in Wayanad | Best resorts in Wayanad for family",
  description: "Plan your dream destination wedding! Contact Ashirvad Resorts, one of the top wedding venues in Wayanad. Get in touch today for bookings & family packages.",
  alternates: { canonical: "/contact/" }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


