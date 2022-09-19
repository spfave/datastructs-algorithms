// Data Structure: Linked List
function CreateNode(value) {
  return {
    value,
    next: null,
  };
}

function CreateLinkedList() {
  return {
    head: null,
    tail: null,
    length: 0,

    push(value) {
      const node = CreateNode(value);

      this.head === null ? (this.head = node) : (this.tail.next = node);
      this.tail = node;
      this.length++;

      return node;
    },
    pop() {
      if (this.isEmpty()) return null;

      const tailNode = this.tail;
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
        this.length--;
        return tailNode;
      }

      let current = this.head;
      for (let nodeNumber = 0; nodeNumber < this.length - 2; nodeNumber++) {
        current = current.next;
      }
      this.tail = current;
      this.tail.next = null;
      this.length--;
      return tailNode;
    },
    get(index) {
      if (index < 0 || index > this.length - 1) return null;
      if (index === 0) return this.head;

      // index > 0
      let current = this.head;
      for (let nodeNumber = 0; nodeNumber < index; nodeNumber++) {
        current = current.next;
      }
      return current;
    },
    delete(index) {
      if (index < 0 || index > this.length - 1) return null;
      if (index === 0) {
        const deletedNode = this.head;
        this.head = deletedNode.next;
        this.length--;
        deletedNode.next = null; // to remove data connection for garage removal
        return deletedNode;
      }

      // index > 0
      let current = this.head;
      for (let nodeNumber = 0; nodeNumber < index - 1; nodeNumber++) {
        current = current.next;
      }
      const deletedNode = current.next;
      deletedNode.next === null
        ? (current.next = null)
        : (current.next = deletedNode.next);
      this.length--;
      deletedNode.next = null; // to remove data connection for garage removal
      return deletedNode;
    },
    isEmpty() {
      return this.length === 0;
    },
    print() {
      const nodeValues = [];
      let current = this.head;
      while (current) {
        nodeValues.push(current.value);
        current = current.next;
      }
      return nodeValues.join(' -> ');
    },
  };
}

// Demo
const linkedList = CreateLinkedList();
const values = [1, 2, 3, 4, 5];
const nodes = values.map((val) => linkedList.push(val));

console.log(`linkedList.isEmpty(): `, linkedList.isEmpty());
console.log(`linkedList.print(): `, linkedList.print());

linkedList.pop();
console.log(`linkedList.print(): `, linkedList.print());

linkedList.push(6);
console.log(`linkedList.print(): `, linkedList.print());
console.log(`linkedList.get(0): `, linkedList.get(0));
console.log(`linkedList.get(3): `, linkedList.get(3));
console.log(`linkedList.get(18): `, linkedList.get(18));
linkedList.delete(2);
console.log(`linkedList.head: `, linkedList.head);
console.log(`linkedList.tail: `, linkedList.tail);
console.log(`linkedList.print(): `, linkedList.print());
console.log(`linkedList.length: `, linkedList.length);

linkedList.pop();
linkedList.pop();
linkedList.pop();
linkedList.pop();
console.log(`linkedList.isEmpty(): `, linkedList.isEmpty());
console.log(`linkedList.print(): `, linkedList.print());
