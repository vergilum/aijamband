import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  title: string;
  description?: string;
  children: ReactNode;
  variant?: "default" | "muted";
}

export function Section({ id, title, description, children, variant = "default" }: SectionProps) {
  return (
    <section id={id} className={`section section-${variant}`} data-animate-section>
      <div className="section-heading" data-animate-heading>
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
      {children}
    </section>
  );
}
