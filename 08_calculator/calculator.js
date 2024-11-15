const add = function(x, y) {
	return x+y
};

const subtract = function(x, y) {
	return x-y
};

const sum = function(arr) {
	return arr.reduce((s, e) => s + e, 0)
};

const multiply = function(arr) {
  return arr.reduce((s, e) => s * e, 1)
};

const power = function(n, e) {
	return Math.pow(n, e)
};

const factorial = function(n) {
	let ans = 1;
  for (let i=1; i<=n; i++) ans *= i;
  return ans
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
