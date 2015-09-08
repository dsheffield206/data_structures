'use strict';

var sports = ['football', 'baseball', 'basketball'];
var moreSports = ['soccer', 'hockey']

// array push
Array.prototype.push.apply(sports, moreSports);
console.log(sports);

// array pop
Array.prototype.pop.apply(sports);
console.log(sports);

// array shift
Array.prototype.shift(sports);
console.log(sports);

// array unshift
Array.prototype.unshift.call(sports, 'football');
console.log(sports);


// unique function
var unique = function(array) {
  var seen = {};
  var current;
  var newArray = [];

  for(var i = 0; i < array.length; i++) {
      current = array[i];
      if(!seen[current]) {
        seen[current] = true;
        newArray.push(current);
      }
  }
  return newArray;
};

// frequency 2 function
var frequencyTwo = function(array){
  var seen = {};
  var current;
  var maxCount = 0;
  var maxLetter = [];

  for (var i = 0; i < array.length; i++) {
      current = arrayString.charAt(i);
      if (!seen[current]) {
          seen[current] = 1;
      } else {
          current++;
      }
      if (seen[current] > maxCount) {
        maxCount = seen[current];
        maxLetter = [maxCount];
      }
      if (seen[current] === maxCount) {
        maxLetter.push(current);
      }
  }
  return maxLetter.slice(1, maxLetter.length);
}


exports.unique = unique;
exports.frequencyTwo = frequencyTwo;
