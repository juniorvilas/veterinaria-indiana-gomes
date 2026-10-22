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
  main.tsx         raiz de composição (injeta o repositório)
```

As dependências apontam para dentro: `presentation → application → domain`. A `infrastructure` implementa as portas da aplicação.

## Editar conteúdo

Telefone, Instagram, serviços, áreas atendidas, bio e perguntas frequentes ficam em
`src/infrastructure/content/StaticPracticeRepository.ts`. Para trocar por um CMS no futuro, basta criar outro `PracticeRepository` e trocar em `main.tsx`.

Imagens otimizadas ficam em `public/img/` (WebP + JPG de fallback).
