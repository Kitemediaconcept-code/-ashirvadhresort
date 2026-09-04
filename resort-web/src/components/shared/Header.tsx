"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail, ChevronDown, Home, Palmtree } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/rooms", label: "Rooms & Suites" },
  { href: "/ashirvad360", label: "360° Tour" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="fixed top-6 left-0 right-0 z-50 pointer-events-none">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-24 flex items-center justify-between pointer-events-auto">
          
          {/* Left Pill (Logo + Links) */}
          <div className="bg-[#f8f9fa] rounded-full flex items-center p-2 shadow-lg border border-black/5">
            {/* Resort Logo */}
            <Link href="/" className="shrink-0 pl-3 pr-2 flex items-center transition-opacity hover:opacity-80">
              <Image 
                src="/logo2.png" 
                alt="Ashirvadh Nature Resort" 
                width={140} 
                height={40} 
                className="h-6 md:h-7 w-auto object-contain"
                priority
              />
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 px-6 pr-4">
              {navLinks.map((link) => {
                const isRooms = link.label === "Rooms & Suites";

                if (isRooms) {
                  return (
                    <div key={link.href} className="relative group py-2">
                      <Link
                        href={link.href}
                        className={cn(
                          "text-sm font-medium transition-colors hover:text-black/60 flex items-center gap-1",
                          pathname === link.href || pathname.startsWith("/rooms/") ? "text-black" : "text-black/70"
                        )}
                      >
                        <span>{link.label}</span>
                        <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
                      </Link>

                      {/* Dropdown Menu Card */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white border border-black/5 rounded-[24px] shadow-xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform scale-95 group-hover:scale-100 origin-top z-50">
                        <div className="flex flex-col gap-1.5">
                          {/* Cottages link */}
                          <Link
                            href="/rooms/cottages"
                            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-700 hover:text-[#365b30] hover:bg-gray-50 transition-all text-sm font-medium"
                          >
                            <Home className="w-4 h-4 shrink-0" />
                            <span>Cottages</span>
                          </Link>

                          {/* Pool Villas link */}
                          <Link
                            href="/rooms/pool-villas"
                            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-700 hover:text-[#365b30] hover:bg-gray-50 transition-all text-sm font-medium"
                          >
                            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M10 4a2 2 0 0 1 4 0v10" />
                              <path d="M6 7a2 2 0 0 1 4 0v7" />
                              <path d="M2 17h20" />
                              <path d="M2 20h20" />
                            </svg>
                            <span>Pool Villas</span>
                          </Link>

                          {/* Villas link */}
                          <Link
                            href="/rooms/villas"
                            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-700 hover:text-[#365b30] hover:bg-gray-50 transition-all text-sm font-medium"
                          >
                            <Palmtree className="w-4 h-4 shrink-0" />
                            <span>Villas</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-black/60",
                      pathname === link.href ? "text-black" : "text-black/70"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Right Pill (CTA & Mobile Menu) */}
          <div className="bg-[#f8f9fa] rounded-full flex items-center p-2 shadow-lg border border-black/5">
            <Link
              href="/contact"
              className="hidden md:flex items-center gap-2 text-sm font-medium text-black px-4 hover:opacity-70 transition-opacity"
            >
              <Mail size={16} />
              <span>info@ashirvadh.com</span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden w-10 h-10 bg-[#111] text-white rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
            
            {/* Desktop 'Book' button option (hidden on small screens) */}
            <Link
              href="/contact"
              className="hidden lg:flex bg-[#111] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-primary transition-colors ml-2"
            >
              Book
            </Link>
          </div>

        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            <nav className="flex flex-col items-center gap-6">
              {navLinks.map((link) => {
                const isRooms = link.label === "Rooms & Suites";

                if (isRooms) {
                  return (
                    <div key={link.href} className="flex flex-col items-center gap-2">
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          "text-2xl font-serif transition-colors hover:text-primary",
                          pathname === link.href || pathname.startsWith("/rooms/") ? "text-primary" : "text-foreground"
                        )}
                      >
                        {link.label}
                      </Link>
                      <div className="flex flex-col items-center gap-2.5 text-sm font-medium text-[#A1A1AA] mt-1">
                        <Link
                          href="/rooms/cottages"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="hover:text-primary transition-colors flex items-center gap-2"
                        >
                          <Home className="w-3.5 h-3.5" />
                          <span>Cottages</span>
                        </Link>
                        <Link
                          href="/rooms/pool-villas"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="hover:text-primary transition-colors flex items-center gap-2"
                        >
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M10 4a2 2 0 0 1 4 0v10" />
                            <path d="M6 7a2 2 0 0 1 4 0v7" />
                            <path d="M2 17h20" />
                            <path d="M2 20h20" />
                          </svg>
                          <span>Pool Villas</span>
                        </Link>
                        <Link
                          href="/rooms/villas"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="hover:text-primary transition-colors flex items-center gap-2"
                        >
                          <Palmtree className="w-3.5 h-3.5" />
                          <span>Villas</span>
                        </Link>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "text-2xl font-serif transition-colors hover:text-primary",
                      pathname === link.href ? "text-primary" : "text-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 bg-primary text-primary-foreground px-8 py-3 rounded-full text-lg font-medium hover:bg-primary/90 transition-all"
              >
                Book Your Stay
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


