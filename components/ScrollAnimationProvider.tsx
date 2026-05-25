"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

/**
 * Composant client léger uniquement chargé d'activer les animations scroll.
 * Séparé de page.tsx pour ne pas forcer tout l'arbre en "use client".
 */
export default function ScrollAnimationProvider() {
  useScrollAnimation();
  return null;
}
