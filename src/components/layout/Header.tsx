import { navigation, siteConfig } from "@/config/site";
import { getDirectContacts } from "@/lib/content";

export function Header() {
  const primaryContact = getDirectContacts()[0];

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="На начало страницы">
        <span>{siteConfig.performerName}</span>
        <small>{siteConfig.bandName}</small>
      </a>
      <nav className="main-nav" aria-label="Основная навигация">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="header-cta" href={primaryContact?.href ?? "#contacts"} target={primaryContact?.external ? "_blank" : undefined} rel={primaryContact?.external ? "noreferrer" : undefined}>
        Обсудить дату
      </a>
    </header>
  );
}
