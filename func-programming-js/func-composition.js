// Functional Programming: Function Composition
/**
 * Composition is a key attribute of functional programming. Composition is a means to build up
 * complexity through the combination of simpler functions.  In a sense, composition is the nesting
 * of functions, passing the result of one in as the input into the next.
 */

// Example 1
const f = (x) => x + 2;
const g = (x) => x * 3;

console.log(`f(g(5)): `, f(g(5)));

// Example 2
const scream = (str) => str.toUpperCase();
const exclaim = (str) => `${str}!`;
const repeat = (str) => [str, str].join(' ');

console.log(
  `repeat(exclaim(scream('keyboards'))): `,
  repeat(exclaim(scream('keyboards')))
);

// Composition Function
const compose =
  (...fns) =>
  (arg) =>
    fns.reduceRight((acc, fn) => fn(acc), arg);

// Demo
const withExuberance = compose(repeat, exclaim, scream);
console.log(`withExuberance('keyboards'): `, withExuberance('keyboards'));
