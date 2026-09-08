import { landingContent } from "@/content/landing";

export function PositioningSection() {
  return (
    <section className="positioning" data-animate-section aria-label="Позиционирование">
      <div className="positioning-mark" data-animate-item aria-hidden="true">live</div>
      {landingContent.positioning.map((item) => (
        <p key={item} data-animate-item>{item}</p>
      ))}
    </section>
  );
}
