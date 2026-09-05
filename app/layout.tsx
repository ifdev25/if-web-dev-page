import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="fr" suppressHydrationWarning>
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
