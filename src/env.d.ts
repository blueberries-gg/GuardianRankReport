/// <reference types="astro/client" />
interface ImportMetaEnv {
    readonly PUBLIC_BUNGIE_API_KEY: string;
    readonly PUBLIC_BUNGIE_CLIENT_ID: string;
    readonly PUBLIC_BUNGIE_CLIENT_SECRET: string;
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }