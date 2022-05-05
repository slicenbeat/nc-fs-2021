class Node {
  #prev;
  #next;
  #value;
  constructor(value) {
    this.#prev = null;
    this.#next = null;
    this.#value = value;
  }
  get prev() {
    return this.#prev;
  }
  set prev(prev) {
    this.#prev = prev;
  }

  get next() {
    return this.#next;
  }

  set next(next) {
    this.#next = next;
  }

  set value(value) {
    this.#value = value;
  }

  get value() {
    return this.#value;
  }
}

class DoublyLinkedList {
  #head;
  #tail;
  #length;
  constructor() {
    this.#head = null;
    this.#tail = null;
    this.#length = 0;
  }

  #getNode(index) {
    if (index > this.#length || index < 0) return;
    let currentIndex = 0;
    let currentNode = this.#head;
    while (currentIndex != index) {
      currentNode = currentNode.next;
      currentIndex++;
    }
    return currentNode;
  }

  getNodeValue(index) {
    let node = this.#getNode(index);
    return node.value;
  }

  push(value) {
    let newNode = new Node(value);
    if (this.#length === 0) {
      this.#head = this.#tail = newNode;
      this.#head.next = this.#tail;
      this.#tail.prev = this.#head;
    } else {
      this.#tail.next = newNode;
      let bufNode = this.#tail;
      this.#tail = newNode;
      this.#tail.prev = bufNode;
    }
    this.#length++;
  }

  addNode(index, value) {
    let currentNode = this.#getNode(index);

    if (this.#length === 0) {
      this.push(value);
      return;
    }

    if (this.#length === 1) {
      let newNode = new Node(value);
      this.#head = newNode;
      this.#tail = currentNode;
      this.#head.next = this.#tail;
      this.#tail.prev = this.#head;
      this.#length++;
      return;
    }

    if (index === 0) {
      let newNode = new Node(value);
      this.#head = newNode;
      this.#head.next = currentNode;
      currentNode.prev = this.#head;
      this.#length++;
      return;
    }
    if (this.#length - 1 === index) {
      let newNode = new Node(value);
      let prevNode = currentNode.prev;
      newNode.prev = prevNode;
      prevNode.next = newNode;
      newNode.next = currentNode;
      currentNode.prev = newNode;

      this.#length++;
      return;
    }

    if (!currentNode) {
      return;
    }

    let newNode = new Node(value);
    let prevNode = currentNode.prev;

    newNode.prev = prevNode;
    prevNode.next = newNode;
    newNode.next = currentNode;
    currentNode.prev = newNode;
    this.#length++;
  }

  editNode(index, value) {
    let currentNode = this.#getNode(index);
    if (!currentNode) {
      return;
    }
    currentNode.value = value;
  }

  deleteNode(index) {
    let currentNode = this.#getNode(index);

    if (this.#length === 1) {
      this.#head = null;
      this.#tail = null;
      this.#length--;
      return;
    }
    if (index === 0) {
      let nextNode = currentNode.next;
      nextNode.prev = null;
      this.#head = nextNode;
      this.#length--;
      return;
    }
    if (index === this.#length - 1) {
      let prevNode = currentNode.prev;
      prevNode.next = null;
      this.#tail = prevNode;
      this.#length--;
      return;
    }

    if (!currentNode) {
      return;
    }

    let nextNode = currentNode.next;
    let prevNode = currentNode.prev;
    nextNode.prev = prevNode;
    prevNode.next = nextNode;
    this.#length--;
  }
}

let list = new DoublyLinkedList();
list.addNode(0, "2");
list.addNode(0, "1");
list.push("3");
list.deleteNode(2);
list.editNode(0, "Первый");
list.push("Третий");

console.log(list);
