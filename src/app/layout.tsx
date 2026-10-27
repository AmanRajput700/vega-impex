import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { JsonLd } from "@/components/seo/JsonLd";
import { companyContact } from "@/data/navigation";

const poppins = Poppins({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://vegaimpex.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Trusted OEM Baby Diapers, Sanitary Napkins & Period Pants Manufacturer in India | Vega Impex",
    template: "%s | Vega Impex",
  },
  description:
    "Vega Impex is an Indian hygiene products OEM manufacturer based in Gujarat. Exporting premium baby diapers, sanitary napkins, period underwear, adult diapers, and underpads to global markets.",
  keywords: [
    "Baby Diapers Manufacturer India",
    "OEM Sanitary Napkins Factory",
    "Disposable Period Pants India",
    "Adult Diaper Manufacturer India",
    "Underpads OEM Manufacturer India",
    "Hygiene Products Exporter India",
  ],
  authors: [{ name: "Vega Impex Export Division" }],
  creator: "Vega Impex",
  publisher: "Vega Impex",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Vega Impex",
    title: "Vega Impex | OEM Baby Diapers, Sanitary Napkins & Period Pants Manufacturer in India",
    description:
      "Direct OEM hygiene manufacturing network in Gujarat, India. Low MOQ, advanced SAP core, global container export.",
    images: [
      {
        url: "/images/hero/hero-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Vega Impex OEM Hygiene Manufacturing Network Gujarat India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vega Impex | Indian OEM Hygiene Products Manufacturer",
    description: "Exporting premium baby diapers, sanitary napkins, period pants, and adult diapers from Gujarat, India.",
    images: ["/images/hero/hero-banner.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Vega Impex",
  legalName: "Vega Impex Integrated Manufacturing Network",
  url: siteUrl,
  logo: `${siteUrl}/logo-full.png`,
  description:
    "Indian hygiene products OEM manufacturer based in Gujarat. Producing baby diapers, menstrual pants, sanitary pads, adult briefs, and underpads.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gujarat",
    addressRegion: "Gujarat",
    addressCountry: "India",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: companyContact.phone,
    contactType: "sales",
    areaServed: "Worldwide",
    availableLanguage: ["English", "Hindi", "Gujarati"],
    email: companyContact.email,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} h-full antialiased`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-full flex flex-col bg-[#F6F1E9] text-[#2E4A5C]">
        <JsonLd data={organizationSchema} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieConsent />
      </body>
    </html>
  );
}
