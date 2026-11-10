"use client";

import React, { useState } from "react";
import { Phone, MessageCircle } from "lucide-react";

export default function FloatingContactButtons() {
  const [hoveredBtn, setHoveredBtn] = useState<string | null>(null);

  const phone = "+91 75480 74284";
  const telLink = "tel:+917548074284";
  const waLink = "https://wa.me/917548074284?text=Hello%20Nandita%20Roy,%20I%20would%20like%20to%20know%20more%20about%20your%20coaching%20and%20programs.";

  return (
    <div
      aria-label="Quick contact options"
      className="fixed right-4 sm:right-6 bottom-6 z-50 flex flex-col items-end gap-3.5 pointer-events-auto"
    >
      {/* WhatsApp Button */}
      <div className="relative flex items-center">
        {/* Tooltip (Desktop) */}
        <div
          role="tooltip"
          className={`hidden md:block absolute right-full mr-3.5 px-3 py-1.5 rounded-md bg-charcoal-800 text-white text-xs font-medium tracking-wide shadow-lg whitespace-nowrap transition-all duration-200 pointer-events-none ${
            hoveredBtn === "whatsapp"
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-2"
          }`}
        >
          Chat on WhatsApp
          <span className="absolute left-full top-1/2 -translate-y-1/2 -ml-1 border-4 border-transparent border-l-charcoal-800" />
        </div>

        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Nandita Roy on WhatsApp (opens in new tab)"
          onMouseEnter={() => setHoveredBtn("whatsapp")}
          onMouseLeave={() => setHoveredBtn(null)}
          className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 pulse-whatsapp focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
          style={{ width: "3.25rem", height: "3.25rem" }}
        >
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white stroke-[#25D366] group-hover:rotate-6 transition-transform" />
          <span className="sr-only">Chat on WhatsApp</span>
        </a>
      </div>

      {/* Call Button */}
      <div className="relative flex items-center">
        {/* Tooltip (Desktop) */}
        <div
          role="tooltip"
          className={`hidden md:block absolute right-full mr-3.5 px-3 py-1.5 rounded-md bg-charcoal-800 text-white text-xs font-medium tracking-wide shadow-lg whitespace-nowrap transition-all duration-200 pointer-events-none ${
            hoveredBtn === "call"
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-2"
          }`}
        >
          Call: {phone}
          <span className="absolute left-full top-1/2 -translate-y-1/2 -ml-1 border-4 border-transparent border-l-charcoal-800" />
        </div>

        <a
          href={telLink}
          aria-label={`Call Nandita Roy at ${phone}`}
          onMouseEnter={() => setHoveredBtn("call")}
          onMouseLeave={() => setHoveredBtn(null)}
          className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-amber to-gold-400 text-charcoal-900 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 pulse-call focus:outline-none focus:ring-4 focus:ring-amber/40"
          style={{ width: "3.25rem", height: "3.25rem" }}
        >
          <Phone className="w-6 h-6 sm:w-6.5 sm:h-6.5 fill-charcoal-900 stroke-transparent group-hover:rotate-12 transition-transform" />
          <span className="sr-only">Call Nandita Roy</span>
        </a>
      </div>
    </div>
  );
}

