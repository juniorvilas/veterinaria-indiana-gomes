# Dra. Indiana Gomes — Veterinária a domicílio

Landing page de divulgação do atendimento veterinário domiciliar (cães e gatos) em Lauro de Freitas, Salvador e região metropolitana.

React 19 + TypeScript + Tailwind CSS 4 + Vite. Testes com Vitest.

```bash
npm install
npm run dev      # desenvolvimento
npm test         # testes de domínio e aplicação
npm run build    # gera dist/ para publicar
```

## Arquitetura (DDD em camadas)

```
src/
  domain/          regras e modelo do negócio, sem React
    shared/        value objects: PhoneNumber, InstagramHandle
    practice/      agregado HomeVisitPractice (serviços, áreas, FAQ...)
    veterinarian/  entidade Veterinarian
  application/
    ports/         PracticeRepository (contrato de leitura do conteúdo)
    use-cases/     buildSchedulingLinks (links de WhatsApp/Instagram)
  infrastructure/
    content/       StaticPracticeRepository: todo o texto do site
  presentation/
    context/       PracticeProvider / usePractice
    components/    ButtonLink, Icon, ResponsivePhoto, SectionHeading
    sections/      uma seção da página por arquivo
    seo/           tags do <head>, robots.txt e sitemap.xml
  composition.ts   raiz de composição (repositório e configuração do site)
  main.tsx         entrada do navegador (hidrata o HTML pré-renderizado)
  entry-server.tsx entrada do pré-render usado no build
scripts/
  prerender.mjs    grava o HTML final, robots.txt e sitemap.xml em dist/
```

As dependências apontam para dentro: `presentation → application → domain`. A `infrastructure` implementa as portas da aplicação.

## Editar conteúdo

Telefone, Instagram, serviços, áreas atendidas, bio e perguntas frequentes ficam em
`src/infrastructure/content/StaticPracticeRepository.ts`. Para trocar por um CMS no futuro, basta criar outro `PracticeRepository` e trocar em `main.tsx`.

Imagens otimizadas ficam em `public/img/` (WebP + JPG de fallback).

## SEO

O `npm run build` pré-renderiza a página: o HTML já sai com todo o conteúdo, as meta tags e os dados estruturados (schema.org `VeterinaryCare`, `Person`, `FAQPage`, `WebSite`), além de `robots.txt` e `sitemap.xml`. Tudo é gerado a partir do mesmo conteúdo do site (`src/application/use-cases/buildSeo.ts`).

Antes do build de produção, copie `.env.example` para `.env` (ou configure as variáveis na hospedagem):

| Variável | Para quê |
| --- | --- |
| `VITE_SITE_URL` | Domínio público. Sem ele, canonical, sitemap e a prévia do link no WhatsApp ficam de fora. |
| `VITE_GOOGLE_SITE_VERIFICATION` | Código da verificação do Google Search Console (método "Tag HTML"). |
