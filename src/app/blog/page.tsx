import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Hygiene Industry Blog & B2B Import Guides | Vega Impex",
  description:
    "Expert export guides, diaper OEM engineering tips, sanitary napkin market analysis, and Surat manufacturing updates from Vega Impex.",
  alternates: {
    canonical: "https://vegaimpex.com/blog",
  },
  openGraph: {
    title: "Hygiene Industry Blog & B2B Import Guides | Vega Impex",
    description: "Read practical guides on importing hygiene products from India, OEM diaper engineering, and private label femcare.",
    url: "https://vegaimpex.com/blog",
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
      name: "Blog",
      item: "https://vegaimpex.com/blog",
    },
  ],
};

export default function BlogListingPage() {
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
          <span className="font-semibold text-[#2E4A5C]">Blog &amp; Insights</span>
        </div>
      </div>

      {/* Header */}
      <section className="py-12 lg:py-16 bg-[#F6F1E9] border-b border-[#E3D9C8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDE3D3] text-[#B4835A] text-xs font-semibold uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Market Intelligence &amp; B2B Guides</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2E4A5C] mb-4">
            Hygiene Export &amp; Manufacturing Insights
          </h1>
          <p className="text-sm sm:text-base text-[#5B6B75] leading-relaxed">
            Essential knowledge for global distributors, supermarket category buyers, and private brand founders sourcing absorbent hygiene products from India.
          </p>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="py-16 lg:py-20 bg-[#F6F1E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl border border-[#E3D9C8] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-video w-full bg-[#EDE3D3] overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#2E4A5C]/85 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {post.tags[0]}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-[#5B6B75] mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#B4835A]" />
                        {post.publishedAt}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#B4835A]" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-lg font-bold text-[#2E4A5C] group-hover:text-[#B4835A] transition-colors mb-3 leading-snug">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>

                    <p className="text-xs sm:text-sm text-[#5B6B75] leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0 border-t border-[#E3D9C8]/40 pt-4 flex items-center justify-between">
                  <span className="text-xs text-[#5B6B75] font-medium">{post.author}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#B4835A] hover:text-[#9C6F49] transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
