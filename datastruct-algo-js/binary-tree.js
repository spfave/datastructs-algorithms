// Data Structure: Binary Tree
function CreateBinaryNode(key) {
  return {
    key,
    left: null,
    right: null,
    addLeft(leftKey) {
      const leftNode = CreateBinaryNode(leftKey);
      this.left = leftNode;
      return leftNode;
    },
    addRight(rightKey) {
      const rightNode = CreateBinaryNode(rightKey);
      this.right = rightNode;
      return rightNode;
    },
  };
}

const TRAVERSALS = {
  IN_ORDER: (node, visitFn) => {
    if (node !== null) {
      TRAVERSALS.IN_ORDER(node.left, visitFn);
      visitFn(node);
      TRAVERSALS.IN_ORDER(node.right, visitFn);
    }
  },
  PRE_ORDER: (node, visitFn) => {
    if (node !== null) {
      visitFn(node);
      TRAVERSALS.PRE_ORDER(node.left, visitFn);
      TRAVERSALS.PRE_ORDER(node.right, visitFn);
    }
  },
  POST_ORDER: (node, visitFn) => {
    if (node !== null) {
      TRAVERSALS.POST_ORDER(node.left, visitFn);
      TRAVERSALS.POST_ORDER(node.right, visitFn);
      visitFn(node);
    }
  },
};

function CreateBinaryTree(rootKey) {
  const root = CreateBinaryNode(rootKey);

  return {
    root,
    print(traversalType = 'IN_ORDER') {
      let result = '';

      function visit(node) {
        result += result.length === 0 ? node.key : ` -> ${node.key}`;
      }

      TRAVERSALS[traversalType](this.root, visit);
      return result;
    },
  };
}

// Demo
const tree = CreateBinaryTree('a');
const b = tree.root.addLeft('b');
const c = tree.root.addRight('c');
const d = b.addLeft('d');
const e = b.addRight('e');
const f = c.addLeft('f');
const g = c.addRight('g');
const h = d.addLeft('h');
const i = d.addRight('i');

console.log(`tree.print('IN_ORDER'): `, tree.print('IN_ORDER'));

console.log(`tree.print('PRE_ORDER'): `, tree.print('PRE_ORDER'));

console.log(`tree.print('POST_ORDER'): `, tree.print('POST_ORDER'));
