"use client";

export function VirtualTourWidget() {
  return (
    <a
      href="https://cybozom.com/360/ashirvadresort/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-[#15120F] text-[#D1BD8A] border border-[#D1BD8A]/40 rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:scale-110 hover:bg-[#D1BD8A] hover:text-[#15120F] hover:border-transparent transition-all duration-300 group"
      aria-label="360 Virtual Tour"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
        <path d="M21 12a9 4 0 0 0-9-4 9 4 0 0 0-9 4 9 4 0 0 0 9 4 9 4 0 0 0 9-4Z" />
        <path d="M21 12l-2-2" />
        <path d="M21 12l-2 2" />
        <path d="M3 12l2-2" />
        <path d="M3 12l2 2" />
        <text x="12" y="15" textAnchor="middle" fill="currentColor" stroke="none" fontSize="7" fontWeight="bold" fontFamily="sans-serif" className="tracking-tighter">360</text>
      </svg>
    </a>
  );
}


