# Copilot Instructions for ianbaker.me

## Architecture & Patterns

- This is an Astro static site, using TypeScript, Tailwind CSS, and Netlify for deployment.
- All UI styling must use Tailwind CSS utility classes (`global.css` imports Tailwind).
- Content is managed via JSON files in `src/content/` and loaded using Astro Content Collections (`defineCollection` in `src/content.config.ts`).
- Components are in `src/components/` and are typically `.astro` files. Example: `Concert.astro` renders a concert row and uses a toggleable setlist with smooth transitions.
- Pages are in `src/pages/` and use Astro's file-based routing. The main page is `index.astro`, which renders a table of concerts.
- Layouts are in `src/layouts/` and provide shared HTML structure and metadata.

## Data Flow

- Concert data is loaded from `src/content/concerts.json` via a content collection defined in `src/content.config.ts`.
- The `Concert` type is defined in `src/types/concert.ts` and is used throughout the codebase for type safety.
- The main page (`index.astro`) fetches all concerts and renders them using the `Concert` component.

## Developer Workflows

- **Install dependencies:** `pnpm install`
- **Start dev server:** `pnpm dev` (runs at `localhost:4321`)
- **Build for production:** `pnpm run build`
- **Upgrade packages:** `pnpm up`
- **Format code:** Prettier is configured with Astro and Tailwind plugins. Use `pnpm exec prettier --write .`
- **Lint code:** ESLint is set up for Astro and TypeScript. Use `pnpm exec eslint .`

## Project Conventions

- All styling must use Tailwind CSS utility classes.
- Use Astro Content Collections for structured content (see `src/content.config.ts`).
- Use TypeScript for all logic and types.
- Use Prettier and ESLint for formatting and linting; configs are in `.prettierrc` and `eslint.config.js`.
- Place static assets in `public/` and reference them with `/path/to/asset`.

## Integration Points

- Tailwind CSS is configured via `astro.config.mjs` and `src/styles/global.css`.
- Netlify deployment is configured in `netlify.toml`.
- Fonts are loaded via Astro's experimental font integration in `astro.config.mjs`.

## Examples

- To add a new concert, update `src/content/concerts.json` and ensure it matches the schema in `src/content.config.ts`.
- To add a new component, place it in `src/components/` and import it in your page or layout.
- To use a date, use the `FormattedDate` component for consistent formatting.

---

**For AI agents:**
- Always use Tailwind CSS for styling.
- Follow the data flow and type definitions as established in the codebase.
- Reference this file and `README.md` for project-specific commands and structure.