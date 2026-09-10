import { landingContent } from "@/content/landing";
import type { AvailableDateStatus } from "@/types/content";
import { Section } from "./Section";

const statusLabels: Record<AvailableDateStatus, string> = {
  available: "Свободно",
  booked: "Занято",
  limited: "Ограничено",
};

export function AvailableDatesSection() {
  return (
    <Section id="dates" title="Свободные даты" description="Информационный блок по декабрю для новогодних корпоративов. Это не календарь бронирования и не форма заявки.">
      <div className="dates-panel">
        <div className="dates-list">
          {landingContent.availableDates.map((item) => (
            <article key={item.date} className={`date-row date-${item.status}`} data-animate-item>
              <div>
                <h3>{item.date}</h3>
                <p>{item.note}</p>
              </div>
              <span>{statusLabels[item.status]}</span>
            </article>
          ))}
        </div>
        <a className="button button-primary" href="#contacts" data-animate-item>
          Уточнить дату
        </a>
      </div>
    </Section>
  );
}
