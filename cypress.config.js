const { defineConfig } = require("cypress");
const preprocessor = require('@badeball/cypress-cucumber-preprocessor')
const browserify = require('@badeball/cypress-cucumber-preprocessor/browserify')

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config)

  on('file:preprocessor', browserify.default(config))
  return config

}

module.exports = defineConfig({
  projectId: "fzgzpw",
  e2e: {
    baseUrl: 'https://staging.trymima.com/',
    defaultCommandTimeout:10000,
    viewportHeight: 938,
    viewportWidth: 1520,
    chromeWebSecurity: false,
    watchForFileChanges: false,
    specPattern: '**/*.feature',
    setupNodeEvents,
  },
});
