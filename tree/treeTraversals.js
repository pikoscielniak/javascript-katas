"use strict";

function preorder(root, func) {
  if (root) {
    func(root);
    preorder(root.getLeftChild(), func);
    preorder(root.getRightChild(), func);
  }
}

function postorder(root, func) {
  if (root) {
    postorder(root.getLeftChild(), func);
    postorder(root.getRightChild(), func);
    func(root);
  }
}

module.exports.preorder = preorder;
module.exports.postorder = postorder;