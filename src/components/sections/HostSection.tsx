import { landingContent } from "@/content/landing";
import { getMediaById } from "@/lib/content";
import { MediaFrame } from "./MediaFrame";
import { Section } from "./Section";

export function HostSection() {
  const { host } = landingContent;
  const media = getMediaById(host.mediaId);

  return (
    <Section id="host" title={host.title}>
      <div className="split-grid host-layout">
        {media ? <MediaFrame media={media} ratio="portrait" animate /> : null}
        <div className="content-stack" data-animate-item>
          {host.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <ul className="check-list">
            {host.facts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
