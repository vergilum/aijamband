import { landingContent } from "@/content/landing";
import { Section } from "./Section";

export function PackagesSection() {
  return (
    <Section id="packages" title="Форматы программы" variant="muted">
      <p className="packages-intro">Два рабочих формата без формы заявки: стоимость и состав редактируются в контентной модели.</p>
      <div className="packages-grid">
        {landingContent.servicePackages.map((servicePackage) => (
          <article key={servicePackage.id} className={servicePackage.featured ? "package-card featured" : "package-card"}>
            {servicePackage.featured ? <p className="section-kicker">Основной формат</p> : null}
            <h3>{servicePackage.title}</h3>
            <p>{servicePackage.shortDescription}</p>
            <ul className="check-list">
              {servicePackage.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            {servicePackage.showPrice ? (
              <p className="price">{`${servicePackage.pricePrefix} ${new Intl.NumberFormat("ru-RU").format(servicePackage.price)} ${servicePackage.priceSuffix}`}</p>
            ) : null}
            <a className="button button-primary" href="#contacts">
              {servicePackage.ctaLabel}
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}
