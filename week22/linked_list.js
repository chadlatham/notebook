'use strict';

const Node = require('./node');

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  add(value) {
    const node = new Node(value);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length += 1;
  }
}

const list = new SinglyLinkedList();
list.add('Hello g28');
list.add('Fuck yeah!');

for (var i = 0; i < 5; i++) {
  list.add(i);
}

console.dir(list, { depth: null });
