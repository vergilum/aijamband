import Image from "next/image";
import { getMediaById } from "@/lib/content";
import { landingContent } from "@/content/landing";
import { withBasePath } from "@/lib/paths";

export function HeroSection() {
  const { hero } = landingContent;
  const media = getMediaById(hero.mediaId);
  const mobileHeroSrc = withBasePath("/images/band/hero%20fon%20mobile.png");
  const bandTitle = "ДЖЕМ-БЭНД";
  const bandTitleCharacters = Array.from(bandTitle);

  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      {media?.src ? (
        <div className="hero-background-media" data-animate-hero="background" aria-hidden="true">
          <picture>
            <source media="(max-width: 560px)" srcSet={mobileHeroSrc} />
            <Image src={media.src} alt="" fill priority sizes="100vw" />
          </picture>
        </div>
      ) : null}
      <div className="hero-copy">
        <p className="section-kicker" data-animate-hero="kicker">Альметьевск · Татарстан</p>
        <h1 id="hero-title" className="hero-title" data-animate-hero="title" aria-label={hero.title}>
          <span className="hero-title-host" data-animate-hero="host" aria-hidden="true">Алексей Иванов и</span>
          <span className="hero-title-band" aria-label={bandTitle}>
            {bandTitleCharacters.map((character, index) => (
              <span key={`${character}-${index}`} className="hero-title-character" data-animate-hero="band-character" aria-hidden="true">
                {character}
              </span>
            ))}
          </span>
        </h1>
        <p data-animate-hero="lead">{hero.lead}</p>
      </div>
    </section>
  );
}
