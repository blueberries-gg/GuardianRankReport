import { defineConfig } from 'astro/config';
import basicSsl from '@vitejs/plugin-basic-ssl'

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs({devtools: true})],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
});
