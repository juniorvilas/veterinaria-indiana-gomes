/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** URL pública do site, ex.: https://draindianagomes.com.br */
  readonly VITE_SITE_URL?: string
  /** Código da meta tag de verificação do Google Search Console */
  readonly VITE_GOOGLE_SITE_VERIFICATION?: string
}

/** Ano do build, injetado pelo Vite */
declare const __BUILD_YEAR__: number

interface ImportMeta {
  readonly env: ImportMetaEnv
}
