import { landingContent } from "@/content/landing";
import { Section } from "./Section";

export function ReviewsSection() {
  if (landingContent.reviews.length === 0) {
    return null;
  }

  return (
    <Section title="Отзывы" description="Реальные отзывы будут добавлены только после подтверждения источников.">
      <div className="reviews-grid">
        {landingContent.reviews.map((review) => (
          <blockquote key={review.id}>
            <p>{review.text}</p>
            <cite>{review.author}</cite>
          </blockquote>
        ))}
      </div>
    </Section>
  );
}
