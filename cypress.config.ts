import { defineConfig } from "cypress";

export default defineConfig({
  defaultCommandTimeout: 5000,
  e2e: {
    async setupNodeEvents(on, config) {
      const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin
      const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')

      // await here
      await require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin(on, config)

      on('file:preprocessor',   createBundler({
        plugins: [createEsbuildPlugin(config)],
      }));

      // return any mods to Cypress
      return config
    },
    specPattern: 'cypress/e2e/**/*.feature',
    baseUrl: 'https://computer-database.gatling.io',
    supportFile: false,
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    testIsolation: true,
  },
});
