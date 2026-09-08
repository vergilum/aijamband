import { getDirectContacts, getSocialContacts } from "@/lib/content";
import { landingContent } from "@/content/landing";
import { Section } from "./Section";

export function ContactSection() {
  const contacts = getDirectContacts();
  const socialContacts = getSocialContacts();

  return (
    <Section id="contacts" title="Связаться напрямую" description="Кнопки являются обычными ссылками во внешние каналы. Сайт ничего не отправляет на сервер.">
      <div className="contact-panel">
        <div className="score-line" aria-hidden="true" />
        <p>Чтобы обсудить дату, формат и состав программы, используйте один из доступных каналов связи.</p>
        {contacts.length > 0 ? (
          <div className="cta-row">
            {contacts.map((contact) => (
              <a key={contact.id} className="button button-primary" href={contact.href ?? "#contacts"} target={contact.external ? "_blank" : undefined} rel={contact.external ? "noreferrer" : undefined}>
                {contact.label}
              </a>
            ))}
          </div>
        ) : (
          <p className="empty-state">Прямые контакты пока не заполнены в конфигурации. После добавления Telegram, WhatsApp, MAX или телефона здесь появятся кнопки связи.</p>
        )}
        {socialContacts.length > 0 ? (
          <div className="social-row" aria-label="Социальные ссылки">
            {socialContacts.map((contact) => (
              <a key={contact.id} href={contact.href ?? "#contacts"} target={contact.external ? "_blank" : undefined} rel={contact.external ? "noreferrer" : undefined}>
                {contact.label}
              </a>
            ))}
          </div>
        ) : null}
        <p className="small-note">Основной CTA: {landingContent.hero.primaryCtaLabel}. Альтернативный CTA: {landingContent.hero.secondaryCtaLabel}.</p>
      </div>
    </Section>
  );
}
