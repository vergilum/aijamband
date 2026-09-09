"use client";

import { useRef, useState } from "react";

interface VideoCarouselItem {
  src: string;
  title: string;
}

interface VideoCarouselProps {
  title: string;
  description: string;
  videos: VideoCarouselItem[];
}

export function VideoCarousel({ title, description, videos }: VideoCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const total = videos.length;
  const activeVideo = videos[activeIndex];

  function selectVideo(nextIndex: number) {
    videoRef.current?.pause();
    setActiveIndex((nextIndex + total) % total);
  }

  function handleTouchStart(event: React.TouchEvent<HTMLElement>) {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  }

  function handleTouchEnd(event: React.TouchEvent<HTMLElement>) {
    if (touchStartX.current === null) {
      return;
    }

    const deltaX = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(deltaX) < 48) {
      return;
    }

    selectVideo(activeIndex + (deltaX < 0 ? 1 : -1));
  }

  return (
    <article className="video-carousel-card reveal-video" data-animate-item onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <div className="video-carousel-copy">
        <p className="section-kicker">Видео</p>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className="video-carousel-player">
        <div className="video-carousel-frame">
          <video key={activeVideo.src} ref={videoRef} src={activeVideo.src} controls preload="metadata" playsInline aria-label={activeVideo.title} />

          {total > 1 ? (
            <>
              <button type="button" className="video-carousel-side video-carousel-side-prev" onClick={() => selectVideo(activeIndex - 1)} aria-label="Предыдущее видео">
                <span aria-hidden="true">‹</span>
              </button>
              <button type="button" className="video-carousel-side video-carousel-side-next" onClick={() => selectVideo(activeIndex + 1)} aria-label="Следующее видео">
                <span aria-hidden="true">›</span>
              </button>
              <span className="video-carousel-count">{activeIndex + 1} / {total}</span>
            </>
          ) : null}
        </div>
      </div>
    </article>
  );
}
