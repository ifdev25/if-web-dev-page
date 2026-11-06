import { Star } from "lucide-react";
import type { Dict } from "@/lib/i18n";

/* Défilement horizontal 100 % CSS (styles : « Témoignages » dans globals.css).
   La liste est rendue deux fois : la piste glisse de -50 % puis repart, la
   jonction est invisible. La copie est masquée aux lecteurs d'écran. */
export default function TestimonialsSection({ t }: { t: Dict["testimonials"] }) {
  const n = t.items.length;
  return (
    <section className="section bg-night" id="temoignages">
      <div className="container relative">
        <div className="section-head">
          <span className="eyebrow">{t.eyebrow}</span>
          <h2 className="text-white">{t.title}</h2>
          <p className="lead">{t.lead}</p>
        </div>
      </div>

      <div className="marquee fade-in">
        <ul className="marquee-track">
          {[...t.items, ...t.items].map((item, i) => (
            <li key={i} className="glass-card testimonial" aria-hidden={i >= n || undefined}>
              <div className="testimonial-stars" role="img" aria-label={t.rating}>
                {Array.from({ length: 5 }, (_, s) => (
                  <Star key={s} size={18} fill="currentColor" aria-hidden="true" />
                ))}
              </div>
              <blockquote>
                {/* <q> : guillemets adaptés à la langue de la page (« », “ ”) */}
                <p><q>{item.quote}</q></p>
              </blockquote>
              <div className="testimonial-author">
                <span className="testimonial-avatar" aria-hidden="true">{item.name[0]}</span>
                <div>
                  <strong className="text-white">{item.name}</strong>
                  <small>{item.role}</small>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
