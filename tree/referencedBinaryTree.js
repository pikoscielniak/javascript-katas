"use strict";

function BinaryTree(rootObj) {
  var value = rootObj;
  var leftChild = null;
  var rightChild = null;

  function getRightChild() {
    return rightChild;
  }

  function insertLeft(newNode) {
    var t = new BinaryTree(newNode);
    if (!!leftChild) {
      t.setLeftChild(leftChild);
    }
    leftChild = t;
  }

  function insertRight(newNode) {
    var t = new BinaryTree(newNode);
    if (!!rightChild) {
      t.setRightChild(rightChild);
    }
    rightChild = t;
  }

  function getLeftChild() {
    return leftChild;
  }

  function getValue() {
    return value;
  }

  function setLeftChild(child) {
    leftChild = child;
  }

  function setRightChild(child) {
    rightChild = child;
  }

  function setValue(val) {
    value = val;
  }

  return {
    getRightChild: getRightChild,
    getLeftChild: getLeftChild,
    insertLeft: insertLeft,
    insertRight: insertRight,
    setLeftChild: setLeftChild,
    setRightChild: setRightChild,
    getValue: getValue,
    setValue: setValue
  };
}

exports = module.exports = BinaryTree;