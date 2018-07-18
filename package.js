Package.describe({
  name: "kschingiz:publish-change-streams",
  version: "0.0.3",
  // Brief, one-line summary of the package.
  summary:
    "This package allow you to reactively subscribe and publish mongo change streams",
  // URL to the Git repository containing the source code for this package.
  git: "https://github.com/kschingiz/meteor-publish-change-streams.git",
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: "README.md"
});

Package.onUse(function(api) {
  api.versionsFrom("1.7.0.3");
  api.use("ecmascript");
  api.mainModule("publish-change-streams.js");
});

Package.onTest(function(api) {
  api.use("ecmascript");
  api.use("tinytest");
  api.use("kschingiz:publish-change-streams");
  api.mainModule("publish-change-streams-tests.js");
});
