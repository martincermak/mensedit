import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://martincermak.github.io',
  base: '/mensedit',
  output: 'static',
  i18n: {
    defaultLocale: 'cs',
    locales: ['cs', 'en'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
