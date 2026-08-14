# Oscar Silva — Site oficial

Site institucional de Oscar Silva, candidato a Deputado Federal pelo PSDB do Distrito Federal.

## Stack

Next.js 16 (App Router, Turbopack) · React 19 · Tailwind CSS 4 · Framer Motion.

## Rodando localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:3000`.

## Variáveis de ambiente

Copie `.env.example` para `.env.local` e preencha quando tiver as contas:

- `NEXT_PUBLIC_GA_ID` — Google Analytics 4 (opcional)
- `NEXT_PUBLIC_META_PIXEL_ID` — Meta Pixel, para tráfego pago (opcional)

O site funciona normalmente sem essas variáveis — o rastreamento só é injetado se elas existirem.

## Deploy

Pronto para deploy na Vercel: conectar este repositório, sem configuração extra além das variáveis de ambiente acima (opcionais).

## Conteúdo

Todo o texto do site está centralizado em `src/lib/content.ts`, com base no diagnóstico de comunicação, na identidade visual e na transcrição da reunião de alinhamento da campanha.

---

Desenvolvido por [Vila Master Performance](https://www.instagram.com/villamasterperformance/).
