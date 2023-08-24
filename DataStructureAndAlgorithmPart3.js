class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    add(data) {
        const newNode = new Node(data);

        if (!this.root) {
            this.root = newNode;
        } else {
            this._insertNode(this.root, newNode);
        }
    }

    _insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this._insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this._insertNode(node.right, newNode);
            }
        }
    }

    find(data) {
        return this._findNode(this.root, data);
    }

    _findNode(node, data) {
        if (!node) {
            return null;
        }

        if (data === node.data) {
            return node;
        } else if (data < node.data) {
            return this._findNode(node.left, data);
        } else {
            return this._findNode(node.right, data);
        }
    }

    validateNodeCheck(node, min = -Infinity, max = Infinity) {
        if (!node) {
            return true;
        }

        if (node.data <= min || node.data >= max) {
            return false;
        }

        return (
            this.validateNodeCheck(node.left, min, node.data) &&
            this.validateNodeCheck(node.right, node.data, max)
        );
    }
}

// Example 
const tree = new BinaryTree();
tree.add(50);
tree.add(30);
tree.add(70);
tree.add(20);
tree.add(40);

console.log(tree.find(40)); // Should output the node containing 40

console.log(tree.validateNodeCheck(tree.root)); // Should output true


function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Example 
const unsortedArray = [4, 7, 2, 1, 8, 5, 3, 6];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
