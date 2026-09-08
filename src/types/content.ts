export type ContactChannel = "telegram" | "whatsapp" | "max" | "phone" | "instagram";

export interface ContactLink {
  id: ContactChannel;
  label: string;
  href: string | null;
  visibleLabel: string;
  external: boolean;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  performerName: string;
  bandName: string;
  primaryCity: string;
  region: string;
  nearbyCities: string[];
  instagram: string;
}

export interface SeoConfig {
  siteUrl: string;
  title: string;
  description: string;
  ogImage: string;
  keywords: string[];
}

export interface HeroContent {
  title: string;
  lead: string;
  bullets: string[];
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  mediaId: string;
}

export interface PersonContent {
  title: string;
  description: string[];
  facts: string[];
  mediaId: string;
}

export interface BandContent {
  title: string;
  description: string[];
  membersCount: number;
  repertoireLanguages: string[];
  mediaId: string;
}

export interface ServicePackage {
  id: string;
  title: string;
  shortDescription: string;
  features: string[];
  price: number;
  pricePrefix: string;
  priceSuffix: string;
  showPrice: boolean;
  priceFallbackText: string;
  featured: boolean;
  ctaLabel: string;
}

export type MediaType = "image" | "video";
export type MediaCategory = "host" | "band" | "event" | "acoustic" | "corporate" | "showreel";

export interface MediaItem {
  id: string;
  type: MediaType;
  src: string | null;
  poster: string | null;
  alt: string;
  title: string;
  description: string;
  category: MediaCategory;
  featured: boolean;
  sortOrder: number;
  placeholder: boolean;
}

export interface Review {
  id: string;
  author: string;
  text: string;
  eventType: string;
  source: string;
  sortOrder: number;
  featured: boolean;
  placeholder: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export type AvailableDateStatus = "available" | "booked" | "limited";

export interface AvailableDate {
  date: string;
  status: AvailableDateStatus;
  note: string;
  placeholder: boolean;
}

export interface LandingContent {
  hero: HeroContent;
  positioning: string[];
  host: PersonContent;
  band: BandContent;
  experience: string[];
  repertoire: {
    hostingLanguages: string[];
    musicLanguages: string[];
    note: string;
  };
  servicePackages: ServicePackage[];
  media: MediaItem[];
  reviews: Review[];
  faq: FaqItem[];
  availableDates: AvailableDate[];
}
