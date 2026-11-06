import type { Metadata } from "next";

/* Textes du site en 3 langues. Une langue = une route : / (fr), /en, /dz.
   La darija est écrite en arabe, la page passe donc en dir="rtl". */

export const LANGS = ["fr", "en", "dz"] as const;
export type Lang = (typeof LANGS)[number];

export const LANG_META: Record<Lang, { href: string; label: string; name: string; htmlLang: string; dir: "ltr" | "rtl"; ogLocale: string }> = {
  fr: { href: "/", label: "FR", name: "Français", htmlLang: "fr", dir: "ltr", ogLocale: "fr_FR" },
  en: { href: "/en", label: "EN", name: "English", htmlLang: "en", dir: "ltr", ogLocale: "en_US" },
  dz: { href: "/dz", label: "DZ", name: "الدارجة", htmlLang: "ar-DZ", dir: "rtl", ogLocale: "ar_DZ" },
};

/* Valeurs envoyées à l'API (app/api/contact/route.ts) : ne pas traduire, seuls les libellés changent. */
export const PRESTATION_VALUES = ["Site Vitrine", "Site E-commerce", "App mobile", "Web app"] as const;

const fr = {
  meta: {
    title: "If-Web-Dev | Sites web et identité visuelle pour artisans et PME",
    description:
      "Sites web qui convertissent : copywriting soigné, SEO intégré et apps web et mobile ergonomiques pour artisans et PME. Prix compétitifs, devis gratuit.",
    ogDescription:
      "Un site bien écrit, bien référencé, et des applications pensées pour vos clients. Tarifs compétitifs, devis gratuit et sans engagement.",
  },
  nav: {
    links: ["Approche", "Méthode", "Offres", "FAQ"],
    cta: "Devis gratuit",
    menu: "Menu",
    langs: "Choisir la langue",
    lang: "Langue",
  },
  hero: {
    eyebrow: "Sites web & identité visuelle · Artisans et PME",
    title: ["Votre ", "Image", " de marque propulsée !"],
    lead: "Je crée le site, le logo et les visuels qui donnent confiance à vos futurs clients. Une présence en ligne professionnelle, sans jargon ni mauvaise surprise.",
    cta: "Demander un devis",
    secondary: "Voir les offres",
    trust: [
      "Devis gratuit et sans engagement",
      "Paiement en plusieurs fois sans frais",
      "Un seul interlocuteur, du début à la fin",
    ],
  },
  skills: {
    eyebrow: "Approche",
    title: "Un site pro, sans y passer vos soirées",
    lead: "Pas de site, ou un site daté ? Vos futurs clients vont voir ailleurs. Je m'occupe de tout pour que votre entreprise inspire confiance dès le premier coup d'œil.",
    orbit: "Compétences : React, Symfony, WordPress et outils d'IA",
    benefits: [
      { title: "Une image qui vous ressemble", text: "Logo, couleurs, visuels : une identité cohérente et mémorable, sur votre site comme sur vos flyers." },
      { title: "Des sites rapides et modernes", text: "WordPress, Next.js ou Symfony selon votre besoin, avec l'IA pour livrer plus vite sans rogner sur la qualité." },
      { title: "Des applications prêtes à booster votre business", text: "Web app ou app mobile sur mesure, pensée pour votre activité et vos clients." },
    ],
  },
  services: {
    eyebrow: "Offres · tarifs de lancement",
    title: "Des tarifs clairs, dès le départ",
    lead: "Trois formules pour démarrer, ajustées ensuite à votre projet dans un devis détaillé.",
    from: "à partir de",
    badge: "Recommandé",
    cta: "Demander un devis",
    aria: "Demander un devis :",
    offers: [
      {
        name: "Boutique en ligne",
        pitch: "Pour vendre vos produits 24 h/24.",
        price: "900 €",
        items: ["Boutique clé en main, facile à gérer", "Jusqu'à 20 produits intégrés", "Adaptée mobile, tablette et ordinateur", "Formulaire de contact", "Référencement (SEO) de base", "Hébergement configuré"],
      },
      {
        name: "Site vitrine",
        pitch: "Pour être trouvé et contacté en ligne.",
        price: "500 €",
        items: ["1 à 5 pages sur mesure", "Adapté mobile, tablette et ordinateur", "Formulaire de contact", "Référencement (SEO) de base", "Hébergement configuré", "Optimisation vitesse et performance"],
      },
      {
        name: "Web app & app mobile",
        pitch: "Pour digitaliser votre activité de A à Z.",
        price: "2 000 €",
        items: ["Application web sur mesure", "App mobile iOS et Android", "Espace client et connexion sécurisée", "Base de données et tableau de bord", "Design UI/UX sur mesure", "Publication App Store et Google Play"],
      },
    ],
    footnote:
      "(*) Tarifs indicatifs, confirmés par un devis. Hors frais d'hébergement et de nom de domaine. Paiement en plusieurs fois sans frais possible.",
  },
  method: {
    eyebrow: "Méthode",
    title: "De l'idée au site en ligne, en 4 étapes",
    lead: "Pour que ça fonctionne, des échanges réguliers et réactifs entre nous sont indispensables.",
    steps: [
      { title: "On échange", text: "Votre activité, vos clients, vos objectifs. Un premier contact gratuit pour cadrer le besoin." },
      { title: "Devis clair", text: "Un prix, un contenu et un délai fixés noir sur blanc avant de commencer. Pas de surprise." },
      { title: "Création", text: "Maquette, visuels, textes puis développement. Vous validez à chaque étape." },
      { title: "Mise en ligne", text: "Hébergement, nom de domaine, référencement : je m'occupe de la technique, vous récoltez les contacts." },
    ],
  },
  // ⚠ TÉMOIGNAGES FICTIFS (démo client) : NE PAS mettre en prod tant que ce ne sont pas de vrais avis.
  // Publier de faux avis présentés comme réels = pratique commerciale trompeuse (Code de la consommation).
  // Avec de vrais avis : remplacer `items` dans les trois langues.
  testimonials: {
    eyebrow: "Témoignages",
    title: "Ils m'ont fait confiance",
    lead: "Artisans, commerçants et PME : ce qu'ils retiennent de notre collaboration.",
    rating: "Note : 5 sur 5",
    items: [
      { name: "Karim B.", role: "Plombier-chauffagiste, Lyon", quote: "Je n'avais aucun site. Trois semaines plus tard, j'avais un site propre et mes premiers appels via Google. Tout m'a été expliqué simplement." },
      { name: "Sophie M.", role: "Fleuriste, Annecy", quote: "Le logo et les cartes de visite ont changé l'image de ma boutique. Mes clientes m'en parlent encore." },
      { name: "Yacine D.", role: "Gérant de garage, Alger", quote: "Devis clair, délai respecté, aucune surprise sur la facture. Exactement ce que je cherchais." },
      { name: "Claire L.", role: "Créatrice de bijoux, Bordeaux", quote: "Ma boutique en ligne tourne toute seule. J'ajoute mes produits sans rien demander à personne." },
      { name: "Mehdi R.", role: "Menuisier, Marseille", quote: "Il a écrit les textes à ma place et ça se sent : les demandes de devis sont bien plus précises." },
      { name: "Nadia K.", role: "Salon de coiffure, Oran", quote: "Réactif sur WhatsApp, à l'écoute, et le site est superbe sur téléphone." },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Vos questions, mes réponses",
    items: [
      { q: "Je n'ai ni logo ni textes, est-ce un problème ?", a: "Non. Je peux créer votre identité visuelle et rédiger des textes pensés pour vos clients. Vous n'avez qu'à me parler de votre métier." },
      { q: "Combien de temps faut-il pour créer mon site ?", a: "Cela dépend du projet. Le délai est fixé ensemble dans le devis, avant de commencer." },
      { q: "L'hébergement et le nom de domaine sont-ils inclus ?", a: "Je m'occupe de leur mise en place, mais leurs frais annuels restent à votre charge et ne sont pas compris dans les tarifs affichés." },
      { q: "Puis-je payer en plusieurs fois ?", a: "Oui, le paiement en plusieurs fois sans frais est possible. On en convient ensemble au moment du devis." },
      { q: "Pourrai-je modifier mon site moi-même ?", a: "Avec WordPress, oui : vous gérez vos textes, photos et produits depuis une interface simple. Pour un site sur mesure, on définit ensemble ce qui doit rester modifiable." },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Parlons de votre projet",
    lead: "Quelques lignes suffisent : je reviens vers vous avec mes questions ou une proposition de devis, gratuitement et sans engagement.",
    success: "Votre message a bien été envoyé !",
    error: "Une erreur s'est produite. Veuillez réessayer.",
    close: "Fermer",
    fullName: "Nom et prénom",
    email: "E-mail",
    prestation: "Prestation souhaitée",
    message: "Votre projet en quelques lignes",
    choose: "Choisissez une prestation",
    prestations: ["Site vitrine", "E-commerce", "App mobile", "Web app"],
    errors: {
      nameMin: "Votre nom et prénom doivent faire au moins 2 caractères.",
      nameMax: "Votre nom et prénom ne doivent pas dépasser 50 caractères.",
      emailRequired: "L'e-mail est obligatoire.",
      emailInvalid: "Veuillez saisir un e-mail valide.",
      prestation: "Veuillez choisir une prestation.",
      messageMin: "Décrivez votre projet en au moins 50 caractères.",
      messageMax: "Votre message ne doit pas dépasser 2000 caractères.",
    },
    sending: "Envoi en cours…",
    submit: "Envoyer ma demande",
  },
  footer: {
    sitemap: "Plan du site",
    links: ["Approche", "Méthode", "Offres", "FAQ", "Contact"],
    social: "Autour du web",
    about: "À propos",
    aboutText:
      "Développeur et designer freelance, j'aide les artisans, PME et industriels à gagner en visibilité avec des sites et des visuels qui donnent envie de les appeler.",
    mail: "Envoyer un e-mail",
    linkedin: "Profil LinkedIn",
    whatsapp: "Contacter sur WhatsApp",
    whatsappText: "Bonjour, je souhaite un devis pour mon projet web.",
  },
};

export type Dict = typeof fr;

const en: Dict = {
  meta: {
    title: "If-Web-Dev | Websites and visual identity for tradespeople and small businesses",
    description:
      "Websites that convert: sharp copywriting, built-in SEO and user-friendly web & mobile apps for small businesses. Competitive prices, free quote.",
    ogDescription:
      "A well-written, well-ranked website and apps designed around your customers. Competitive pricing, free no-obligation quote.",
  },
  nav: {
    links: ["Approach", "Process", "Pricing", "FAQ"],
    cta: "Free quote",
    menu: "Menu",
    langs: "Choose language",
    lang: "Language",
  },
  hero: {
    eyebrow: "Websites & visual identity · Trades and small businesses",
    title: ["Your ", "brand", " image, supercharged!"],
    lead: "I build the website, logo and visuals that make future customers trust you. A professional online presence, no jargon, no nasty surprises.",
    cta: "Get a quote",
    secondary: "See pricing",
    trust: ["Free, no-obligation quote", "Interest-free instalments", "One point of contact, start to finish"],
  },
  skills: {
    eyebrow: "Approach",
    title: "A professional website, without losing your evenings",
    lead: "No website, or an outdated one? Your future customers go elsewhere. I handle everything so your business earns trust at first glance.",
    orbit: "Skills: React, Symfony, WordPress and AI tools",
    benefits: [
      { title: "A look that feels like you", text: "Logo, colours, visuals: a consistent, memorable identity, on your website and on your flyers." },
      { title: "Fast, modern websites", text: "WordPress, Next.js or Symfony depending on your needs, with AI to deliver faster without cutting corners." },
      { title: "Apps ready to boost your business", text: "Custom web or mobile app, built around your business and your customers." },
    ],
  },
  services: {
    eyebrow: "Pricing · launch rates",
    title: "Clear pricing from day one",
    lead: "Three packages to get started, then tailored to your project in a detailed quote.",
    from: "from",
    badge: "Recommended",
    cta: "Get a quote",
    aria: "Get a quote:",
    offers: [
      {
        name: "Online store",
        pitch: "Sell your products 24/7.",
        price: "€900",
        items: ["Turnkey store, easy to manage", "Up to 20 products added", "Works on mobile, tablet and desktop", "Contact form", "Basic SEO", "Hosting set up"],
      },
      {
        name: "Business website",
        pitch: "Get found and contacted online.",
        price: "€500",
        items: ["1 to 5 custom pages", "Works on mobile, tablet and desktop", "Contact form", "Basic SEO", "Hosting set up", "Speed and performance optimisation"],
      },
      {
        name: "Web app & mobile app",
        pitch: "Take your business fully digital.",
        price: "€2,000",
        items: ["Custom web application", "iOS and Android mobile app", "Client area with secure login", "Database and admin dashboard", "Custom UI/UX design", "App Store and Google Play release"],
      },
    ],
    footnote:
      "(*) Indicative prices, confirmed in a quote. Hosting and domain name fees not included. Interest-free instalments available.",
  },
  method: {
    eyebrow: "Process",
    title: "From idea to live website, in 4 steps",
    lead: "For this to work, regular and responsive communication between us is essential.",
    steps: [
      { title: "We talk", text: "Your business, your customers, your goals. A free first call to scope what you need." },
      { title: "Clear quote", text: "Price, scope and timeline agreed in writing before we start. No surprises." },
      { title: "Design & build", text: "Mockup, visuals, copy, then development. You sign off at every step." },
      { title: "Go live", text: "Hosting, domain, SEO: I handle the technical side, you collect the leads." },
    ],
  },
  testimonials: {
    eyebrow: "Testimonials",
    title: "They trusted me",
    lead: "Tradespeople, shop owners and small businesses: what they remember from working together.",
    rating: "Rating: 5 out of 5",
    items: [
      { name: "Karim B.", role: "Plumber & heating engineer, Lyon", quote: "I had no website at all. Three weeks later I had a clean site and my first calls from Google. Everything was explained simply." },
      { name: "Sophie M.", role: "Florist, Annecy", quote: "The logo and business cards changed how my shop is seen. My customers still mention it." },
      { name: "Yacine D.", role: "Garage owner, Algiers", quote: "Clear quote, deadline met, no surprises on the invoice. Exactly what I was looking for." },
      { name: "Claire L.", role: "Jewellery designer, Bordeaux", quote: "My online store runs itself. I add products without needing anyone's help." },
      { name: "Mehdi R.", role: "Carpenter, Marseille", quote: "He wrote the copy for me and it shows: quote requests are far more precise now." },
      { name: "Nadia K.", role: "Hair salon, Oran", quote: "Quick to reply on WhatsApp, a good listener, and the site looks great on mobile." },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Your questions, answered",
    items: [
      { q: "I have no logo and no copy. Is that a problem?", a: "Not at all. I can create your visual identity and write copy aimed at your customers. Just tell me about your trade." },
      { q: "How long does it take to build my website?", a: "It depends on the project. We agree on the timeline in the quote, before starting." },
      { q: "Are hosting and the domain name included?", a: "I set them up for you, but their yearly fees are paid by you and aren't included in the listed prices." },
      { q: "Can I pay in instalments?", a: "Yes, interest-free instalments are available. We agree on them together when drawing up the quote." },
      { q: "Will I be able to edit my website myself?", a: "With WordPress, yes: you manage your text, photos and products from a simple dashboard. For a custom site, we decide together what stays editable." },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's talk about your project",
    lead: "A few lines are enough: I'll get back to you with questions or a quote proposal, free and with no obligation.",
    success: "Your message has been sent!",
    error: "Something went wrong. Please try again.",
    close: "Close",
    fullName: "Full name",
    email: "Email",
    prestation: "Service needed",
    message: "Your project in a few lines",
    choose: "Choose a service",
    prestations: ["Business website", "E-commerce", "Mobile app", "Web app"],
    errors: {
      nameMin: "Your full name must be at least 2 characters.",
      nameMax: "Your full name must not exceed 50 characters.",
      emailRequired: "Email is required.",
      emailInvalid: "Please enter a valid email.",
      prestation: "Please choose a service.",
      messageMin: "Describe your project in at least 50 characters.",
      messageMax: "Your message must not exceed 2000 characters.",
    },
    sending: "Sending…",
    submit: "Send my request",
  },
  footer: {
    sitemap: "Sitemap",
    links: ["Approach", "Process", "Pricing", "FAQ", "Contact"],
    social: "Around the web",
    about: "About",
    aboutText:
      "Freelance developer and designer, I help tradespeople, small businesses and manufacturers get noticed with websites and visuals that make people want to call them.",
    mail: "Send an email",
    linkedin: "LinkedIn profile",
    whatsapp: "Message on WhatsApp",
    whatsappText: "Hello, I'd like a quote for my web project.",
  },
};

const dz: Dict = {
  meta: {
    title: "If-Web-Dev | مواقع ويب و لوقو للحرفيين، التجار و الشركات الصغيرة",
    description:
      "مواقع تجيبلك الزبائن: نصوص مكتوبة مليح، SEO باش يلقاوك في Google، و تطبيقات ويب و موبايل ساهلة في الاستعمال. أسعار معقولة و الدوفي مجاني.",
    ogDescription:
      "موقع مكتوب مليح و يبان في Google، و تطبيقات مخدومة على حساب زبائنك. أسعار معقولة، الدوفي مجاني و بلا التزام.",
  },
  nav: {
    links: ["واش نقدملك", "كيفاش نخدمو", "الأسعار", "الأسئلة"],
    cta: "دوفي مجاني",
    menu: "القائمة",
    langs: "اختار اللغة",
    lang: "اللغة",
  },
  hero: {
    eyebrow: "مواقع ويب و هوية بصرية · للحرفيين، التجار و الشركات الصغيرة",
    title: ["خلّي ", "ماركتك", " تبان و تفرض روحها!"],
    lead: "نصاوبلك الموقع، اللوقو و التصاميم اللي يخليو الزبائن يثقو فيك من النظرة الأولى. خدمة احترافية، بلا هدرة تقنية و بلا مفاجآت.",
    cta: "اطلب الدوفي",
    secondary: "شوف الأسعار",
    trust: ["الدوفي مجاني و بلا التزام", "الخلاص بالتقسيط بلا زيادة", "نتبع معاك أنا شخصيا من اللول للتالي"],
  },
  skills: {
    eyebrow: "واش نقدملك",
    title: "موقع احترافي، و انت تلاهى بخدمتك",
    lead: "ما عندكش موقع، ولا عندك واحد قديم؟ الزبون يروح عند غيرك. أنا نتكفل بكلش، باه البيزنس تاعك يعطي الثقة من أول نظرة.",
    orbit: "المهارات: React، Symfony، WordPress و أدوات الذكاء الاصطناعي",
    benefits: [
      { title: "صورة تشبهلك", text: "لوقو، ألوان، تصاميم: هوية وحدة تبقى في بال الزبون، في الموقع، في الفيسبوك و في الفلايرز." },
      { title: "مواقع سريعة و عصرية", text: "WordPress، Next.js ولا Symfony على حسب واش تحتاج، مع الذكاء الاصطناعي باه نسلّم دغيا بلا ما نقص من الجودة." },
      { title: "تطبيقات باه تكبّر البيزنس تاعك", text: "ويب آب ولا تطبيق موبايل على حسابك، مخدوم على حسب الخدمة تاعك و الزبائن تاعك." },
    ],
  },
  services: {
    eyebrow: "الأسعار · عروض الانطلاق",
    title: "أسعار واضحة من اللول",
    lead: "ثلاث عروض باه تبدا، و من بعد نضبطوها على حسب المشروع تاعك في دوفي مفصّل.",
    from: "ابتداءً من",
    badge: "الأكثر طلبا",
    cta: "اطلب الدوفي",
    aria: "اطلب الدوفي:",
    offers: [
      {
        name: "متجر إلكتروني",
        pitch: "باه تبيع سلعتك 24/24 و توصلك الطلبيات حتى و انت راقد.",
        price: "60 000 DA",
        items: ["متجر واجد، ساهل في التسيير", "حتى 20 منتوج ندخلهملك", "يمشي على التيليفون، الطابلات و الكمبيوتر", "فورمولار باه يتصلو بيك", "تظهر في Google (SEO أساسي)", "الاستضافة مضبوطة"],
      },
      {
        name: "موقع فيترين",
        pitch: "باه يلقاوك في Google و يعيطولك.",
        price: "20 000 DA",
        items: ["من 1 حتى 5 صفحات على حسابك", "يمشي على التيليفون، الطابلات و الكمبيوتر", "فورمولار باه يتصلو بيك", "تظهر في Google (SEO أساسي)", "الاستضافة مضبوطة", "موقع خفيف و سريع"],
      },
      {
        name: "ويب آب + تطبيق موبايل",
        pitch: "باه تدير الخدمة تاعك كاملة في الديجيتال.",
        price: "100 000 DA",
        items: ["تطبيق ويب على حسابك", "تطبيق موبايل iOS و Android", "فضاء خاص للزبائن مع كونيكسيون مأمّنة", "قاعدة بيانات و لوحة تحكم", "ديزاين UI/UX على حسابك", "ننشرهولك في App Store و Google Play"],
      },
    ],
    footnote:
      "(*) أسعار تقريبية، تتأكد في الدوفي. الاستضافة و اسم الدومين ماشي داخلين. الخلاص بالتقسيط بلا زيادة ممكن.",
  },
  method: {
    eyebrow: "كيفاش نخدمو",
    title: "من الفكرة حتى الموقع يطلع أونلاين، في 4 مراحل",
    lead: "باه تمشي الخدمة مليح، لازم نبقاو على تواصل و نجاوبو بعضانا دغيا.",
    steps: [
      { title: "نهدرو مع بعض", text: "الخدمة تاعك، الزبائن تاعك، واش حاب توصل. أول هدرة مجانية باه نفهمو واش تحتاج." },
      { title: "دوفي واضح", text: "السعر، واش داخل و المدة، كلش مكتوب قبل ما نبداو. بلا مفاجآت." },
      { title: "الخدمة", text: "الماكيت، التصاميم، النصوص و من بعد البرمجة. انت توافق في كل مرحلة." },
      { title: "يطلع أونلاين", text: "الاستضافة، الدومين، Google: أنا نتكفل بالتقنية، و انت تستقبل الزبائن." },
    ],
  },
  testimonials: {
    eyebrow: "آراء الزبائن",
    title: "وثقو فيا",
    lead: "حرفيين، تجار و شركات صغيرة: واش قالو على الخدمة معايا.",
    rating: "التقييم: 5 على 5",
    items: [
      { name: "كريم ب.", role: "بلومبي، ليون", quote: "ما كانش عندي موقع. ثلاث سمانات من بعد، ولّى عندي موقع نقي و بداو يعيطولي من Google. فهّمني كلش بالساهل." },
      { name: "صوفي م.", role: "بائعة ورد، أنسي", quote: "اللوقو و كارط الفيزيت بدّلو الصورة تاع الحانوت. الزبونات مازال يهدرولي عليهم." },
      { name: "ياسين د.", role: "مول قاراج، الجزاير", quote: "دوفي واضح، الوقت محترم، و حتى مفاجأة في الفاتورة. هذا بالضبط واش كنت نحوّس عليه." },
      { name: "كلير ل.", role: "مصممة مجوهرات، بوردو", quote: "المتجر تاعي يخدم وحدو. نزيد السلعة بلا ما نحتاج حتى واحد." },
      { name: "مهدي ر.", role: "نجّار، مرسيليا", quote: "كتبلي النصوص و هذا باين: الناس اللي يطلبو الدوفي ولاو يعرفو واش حابين بالضبط." },
      { name: "نادية ك.", role: "صالون حلاقة، وهران", quote: "يجاوب دغيا في WhatsApp، يسمعلك، و الموقع يجي شباب في التيليفون." },
    ],
  },
  faq: {
    eyebrow: "الأسئلة",
    title: "عندك سؤال؟ هاك الجواب",
    items: [
      { q: "ما عنديش لا لوقو لا نصوص، كاين مشكل؟", a: "لا، ماكان حتى مشكل. نصاوبلك اللوقو و الهوية البصرية و نكتبلك نصوص تهدر للزبائن تاعك. انت غير احكيلي على خدمتك." },
      { q: "شحال يدّي الوقت باه يكمل الموقع؟", a: "على حسب المشروع. المدة نحددوها مع بعض في الدوفي، قبل ما نبداو." },
      { q: "الاستضافة و اسم الدومين داخلين في السعر؟", a: "أنا نتكفل نركّبهملك، بصح الخلاص تاعهم كل عام عليك و ماشي داخلين في الأسعار اللي راهي هنا." },
      { q: "نقدر نخلص بالتقسيط؟", a: "إيه، الخلاص بالتقسيط بلا زيادة ممكن. نتفاهمو عليه وقت الدوفي." },
      { q: "نقدر نبدّل في الموقع وحدي؟", a: "مع WordPress إيه: تبدّل النصوص، التصاور و السلعة من واجهة ساهلة. للموقع على حسابك، نحددو مع بعض واش تقدر تبدّل وحدك." },
    ],
  },
  contact: {
    eyebrow: "اتصل بيا",
    title: "أرواح نهدرو على المشروع تاعك",
    lead: "كتبلي غير شوية سطور: نرجعلك بالأسئلة تاعي ولا بدوفي، مجانا و بلا التزام.",
    success: "الميساج تاعك وصل!",
    error: "كاين مشكل. عاود جرّب.",
    close: "سكّر",
    fullName: "الاسم و اللقب",
    email: "الإيمايل",
    prestation: "واش حاب تصاوب؟",
    message: "احكيلي على المشروع تاعك في شوية سطور",
    choose: "اختار الخدمة",
    prestations: ["موقع فيترين", "متجر إلكتروني", "تطبيق موبايل", "ويب آب"],
    errors: {
      nameMin: "الاسم و اللقب لازم يكونو على الأقل 2 حروف.",
      nameMax: "الاسم و اللقب ما لازمش يفوتو 50 حرف.",
      emailRequired: "الإيمايل لازم.",
      emailInvalid: "دخّل إيمايل صحيح.",
      prestation: "اختار الخدمة.",
      messageMin: "احكيلي على المشروع تاعك في 50 حرف على الأقل.",
      messageMax: "الميساج ما لازمش يفوت 2000 حرف.",
    },
    sending: "راهو يتبعث…",
    submit: "ابعث الطلب",
  },
  footer: {
    sitemap: "خريطة الموقع",
    links: ["واش نقدملك", "كيفاش نخدمو", "الأسعار", "الأسئلة", "اتصل بيا"],
    social: "تلقاني هنا",
    about: "شكون أنا",
    aboutText:
      "مطوّر و ديزاينر فريلانس، نعاون الحرفيين، التجار، الشركات الصغيرة و الصناعيين باه يبانو أكثر، بمواقع و تصاميم تخلي الناس يعيطولهم.",
    mail: "ابعثلي إيمايل",
    linkedin: "البروفيل تاعي في LinkedIn",
    whatsapp: "كلّمني في WhatsApp",
    whatsappText: "السلام عليكم، حاب دوفي لمشروع ويب.",
  },
};

export const DICTS: Record<Lang, Dict> = { fr, en, dz };

export const SITE = "https://www.if-web-dev.com";

export function pageMetadata(lang: Lang): Metadata {
  const t = DICTS[lang].meta;
  const url = SITE + (lang === "fr" ? "/" : LANG_META[lang].href);
  return {
    title: t.title,
    description: t.description,
    openGraph: {
      type: "website",
      siteName: "If-web-dev",
      locale: LANG_META[lang].ogLocale,
      url,
      title: t.title,
      description: t.ogDescription,
      images: [{ url: `${SITE}/og/og-${lang}.jpg`, width: 1200, height: 630, alt: t.title }],
    },
    twitter: { card: "summary_large_image", title: t.title, description: t.ogDescription, images: [`${SITE}/og/og-${lang}.jpg`] },
    alternates: {
      canonical: url,
      languages: { fr: `${SITE}/`, en: `${SITE}/en`, "ar-DZ": `${SITE}/dz`, "x-default": `${SITE}/` },
    },
  };
}
