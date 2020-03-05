const _Node = require('./_Node')

class LinkedList {
    constructor () {
        this.head = null; 
    }
    insertFirst(item) {
        this.head = new _Node(item, this.head)
    }
    insertBefore(item, currentNode) {
        //traverse head until find currentNode
        //set next of item to currentNode
        //tempNode = node before currentNode
        //currNode => item
       let newNode= new _Node(item,currentNode)
        if (currentNode === this.head) {
            this.insertFirst(item)
            return;
        }
        let foundItem = this.findNext(currentNode)
        console.log("found item",foundItem)
        //pushBack = foundItem.next.value

        newNode.next= foundItem
        console.log("this is new node",newNode)
        //item.next= pushBack
        
return item
        //let tempNode = 
        //console.log('foundItem', foundItemNext)
        //let newItem = new _Node(item, foundItem)
        //tempNode.next = newItem
        //return newItem
        //foundItem.next = item <= insert After
    }
    findNext(item){
        let currNode = this.head;
        if(!this.head) {
            return null;
        }

        if(currNode.next===item){
            return currNode
        }
        // while(currNode.next !=item ){
        //     if (currNode.next === null) {
        //         return null
        //     }
        //     else if{
        //         currNode = currNode.next
        //     }
        //     else if(currNode.next=== item){
        //         return currNode
        //     }
        // }
        return currNode
    }
    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item)
            return;
        }
        let tempNode = this.head;
        while(tempNode !== null) {
            if (currNode.next === null) {
                return null
            }
            tempNode = tempNode.next
        }
        tempNode.next = new _Node(item, null)
    }
    find(item) {
        let currNode = this.head;
        if(!this.head) {
            return null;
        }
        while (currNode.value !== item) {
            if (currNode.next === null) {
                return null
            }
            else {
                currNode = currNode.next
            }
        }
        return currNode
    }
    remove(item) {
        if (!this.head) {
            return null
        }
        if(this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        let currNode = this.head;
        let previousNode = this.head;
        while((currNode !== null) && (currNode.value !== item)) {
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }
    //insert
    //insertBefore
    //insertAfter
    //insertAt
}

function main () {
    const SLL = new LinkedList

    SLL.insertFirst('Apollo')
    SLL.insertFirst('Boomer')
    SLL.insertFirst('Helo')
    SLL.insertFirst('Husker')
    SLL.insertFirst('Starbuck')
    SLL.insertFirst('Tauhida')

    //SLL.remove('squirrel')

    SLL.insertBefore('squirrel', 'Tauhida')
    
    return SLL
}

console.log(main())