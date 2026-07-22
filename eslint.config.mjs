import { defineConfig } from 'eslint/config';
import eslintPluginAstro from 'eslint-plugin-astro';
import tailwindcss from 'eslint-plugin-tailwindcss';

export default defineConfig([
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    plugins: { tailwindcss },
    settings: {
      tailwindcss: {
        cssConfigPath: './src/styles/global.css',
      },
    },
    rules: {
      'tailwindcss/classnames-order': 'error',
    },
  },
]);