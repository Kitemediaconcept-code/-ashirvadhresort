"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/rooms", label: "Rooms & Suites" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="fixed top-6 left-0 right-0 z-50 pointer-events-none">
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between pointer-events-auto">
          
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
              {navLinks.map((link) => (
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
              ))}
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
              {navLinks.map((link) => (
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
              ))}
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
