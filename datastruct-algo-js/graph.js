// Data Structure: Graph
const { CreateQueue } = require('./queue');

function CreateNode(key) {
  const neighbors = [];

  return {
    key,
    neighbors,

    addNeighbor(node) {
      neighbors.push(node);
    },
  };
}

function CreateGraph(directed = false) {
  const nodes = [];
  const edges = [];

  return {
    directed,
    nodes,
    edges,

    addNode(key) {
      const newNode = CreateNode(key);
      nodes.push(newNode);
    },
    getNode(key) {
      return nodes.find((node) => node.key === key);
    },
    addEdge(node1Key, node2Key) {
      const node1 = this.getNode(node1Key);
      const node2 = this.getNode(node2Key);

      node1.addNeighbor(node2);
      edges.push(`${node1Key}-${node2Key}`);

      if (!directed) node2.addNeighbor(node1);
    },
    print() {
      return nodes
        .map(({ key, neighbors }) => {
          let result = key;

          if (neighbors.length) {
            result += ` -> ${neighbors
              .map((neighbor) => neighbor.key)
              .join(', ')}`;
          }

          return result;
        })
        .join('\n');
    },

    breathFirstSearch(startNodeKey, visitFn) {
      const startNode = this.getNode(startNodeKey);
      const visitedNodes = nodes.reduce((acc, node) => {
        acc[node.key] = false;
        return acc;
      }, {});

      const queue = CreateQueue();
      queue.enqueue(startNode);

      while (!queue.isEmpty()) {
        const currentNode = queue.dequeue();

        if (!visitedNodes[currentNode.key]) {
          visitFn(currentNode);
          visitedNodes[currentNode.key] = true;
        }

        currentNode.neighbors.forEach((node) => {
          if (!visitedNodes[node.key]) queue.enqueue(node);
        });
      }
    },
    depthFirstSearch(startNodeKey, visitFn) {
      const startNode = this.getNode(startNodeKey);
      const visitedNodes = nodes.reduce((acc, node) => {
        acc[node.key] = false;
        return acc;
      }, {});

      function explore(node) {
        if (visitedNodes[node.key]) return;

        visitFn(node);
        visitedNodes[node.key] = true;

        node.neighbors.forEach((node) => explore(node));
      }

      explore(startNode);
    },
  };
}

// Demo: Graph
const graph = CreateGraph(true);

graph.addNode('Heero');
graph.addNode('Relena');
graph.addNode('Doctor J');
graph.addNode('Zechs');

graph.addEdge('Heero', 'Relena');
graph.addEdge('Relena', 'Heero');
graph.addEdge('Doctor J', 'Heero');
graph.addEdge('Zechs', 'Heero');
graph.addEdge('Heero', 'Zechs');
graph.addEdge('Relena', 'Zechs');

console.log(`graph.print(): `, graph.print());
console.log('\n');

// Demo: Breath First Search
const graphBF = CreateGraph(true);
const nodesBF = ['a', 'b', 'c', 'd', 'e', 'f'];
const edgesBF = [
  ['a', 'b'],
  ['a', 'e'],
  ['a', 'f'],
  ['b', 'd'],
  ['b', 'e'],
  ['c', 'b'],
  ['d', 'c'],
  ['d', 'e'],
];

nodesBF.forEach((node) => {
  graphBF.addNode(node);
});

edgesBF.forEach((nodes) => {
  graphBF.addEdge(...nodes);
});

console.log('graph');
console.log(graphBF.print());
console.log('graph BF search:');
graphBF.breathFirstSearch('a', (node) => {
  console.log(node.key);
});
console.log('\n');

// Demo: Depth First Search
console.log('graph DF search:');
graphBF.depthFirstSearch('a', (node) => {
  console.log(node.key);
});
