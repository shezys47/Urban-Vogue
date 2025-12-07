// Task 9: Write a function findMax(arr) that returns the largest number.

// TODO: Create a function called 'findMax' that takes one parameter (arr)
// TODO: Find and return the largest number in the array
// TODO: You can use Math.max() or iterate through the array

function findMax(arr) {
  if (arr.length === 0) return undefined; // handle empty array
  let max = arr[0];
  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

// TODO: Export the findMax function
module.exports = findMax;
