// Node class to represent each node
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  // Create 4 nodes
  const node1 = new Node(3);
  const node2 = new Node(5);
  const node3 = new Node(13);
  const node4 = new Node(2);
  
  // Link the nodes
  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  
  // Traverse and print the linked list
  let currentNode = node1;
  while (currentNode) {
    process.stdout.write(currentNode.data + ' -> ');
    currentNode = currentNode.next;
  }
  console.log('null');
  