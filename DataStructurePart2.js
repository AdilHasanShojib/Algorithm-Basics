class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    append(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
        return;
      }
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  
    insertAt(position, data) {
      if (position === 0) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        return;
      }
      let current = this.head;
      let prev = null;
      let count = 0;
      while (current && count < position) {
        prev = current;
        current = current.next;
        count++;
      }
      if (count === position) {
        const newNode = new Node(data);
        prev.next = newNode;
        newNode.next = current;
      }
    }
  
    removeAt(position) {
      if (!this.head) {
        return;
      }
      if (position === 0) {
        this.head = this.head.next;
        return;
      }
      let current = this.head;
      let prev = null;
      let count = 0;
      while (current && count < position) {
        prev = current;
        current = current.next;
        count++;
      }
      if (count === position && current) {
        prev.next = current.next;
      }
    }
  
    getAt(position) {
      let current = this.head;
      let count = 0;
      while (current && count < position) {
        current = current.next;
        count++;
      }
      return current ? current.data : null;
    }
  
    removeLast() {
      if (!this.head) {
        return;
      }
      if (!this.head.next) {
        this.head = null;
        return;
      }
      let current = this.head;
      let prev = null;
      while (current.next) {
        prev = current;
        current = current.next;
      }
      prev.next = null;
    }
  
    insertLast(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
        return;
      }
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }
  
  // Example 
  const linkedList = new LinkedList();
  linkedList.append(10);
  linkedList.append(20);
  linkedList.append(30);
  
  linkedList.insertAt(1, 15);
  console.log(linkedList.getAt(1));  // Output: 15
  
  linkedList.removeAt(2);
  console.log(linkedList.getAt(2));  // Output: 30
  
  linkedList.removeLast();
  console.log(linkedList.getLast());  // Output: 15
  
  linkedList.insertLast(40);
  console.log(linkedList.getLast());  // Output: 40
  