import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
  ],
  reporter: [['html', { outputFolder: 'playwright-report' }], ['junit', { outputFile: 'results.xml' }]],
  webServer: {
    command: 'pnpm preview',
    url: 'http://localhost:4321',
    reuseExistingServer: false,
  }
});
