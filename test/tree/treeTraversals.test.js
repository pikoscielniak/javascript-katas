"use strict";

var binaryTree = require('../../tree/referencedBinaryTree');
var treeTraversals = require('../../tree/treeTraversals');
var expect = require('chai').expect;

describe("treeTraversals", function () {
  var root;
  beforeEach(function () {
    root = binaryTree("1");
    root.insertLeft("2");
    root.insertRight("5");
    root.getLeftChild().insertLeft("3");
    root.getLeftChild().insertRight("4");

    root.getRightChild().insertLeft("6");
    root.getRightChild().insertRight("7");
  });

  it("should exsits", function () {
    expect(treeTraversals).to.be.ok;
  });

  describe("preorder", function () {
    it("should return '1 2 3 4 5 6 7'", function () {
      var result = treeTraversals.preorder(root);

      expect(result).to.equal("1 2 3 4 5 6 7");
    });

    it("should return '1 2 3 4 5 6 7 8 9'", function () {
      root.getLeftChild().getRightChild().insertLeft("5");
      root.getLeftChild().getRightChild().insertRight("6");

      root.getRightChild().setValue("7");
      root.getRightChild().getLeftChild().setValue("8");
      root.getRightChild().getRightChild().setValue("9");


      var result = treeTraversals.preorder(root);

      expect(result).to.equal("1 2 3 4 5 6 7 8 9");
    });
  });
});