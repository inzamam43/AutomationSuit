const { defineConfig } = require("cypress");
const fs = require("fs-extra");
const path = require("path");

const fetchConfigurationByFile = file => {
  const pathOfConfigurationFile = path.resolve(__dirname,
    "./cypress/environments",
    `${file}.json`);
   
  return (
    file && fs.readJson(pathOfConfigurationFile)
  );
};

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      require('@cypress/grep/src/plugin')(config);
      const environment = config.env.configFile || "dev";
      const configurationForEnvironment = fetchConfigurationByFile(environment);
      return configurationForEnvironment || config;
      
    },
  
    experimentalWebKitSupport: true,
    specPattern: 'cypress/e2e/**/*.spec.js',
    excludeSpecPattern: "other/path/to/**/*.js",
    supportFile: 'cypress/support/e2e.js',
    

  },
});


require('@applitools/eyes-cypress')(module);
