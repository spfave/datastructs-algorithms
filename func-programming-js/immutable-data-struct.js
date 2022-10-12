// Functional Programming: Immutable Data Structures
/**
 * Mutable: can be changed after creation
 * Immutable: cannot be changed after creation
 */

// Sample
function push(array, value) {
  const clone = [...array, value];
  return clone;
}

class MutableGlass {
  constructor(content, amount) {
    this.content = content;
    this.amount = amount;
  }

  takeDrink(value) {
    this.amount = Math.max(this.amount - value, 0);
    return this;
  }
}

class ImmutableGlass {
  constructor(content, amount) {
    this.content = content;
    this.amount = amount;
  }

  takeDrink(value) {
    return new ImmutableGlass(this.content, Math.max(this.amount - value, 0));
  }
}

// Demo
const a = [1, 2, 3];
const b = push(a, 4);

console.log(`a: `, a);
console.log(`b: `, b);
console.log(`a === b: `, a === b);
console.log(`\n`);

const mg1 = new MutableGlass('soda', 100);
const mg2 = mg1.takeDrink(25);
console.log(`mg1 === mg2: `, mg1 === mg2);
console.log(`mg1.amount === mg2.amount: `, mg1.amount === mg2.amount);
console.log(`\n`);

const ig1 = new ImmutableGlass('soda', 100);
const ig2 = ig1.takeDrink(25);
console.log(`ig1 === ig2: `, ig1 === ig2);
console.log(`ig1.amount === ig2.amount: `, ig1.amount === ig2.amount);
