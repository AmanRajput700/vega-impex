import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Ship,
  Factory,
  PackageCheck,
  Tag,
  ArrowRight,
  ShieldCheck,
  Droplets,
  CreditCard,
  Clock,
  FileCheck,
  Layers,
  Sparkles,
  Globe2,
  TrendingUp,
  CheckCircle2,
  PlayCircle,
  Calendar,
  Phone,
} from "lucide-react";
import { products } from "@/data/products";
import { blogPosts } from "@/data/blog";
import { companyContact } from "@/data/navigation";
import { ProductCard } from "@/components/products/ProductCard";
import { QuotationForm } from "@/components/forms/QuotationForm";
import { HomeFAQAccordion } from "@/components/home/HomeFAQAccordion";
import { JsonLd } from "@/components/seo/JsonLd";

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Vega Impex",
  url: "https://vegaimpex.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://vegaimpex.com/products?search={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={websiteSchema} />

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#EDE3D3]/40 via-[#F6F1E9] to-[#F6F1E9] py-14 lg:py-24 border-b border-[#E3D9C8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Feature Badges Pill Row */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white border border-[#E3D9C8] text-[#2E4A5C] shadow-sm">
                  <Ship className="w-3.5 h-3.5 text-[#B4835A]" />
                  FOB Hazira Port
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white border border-[#E3D9C8] text-[#2E4A5C] shadow-sm">
                  <Factory className="w-3.5 h-3.5 text-[#B4835A]" />
                  OEM / ODM Service
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white border border-[#E3D9C8] text-[#2E4A5C] shadow-sm">
                  <PackageCheck className="w-3.5 h-3.5 text-[#B4835A]" />
                  Small Test Order (1×20GP)
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white border border-[#E3D9C8] text-[#2E4A5C] shadow-sm">
                  <Tag className="w-3.5 h-3.5 text-[#B4835A]" />
                  White Label / Neutral Pack
                </span>
              </div>

              {/* H1 Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2E4A5C] leading-[1.18] tracking-tight">
                Trusted OEM Baby Diapers, Sanitary Napkins &amp; Period Pants Manufacturer in India
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-[#5B6B75] leading-relaxed max-w-2xl">
                Partner with India&apos;s leading hygiene manufacturing network in Surat, Gujarat. We engineer and export high-absorbency baby diapers, pull-up pants, sanitary pads, period underwear, and adult care essentials to 30+ countries.
              </p>

              {/* CTA Row */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/get-quotation"
                  className="px-8 py-4 rounded-full text-base font-bold text-white bg-[#B4835A] hover:bg-[#9C6F49] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  Request Quotation →
                </Link>
                <Link
                  href="/products"
                  className="px-7 py-4 rounded-full text-base font-semibold text-[#2E4A5C] bg-[#EDE3D3] hover:bg-[#E3D9C8] border border-[#E3D9C8] transition-colors"
                >
                  Explore 8 Product Lines
                </Link>
              </div>

              {/* Stat Badges Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-[#E3D9C8]/80">
                <div className="bg-white/80 p-3.5 rounded-2xl border border-[#E3D9C8]/60 shadow-sm">
                  <span className="text-xl sm:text-2xl font-extrabold text-[#2E4A5C] block">
                    30+
                  </span>
                  <span className="text-xs text-[#5B6B75] font-medium">Countries Served</span>
                </div>
                <div className="bg-white/80 p-3.5 rounded-2xl border border-[#E3D9C8]/60 shadow-sm">
                  <span className="text-xl sm:text-2xl font-extrabold text-[#2E4A5C] block">
                    100+
                  </span>
                  <span className="text-xs text-[#5B6B75] font-medium">OEM Projects</span>
                </div>
                <div className="bg-white/80 p-3.5 rounded-2xl border border-[#E3D9C8]/60 shadow-sm">
                  <span className="text-xl sm:text-2xl font-extrabold text-[#2E4A5C] block">
                    200+
                  </span>
                  <span className="text-xs text-[#5B6B75] font-medium">Containers Exported</span>
                </div>
                <div className="bg-white/80 p-3.5 rounded-2xl border border-[#E3D9C8]/60 shadow-sm">
                  <span className="text-xl sm:text-2xl font-extrabold text-[#B4835A] block">
                    24h
                  </span>
                  <span className="text-xs text-[#5B6B75] font-medium">Response Time</span>
                </div>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] lg:aspect-square w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/hero/hero-banner.jpg"
                  alt="Vega Impex hygiene product manufacturing and Hazira port export"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2E4A5C]/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#EDE3D3] mb-1">
                    Integrated Manufacturing Network
                  </span>
                  <p className="text-sm font-semibold text-white/95">
                    Surat, Gujarat · Sourcing, QC &amp; Container Export via FOB Hazira Port
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR MAIN PRODUCTS (8 Cards - No Pet Diapers) */}
      <section className="py-16 lg:py-24 bg-[#F6F1E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B4835A] block mb-2">
              Export Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2E4A5C]">
              Our Main Hygiene Products
            </h2>
            <p className="text-sm sm:text-base text-[#5B6B75] mt-2">
              High-speed automated production with imported Sumitomo SAP, customized for international distributors, retail chains, and private brands.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/get-quotation"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-white bg-[#B4835A] hover:bg-[#9C6F49] shadow-lg transition-all"
            >
              <span>Request Mixed-Product Container Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. 3-ICON STRIP */}
      <section className="py-12 bg-white border-y border-[#E3D9C8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F6F1E9]/60 border border-[#E3D9C8]/60">
              <div className="w-12 h-12 rounded-xl bg-[#EDE3D3] text-[#B4835A] flex items-center justify-center shrink-0">
                <Factory className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#2E4A5C] mb-1">
                  Surat, India — Trusted Supply Base
                </h3>
                <p className="text-xs sm:text-sm text-[#5B6B75] leading-relaxed">
                  Located in India&apos;s foremost non-woven and textile hub, ensuring direct raw material access and dependable production capacity.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F6F1E9]/60 border border-[#E3D9C8]/60">
              <div className="w-12 h-12 rounded-xl bg-[#EDE3D3] text-[#B4835A] flex items-center justify-center shrink-0">
                <Ship className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#2E4A5C] mb-1">
                  Strategic Export Logistics
                </h3>
                <p className="text-xs sm:text-sm text-[#5B6B75] leading-relaxed">
                  FOB Hazira Port offers fast container stuffing, swift customs clearance, and seamless maritime connections worldwide.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F6F1E9]/60 border border-[#E3D9C8]/60">
              <div className="w-12 h-12 rounded-xl bg-[#EDE3D3] text-[#B4835A] flex items-center justify-center shrink-0">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#2E4A5C] mb-1">
                  Three-Tier Core Options
                </h3>
                <p className="text-xs sm:text-sm text-[#5B6B75] leading-relaxed">
                  Choose between economical Wood Pulp, balanced Composite, or ultra-thin all-SAP cores to match your market price point.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. B2B TRADE INFORMATION CARD */}
      <section className="py-16 bg-[#F6F1E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E3D9C8] shadow-md">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#B4835A] block mb-1">
                Transparency &amp; Reliability
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2E4A5C]">
                B2B Trade &amp; Commercial Terms
              </h2>
              <p className="text-xs sm:text-sm text-[#5B6B75] mt-1">
                Standard terms designed for global buyers, distributors, and supermarket sourcing managers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-[#F6F1E9] border border-[#E3D9C8]">
                <div className="flex items-center gap-2.5 text-[#2E4A5C] font-bold mb-3">
                  <CreditCard className="w-5 h-5 text-[#B4835A]" />
                  <span>Payment Terms</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-[#5B6B75]">
                  <li>• T/T: 30% deposit, 70% against B/L copy</li>
                  <li>• 100% Irrevocable L/C at sight supported</li>
                  <li>• D/P terms negotiable for long-term buyers</li>
                  <li>• Secure international banking channels</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-[#F6F1E9] border border-[#E3D9C8]">
                <div className="flex items-center gap-2.5 text-[#2E4A5C] font-bold mb-3">
                  <Clock className="w-5 h-5 text-[#B4835A]" />
                  <span>Production Lead Time</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-[#5B6B75]">
                  <li>• Physical samples: 3–7 business days</li>
                  <li>• Initial OEM run: 20–25 days (plate engraving)</li>
                  <li>• Repeat mass orders: 15–20 days</li>
                  <li>• Emergency rush scheduling upon request</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-[#F6F1E9] border border-[#E3D9C8]">
                <div className="flex items-center gap-2.5 text-[#2E4A5C] font-bold mb-3">
                  <FileCheck className="w-5 h-5 text-[#B4835A]" />
                  <span>Incoterms &amp; Documents</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-[#5B6B75]">
                  <li>• Primary Port: FOB Hazira Port (Surat)</li>
                  <li>• EXW, CFR, and CIF negotiable</li>
                  <li>• Complete documentation: CO, B/L, Invoice</li>
                  <li>• SGS / BV pre-shipment inspection passed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WE EXPORT TO 30+ COUNTRIES & REGIONS */}
      <section className="py-16 lg:py-20 bg-white border-b border-[#E3D9C8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B4835A] block mb-2">
              International Footprint
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2E4A5C]">
              We Export to 30+ Countries &amp; Regions
            </h2>
            <p className="text-sm sm:text-base text-[#5B6B75] mt-2">
              Supplying high-volume distributors, pharmacy chains, and private brands across four primary continental markets.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#F6F1E9] rounded-2xl p-6 border border-[#E3D9C8]">
              <div className="w-10 h-10 rounded-xl bg-white text-[#B4835A] flex items-center justify-center font-bold mb-4 shadow-sm">
                01
              </div>
              <h3 className="text-base font-bold text-[#2E4A5C] mb-2">
                Africa &amp; Middle East
              </h3>
              <p className="text-xs text-[#5B6B75] leading-relaxed mb-3">
                UAE, Saudi Arabia, Kenya, Nigeria, South Africa, Egypt, Ghana, Oman.
              </p>
              <span className="text-[11px] font-semibold text-[#B4835A]">
                High absorption &amp; leak guard focus
              </span>
            </div>

            <div className="bg-[#F6F1E9] rounded-2xl p-6 border border-[#E3D9C8]">
              <div className="w-10 h-10 rounded-xl bg-white text-[#B4835A] flex items-center justify-center font-bold mb-4 shadow-sm">
                02
              </div>
              <h3 className="text-base font-bold text-[#2E4A5C] mb-2">
                Europe &amp; Americas
              </h3>
              <p className="text-xs text-[#5B6B75] leading-relaxed mb-3">
                UK, Germany, Poland, United States, Canada, Mexico, Brazil.
              </p>
              <span className="text-[11px] font-semibold text-[#B4835A]">
                Ultra-thin, OEKO-TEX &amp; eco credentials
              </span>
            </div>

            <div className="bg-[#F6F1E9] rounded-2xl p-6 border border-[#E3D9C8]">
              <div className="w-10 h-10 rounded-xl bg-white text-[#B4835A] flex items-center justify-center font-bold mb-4 shadow-sm">
                03
              </div>
              <h3 className="text-base font-bold text-[#2E4A5C] mb-2">
                Southeast Asia
              </h3>
              <p className="text-xs text-[#5B6B75] leading-relaxed mb-3">
                Vietnam, Philippines, Indonesia, Malaysia, Thailand.
              </p>
              <span className="text-[11px] font-semibold text-[#B4835A]">
                Breathable microporous hot-air sheets
              </span>
            </div>

            <div className="bg-[#F6F1E9] rounded-2xl p-6 border border-[#E3D9C8]">
              <div className="w-10 h-10 rounded-xl bg-white text-[#B4835A] flex items-center justify-center font-bold mb-4 shadow-sm">
                04
              </div>
              <h3 className="text-base font-bold text-[#2E4A5C] mb-2">
                Asia Pacific
              </h3>
              <p className="text-xs text-[#5B6B75] leading-relaxed mb-3">
                Australia, South Korea, Sri Lanka, Bangladesh, New Zealand.
              </p>
              <span className="text-[11px] font-semibold text-[#B4835A]">
                Premium pull-up &amp; period pants demand
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. QUALITY IN EVERY DETAIL (4 feature tiles) */}
      <section className="py-16 lg:py-20 bg-[#F6F1E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B4835A] block mb-2">
              Engineering Rigor
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2E4A5C]">
              Quality in Every Detail
            </h2>
            <p className="text-xs sm:text-sm text-[#5B6B75] mt-1">
              Every production batch undergoes multi-stage automated and laboratory verification.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#E3D9C8] shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#EDE3D3] text-[#B4835A] flex items-center justify-center mb-4">
                <Droplets className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#2E4A5C] mb-2">
                Super Absorbent Core
              </h3>
              <p className="text-xs sm:text-sm text-[#5B6B75] leading-relaxed">
                Imported Japanese Sumitomo and Nippon SAP delivers instantaneous gelation with zero re-wet or reverse osmosis.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E3D9C8] shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#EDE3D3] text-[#B4835A] flex items-center justify-center mb-4">
                <PackageCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#2E4A5C] mb-2">
                Tailored Packaging
              </h3>
              <p className="text-xs sm:text-sm text-[#5B6B75] leading-relaxed">
                High-definition flexographic polybag printing, compact retail boxes, or neutral white-label master cartons.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E3D9C8] shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#EDE3D3] text-[#B4835A] flex items-center justify-center mb-4">
                <Ship className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#2E4A5C] mb-2">
                Reliable Logistics
              </h3>
              <p className="text-xs sm:text-sm text-[#5B6B75] leading-relaxed">
                Direct container stuffing at our Surat hub and rapid port handoff at Hazira for predictable voyage schedules.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E3D9C8] shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#EDE3D3] text-[#B4835A] flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#2E4A5C] mb-2">
                Stringent QC
              </h3>
              <p className="text-xs sm:text-sm text-[#5B6B75] leading-relaxed">
                Automated optical defect detectors eliminate flawed pieces in real time, backed by climate-controlled lab audits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHY GLOBAL BUYERS CHOOSE VEGA IMPEX (5 tiles) */}
      <section className="py-16 bg-white border-y border-[#E3D9C8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B4835A] block mb-2">
              Our Core Value Proposition
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2E4A5C]">
              Why Global Buyers Choose Vega Impex
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              {
                num: "01",
                title: "Supplier Evaluation",
                desc: "Rigorous vetting of partner manufacturing lines for ISO 9001 and GMP hygiene compliance.",
              },
              {
                num: "02",
                title: "Quality Inspection",
                desc: "Multi-stage pre-production, in-line, and pre-loading container verification.",
              },
              {
                num: "03",
                title: "OEM Project Management",
                desc: "Dedicated account manager coordinating packaging design, cylinder engraving, and approvals.",
              },
              {
                num: "04",
                title: "Export Documentation",
                desc: "Full customs documentation: CO, Form-E, Bill of Lading, COA, and sanitization clearances.",
              },
              {
                num: "05",
                title: "Global Logistics Support",
                desc: "Container space booking and optimized CBM compression to reduce landed unit shipping cost.",
              },
            ].map((tile, i) => (
              <div
                key={i}
                className="bg-[#F6F1E9] p-5 rounded-2xl border border-[#E3D9C8] flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-[#B4835A] block mb-2">{tile.num}</span>
                  <h3 className="text-sm font-bold text-[#2E4A5C] mb-2">{tile.title}</h3>
                  <p className="text-xs text-[#5B6B75] leading-relaxed">{tile.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. ABOUT VEGA IMPEX SUMMARY BLOCK + 6 MINI VALUE CHIPS */}
      <section className="py-16 lg:py-24 bg-[#F6F1E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#B4835A] block">
                Integrated Manufacturing Network
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2E4A5C] leading-snug">
                Your Strategic OEM Manufacturing Partner in Surat, India
              </h2>
              <p className="text-sm sm:text-base text-[#5B6B75] leading-relaxed">
                Vega Impex Integrated Manufacturing Network is headquartered in Surat, Gujarat — India&apos;s largest hygiene products manufacturing cluster. Unlike a single factory limited to one or two production lines, our integrated network selects the most suitable specialized line for your specific volume, core technology, and price target.
              </p>
              <p className="text-sm sm:text-base text-[#5B6B75] leading-relaxed">
                We are not just a trading company — we are your strategic OEM manufacturing partner, ensuring quality control, on-time delivery, and full export documentation from FOB Hazira Port.
              </p>

              {/* 6 Mini Value Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
                {[
                  "One-Stop Sourcing",
                  "Third-Party QC",
                  "Full Export Service",
                  "Market-Driven Upgrade",
                  "Cost Advantage",
                  "White Label & Neutral",
                ].map((chip, cIdx) => (
                  <div
                    key={cIdx}
                    className="flex items-center gap-1.5 p-2 rounded-xl bg-white border border-[#E3D9C8] text-xs font-semibold text-[#2E4A5C]"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2FA84F] shrink-0" />
                    <span className="truncate">{chip}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#B4835A] hover:text-[#9C6F49]"
                >
                  <span>Read our full company story</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right: Founder Quote Card */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E3D9C8] shadow-xl relative">
                <div className="text-5xl text-[#B4835A]/30 font-serif leading-none mb-4">“</div>
                <blockquote className="text-base sm:text-lg text-[#2E4A5C] font-medium leading-relaxed italic mb-6">
                  &ldquo;We don&apos;t just manufacture products — we build trust. Every box that leaves Surat carries our commitment to your brand&apos;s success.&rdquo;
                </blockquote>
                <div className="flex items-center gap-4 pt-4 border-t border-[#E3D9C8]">
                  <div className="w-12 h-12 rounded-full bg-[#EDE3D3] text-[#B4835A] flex items-center justify-center font-bold text-lg">
                    VI
                  </div>
                  <div>
                    {/* TODO: confirm name/title/photo with client */}
                    <div className="text-sm font-bold text-[#2E4A5C]">
                      Leadership Team
                    </div>
                    <div className="text-xs text-[#5B6B75]">
                      Vega Impex Integrated Manufacturing Network
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FACTORY STRENGTH 4-IMAGE TILE GRID */}
      <section className="py-16 bg-white border-y border-[#E3D9C8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B4835A] block mb-2">
              Manufacturing Infrastructure
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2E4A5C]">
              Factory Strength &amp; Production Scale
            </h2>
            <p className="text-xs sm:text-sm text-[#5B6B75] mt-1">
              High-speed servo machinery operating in cleanroom environments with zero manual contamination.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group rounded-2xl overflow-hidden border border-[#E3D9C8] bg-[#F6F1E9] shadow-sm">
              <div className="relative aspect-video sm:aspect-square w-full overflow-hidden">
                <Image
                  src="/images/factory/automated-production.jpg"
                  alt="Automated Production line for hygiene products"
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-bold text-[#2E4A5C] mb-1">
                  Automated Production
                </h3>
                <p className="text-xs text-[#5B6B75]">
                  Full-servo high-speed converting lines producing up to 800 pieces per minute.
                </p>
              </div>
            </div>

            <div className="group rounded-2xl overflow-hidden border border-[#E3D9C8] bg-[#F6F1E9] shadow-sm">
              <div className="relative aspect-video sm:aspect-square w-full overflow-hidden">
                <Image
                  src="/images/factory/dust-free-workshop.jpg"
                  alt="Dust-free cleanroom manufacturing workshop"
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-bold text-[#2E4A5C] mb-1">
                  Dust-Free Workshop
                </h3>
                <p className="text-xs text-[#5B6B75]">
                  Positive-pressure air-filtered GMP cleanrooms maintaining strict sterile protocols.
                </p>
              </div>
            </div>

            <div className="group rounded-2xl overflow-hidden border border-[#E3D9C8] bg-[#F6F1E9] shadow-sm">
              <div className="relative aspect-video sm:aspect-square w-full overflow-hidden">
                <Image
                  src="/images/factory/in-house-lab.jpg"
                  alt="In-house quality testing laboratory"
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-bold text-[#2E4A5C] mb-1">
                  In-House Testing Lab
                </h3>
                <p className="text-xs text-[#5B6B75]">
                  Daily batch testing for SAP absorbency, re-wet values, and tensile elasticity.
                </p>
              </div>
            </div>

            <div className="group rounded-2xl overflow-hidden border border-[#E3D9C8] bg-[#F6F1E9] shadow-sm">
              <div className="relative aspect-video sm:aspect-square w-full overflow-hidden">
                <Image
                  src="/images/factory/warehouse.jpg"
                  alt="Logistics warehouse for container loading"
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-bold text-[#2E4A5C] mb-1">
                  Logistics &amp; Warehouse
                </h3>
                <p className="text-xs text-[#5B6B75]">
                  High-capacity container staging yard with direct connection to Hazira Port.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. OEM CTA BANNER: "Your Brand, Our Production" */}
      <section className="py-14 bg-[#2E4A5C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#33495A] rounded-3xl p-8 sm:p-12 border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#B4835A]">
                Turnkey Private Label Solution
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                Your Brand, Our Production
              </h2>
              <p className="text-sm sm:text-base text-[#EDE3D3]/80 max-w-xl">
                Low MOQ starting from 1×20GP container. Free dieline design and packaging artwork assistance. Full export compliance for your local market.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
              <Link
                href="/oem-service"
                className="px-8 py-3.5 rounded-full text-sm font-bold text-[#2E4A5C] bg-[#EDE3D3] hover:bg-white shadow-md transition-all"
              >
                Explore OEM Process →
              </Link>
              <Link
                href="/get-quotation"
                className="px-8 py-3.5 rounded-full text-sm font-bold text-white bg-[#B4835A] hover:bg-[#9C6F49] shadow-md transition-all"
              >
                Request Quotation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 11. PRODUCTION CAPACITY AT A GLANCE (4-stat counters) */}
      <section className="py-16 bg-[#F6F1E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B4835A] block mb-1">
              Scalable Volume
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2E4A5C]">
              Production Capacity at a Glance
            </h2>
            <p className="text-xs text-[#5B6B75] mt-1">
              {/* TODO: confirm exact production numbers with client */}
              Capacity figures based on integrated multi-factory network outputs in Surat.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-6 rounded-2xl border border-[#E3D9C8] text-center shadow-sm">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#2E4A5C] block mb-1">
                500M+
              </span>
              <span className="text-xs font-semibold text-[#5B6B75]">
                Annual Unit Capacity
              </span>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-[#E3D9C8] text-center shadow-sm">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#2E4A5C] block mb-1">
                12+
              </span>
              <span className="text-xs font-semibold text-[#5B6B75]">
                High-Speed Servo Lines
              </span>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-[#E3D9C8] text-center shadow-sm">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#2E4A5C] block mb-1">
                30+
              </span>
              <span className="text-xs font-semibold text-[#5B6B75]">
                Active Export Markets
              </span>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-[#E3D9C8] text-center shadow-sm">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#B4835A] block mb-1">
                99.8%
              </span>
              <span className="text-xs font-semibold text-[#5B6B75]">
                On-Time Shipment Rate
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 12. PRODUCTION VIDEO BLOCK */}
      <section className="py-12 bg-white border-b border-[#E3D9C8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden bg-[#2E4A5C] border border-[#E3D9C8] shadow-xl group">
            <Image
              src="/images/factory/automated-production.jpg"
              alt="Vega Impex Production Video Preview"
              fill
              className="object-cover opacity-60 group-hover:scale-102 transition-transform duration-500"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
              {/* TODO: client to supply real factory video or YouTube embed URL */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#B4835A] hover:bg-[#9C6F49] text-white flex items-center justify-center shadow-2xl transition-transform duration-300 transform group-hover:scale-110 mb-4 cursor-pointer">
                <PlayCircle className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>
              <h3 className="text-lg sm:text-2xl font-bold mb-1">
                Watch Our Automated Manufacturing Process
              </h3>
              <p className="text-xs sm:text-sm text-[#EDE3D3]/80 max-w-md">
                From raw polymer feed to automated hermetic packaging — see hygiene standards in action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 13. LATEST INSIGHTS (3 Blog Teaser Cards) */}
      <section className="py-16 lg:py-20 bg-[#F6F1E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#B4835A] block mb-1">
                Knowledge &amp; Compliance
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2E4A5C]">
                Latest Industry Insights
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-xs sm:text-sm font-semibold text-[#2E4A5C] hover:text-[#B4835A] flex items-center gap-1"
            >
              All Articles <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <div
                key={post.slug}
                className="bg-white rounded-2xl border border-[#E3D9C8] overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-video w-full bg-[#EDE3D3]">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5 sm:p-6">
                    <div className="flex items-center gap-2 text-xs text-[#5B6B75] mb-2.5">
                      <Calendar className="w-3.5 h-3.5 text-[#B4835A]" />
                      <span>{post.publishedAt}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-base font-bold text-[#2E4A5C] hover:text-[#B4835A] transition-colors mb-2 line-clamp-2">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="text-xs text-[#5B6B75] line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
                <div className="px-5 sm:px-6 pb-5 pt-0">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-xs font-bold text-[#B4835A] hover:text-[#9C6F49] flex items-center gap-1"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. INLINE QUOTATION FORM */}
      <section className="py-16 lg:py-24 bg-white border-y border-[#E3D9C8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuotationForm />
        </div>
      </section>

      {/* 15. FAQ ACCORDION (10 items) */}
      <section className="py-16 lg:py-24 bg-[#F6F1E9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B4835A] block mb-2">
              Buyer Questions Answered
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2E4A5C]">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-[#5B6B75] mt-2">
              Learn more about our MOQs, sample shipments, payment terms, and export processes.
            </p>
          </div>

          <HomeFAQAccordion />
        </div>
      </section>
    </>
  );
}
