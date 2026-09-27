import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Award,
  Users,
  Factory,
  Ship,
  Globe2,
  CheckCircle2,
  ArrowRight,
  HeartHandshake,
  Check,
  PlayCircle,
} from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "About Vega Impex | Integrated Hygiene Manufacturing Network Surat India",
  description:
    "Learn about Vega Impex, India's leading hygiene OEM manufacturing network based in Surat, Gujarat. Serving 30+ export countries with ISO 9001 certified production lines via FOB Hazira Port.",
  alternates: {
    canonical: "https://vegaimpex.com/about",
  },
  openGraph: {
    title: "About Vega Impex | Integrated Hygiene Manufacturing Network Surat India",
    description:
      "Strategic OEM manufacturing partner in Surat, Gujarat. 8 hygiene product categories, ISO 9001 / FDA / CE certified, FOB Hazira Port.",
    url: "https://vegaimpex.com/about",
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
      name: "About Us",
      item: "https://vegaimpex.com/about",
    },
  ],
};

export default function AboutPage() {
  const certifications = [
    { name: "ISO 9001:2015", desc: "Quality Management System" },
    { name: "FDA Registered", desc: "US Health Compliance Facility" },
    { name: "CE Marked", desc: "European Conformity Standards" },
    { name: "SGS Tested", desc: "Third-Party Purity Verification" },
    { name: "OEKO-TEX® 100", desc: "Harmful Substances Tested" },
    { name: "BRC Global Standard", desc: "Consumer Goods Safety" },
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
          <span className="font-semibold text-[#2E4A5C]">About Us</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-14 lg:py-20 bg-[#F6F1E9] border-b border-[#E3D9C8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDE3D3] text-[#B4835A] text-xs font-semibold uppercase tracking-wider">
                <Factory className="w-3.5 h-3.5" />
                <span>About Vega Impex</span>
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2E4A5C] leading-tight">
                India&apos;s Trusted Hygiene Products OEM Manufacturing Network
              </h1>

              <div className="space-y-4 text-sm sm:text-base text-[#5B6B75] leading-relaxed">
                <p>
                  <strong>Vega Impex Integrated Manufacturing Network</strong> is headquartered in Surat, Gujarat — India&apos;s largest hygiene products manufacturing cluster. We specialize in OEM manufacturing and export of baby diapers, baby pull-up pants, sanitary napkins, disposable period pants, panty liners, adult diapers, underpads, and baby wipes.
                </p>
                <p>
                  With years of industry experience and strong partnerships with ISO 9001 certified factories, we serve clients across Southeast Asia, the Middle East, Africa, Europe, and the Americas. Our mission is to provide high-quality, cost-effective hygiene solutions with flexible OEM/ODM services, neutral packaging, and private label support.
                </p>
                <p>
                  Unlike a single factory, we are not limited to one production line. We select the most suitable manufacturer for your specific needs — whether you need low MOQ, custom packaging, or a specific core technology. <em>Your brand, our production. Your market, our solution.</em>
                </p>
                <p className="font-semibold text-[#2E4A5C]">
                  We are not just a trading company — we are your strategic OEM manufacturing partner, ensuring quality control, on-time delivery, and full export documentation.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/get-quotation"
                  className="px-7 py-3.5 rounded-full text-sm font-bold text-white bg-[#B4835A] hover:bg-[#9C6F49] shadow-md transition-all"
                >
                  Work With Our Team →
                </Link>
                <Link
                  href="/products"
                  className="px-7 py-3.5 rounded-full text-sm font-semibold text-[#2E4A5C] bg-[#EDE3D3] hover:bg-[#E3D9C8] transition-colors"
                >
                  View Product Range
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] sm:aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/factory/automated-production.jpg"
                  alt="Vega Impex automated hygiene manufacturing in Surat"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Core Value Cards */}
      <section className="py-16 bg-white border-b border-[#E3D9C8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B4835A] block mb-1">
              Guiding Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2E4A5C]">
              Our Three Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#F6F1E9] rounded-2xl p-8 border border-[#E3D9C8] shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-white text-[#B4835A] flex items-center justify-center font-bold text-lg mb-5 shadow-sm">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#2E4A5C] mb-2">Integrity First</h3>
              <p className="text-xs sm:text-sm text-[#5B6B75] leading-relaxed">
                Absolute transparency in raw material specifications, SAP ratios, pricing structures, and realistic production lead times. No hidden compromises.
              </p>
            </div>

            <div className="bg-[#F6F1E9] rounded-2xl p-8 border border-[#E3D9C8] shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-white text-[#B4835A] flex items-center justify-center font-bold text-lg mb-5 shadow-sm">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#2E4A5C] mb-2">Quality Without Compromise</h3>
              <p className="text-xs sm:text-sm text-[#5B6B75] leading-relaxed">
                From Sumitomo SAP absorption testing to in-line optical camera defect detection, we verify that every unit leaving Surat adheres to international standards.
              </p>
            </div>

            <div className="bg-[#F6F1E9] rounded-2xl p-8 border border-[#E3D9C8] shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-white text-[#B4835A] flex items-center justify-center font-bold text-lg mb-5 shadow-sm">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#2E4A5C] mb-2">Customer First, Always</h3>
              <p className="text-xs sm:text-sm text-[#5B6B75] leading-relaxed">
                Flexible MOQs, customized packaging dieline assistance, responsive 24/7 export communication, and dedicated after-sales coordination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pull Quote Block */}
      <section className="py-16 bg-[#2E4A5C] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="text-5xl text-[#B4835A] font-serif leading-none">“</div>
          <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium leading-relaxed italic text-white/95">
            &ldquo;We don&apos;t just manufacture products — we build trust. Every box that leaves Surat carries our commitment to your brand&apos;s success.&rdquo;
          </blockquote>
          <div>
            {/* TODO: confirm name/title/photo with client */}
            <div className="text-base font-bold text-[#EDE3D3]">Leadership Council</div>
            <div className="text-xs text-[#EDE3D3]/70">
              Vega Impex Integrated Manufacturing Network · Surat, Gujarat, India
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Teams */}
      <section className="py-16 lg:py-20 bg-[#F6F1E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B4835A] block mb-1">
              Experienced Professionals
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2E4A5C]">
              Operational Leadership &amp; Export Support
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* General Manager */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E3D9C8] shadow-sm flex items-start gap-5">
              <div className="w-16 h-16 rounded-full bg-[#EDE3D3] text-[#B4835A] flex items-center justify-center font-bold text-xl shrink-0">
                GM
              </div>
              <div className="space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#B4835A]">
                  Executive Operations
                </span>
                {/* TODO: confirm real name with client */}
                <h3 className="text-lg font-bold text-[#2E4A5C]">General Management</h3>
                <p className="text-xs sm:text-sm text-[#5B6B75] leading-relaxed">
                  Over 15 years overseeing industrial non-wovens, high-speed automated hygiene converting lines, and global supply chain integration across South Asia.
                </p>
              </div>
            </div>

            {/* Global Sales & Multilingual Team */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E3D9C8] shadow-sm flex items-start gap-5">
              <div className="w-16 h-16 rounded-full bg-[#EDE3D3] text-[#B4835A] flex items-center justify-center font-bold text-xl shrink-0">
                GS
              </div>
              <div className="space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#B4835A]">
                  Global Sales &amp; Coordination
                </span>
                {/* TODO: confirm real name with client */}
                <h3 className="text-lg font-bold text-[#2E4A5C]">
                  Multilingual Export Desk
                </h3>
                <p className="text-xs sm:text-sm text-[#5B6B75] leading-relaxed">
                  Providing 24/7 client communication in English, Arabic, and regional languages. Experts in customs tariff codes, container optimization, and Letter of Credit (L/C) compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Row */}
      <section className="py-16 bg-white border-y border-[#E3D9C8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B4835A] block mb-1">
              Verified Compliance
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2E4A5C]">
              International Quality Certifications
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#F6F1E9] border border-[#E3D9C8] text-center flex flex-col justify-center items-center shadow-sm"
              >
                <Award className="w-6 h-6 text-[#2FA84F] mb-2" />
                <span className="text-sm font-bold text-[#2E4A5C] block mb-0.5">
                  {cert.name}
                </span>
                <span className="text-[11px] text-[#5B6B75]">{cert.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing At Scale (3-icon + Video block) */}
      <section className="py-16 lg:py-24 bg-[#F6F1E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#B4835A] block">
                Industrial Capacity
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2E4A5C]">
                Manufacturing at Scale in Surat
              </h2>
              <p className="text-sm sm:text-base text-[#5B6B75] leading-relaxed">
                By federating high-speed servo manufacturing plants under our quality-managed umbrella, Vega Impex satisfies both small bespoke trial runs and large recurring multi-container supermarket tenders without bottlenecks.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2FA84F]/10 text-[#2FA84F] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#2E4A5C]">Automated Optical Rejection</h4>
                    <p className="text-xs text-[#5B6B75]">
                      High-speed machine vision cameras scan every diaper and pad, auto-ejecting defective pieces.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2FA84F]/10 text-[#2FA84F] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#2E4A5C]">Positive-Pressure Cleanrooms</h4>
                    <p className="text-xs text-[#5B6B75]">
                      Air-shower entrances, HEPA filtration, and strict gowning prevent particulate and microbial ingress.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2FA84F]/10 text-[#2FA84F] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#2E4A5C]">High-Density Container Stuffing</h4>
                    <p className="text-xs text-[#5B6B75]">
                      Automated hydraulic bailing machinery compresses goods safely, fitting up to 18% more units per 40HQ container.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Video / Photo CTA */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-[#2E4A5C] shadow-xl group border-2 border-white">
                <Image
                  src="/images/factory/dust-free-workshop.jpg"
                  alt="Dust-free workshop in Surat"
                  fill
                  className="object-cover opacity-70 group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                  {/* TODO: confirm video embed with client */}
                  <div className="w-16 h-16 rounded-full bg-[#B4835A] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform mb-3">
                    <PlayCircle className="w-10 h-10" />
                  </div>
                  <h4 className="text-lg font-bold">Tour Our Cleanroom Workshop</h4>
                  <p className="text-xs text-[#EDE3D3]/80 mt-1 max-w-xs">
                    See our sanitary pad and baby diaper lines operating in Surat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Stat Capacity Counter Row */}
      <section className="py-14 bg-white border-b border-[#E3D9C8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {/* TODO: confirm exact figures with client */}
            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-[#2E4A5C] block mb-1">
                500M+
              </span>
              <span className="text-xs font-semibold text-[#5B6B75]">
                Annual Pieces Output Capacity
              </span>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-[#2E4A5C] block mb-1">
                12+
              </span>
              <span className="text-xs font-semibold text-[#5B6B75]">
                Servo Production Lines
              </span>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-[#2E4A5C] block mb-1">
                30+
              </span>
              <span className="text-xs font-semibold text-[#5B6B75]">
                Global Export Destinations
              </span>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-[#B4835A] block mb-1">
                99.8%
              </span>
              <span className="text-xs font-semibold text-[#5B6B75]">
                On-Time Delivery Performance
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
