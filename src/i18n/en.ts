import type { Translations } from './cs';

export const en: Translations = {
  meta: {
    title: "Men's edit — Personal styling for men",
    description:
      "Men's edit is personal styling focused exclusively on men. I help men build a wardrobe that speaks for them.",
    ogImage: "/images/og.jpg",
  },
  nav: {
    about: "About",
    services: "Services",
    portfolio: "Portfolio",
    contact: "Contact",
    langSwitch: "CZ",
    langSwitchHref: "/cs/",
    menuOpen: "Open menu",
    menuClose: "Close menu",
  },
  hero: {
    headlinePrefix: "Your",
    headlineWords: ["style.", "story.", "life.", "weekend.", "wardrobe.", "identity.", "image.", "impression."],
    subheadline:
      "Personal styling for men who care about the details — and know that first impressions matter.",
    cta: "Let's start",
  },
  about: {
    sectionLabel: "About",
    heading: "Style isn't fashion.\nIt's a language.",
    body: [
      "Behind every result is a detailed conversation — and work rooted in who you are. I work with men who want their clothes to speak for them: without excess, without compromise.",
      "A wardrobe isn't a collection of pieces. It's a tool for self-presentation. I help you build one that works for your lifestyle, your body, and your ambitions.",
    ],
    imageAlt: "Lucie Čermáková — Men's edit",
  },
  services: {
    sectionLabel: "Services",
    heading: "What I offer",
    items: [
      {
        id: "adhoc",
        image: "/images/service_adhoc.png",
        name: "On-demand shopping",
        description:
          "Need to quickly add specific pieces to your wardrobe? I accompany you shopping and help you choose what genuinely complements what you already have.",
        price: "800 CZK / hour",
        priceNote: null,
      },
      {
        id: "individual",
        image: "/images/service_bespoke.png",
        name: "Bespoke shopping",
        description:
          "An initial consultation, lifestyle and goals analysis, followed by a planned shopping session with precisely selected pieces tailored to you.",
        price: "4,000 CZK",
        priceNote: "per package",
      },
      {
        id: "wardrobe",
        image: "/images/service_full.png",
        name: "Full wardrobe build",
        description:
          "The most comprehensive collaboration. Review of your existing wardrobe, style definition, shopping strategy, and building a wardrobe that works from Monday through Sunday.",
        price: "9,000 CZK",
        priceNote: "per package",
      },
    ],
    cta: "I'm interested",
  },
  portfolio: {
    sectionLabel: "Portfolio",
    heading: "Transformations",
    subheading:
      "Every man has his own style. I help find it, define it, and translate it into everyday life.",
    images: [
      { src: "/images/medit3a.png", alt: "Transformation — Men's edit" },
      { src: "/images/medit3.jpg", alt: "Transformation — Men's edit" },
      { src: "/images/medit3c.png", alt: "Transformation — Men's edit" },
    ],
  },
  contact: {
    sectionLabel: "Contact",
    heading: "Let's do this",
    subheading: "Send me a message and I'll get back to you within 48 hours.",
    phone: "+420 731 820 157",
    email: "cermakovaa.lucie@gmail.com",
    instagram: { label: "@mens____edit", href: "https://www.instagram.com/mens____edit/" },
    form: {
      action: "https://formspree.io/f/YOUR_FORMSPREE_ID",
      emailPlaceholder: "Your email",
      emailLabel: "Email",
      serviceLabel: "Select a service",
      serviceDefault: "Which service are you interested in?",
      serviceOptions: [
        { value: "adhoc", label: "On-demand shopping (800 CZK/h)" },
        { value: "individual", label: "Bespoke shopping (4,000 CZK)" },
        { value: "wardrobe", label: "Full wardrobe build (9,000 CZK)" },
      ],
      submit: "I'd like to know more",
      successMessage: "Message sent. I'll be in touch soon!",
    },
  },
  footer: {
    copyright: "© 2026 Men's edit. All rights reserved.",
    langSwitch: "CZ",
    langSwitchHref: "/cs/",
  },
};
