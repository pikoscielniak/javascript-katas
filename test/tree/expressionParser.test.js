"use strict";

var expressionParser = require('../../tree/expressionParser');
var expect = require('chai').expect;

describe("expressionParser", function () {

  describe("buildParseTree", function () {
    it("should exists", function () {
      expect(expressionParser.buildParseTree).to.ok;
    });

    it("when give expresion '(' should return tree with left node", function () {
      var tree = expressionParser.buildParseTree('(');

      expect(tree.getLeftChild()).to.ok;
    });

    it("when give expresion '17' should return tree with node 17", function () {
      var tree = expressionParser.buildParseTree('17');

      expect(tree.getValue()).to.equals(17);
    });
    it("when give expresion '*' should return tree with node * and right child", function () {
      var tree = expressionParser.buildParseTree('*');

      expect(tree.getValue()).to.equals('*');
      expect(tree.getRightChild()).to.be.ok;
    });

    it("when give expresion '(17)' should return tree with left node 17", function () {
      var tree = expressionParser.buildParseTree('( 17 )');

      expect(tree.getLeftChild().getValue()).to.equals(17);
    });

    it("when give expresion 'k' should throw exception", function () {

      var func = function () {
        expressionParser.buildParseTree('k');
      };

      expect(func).to.throw("Invalid char");
    });

    it("when give expresion ' ( ( 10 + 5 ) * 3 )' should return tree with second left node 10", function () {
      var tree = expressionParser.buildParseTree('( ( 10 + 5 ) * 3 )');

      expect(tree.getLeftChild().getLeftChild().getValue()).to.equal(10);
    });

  });
});