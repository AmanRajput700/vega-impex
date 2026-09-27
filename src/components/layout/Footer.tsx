import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Anchor, ShieldCheck } from "lucide-react";
import { productNavItems, companyContact } from "@/data/navigation";

export function Footer() {
  const certifications = [
    "ISO 9001:2015",
    "FDA Registered",
    "CE Marked (EU)",
    "SGS Lab Tested",
    "OEKO-TEX® 100",
    "BRC Global Standard",
  ];

  return (
    <footer className="bg-[#33495A] text-[#E7ECEE] pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Overview (Spans 2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative w-56 h-12">
                <Image
                  src="/logo-white.svg"
                  alt="Vega Impex Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-sm text-[#B7C3C9] leading-relaxed max-w-sm">
              Vega Impex Integrated Manufacturing Network is headquartered in Surat, Gujarat — India&apos;s premier hygiene manufacturing cluster. Delivering flexible OEM/ODM private-label baby, feminine, and adult care hygiene solutions worldwide via FOB Hazira Port.
            </p>

            {/* Certifications Badge Pills */}
            <div className="pt-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#B4835A] block mb-2.5">
                Quality & Export Certifications
              </span>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert) => (
                  <span
                    key={cert}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-white/10 text-white/90 border border-white/10"
                  >
                    <ShieldCheck className="w-3 h-3 text-[#2FA84F]" />
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Col 2: Products List (8 items) */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Products
            </h3>
            <ul className="space-y-2.5 text-sm">
              {productNavItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#B7C3C9] hover:text-white transition-colors flex items-center justify-between"
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Company & Trade
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="text-[#B7C3C9] hover:text-white transition-colors">
                  About Vega Impex
                </Link>
              </li>
              <li>
                <Link href="/oem-service" className="text-[#B7C3C9] hover:text-white transition-colors">
                  OEM / Private Label Service
                </Link>
              </li>
              <li>
                <Link href="/get-quotation" className="text-[#B7C3C9] hover:text-white transition-colors">
                  Request Quotation
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-[#B7C3C9] hover:text-white transition-colors">
                  Industry Insights & Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#B7C3C9] hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-[#B7C3C9] hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-[#B7C3C9] hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Export Gateway */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Export Desk
            </h3>
            <ul className="space-y-3 text-sm text-[#B7C3C9]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B4835A] shrink-0 mt-0.5" />
                <span>
                  {/* TODO: exact street address to be supplied by client */}
                  Surat, Gujarat, India
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Anchor className="w-4 h-4 text-[#B4835A] shrink-0 mt-0.5" />
                <span>
                  <strong>Port:</strong> FOB Hazira Port (Direct Export Gateway)
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#B4835A] shrink-0" />
                <a
                  href={`mailto:${companyContact.email}`}
                  className="hover:text-white transition-colors truncate"
                >
                  {companyContact.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={companyContact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors"
                >
                  {companyContact.phone} (WhatsApp)
                </a>
              </li>
            </ul>

            {/* Social Links Row */}
            <div className="pt-4">
              <span className="text-xs text-[#B7C3C9] block mb-2">Connect with our export desk:</span>
              <div className="flex items-center gap-2">
                {/* TODO: confirm LinkedIn handle with client */}
                <a
                  href={companyContact.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Vega Impex LinkedIn"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#B4835A] text-white flex items-center justify-center transition-colors text-xs font-bold"
                >
                  in
                </a>
                {/* TODO: confirm Facebook handle with client */}
                <a
                  href={companyContact.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Vega Impex Facebook"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#B4835A] text-white flex items-center justify-center transition-colors text-xs font-bold"
                >
                  fb
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Global Logistics note */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#B7C3C9]">
          <p>© 2026 Vega Impex. All rights reserved. Sourced from Surat&apos;s hygiene manufacturing cluster.</p>
          <div className="flex items-center gap-4">
            <span>FOB Hazira Port · EXW · CFR · CIF</span>
            <span className="text-white/20">|</span>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <span className="text-white/20">|</span>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
