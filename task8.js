// Task 8: Write a function factorial(n) that returns factorial of n.

// TODO: Create a function called 'factorial' that takes one parameter (n)
// TODO: Calculate and return the factorial of n (n! = n × (n-1) × (n-2) × ... × 1)
// TODO: Remember that 0! = 1 and 1! = 1

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// TODO: Export the factorial function
module.exports = factorial;
