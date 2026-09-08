import Image from "next/image";
import type { MediaItem } from "@/types/content";

interface MediaFrameProps {
  media: MediaItem;
  priority?: boolean;
  ratio?: "wide" | "portrait";
}

export function MediaFrame({ media, priority = false, ratio = "wide" }: MediaFrameProps) {
  if (media.type === "video") {
    return (
      <figure className={`media-frame media-${ratio}`}>
        {media.poster ? <Image src={media.poster} alt={media.alt} fill sizes="(max-width: 768px) 100vw, 900px" /> : null}
        <div className="video-placeholder" aria-label={media.title}>
          <span className="play-button" aria-hidden="true" />
          <strong>{media.title}</strong>
          <small>{media.description}</small>
        </div>
        <figcaption>{media.placeholder ? "Placeholder media" : media.title}</figcaption>
      </figure>
    );
  }

  if (!media.src) {
    return (
      <figure className={`media-frame media-${ratio} empty-media`}>
        <figcaption>{media.title}</figcaption>
      </figure>
    );
  }

  return (
    <figure className={`media-frame media-${ratio}`}>
      <Image src={media.src} alt={media.alt} fill priority={priority} sizes="(max-width: 768px) 100vw, 900px" />
      <figcaption>{media.placeholder ? "Placeholder media" : media.title}</figcaption>
    </figure>
  );
}
