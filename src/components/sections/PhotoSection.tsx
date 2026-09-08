import { landingContent } from "@/content/landing";
import { MediaFrame } from "./MediaFrame";
import { Section } from "./Section";

export function PhotoSection() {
  const photos = landingContent.media
    .filter((item) => item.type === "image" && !item.featured)
    .sort((a, b) => a.sortOrder - b.sortOrder);

  if (photos.length === 0) {
    return null;
  }

  return (
    <Section id="photos" title="Фотографии" variant="muted">
      <div className="photo-rhythm">
        {photos.map((photo) => (
          <MediaFrame key={photo.id} media={photo} ratio={photo.category === "host" ? "portrait" : "wide"} animate />
        ))}
      </div>
    </Section>
  );
}
