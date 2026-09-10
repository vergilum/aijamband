import Image from "next/image";
import { getDirectContacts } from "@/lib/content";
import { withBasePath } from "@/lib/paths";
import { Section } from "./Section";

export function ContactSection() {
  const contacts = getDirectContacts();
  const messengerContacts = contacts.filter((contact) => ["telegram", "whatsapp", "max"].includes(contact.id));
  const phoneContact = contacts.find((contact) => contact.id === "phone");

  return (
    <Section id="contacts" title="Связаться напрямую" description="Кнопки являются обычными ссылками во внешние каналы. Сайт ничего не отправляет на сервер.">
      <div className="contact-panel" data-animate-item>
        <div className="score-line" aria-hidden="true" />
        <p>Чтобы обсудить дату, формат и состав программы, используйте один из доступных каналов связи.</p>
        <div className="contact-links" aria-label="Мессенджеры">
          {messengerContacts.map((contact) => (
            <a key={contact.id} className="contact-link" href={contact.href ?? "#contacts"} target={contact.external ? "_blank" : undefined} rel={contact.external ? "noreferrer" : undefined}>
              {contact.iconSrc ? <Image src={withBasePath(contact.iconSrc)} alt="" width={28} height={28} aria-hidden="true" /> : null}
              <span>{contact.visibleLabel}</span>
            </a>
          ))}
        </div>
        {phoneContact?.href ? (
          <p className="contact-phone">
            Телефон: <a href={phoneContact.href}>8-917-879-60-04</a>
          </p>
        ) : null}
      </div>
    </Section>
  );
}
