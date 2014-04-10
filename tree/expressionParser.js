"use strict";
var _ = require("underscore");
var binaryTree = require('./referencedBinaryTree');


function buildParseTree(expression) {
  var splitedExpression = expression.split(' ');
  var nodeStack = [];
  var tree = binaryTree('');
  nodeStack.push(tree);
  var currentTree = tree;

  function processLeftParenthesis() {
    currentTree.insertLeft('');
    nodeStack.push(currentTree);
    currentTree = currentTree.getLeftChild();
  }

  function isLeftParenthesis(char) {
    return char === "(";
  }

  function isOperator(char) {
    return _.any(['+', '-', '*', '/'], function (value) {
      return value === char;
    });
  }

  function isNumber(char) {
    return !_.isNaN(Number(char));
  }

  function processNumber(char) {
    currentTree.setValue(Number(char));
    currentTree = nodeStack.pop();
  }

  function processOperator(char) {
    currentTree.setValue(char);
    currentTree.insertRight('');
    nodeStack.push(currentTree);
    currentTree = currentTree.getRightChild();
  }

  function isRightParenthesis(char) {
    return char === ')';
  }

  function processRightParenthesis() {
    currentTree = nodeStack.pop();
  }

  function getFunction(char) {
    if (isLeftParenthesis(char)) {
      return processLeftParenthesis;
    }
    if (isNumber(char)) {
      return processNumber;
    }
    if (isOperator(char)) {
      return processOperator;
    }
    if (isRightParenthesis(char)) {
      return processRightParenthesis;
    }
    throw "Invalid char";
  }

  _.each(splitedExpression, function (element) {
    var func = getFunction(element);
    func(element);
  });
  return tree;
}


module.exports.buildParseTree = buildParseTree;