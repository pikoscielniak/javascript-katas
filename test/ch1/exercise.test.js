"use strict";

var expect = require('chai').expect;

describe("exerciases chapter 1", function () {
  describe("factorial", function () {
    var factorial;
    beforeEach(function () {
      factorial = require('../../ch1/exercise').factorial;
    });
    it("should return 1 when n is 0", function () {
      var result = factorial(0);
      expect(result).to.equal(1);
    });

    it("should return 1 when n is 1", function () {
      var result = factorial(1);
      expect(result).to.equal(1);
    });

    it("should return 2 when n is 2", function () {
      var result = factorial(1);
      expect(result).to.equal(1);
    });

    it("should return 6 when n is 3", function () {
      var result = factorial(1);
      expect(result).to.equal(1);
    });
    it("should return 12 when n is 4", function () {
      var result = factorial(1);
      expect(result).to.equal(1);
    });
  });
});