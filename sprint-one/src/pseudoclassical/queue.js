var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
    this.storage[Object.keys(this.storage).length] = value;
  };

Queue.prototype.dequeue = function() {
    // look for the dequeue value and delete it from storage
    var deqVal = this.storage[0];
    delete this.storage[0];

    // create a new object where remaining values in storage will be copied to
    // and copy
    var newObj = {};
    for (var i = 1; i < Object.keys(this.storage).length + 1; i++){
      newObj[i-1] = this.storage[i];
    }
    this.storage = newObj;

    // return dequeued value
    return deqVal;
  };

Queue.prototype.size = function() {
    return Object.keys(this.storage).length;
  };