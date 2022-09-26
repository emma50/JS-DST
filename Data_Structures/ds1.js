/**Singly linkedlist */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node (val)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } 
    else {
      this.tail.next = newNode
      this.tail = this.tail.next
    }
    this.length++
    return this;
  }

  pop() {
    if (!this.head) return undefined

    let currentNode = this.head
    let previousNode = currentNode;
    
    while (currentNode.next) {
      previousNode = currentNode
      currentNode = currentNode.next
    }
    
    this.tail = previousNode
    this.tail.next = null
    this.length--

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return currentNode;
  }

  unshift(val) {
    const newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    }
    else {
      let newHead = newNode;
      let currentHead = this.head;
      newHead.next = currentHead;
      currentHead = newHead
    }

    this.head = currentHead
    this.length++

    return newHead;
  }

  shift() {
    if (!this.head) return undefined

    let currentHead = this.head
    let newHead = currentHead.next;

    this.head = newHead
    this.length--

    if (this.length === 0) {
      this.tail = null
    }

    return currentHead;
  }

  getAll() {
    return this;
  }

  get(index) {
    if ((index < 0) || (index >= this.length)) return null;
    let counter = 0;
    let current = this.head
    while (counter !== index) {
      current = current.next
      counter++
    }
    return current
  }

  set(index, value) {
    let foundNode = this.get(index)
    if (foundNode) {
      foundNode.val = value;
      return true
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false
    if (index === 0) !!this.unshift(value)
    if (index === this.length) !!this.push(value)

    let newNode = new Node(value)
    let previousIndex = this.get(index - 1)
    let temp = previousIndex.next
    previousIndex.next = newNode
    newNode.next = temp

    this.length++
    return newNode;
  }

  remove(index) {
    if (index < 0 || index > this.length) return false
    if (index === 0) !!this.shift()
    if (index === this.length - 1) !!this.pop()

    let previousNode = this.get(index - 1)
    let removed = previousNode.next
    previousNode.next = removed.next

    this.length--
    return removed;
  }

  print() {
    let arr = []
    let current = this.head

    while (current) {
      arr.push(current)
      current = current.next
    }

    console.log(arr)
  }

  reverse() {
    if (this.length === 0) return false

    let node = this.head
    this.head = this.tail
    this.tail = node
    let prev = null;
    let next = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next
      node.next = prev
      prev = node
      node = next
    }

    return this;

  /**
   * list.push('hello')
    list.push('Emmanuel')
    list.push('Emmanuella')
    // Data
    Node: { val: hello, 
      next: {
        val: Emmanuel,
        next: {
          val: Emmanuella
          next: null
        }
      }
    }

    // In memory
    let node = {val: hello, next: Node};
    {val: hello, next: Node} = {val: Emmanuella, next: null};
    {val: Emmanuella, next: null} = {val: hello, next: Node};
    let previous = null;
    Let next = null;

    First Iteraion:
    next = {
        val: Emmanuel,
        next: {
          val: Emmanuella
          next: null
        };
    node.next = null;
    previous = {val: hello, next: null};
    node = {
        val: Emmanuel,
        next: {
          val: Emmanuella
          next: null
        };

    Second Iteraion:
    next = {
          val: Emmanuella
          next: null
        };
    node.next = {val: hello, next: null};
    previous = {
        val: Emmanuel,
        next: {
          val: Emmanuella
          next: null
        };
    node = {
          val: Emmanuella
          next: null
        };

    Third Iteraion:
    next = null
    node.next = {
        val: Emmanuel,
        next: {
          val: Emmanuella
          next: null
        };
    previous = {
          val: Emmanuella
          next: null
        };
    node = null
   */
  }
}

let list = new SinglyLinkedList()
list.push('hello')
list.push('Emmanuel')
list.push('Emmanuelllla')
list.push('Tony')
list.push('Felicia')
// list.pop()
// list.shift('Daniella')
// list.shift()
// list.getAll()
// list.get(1)
// list.set(0, 'Avatar')
// list.insert(0, 'Williams')
// list.remove(2)
// list.print()
list.reverse()

function fast () {
  let count = 0;

  while(count < 3) {
    console.log(count, 'BEFORE')
    count++;
    console.log(count, 'AFTER')
  }
  return count;
}

fast()

/**
 * I'm not active on any of them. I'm not a social media kind of guy nor a picture freak and I believe my last time on both was 5-6years ago. I only did a retweet on twitter recently for the organization I work for.
on instagram it's emma_iyke23 and on twitter it's Emma23. Just to let you know both accounts are boring though 
 */