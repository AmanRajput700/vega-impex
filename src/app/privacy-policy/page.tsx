import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Mail } from "lucide-react";
import { companyContact } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Privacy Policy | Vega Impex",
  description: "Privacy policy and international data protection standards for Vega Impex B2B export website.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="bg-[#EDE3D3]/50 border-b border-[#E3D9C8] py-3 text-xs text-[#5B6B75]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center gap-2">
          <Link href="/" className="hover:text-[#2E4A5C] transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="font-semibold text-[#2E4A5C]">Privacy Policy</span>
        </div>
      </div>

      <section className="py-14 lg:py-20 bg-[#F6F1E9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B4835A] block mb-2">
              Legal &amp; Compliance
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#2E4A5C] mb-2">
              Privacy Policy
            </h1>
            <p className="text-xs text-[#5B6B75]">
              Last updated: March 2026 · {/* TODO: have a lawyer review before launch */}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E3D9C8] shadow-sm space-y-6 text-sm text-[#5B6B75] leading-relaxed">
            <div className="p-4 rounded-xl bg-[#F6F1E9] border border-[#E3D9C8] text-xs text-[#2E4A5C]">
              <strong>Note:</strong> Vega Impex Integrated Manufacturing Network is a B2B commercial export platform. We collect information exclusively to facilitate international quotations, sample dispatches, and supply chain logistics.
            </div>

            <h2 className="text-lg font-bold text-[#2E4A5C]">1. Information We Collect</h2>
            <p>
              When you submit a quotation request, sample inquiry, or contact our export desk, we collect business contact information including your full name, company name, corporate email address, phone/WhatsApp number, target destination market, and product specifications.
            </p>

            <h2 className="text-lg font-bold text-[#2E4A5C]">2. How We Use Your Data</h2>
            <p>
              Your contact and quotation details are used solely to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Prepare and deliver formal FOB Hazira Port or CIF container quotations</li>
              <li>Coordinate international sample parcel shipments via DHL, FedEx, or Aramex</li>
              <li>Communicate order status, dieline artwork proofs, and shipping schedules</li>
              <li>Comply with Indian customs and international maritime export documentation requirements</li>
            </ul>

            <h2 className="text-lg font-bold text-[#2E4A5C]">3. Cookies &amp; Tracking Technologies</h2>
            <p>
              Our website uses basic functional cookies to ensure page security, remember your cookie preferences, and collect anonymous traffic metrics to optimize user experience across different international time zones. We do not sell or monetize visitor browsing data.
            </p>

            <h2 className="text-lg font-bold text-[#2E4A5C]">4. Data Protection &amp; Confidentiality</h2>
            <p>
              We treat all client brand assets, packaging artwork, private-label trademarks, and order volumes with strict commercial confidentiality. We do not sell, rent, or disclose your corporate information to third-party marketing brokers.
            </p>

            <h2 className="text-lg font-bold text-[#2E4A5C]">5. Contact Our Privacy Officer</h2>
            <p>
              If you have any questions or wish to request data deletion, contact our export compliance desk at:
            </p>
            <div className="p-4 rounded-xl bg-[#F6F1E9] border border-[#E3D9C8] space-y-1 text-xs">
              <p className="font-bold text-[#2E4A5C]">Vega Impex Export Division</p>
              <p>Surat, Gujarat, India</p>
              <p>Email: {companyContact.email}</p>
              <p>WhatsApp: {companyContact.phone}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
