"use strict";

var expect = require('chai').expect,
  twoStack = require('../../ch1/twoStack');

describe("twoStack", function () {
  it("should exists", function () {
    expect(twoStack).to.be.ok;
  });
  describe("should return proper result when expression is", function () {
    it("( 4 + 5 )", function () {
      var result = twoStack('( 4 + 5 )');
      expect(result).to.equal(9);
    });
    it("( 1 + ( ( 2 + 3 ) * ( 4 * 5 ) ) )", function () {
      var result = twoStack("( 1 + ( ( 2 + 3 ) * ( 4 * 5 ) ) )");
      expect(result).to.equal(101);
    });
    it("( ( 1 + sqrt ( 5.0 ) ) / 2.0 )", function () {
      var result = twoStack("( ( 1 + sqrt ( 5.0 ) ) / 2.0 )");
      expect(result).to.equal(1.618033988749895);
    });
  });
});