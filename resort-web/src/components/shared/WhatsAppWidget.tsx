import Image from "next/image";

export function WhatsAppWidget() {
  return (
    <a
      href="https://wa.me/917902929491"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 hover:scale-110 transition-all duration-300 drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)]"
      aria-label="Chat on WhatsApp"
    >
      <Image 
        src="/whatsappicon.png"
        alt="WhatsApp Chat"
        width={56}
        height={56}
        priority
        className="w-full h-full object-contain"
      />
    </a>
  );
}


