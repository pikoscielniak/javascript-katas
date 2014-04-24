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

function inorder(root, func) {
  if (root) {
    inorder(root.getLeftChild(), func);
    func(root);
    inorder(root.getRightChild(), func);
  }
}

module.exports.preorder = preorder;
module.exports.postorder = postorder;
module.exports.inorder = inorder;