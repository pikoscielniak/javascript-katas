var BinaryTree = require('../../tree/referencedBinaryTree');
var expect = require('chai').expect;

describe("listOfListBinaryTree", function () {
  "use strict";

  var rootValue;
  var root;

  beforeEach(function () {
    rootValue = "rootKey";
    root = new BinaryTree(rootValue);
  });

  it("should exists", function () {
    expect(BinaryTree).to.be.ok;
  });

  describe("constructor", function () {
    it("should create new binary tree with proper key", function () {


      expect(root.getValue()).to.equal(rootValue);
      expect(root.getLeftChild()).to.equal(null);
      expect(root.getRightChild()).to.equal(null);
    });
  });

  describe("insertLeft", function () {
    it("when there is no left child should insert left child", function () {
      var leftChild = "leftChild";

      root.insertLeft(leftChild);

      expect(root.getLeftChild().getValue()).to.equal(leftChild);
    });

    it("when there is already left child should insert left child and insert existing child as its own", function () {
      var oldLeftChild = "old left Child";
      root.insertLeft(oldLeftChild);
      expect(root.getLeftChild().getValue()).to.equal(oldLeftChild);
      var newLeftChild = "new left child";

      root.insertLeft(newLeftChild);

      expect(root.getLeftChild().getValue()).to.equal(newLeftChild);
      expect(root.getLeftChild().getLeftChild().getValue()).to.equal(oldLeftChild);
    });
  });

  describe("insertRight", function () {
    it("when there is no right child should insert right child", function () {
      var rightChild = "left Child";

      root.insertRight(rightChild);

      expect(root.getRightChild().getValue()).to.equal(rightChild);
    });

    it("when there is already left child should insert left child and insert existing child as its own", function () {
      var oldRightChild = "old right Child";
      root.insertRight(oldRightChild);
      expect(root.getRightChild().getValue()).to.equal(oldRightChild);
      var newRightChild = "new right child";

      root.insertRight(newRightChild);

      expect(root.getRightChild().getValue()).to.equal(newRightChild);
      expect(root.getRightChild().getRightChild().getValue()).to.equal(oldRightChild);
    });
  });

  describe("getRightChild", function () {
    it("should return right child", function () {
      var rightChild = {};
      root.insertRight(rightChild);

      expect(root.getRightChild().getValue()).to.equal(rightChild);
    });
  });

  describe("getLeftChild", function () {
    it("should return left child", function () {
      var leftChild = {};
      root.insertLeft(leftChild);

      expect(root.getLeftChild().getValue()).to.equal(leftChild);
    });
  });

  describe("getValue", function () {
    it("should return node value", function () {

      expect(root.getValue()).to.equal(rootValue);
    });
  });


  describe("setValue", function () {
    it("should set node value", function () {
      var newValue = {};
      root.setValue(newValue);

      expect(root.getValue()).to.equal(newValue);
    });
  });

  describe("setLeftChild", function () {
    it("should set left child", function () {
      var leftChild = new BinaryTree({});

      root.setLeftChild(leftChild);

      expect(root.getLeftChild()).to.equal(leftChild);
    });
  });

  describe("setRightChild", function () {
    it("should set right child", function () {
      var rightChild = new BinaryTree({});

      root.setRightChild(rightChild);

      expect(root.getRightChild()).to.equal(rightChild);
    });
  });
});