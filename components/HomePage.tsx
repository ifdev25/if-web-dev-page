// Server Component : la page entière, rendue dans la langue demandée.
import ScrollAnimationProvider from "@/components/ScrollAnimationProvider";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ServicesSection from "@/components/ServicesSection";
import MethodSection from "@/components/MethodSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { DICTS, LANG_META, type Lang } from "@/lib/i18n";

export default function HomePage({ lang }: { lang: Lang }) {
  const t = DICTS[lang];
  const { htmlLang, dir } = LANG_META[lang];
  return (
    <main className="relative" lang={htmlLang} dir={dir}>
      <ScrollAnimationProvider />
      <HeroSection lang={lang} t={t.hero} nav={t.nav} />
      <SkillsSection t={t.skills} />
      <ServicesSection t={t.services} />
      <MethodSection t={t.method} />
      {/* Avis fictifs pour la démo, signalés par t.testimonials.demo. Pour retirer la
          section : la supprimer ici et repasser FAQ en bg-night, Contact en bg-black,
          Footer en bg-night. */}
      <TestimonialsSection t={t.testimonials} />
      <FaqSection t={t.faq} />
      <ContactSection t={t.contact} />
      <Footer t={t.footer} />
    </main>
  );
}
