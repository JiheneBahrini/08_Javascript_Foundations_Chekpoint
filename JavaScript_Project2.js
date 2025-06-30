//String Manipulation Functions
//
//Problem 1
function reverseString(str) {
  return str.split("").reverse().join("");
}
//
//Problem 2
function count(str) {
  return str.length;
}
//
//Problem 3
function capitalizeWords(str) {
  let result = [];
  let tab = str.split();
  for (const elt of tab) {
    result.push(elt[0].toUpperCase() + elt.substring(1));
  }
  let finalStr = result.join(" ");
  return finalStr;
}
/////////////////////////////////////////////////////////////////////
//Array Functions
//
//Problem 1
function findMaxAndMIN(arr) {
  let min = arr[0];
  let max = arr[0];
  for (const elt of arr) {
    if (elt < min) {
      min = elt;
    }
  }
  return {
    min,
    max,
  };
}
//
//Problem 2
function sumOfArray(arr) {
  let sum = 0;
  for (const elt of arr) {
    sum += elt;
  }
  return { sum };
}
//
//Problem 3
function filterCars(arr, carType) {
  let result = [];
  for (const elt of arr) {
    if (elt.includes(carType)) {
      result.push(elt);
    }
  }
  return result;
}
let filteredCars = filterCars(
  [
    "BMW X1 SUV",
    "BMW X2 COUPE SUV",
    "BMW 3 SERIES SEDAN",
    "MERCEDES G-CLASS SUV",
    "MERCEDES C-CLASS",
    "MERCEDES SL ROADESTER",
    "FORD MUSTANG",
    "FORD RANGER XLT",
  ],
  "ford"
);
/////////////////////////////////////////////////////////////////////
//Mathematical Functions
//
//Problem 1
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
}
//
//Problem 2
function isPrime(n) {
  let result = "$ {n} is Prime";
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      result = "${n} is not Prime";
      break;
    }
  }
  return result;
}
//
//Problem 3
function fibonaccisequence(n) {
  if (n <= 2) {
    return "The number of sequences must be above 2";
  }
  let tab = [0, 1];
  for (let i = 2; i < n; i++) {
    tab[i] = tab[i - 2] = tab[i - 1];
  }
  return tab;
}
