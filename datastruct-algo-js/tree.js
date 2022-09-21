// Data Structure: Tree
function CreateNode(key) {
  const children = [];

  return {
    key,
    children,
    addChild(key) {
      const childNode = CreateNode(key);
      children.push(childNode);
      return childNode;
    },
  };
}

function CreateTree(rootKey) {
  const root = CreateNode(rootKey);

  return {
    root,
    print() {
      let result = [];

      function traverse(node, visitFn, depth) {
        visitFn(node, depth);

        if (node.children.length) {
          node.children.forEach((node) => traverse(node, visitFn, depth + 1));
        }
      }

      function addKeyToResult(node, depth) {
        console.log(`depth: `, depth, `_${' '.repeat(depth * 1)}_`);
        result +=
          result.length === 0
            ? node.key
            : `\n${' '.repeat(depth * 2)}${node.key}`;
      }

      traverse(root, addKeyToResult, 0);

      return result;
    },
  };
}

// Demo
const dom = CreateTree('html');
const head = dom.root.addChild('head');
const body = dom.root.addChild('body');

const title = head.addChild('title');
const header = body.addChild('header');
const main = body.addChild('main');
const footer = body.addChild('footer');

const h1 = header.addChild('h1');
const p = main.addChild('p');
const copyright = footer.addChild('copyright');

console.log('print tree:');
console.log(dom.print());
