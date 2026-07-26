import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
  ],
  webServer: [{
    command: 'pnpm build',
    reuseExistingServer: false,
  },
  {
    command: 'pnpm preview',
    url: 'http://localhost:4321',
    port: 4321,
    reuseExistingServer: false,
  }]
});