"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import { landingContent } from "@/content/landing";
import { MediaFrame } from "./MediaFrame";
import { Section } from "./Section";

const verticalVideoSlots = [
  "Ведущий в работе — TODO",
  "Джем-Бэнд live — TODO",
  "Интерактив с группой — TODO",
];

export function VideoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const showreel = landingContent.media.find((item) => item.category === "showreel");

  useEffect(() => {
    const element = sectionRef.current;

    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.28 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <Section id="media" title="Видео" description="Блок подготовлен под будущий showreel и вертикальные ролики с мероприятий. Сейчас видео не загружаются.">
      <div ref={sectionRef} className={isVisible ? "video-motion-root is-visible" : "video-motion-root"}>
        {showreel ? (
        <article className="showreel-block">
          <MediaFrame media={showreel} />
          <div>
            <p className="section-kicker">SHOWREEL — TODO</p>
            <h3>Крупное место под главный ролик</h3>
            <p>{showreel.description}</p>
          </div>
        </article>
        ) : null}
        <div className="vertical-video-rail" aria-label="Будущие вертикальные видео">
          {verticalVideoSlots.map((slot, index) => (
            <article key={slot} className="vertical-video-slot reveal-video" style={{ "--stagger-index": index } as CSSProperties}>
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
