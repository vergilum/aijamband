import { landingContent } from "@/content/landing";
import { MediaFrame } from "./MediaFrame";
import { Section } from "./Section";

const verticalVideoSlots = [
  "Ведущий в работе — TODO",
  "Джем-Бэнд live — TODO",
  "Интерактив с группой — TODO",
];

export function VideoSection() {
  const showreel = landingContent.media.find((item) => item.category === "showreel");

  return (
    <Section id="media" title="Видео" description="Блок подготовлен под будущий showreel и вертикальные ролики с мероприятий. Сейчас видео не загружаются.">
      <div className="video-motion-root">
        {showreel ? (
        <article className="showreel-block" data-animate-item>
          <MediaFrame media={showreel} />
          <div>
            <p className="section-kicker">SHOWREEL — TODO</p>
            <h3>Крупное место под главный ролик</h3>
            <p>{showreel.description}</p>
          </div>
        </article>
        ) : null}
        <div className="vertical-video-rail" aria-label="Будущие вертикальные видео">
          {verticalVideoSlots.map((slot) => (
            <article key={slot} className="vertical-video-slot reveal-video" data-animate-item>
              <span className="play-button" aria-hidden="true" />
              <h3>{slot}</h3>
              <p>Вертикальный слот 9:16. Настоящее видео будет добавлено позже через content configuration.</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
