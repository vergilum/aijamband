import type { Metadata } from "next";
import { seo, siteConfig } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(seo.siteUrl),
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: "/",
    siteName: `${siteConfig.performerName} и ${siteConfig.bandName}`,
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: seo.ogImage,
        width: 1200,
        height: 630,
        alt: "Временное preview-изображение для сайта Алексея Иванова и Джем-Бэнд",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
