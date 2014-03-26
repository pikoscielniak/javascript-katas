"use strict";

function factorial(n) {
  return n === 0 ? 1 : n * factorial(n - 1);
}

function threeNumbersAscendingSort(a, b, c) {
  return [a, b, c];
}


module.exports.factorial = factorial;
module.exports.threeNumbersAscendingSort = threeNumbersAscendingSort;