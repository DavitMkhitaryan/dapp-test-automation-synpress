import { defineConfig } from "cypress";
import synpressPlugins from "@synthetixio/synpress/plugins";

export default defineConfig({
  userAgent: "synpress",
  screenshotsFolder: "cypress/screenshots",
  video: false,
  chromeWebSecurity: true,
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 30000,
  requestTimeout: 30000,
  e2e: {
    setupNodeEvents(on, config) {
      synpressPlugins(on, config);
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    experimentalSessionAndOrigin: true,
    includeShadowDom: true,
    baseUrl: "https://dashboard.etherspot.io",
    supportFile: "cypress/support/e2e.ts",
    fixturesFolder: "cypress/fixtures",
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      reportDir: "cypress/reports",
      charts: true,
      reportPageTitle: "Test Run Report",
      embeddedScreenshots: true,
      inlineAssets: true,
    },
  },
});
