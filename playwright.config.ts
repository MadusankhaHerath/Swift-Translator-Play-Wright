import { defineConfig, devices } from '@playwright/test';
export default defineConfig({
  testDir: './tests',
  testMatch: '*/.spec.ts',
  workers: 1,
  use: {
    headless: false, // show browser window so you can see typing
    launchOptions: {
      slowMo: 1000, // slow down actions to 1 second so you can clearly see what's happening
    },
  },
  reporter: [
    ['list'], // pass/fail in terminal
    ['html', { open: 'always' }], // open HTML report in browser after run (pass/fail summary)
  ],
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});