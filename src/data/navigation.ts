export interface NavItem {
  label: string;
  href: string;
  description?: string;
  badge?: string;
}

export const productNavItems: NavItem[] = [
  {
    label: "Baby Diapers",
    href: "/products/baby-diapers",
    description: "Sumitomo SAP, 3D leak guards & wetness indicator",
    badge: "Bestseller",
  },
  {
    label: "Baby Pull-Up Pants",
    href: "/products/baby-pull-up-pants",
    description: "360° elastic waistband training pants with tearable seams",
  },
  {
    label: "Sanitary Napkins",
    href: "/products/sanitary-napkins",
    description: "Ultra-thin organic cotton pads with functional anion chip",
    badge: "Popular",
  },
  {
    label: "Disposable Period Pants",
    href: "/products/disposable-period-pants",
    description: "360° leak-proof heavy flow overnight menstrual underwear",
    badge: "Top OEM",
  },
  {
    label: "Panty Liners",
    href: "/products/panty-liners",
    description: "Breathable sub-1mm ultra-thin daily freshness liners",
  },
  {
    label: "Adult Diapers",
    href: "/products/adult-diapers",
    description: "Heavy absorbency incontinence briefs with odor neutralization",
  },
  {
    label: "Underpads",
    href: "/products/underpads",
    description: "5-layer diamond embossed waterproof bed and clinic pads",
  },
  {
    label: "Baby Wipes",
    href: "/products/baby-wipes",
    description: "99% pure water alcohol-free hypoallergenic wet wipes",
  },
];

export const mainNavLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products", hasDropdown: true },
  { label: "OEM Service", href: "/oem-service" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const companyContact = {
  name: "Vega Impex",
  tagline: "Integrated Manufacturing Network",
  city: "Surat, Gujarat, India",
  fullAddress: "Surat, Gujarat, India", // TODO: exact street address to be supplied by client
  port: "FOB Hazira Port",
  phone: "+91 76001 93191",
  whatsappNumber: "917600193191",
  whatsappUrl: "https://wa.me/917600193191",
  email: "vegaimpextrading@gmail.com",
  businessHours: "Mon–Fri: 9:00 AM – 6:00 PM IST (24/7 WhatsApp Export Desk)",
  website: "https://vegaimpex.com",
  socialLinks: {
    linkedin: "#", // TODO: confirm LinkedIn handle with client
    facebook: "#", // TODO: confirm Facebook handle with client
    twitter: "#", // TODO: confirm Twitter/X handle with client
  },
};
