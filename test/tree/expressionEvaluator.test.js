"use strict";

var expressionEvaluator = require('../../tree/expressionEvaluator');
var expressionParser = require('../../tree/expressionParser');
var expect = require('chai').expect;

describe("expressionEvaluator", function () {
  it("should exists", function () {
    expect(expressionEvaluator).to.be.ok;
  });
  describe("evaluate", function () {
    it("should exists", function () {
      expect(expressionEvaluator.evaluate).to.be.ok;
    });

    it("should evaluate expression ( ( 10 + 5 ) * 3 ) and return 45", function () {
      var tree = expressionParser.buildParseTree('( ( 10 + 5 ) * 3 )');
      var result = expressionEvaluator.evaluate(tree);
      expect(result).to.equal(45);
    });

    it("should evaluate expression ( 3 + ( 4 * 5 ) ) and return 23", function () {
      var tree = expressionParser.buildParseTree('( 3 + ( 4 * 5 ) )');
      var result = expressionEvaluator.evaluate(tree);
      expect(result).to.equal(23);
    });
  });
});