// Server Component — pas de "use client" ici.
// HeroSection inclut désormais la Navbar (même fond bg-night).
import ScrollAnimationProvider from "@/components/ScrollAnimationProvider";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="relative">
      <ScrollAnimationProvider />
      <HeroSection />
      <SkillsSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
