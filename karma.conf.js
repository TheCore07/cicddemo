module.exports = function(config) {
  config.set({
    frameworks: ["qunit"],

    files: [
      // Serve source files, but don't include them in the browser directly
      { pattern: "webapp/**/*.js", included: false, served: true },

      // Explicitly include your test files
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
