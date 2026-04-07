export const cs = {
  meta: {
    title: "Men's edit — Osobní styling pro muže",
    description:
      "Men's edit je osobní styling zaměřený výhradně na muže. Pomáhám mužům sestavit šatník, který mluví za ně.",
    ogImage: "/images/og.jpg",
  },
  nav: {
    about: "O mně",
    services: "Služby",
    portfolio: "Portfolio",
    contact: "Kontakt",
    langSwitch: "EN",
    langSwitchHref: "/en/",
    menuOpen: "Otevřít menu",
    menuClose: "Zavřít menu",
  },
  hero: {
    headlinePrefix: "Váš",
    headlineWords: ["styl.", "příběh.", "život.", "víkend.", "šatník.", "výraz.", "obraz.", "dojem."],
    subheadline:
      "Osobní styling pro muže, kteří si cení detailu — a vědí, že první dojem hraje roli.",
    cta: "Začněme spolu",
  },
  about: {
    sectionLabel: "O mně",
    heading: "Styl není mód.\nJe to jazyk.",
    body: [
      "Za každým výsledkem stojí detailní rozhovor — a práce s tím, kdo jste. Spolupracuji s muži, kteří chtějí, aby jejich oblečení mluvilo za ně: bez přehánění, bez kompromisů.",
      "Šatník není sbírka kusů. Je to nástroj sebeprezentace. Pomáhám vám ho sestavit tak, aby fungoval pro váš životní styl, vaše tělo a vaše ambice.",
    ],
    imageAlt: "Lucie Čermáková — Men's edit",
  },
  services: {
    sectionLabel: "Služby",
    heading: "Co nabízím",
    items: [
      {
        id: "adhoc",
        image: "/images/service_adhoc.png",
        name: "Ad-hoc nákupy",
        description:
          "Potřebujete rychle doplnit šatník o konkrétní kusy? Doprovázím vás při nákupu a pomáhám vybrat to, co skutečně doplní to, co už máte.",
        price: "800 Kč / hod",
        priceNote: null,
      },
      {
        id: "individual",
        image: "/images/service_bespoke.png",
        name: "Individuální nákupy na míru",
        description:
          "Úvodní konzultace, analýza vašeho životního stylu a cílů, následovaná plánovaným nákupem s přesně vybranými kousky šitými na vaši míru.",
        price: "4 000 Kč",
        priceNote: "za celý balíček",
      },
      {
        id: "wardrobe",
        image: "/images/service_full.png",
        name: "Kompletní sestavení šatníku",
        description:
          "Nejkomplexnější spolupráce. Revize stávajícího šatníku, definice stylu, nákupní strategie a sestavení šatníku, který funguje od pondělí do neděle.",
        price: "9 000 Kč",
        priceNote: "za celý balíček",
      },
    ],
    cta: "Mám zájem",
  },
  portfolio: {
    sectionLabel: "Portfolio",
    heading: "Transformace",
    subheading:
      "Každý muž má svůj styl. Pomáhám ho najít, definovat a přenést do každodenního života.",
    images: [
      { src: "/images/medit3a.png", alt: "Transformace — Men's edit" },
      { src: "/images/medit3.jpg", alt: "Transformace — Men's edit" },
      { src: "/images/medit3c.png", alt: "Transformace — Men's edit" },
    ],
  },
  contact: {
    sectionLabel: "Kontakt",
    heading: "Pojďme na to",
    subheading: "Napište mi a já se vám ozvu do 48 hodin.",
    phone: "+420 731 820 157",
    email: "cermakovaa.lucie@gmail.com",
    instagram: { label: "@mens____edit", href: "https://www.instagram.com/mens____edit/" },
    form: {
      // TODO: vyplnit Formspree endpoint ID (formspree.io → nový formulář → zkopírovat ID)
      action: "https://formspree.io/f/YOUR_FORMSPREE_ID",
      emailPlaceholder: "Váš e-mail",
      emailLabel: "E-mail",
      serviceLabel: "Vyberte službu",
      serviceDefault: "O jakou službu máte zájem?",
      serviceOptions: [
        { value: "adhoc", label: "Ad-hoc nákupy (800 Kč/h)" },
        { value: "individual", label: "Individuální nákupy na míru (4 000 Kč)" },
        { value: "wardrobe", label: "Kompletní sestavení šatníku (9 000 Kč)" },
      ],
      submit: "Chci se dozvědět více",
      successMessage: "Zpráva odeslána. Brzy se ozvu!",
    },
  },
  footer: {
    copyright: "© 2026 Men's edit. Všechna práva vyhrazena.",
    langSwitch: "EN",
    langSwitchHref: "/en/",
  },
} as const;

export type Translations = typeof cs;
