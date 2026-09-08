import { contacts } from "@/config/site";
import { landingContent } from "@/content/landing";

export function getMediaById(id: string) {
  return landingContent.media.find((item) => item.id === id);
}

export function getVisibleContacts() {
  return contacts.filter((contact) => Boolean(contact.href));
}

export function getDirectContacts() {
  return getVisibleContacts().filter((contact) => contact.id !== "instagram");
}

export function getSocialContacts() {
  return getVisibleContacts().filter((contact) => contact.id === "instagram");
}

export function formatPrice(value: number) {
  return new Intl.NumberFormat("ru-RU").format(value);
}
