const _Node = require("./_Node");

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }
  insertBefore(item, currentNode, list) {
    //traverse head until find currentNode
    //set next of item to currentNode
    //tempNode = node before currentNode
    console.log("starting list", list)
    if (currentNode === list.head.value) {
      this.insertFirst(item);
      return;
    }
    let current = list.head;
    let previous = list.head;
    let newNode = new _Node(item, currentNode);

    while (current !== null && current.next.value != currentNode) {
      previous = current; //old
      current = current.next; //looping if not equal
    }
    console.log("this is current outide of while", current)
    previous.next = new _Node(item, current.next);
    console.log("this is new node", previous.next)
    console.log("entire list",list)
    
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
      return;
    }
    let tempNode = this.head;
    while (tempNode !== null) {
      if (currNode.next === null) {
        return null;
      }
      tempNode = tempNode.next;
    }
    tempNode.next = new _Node(item, null);
  }
  find(item) {
    let currNode = this.head;
    if (!this.head) {
      return null;
    }
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }
  remove(item) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let currNode = this.head;
    let previousNode = this.head;
    while (currNode !== null && currNode.value !== item) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log("Item not found");
      return;
    }
    previousNode.next = currNode.next;
  }
  //insert
  //insertBefore
  //insertAfter
  //insertAt
}

function main() {
  const SLL = new LinkedList();

  SLL.insertFirst("Apollo");
  SLL.insertFirst("Boomer");
  SLL.insertFirst("Helo");
  SLL.insertFirst("Husker");
  SLL.insertFirst("Starbuck");
  SLL.insertFirst("Tauhida");

  //SLL.remove('squirrel')

  SLL.insertBefore("squirrel", "Apollo", SLL);

  return SLL;
}


console.log(main());
