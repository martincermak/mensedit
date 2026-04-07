import { defineConfig } from 'astro/config';

// TODO: nastavit před deplojem na GitHub Pages:
//   site: 'https://YOUR_GITHUB_USERNAME.github.io'
//   base: '/YOUR_REPO_NAME'   ← odstraň pokud máš custom doménu

export default defineConfig({
  // site: 'https://YOUR_GITHUB_USERNAME.github.io',
  // base: '/YOUR_REPO_NAME',
  output: 'static',
  i18n: {
    defaultLocale: 'cs',
    locales: ['cs', 'en'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
