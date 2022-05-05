class Stack {
  #stackArray;
  #stackPosition;
  #stackSize;

  constructor() {
    this.#stackArray = new Array();
    this.#stackPosition = -1;
    this.#stackSize = 0;
  }

  push(element) {
    this.#stackArray[++this.#stackPosition] = element;
    this.#stackSize++;
  }

  pop() {
    this.#stackSize--;
    return this.#stackArray[this.#stackPosition--];
  }

  get size() {
    return this.#stackSize;
  }

  getElement() {
    return this.#stackArray[this.#stackPosition];
  }
}

let stack = new Stack();

stack.push(46);
stack.push(85);
stack.push(509);

console.log(stack.size);
console.log(stack.getElement());
console.log(stack.pop());
console.log(stack.size);

console.log(stack);
