// Data Structure: Priority Queue
const { CreateQueue } = require('./queue');

function CreatePriorityQueue() {
  const highPriorityQueue = CreateQueue();
  const lowPriorityQueue = CreateQueue();

  return {
    enqueue(item, highPriority = false) {
      highPriority
        ? highPriorityQueue.enqueue(item)
        : lowPriorityQueue.enqueue(item);
    },
    dequeue() {
      highPriorityQueue.isEmpty
        ? lowPriorityQueue.dequeue()
        : highPriorityQueue.dequeue();
    },
    peek() {
      return highPriorityQueue.isEmpty
        ? lowPriorityQueue.peek()
        : highPriorityQueue.peek();
    },
    get length() {
      return highPriorityQueue.length + lowPriorityQueue.length;
    },
    isEmpty() {
      return highPriorityQueue.isEmpty() && lowPriorityQueue.isEmpty();
    },
  };
}

// Demo
const q = CreatePriorityQueue();
console.log(`q.isEmpty(): `, q.isEmpty());

q.enqueue('Fund a keyboard groupbuy');
q.enqueue('Build new keyboard');
console.log(`q.peek(): `, q.peek());
q.dequeue();
console.log(`q.peek(): `, q.peek());

q.enqueue('Complete project task', true);
q.enqueue('Submit project task MR', true);
console.log(`q.length: `, q.length);
console.log(`q.peek(): `, q.peek());

q.dequeue();
console.log(`q.peek(): `, q.peek());
q.dequeue();
console.log(`q.peek(): `, q.peek());
console.log(`q.length: `, q.length);
console.log(`q.isEmpty(): `, q.isEmpty());
