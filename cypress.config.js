const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.ibge.gov.br",
    specPattern: "**/*.feature",
    defaultCommandTimeout: 15000,
    pageLoadTimeout: 60000,
    viewportWidth: 1366,
    viewportHeight: 768,
    chromeWebSecurity: false,

    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
  },
});
