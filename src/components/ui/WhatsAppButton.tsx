"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { companyContact } from "@/data/navigation";

export function WhatsAppButton() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <aside
      aria-label="Direct Export WhatsApp Contact"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 group print:hidden"
    >
      <div className="hidden sm:flex items-center bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-[#E3D9C8] text-xs font-medium text-[#2E4A5C] transition-all duration-300 opacity-90 group-hover:opacity-100 group-hover:-translate-x-1">
        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse mr-2" />
        Chat with Export Sales
      </div>
      <a
        href={companyContact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Vega Impex on WhatsApp (+91 76001 93191)"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        <MessageCircle className="w-7 h-7 fill-white/20 stroke-[2.2]" />
      </a>
    </aside>
  );
}
