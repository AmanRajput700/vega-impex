"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("vega_cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (choice: "accepted" | "rejected") => {
    localStorage.setItem("vega_cookie_consent", choice);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Cookie consent banner"
      className="fixed bottom-0 inset-x-0 z-50 p-4 md:p-6 bg-[#33495A]/95 backdrop-blur-md text-[#E7ECEE] border-t border-white/10 shadow-2xl transition-all duration-500 animate-in slide-in-from-bottom"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-start gap-3.5">
          <div className="p-2 rounded-xl bg-white/10 text-[#B4835A] shrink-0 mt-0.5">
            <Cookie className="w-5 h-5" />
          </div>
          <p className="text-xs md:text-sm text-[#B7C3C9] leading-relaxed">
            We use essential cookies to ensure our B2B quotation system functions reliably and to analyze international export visitor traffic. By clicking &ldquo;Accept All&rdquo;, you consent to our use of cookies per our{" "}
            <Link href="/privacy-policy" className="underline text-white hover:text-[#B4835A] transition-colors">
              Privacy Policy
            </Link>.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0 w-full md:w-auto justify-end">
          <button
            onClick={() => handleConsent("rejected")}
            className="px-4 py-2 text-xs font-medium text-[#B7C3C9] hover:text-white rounded-full border border-white/20 hover:border-white/40 transition-colors"
          >
            Reject Non-Essential
          </button>
          <button
            onClick={() => handleConsent("accepted")}
            className="px-5 py-2 text-xs font-semibold text-white bg-[#B4835A] hover:bg-[#9C6F49] rounded-full shadow-sm transition-all"
          >
            Accept All
          </button>
          <button
            onClick={() => setIsVisible(false)}
            aria-label="Dismiss cookie notice"
            className="p-1.5 text-[#B7C3C9] hover:text-white rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
