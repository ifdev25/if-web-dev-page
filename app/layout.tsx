import type { Metadata } from "next";
import { Fugaz_One } from "next/font/google";
import "./globals.css";

/* Fugaz One (Google Fonts) — police du H1.
   next/font la telecharge au build et l auto-heberge : aucune requete vers
   fonts.googleapis.com / fonts.gstatic.com au runtime (pas de DNS, pas de
   handshake TLS tiers, pas de bloc render sur une feuille de style externe).
   - subsets latin : seuls les glyphes utiles sont embarques
   - display swap : le texte s affiche tout de suite dans la fallback
   - preload : le woff2 part en <link rel="preload"> des le HTML
   - fallback + adjustFontFallback : metriques calees sur la fallback, donc
     pas de saut de mise en page (CLS) au moment du swap */
const fugazOne = Fugaz_One({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
  fallback: ["GT Walsheim Pro", "sans-serif"],
  variable: "--font-fugaz",
});

export const metadata: Metadata = {
  title: "If-web-dev | Créateur de visuels, site vitrine et d'e-commerce Wordpress",
  description:
    "If-Web-Dev : Freelance en conception de sites WordPress, Symfony, design de visuel et logo. Maximisez votre visibilité en ligne avec nos solutions sur mesure.",
  openGraph: {
    type: "website",
    siteName: "If-web-dev",
    locale: "fr_FR",
    url: "https://www.if-web-dev.com",
    title: "If-web-dev | Créateur de visuels, site vitrine et d'e-commerce Wordpress",
    description:
      "Vous souhaitez mettre en avant votre activité sur le web? Démarquez-vous avec des créations uniques. Boostez votre visibilité dès aujourd'hui.",
    images: [
      {
        url: "https://www.if-web-dev.com/img/thumbnail.png",
        width: 1200,
        height: 600,
      },
    ],
  },
  alternates: {
    canonical: "https://www.if-web-dev.com/",
  },
  icons: {
    icon: "/img/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={fugazOne.variable} suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          href="/fonts/GTWalsheimPro-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
