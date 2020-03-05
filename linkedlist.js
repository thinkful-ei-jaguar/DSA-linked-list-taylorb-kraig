const _Node = require("./_Node");

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }
  insertBefore(item, desiredNode, list) {
    //traverse head until find currentNode
    //set next of item to currentNode
    //tempNode = node before currentNode
    if (desiredNode === list.head.value) {
      this.insertFirst(item);
      return;
    }
    let current = list.head;
    let previous = list.head;

    while (current !== null && current.next.value != desiredNode) {
      previous = current; //old
      current = current.next; //looping if not equal
    }
    previous.next = new _Node(item, current.next);
    
  }

  insertAfter(item, desiredNode, list) {
        if (list.head === null) {
            this.insertFirst(item)
        }      
        let current = list.head
        let previous = list.head
        while (current.value !== desiredNode) {
           previous = current;
           current = current.next; 
        }
        current.next = new _Node(item, current.next)
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

  //SLL.insertBefore("squirrel", "Apollo", SLL);
  SLL.insertAfter("squirrel", "Apollo", SLL)

  return SLL;
}


main();
