/***********************************************************************
Write a function using fat arrow syntax, `arrowAvgValue(array)` that takes in an
array of numbers and returns the average number. Assign the below function to a
variable using the const keyword.

Examples:

arrowAvgValue([10, 20]); // => 15
arrowAvgValue([2, 3, 7]); // => 4
arrowAvgValue([100, 60, 64]); // => 74.66666666666667
***********************************************************************/

const arrowAvgValue = array => {
  // Your code here
  let sum = array.reduce(function(accum, num) {
    return accum + num;
  }, 0)

  if (array.length === 0) {
    return 0;
  } else {
    return sum / array.length;
  }
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = arrowAvgValue;
} catch (e) {
  return null;
}
