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

    /* // 先序遍历
    BinarySearchTree.prototype.prevOrderTraversal = function(keyHandler) {
      this.prevOrderTraversalNode(this.root, keyHandler, 'prev')
    }
    // 中序遍历
    BinarySearchTree.prototype.inOrderTraversal = function(keyHandler) {
      this.inOrderTraversalNode(this.root, keyHandler, 'in')
    }
    // 后序遍历
    BinarySearchTree.prototype.postOrderTraversal = function(keyHandler) {
      this.postOrderTraversalNode(this.root, keyHandler, 'post')
    }
    // 供 prevOrderTraversal / inOrderTraversal / postOrderTraversal 方法使用的进行递归遍历每一个节点的方法
    BinarySearchTree.prototype.traversalNode = function(node, keyHandler, mode) {
      if (node !== null) {
        // 先序遍历
        if (mode === 'prev') {
          // 处理节点的key
          keyHandler(node.key)

          // 递归处理当前节点的左子节点
          this.traversalNode(node.left, keyHandler, mode)
          // 递归处理当前节点的右子节点
          this.traversalNode(node.right, keyHandler, mode)
        }
        // 中序遍历
        else if (mode === 'in') {
          // 递归处理当前节点的右子节点
          this.traversalNode(node.right, keyHandler, mode)

          // 处理节点的key
          keyHandler(node.key)

          // 递归处理当前节点的左子节点
          this.traversalNode(node.left, keyHandler, mode)
        }
        // 后序遍历
        else if (mode === 'post') {
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

    BinarySearchTree.prototype.remove = function(key) {
      let parentNode = null
      let current = this.root
      let isParentLeftOrRight = ''

      // 1. 查找移除节点所在位置
      while (current !== null && current.key !== key) {
        parentNode = current
        if (key < current.key) {
          isParentLeftOrRight = 'left'
          current = current.left
        } else {
          isParentLeftOrRight = 'right'
          current = current.right
        }
      }
      if (current === null) {
        return false
      }

      // 删除节点
      // 2.1. 被删除节点为叶子节点
      if (current.left === null && current.right === null) {
        if (current === this.root) {
          this.root = null
        } else {
          parentNode[isParentLeftOrRight] = null
        }
      }
      // 2.2. 被删除节点为有一个子节点的节点
      else if (!current.right) {
        if (current === this.root) {
          this.root = current.left
        } else {
          parentNode[isParentLeftOrRight] = current.left
        }
      } else if (!current.left) {
        if (current.key === this.root) {
          this.root = current.right
        } else {
          parentNode[isParentLeftOrRight] = current.right
        }
      }
      
      // 2.3. 被删除节点为有两个子节点的节点
      else if (current.left && current.right) {
        const successer = this.getSuccessor(current)
        if (current === this.root) {
          this.root = successer
        } else {
          parentNode[isParentLeftOrRight] = successer
        }
        successer.left = current.left
      }
    }


    BinarySearchTree.prototype.getSuccessor = function(beDeleteNode) {
      let current = beDeleteNode.right
      let successer
      let successerParentNode
      while (current !== null) {
        successerParentNode = successer
        successer = current
        current = current.left
      }

      if (successer !== beDeleteNode.right) {
        successerParentNode.left = successer.right
        successer.right = beDeleteNode.right
      }

      return successer
    }


  }

  window.BinarySearchTree = BinarySearchTree
})(window)


/* 

寻找15的后继节点
初始化
current = 15.right = 20
successer = 15
successerParentNode = 15
第一次
successerParentNode = successer = 15
successer = current = 20
current = 20.left = 18
第二次
successerParentNode = successer = 20
successer = current = 18
current = 18.left = null

20.left = 118.right = 19

*/


/* 
初始化
current = 15.right = 20
successer = 15
successerParentNode = 15
第一次
successerParentNode = successer = 15
successer = current = 20
current = 20.left = null

*/