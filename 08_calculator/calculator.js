const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  // if (arr.length === 0) { return 0 };
  // if (arr.length === 1) { return arr[0] };
  let sum = arr.reduce((total, item) => {
    return total + item;
  }, 0)
  return sum;
};

const multiply = function (...args) {
  // use rest param above since total args unknown
  if (args.length < 2) { return 0 };
  let product = args.reduce((total, arg) => {
    return total * arg;
  }, 1)
  return product;
};

const power = function (a, b) {
  let power = [];
  //starts at index 0 so < not <= 
  while (power.length < b) {
    power.push(a)
  };
  // return power
  let exp = power.reduce((total, item) => {
    return total * item
  }, 1)
  return exp;
};

const factorial = function (a) {
  if (a === 0 || a === 1) { return 1 };
  for (let i = a - 1; i >= 1; i--) {
    a *= i;
  }
  return a;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
