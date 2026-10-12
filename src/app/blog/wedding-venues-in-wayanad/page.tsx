import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, Globe, MapPin, Calendar, Clock, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Wedding Venues in Wayanad | Ashirvadh Nature Resort",
  description:
    "Explore wedding venues in Wayanad at Ashirvadh Nature Resort. Plan intimate celebrations surrounded by greenery, scenic views and luxury stays.",
  alternates: { canonical: "/blog/wedding-venues-in-wayanad/" }
};

export default function WeddingVenuesBlogPage() {
  const faqs = [
    {
      q: "1. What are the best wedding venues in Wayanad?",
      a: "The best venue depends on guest count, budget, accommodation, and preferred wedding style. Ashirvadh Nature Resort in Krishnagiri is worth exploring for its scenic surroundings, premium accommodation, and open-air gathering space."
    },
    {
      q: "2. Where is Ashirvadh Nature Resort located?",
      a: "Ashirvadh Nature Resort is located in Krishnagiri, Wayanad, Kerala, surrounded by green landscapes and a peaceful natural environment."
    },
    {
      q: "3. Can I organise an outdoor wedding at Ashirvadh Nature Resort?",
      a: "The resort features an open-air amphitheatre for gatherings and celebrations. Couples should contact the resort to confirm whether their preferred wedding ceremony and event arrangements can be accommodated."
    },
    {
      q: "4. Does Ashirvadh Nature Resort provide accommodation for wedding guests?",
      a: "Yes. The resort offers suite rooms, luxury rooms, deluxe rooms, private pool villas, family pool villas, and other villa accommodation. Room availability depends on the dates selected."
    },
    {
      q: "5. How can I enquire about wedding arrangements at Ashirvadh Nature Resort?",
      a: "Visit the official website at https://ashirvadhresorts.com/ or call +91 7594998884 or +91 7594998885 to discuss event requirements, accommodation, and available arrangements."
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white text-black">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        {/* Navigation Breadcrumb */}
        <div className="mb-6">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Articles
          </Link>
        </div>

        {/* Post Metadata */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
          <span className="bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full">
            Destination Weddings
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            Oct 12, 2026
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            5 min read
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-serif mb-8 text-black leading-tight">
          Wedding Venues in Wayanad: Celebrate Your Special Day at Ashirvadh Nature Resort
        </h1>

        {/* Hero Image */}
        <div className="relative w-full aspect-video md:aspect-[21/9] mb-10 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
          <Image
            src="/Sunset garden wedding setup.png"
            alt="Wedding Venues in Wayanad - Ashirvadh Nature Resort Sunset Garden Wedding Setup"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Body */}
        <article className="prose prose-lg max-w-none text-gray-700 space-y-6 text-justify">
          <p>
            A wedding is one of life&apos;s most meaningful celebrations, and choosing the perfect location makes every moment more memorable. Surrounded by green hills, beautiful landscapes, and peaceful natural surroundings, Wayanad has become an attractive destination for couples planning a wedding in Kerala.
          </p>
          <p>
            For those exploring <strong>Wedding venues in Wayanad</strong>, Ashirvadh Nature Resort in Krishnagiri offers a scenic setting, elegant accommodation, and inviting spaces that can complement an intimate wedding celebration.
          </p>

          <h2 className="text-2xl md:text-3xl font-serif text-primary mt-12 mb-6">
            Why Choose Wayanad for Your Destination Wedding?
          </h2>
          <p>
            Wayanad is known for its lush greenery, beautiful weather, scenic hills, and peaceful atmosphere. Unlike busy city wedding destinations, Wayanad offers a refreshing environment where couples can celebrate surrounded by nature.
          </p>
          <p>
            From traditional Kerala weddings to intimate outdoor ceremonies and pre-wedding celebrations, the region offers beautiful possibilities for memorable occasions.
          </p>
          <p>
            Couples searching for <strong>Destination wedding venues in Wayanad</strong> often prefer locations that combine natural beauty, comfortable accommodation, and convenient spaces for family gatherings.
          </p>

          <h2 className="text-2xl md:text-3xl font-serif text-primary mt-12 mb-6">
            Ashirvadh Nature Resort: A Beautiful Setting for Wedding Celebrations
          </h2>
          <p>
            Located in Krishnagiri, Wayanad, Ashirvadh Nature Resort offers a peaceful escape surrounded by approximately 10 acres of green landscapes.
          </p>
          <p>
            The resort combines premium hospitality, modern comforts, and picturesque surroundings, creating an inviting atmosphere for special occasions.
          </p>
          <p>
            For couples considering <strong>Luxury wedding venues in Wayanad</strong>, the resort&apos;s natural setting provides an attractive backdrop for wedding photography, family celebrations, and meaningful moments together.
          </p>
          <p>
            Its comfortable accommodation and recreational facilities also make it appealing for families planning a wedding getaway.
          </p>

          <h2 className="text-2xl md:text-3xl font-serif text-primary mt-12 mb-6">
            Scenic Outdoor Spaces for Memorable Occasions
          </h2>
          <p>
            Outdoor celebrations have become increasingly popular among couples who prefer a natural and elegant atmosphere.
          </p>
          <div className="relative w-full aspect-video md:aspect-[16/9] my-6 rounded-2xl overflow-hidden shadow-md border border-gray-100">
            <Image
              src="/exp-amphi1.jpg"
              alt="Ashirvadh Nature Resort Open Air Amphitheatre Grounds"
              fill
              className="object-cover"
            />
          </div>
          <p>
            Ashirvadh Nature Resort features an open-air amphitheatre designed for gatherings, celebrations, and memorable evenings.
          </p>
          <p>
            Surrounded by greenery, this space presents an appealing option to explore for intimate wedding-related functions, subject to the resort&apos;s event arrangements.
          </p>
          <p>
            Whether planning a pre-wedding gathering, a family celebration, or a special evening, the resort&apos;s surroundings can create a beautiful atmosphere.
          </p>
          <p>
            Couples looking for <strong>Outdoor wedding venues in Wayanad</strong> can contact the property to discuss event suitability, available arrangements, and celebration requirements.
          </p>

          <h2 className="text-2xl md:text-3xl font-serif text-primary mt-12 mb-6">
            Comfortable Accommodation for Family and Friends
          </h2>
          <p>
            A destination wedding becomes more enjoyable when loved ones can stay together in a comfortable environment.
          </p>
          <p>
            Ashirvadh Nature Resort offers several accommodation categories suitable for different preferences.
          </p>
          <p>
            The Cardamom Suite Rooms feature spacious interiors and private sit-out areas, while Cinnamon Luxury Rooms provide elegant accommodation with modern amenities.
          </p>
          <p>
            Clove Deluxe Rooms offer comfortable stays, and Coffee Land Pool Villas provide additional privacy with scenic surroundings.
          </p>
          <p>
            The resort also features Coffee Land Family Pool Villas and Pepper Villas, offering accommodation options for families and couples.
          </p>
          <p>
            These choices make Ashirvadh worth considering when comparing <strong>Wedding resorts in Wayanad with accommodation</strong>.
          </p>

          <h2 className="text-2xl md:text-3xl font-serif text-primary mt-12 mb-6">
            Beautiful Wedding Photography Opportunities
          </h2>
          <p>
            Photography plays an important role in capturing precious wedding memories.
          </p>
          <p>
            Wayanad&apos;s natural scenery provides an attractive background for couple portraits, engagement photography, and family photographs.
          </p>
          <p>
            At Ashirvadh Nature Resort, landscaped surroundings, green estate views, elegant accommodation, and outdoor spaces offer several possibilities for beautiful photographs.
          </p>
          <p>
            Couples can discuss photography permissions and suitable locations with the resort before scheduling their sessions.
          </p>

          <h2 className="text-2xl md:text-3xl font-serif text-primary mt-12 mb-6">
            Dining, Relaxation, and Experiences
          </h2>
          <p>
            Wedding celebrations involve more than the ceremony itself. Spending quality time with family and friends makes the occasion truly special.
          </p>
          <p>
            Ashirvadh Nature Resort features a restaurant, infinity pool, indoor games, gym, DJ hall, and campfire experiences.
          </p>
          <p>
            These amenities can enhance the overall stay for families gathering in Wayanad.
          </p>
          <p>
            For wedding-related dining, entertainment, and private event requirements, couples should confirm the available services directly with the resort.
          </p>

          <h2 className="text-2xl md:text-3xl font-serif text-primary mt-12 mb-6">
            Plan Your Special Celebration at Ashirvadh Nature Resort
          </h2>
          <p>
            Finding the right <strong>Wedding venues in Wayanad</strong> involves balancing location, ambience, accommodation, and event requirements.
          </p>
          <p>
            With its scenic surroundings, premium rooms, private villas, and open-air gathering space, Ashirvadh Nature Resort offers a promising setting to explore for intimate wedding celebrations.
          </p>
          <p>
            Located in Krishnagiri, Wayanad, the property brings together nature, comfort, and warm hospitality.
          </p>
          <p>
            <strong>Contact Ashirvadh Nature Resort</strong> to discuss wedding-related arrangements, available spaces, accommodation, and personalised requirements.
          </p>

          {/* Contact Box */}
          <div className="my-10 p-6 md:p-8 bg-[#fdfaf5] border border-[#e8ded0] rounded-2xl">
            <h3 className="text-xl font-serif font-semibold text-black mb-4">
              Get in Touch with Ashirvadh Nature Resort
            </h3>
            <div className="space-y-3 text-base text-gray-700">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Krishnagiri, Wayanad, Kerala</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-primary flex-shrink-0" />
                <span>
                  Website:{" "}
                  <a
                    href="https://ashirvadhresorts.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-medium hover:underline"
                  >
                    https://ashirvadhresorts.com/
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span>
                  Phone:{" "}
                  <a href="tel:+917594998884" className="text-primary font-medium hover:underline">
                    +91 7594998884
                  </a>{" "}
                  |{" "}
                  <a href="tel:+917594998885" className="text-primary font-medium hover:underline">
                    +91 7594998885
                  </a>
                </span>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors shadow-sm"
              >
                Enquire for Events
              </Link>
              <a
                href="https://wa.me/917594998884?text=Hi%2C%20I%20am%20interested%20in%20wedding%20and%20event%20arrangements%20at%20Ashirvadh%20Nature%20Resort"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-primary text-primary font-medium hover:bg-primary/5 transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* FAQs Section */}
          <div className="mt-14 pt-10 border-t border-gray-200">
            <h2 className="text-2xl md:text-3xl font-serif text-black mb-8">
              Frequently Asked Questions (FAQs)
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="p-6 bg-gray-50 rounded-xl border border-gray-100"
                >
                  <h3 className="text-lg font-serif font-semibold text-black mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-justify">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
