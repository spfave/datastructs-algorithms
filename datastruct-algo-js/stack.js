// Data Structure: Stack (last in first out)
function CreateStack() {
  const stack = [];

  return {
    push(item) {
      stack.push(item);
    },
    pop() {
      return stack.pop();
    },
    peek() {
      return stack[stack.length - 1];
    },
    get length() {
      return stack.length;
    },
    isEmpty() {
      return stack.length === 0;
    },
  };
}

// Demo
const s = CreateStack();
console.log(`s.isEmpty(): `, s.isEmpty());

s.push('book 1');
s.push('book 2');
s.push('book 3');
s.push('book 4');
console.log(`s.length: `, s.length);
console.log(`s.peek(): `, s.peek());
s.pop();
console.log(`s.peek(): `, s.peek());
console.log(`s.isEmpty(): `, s.isEmpty());

s.pop();
s.pop();
s.pop();
console.log(`s.peek(): `, s.peek());
