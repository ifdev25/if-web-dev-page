import { Palette, Zap, MessageSquareText } from "lucide-react";
import SkillsOrbit from "./SkillsOrbit";
import type { Dict } from "@/lib/i18n";

const ICONS = [Palette, Zap, MessageSquareText];

export default function SkillsSection({ t }: { t: Dict["skills"] }) {
  return (
    <section className="section relative bg-black" id="skills">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{t.eyebrow}</span>
          <h2 className="text-white">{t.title}</h2>
          <p className="lead">{t.lead}</p>
        </div>

        <div className="flex flex-wrap justify-center items-center">
          <div id="competences_items" className="w-full lg:w-6/12 flex flex-wrap skills-container overflow-hidden">
            <SkillsOrbit label={t.orbit} />
          </div>

          <ul className="w-full lg:w-6/12 grid gap-4 list-none p-0">
            {t.benefits.map(({ title, text }, i) => {
              const Icon = ICONS[i];
              return (
              <li key={title} className="glass-card benefit fade-in">
                <Icon className="benefit-icon" size={28} aria-hidden="true" />
                <div>
                  <h3 className="text-white">{title}</h3>
                  <p>{text}</p>
                </div>
              </li>
            );})}
          </ul>
        </div>
      </div>
    </section>
  );
}
