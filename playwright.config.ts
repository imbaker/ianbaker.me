import { defineConfig } from '@playwright/test';

export default defineConfig({
  webServer: [{
    command: 'pnpm build',
    reuseExistingServer: false,
  },
  {
    command: 'pnpm preview',
    port: 4321,
    reuseExistingServer: false,
  }]
});