(function(window) {
  
  function BinarySearchTree() {
    this.root = null

    function Node(key) {
      this.key = key
      this.left = null
      this.right = null
    }

    BinarySearchTree.prototype.insert = function(key) {
      const newNode = new Node(key)
      if (this.root === null) {
        this.root = newNode
      } else {
        this.insertNode(this.root, newNode)
      }
    }

    // 供 insert 方法使用的进行递归树并插入的方法
    BinarySearchTree.prototype.insertNode = function(node, newNode) {
      if (newNode.key < node.key) {
        if (node.left === null) {
          node.left = newNode
        } else {
          this.insertNode(node.left, newNode)
        }
      } else {
        if (node.right === null) {
          node.right = newNode
        } else {
          this.insertNode(node.right, newNode)
        }
      }
    }
    // 先序遍历
    BinarySearchTree.prototype.prevOrderTraversal = function(keyHandler) {
      this.prevOrderTraversalNode(this.root, keyHandler)
    }
    // 供 prevOrderTraversal 方法使用的进行递归遍历每一个节点的方法
    BinarySearchTree.prototype.prevOrderTraversalNode = function(node, keyHandler) {
      if (node !== null) {
        // 处理节点的key
        keyHandler(node.key)

        // 处理当前节点的左子节点
        this.prevOrderTraversalNode(node.left, keyHandler)
        // 处理当前节点的右子节点
        this.prevOrderTraversalNode(node.right, keyHandler)
      }
    }

    // 中序遍历
    BinarySearchTree.prototype.inOrderTraversal = function(keyHandler) {
      this.inOrderTraversalNode(this.root, keyHandler)
    }
    // 供 prevOrderTraversal 方法使用的进行递归遍历每一个节点的方法
    BinarySearchTree.prototype.inOrderTraversalNode = function(node, keyHandler) {
      if (node !== null) {
        // 处理当前节点的左子节点
        this.inOrderTraversalNode(node.left, keyHandler)

        // 处理节点的key
        keyHandler(node.key)

        // 处理当前节点的右子节点
        this.inOrderTraversalNode(node.right, keyHandler)
      }
    }

    // 后序遍历
    BinarySearchTree.prototype.postOrderTraversal = function(keyHandler) {
      this.postOrderTraversalNode(this.root, keyHandler)
    }
    // 供 postOrderTraversal 方法使用的进行递归遍历每一个节点的方法
    BinarySearchTree.prototype.postOrderTraversalNode = function(node, keyHandler) {
      if (node !== null) {
        // 处理节点的key
        keyHandler(node.key)

        // 处理当前节点的右子节点
        this.postOrderTraversalNode(node.right, keyHandler)
        // 处理当前节点的左子节点
        this.postOrderTraversalNode(node.left, keyHandler)
      }
    }


    /* // 供 prevOrderTraversal / inOrderTraversal / postOrderTraversal 方法使用的进行递归遍历每一个节点的方法
    BinarySearchTree.prototype.traversalNode = function(node, keyHandler, mode) {
      if (node !== null) {
        // 先序遍历（先依次遍历左子节点）
        if (mode === 'prev') {
          // 处理节点的key
          keyHandler(node.key)

          // 递归处理当前节点的左子节点
          this.traversalNode(node.left, keyHandler, mode)
          // 递归处理当前节点的右子节点
          this.traversalNode(node.right, keyHandler, mode)
        }
        else if (mode === 'in') {
          // 递归处理当前节点的右子节点
          this.traversalNode(node.right, keyHandler, mode)

          // 处理节点的key
          keyHandler(node.key)

          // 递归处理当前节点的左子节点
          this.traversalNode(node.left, keyHandler, mode)
        }
        // 后序遍历（先依次遍历右子节点）
        else if (mode === 'next') {
          // 递归处理当前节点的右子节点
          this.traversalNode(node.right, keyHandler, mode)
          // 递归处理当前节点的左子节点
          this.traversalNode(node.left, keyHandler, mode)

          // 处理节点的key
          keyHandler(node.key)
        }
      }
    } */

    BinarySearchTree.prototype.min = function() {
      let node = this.root
      let key
      while(node !== null) {
        key = node.key
        node = node.left
      }
      return key
    }
    BinarySearchTree.prototype.max = function() {
      let node = this.root
      let key
      while(node !== null) {
        key = node.key
        node = node.right
      }
      return key
    }

    BinarySearchTree.prototype.has = function(key) {
      let node = this.root
      while(node !== null) {
        if (key < node.key) {
          node = node.left
        } else if (key > node.key) {
          node = node.right
        } else {
          return true
        }
      }
      return false
    }
  }

  window.BinarySearchTree = BinarySearchTree
})(window)