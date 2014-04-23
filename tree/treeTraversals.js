"use strict";

function preorder(root) {
  if (root) {
    var result = root.getValue() + " ";
    result += preorder(root.getLeftChild()) + " ";
    result += preorder(root.getRightChild()) + " ";
    return result.trim();
  }
  return "";
}

module.exports.preorder = preorder;