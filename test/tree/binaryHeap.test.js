"use strict";

var binHeap = require('../../tree/binaryHeap');
var expect = require('chai').expect;

describe("binHeap", function () {
  it("should exist", function () {
    expect(binHeap).to.be.ok;
  });

  describe("insert", function () {
    it("should increment size", function () {
      var heap = binHeap();
      heap.insert(1);
      heap.insert(2);
      heap.insert(3);
      expect(heap.size()).to.equal(3);
    });
  });
});