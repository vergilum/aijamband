import Image from "next/image";
import { getMediaById } from "@/lib/content";
import { landingContent } from "@/content/landing";

export function HeroSection() {
  const { hero } = landingContent;
  const media = getMediaById(hero.mediaId);
  const titleWords = hero.title.split(" ");

  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      {media?.src ? (
        <div className="hero-background-media" data-animate-hero="background" aria-hidden="true">
          <Image src={media.src} alt="" fill priority sizes="100vw" />
        </div>
      ) : null}
      <div className="hero-copy">
        <p className="section-kicker" data-animate-hero="kicker">Альметьевск · Татарстан</p>
        <h1 id="hero-title" data-animate-hero="title">
          {titleWords.map((word, index) => (
            <span key={`${word}-${index}`} className="hero-title-word" data-animate-hero="title-word">
              {word}{index < titleWords.length - 1 ? " " : ""}
            </span>
          ))}
        </h1>
        <p data-animate-hero="lead">{hero.lead}</p>
      </div>
    </section>
  );
}
