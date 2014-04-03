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

  function isIndexOutOfRange(index) {
    return index < 0 || index > getCount();
  }

  function getElementByIndex(index) {
    var current = first;
    var i = 0;
    while (i !== index) {
      i++;
      current = current.next;
    }
    return current;
  }

  function isFirst(current) {
    return current === first;
  }

  function isLast(current) {
    return current === last;
  }

  function insertElementAtIndex(current, value) {
    if (current) {
      var newNode = createNode(value);
      if (isFirst(current)) {
        first = newNode;
        current.prev = newNode;
      }
      if (current === last) {
        last = newNode;
        current.next = newNode;
      }
      if (!isFirst(current) && !isLast(current)) {
        newNode.prev = current.prev;
        current.prev.next = newNode;
        newNode.next = current;
        current.prev = newNode;
      }
    } else {
      first = last = createNode(value);
    }
  }

  function insertAt(index, value) {
    if (isIndexOutOfRange(index)) {
      throw "Out of range";
    }
    var current = getElementByIndex(index);
    insertElementAtIndex(current, value);

    length++;
  }

  function removeAt(index) {
    if (isIndexOutOfRange(index)) {
      throw "Out of range";
    }
    var current = getElementByIndex(index);
    if (current === first) {
      first = current.next;
      if (current.next) {
        current.next.prev = null;
      }
    }
    if (current === last) {
      last = current.prev;
      if (current.prev) {
        current.prev.next = null;
      }
    } else {
      current.prev.next = current.next;
      current.next.prev = current.prev;
    }
    length--;
    return current.item;
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
    reverseEach: reverseEach,
    insertAt: insertAt,
    removeAt: removeAt
  };
}
module.exports = LinkedList;