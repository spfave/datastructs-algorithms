// Functional Programming: Higher Order Functions (HOF)
/**
 * 1. Accepts a function as an argument
 * 2. Might return a new function
 */

// Sample HOF
function withCount(fn) {
  let count = 0;

  return function (...args) {
    console.log(`Call count ${++count}`);
    return fn(...args);
  };
}

// Demo
const add = (x, y) => x + y;
const countedAdd = withCount(add);

console.log(`countedAdd(1,2): `, countedAdd(1, 2));
console.log(`countedAdd(3,4): `, countedAdd(3, 4));
console.log(`countedAdd(9,9): `, countedAdd(9, 9));
