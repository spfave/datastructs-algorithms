// Functional Programming: Pure/Impure Functions and Side Effects
/**
 * Pure func: Function that derives its output solely from its inputs, and causes no side effects
 * in the application or outside world
 */

// Pure function example
// Ex 1: Math function
const add1 = (x) => x + 1;

console.log(`add1(1): `, add1(1));
console.log(`add1(1): `, add1(1));
console.log('\n');

// Impure function example
// Ex 1: Use of global state
const COST_OF_ITEM = 17;
function cartTotal(quantity) {
  return quantity * COST_OF_ITEM;
}

console.log(`cartTotal(2): `, cartTotal(2));
console.log(`cartTotal(2): `, cartTotal(2));
console.log('\n');

// Ex 2: Same input, different output
function generateId() {
  return Math.floor(Math.random() * 1e9);
}

function createUser(name, age) {
  return {
    id: generateId(),
    name,
    age,
  };
}

console.log(`generateId(): `, generateId());
console.log(`generateId(): `, generateId());
console.log('\n');
console.log(`createUser('seb', 30): `, createUser('seb', 30));
console.log(`createUser('seb', 60): `, createUser('seb', 60));
console.log('\n');

// Ex 3: SIde effects inside application
let id = 0;
function createFoodItem(name) {
  return { id: ++id, name };
}

console.log(`createFoodItem('spaghetti'): `, createFoodItem('spaghetti'));
console.log(`createFoodItem('cheesecake'): `, createFoodItem('cheesecake'));
console.log(`createFoodItem('sushi'): `, createFoodItem('sushi'));
console.log(`id: `, id);
console.log('\n');

// Ex 4: Side effect of outside world
function logger(msg) {
  console.log(msg);
}

logger('console log is impure!');
