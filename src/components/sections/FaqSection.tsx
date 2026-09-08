import { landingContent } from "@/content/landing";
import { Section } from "./Section";

export function FaqSection() {
  return (
    <Section id="faq" title="FAQ" variant="muted">
      <div className="faq-list">
        {landingContent.faq.map((item) => (
          <details key={item.id} data-animate-item>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
