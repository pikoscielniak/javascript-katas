var binaryTree = require('../../tree/listOfListBinaryTree');
var expect = require('chai').expect;

describe("listOfListBinaryTree", function () {
  "use strict";

  it("should exists", function () {
    expect(binaryTree).to.be.ok;
  });

  describe("createBinaryTree", function () {
    it("should create tree", function () {
      var tree = binaryTree.createBinaryTree("test");

      expect(tree).to.be.ok;
      expect(binaryTree.getRootVal(tree)).to.equal("test");
      expect(binaryTree.getLeftChild(tree)).to.eql([]);
      expect(binaryTree.getRightChild(tree)).to.eql([]);
    });
  });

  describe("insertLeft", function () {
    it("when left tree is empty should insert subtree", function () {
      var root = binaryTree.createBinaryTree("test");


      binaryTree.insertLeft(root, "subTest1");

      expect(binaryTree.getLeftChild(root)).to.eql(["subTest1", [], []]);
    });

    it("when left tree is not should insert subtree and set existing tree as subtree of new subtree", function () {
      var root = binaryTree.createBinaryTree("test");
      binaryTree.insertLeft(root, "existing subtree");

      binaryTree.insertLeft(root, "new subtree");
      binaryTree.insertLeft(binaryTree.getLeftChild(root), "existing subtree 2");

      expect(binaryTree.getLeftChild(root)).to.eql(["new subtree", [ "existing subtree 2", [], []], []]);
    });
  });
});