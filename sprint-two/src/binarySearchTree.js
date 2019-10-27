var BinarySearchTree = function(value) {
  var biTree = {};

  biTree.value = value;
  biTree.left = null;
  biTree.right = null;

  _.extend(biTree, biTreeMethods);

  return biTree;
};

var biTreeMethods = {

  insert: function(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = BinarySearchTree(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = BinarySearchTree(value);
      } else {
        this.right.insert(value);
      }
    }
  },

  contains: function(target) {
    if (this.value === target) {
      return true;
    } else {
      if (target < this.value) {
        if (this.left) {
          return this.left.contains(target);
        }
      } else {
        if (this.right) {
          return this.right.contains(target);
        }
      }
    }
    return false;
  },

  depthFirstLog: function(func) {
    func(this.value);
    if (this.left) {
      this.left.depthFirstLog(func);
    }
    if (this.right) {
      this.right.depthFirstLog(func);
    }


  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
