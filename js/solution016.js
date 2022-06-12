let arr = ['5', '0', 9, 3, 2, 1, '9', 6, 7]
let sortArr = []
arr.forEach((element,index) => {
    sortArr[index] = Number(element)
});
const sumArr = sortArr.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.