# Migration Symfony + Twig → Next.js 15

## Démarrage rapide

```bash
# 1. Installer les dépendances
npm install

# 2. Copier les assets depuis le repo Symfony
cp -r /chemin/vers/freelance-site/public/img    ./public/img
cp -r /chemin/vers/freelance-site/public/fonts  ./public/fonts

# 3. Configurer les variables d'environnement
cp .env.local .env.local   # puis éditer avec vos vraies valeurs SMTP

# 4. Lancer le serveur de développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

---

## Structure du projet

```
freelance-nextjs/
├── app/
│   ├── layout.tsx          ← <head> global, Bootstrap CDN, Font Awesome
│   ├── page.tsx            ← Page principale (one-page)
│   ├── globals.css         ← Migration de public/css/style.css
│   └── api/
│       └── contact/
│           └── route.ts    ← Équivalent DefaultController (POST form + e-mail)
├── components/
│   ├── Navbar.tsx          ← Navbar + menu mobile (≈ mobileNav.js)
│   ├── HeroSection.tsx     ← Section hero
│   ├── SkillsSection.tsx   ← Section compétences
│   ├── ServicesSection.tsx ← Section services (3 cartes tarifaires)
│   ├── ContactSection.tsx  ← Formulaire React contrôlé (≈ ContactFormType.php)
│   └── Footer.tsx          ← Pied de page
├── hooks/
│   └── useScrollAnimation.ts ← Intersection Observer (≈ fadeInScroll.js)
├── public/
│   ├── img/               ← Copier depuis freelance-site/public/img/
│   └── fonts/             ← Copier depuis freelance-site/public/fonts/
├── .env.local             ← Variables SMTP (ne pas committer !)
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

## Correspondance Symfony → Next.js

| Symfony                        | Next.js                              |
|-------------------------------|--------------------------------------|
| `DefaultController.php`       | `app/api/contact/route.ts` (POST)    |
| `ContactFormType.php`         | `components/ContactSection.tsx`      |
| `base.html.twig`              | `app/layout.tsx` + composants        |
| `public/css/style.css`        | `app/globals.css`                    |
| `public/js/fadeInScroll.js`   | `hooks/useScrollAnimation.ts`        |
| `public/js/mobileNav.js`      | `components/Navbar.tsx` (useState)   |
| `MailerInterface`             | `nodemailer` dans l'API route        |
| `addFlash('success', ...)`    | `useState` dans ContactSection       |
| `{{ asset('img/...') }}`      | `/img/...` (dossier public Next.js)  |
| `{{ path('app_default') }}`   | `/`                                  |

---

## Configuration e-mail (.env.local)

```env
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=contact@if-web-dev.com
SMTP_PASS=votre_mot_de_passe
MAIL_FROM=contact@if-web-dev.com
MAIL_TO=contact@if-web-dev.com
MAIL_BCC=ifwebdev@hotmail.com
```

> Pour des e-mails transactionnels en production, pensez à utiliser
> [Resend](https://resend.com) ou [SendGrid](https://sendgrid.com) à la place de SMTP direct.

---

## Déploiement

```bash
npm run build
npm run start
```

Ou déployez directement sur [Vercel](https://vercel.com) (plateforme officielle Next.js) :
```bash
npx vercel
```
