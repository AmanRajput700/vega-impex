"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, Globe, Phone, Mail, ArrowRight, ShieldCheck } from "lucide-react";
import { productNavItems, companyContact } from "@/data/navigation";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsProductsDropdownOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top Notification / Trade Bar */}
      <div className="bg-[#2E4A5C] text-[#EDE3D3] text-xs py-2 px-4 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-xs font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-[#B4835A]" />
              Direct OEM Hygiene Manufacturing Hub · Surat, Gujarat, India
            </span>
            <span className="text-white/40">|</span>
            <span className="text-xs text-[#EDE3D3]/80">
              Export Gateway: 🚢 <strong>FOB Hazira Port</strong> (Direct Sea Freight)
            </span>
          </div>
          <div className="flex items-center gap-5 text-xs font-medium">
            <a
              href={`mailto:${companyContact.email}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#B4835A]" />
              {companyContact.email}
            </a>
            <span className="text-white/30">|</span>
            <a
              href={companyContact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#25D366] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#25D366]" />
              {companyContact.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#F6F1E9]/95 backdrop-blur-md shadow-md py-3 border-b border-[#E3D9C8]"
            : "bg-[#F6F1E9] py-4 border-b border-[#E3D9C8]/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group focus:outline-none">
            <div className="relative w-48 sm:w-56 h-12">
              <Image
                src="/logo.svg"
                alt="Vega Impex - Integrated Manufacturing Network"
                fill
                priority
                className="object-contain object-left transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              href="/"
              className={`px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                pathname === "/"
                  ? "text-[#B4835A] font-semibold bg-[#EDE3D3]/50"
                  : "text-[#2E4A5C] hover:text-[#B4835A] hover:bg-[#EDE3D3]/30"
              }`}
            >
              Home
            </Link>

            {/* Products Dropdown Mega-Menu */}
            <div
              className="relative"
              onMouseEnter={() => setIsProductsDropdownOpen(true)}
              onMouseLeave={() => setIsProductsDropdownOpen(false)}
            >
              <Link
                href="/products"
                className={`flex items-center gap-1 px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                  pathname.startsWith("/products")
                    ? "text-[#B4835A] font-semibold bg-[#EDE3D3]/50"
                    : "text-[#2E4A5C] hover:text-[#B4835A] hover:bg-[#EDE3D3]/30"
                }`}
              >
                Products
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isProductsDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </Link>

              {/* Mega Dropdown Menu */}
              {isProductsDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[680px] bg-white rounded-2xl shadow-2xl border border-[#E3D9C8] p-5 grid grid-cols-2 gap-3 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                  <div className="col-span-2 pb-2 mb-1 border-b border-[#E3D9C8]/60 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#B4835A]">
                      Export Product Catalog (8 Categories)
                    </span>
                    <Link
                      href="/products"
                      className="text-xs font-semibold text-[#2E4A5C] hover:text-[#B4835A] flex items-center gap-1"
                    >
                      View All Products <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>

                  {productNavItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group p-2.5 rounded-xl hover:bg-[#F6F1E9] transition-all flex flex-col gap-0.5 border border-transparent hover:border-[#E3D9C8]/80"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-[#2E4A5C] group-hover:text-[#B4835A] transition-colors">
                          {item.label}
                        </span>
                        {item.badge && (
                          <span className="text-[10px] px-2 py-0.5 rounded-full font-medium bg-[#B4835A]/15 text-[#B4835A]">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#5B6B75] line-clamp-1">
                        {item.description}
                      </p>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/oem-service"
              className={`px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                pathname === "/oem-service"
                  ? "text-[#B4835A] font-semibold bg-[#EDE3D3]/50"
                  : "text-[#2E4A5C] hover:text-[#B4835A] hover:bg-[#EDE3D3]/30"
              }`}
            >
              OEM Service
            </Link>

            <Link
              href="/about"
              className={`px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                pathname === "/about"
                  ? "text-[#B4835A] font-semibold bg-[#EDE3D3]/50"
                  : "text-[#2E4A5C] hover:text-[#B4835A] hover:bg-[#EDE3D3]/30"
              }`}
            >
              About Us
            </Link>

            <Link
              href="/blog"
              className={`px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                pathname.startsWith("/blog")
                  ? "text-[#B4835A] font-semibold bg-[#EDE3D3]/50"
                  : "text-[#2E4A5C] hover:text-[#B4835A] hover:bg-[#EDE3D3]/30"
              }`}
            >
              Blog
            </Link>

            <Link
              href="/contact"
              className={`px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                pathname === "/contact"
                  ? "text-[#B4835A] font-semibold bg-[#EDE3D3]/50"
                  : "text-[#2E4A5C] hover:text-[#B4835A] hover:bg-[#EDE3D3]/30"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Actions: Language + CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Switcher UI */}
            <div className="relative group">
              <button
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-[#2E4A5C] bg-[#EDE3D3]/60 hover:bg-[#EDE3D3] transition-colors"
                title="Language selection (English active)"
              >
                <Globe className="w-3.5 h-3.5 text-[#B4835A]" />
                <span>English</span>
                <ChevronDown className="w-3 h-3 text-[#5B6B75]" />
              </button>
              <div className="absolute right-0 top-full mt-1 w-36 bg-white rounded-xl shadow-lg border border-[#E3D9C8] p-1.5 hidden group-hover:block z-50">
                <div className="px-2.5 py-1.5 text-xs font-semibold text-[#B4835A] bg-[#F6F1E9] rounded-lg">
                  ✓ English
                </div>
                <div className="px-2.5 py-1.5 text-xs text-[#5B6B75]/60 cursor-not-allowed">
                  Español (Soon)
                </div>
                <div className="px-2.5 py-1.5 text-xs text-[#5B6B75]/60 cursor-not-allowed">
                  Français (Soon)
                </div>
                <div className="px-2.5 py-1.5 text-xs text-[#5B6B75]/60 cursor-not-allowed">
                  العربية (Soon)
                </div>
              </div>
            </div>

            {/* Pill CTA Button */}
            <Link
              href="/get-quotation"
              className="px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-[#B4835A] hover:bg-[#9C6F49] shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Get Quotation →
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/get-quotation"
              className="px-3.5 py-1.5 text-xs font-semibold text-white bg-[#B4835A] hover:bg-[#9C6F49] rounded-full shadow-sm"
            >
              Quote
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="p-2 rounded-xl text-[#2E4A5C] hover:bg-[#EDE3D3]/60 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[65px] bottom-0 bg-[#F6F1E9] z-50 overflow-y-auto border-t border-[#E3D9C8] p-5 flex flex-col justify-between">
            <div className="space-y-4">
              <Link
                href="/"
                className="block text-base font-semibold text-[#2E4A5C] py-2 border-b border-[#E3D9C8]/40"
              >
                Home
              </Link>

              {/* Products Mobile List */}
              <div className="py-2 border-b border-[#E3D9C8]/40">
                <div className="flex items-center justify-between mb-2">
                  <Link
                    href="/products"
                    className="text-base font-semibold text-[#2E4A5C]"
                  >
                    All Products
                  </Link>
                  <span className="text-[11px] font-semibold text-[#B4835A] uppercase">
                    8 Items
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-2 pt-1">
                  {productNavItems.map((prod) => (
                    <Link
                      key={prod.href}
                      href={prod.href}
                      className="text-sm text-[#5B6B75] hover:text-[#B4835A] py-1 flex items-center justify-between"
                    >
                      <span>{prod.label}</span>
                      {prod.badge && (
                        <span className="text-[10px] bg-[#B4835A]/15 text-[#B4835A] px-2 py-0.5 rounded-full">
                          {prod.badge}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/oem-service"
                className="block text-base font-semibold text-[#2E4A5C] py-2 border-b border-[#E3D9C8]/40"
              >
                OEM Service
              </Link>

              <Link
                href="/about"
                className="block text-base font-semibold text-[#2E4A5C] py-2 border-b border-[#E3D9C8]/40"
              >
                About Us
              </Link>

              <Link
                href="/blog"
                className="block text-base font-semibold text-[#2E4A5C] py-2 border-b border-[#E3D9C8]/40"
              >
                Blog & Insights
              </Link>

              <Link
                href="/contact"
                className="block text-base font-semibold text-[#2E4A5C] py-2 border-b border-[#E3D9C8]/40"
              >
                Contact & Factory Location
              </Link>
            </div>

            {/* Mobile Contact Quick Actions */}
            <div className="pt-6 mt-6 border-t border-[#E3D9C8] space-y-3">
              <Link
                href="/get-quotation"
                className="block w-full py-3 text-center text-sm font-semibold text-white bg-[#B4835A] rounded-full shadow-md"
              >
                Request B2B Quotation →
              </Link>
              <div className="flex items-center justify-around text-xs text-[#5B6B75] pt-2">
                <a
                  href={`mailto:${companyContact.email}`}
                  className="flex items-center gap-1 hover:text-[#2E4A5C]"
                >
                  <Mail className="w-4 h-4 text-[#B4835A]" />
                  {companyContact.email}
                </a>
                <a
                  href={companyContact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[#25D366] font-medium"
                >
                  <Phone className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
