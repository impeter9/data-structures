var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.tail === null) {
      list.tail = Node(value);
      list.head = list.tail;
    } else {
      list.tail.next = Node(value);
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function() {
    if (list.head !== null) {
      var returnVal = list.head.value;
      list.head = list.head.next;
      return returnVal;
    }
  };

  list.contains = function(target) {
    if (list.head !== null) {
      var recurse = function(currentNode, target) {
        if (currentNode.value === target) {
          return true;
        } else {
          if (currentNode.next === null) {
            return false;
          } else {
            return recurse(currentNode.next, target);
          }
        }
      };
      return recurse(list.head, target);
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
