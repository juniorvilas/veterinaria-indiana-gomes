import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

/** No dev, injeta as mesmas tags de SEO que o pré-render gera no build. */
function seoHeadInDev(): Plugin {
  return {
    name: 'seo-head-dev',
    apply: 'serve',
    async transformIndexHtml(html, { server }) {
      if (!server) return html
      const { renderHeadHtml } = await server.ssrLoadModule('/src/entry-server.tsx')
      return html.replace('<!--app-head-->', renderHeadHtml())
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), seoHeadInDev()],
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
})
