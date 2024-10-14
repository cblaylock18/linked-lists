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

  prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this.head;
    this.head = newNode;
  }

  size() {
    let counter = 0;
    let currentNode = this.head;

    while (currentNode) {
      counter++;
      currentNode = currentNode.nextNode;
    }

    return counter;
  }

  headNode() {
    return this.head === null ? null : this.head.value;
  }

  tailNode() {
    let currentNode = this.head;

    if (currentNode === null) {
      return null;
    } else {
      while (currentNode.nextNode) {
        currentNode = currentNode.nextNode;
      }
      return currentNode.value;
    }
  }

  at(index) {
    let currentNode = this.head;

    for (let i = 0; i <= index; i++) {
      if (i === index) {
        return currentNode;
      } else if (!currentNode.nextNode) {
        return null;
      } else {
        currentNode = currentNode.nextNode;
      }
    }
    return null;
  }

  pop() {
    let currentNode = this.head;
    let previousNode = null;

    if (currentNode !== null) {
      while (currentNode.nextNode) {
        previousNode = currentNode;
        currentNode = currentNode.nextNode;
      }

      previousNode.nextNode = null;
    }
  }

  contains(value) {
    let currentNode = this.head;
    let contains = false;

    if (currentNode !== null) {
      do {
        if (currentNode.value === value) {
          contains = true;
        }
        currentNode = currentNode.nextNode;
      } while (currentNode);
      return contains;
    }
  }

  find(value) {
    let currentNode = this.head;
    let contains = false;
    let index = null;

    if (currentNode !== null) {
      index = -1;
      while (currentNode && !contains) {
        index++;
        if (currentNode.value === value) {
          contains = true;
        }
        currentNode = currentNode.nextNode;
      }
    }
    return contains === false ? null : index;
  }

  insertAt(value, index) {
    if (index === 0) {
      this.prepend(value);
      return;
    } else if (!this.at(index)) {
      return;
    }

    const newNode = new Node(value);
    let currentNode = this.head;
    let previousNode = null;

    for (let i = 0; i <= index; i++) {
      if (i === index) {
        console.log(previousNode);
        console.log(currentNode);
        previousNode.nextNode = newNode;
        newNode.nextNode = currentNode;
      } else {
        previousNode = currentNode;
        currentNode = currentNode.nextNode;
      }
    }
  }

  removeAt(index) {
    if (!this.at(index)) {
      return;
    }

    let currentNode = this.head;
    let previousNode = null;

    for (let i = 0; i <= index; i++) {
      if (i === index) {
        previousNode.nextNode = currentNode.nextNode;
      } else {
        previousNode = currentNode;
        currentNode = currentNode.nextNode;
      }
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
