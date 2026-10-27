import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "OEM Hygiene Products Catalog | Vega Impex Gujarat India",
  description:
    "Explore our complete range of 6 OEM & private label hygiene products: baby diapers, sanitary pads, disposable period pants, panty liners, adult diapers, and underpads. Manufactured in Gujarat, India.",
  alternates: {
    canonical: "https://vegaimpex.com/products",
  },
  openGraph: {
    title: "OEM Hygiene Products Catalog | Vega Impex Gujarat India",
    description:
      "Direct OEM hygiene manufacturing in Gujarat, India. Low MOQ, advanced SAP core, global container export.",
    url: "https://vegaimpex.com/products",
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
  ],
};

export default function ProductsPage() {
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
          <span className="font-semibold text-[#2E4A5C]">Products</span>
        </div>
      </div>

      {/* Header Banner */}
      <section className="py-12 lg:py-16 bg-[#F6F1E9] border-b border-[#E3D9C8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2E4A5C] mb-4">
            Premium OEM Hygiene Products
          </h1>
          <p className="text-sm sm:text-base text-[#5B6B75] leading-relaxed">
            Manufactured in Gujarat — India&apos;s leading hygiene industrial cluster. Sourced with imported Sumitomo SAP, engineered for maximum absorbency, and packaged under your private label.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 lg:py-20 bg-[#F6F1E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E3D9C8]">
            <p className="text-sm text-[#5B6B75]">
              Showing all <strong className="text-[#2E4A5C]">{products.length} product lines</strong> available for custom OEM/ODM packaging.
            </p>
            <Link
              href="/get-quotation"
              className="text-xs sm:text-sm font-semibold text-[#B4835A] hover:text-[#9C6F49] flex items-center gap-1"
            >
              Get Custom Quotation →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, idx) => (
              <ProductCard key={product.slug} product={product} priority={idx < 3} />
            ))}
          </div>
        </div>
      </section>

      {/* OEM Banner */}
      <section className="py-16 bg-[#2E4A5C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#B4835A] block mb-2">
            Tailored Packaging &amp; Formulations
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold mb-4">
            Need a Custom SKU or Mixed Container?
          </h2>
          <p className="text-sm sm:text-base text-[#EDE3D3]/80 leading-relaxed mb-8">
            Whether you require a specific pad length, colored backsheet, higher SAP gram weight, or combined baby and feminine products in one 40HQ, our engineering team is ready to deliver.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/get-quotation"
              className="px-8 py-3.5 rounded-full text-sm font-bold text-white bg-[#B4835A] hover:bg-[#9C6F49] shadow-lg transition-all"
            >
              Request Container Pricing →
            </Link>
            <Link
              href="/oem-service"
              className="px-8 py-3.5 rounded-full text-sm font-bold text-[#2E4A5C] bg-[#EDE3D3] hover:bg-white transition-all shadow-md"
            >
              Learn About OEM Service
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
