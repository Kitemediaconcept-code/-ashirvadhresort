import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Ashirvadh Nature Resort Wayanad",
  description: "Get in touch with Ashirvadh Nature Resort for bookings and inquiries. Located in Krishnagiri, Wayanad, Kerala.",
  alternates: { canonical: "/contact" }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
