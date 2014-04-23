"use strict";

function preorder(root, func) {
  if (root) {
    func(root);
    preorder(root.getLeftChild(), func);
    preorder(root.getRightChild(), func);
  }
}

module.exports.preorder = preorder;