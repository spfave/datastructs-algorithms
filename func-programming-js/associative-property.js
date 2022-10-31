// Functional Programming: Associative Property in Functional Composition
/**
 * Functional composition obeys the associative property of mathematics (e.g. (1 + 2) + 3 = 1 + (2 + 3)).
 * If there are two or more occurrences of the same operation, then how they are group does not matter.
 *
 * The same result occurs with different operation groupings because the order of operations does not change.
 * It is only the grouping of functions that changed through sub-composition.
 */

// Pure functions
const scream = (str) => str.toUpperCase();
const exclaim = (str) => `${str}!`;
const repeat = (str) => [str, str].join(' ');

// Composition Function
const compose =
  (...fns) =>
  (arg) =>
    fns.reduceRight((acc, fn) => fn(acc), arg);

// Demo
const withExuberance = compose(repeat, exclaim, scream);
console.log(`withExuberance('keyboards'): `, withExuberance('keyboards'));
console.log('\n');

// Associative order 1
const str = 'keyboards rule';
const repeatExcitedly = compose(repeat, exclaim);

console.log(compose(repeatExcitedly, scream)(str));
console.log('\n');

// Associative order 2
const screamLoudly = compose(exclaim, scream);

console.log(compose(repeat, screamLoudly)(str));
