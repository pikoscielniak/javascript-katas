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

  describe("reverseEach", function () {
    var values,
      currentIndex,
      calledNum;

    beforeEach(function () {
      values = ["test1", "test2"];
      currentIndex = values.length - 1;
      calledNum = 0;
    });

    it("should exists", function () {
      expect(linkedList.reverseEach).to.be.ok;
    });

    it("callback shouldn't be called when list is empty", function () {
      linkedList.reverseEach(function () {
        calledNum++;
      });
      expect(calledNum).to.equal(0);
    });

    it("when count is 2 callback should called 2 times", function () {
      linkedList.addAtBeginning(values[0]);
      linkedList.addAtBeginning(values[1]);
      expect(linkedList.getCount()).to.equal(2);
      linkedList.reverseEach(function () {
        calledNum++;
      });
      expect(calledNum).to.equal(2);
    });

  });

  describe("addAtEnd", function () {
    it("should exists", function () {
      expect(linkedList.addAtEnd).to.be.ok;
    });
    it("should add element at end", function () {
      linkedList.addAtEnd("test1");
      linkedList.addAtEnd("test2");
      expect(linkedList.getCount()).to.equal(2);
      var element = linkedList.getLast();
      expect(element).to.equal("test2");
    });
  });

  describe("removeAtEnd", function () {
    it("should exists", function () {
      expect(linkedList.removeAtEnd).to.be.ok;
    });
    it("when list is empty should return null", function () {
      expect(linkedList.removeAtEnd()).to.equal(null);
    });
    it("should remove last element", function () {
      linkedList.addAtEnd("test1");
      linkedList.addAtEnd("test2");

      var element = linkedList.removeAtEnd();

      expect(element).to.equal("test2");
      expect(linkedList.getCount()).to.equal(1);
    });
  });

  describe("getLast", function () {
    it("should exists", function () {
      expect(linkedList.getLast).to.be.ok;
    });
    it("should return null when list is empty", function () {
      expect(linkedList.getLast()).to.equal(null);
    });
    it("should return last element", function () {
      linkedList.addAtBeginning("test1");
      linkedList.addAtBeginning("test2");
      expect(linkedList.getCount()).to.equal(2);

      var element = linkedList.getLast();

      expect(element).to.equal("test1");
    });
    it("when last element was removed should return null", function () {
      linkedList.addAtBeginning("test1");
      linkedList.removeAtBeginning();
      expect(linkedList.getLast()).to.equal(null);
      expect(linkedList.getFirst()).to.equal(null);
    });
    it("when last element was removed getFirst and getLast should return null", function () {
      linkedList.addAtEnd("test1");
      linkedList.removeAtEnd();
      expect(linkedList.getLast()).to.equal(null);
      expect(linkedList.getFirst()).to.equal(null);
    });
  });
  describe("getFirst", function () {
    it("should exists", function () {
      expect(linkedList.getFirst).to.be.ok;
    });
    it("should return null when list is empty", function () {
      expect(linkedList.getFirst()).to.equal(null);
    });
    it("should return first element", function () {
      linkedList.addAtBeginning("test1");
      linkedList.addAtBeginning("test2");

      var element = linkedList.getFirst();

      expect(element).to.equal("test2");
    });
    it("when one element was added getLast and getFirst should return the same object", function () {
      linkedList.addAtBeginning("test");
      var first = linkedList.getFirst();
      var last = linkedList.getLast();

      expect(first).to.equal(last);
    });
    it("when one element was added getLast and getFirst should return the same object", function () {
      linkedList.addAtEnd("test");
      var first = linkedList.getFirst();
      var last = linkedList.getLast();

      expect(first).to.equal(last);
    });
  });
  describe("insertAt", function () {
  });
  describe("removeAt", function () {
  });
});