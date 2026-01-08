import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ladylazarus88.github.io',
  base: '/antipsyche/',
  vite: {
    build: {
      rollupOptions: {
        external: [
          '@fontsource/spectral',
          '@fontsource/cormorant-garamond', 
          '@fontsource/cormorant'
        ]
      }
    }
  }
});