class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.storage = {};
  }

  enqueue (value) {
    this.storage[Object.keys(this.storage).length] = value;
  }

  dequeue () {
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
  }

  size () {
    return Object.keys(this.storage).length;
  }
}
