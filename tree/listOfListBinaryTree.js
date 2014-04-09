"use strict";

function createBinaryTree(root) {
  return [root, [], []];
}

function insertLeft(root, newBranch) {
  var t = root.pop(1);
  if (t.length > 1) {
    root.splice(1, 0, [newBranch, t, []]);
  } else {
    root.splice(1, 0, [newBranch, [], []]);
  }
  return root;
}

function insertRight(root, newBranch) {
  var t = root.pop(2);
  if (t.length > 1) {
    root.splice(2, 0, [newBranch, [], t]);
  } else {
    root.splice(2, 0, [newBranch, [], []]);
  }
  return root;
}

function getRootVal(root) {
  return root[0];
}


function setRootVal(root, newVal) {
  root[0] = newVal;
}

function getLeftChild(root) {
  return root[1];
}

function getRightChild(root) {
  return root[2];
}

module.exports.createBinaryTree = createBinaryTree;
module.exports.insertLeft = insertLeft;
module.exports.insertRight = insertRight;
module.exports.getRootVal = getRootVal;
module.exports.setRootVal = setRootVal;
module.exports.getLeftChild = getLeftChild;
module.exports.getRightChild = getRightChild;