"use strict";

function LinkedList() {
  var length = 0,
    root = null;

  function addAtBeginning(value) {
    var oldRoot = root;
    root = createNode(value);
    root.next = oldRoot;
    length += 1;
  }

  function removeAtBeginning() {
    if (root) {
      length -= 1;
      var poppedRoot = root;
      root = root.next;
      return poppedRoot.item;
    }
    return null;
  }

  function createNode(value) {
    return {
      item: value
    };
  }

  function each(func) {
    var current = root;
    var index = 0;
    while (current) {
      func(current.item, index++);
      current = current.next;
    }
  }

  return {
    addAtBeginning: addAtBeginning,
    removeAtBeginning: removeAtBeginning,
    getCount: function () {
      return length;
    },
    each: each
  };
}
module.exports = LinkedList;