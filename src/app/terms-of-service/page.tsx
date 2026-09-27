import type { Metadata } from "next";
import Link from "next/link";
import { companyContact } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Terms of Service | Vega Impex",
  description: "Terms and commercial conditions for Vega Impex B2B export website and quotation services.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <div className="bg-[#EDE3D3]/50 border-b border-[#E3D9C8] py-3 text-xs text-[#5B6B75]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center gap-2">
          <Link href="/" className="hover:text-[#2E4A5C] transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="font-semibold text-[#2E4A5C]">Terms of Service</span>
        </div>
      </div>

      <section className="py-14 lg:py-20 bg-[#F6F1E9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B4835A] block mb-2">
              Commercial Terms
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#2E4A5C] mb-2">
              Terms of Service
            </h1>
            <p className="text-xs text-[#5B6B75]">
              Last updated: March 2026 · {/* TODO: have a lawyer review before launch */}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E3D9C8] shadow-sm space-y-6 text-sm text-[#5B6B75] leading-relaxed">
            <h2 className="text-lg font-bold text-[#2E4A5C]">1. Scope of Commercial Website</h2>
            <p>
              This website provides commercial information, manufacturing capabilities, product specifications, and an RFQ (Request for Quotation) mechanism for Vega Impex Integrated Manufacturing Network, based in Surat, Gujarat, India.
            </p>

            <h2 className="text-lg font-bold text-[#2E4A5C]">2. Quotations &amp; Contracts</h2>
            <p>
              All quotations, product photos, specifications, and container loading counts displayed on this site or communicated via email/WhatsApp are non-binding estimates until confirmed in a formalized, signed Proforma Invoice (PI) or Sales Contract.
            </p>

            <h2 className="text-lg font-bold text-[#2E4A5C]">3. Intellectual Property &amp; OEM Packaging</h2>
            <p>
              Clients commissioning OEM or private-label production warrant that they own or hold legitimate licenses for all trademarks, logos, brand names, and packaging artwork provided to Vega Impex for printing. Vega Impex assumes no liability for trademark infringement arising from client-supplied dieline artwork.
            </p>

            <h2 className="text-lg font-bold text-[#2E4A5C]">4. Shipping &amp; Incoterms</h2>
            <p>
              Unless explicitly agreed otherwise in a signed contract, export terms are FOB Hazira Port (Incoterms 2020). Risk transfers to the buyer once goods are loaded on-board the carrier vessel. Transit times are subject to maritime carrier operations.
            </p>

            <h2 className="text-lg font-bold text-[#2E4A5C]">5. Governing Law &amp; Jurisdiction</h2>
            <p>
              Any disputes arising from commercial contracts or interactions with Vega Impex shall be governed by the laws of India and subject to the exclusive jurisdiction of the competent courts in Surat, Gujarat, India.
            </p>

            <div className="p-4 rounded-xl bg-[#F6F1E9] border border-[#E3D9C8] text-xs">
              For commercial contract inquiries, reach out to our legal and trade desk at{" "}
              <a href={`mailto:${companyContact.email}`} className="text-[#B4835A] font-bold underline">
                {companyContact.email}
              </a>.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
