# meteor-publish-change-streams

This allow you to reactively subscribe and publish to mongo change streams

# REQUIREMENTS

1.  Meteor 1.7+
2.  Mongo 3.6+

# API

You can read about change streams here https://docs.mongodb.com/manual/changeStreams/

publish example:

```
import PublishChangeStream from "meteor/kschingiz:publish-change-streams";

Meteor.publish("changeStream", function() {
  return new PublishChangeStream(Admins, [
    { $addFields: { "fullDocument.newField": "this is an added field!" } }
  ]);
});
```

# LICENSE

MIT
