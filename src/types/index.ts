export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface SpecTableRow {
  size: string;
  waistCm?: string;
  hipCm?: string;
  absorbency?: string;
  dimensions?: string;
  weightG?: string;
  piecesPerPack: string | number;
  cartonQty: string;
  [key: string]: string | number | undefined;
}

export interface SpecTable {
  headers: string[];
  rows: SpecTableRow[];
  footnote?: string;
}

export interface TradeTerms {
  paymentTerms: string[];
  leadTime: {
    samples: string;
    massProduction: string;
  };
  shippingTerms: string[];
  port: string;
}

export interface CoreOption {
  id: string;
  name: string;
  badge: string;
  description: string;
  pros: string[];
  bestFor: string;
}

export interface Product {
  slug: string;
  name: string;
  h1: string;
  category: string;
  shortDescription: string;
  intro: string;
  heroImage: string;
  trustBadges: string[];
  features: FeatureItem[];
  specs: SpecTable;
  tradeTerms: TradeTerms;
  coreOptions: CoreOption[];
  keyFeatures: string[];
  metaTitle: string;
  metaDescription: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  publishedAt: string;
  readTime: string;
  author: string;
  authorRole: string;
  tags: string[];
  content: string[];
  seoTitle: string;
  seoDescription: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface TestimonialOrRegion {
  region: string;
  countries: string[];
  description: string;
  containerShare: string;
}
