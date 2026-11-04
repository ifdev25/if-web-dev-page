// Server Component : la page entière, rendue dans la langue demandée.
import ScrollAnimationProvider from "@/components/ScrollAnimationProvider";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ServicesSection from "@/components/ServicesSection";
import MethodSection from "@/components/MethodSection";
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
      {/* Témoignages (components/TestimonialsSection.tsx) : en attente de vrais avis clients,
          les textes actuels sont fictifs. Pour la réactiver : l'importer et la rendre ici,
          puis repasser FAQ en bg-black, Contact en bg-night et Footer en bg-black. */}
      <FaqSection t={t.faq} />
      <ContactSection t={t.contact} />
      <Footer t={t.footer} />
    </main>
  );
}
