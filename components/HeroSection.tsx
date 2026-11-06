"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X, ArrowRight, Check } from "lucide-react";
import { LANGS, LANG_META, type Dict, type Lang } from "@/lib/i18n";

const ANCHORS = ["#skills", "#methode", "#services", "#faq"];

// langue choisie à la main : prioritaire sur la détection par pays (middleware.ts)
const rememberLang = (l: Lang) => {
  document.cookie = `lang=${l}; path=/; max-age=31536000; samesite=lax`;
};

function LangSwitch({ lang, label, onPick }: { lang: Lang; label: string; onPick?: () => void }) {
  return (
    <div className="lang-switch" role="group" aria-label={label}>
      {LANGS.map((l) => (
        <a
          key={l}
          href={LANG_META[l].href}
          hrefLang={LANG_META[l].htmlLang}
          lang={LANG_META[l].htmlLang}
          title={LANG_META[l].name}
          aria-current={l === lang ? "true" : undefined}
          onClick={() => { rememberLang(l); onPick?.(); }}
        >
          {LANG_META[l].label}
        </a>
      ))}
    </div>
  );
}

export default function HeroSection({ lang, t, nav }: { lang: Lang; t: Dict["hero"]; nav: Dict["nav"] }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // nav transparente en haut de page, floutée dès qu'on scrolle (styles : .site-nav.is-scrolled)
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = ANCHORS.map((href, i) => ({ href, label: nav.links[i] }));

  return (
    <>
      {/* Menu mobile overlay */}
      <div className={`wrapper-mobile lg:hidden${menuOpen ? " appear" : ""}`}>
        <ul>
          {links.map((l) => (
            <li key={l.href}><a href={l.href} onClick={closeMenu}>{l.label}</a></li>
          ))}
          <li><a href="#contact" onClick={closeMenu}>{nav.cta}</a></li>
          <li><LangSwitch lang={lang} label={nav.langs} onPick={closeMenu} /></li>
        </ul>
      </div>

      {/* Bouton hamburger */}
      <button
        className={`menu-btn lg:hidden${menuOpen ? " appear" : ""}`}
        onClick={toggleMenu}
        aria-label={nav.menu}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X size={48} /> : <Menu size={48} />}
      </button>

      {/* Navbar : hors du <header> pour rester collée en haut tout le long de la page (desktop, voir .site-nav) */}
      <nav className={`site-nav flex flex-wrap items-center py-4${scrolled ? " is-scrolled" : ""}`}>
        <div className="container flex items-center justify-between w-full">
          <a className="logo text-white" href={LANG_META[lang].href}>
            <Image src="/img/logo-fire-pixel.webp" width={190} height={60} alt="If-Web-Dev" priority />
          </a>
          <ul className="hidden lg:flex ms-auto uppercase list-none items-center m-0 p-0">
            {links.map((l) => (
              <li key={l.href} className="flex flex-col justify-center mx-1">
                <a className="nav-link text-white" href={l.href}>{l.label}</a>
              </li>
            ))}
            <li className="flex flex-col justify-center mx-1">
              <details className="lang-menu">
                <summary className="nav-link text-white" aria-label={nav.langs}>{nav.lang}</summary>
                <ul>
                  {LANGS.map((l) => (
                    <li key={l}>
                      <a
                        href={LANG_META[l].href}
                        hrefLang={LANG_META[l].htmlLang}
                        lang={LANG_META[l].htmlLang}
                        title={LANG_META[l].name}
                        aria-current={l === lang ? "true" : undefined}
                        onClick={() => rememberLang(l)}
                      >
                        {LANG_META[l].label}
                      </a>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
            <li className="ms-6">
              <a href="#contact" className="btn hero-button my-4 red-button inline-flex items-center gap-2">
                {nav.cta}
                <ArrowRight size={18} className="rtl-flip" />
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <header className="bg-night">
        <div className="flex flex-col">

          {/* Contenu hero */}
          <div className="container flex justify-center">
            <div className="hero flex flex-wrap w-full mb-4 items-center">

              <div className="text-white flex flex-col flex-1 lg:flex-[3]">
                <span className="eyebrow self-center lg:self-start">{t.eyebrow}</span>
                <h1 className="my-4 text-shadow-dark">
                  {t.title[0]}<span className="highlighted">{t.title[1]}</span>{t.title[2]}
                </h1>
                <p className="lead">{t.lead}</p>
                <div className="flex justify-center lg:justify-start">
                  <a href="#services" className="btn hero-button my-4 red-button inline-flex items-center gap-2">
                    {t.secondary}
                  </a>
                  <a href="#contact" className="btn hero-button my-4 ms-2 lg:ms-4 light-button no-border inline-flex items-center gap-2">
                    {t.cta}
                    <ArrowRight size={18} className="rtl-flip" />
                  </a>
                </div>
                <ul className="trust">
                  {t.trust.map((item) => (
                    <li key={item}><Check size={16} aria-hidden="true" />{item}</li>
                  ))}
                </ul>
                <Image
                  className="mobile-banner"
                  src="/img/dark-craft.png"
                  width={400}
                  height={400}
                  alt=""
                />
              </div>

              <div className="flex flex-col items-center lg:items-end flex-1 lg:flex-[2] fade-in">
                <Image
                  className="text-center"
                  src="/img/hero-logo.webp"
                  width={480}
                  height={480}
                  style={{ width: "92%", height: "auto" }}
                  alt=""
                  priority
                />
              </div>

            </div>
          </div>

          {/* Ville de nuit : socle du bloc Compétences.
              Dans le flux et en dernier : sa base reste toujours collée au haut
              de #skills, et le contenu du hero ne peut plus passer dessous. */}
          <div className="city-skyline">
            <Image src="/img/city-night.svg" alt="" width={1920} height={150} priority />
          </div>
        </div>

      </header>
    </>
  );
}
