import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <p>
        {siteConfig.performerName} и {siteConfig.bandName}. {siteConfig.primaryCity}, {siteConfig.region}.
      </p>
      <p>Сайт не содержит форм обратной связи, аналитики, cookies и собственной обработки персональных данных посетителей.</p>
    </footer>
  );
}
