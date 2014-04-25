"use strict";

function binaryHeap() {
  var heapList = [0];
  var currentSize = 0;

  function precUp(i) {
    while (Math.floor(i / 2) > 0) {
      var parentIdx = Math.floor(i / 2);
      if (heapList[i] < heapList[parentIdx]) {
        var temp = heapList[parentIdx];
        heapList[parentIdx] = heapList[i];
        heapList[i] = temp;
      }
      i = Math.floor(i / 2);
    }
  }

  function insert(k) {
    heapList.push(k);
    currentSize += 1;
    precUp(currentSize);
  }

  function size() {
    return currentSize;
  }

  return {
    insert: insert,
    size: size
  };
}

module.exports = binaryHeap;