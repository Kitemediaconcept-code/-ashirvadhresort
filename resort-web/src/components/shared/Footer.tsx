"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-black/5 pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          
          {/* Brand */}
          <div className="space-y-6">
            <Image
              src="/logo2.png"
              alt="Ashirvadh Nature Resort"
              width={180}
              height={60}
              className="w-40 object-contain"
            />
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Luxury stays are nestled in the heart of Wayanad&apos;s natural beauty. Experience tranquility, comfort, and premium hospitality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-serif text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/rooms" className="hover:text-primary transition-colors">Rooms & Suites</Link></li>
              <li><Link href="/ashirvad360" className="hover:text-primary transition-colors">360° Virtual Tour</Link></li>
              <li><Link href="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-foreground font-serif text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
                <span>Ashirvadh Nature Resort Krishnagiri, Wayanad</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-primary shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span>+91 7902 929 491</span>
                  <span>+91 90480 67880</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <span>info@ashirvadhresort.com</span>
              </li>
            </ul>
          </div>

          {/* Socials & Newsletter */}
          <div>
            <h4 className="text-foreground font-serif text-lg mb-6">Follow Us</h4>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/share/19DspLVB3T/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="https://www.instagram.com/ashirvadhventures" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
            
            <div className="mt-8">
              <Link 
                href="https://wa.me/917902929491" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-transparent border border-black/10 text-foreground px-6 py-2.5 rounded-full text-sm hover:border-primary hover:text-primary transition-all"
              >
                Chat on WhatsApp
              </Link>
            </div>
          </div>

        </div>

        <div className="border-t border-black/5 pt-8 text-center md:text-left md:flex justify-between items-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Ashirvadh Nature Resort. All rights reserved.</p>
          <div className="flex gap-4 justify-center mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


