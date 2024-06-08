const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./cypress/reports/json/",
  reportPath: "./cypress/reports/html/cucumber-report/",
  metadata: {
    browser: {
      name: "chrome",
      version: "125",
    },
    device: "MacOS",
    platform: {
      name: "Sonoma",
      version: "14.5",
    },
  },
});