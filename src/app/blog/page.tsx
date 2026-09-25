import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blog | Ashirvadh Nature Resort",
  description: "Read our latest articles about Wayanad, luxury resorts, and nature stays at Ashirvadh Nature Resort.",
  alternates: { canonical: "/blog/" }
};

const blogPosts = [
  {
    title: "Resorts in Wayanad: Experience Luxury, Nature and Peaceful Stays",
    description: "Wayanad is one of Kerala's most beautiful destinations, known for its green landscapes, wildlife, waterfalls, and refreshing climate.",
    image: "/BLOG/BLOG 01 IMAGE.jpeg",
    link: "/blog/luxury-resorts-in-wayanad",
    date: "Sep 25, 2026"
  },
  {
    title: "Best Resorts in Wayanad for Family: A Perfect Family Getaway",
    description: "Planning a family vacation to Wayanad means looking for more than just a place to stay. Families need a resort that offers comfort, safety, and engaging experiences.",
    image: "/08.jpg",
    link: "/blog/best-resorts-in-wayanad-for-family",
    date: "Sep 25, 2026"
  }
];

export default function BlogIndexPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#f8f9fa] text-black">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-serif mb-12 text-center text-black">
          Our Blog
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <Link href={post.link} key={index} className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-black/5">
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <p className="text-sm text-primary font-medium mb-3">{post.date}</p>
                <h2 className="text-2xl font-serif text-black mb-4 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 line-clamp-3 mb-6">
                  {post.description}
                </p>
                <div className="mt-auto">
                  <span className="inline-flex items-center text-primary font-medium text-sm group-hover:underline">
                    Read Article
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
