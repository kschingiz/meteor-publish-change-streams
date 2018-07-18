# meteor-publish-change-streams

This package allow you to reactively subscribe and publish mongo change streams
It will NOT send you data on first subscribe like other subscribes does, it's going to send you data ONLY when docs matching your pipeline changes (created, updated or deleted).

# why do we need this

From MongoDB doc:
Change streams allow applications to access real-time data changes without the complexity and risk of tailing the oplog. Applications can use change streams to subscribe to all data changes on a single collection, a database, or an entire deployment, and immediately react to them. Because change streams use the aggregation framework, applications can also filter for specific changes or transform the notifications at will.

# requirements

1.  Meteor 1.7+
2.  Mongo 3.6+

# API

You can read about change streams here https://docs.mongodb.com/manual/changeStreams/

publish example:

```
import PublishChangeStream from "meteor/kschingiz:publish-change-streams";

Meteor.publish("myCollection", function() {
  return new PublishChangeStream(MyCollection, [
    { $addFields: { "fullDocument.newField": "this is an added field!" } }
  ]);
});
```

# TODO

1.  Tests coverage (HELP NEEDED)
2.  Deploy example app working with change streams

# Contributions

Contributions are welcome, feel free to create issues on github

# LICENSE

MIT
