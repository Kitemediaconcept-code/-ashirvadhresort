"use client";

import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Mocking form submission
    setTimeout(() => setStatus("success"), 1500);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif mb-6">Contact Us</h1>
          <p className="text-muted-foreground text-lg">
            We would love to hear from you. Reach out for bookings, inquiries, or just to say hello.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Details */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-serif mb-6">Get in Touch</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Location</h4>
                    <p className="text-muted-foreground">Ashirvadh Nature Resort<br />Krishnagiri, Wayanad</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Phone</h4>
                    <p className="text-muted-foreground">+91 7902 029 491</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Email</h4>
                    <p className="text-muted-foreground">info@ashirvadhresort.com</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Google Map */}
            <div className="w-full h-64 md:h-80 bg-muted rounded-2xl overflow-hidden flex items-center justify-center text-muted-foreground">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.4270552847047!2d76.1919427!3d11.6641169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba609007e0d2055%3A0x4fb0aebb713bf8f0!2sAshirvadh%20Nature%20Resorts!5e0!3m2!1sen!2sin!4v1783596146235!5m2!1sen!2sin" 
                className="w-full h-full" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-muted/30 p-8 md:p-10 rounded-[32px] border border-white/5">
            <h3 className="text-2xl font-serif mb-8">Send an Inquiry</h3>
            
            {status === "success" ? (
              <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-4">
                  <Send size={32} />
                </div>
                <h4 className="text-xl font-medium mb-2">Message Sent!</h4>
                <p className="text-muted-foreground">Thank you for reaching out. We will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground/80">Full Name</label>
                  <input type="text" id="name" required className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground/80">Email Address</label>
                    <input type="email" id="email" required className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2 text-foreground/80">Phone Number</label>
                    <input type="tel" id="phone" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="+91 00000 00000" />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground/80">Your Message</label>
                  <textarea id="message" required rows={5} className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors resize-none" placeholder="I would like to inquire about..."></textarea>
                </div>
                <button type="submit" disabled={status === "submitting"} className="w-full bg-primary text-primary-foreground py-3.5 rounded-xl font-medium hover:bg-primary/90 transition-all flex justify-center items-center gap-2">
                  {status === "submitting" ? "Sending..." : "Submit Inquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
