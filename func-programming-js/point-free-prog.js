// Functional Programming: Point Free Programming
/**
 * Point free programming is the replacement of anonymous function and interim variable with named
 * functions. Advantages of point free programming are:
 * - legibility
 * - reduce surface area for bugs
 * - ability to unit test named functions
 */

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Demo: non point free
const arrayDoubleA = array.map((v) => v * 2);
console.log(`arrayDoubleA: `, arrayDoubleA);
console.log('\n');

// Demo: point free
const double = (val) => 2 * val;
const arrayDouble = array.map(double);
console.log(`arrayDouble: `, arrayDouble);
