// Functional Programming: Debug Functional Composition
/**
 * Functional composition are opaque, with no obvious way to visualize the data change as it works
 * through the composition functions. A trace function can be used to display the data before and
 * after each composition step.This permits continued use of point free programming while also giving
 * a view inside the composition function.
 */

// Pure functions
const pMap = (fn) => (xs) => xs.map(fn);
const pSplit = (pattern) => (str) => str.split(pattern);
const pJoin = (separator) => (xs) => xs.join(separator);
const pLowerCase = (str) => str.toLowerCase();

// Composition Function
const compose =
  (...fns) =>
  (arg) =>
    fns.reduceRight((acc, fn) => fn(acc), arg);

// Demo: with bug
const bookTitles = [
  'The Culture Code',
  'Designing Your Life',
  'Algorithms to Live By',
];

// const slugify = compose(pJoin('-'), pMap(pLowerCase), pMap(pSplit(' ')));
// const slugs = slugify(bookTitles);
// console.log(`slugs: `, slugs);

// Demo: trace function
const trace = (msg) => (x) => (console.log(msg, x), x); // uses comma operator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comma_Operator

// Debug composition order 1
// const slugify = compose(
//   pJoin('-'),
//   trace('after lowercase'),
//   pMap(pLowerCase),
//   trace('after split'),
//   pMap(pSplit(' ')),
//   trace('before split')
// );
// const slugs = slugify(bookTitles);
// console.log(`slugs: `, slugs);

// Debug composition order 2
// const slugify = compose(
//   pJoin('-'),
//   trace('after split'),
//   pMap(pSplit(' ')),
//   trace('after lowercase'),
//   pMap(pLowerCase),
//   trace('before lowercase')
// );
// const slugs = slugify(bookTitles);
// console.log(`slugs: `, slugs);

// Debug composition order 3
// const slugify = compose(
//   pMap(pJoin('-')),
//   trace('after split'),
//   pMap(pSplit(' ')),
//   trace('after lowercase'),
//   pMap(pLowerCase),
//   trace('before lowercase')
// );
// const slugs = slugify(bookTitles);
// console.log(`slugs: `, slugs);

// Clean up after debug
// const slugify = compose( // removing trace functions
//   pMap(pJoin('-')),
//   pMap(pSplit(' ')),
//   pMap(pLowerCase),
// );

const slugify = pMap(compose(pJoin('-'), pSplit(' '), pLowerCase)); // compose on individual functions and wrap with map
const slugs = slugify(bookTitles);
console.log(`slugs: `, slugs);
