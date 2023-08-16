const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1368,
  viewportHeight: 768,

  e2e: {
    baseUrl: "http://lojaebac.ebaconline.art.br/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

});

  

