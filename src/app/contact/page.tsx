import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock, Ship, MessageSquare } from "lucide-react";
import { companyContact } from "@/data/navigation";
import { QuotationForm } from "@/components/forms/QuotationForm";
import { ContactFAQAccordion } from "@/components/contact/ContactFAQAccordion";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Contact Vega Impex | Export Sales Desk & Factory in Surat, India",
  description:
    "Contact Vega Impex for OEM baby diapers, sanitary pads, period pants, and adult incontinence briefs quotation. Direct WhatsApp +91 76001 93191, email vegaimpextrading@gmail.com. FOB Hazira Port.",
  alternates: {
    canonical: "https://vegaimpex.com/contact",
  },
  openGraph: {
    title: "Contact Vega Impex | Export Sales Desk & Factory in Surat, India",
    description:
      "Get in touch with Vega Impex for B2B export pricing, free samples, and OEM packaging dielines. Surat, Gujarat, India.",
    url: "https://vegaimpex.com/contact",
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
      name: "Contact Us",
      item: "https://vegaimpex.com/contact",
    },
  ],
};

export default function ContactPage() {
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
          <span className="font-semibold text-[#2E4A5C]">Contact Us</span>
        </div>
      </div>

      {/* Contact Header */}
      <section className="py-12 lg:py-16 bg-[#F6F1E9] border-b border-[#E3D9C8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDE3D3] text-[#B4835A] text-xs font-semibold uppercase tracking-wider mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>International Export Desk</span>
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2E4A5C] mb-4">
            Get in Touch with Vega Impex
          </h1>
          <p className="text-sm sm:text-base text-[#5B6B75] leading-relaxed">
            Ready to request a container price quote, order free product samples, or discuss custom private label specifications? Our multilingual export team responds within 24 hours.
          </p>
        </div>
      </section>

      {/* Main Contact Section: Info Cards + Form */}
      <section className="py-16 lg:py-24 bg-[#F6F1E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Left 4 Cols: Contact Details Cards */}
            <div className="lg:col-span-4 space-y-4">
              <div className="bg-white rounded-2xl p-6 border border-[#E3D9C8] shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#EDE3D3] text-[#B4835A] flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#B4835A] block mb-1">
                      Email Inquiries
                    </span>
                    <a
                      href={`mailto:${companyContact.email}`}
                      className="text-sm font-bold text-[#2E4A5C] hover:text-[#B4835A] transition-colors break-all"
                    >
                      {companyContact.email}
                    </a>
                    <p className="text-xs text-[#5B6B75] mt-1">
                      Direct inbox for RFQs, container bids, and specification sheets.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-[#E3D9C8] shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#25D366]/15 text-[#25D366] flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#25D366] block mb-1">
                      WhatsApp / Phone
                    </span>
                    <a
                      href={companyContact.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-[#2E4A5C] hover:text-[#25D366] transition-colors"
                    >
                      {companyContact.phone}
                    </a>
                    <p className="text-xs text-[#5B6B75] mt-1">
                      Instant messaging with our international export managers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-[#E3D9C8] shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#EDE3D3] text-[#B4835A] flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#B4835A] block mb-1">
                      Business Hours
                    </span>
                    <span className="text-sm font-bold text-[#2E4A5C] block">
                      Mon–Fri: 9:00 AM – 6:00 PM IST
                    </span>
                    <p className="text-xs text-[#5B6B75] mt-1">
                      24/7 on-call coverage for ocean freight and urgent quotation requests.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-[#E3D9C8] shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#EDE3D3] text-[#B4835A] flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#B4835A] block mb-1">
                      Headquarters
                    </span>
                    {/* TODO: exact street address to be supplied by client */}
                    <span className="text-sm font-bold text-[#2E4A5C] block">
                      Surat, Gujarat, India
                    </span>
                    <p className="text-xs text-[#5B6B75] mt-1">
                      India&apos;s leading hygiene manufacturing industrial cluster.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-[#E3D9C8] shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#EDE3D3] text-[#B4835A] flex items-center justify-center shrink-0">
                    <Ship className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#B4835A] block mb-1">
                      Export Gateway Port
                    </span>
                    <span className="text-sm font-bold text-[#2E4A5C] block">
                      FOB Hazira Port (Surat)
                    </span>
                    <p className="text-xs text-[#5B6B75] mt-1">
                      Direct container feeder calls to global transshipment hubs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 8 Cols: Quotation Form */}
            <div className="lg:col-span-8">
              <QuotationForm />
            </div>
          </div>
        </div>
      </section>

      {/* Contact FAQ Section */}
      <section className="py-16 lg:py-20 bg-white border-t border-[#E3D9C8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B4835A] block mb-2">
              Fast Answers
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2E4A5C]">
              Inquiry &amp; Sampling FAQs
            </h2>
          </div>

          <ContactFAQAccordion />
        </div>
      </section>
    </>
  );
}
