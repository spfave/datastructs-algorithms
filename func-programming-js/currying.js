// Functional Programming: Currying
/**
 * Act of taking a function that normally receives more than one argument, such as add, and refactoring
 * it so that it becomes a higher-order function that returns a series of functions each accepting only
 * one argument and only evaluating once we receive our final argument
 *
 * Arity: Describes the number of arguments a function receives.  Depending on the number it receives,
 * there are specific words to describe these functions.
 * - Unary: function that receives 1 argument
 * - Binary: function that receives 2 arguments
 * - Ternary: 3 arguments
 * - Quaternary: 4 arguments
 * - ...
 *
 * Thus the act of currying can be described as taking a multivariate function and turning it into a
 * series of unary functions.
 */

// Sample
function adder(x) {
  return function (y) {
    return x + y;
  };
}
const adderA = (x) => (y) => x + y;

// Demo
console.log(`adder(3,4): `, adder(3, 4));
console.log('\n');

const addNine = adder(9);
console.log(`addNine(9): `, addNine(9));
console.log(`addNine(19): `, addNine(19));
console.log(`addNine(-5): `, addNine(-5));
console.log('\n');

const minusNine = adderA(-9);
console.log(`minusNine(9): `, minusNine(9));
console.log(`minusNine(19): `, minusNine(19));
console.log(`minusNine(-5): `, minusNine(-5));
