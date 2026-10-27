import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Factory,
  PackageCheck,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Ship,
  FileCheck,
  Palette,
  Settings,
  Boxes,
  ArrowRight,
} from "lucide-react";
import { QuotationForm } from "@/components/forms/QuotationForm";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "OEM & ODM Private Label Service | Hygiene Products India – Vega Impex",
  description:
    "Turnkey private label and OEM manufacturing for baby diapers, sanitary napkins, period underwear, adult diapers, and underpads in Gujarat, India. Low MOQ from 1x20GP container, free artwork assistance, export to global markets.",
  alternates: {
    canonical: "https://vegaimpex.com/oem-service",
  },
  openGraph: {
    title: "OEM & ODM Private Label Service | Hygiene Products India – Vega Impex",
    description: "Launch your private label hygiene brand with Vega Impex. Custom dielines, advanced SAP core, ISO 9001 certified production in Gujarat, India.",
    url: "https://vegaimpex.com/oem-service",
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
      name: "OEM Service",
      item: "https://vegaimpex.com/oem-service",
    },
  ],
};

export default function OEMServicePage() {
  const steps = [
    {
      step: "01",
      icon: Settings,
      title: "Consultation & Specification",
      desc: "We analyze your regional consumer market, price points, and functional requirements to determine the optimal absorbent core (Wood Pulp, Composite, or All-SAP), dimensions, and SAP ratio.",
    },
    {
      step: "02",
      icon: Sparkles,
      title: "Sample Engineering & Lab Testing",
      desc: "Our technical lab produces physical prototype units for your team to test absorbency speed, re-wet limits, tensile strength, and skin comfort before placing an official order.",
    },
    {
      step: "03",
      icon: Palette,
      title: "Packaging Dieline & Plate Engraving",
      desc: "Submit your brand vector files or collaborate with our packaging team to produce dielines, cylinder engraving, and high-definition flexographic film printing for retail polybags or boxes.",
    },
    {
      step: "04",
      icon: Ship,
      title: "Mass Production & Hazira Port Stuffing",
      desc: "Automated lines produce your order with optical camera QC inspection. Goods are baled, stuffed directly into ocean containers in Surat, and cleared through FOB Hazira Port.",
    },
  ];

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
          <span className="font-semibold text-[#2E4A5C]">OEM Service</span>
        </div>
      </div>

      {/* Hero */}
      <section className="py-14 lg:py-20 bg-[#F6F1E9] border-b border-[#E3D9C8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDE3D3] text-[#B4835A] text-xs font-semibold uppercase tracking-wider">
                <Factory className="w-3.5 h-3.5" />
                <span>Turnkey Private Label Solution</span>
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2E4A5C] leading-tight">
                Turnkey OEM &amp; ODM Hygiene Manufacturing in India
              </h1>

              <p className="text-base sm:text-lg text-[#5B6B75] leading-relaxed">
                Empowering international retailers, pharmacy chains, and direct-to-consumer hygiene brands with flexible, high-capacity contract manufacturing in Surat, Gujarat.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/get-quotation"
                  className="px-7 py-3.5 rounded-full text-sm font-bold text-white bg-[#B4835A] hover:bg-[#9C6F49] shadow-md transition-all"
                >
                  Start Your OEM Project →
                </Link>
                <Link
                  href="/products"
                  className="px-7 py-3.5 rounded-full text-sm font-semibold text-[#2E4A5C] bg-[#EDE3D3] hover:bg-[#E3D9C8] transition-colors"
                >
                  Explore Catalog
                </Link>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-[#E3D9C8]">
                <div>
                  <span className="text-xs text-[#5B6B75] block">Starter Order</span>
                  <strong className="text-sm text-[#2E4A5C]">From 1 × 20GP</strong>
                </div>
                <div>
                  <span className="text-xs text-[#5B6B75] block">Dieline Support</span>
                  <strong className="text-sm text-[#2E4A5C]">Free Assistance</strong>
                </div>
                <div>
                  <span className="text-xs text-[#5B6B75] block">Packaging</span>
                  <strong className="text-sm text-[#2E4A5C]">Custom / Neutral</strong>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <Image
                  src="/images/factory/automated-production.jpg"
                  alt="OEM Hygiene Manufacturing in Surat India"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Process Section */}
      <section className="py-16 lg:py-24 bg-white border-b border-[#E3D9C8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B4835A] block mb-2">
              Step-by-Step Workflow
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2E4A5C]">
              How We Build Your Private Label Brand
            </h2>
            <p className="text-sm sm:text-base text-[#5B6B75] mt-2">
              From concept formulation to container departure at FOB Hazira Port, our structured engineering pipeline ensures smooth execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st, sIdx) => {
              const IconComp = st.icon;
              return (
                <div
                  key={sIdx}
                  className="bg-[#F6F1E9] p-6 rounded-2xl border border-[#E3D9C8] flex flex-col justify-between relative shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-white text-[#B4835A] flex items-center justify-center shadow-sm">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-2xl font-extrabold text-[#B4835A]/30">
                        {st.step}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-[#2E4A5C] mb-2">{st.title}</h3>
                    <p className="text-xs sm:text-sm text-[#5B6B75] leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Vega Impex for Private Label */}
      <section className="py-16 lg:py-20 bg-[#F6F1E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#B4835A] block">
                Competitive Advantage
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2E4A5C]">
                Why Brand Owners Trust Our Manufacturing Network
              </h2>
              <p className="text-sm text-[#5B6B75] leading-relaxed">
                Rather than being locked into the rigid line limitations of a single plant, Vega Impex allocates your production to the most qualified automated facility within Surat&apos;s hygiene corridor.
              </p>
            </div>

            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#E3D9C8] shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#2E4A5C]">
                    <CheckCircle2 className="w-4 h-4 text-[#2FA84F]" />
                    <span>Low Minimum Orders</span>
                  </div>
                  <p className="text-xs text-[#5B6B75] leading-relaxed">
                    Begin with as little as one 20GP container (or mixed SKUs) to test consumer response before scaling up.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#2E4A5C]">
                    <CheckCircle2 className="w-4 h-4 text-[#2FA84F]" />
                    <span>Zero IP Sharing Risk</span>
                  </div>
                  <p className="text-xs text-[#5B6B75] leading-relaxed">
                    Strict non-disclosure agreements protect your proprietary packaging designs, artwork, and formula specs.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#2E4A5C]">
                    <CheckCircle2 className="w-4 h-4 text-[#2FA84F]" />
                    <span>Cost-Effective Non-Wovens</span>
                  </div>
                  <p className="text-xs text-[#5B6B75] leading-relaxed">
                    Direct proximity to Surat&apos;s spinning and spunlace mills minimizes intermediate transportation costs.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#2E4A5C]">
                    <CheckCircle2 className="w-4 h-4 text-[#2FA84F]" />
                    <span>FOB Hazira Speed</span>
                  </div>
                  <p className="text-xs text-[#5B6B75] leading-relaxed">
                    Ocean vessels depart directly from Hazira Port, cutting land transit delays and domestic inland toll surcharges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inline Form */}
      <section className="py-16 bg-white border-t border-[#E3D9C8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuotationForm />
        </div>
      </section>
    </>
  );
}
