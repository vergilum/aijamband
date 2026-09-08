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
    href: null,
    visibleLabel: "Telegram",
    external: true,
  },
  {
    id: "whatsapp",
    label: "Написать в WhatsApp",
    href: null,
    visibleLabel: "WhatsApp",
    external: true,
  },
  {
    id: "max",
    label: "Написать в MAX",
    href: null,
    visibleLabel: "MAX",
    external: true,
  },
  {
    id: "phone",
    label: "Позвонить Алексею",
    href: null,
    visibleLabel: "Телефон",
    external: false,
  },
  {
    id: "instagram",
    label: "Открыть Instagram",
    href: siteConfig.instagram,
    visibleLabel: "Instagram",
    external: true,
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
