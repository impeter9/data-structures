var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[Object.keys(storage).length] = value;
  };

  someInstance.dequeue = function() {
    // look for the dequeue value and delete it from storage
    var deqVal = storage[0];
    delete storage[0];

    // create a new object where remaining values in storage will be copied to
    // and copy
    var newObj = {};
    for (var i = 1; i < Object.keys(storage).length + 1; i++){
      newObj[i-1] = storage[i];
    }
    storage = newObj;

    // return dequeued value
    return deqVal;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
