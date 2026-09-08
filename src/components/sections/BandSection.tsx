import { landingContent } from "@/content/landing";
import { getMediaById } from "@/lib/content";
import { MediaFrame } from "./MediaFrame";
import { Section } from "./Section";

export function BandSection() {
  const { band } = landingContent;
  const media = getMediaById(band.mediaId);

  return (
    <Section id="band" title={band.title} variant="muted">
      <div className="band-stage">
        {media ? <MediaFrame media={media} animate /> : null}
        <div className="content-stack" data-animate-item>
          <p className="section-kicker">Вторая половина программы</p>
          {band.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </Section>
  );
}
