// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    headless: false, // This helps to see the tests running in the browser
    // video: 'on-first-retry', // Uncomment to record videos of failed tests
    // screenshot: 'only-on-failure', // Uncomment to take screenshots on failure
    // contextOptions: {
    //   recordVideo: {
    //     dir: 'videos/',
    //     size: { width: 1280, height: 720 },
    //   },
    // },
    // viewport: { width: 1280, height: 720 }, // Set the viewport size for tests
    // ignoreHTTPSErrors: true, // Ignore HTTPS errors
    // locale: 'en-US', // Set the locale for tests
    // timezoneId: 'America/New_York', // Set the timezone for tests
    // storageState: 'state.json', // Load the storage state from a file
    // extraHTTPHeaders: {
    //   'x-custom-header': 'value', // Add custom headers for requests
    // },
    // geolocation: { longitude: -122.084, latitude: 37.421998 }, // Set geolocation for tests
    // permissions: ['geolocation'], // Grant permissions
    //  userAgent: 'my-custom-user-agent', // Set a custom user agent for tests
    //  colorScheme: 'dark', // Set the color scheme for tests
    //  deviceScaleFactor: 2, // Set the device scale factor for tests
    //  isMobile: false, // Set to true if testing on a mobile device
    //  hasTouch: false, // Set to true if testing on a touch device
    //  defaultBrowserType: 'chromium', // Set the default browser type for tests
    //  baseURL: 'http://localhost:3000', // Set the base URL
    //  storageState: 'state.json', // Load the storage state from a file
    //  colorScheme: 'dark', // Set the color scheme for tests
    //  deviceScaleFactor: 2, // Set the device scale factor for tests
    //  isMobile: false, // Set to true if testing on a mobile device
    //  hasTouch: false, // Set to true if testing on a touch device
    //  defaultBrowserType: 'chromium', // Set the default browser type for tests 
    launchOptions: { // Launch options for the browser
       headless: false, // Run tests in headful mode (visible browser)
       slowMo: 100, // Slow down by 100ms
      // args: ['--start-maximized'], // Start the browser maximized
      // args: ['--window-size=1280,720'], // Set the window size
    
    }

    

  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

/* 
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    }, 
    
*/

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

