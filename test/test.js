'use strict';

var arrayMeth = require(__dirname + '/../array_methods');
var expect = require('chai').expect;


describe('unique', function() {
   it('should return an array with any duplicate removed', function() {
      var testArray = [1, 2, 3, 2, 5];
      expect(arrayMeth.unique(testArray)).to.eql([1, 2, 3, 5]);
   });
});

describe('frequencyTwo', function() {
   it('should find the letter most used in the English language', function() {
      var testArray = ['david, dude, add, daddy'];
      expect(arrayMeth.frequencyTwo(testArray)).to.eql(['d']);
   });
});
