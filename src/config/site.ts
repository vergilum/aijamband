import type { ContactLink, NavigationItem, SeoConfig, SiteConfig } from "@/types/content";
import { getSiteUrl, withBasePath } from "@/lib/paths";

export const siteConfig: SiteConfig = {
  performerName: "Алексей Иванов",
  bandName: "Джем-Бэнд",
  primaryCity: "Альметьевск",
  region: "Республика Татарстан",
  nearbyCities: ["Бугульма", "Нижнекамск", "Набережные Челны", "близлежащие города по договоренности"],
  instagram: "https://www.instagram.com/alx_floyd/",
};

export const contacts: ContactLink[] = [
  {
    id: "telegram",
    label: "Написать в Telegram",
    href: "https://t.me/alx_floyd",
    visibleLabel: "Telegram",
    external: true,
    iconSrc: "/icons/social/Telegram.png",
  },
  {
    id: "whatsapp",
    label: "Написать в WhatsApp",
    href: "https://wa.me/89178796094",
    visibleLabel: "WhatsApp",
    external: true,
    iconSrc: "/icons/social/WhatsApp.webp",
  },
  {
    id: "max",
    label: "Написать в MAX",
    href: "https://max.ru/u/f9LHodD0cOKuvSrjhLB5rXKals4pdaOfETqMO4moTepG7c3tDl37f7QcO4g",
    visibleLabel: "MAX",
    external: true,
    iconSrc: "/icons/social/MAX.webp",
  },
  {
    id: "phone",
    label: "Позвонить Алексею",
    href: "tel:+79178796004",
    visibleLabel: "Телефон",
    external: false,
  },
  {
    id: "instagram",
    label: "Открыть Instagram",
    href: siteConfig.instagram,
    visibleLabel: "Instagram",
    external: true,
    iconSrc: "/icons/social/Instagram.png",
  },
];

export const navigation: NavigationItem[] = [
  { label: "Ведущий", href: "#host" },
  { label: "Джем-Бэнд", href: "#band" },
  { label: "Видео", href: "#media" },
  { label: "Пакеты", href: "#packages" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакты", href: "#contacts" },
];

export const seo: SeoConfig = {
  siteUrl: getSiteUrl(),
  title: "Алексей Иванов — ведущий и живая музыка на корпоратив в Альметьевске",
  description:
    "Ведущий мероприятий Алексей Иванов и кавер-группа Джем-Бэнд для новогодних корпоративов в Альметьевске и Татарстане. Русский, татарский и английский репертуар.",
  ogImage: withBasePath("/images/band/hero-fon.png"),
  keywords: [
    "ведущий на корпоратив Альметьевск",
    "ведущий на Новый год Татарстан",
    "новогодний корпоратив Альметьевск",
    "кавер-группа Альметьевск",
    "кавер-группа на корпоратив",
    "ведущий и кавер-группа",
    "живая музыка на корпоратив",
  ],
};
