import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

import auth from "auth-astro";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [tailwind(), react(), auth()],

  build: {
    target: 'es2020'
  },

  optimizeDeps: {
    esbuildOptions: {
      target: "es2020"
    }
  },

  adapter: vercel()
});