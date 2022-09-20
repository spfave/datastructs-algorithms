// Data Structure: Graph
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
  };
}

// Demo
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
