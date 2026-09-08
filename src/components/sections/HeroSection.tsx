import Image from "next/image";
import { getMediaById } from "@/lib/content";
import { landingContent } from "@/content/landing";

export function HeroSection() {
  const { hero } = landingContent;
  const media = getMediaById(hero.mediaId);

  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      {media?.src ? (
        <div className="hero-background-media" aria-hidden="true">
          <Image src={media.src} alt="" fill priority sizes="100vw" />
        </div>
      ) : null}
      <div className="hero-copy">
        <p className="section-kicker">Альметьевск · Татарстан</p>
        <h1 id="hero-title">{hero.title}</h1>
        <p>{hero.lead}</p>
      </div>
    </section>
  );
}
