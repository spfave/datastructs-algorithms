// Functional Programming: Improved Functionality with Proper Argument Order
/**
 * In ordering function arguments in a specific order it enables these functions to benefit from
 * partial application, improved reusability, and enable function composition. A key to this is
 * order arguments is order of most to least specific. In the context of curried functions, the data
 * will be the least specific argument.
 */

// Ordering data first
const mapD = (array) => (cb) => array.map(cb);

const array = [1, 2, 3, 4, 5];
const double = (v) => v * 2;

// In this case the data is locked in at function creation time. Only the callback function
// can be changed
const withArr = mapD(array);

console.log(`withArr(double): `, withArr(double));
console.log(
  `withArr((v) => v + 7): `,
  withArr((v) => v + 7)
);
console.log('\n');

// Ordering data last
const mapCb = (cb) => (array) => array.map(cb);

const withDouble = mapCb(double);

console.log(`withDouble(array): `, withDouble(array));
console.log(`withDouble([9,7,5]): `, withDouble([9, 7, 5]));
console.log('\n');

const prop = (key) => (obj) => obj[key];
const getNameProp = prop('name');
const folks = [{ name: 'Seb' }, { name: 'Jc' }, { name: 'Kwab' }];

console.log(`mapCb(getNameProp)(folks): `, mapCb(getNameProp)(folks));
