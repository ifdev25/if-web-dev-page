import type { Dict } from "@/lib/i18n";

export default function FaqSection({ t }: { t: Dict["faq"] }) {
  return (
    <section className="section bg-night" id="faq">
      <div className="container relative">
        <div className="section-head">
          <span className="eyebrow">{t.eyebrow}</span>
          <h2 className="text-white">{t.title}</h2>
        </div>

        <div className="faq">
          {t.items.map(({ q, a }) => (
            <details key={q} className="glass-card">
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
