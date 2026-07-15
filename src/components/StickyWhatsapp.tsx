"use client";

import Image from "next/image";
import React from "react";

const StickyWhatsapp = () => {
  function whatsappBtn() {
    window.open("https://wa.me/923349711129?text=Hi%20Hammad");
  }

  return (
    <button
      onClick={whatsappBtn}
      className="group fixed bottom-6 right-6 z-40 h-13 w-13 rounded-full bg-[#25D366] p-3 shadow-md shadow-black/10 ring-1 ring-black/5 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20 active:scale-95 md:bottom-8 md:right-8"
      aria-label="Contact via WhatsApp"
    >
      <span className="pointer-events-none absolute right-16 top-1/2 hidden -translate-y-1/2 rounded-md bg-[var(--text-primary)] px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 md:block whitespace-nowrap">
        Chat on WhatsApp
      </span>
      <Image
        src="/skills_icons/Whatsapp.svg"
        alt="WhatsApp"
        width={32}
        height={32}
        className="h-full w-full object-contain"
      />
    </button>
  );
};

export default StickyWhatsapp;
