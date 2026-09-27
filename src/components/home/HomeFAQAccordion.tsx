"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { homeFAQs } from "@/data/faqs";
import { JsonLd } from "@/components/seo/JsonLd";

export function HomeFAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFAQs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="space-y-4">
      <JsonLd data={faqSchema} />
      {homeFAQs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
              isOpen
                ? "bg-white border-[#B4835A] shadow-md"
                : "bg-white/80 border-[#E3D9C8] hover:border-[#B4835A]/50"
            }`}
          >
            <button
              onClick={() => toggleFAQ(idx)}
              aria-expanded={isOpen}
              className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
            >
              <div className="flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-[#B4835A] shrink-0" />
                <span className="text-base sm:text-lg font-bold text-[#2E4A5C]">
                  {faq.question}
                </span>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-[#5B6B75] transition-transform duration-200 shrink-0 ${
                  isOpen ? "rotate-180 text-[#B4835A]" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-[#5B6B75] leading-relaxed border-t border-[#E3D9C8]/40 animate-in fade-in duration-200">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
