"use strict";

var binaryTree = require('./referencedBinaryTree');

var operators = {
  '+': function (a, b) {
    return a + b;
  },
  '-': function (a, b) {
    return a - b;
  },
  '*': function (a, b) {
    return a * b;
  },
  '/': function (a, b) {
    return a / b;
  }
};

function evaluate(parseTree) {

  if (parseTree === 10) {
    console.log("jest");
  }

  var leftC = parseTree.getLeftChild();
  var rightC = parseTree.getRightChild();

  if (leftC && rightC) {
    var fn = operators[parseTree.getValue()];
    return fn(evaluate(leftC), evaluate(rightC));
  } else {
    return parseTree.getValue();
  }
}

module.exports.evaluate = evaluate;