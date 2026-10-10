import React from "react";
import { Phone, MessageCircle } from "lucide-react";

export default function FloatingContact() {
  // India country code (+91) + 7395864774
  const phoneNumber = "+917395864774";
  const whatsappNumber = "917395864774";

  // Pre-filled WhatsApp message
  const whatsappMessage = encodeURIComponent(
    "Hi Vetri, I'm interested in Greenfield Housing India projects. Please share details."
  );

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2.5 sm:bottom-6 sm:right-6 sm:gap-3">
      
      {/* Phone Call Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="group flex items-center gap-3 rounded-full bg-white px-3.5 py-2.5 shadow-lg shadow-slate-950/5 ring-1 ring-slate-200 transition-all duration-300 hover:scale-105 hover:shadow-xl sm:px-4 sm:py-3"
        aria-label="Call Vetri at Greenfield Housing"
      >
        <span className="hidden font-['Inter',sans-serif] text-xs font-semibold text-slate-700 sm:block sm:text-sm">
          Call Vetri
        </span>

        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-950 text-white transition-all group-hover:bg-emerald-600 sm:h-11 sm:w-11">
          <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
        </span>
      </a>

      {/* WhatsApp Button with pulse */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-3 rounded-full bg-[#25D366] px-3.5 py-2.5 shadow-lg shadow-emerald-600/20 transition-all duration-300 hover:scale-105 hover:shadow-xl sm:px-4 sm:py-3"
        aria-label="Chat with Vetri on WhatsApp"
      >
        {/* Pulse ring */}
        <span className="pointer-events-none absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40" />

        <span className="hidden font-['Inter',sans-serif] text-xs font-semibold text-white sm:block sm:text-sm">
          Chat on WhatsApp
        </span>

        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#25D366] transition-transform group-hover:scale-105 sm:h-11 sm:w-11">
          <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
        </span>
      </a>
    </div>
  );
}