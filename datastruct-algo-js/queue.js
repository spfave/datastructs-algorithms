// Data Structure: Queue (first in first out)
function CreateQueue() {
  const queue = [];

  return {
    enqueue(item) {
      queue.push(item);
    },
    dequeue() {
      queue.shift();
    },
    peek() {
      return queue[0];
    },
    get length() {
      return queue.length;
    },
    get isEmpty() {
      return queue.length === 0;
    },
  };
}

module.exports = { CreateQueue };

// Demo
const q = CreateQueue();
console.log(`q.isEmpty: `, q.isEmpty);

q.enqueue('Fund a keyboard groupby');
q.enqueue('Wait a rather long time for keyboard');
q.enqueue('Build new keyboard');
q.enqueue('That new thock makes it all worth it');

console.log(`q.peek(): `, q.peek());
console.log(`q.length: `, q.length);
console.log(`q.isEmpty: `, q.isEmpty);

q.dequeue();
q.dequeue();
q.dequeue();
console.log(`q.peek(): `, q.peek());

q.dequeue();
console.log(`q.peek(): `, q.peek());
console.log(`q.isEmpty: `, q.isEmpty);
