import type { Dict } from "@/lib/i18n";

export default function MethodSection({ t }: { t: Dict["method"] }) {
  return (
    <section className="section bg-night" id="methode">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{t.eyebrow}</span>
          <h2 className="text-white">{t.title}</h2>
          <p className="lead">{t.lead}</p>
        </div>

        <ol className="steps">
          {t.steps.map((s, i) => (
            <li key={s.title} className="glass-card step fade-in">
              <span className="step-num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="text-white">{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
