"use strict";

function LinkedList() {
  var length = 0,
    first = null,
    last = null;

  function addAtBeginning(value) {
    var oldFirst = first;
    first = createNode(value);
    first.next = oldFirst;
    if (oldFirst) {
      oldFirst.prev = first;
    }
    length += 1;
    if (!oldFirst) {
      last = first;
    }
  }

  function removeAtBeginning() {
    if (first) {
      length -= 1;
      var lastFirst = first;
      first = lastFirst.next;
      if (first) {
        first.prev = null;
      }
      if (!first) {
        last = null;
      }
      return lastFirst.item;
    }

    return null;
  }

  function createNode(value) {
    return {
      item: value
    };
  }

  function each(func) {
    var current = first;
    var index = 0;
    while (current) {
      func(current.item, index++);
      current = current.next;
    }
  }

  function addAtEnd(value) {
    var oldLast = last;
    last = createNode(value);
    last.prev = oldLast;
    length += 1;
    if (oldLast) {
      oldLast.next = last;
    }
    if (!first) {
      first = last;
    }
  }

  function getLast() {
    if (last) {
      return last.item;
    }
    return null;
  }

  function getFirst() {
    if (first) {
      return first.item;
    }
    return null;
  }

  function removeAtEnd() {
    if (last) {
      length -= 1;
      var lastLast = last;
      last = last.prev;
      if (!last) {
        first = null;
      } else {
        last.next = null;
      }
      return lastLast.item;
    }
    return null;
  }

  function reverseEach(func) {
    var current = last;
    var index = getCount() - 1;
    while (current) {
      func(current.item, index--);
      current = current.prev;
    }
  }

  function getCount() {
    return length;
  }

  return {
    addAtBeginning: addAtBeginning,
    removeAtBeginning: removeAtBeginning,
    getCount: getCount,
    each: each,
    addAtEnd: addAtEnd,
    getLast: getLast,
    getFirst: getFirst,
    removeAtEnd: removeAtEnd,
    reverseEach: reverseEach
  };
}
module.exports = LinkedList;