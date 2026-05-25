"use client";

import { useEffect, useRef } from "react";

/**
 * Hook équivalent à fadeInScroll.js / mobileNav.js
 * Active la classe "appear" sur les éléments .fade-in et .slide-in
 * quand ils entrent dans le viewport.
 */
export function useScrollAnimation() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

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
