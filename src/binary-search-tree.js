const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    const newNode = new Node(data);

    if (this._root === null) {
      this._root = newNode;
    } else {
      this._insert(this._root, newNode);
    }
  }

  _insert(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this._insert(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this._insert(node.right, newNode);
      }
    }
  }

  has(data) {
    return this._search(this._root, data);
  }

  _search(node, data) {
    if (node === null) {
      return false;
    }

    if (data === node.data) {
      return true;
    } else if (data < node.data) {
      return this._search(node.left, data);
    } else {
      return this._search(node.right, data);
    }
  }

  find(data) {
    return this._find(this._root, data);
  }

  _find(node, data) {
    if (node === null) {
      return null;
    }

    if (data === node.data) {
      return node;
    } else if (data < node.data) {
      return this._find(node.left, data);
    } else {
      return this._find(node.right, data);
    }
  }

  remove(data) {
    this._root = this._remove(this._root, data);
  }

  _remove(node, data) {
    if (node === null) {
      return null;
    }

    if (data < node.data) {
      node.left = this._remove(node.left, data);
    } else if (data > node.data) {
      node.right = this._remove(node.right, data);
    } else {
      if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      }

      node.data = this._minValueNode(node.right).data;
      node.right = this._remove(node.right, node.data);
    }

    return node;
  }

  _minValueNode(node) {
    let current = node;

    while (current.left !== null) {
      current = current.left;
    }

    return current;
  }

  min() {
    const minValueNode = this._findMinValueNode(this._root);
    return minValueNode ? minValueNode.data : null;
  }

  _findMinValueNode(node) {
    if (node === null) {
      return null;
    }

    while (node.left !== null) {
      node = node.left;
    }

    return node;
  }

  max() {
    const maxValueNode = this._findMaxValueNode(this._root);
    return maxValueNode ? maxValueNode.data : null;
  }

  _findMaxValueNode(node) {
    if (node === null) {
      return null;
    }

    while (node.right !== null) {
      node = node.right;
    }

    return node;
  }
}

module.exports = {
  BinarySearchTree,
};
