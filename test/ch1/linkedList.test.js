"use strict";

var expect = require('chai').expect,
  linkedList;

describe("linkedList", function () {
  beforeEach(function () {
    linkedList = require('../../ch1/linkedList')();
  });

  it("should exists", function () {
    expect(linkedList).to.be.ok;
  });
  describe("getCount", function () {
    it("should exists", function () {
      expect(linkedList.getCount).to.be.ok;
    });
    it('should return zero on init', function () {
      expect(linkedList.getCount()).to.equal(0);
    });
  });
  describe("addAtBeginning", function () {
    it("should exists", function () {
      expect(linkedList.addAtBeginning).to.be.ok;
    });

    it("after one call count should be 1", function () {
      linkedList.addAtBeginning("test");
      expect(linkedList.getCount()).to.equal(1);
    });


    it("after two call count should be 2", function () {
      linkedList.addAtBeginning("test");
      linkedList.addAtBeginning("test2");
      expect(linkedList.getCount()).to.equal(2);
    });
  });
  describe("removeAtBeginning", function () {
    it("should exists", function () {
      expect(linkedList.removeAtBeginning).to.be.ok;
    });
    it("after addAtBeginning should return the same object", function () {
      var obj = {};
      linkedList.addAtBeginning(obj);
      var result = linkedList.removeAtBeginning();
      expect(result).to.equal(obj);
    });
    it("on init should return null", function () {
      expect(linkedList.removeAtBeginning()).to.equal(null);
    });
    it("should decrement count", function () {
      linkedList.addAtBeginning("test");
      linkedList.addAtBeginning("test2");
      expect(linkedList.getCount()).to.equal(2);
      linkedList.removeAtBeginning();
      expect(linkedList.getCount()).to.equal(1);
    });
  });
  describe("each", function () {
    var values,
      currentIndex;
    beforeEach(function () {
      values = ["test1", "test2"];
      currentIndex = 0;
    });
    it("should exists", function () {
      expect(linkedList.each).to.be.ok;
    });
    it("callback shouldn't be called when list is empty", function () {
      linkedList.each(function () {
        currentIndex++;
      });
      expect(currentIndex).to.equal(0);
    });
    it("when count is 2 callback should called 2 times", function () {
      linkedList.addAtBeginning(values[0]);
      linkedList.addAtBeginning(values[1]);
      expect(linkedList.getCount()).to.equal(2);
      linkedList.each(function () {
        currentIndex++;
      });
      expect(currentIndex).to.equal(2);
    });
    it("callback should be called with proper values", function () {
      var currentIndex = 0;
      linkedList.addAtBeginning(values[0]);
      linkedList.addAtBeginning(values[1]);
      linkedList.each(function (element, index) {
        var i = values.length - currentIndex - 1;
        var value = values[i];
        expect(element).to.equal(value);
        expect(index).to.equal(currentIndex);
        currentIndex++;
      });
    });
  });
  describe("insertAt", function () {
  });
  describe("removeAt", function () {
  });
  describe("addAtEnd", function () {
  });
  describe("removeAtEnd", function () {
  });
});