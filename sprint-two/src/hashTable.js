
var HashTable = function() {
  this._limit = 8;
  this._itemCount = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, {});
  }
  this._storage.get(index)[k] = v;
  this._itemCount++;
  if (this._itemCount / this._limit > 0.75) {
    this.resize(this._limit * 2);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    return undefined;
  } else {
    return this._storage.get(index)[k];
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
  this._itemCount--;
  if (this._itemCount / this._limit < 0.25) {
    this.resize(this._limit / 2);
  }
};

HashTable.prototype.resize = function(newLimit) {
  var oldInfo = this._storage;
  var oldLimit = this._limit;
  this._storage = LimitedArray(newLimit);
  this._limit = newLimit;
  this._itemCount = 0;
  for (var i = 0; i < oldLimit; i++) {
    for (var key in oldInfo.get(i)) {
      this.insert(key, oldInfo.get(i)[key]);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

