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
  
    getFirst() {
      return this.head ? this.head.data : null;
    }
  
    getLast() {
      if (!this.head) {
        return null;
      }
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      return current.data;
    }
  
    getSize() {
      let count = 0;
      let current = this.head;
      while (current) {
        count++;
        current = current.next;
      }
      return count;
    }
  }
  
  // Example usage
  const linkedList = new LinkedList();
  linkedList.append(10);
  linkedList.append(20);
  linkedList.append(30);
  
  console.log("First:", linkedList.getFirst()); // Output: First: 10
  console.log("Last:", linkedList.getLast());   // Output: Last: 30
  console.log("Size:", linkedList.getSize());   // Output: Size: 3
  