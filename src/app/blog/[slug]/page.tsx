import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, User, ArrowLeft, Tag, Share2, ArrowRight } from "lucide-react";
import { blogPosts, getBlogPostBySlug } from "@/data/blog";
import { JsonLd } from "@/components/seo/JsonLd";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | Vega Impex",
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://vegaimpex.com";
  const canonicalUrl = `${siteUrl}/blog/${post.slug}`;

  return {
    title: post.seoTitle,
    description: post.seoDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.seoTitle,
      description: post.seoDescription,
      url: canonicalUrl,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.seoDescription,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://vegaimpex.com";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${siteUrl}${post.coverImage}`,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Vega Impex",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.svg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${post.slug}`,
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
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${siteUrl}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${siteUrl}/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Breadcrumb */}
      <div className="bg-[#EDE3D3]/50 border-b border-[#E3D9C8] py-3 text-xs text-[#5B6B75]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center gap-2">
          <Link href="/" className="hover:text-[#2E4A5C] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#2E4A5C] transition-colors">
            Blog
          </Link>
          <span>/</span>
          <span className="font-semibold text-[#2E4A5C] truncate max-w-xs">{post.title}</span>
        </div>
      </div>

      <article className="py-12 lg:py-20 bg-[#F6F1E9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5B6B75] hover:text-[#B4835A] transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </Link>

          {/* Title & Metadata */}
          <div className="space-y-4 mb-8">
            <div className="flex flex-wrap items-center gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 text-[11px] font-bold px-3 py-1 rounded-full bg-[#EDE3D3] text-[#B4835A]"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#2E4A5C] leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-[#5B6B75] pt-2 border-t border-[#E3D9C8]">
              <span className="flex items-center gap-1.5 font-medium text-[#2E4A5C]">
                <User className="w-4 h-4 text-[#B4835A]" />
                {post.author} ({post.authorRole})
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#B4835A]" />
                {post.publishedAt}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#B4835A]" />
                {post.readTime}
              </span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-xl border-4 border-white mb-10 bg-[#EDE3D3]">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover"
            />
          </div>

          {/* Article Body */}
          <div className="bg-white rounded-3xl p-6 sm:p-12 border border-[#E3D9C8] shadow-sm space-y-6 text-[#2E4A5C] leading-relaxed text-base sm:text-lg">
            {post.content.map((paragraph, pIdx) => (
              <p key={pIdx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}

            {/* In-Article B2B CTA Box */}
            <div className="my-10 p-6 sm:p-8 rounded-2xl bg-[#F6F1E9] border border-[#E3D9C8] flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-xs font-bold uppercase tracking-wider text-[#B4835A]">
                  Direct Factory Cooperation
                </span>
                <h4 className="text-lg font-bold text-[#2E4A5C]">
                  Looking to source hygiene containers from India?
                </h4>
                <p className="text-xs text-[#5B6B75]">
                  Get FOB Hazira Port pricing and sample swatches delivered to your international address.
                </p>
              </div>
              <Link
                href="/get-quotation"
                className="px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-[#B4835A] hover:bg-[#9C6F49] shadow-md transition-all shrink-0"
              >
                Request Quotation →
              </Link>
            </div>
          </div>

          {/* Author Bio Box */}
          <div className="mt-8 p-6 rounded-2xl bg-white border border-[#E3D9C8] flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#EDE3D3] text-[#B4835A] flex items-center justify-center font-bold text-base shrink-0">
                VI
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#2E4A5C]">{post.author}</h4>
                <p className="text-xs text-[#5B6B75]">{post.authorRole} · Surat, Gujarat, India</p>
              </div>
            </div>
            <Link
              href="/contact"
              className="text-xs font-semibold text-[#B4835A] hover:text-[#9C6F49] flex items-center gap-1"
            >
              Contact Desk <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
