PublishChangeStream = function(collection, pipeline) {
  this.collection = collection;
  this.pipeline = pipeline || [];
  this.stopped = false;
};

PublishChangeStream.prototype._getCollectionName = function() {
  return this.collection._name;
};

PublishChangeStream.prototype._publishCursor = function(sub) {
  this.sub = sub;

  this.startChangeStream();
  return {
    stop: this.stopChangeStream.bind(this)
  };
};

PublishChangeStream.prototype.startChangeStream = async function() {
  const rawCollection = this.collection.rawCollection();

  const isChangeStreamSupported = rawCollection.watch || false;

  if (isChangeStreamSupported) {
    this.stream = rawCollection.watch(this.pipeline || []);

    this.stream.on("change", doc => {
      console.log(doc);

      const { fullDocument, operationType } = doc;
      const _id = doc.documentKey._id.toHexString();

      delete fullDocument._id;

      let isDocExist = false;

      try {
        isDocExist =
          this.sub._documents[this.collection._name][`-${_id}`] || false;
      } catch (e) {
        isDocExist = false;
      }

      if (isDocExist) {
        if (operationType === "replace") {
          console.log("changed", this.collection._name, _id, fullDocument);
          this.sub.changed(this.collection._name, _id, fullDocument);
        }
      } else {
        if (operationType === "replace" || operationType === "insert") {
          console.log("added", this.collection._name, _id, fullDocument);

          this.sub.added(this.collection._name, _id, fullDocument);
        }
      }
    });
  } else {
    throw new Error("Your app doesn't support change streams");
  }
};

PublishChangeStream.prototype.stopChangeStream = function() {
  if (this.stream) {
    this.stream.stop();
  }
};

module.exports = PublishChangeStream;
