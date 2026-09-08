import { landingContent } from "@/content/landing";
import { MediaFrame } from "./MediaFrame";
import { Section } from "./Section";

export function MediaSection() {
  const sortedMedia = [...landingContent.media].sort((a, b) => a.sortOrder - b.sortOrder);
  const showreel = sortedMedia.find((item) => item.category === "showreel");
  const supportingMedia = sortedMedia.filter((item) => item.category !== "showreel");

  return (
    <Section id="media" title="Видео и фотографии" description="Крупное место под showreel и несколько опорных кадров для атмосферы программы.">
      {showreel ? (
        <article className="showreel-block">
          <MediaFrame media={showreel} />
          <div>
            <p className="section-kicker">Видео</p>
            <h3>{showreel.title}</h3>
            <p>{showreel.description}</p>
          </div>
        </article>
      ) : null}
      <div className="media-grid live-media-grid">
        {supportingMedia.map((item) => (
          <article key={item.id} className="media-card">
            <MediaFrame media={item} ratio={item.category === "host" ? "portrait" : "wide"} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
