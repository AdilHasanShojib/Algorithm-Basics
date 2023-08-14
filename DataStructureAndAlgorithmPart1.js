class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class CircularLinkedList {
    constructor() {
      this.head = null;
    }
  
    append(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
        newNode.next = this.head;
        return;
      }
      let current = this.head;
      while (current.next !== this.head) {
        current = current.next;
      }
      current.next = newNode;
      newNode.next = this.head;
    }
  
    findMidpoint() {
      if (!this.head) {
        return null;
      }
      let slowPointer = this.head;
      let fastPointer = this.head;
  
      while (fastPointer.next !== this.head && fastPointer.next.next !== this.head) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
      }
  
      return slowPointer.data;
    }
  }
  
  // Example 
  const circularLinkedList = new CircularLinkedList();
  circularLinkedList.append(10);
  circularLinkedList.append(20);
  circularLinkedList.append(30);
  circularLinkedList.append(40);
  circularLinkedList.append(50);
  
  console.log(circularLinkedList.findMidpoint()); // Output: 30
  

  
  // Create TREE Class
  
  
   class TreeNode {
    constructor(data) {
      this.data = data;
      this.children = [];
    }
  
    addChild(childNode) {
      this.children.push(childNode);
    }
  
    removeChild(childNode) {
      this.children = this.children.filter(child => child !== childNode);
    }
  }
  
  // Example
  const root = new TreeNode("Root");
  const child1 = new TreeNode("Child 1");
  const child2 = new TreeNode("Child 2");
  
  root.addChild(child1);
  root.addChild(child2);
  
  console.log(root.children); // Output: [TreeNode, TreeNode]
  
  root.removeChild(child1);
  
  console.log(root.children); // Output: [TreeNode]
  