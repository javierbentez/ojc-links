import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  build: {
    target: 'es2020'
  },
  optimizeDeps: {
    esbuildOptions: {
      target: "es2020"
    }
  }
});