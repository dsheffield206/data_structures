'use strict';

var app = require(__dirname + '/../app');
var expect = require('chai').expect;


describe('unique', function() {
   it('should return an array with any duplicate removed', function() {
      var testArray = [1, 2, 3, 2, 5];
      expect(app.unique(testArray)).to.eql([1, 2, 3, 5]);
   });
});

describe('frequencyTwo', function() {
   it('should find the letter most used in the English language', function() {
      var testArray = ['david, dude, add, daddy'];
      expect(app.frequencyTwo(testArray)).to.eql(['d']);
   });
});
