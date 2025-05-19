// STRING MANIPULATION FUNCTIONS

// Function to reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Function to count the characters in a string
function countChars(str) {
  return str.length;
}

// function to capitalize the first letter of each word in a sentence
function capitalizeFirstChar(str) {
  const splitString = str.split(" ");

  return splitString
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

// ARRAY FUNCTIONS

// Function to find the maximum and minimum values in an array of numbers
function findMaxMin(arr) {
  return [Math.max(...arr), Math.min(...arr)];
}

// function that calculates the sum of all elements in an array
function sumArray(arr) {
  return arr.reduce((cummulator, currentValue) => cummulator + currentValue, 0);
}

// function that filters out elements from an array based on a given condition
function filterArray(arr) {
  // array that returns positive numbers from an array of integers
  return arr.filter((num) => num >= 0);
}

// MATHEMATICAL FUNCTION

// A function to calculate the factorial of a given number
function factorial(num) {
  if (num < 0 || isNaN(num)) return NaN;

  result = 1;

  if (num == 0) return result;

  for (let i = num; i > 0; i--) {
    result *= i;
  }
  return result;
}

// function to check if a number is prime or not
function checkPrime(num) {
  if (num <= 1) return false;
  if (num % 2 == 0) return false;

  let sqrt = Math.sqrt(num);
  for (let i = 3; i < sqrt; i += 2) {
    if (num % i == 0) return false;
  }

  return true;
}

function fibonacciSeries(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib;
}
