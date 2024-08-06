import { defineConfig } from 'astro/config';
import basicSsl from '@vitejs/plugin-basic-ssl';
import solidJs from "@astrojs/solid-js";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://naza.nz',
  base: '/',
  trailingSlash: 'never',
  integrations: [solidJs({
    devtools: true
  }), icon({
    iconDir: "src/resources/svg",
  })],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true
    }
  }
});