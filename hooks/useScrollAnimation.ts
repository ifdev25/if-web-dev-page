"use client";

import { useEffect } from "react";

/**
 * Hook équivalent à fadeInScroll.js / mobileNav.js
 * Active la classe "appear" sur les éléments .fade-in et .slide-in
 * quand ils entrent dans le viewport.
 */
export function useScrollAnimation() {
  useEffect(() => {
    // Pas de garde "deja initialise" ici : en dev, le StrictMode monte l'effet
    // deux fois (run -> cleanup -> run). Une garde ferait revenir le 2e run
    // avant la creation de l'observer, alors que le cleanup du 1er l'a deja
    // deconnecte : plus personne n'observe et tout reste a opacity 0.
    // L'effet est idempotent, le relancer ne coute rien.
    const faders = document.querySelectorAll<HTMLElement>(".fade-in");
    const sliders = document.querySelectorAll<HTMLElement>(".slide-in");

    const options: IntersectionObserverInit = {
      threshold: 0,
      rootMargin: "0px 0px -250px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("appear");
        observer.unobserve(entry.target);
      });
    }, options);

    faders.forEach((el) => observer.observe(el));
    sliders.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
