import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ShieldCheck, Clock, PackageCheck, Ship } from "lucide-react";
import { QuotationForm } from "@/components/forms/QuotationForm";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Request Quotation & Free Samples | Vega Impex Surat India",
  description:
    "Request factory-direct FOB Hazira quotation and free physical product samples for OEM baby diapers, sanitary pads, period pants, adult briefs, and wipes.",
  alternates: {
    canonical: "https://vegaimpex.com/get-quotation",
  },
  openGraph: {
    title: "Request Quotation & Free Samples | Vega Impex Surat India",
    description: "Receive container load calculations, dieline artwork templates, and FOB Hazira pricing within 24 hours.",
    url: "https://vegaimpex.com/get-quotation",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://vegaimpex.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Get Quotation",
      item: "https://vegaimpex.com/get-quotation",
    },
  ],
};

export default function GetQuotationPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      {/* Breadcrumb */}
      <div className="bg-[#EDE3D3]/50 border-b border-[#E3D9C8] py-3 text-xs text-[#5B6B75]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
          <Link href="/" className="hover:text-[#2E4A5C] transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="font-semibold text-[#2E4A5C]">Get Quotation</span>
        </div>
      </div>

      {/* Header */}
      <section className="py-12 lg:py-16 bg-[#F6F1E9] border-b border-[#E3D9C8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDE3D3] text-[#B4835A] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Factory Direct Sourcing</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2E4A5C] mb-4">
            Request B2B Export Quotation
          </h1>
          <p className="text-sm sm:text-base text-[#5B6B75] leading-relaxed">
            Fill out your target specifications below. Our export sales team will calculate container loading volumes (CBM), provide FOB Hazira Port pricing, and dispatch free samples for quality evaluation.
          </p>
        </div>
      </section>

      {/* Process Highlights Strip */}
      <section className="bg-white py-8 border-b border-[#E3D9C8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#F6F1E9] border border-[#E3D9C8]">
              <Clock className="w-5 h-5 text-[#B4835A] shrink-0" />
              <div className="text-xs">
                <strong className="block text-[#2E4A5C]">24h Response</strong>
                <span className="text-[#5B6B75]">Prompt formal quotes</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#F6F1E9] border border-[#E3D9C8]">
              <PackageCheck className="w-5 h-5 text-[#B4835A] shrink-0" />
              <div className="text-xs">
                <strong className="block text-[#2E4A5C]">Free Samples</strong>
                <span className="text-[#5B6B75]">Available via express courier</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#F6F1E9] border border-[#E3D9C8]">
              <Ship className="w-5 h-5 text-[#B4835A] shrink-0" />
              <div className="text-xs">
                <strong className="block text-[#2E4A5C]">FOB Hazira</strong>
                <span className="text-[#5B6B75]">Competitive sea freight</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#F6F1E9] border border-[#E3D9C8]">
              <ShieldCheck className="w-5 h-5 text-[#2FA84F] shrink-0" />
              <div className="text-xs">
                <strong className="block text-[#2E4A5C]">Low MOQ</strong>
                <span className="text-[#5B6B75]">Starter order from 1×20GP</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Container */}
      <section className="py-16 lg:py-24 bg-[#F6F1E9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuotationForm />
        </div>
      </section>
    </>
  );
}
