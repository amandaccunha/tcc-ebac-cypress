const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '1dzdyi',
  e2e: {
  baseUrl: 'http://lojaebac.ebaconline.art.br/'
}
})