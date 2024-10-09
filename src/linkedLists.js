class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
    let currentNode = this.head;

    if (currentNode === null) {
      this.head = newNode;
    } else {
      while (currentNode.nextNode) {
        currentNode = currentNode.nextNode;
      }

      currentNode.nextNode = newNode;
    }
  }

  toString() {
    let string = "";
    let currentNode = this.head;

    do {
      if (currentNode) {
        string = string + `( ${currentNode.value} )`;
        string = string + " -> ";
        currentNode = currentNode.nextNode;
      }
      if (!currentNode) {
        string = string + `( null )`;
      }
    } while (currentNode);

    return string;
  }
}

export { LinkedList };
