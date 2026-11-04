import { Check, ArrowRight } from "lucide-react";
import type { Dict } from "@/lib/i18n";

// la 2e offre (site vitrine) est mise en avant
const FEATURED = 1;

export default function ServicesSection({ t }: { t: Dict["services"] }) {
  return (
    <section className="section bg-night" id="services">
      <div className="container relative">
        <div className="section-head">
          <span className="eyebrow">{t.eyebrow}</span>
          <h2 className="text-white">{t.title}</h2>
          <p className="lead">{t.lead}</p>
        </div>

        <div className="offers">
          {t.offers.map((o, i) => {
            const featured = i === FEATURED;
            return (
            <a
              key={o.name}
              href="#contact"
              className={`glass-card offer fade-in${featured ? " featured" : ""}`}
              aria-label={`${t.aria} ${o.name}`}
            >
              {featured && <span className="offer-badge">{t.badge}</span>}
              <h3 className="text-white">{o.name}</h3>
              <p className="offer-pitch">{o.pitch}</p>
              <p className="offer-price">
                <small>{t.from}</small>
                <strong>{o.price}*</strong>
              </p>
              <ul className="offer-list">
                {o.items.map((item) => (
                  <li key={item}><Check size={16} aria-hidden="true" />{item}</li>
                ))}
              </ul>
              <span className={`btn hero-button ${featured ? "red-button" : "light-button"} justify-center mt-auto`}>
                {t.cta}
                <ArrowRight size={18} className="rtl-flip" />
              </span>
            </a>
          );})}
        </div>

        <p className="footnote">{t.footnote}</p>
      </div>
    </section>
  );
}
