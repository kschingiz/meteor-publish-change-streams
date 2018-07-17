// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by publish-change-streams.js.
import { name as packageName } from "meteor/kschingiz:publish-change-streams";

// Write your tests here!
// Here is an example.
Tinytest.add('publish-change-streams - example', function (test) {
  test.equal(packageName, "publish-change-streams");
});
