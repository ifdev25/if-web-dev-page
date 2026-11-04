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
export const PRESTATION_VALUES = ["Visuel ou Logo", "Site Vitrine", "Site E-commerce"] as const;

const fr = {
  meta: {
    title: "If-Web-Dev | Sites web et identité visuelle pour artisans et PME",
    description:
      "Freelance en création de sites vitrines, boutiques en ligne, logos et visuels. Une présence en ligne professionnelle qui donne confiance à vos clients. Devis gratuit.",
    ogDescription:
      "Votre image de marque propulsée. Site vitrine, boutique en ligne, logo et visuels sur mesure. Devis gratuit et sans engagement.",
  },
  nav: {
    links: ["Approche", "Offres", "Méthode", "FAQ"],
    cta: "Devis gratuit",
    menu: "Menu",
    langs: "Choisir la langue",
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
      { title: "Des textes qui font agir", text: "Copywriting et référencement pensés pour transformer vos visiteurs en demandes de devis." },
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
        name: "Logo & visuels",
        pitch: "Pour être reconnu au premier regard.",
        price: "50 €",
        items: ["Création de logo", "Flyers et affiches", "Cartes de visite", "Bannières et visuels réseaux sociaux", "Design moderne, 100 % sur mesure"],
      },
      {
        name: "Site vitrine",
        pitch: "Pour être trouvé et contacté en ligne.",
        price: "500 €",
        items: ["1 à 5 pages, WordPress ou sur mesure", "Adapté mobile, tablette et ordinateur", "Formulaire de contact", "Référencement (SEO) de base", "Hébergement O2switch configuré", "Optimisation vitesse et performance"],
      },
      {
        name: "Boutique en ligne",
        pitch: "Pour vendre vos produits 24 h/24.",
        price: "900 €",
        items: ["Boutique WordPress + WooCommerce", "Jusqu'à 20 produits intégrés", "Adaptée mobile, tablette et ordinateur", "Formulaire de contact", "Référencement (SEO) de base", "Hébergement O2switch configuré"],
      },
    ],
    footnote:
      "(*) Tarifs indicatifs, confirmés par un devis. Hors frais d'hébergement et de nom de domaine. Paiement en plusieurs fois sans frais possible.",
  },
  method: {
    eyebrow: "Méthode",
    title: "De l'idée au site en ligne, en 4 étapes",
    steps: [
      { title: "On échange", text: "Votre activité, vos clients, vos objectifs. Un premier contact gratuit pour cadrer le besoin." },
      { title: "Devis clair", text: "Un prix, un contenu et un délai fixés noir sur blanc avant de commencer. Pas de surprise." },
      { title: "Création", text: "Maquette, visuels, textes puis développement. Vous validez à chaque étape." },
      { title: "Mise en ligne", text: "Hébergement, nom de domaine, référencement : je m'occupe de la technique, vous récoltez les contacts." },
    ],
  },
  // ⚠ TÉMOIGNAGES FICTIFS (maquette) : à remplacer par de vrais avis clients avant la mise en prod.
  // Publier de faux avis présentés comme réels = pratique commerciale trompeuse (Code de la consommation).
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
    prestations: ["Logo & visuels", "Site vitrine", "Boutique en ligne"],
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
    links: ["Approche", "Offres", "Méthode", "FAQ", "Contact"],
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
      "Freelance web designer: business websites, online stores, logos and visuals. A professional online presence your customers can trust. Free quote.",
    ogDescription:
      "Your brand image, supercharged. Business website, online store, logo and custom visuals. Free, no-obligation quote.",
  },
  nav: {
    links: ["Approach", "Pricing", "Process", "FAQ"],
    cta: "Free quote",
    menu: "Menu",
    langs: "Choose language",
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
      { title: "Copy that drives action", text: "Copywriting and SEO designed to turn visitors into quote requests." },
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
        name: "Logo & visuals",
        pitch: "Be recognised at first sight.",
        price: "€50",
        items: ["Logo design", "Flyers and posters", "Business cards", "Banners and social media visuals", "Modern, 100% custom design"],
      },
      {
        name: "Business website",
        pitch: "Get found and contacted online.",
        price: "€500",
        items: ["1 to 5 pages, WordPress or custom-built", "Works on mobile, tablet and desktop", "Contact form", "Basic SEO", "O2switch hosting set up", "Speed and performance optimisation"],
      },
      {
        name: "Online store",
        pitch: "Sell your products 24/7.",
        price: "€900",
        items: ["WordPress + WooCommerce store", "Up to 20 products added", "Works on mobile, tablet and desktop", "Contact form", "Basic SEO", "O2switch hosting set up"],
      },
    ],
    footnote:
      "(*) Indicative prices, confirmed in a quote. Hosting and domain name fees not included. Interest-free instalments available.",
  },
  method: {
    eyebrow: "Process",
    title: "From idea to live website, in 4 steps",
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
    prestations: ["Logo & visuals", "Business website", "Online store"],
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
    links: ["Approach", "Pricing", "Process", "FAQ", "Contact"],
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
    title: "If-Web-Dev | سيتات ويب و هوية بصرية للحرفيين و الشركات الصغيرة",
    description:
      "فريلانس في تصميم سيتات فيترين، بوتيكات أونلاين، لوقو و فيزيال. حضور احترافي على الانترنت يخلي الزبائن يثقو فيك. الدوفي بلاش.",
    ogDescription:
      "نطلّعو الصورة تاع الماركة تاعك للفوق. سيت فيترين، بوتيك أونلاين، لوقو و فيزيال على المقاس. الدوفي بلاش و بلا التزام.",
  },
  nav: {
    links: ["واش نقدملك", "العروض", "كيفاش نخدمو", "الأسئلة"],
    cta: "دوفي بلاش",
    menu: "المنيو",
    langs: "اختار اللغة",
  },
  hero: {
    eyebrow: "سيتات ويب و هوية بصرية · للحرفيين و الشركات الصغيرة",
    title: ["نطلّعو ", "الصورة", " تاع الماركة تاعك للفوق!"],
    lead: "نصاوبلك السيت، اللوقو و الفيزيال اللي يخليو الزبائن يثقو فيك. حضور احترافي على الانترنت، بلا تخلويض و بلا مفاجآت.",
    cta: "اطلب دوفي",
    secondary: "شوف العروض",
    trust: ["الدوفي بلاش و بلا التزام", "تخلص على بزاف المرات بلا زيادة", "واحد برك يتبع معاك من البداية للنهاية"],
  },
  skills: {
    eyebrow: "واش نقدملك",
    title: "سيت احترافي، بلا ما تضيّع سهراتك فيه",
    lead: "ما عندكش سيت، ولا السيت تاعك قديم؟ الزبائن يروحو لغيرك. أنا نتكفل بكلش باه الشركة تاعك تعطي الثقة من أول نظرة.",
    orbit: "المهارات: React، Symfony، WordPress و أدوات الذكاء الاصطناعي",
    benefits: [
      { title: "صورة تشبهلك", text: "لوقو، ألوان، فيزيال: هوية متناسقة تبقى في البال، في السيت تاعك و في الفلايرز." },
      { title: "سيتات سريعة و عصرية", text: "WordPress، Next.js ولا Symfony على حساب واش تحتاج، مع الذكاء الاصطناعي باه نسلّم أسرع بلا ما نقص من الجودة." },
      { title: "كتابة تخلي الناس يتحركو", text: "كوبيرايتينغ و SEO مخدومين باه الزوار يوليو طلبات دوفي." },
    ],
  },
  services: {
    eyebrow: "العروض · أسعار الانطلاق",
    title: "أسعار واضحة من البداية",
    lead: "ثلاث عروض باه تبدا، و من بعد نعدلوها على حساب المشروع تاعك في دوفي مفصّل.",
    from: "ابتداءً من",
    badge: "ننصح بيه",
    cta: "اطلب دوفي",
    aria: "اطلب دوفي:",
    offers: [
      {
        name: "لوقو و فيزيال",
        pitch: "باه يعرفوك من أول نظرة.",
        price: "50 €",
        items: ["تصميم لوقو", "فلايرز و أفيشات", "كروت فيزيت", "بانيرات و فيزيال للسوشيال ميديا", "ديزاين عصري، 100% على المقاس"],
      },
      {
        name: "سيت فيترين",
        pitch: "باه يلقاوك و يتواصلو معاك على الانترنت.",
        price: "500 €",
        items: ["من 1 حتى 5 صفحات، WordPress ولا على المقاس", "يمشي على التيليفون، التابلات و الكمبيوتر", "فورمولار تاع الاتصال", "SEO أساسي", "هيبرجمون O2switch مضبوط", "تحسين السرعة و الأداء"],
      },
      {
        name: "بوتيك أونلاين",
        pitch: "باه تبيع السلعة تاعك 24/24.",
        price: "900 €",
        items: ["بوتيك WordPress + WooCommerce", "حتى 20 منتوج مدخّلين", "تمشي على التيليفون، التابلات و الكمبيوتر", "فورمولار تاع الاتصال", "SEO أساسي", "هيبرجمون O2switch مضبوط"],
      },
    ],
    footnote:
      "(*) أسعار تقريبية، تتأكد في الدوفي. بلا مصاريف الهيبرجمون و اسم الدومين. تقدر تخلص على بزاف المرات بلا زيادة.",
  },
  method: {
    eyebrow: "كيفاش نخدمو",
    title: "من الفكرة حتى السيت أونلاين، في 4 مراحل",
    steps: [
      { title: "نهدرو", text: "النشاط تاعك، الزبائن، الأهداف. أول اتصال بلاش باه نفهمو واش تحتاج." },
      { title: "دوفي واضح", text: "السعر، المحتوى و المدة مكتوبين بالأبيض و الأسود قبل ما نبداو. بلا مفاجآت." },
      { title: "التصميم", text: "ماكيت، فيزيال، نصوص و من بعد البرمجة. انت توافق في كل مرحلة." },
      { title: "الإطلاق", text: "الهيبرجمون، الدومين، SEO: أنا نتكفل بالتقنية، و انت تجمع الزبائن." },
    ],
  },
  testimonials: {
    eyebrow: "آراء الزبائن",
    title: "وثقو فيا",
    lead: "حرفيين، تجار و شركات صغيرة: واش قعدلهم من الخدمة معايا.",
    rating: "التقييم: 5 على 5",
    items: [
      { name: "كريم ب.", role: "بلومبي، ليون", quote: "ما كانش عندي سيت. من بعد ثلاث سمانات، ولّى عندي سيت نقي و جاوني أول التيليفونات من Google. فهّمني كلش بالساهل." },
      { name: "صوفي م.", role: "بائعة ورد، أنسي", quote: "اللوقو و كروت الفيزيت بدّلو الصورة تاع الحانوت تاعي. الزبونات مازال يهدرولي عليهم." },
      { name: "ياسين د.", role: "مول قاراج، الجزاير", quote: "دوفي واضح، الوقت محترم، و حتى مفاجأة في الفاتورة. هذا واش كنت نحوس عليه." },
      { name: "كلير ل.", role: "مصممة مجوهرات، بوردو", quote: "البوتيك أونلاين تاعي تخدم وحدها. نزيد المنتوجات بلا ما نطلب حتى واحد." },
      { name: "مهدي ر.", role: "نجّار، مرسيليا", quote: "كتبلي النصوص و هذا باين: طلبات الدوفي ولاو دقاق بزاف." },
      { name: "نادية ك.", role: "صالون حلاقة، وهران", quote: "يجاوب دغيا في WhatsApp، يسمعلك، و السيت يجي شباب في التيليفون." },
    ],
  },
  faq: {
    eyebrow: "الأسئلة",
    title: "الأسئلة تاعكم، و الأجوبة تاعي",
    items: [
      { q: "ما عنديش لا لوقو لا نصوص، كاين مشكل؟", a: "لا. نقدر نصاوبلك الهوية البصرية و نكتب نصوص مخدومة للزبائن تاعك. انت غير احكيلي على الخدمة تاعك." },
      { q: "شحال من وقت يلزم باه نصاوب السيت؟", a: "على حساب المشروع. المدة نحددوها مع بعض في الدوفي، قبل ما نبداو." },
      { q: "الهيبرجمون و اسم الدومين داخلين في السعر؟", a: "أنا نتكفل بالتركيب تاعهم، بصح المصاريف تاع العام عليك و ما راهمش داخلين في الأسعار المعروضة." },
      { q: "نقدر نخلص على بزاف المرات؟", a: "إيه، الخلاص على بزاف المرات بلا زيادة ممكن. نتفاهمو عليه وقت الدوفي." },
      { q: "نقدر نبدّل السيت وحدي؟", a: "مع WordPress إيه: تتحكم في النصوص، التصاور و المنتوجات من واجهة ساهلة. للسيت على المقاس، نحددو مع بعض واش يقعد قابل للتبديل." },
    ],
  },
  contact: {
    eyebrow: "اتصل بيا",
    title: "أرواح نهدرو على المشروع تاعك",
    lead: "شوية سطور يكفيو: نرجعلك بالأسئلة تاعي ولا باقتراح دوفي، بلاش و بلا التزام.",
    success: "الميساج تاعك تبعث مليح!",
    error: "صرا مشكل. عاود جرّب.",
    close: "سكّر",
    fullName: "الاسم و اللقب",
    email: "الإيمايل",
    prestation: "الخدمة اللي حاب",
    message: "المشروع تاعك في شوية سطور",
    choose: "اختار خدمة",
    prestations: ["لوقو و فيزيال", "سيت فيترين", "بوتيك أونلاين"],
    errors: {
      nameMin: "الاسم و اللقب لازم يكونو على الأقل 2 حروف.",
      nameMax: "الاسم و اللقب ما لازمش يفوتو 50 حرف.",
      emailRequired: "الإيمايل لازم.",
      emailInvalid: "دخّل إيمايل صحيح.",
      prestation: "اختار خدمة.",
      messageMin: "اشرح المشروع تاعك في 50 حرف على الأقل.",
      messageMax: "الميساج ما لازمش يفوت 2000 حرف.",
    },
    sending: "راه يتبعث…",
    submit: "ابعث الطلب",
  },
  footer: {
    sitemap: "خريطة السيت",
    links: ["واش نقدملك", "العروض", "كيفاش نخدمو", "الأسئلة", "اتصل بيا"],
    social: "على الويب",
    about: "شكون أنا",
    aboutText:
      "مطوّر و ديزاينر فريلانس، نعاون الحرفيين، الشركات الصغيرة و الصناعيين باه يبانو أكثر بسيتات و فيزيال يخليو الناس يعيطولهم.",
    mail: "ابعث إيمايل",
    linkedin: "البروفيل في LinkedIn",
    whatsapp: "تواصل في WhatsApp",
    whatsappText: "السلام، حاب دوفي للمشروع تاعي تاع الويب.",
  },
};

export const DICTS: Record<Lang, Dict> = { fr, en, dz };

const SITE = "https://www.if-web-dev.com";

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
      images: [{ url: `${SITE}/img/thumbnail.png`, width: 1200, height: 600 }],
    },
    alternates: {
      canonical: url,
      languages: { fr: `${SITE}/`, en: `${SITE}/en`, "ar-DZ": `${SITE}/dz`, "x-default": `${SITE}/` },
    },
  };
}
