"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Clock,
  CreditCard,
  Ship,
  Sparkles,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Check,
  Layers,
  Droplets,
  Wind,
  Shield,
  Scissors,
  Repeat,
  Feather,
  Lock,
  Grid,
  Sliders,
  ShieldAlert,
  Minimize2,
} from "lucide-react";
import { Product } from "@/types";
import { companyContact } from "@/data/navigation";
import { products } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { JsonLd } from "@/components/seo/JsonLd";

// Dynamic Icon resolver
const iconMap: Record<string, React.ElementType> = {
  ShieldCheck,
  Droplets,
  Wind,
  Sparkles,
  Scissors,
  Repeat,
  Feather,
  Lock,
  Grid,
  Sliders,
  ShieldAlert,
  Minimize2,
  Layers,
  Shield,
  Clock,
};

interface ProductPageProps {
  product: Product;
}

export function ProductPage({ product }: ProductPageProps) {
  const [activeCoreId, setActiveCoreId] = useState(product.coreOptions[0]?.id || "wood-pulp");

  const otherProducts = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  // Structured Data for Product
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: `https://vegaimpex.com${product.heroImage}`,
    description: product.shortDescription,
    brand: {
      "@type": "Brand",
      name: "Vega Impex",
    },
    manufacturer: {
      "@type": "Organization",
      name: "Vega Impex Integrated Manufacturing Network",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Surat",
        addressRegion: "Gujarat",
        addressCountry: "India",
      },
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      price: "0.05",
      lowPrice: "0.03",
      highPrice: "0.45",
      offerCount: "1000000",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Vega Impex",
      },
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
        name: "Products",
        item: "https://vegaimpex.com/products",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: `https://vegaimpex.com/products/${product.slug}`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={productSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Breadcrumb Bar */}
      <div className="bg-[#EDE3D3]/50 border-b border-[#E3D9C8] py-3 text-xs text-[#5B6B75]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
          <Link href="/" className="hover:text-[#2E4A5C] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/products" className="hover:text-[#2E4A5C] transition-colors">
            Products
          </Link>
          <span>/</span>
          <span className="font-semibold text-[#2E4A5C]">{product.name}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 lg:py-16 bg-[#F6F1E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left: Product Image Stage */}
            <div className="lg:col-span-5">
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-white shadow-xl border border-[#E3D9C8]">
                <Image
                  src={product.heroImage}
                  alt={`${product.name} OEM manufacturing in Surat, India`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#2E4A5C]/90 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {product.category}
                </div>
                <div className="absolute bottom-4 right-4 bg-[#B4835A] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                  <Ship className="w-3.5 h-3.5" />
                  <span>FOB Hazira Port</span>
                </div>
              </div>
            </div>

            {/* Right: Product Intro & Headlines */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDE3D3] text-[#B4835A] text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>OEM / ODM & Private Label Production</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2E4A5C] leading-tight">
                {product.h1}
              </h1>

              <p className="text-base sm:text-lg text-[#5B6B75] leading-relaxed">
                {product.intro}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href={`/get-quotation?product=${encodeURIComponent(product.name)}`}
                  className="px-7 py-3.5 rounded-full text-base font-semibold text-white bg-[#B4835A] hover:bg-[#9C6F49] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Request B2B Quotation →
                </Link>
                <a
                  href={companyContact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full text-base font-semibold text-[#2E4A5C] bg-[#EDE3D3] hover:bg-[#E3D9C8] border border-[#E3D9C8] transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#25D366]" />
                  WhatsApp Inquiry
                </a>
              </div>

              {/* Fast Spec summary row */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-[#E3D9C8]">
                <div className="p-3 rounded-xl bg-white/70 border border-[#E3D9C8]/60">
                  <span className="text-[11px] text-[#5B6B75] uppercase block">Min. Order (MOQ)</span>
                  <strong className="text-sm text-[#2E4A5C]">1 × 20GP Container</strong>
                </div>
                <div className="p-3 rounded-xl bg-white/70 border border-[#E3D9C8]/60">
                  <span className="text-[11px] text-[#5B6B75] uppercase block">Lead Time</span>
                  <strong className="text-sm text-[#2E4A5C]">15–25 Days</strong>
                </div>
                <div className="p-3 rounded-xl bg-white/70 border border-[#E3D9C8]/60 col-span-2 sm:col-span-1">
                  <span className="text-[11px] text-[#5B6B75] uppercase block">Export Port</span>
                  <strong className="text-sm text-[#2E4A5C]">FOB Hazira (Surat)</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Strip */}
      <section className="bg-white py-6 border-y border-[#E3D9C8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {product.trustBadges.map((badge, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F6F1E9] text-xs sm:text-sm font-semibold text-[#2E4A5C] border border-[#E3D9C8]"
              >
                <ShieldCheck className="w-4 h-4 text-[#2FA84F] shrink-0" />
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Feature Cards Grid */}
      <section className="py-16 lg:py-20 bg-[#F6F1E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B4835A] block mb-2">
              Engineered for Performance
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2E4A5C]">
              Key Technological & Structural Highlights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.features.map((feat, idx) => {
              const IconComp = iconMap[feat.icon] || ShieldCheck;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-[#E3D9C8] shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#EDE3D3] text-[#B4835A] flex items-center justify-center mb-4">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-[#2E4A5C] mb-2">{feat.title}</h3>
                  <p className="text-xs sm:text-sm text-[#5B6B75] leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specs Table Section */}
      <section className="py-16 bg-white border-y border-[#E3D9C8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B4835A] block mb-2">
              Factory Specifications
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2E4A5C]">
              Standard Sizing & Packing Configurations
            </h2>
            <p className="text-sm text-[#5B6B75] mt-1">
              Custom dimensions, SAP grams, and pack counts are fully adjustable for your OEM requirements.
            </p>
          </div>

          {/* Table Container with Horizontal Scroll Wrapper */}
          <div className="overflow-x-auto rounded-2xl border border-[#E3D9C8] shadow-sm bg-white">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#2E4A5C] text-white">
                  {product.specs.headers.map((hdr, idx) => (
                    <th key={idx} className="p-3.5 sm:p-4 font-semibold whitespace-nowrap">
                      {hdr}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E3D9C8]">
                {product.specs.rows.map((row, rIdx) => (
                  <tr
                    key={rIdx}
                    className={rIdx % 2 === 0 ? "bg-white" : "bg-[#F6F1E9]/60 hover:bg-[#EDE3D3]/40"}
                  >
                    <td className="p-3.5 sm:p-4 font-bold text-[#2E4A5C] whitespace-nowrap">
                      {row.size}
                    </td>
                    {row.waistCm && (
                      <td className="p-3.5 sm:p-4 text-[#5B6B75] whitespace-nowrap">
                        {row.waistCm}
                      </td>
                    )}
                    {row.hipCm && (
                      <td className="p-3.5 sm:p-4 text-[#5B6B75] whitespace-nowrap">
                        {row.hipCm}
                      </td>
                    )}
                    {row.dimensions && (
                      <td className="p-3.5 sm:p-4 text-[#5B6B75] whitespace-nowrap">
                        {row.dimensions}
                      </td>
                    )}
                    {row.weightG && (
                      <td className="p-3.5 sm:p-4 text-[#5B6B75] whitespace-nowrap">
                        {row.weightG}
                      </td>
                    )}
                    {row.absorbency && (
                      <td className="p-3.5 sm:p-4 font-semibold text-[#B4835A] whitespace-nowrap">
                        {row.absorbency}
                      </td>
                    )}
                    <td className="p-3.5 sm:p-4 text-[#5B6B75] whitespace-nowrap">
                      {row.piecesPerPack}
                    </td>
                    <td className="p-3.5 sm:p-4 text-[#2E4A5C] font-medium whitespace-nowrap">
                      {row.cartonQty}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {product.specs.footnote && (
            <p className="text-xs text-[#5B6B75] mt-3 italic">
              * Note: {product.specs.footnote}
            </p>
          )}
        </div>
      </section>

      {/* 3-Column Trade & Delivery Info Block */}
      <section className="py-16 lg:py-20 bg-[#F6F1E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B4835A] block mb-2">
              Commercial Export Terms
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2E4A5C]">
              B2B Trade, Payment & Delivery Terms
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Payment Terms */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E3D9C8] shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#EDE3D3] text-[#B4835A] flex items-center justify-center mb-5">
                  <CreditCard className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#2E4A5C] mb-3">Payment Terms</h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#5B6B75]">
                  {product.tradeTerms.paymentTerms.map((term, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#2FA84F] shrink-0 mt-0.5" />
                      <span>{term}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E3D9C8]/60 text-xs text-[#5B6B75]">
                🔒 Secure international banking via verified Indian banks
              </div>
            </div>

            {/* Production Lead Time */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E3D9C8] shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#EDE3D3] text-[#B4835A] flex items-center justify-center mb-5">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#2E4A5C] mb-3">Production Lead Time</h3>
                <div className="space-y-4 text-xs sm:text-sm text-[#5B6B75]">
                  <div className="p-3 rounded-xl bg-[#F6F1E9] border border-[#E3D9C8]">
                    <span className="font-bold text-[#2E4A5C] block mb-1">
                      🧪 Physical Samples:
                    </span>
                    <span>{product.tradeTerms.leadTime.samples}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#F6F1E9] border border-[#E3D9C8]">
                    <span className="font-bold text-[#2E4A5C] block mb-1">
                      🏭 Mass Container Production:
                    </span>
                    <span>{product.tradeTerms.leadTime.massProduction}</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E3D9C8]/60 text-xs text-[#5B6B75]">
                ⚡ Express rush scheduling available for repeat runs
              </div>
            </div>

            {/* Shipping & Incoterms */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E3D9C8] shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#EDE3D3] text-[#B4835A] flex items-center justify-center mb-5">
                  <Ship className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#2E4A5C] mb-3">Shipping & Logistics</h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#5B6B75]">
                  {product.tradeTerms.shippingTerms.map((term, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#2FA84F] shrink-0 mt-0.5" />
                      <span>{term}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E3D9C8]/60 text-xs text-[#5B6B75]">
                🚢 Direct ocean container stuffing at Surat factory
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Technology Options Tab Section */}
      <section className="py-16 bg-white border-b border-[#E3D9C8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B4835A] block mb-2">
              Custom Engineering Options
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2E4A5C]">
              Select Your Absorbent Core Structure
            </h2>
            <p className="text-sm text-[#5B6B75] mt-1">
              Match your brand positioning and retail price targets with 3 distinct internal core architectures.
            </p>
          </div>

          {/* Core Selection Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            {product.coreOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setActiveCoreId(opt.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeCoreId === opt.id
                    ? "bg-[#2E4A5C] text-white shadow-md"
                    : "bg-[#EDE3D3] text-[#2E4A5C] hover:bg-[#E3D9C8]"
                }`}
              >
                {opt.name}
              </button>
            ))}
          </div>

          {/* Active Core Details Card */}
          {(() => {
            const currentCore =
              product.coreOptions.find((c) => c.id === activeCoreId) || product.coreOptions[0];
            return (
              <div className="max-w-4xl mx-auto bg-[#F6F1E9] rounded-2xl p-6 sm:p-10 border border-[#E3D9C8] shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E3D9C8]">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#B4835A] block mb-1">
                      {currentCore.badge}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#2E4A5C]">
                      {currentCore.name}
                    </h3>
                  </div>
                  <div className="px-4 py-2 rounded-full bg-white text-xs font-semibold text-[#2E4A5C] border border-[#E3D9C8]">
                    🎯 Best for: {currentCore.bestFor}
                  </div>
                </div>

                <div className="py-6 space-y-4">
                  <p className="text-sm sm:text-base text-[#5B6B75] leading-relaxed">
                    {currentCore.description}
                  </p>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#2E4A5C] mb-3">
                      Core Advantages:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {currentCore.pros.map((pro, pIdx) => (
                        <div
                          key={pIdx}
                          className="bg-white p-3 rounded-xl border border-[#E3D9C8]/80 flex items-center gap-2 text-xs font-medium text-[#2E4A5C]"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#2FA84F] shrink-0" />
                          <span>{pro}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* 7-Item Checklist: Key Features & Benefits */}
      <section className="py-16 lg:py-20 bg-[#F6F1E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#B4835A] block">
                Quality Assurance
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2E4A5C] leading-snug">
                7 Core Advantages Built Into Every Container
              </h2>
              <p className="text-sm text-[#5B6B75] leading-relaxed">
                From raw material batch screening to automated optical line ejection, Vega Impex ensures zero compromise on hygiene, skin safety, and absorbency consistency.
              </p>
              <div className="pt-2">
                <Link
                  href="/get-quotation"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-[#B4835A] hover:bg-[#9C6F49] shadow-md transition-all"
                >
                  <span>Request Custom Dieline & Specs</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-[#E3D9C8] shadow-sm">
              <ul className="space-y-4">
                {product.keyFeatures.map((kf, kIdx) => (
                  <li key={kIdx} className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-[#2FA84F]/10 text-[#2FA84F] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span className="text-sm font-medium text-[#2E4A5C] leading-relaxed">
                      {kf}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* OEM Banner */}
      <section className="py-12 bg-[#2E4A5C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B4835A]">
              OEM / Private Label Production
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold">
              Your Brand, Our Manufacturing Excellence
            </h3>
            <p className="text-sm text-[#EDE3D3]/80 max-w-xl">
              Flexible packaging dielines, free digital artwork verification, and low MOQ starter orders directly from Surat, Gujarat.
            </p>
          </div>
          <Link
            href="/oem-service"
            className="px-7 py-3.5 rounded-full text-sm font-bold text-[#2E4A5C] bg-[#EDE3D3] hover:bg-white transition-all shadow-lg shrink-0"
          >
            Explore OEM Capabilities →
          </Link>
        </div>
      </section>

      {/* Mini Company Card */}
      <section className="py-12 bg-white border-b border-[#E3D9C8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F6F1E9] rounded-2xl p-6 sm:p-8 border border-[#E3D9C8] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#B4835A]">
                Vega Impex Integrated Manufacturing
              </span>
              <h4 className="text-lg font-bold text-[#2E4A5C]">
                Ready to manufacture your {product.name.toLowerCase()} order?
              </h4>
              <p className="text-xs sm:text-sm text-[#5B6B75] flex items-center justify-center sm:justify-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#B4835A]" />
                Surat, Gujarat, India · FOB Hazira Port
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href={`mailto:${companyContact.email}`}
                className="px-4 py-2.5 rounded-full bg-white text-xs font-semibold text-[#2E4A5C] border border-[#E3D9C8] hover:border-[#B4835A] transition-colors flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5 text-[#B4835A]" />
                Email Desk
              </a>
              <a
                href={companyContact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-full bg-[#25D366] text-white text-xs font-semibold hover:bg-[#20ba59] transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <Phone className="w-3.5 h-3.5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="py-16 bg-[#F6F1E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#B4835A] block mb-1">
                Explore More
              </span>
              <h3 className="text-2xl font-bold text-[#2E4A5C]">Other Hygiene Products</h3>
            </div>
            <Link
              href="/products"
              className="text-xs sm:text-sm font-semibold text-[#2E4A5C] hover:text-[#B4835A] flex items-center gap-1"
            >
              View Full Catalog <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProducts.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
