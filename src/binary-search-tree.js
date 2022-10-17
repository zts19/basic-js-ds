const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.rootEl = null
  }

  root() {
    if (this.rootEl) return this.rootEl
    else return null
  }

  add(data) {
    this.rootEl = addEl(this.rootEl, data)

    function addEl(node, data) {
      if (!node) {
        return new Node(data)
      }
      if (node.value === data) {
        return node
      }
      if (data < node.value) {
        node.left = addEl(node.left, data)
      } else {
        node.right = addEl(node.right, data)
      }
      return node
    }
  }

  has(data) {
    return searchEl(this.rootEl, data)
    function searchEl(node, data) {
      if (!node) return false
      if (node.value === data) return true
      return data < node.value ? searchEl(node.left, data) : searchEl(node.right, data)
    }
  }

  find(data) {
    if (!data && data !== 0) return false
    return searchEl(this.rootEl, data)
    function searchEl(node, data) {
      if (!node) return null
      if (node.value === data) return node.value
      return data < node.value ? searchEl(node.left, data) : searchEl(node.right, data)
    }
  }

  remove(data) {
    this.root = removeEl(this.rootEl,data) 
    function removeEl(node, data) {
      if (!node) return null
      if (data < node.value) {
        node.left = removeEl(node.left, data)
        return node
      } else if (node.value < data) {
        node.right = removeEl(node.right, data)
        return node
      } else {
        if (!node.left && !node.right) {
          return null
        }
        if (!node.left) {
          node = node.right
          return node
        }
        if (!node.right) {
          node = node.left
          return node
        }
        let minRightEl = node.right
        while(minRightEl.left) {
          minRightEl = minRightEl.left
        }
        node.value = minRightEl.value
        node.right = removeEl(node.right, minRightEl.value)
        return node
      }
    }
  }

  min() {
    if (!this.rootEl) return undefined
    let node = this.rootEl
    while(node.left) {
      node = node.left
    }
    return node.value
  }

  max() {
    if (!this.rootEl) return undefined
    let node = this.rootEl
    while(node.right) {
      node = node.right
    }
    return node.value
  }
}

module.exports = {
  BinarySearchTree
};