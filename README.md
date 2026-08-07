# ianbaker.me

[![Netlify Status](https://api.netlify.com/api/v1/badges/0202f3dd-fb31-46fb-9c79-dc206e92b3da/deploy-status)](https://app.netlify.com/projects/amazing-babbage-3a2da9/deploys)

A personal Astro site built with Tailwind CSS, Astro Content Collections, and Playwright smoke tests.

## 📁 Project structure

```
├── public/
├── src/
│   ├── components/
│   ├── content/
│   │   └── data/
│   ├── layouts/
│   ├── pages/
│   ├── scripts/
│   ├── styles/
│   └── types/
├── tests/
├── astro.config.mjs
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
└── README.md
```

## 🔧 What’s included

- Astro static site using `astro` and `@astrojs/sitemap`
- Tailwind CSS configured with `@tailwindcss/vite`
- Content stored in `src/content/data/concerts.json`
- Reusable components in `src/components/`
- Playwright smoke tests in `tests/smoke.spec.ts` configured for `chromium`, `firefox`, `webkit`, and a `Pixel 8` mobile profile
- ESLint, Prettier, and commitlint for quality checks

## 🚀 Available commands

Run from the repository root.

| Command                        | Action                                            |
| :----------------------------- | :------------------------------------------------ |
| `pnpm install`                 | Install dependencies                              |
| `pnpm dev`                     | Start local dev server at `http://localhost:4321` |
| `pnpm build`                   | Build the site for production                     |
| `pnpm preview`                 | Preview the production build locally              |
| `pnpm lint`                    | Run ESLint across the repo                        |
| `pnpm check`                   | Run Astro type and project checks                 |
| `pnpm test`                    | Run Playwright tests                              |
| `pnpm up`                      | Upgrade Astro dependencies via `@astrojs/upgrade` |
| `pnpm exec prettier --write .` | Format files with Prettier                        |

## ✅ Commit conventions

Use Conventional Commits prefixes for Git history, e.g. `feat:`, `fix:`, `chore:`, `docs:`.
