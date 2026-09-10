import { landingContent } from "@/content/landing";
import { Section } from "./Section";

export function PackagesSection() {
  return (
    <Section id="packages" title="Форматы программы" variant="muted">
      <p className="packages-intro" data-animate-item>Можно выбрать отдельного ведущего, живую группу или собрать всё в одну программу. А если мероприятию нужен более широкий состав, поможем подобрать дополнительных артистов и собрать программу под задачу.</p>
      <div className="packages-grid">
        {landingContent.servicePackages.map((servicePackage) => {
          const cardClassName = ["package-card", servicePackage.featured ? "featured" : "", servicePackage.id === "new-year" ? "package-card-new-year" : ""].filter(Boolean).join(" ");

          return (
            <article key={servicePackage.id} className={cardClassName} data-animate-item>
              {servicePackage.id === "new-year" ? (
                <div className="package-snow-layer" aria-hidden="true">
                  <span className="package-snowflake" />
                  <span className="package-snowflake" />
                  <span className="package-snowflake" />
                  <span className="package-snowflake" />
                  <span className="package-snowflake" />
                  <span className="package-snowflake" />
                  <span className="package-snowflake" />
                  <span className="package-snowflake" />
                  <span className="package-snowflake" />
                  <span className="package-snowflake" />
                  <span className="package-snowflake" />
                  <span className="package-snowflake" />
                  <span className="package-snowflake" />
                  <span className="package-snowflake" />
                  <span className="package-snowflake" />
                  <span className="package-snowflake" />
                  <span className="package-snowflake" />
                  <span className="package-snowflake" />
                  <span className="package-snowflake" />
                  <span className="package-snowflake" />
                  <span className="package-snowflake" />
                  <span className="package-snowflake" />
                  <span className="package-snowflake" />
                  <span className="package-snowflake" />
                  <span className="package-snowflake" />
                  <span className="package-snowflake" />
                  <span className="package-snowflake" />
                  <span className="package-snowflake" />
                  <span className="package-snowflake" />
                  <span className="package-snowflake" />
                  <span className="package-snowflake" />
                  <span className="package-snowflake" />
                  <span className="package-snowflake" />
                  <span className="package-snowflake" />
                  <span className="package-snowflake" />
                  <span className="package-snowflake" />
                  <span className="package-snowflake" />
                  <span className="package-snowflake" />
                  <span className="package-snowflake" />
                  <span className="package-snowflake" />
                  <span className="package-snowflake" />
                  <span className="package-snowflake" />
                  <span className="package-snowflake" />
                  <span className="package-snowflake" />
                  <span className="package-snowflake" />
                  <span className="package-snowflake" />
                  <span className="package-snowflake" />
                  <span className="package-snowflake" />
                </div>
              ) : null}
              {servicePackage.featured ? <p className="section-kicker">Основной формат</p> : null}
              <h3>{servicePackage.title}</h3>
              <p>{servicePackage.shortDescription}</p>
              <ul className="check-list">
                {servicePackage.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              {servicePackage.note ? <p>{servicePackage.note}</p> : null}
              {servicePackage.showPrice ? (
                <p className="price">{`${servicePackage.pricePrefix} ${new Intl.NumberFormat("ru-RU").format(servicePackage.price)} ${servicePackage.priceSuffix}`}</p>
              ) : null}
              <a className="button button-primary" href="#contacts">
                {servicePackage.ctaLabel}
              </a>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
