const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: 'https://practicesoftwaretesting.com',
    specPattern: 'cypress/src/e2e/**/*.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
