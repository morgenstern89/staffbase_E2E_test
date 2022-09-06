const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '6o6vf9',
  e2e: {
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
