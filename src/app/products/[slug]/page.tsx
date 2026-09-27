import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products, getProductBySlug } from "@/data/products";
import { ProductPage } from "@/components/products/ProductPage";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found | Vega Impex",
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://vegaimpex.com";
  const canonicalUrl = `${siteUrl}/products/${product.slug}`;

  return {
    title: product.metaTitle,
    description: product.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: product.metaTitle,
      description: product.metaDescription,
      url: canonicalUrl,
      type: "website",
      images: [
        {
          url: product.heroImage,
          width: 800,
          height: 800,
          alt: `${product.name} OEM manufacturing in Surat, India`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: product.metaTitle,
      description: product.metaDescription,
      images: [product.heroImage],
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return <ProductPage product={product} />;
}
