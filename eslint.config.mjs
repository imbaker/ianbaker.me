import eslintPluginAstro from 'eslint-plugin-astro';
import tailwindcss from 'eslint-plugin-tailwindcss';

export default [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    plugins: { tailwindcss },
    rules: {
      'tailwindcss/classnames-order': 'error',
    }
  }
];