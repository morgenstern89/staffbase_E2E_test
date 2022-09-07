const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  projectId: "6o6vf9",
  e2e: {
    async setupNodeEvents(on, config) {
        const bundler = createBundler({
            plugins: [createEsbuildPlugin(config)],
        });
        on("file:preprocessor", bundler);
        await addCucumberPreprocessorPlugin(on,config);

        return config;
    },
//    specPattern: "cypress/e2e/features/*.{feature, features}",
    experimentalStudio: true,
    supportFile: false,
    baseUrl:"https://react-redux.realworld.io", //specified the base url
    reporter: "cypress-multi-reporters",
    reporterOptions: {
        reporterEnabled: "mochawesome",
        mochawesomeReporterOptions: {
            reportDir: "cypress/reports/mocha",
            screenshotOnRunFailure: true,
            quite: true,
            overwrite: false,
            html: false,
            json: true
        }
  },
  screenshotsFolder: "cypress/reports/mochareports/screenshots"
}
})


