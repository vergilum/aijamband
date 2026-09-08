import { landingContent } from "@/content/landing";
import { Section } from "./Section";

export function RepertoireSection() {
  const { repertoire, experience } = landingContent;

  return (
    <Section title="Репертуар и опыт">
      <div className="two-columns">
        <article>
          <h3>Языки программы</h3>
          <p>Ведение: {repertoire.hostingLanguages.join(", ")}.</p>
          <p>Музыка: {repertoire.musicLanguages.join(", ")}.</p>
          <p>{repertoire.note}</p>
        </article>
        <article>
          <h3>Что уже известно</h3>
          <ul className="check-list">
            {experience.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </Section>
  );
}
