module.exports = function(config) {
  config.set({
    frameworks: ["qunit"],
    files: [
      { pattern: "webapp/**/*", included: false, served: true },
      "webapp/test/unit/AllTests.js",
      "webapp/test/integration/AllJourneys.js"
    ],

    browsers: ["ChromeHeadlessNoSandbox"],

    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: "ChromeHeadless",
        flags: ["--no-sandbox", "--disable-gpu"]
      }
    },

    singleRun: true
  });
};
