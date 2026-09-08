import { landingContent } from "@/content/landing";

export function PositioningSection() {
  return (
    <section className="positioning" aria-label="Позиционирование">
      <div className="positioning-mark" aria-hidden="true">live</div>
      {landingContent.positioning.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </section>
  );
}
