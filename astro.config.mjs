// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kozawa-keiran.com',
  output: 'static',
  integrations: [sitemap({ filter: (page) => !page.includes('/feature') && !page.includes('/works') })],
  vite: {
    plugins: [tailwindcss()]
  }
});
