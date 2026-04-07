# Men's edit — web Lucie Čermákové

Statický jednostránkový web pro osobní styling brand **Men's edit**. Dvojjazyčný (CZ/EN), minimalistický editoriální design.

## Stack

- **Astro 4** — static output (`output: 'static'`)
- **GitHub Actions** — automatický deploy na GitHub Pages (`.github/workflows/deploy.yml`)
- **Formspree** — zpracování kontaktního formuláře (bez backendu)
- **Google Fonts** — Jost (headings) + Raleway (body, placeholder za Axon Ultralight)

## Lokální vývoj

```bash
npm install
npm run dev       # http://localhost:4321
```

```bash
npm run build     # vygeneruje dist/
npm run preview   # preview buildu lokálně
```

## Struktura projektu

```
src/
├── i18n/
│   ├── cs.ts         # veškerý český obsah (typový zdroj)
│   └── en.ts         # anglický obsah (musí sedět na typ z cs.ts)
├── components/
│   ├── Nav.astro
│   ├── Hero.astro    # carousel + animovaný headline
│   ├── About.astro
│   ├── Services.astro
│   ├── Portfolio.astro
│   ├── Contact.astro
│   └── Footer.astro
├── layouts/
│   └── Layout.astro  # HTML shell, <head>, Google Fonts
├── pages/
│   ├── index.astro       # redirect → /cs/
│   ├── cs/index.astro
│   └── en/index.astro
└── styles/
    └── global.css    # design tokeny (CSS custom properties)

public/
└── images/
    ├── hero_carousel/    # carousel1–7.jpg
    ├── service_adhoc.png / service_bespoke.png / service_full.png
    ├── medit3a.png / medit3.jpg / medit3c.png  (portfolio)
    ├── about-me.png
    ├── logo.png          # bílý text na černém bg → mix-blend-mode: screen
    └── favicon.svg
```

## i18n

Routing: `/cs/` a `/en/`. Obsah žije výhradně v `src/i18n/cs.ts` a `en.ts`.
Typ `Translations` se odvozuje z `cs.ts` (`typeof cs`) — TypeScript hlídá, že `en.ts` má stejnou strukturu.

Chceš-li změnit text, edituj přímo tyto soubory. Přepínač jazyka v navu zachovává aktuální sekci (hash).

## Deploy na GitHub Pages

1. Odkomentuj v `astro.config.mjs`:
   ```js
   site: 'https://YOUR_GITHUB_USERNAME.github.io',
   base: '/YOUR_REPO_NAME',   // vynech pokud máš custom doménu
   ```

2. Na GitHubu v repozitáři: **Settings → Pages → Build and deployment**
   - Source: **GitHub Actions** (ne "Deploy from a branch")

3. Zkontroluj, že Actions mají správná oprávnění: **Settings → Actions → General → Workflow permissions**
   - Zaškrtni **Read and write permissions**

4. Push na `main` → GitHub Actions automaticky buildne a nasadí na `gh-pages` branch.
   Web bude dostupný na `https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME/`

## Formspree (kontaktní formulář)

V `src/i18n/cs.ts` a `en.ts` najdi:
```ts
action: "https://formspree.io/f/YOUR_FORMSPREE_ID"
```
Nahraď `YOUR_FORMSPREE_ID` skutečným ID z formspree.io.

## Fonty

Raleway je placeholder za **Axon Ultralight**. Až bude webfont licence:
1. Stáhni `.woff2` soubory
2. V `src/layouts/Layout.astro` odstraň Google Fonts `<link>` pro Raleway
3. V `src/styles/global.css` přidej `@font-face` pro Axon a změň `--font-body`
