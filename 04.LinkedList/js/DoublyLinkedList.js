(function() {
  function DoublyLinkedList() {

    this.head = null
    this.tail = null
    this.length = 0

    function Node(data) {
      this.prev = null
      this.data = data
      this.next = null
    }

    DoublyLinkedList.prototype.append = function(data) {
      const newNode = new Node(data)
      if (this.length === 0) {
        this.head = newNode
        this.tail = newNode
      } else {
        let oldlastNode = this.tail
        oldlastNode.next = newNode
        newNode.prev = oldlastNode
        this.tail = newNode
      }
      this.length += 1
    }

    DoublyLinkedList.prototype.backwardToString = function() {
      let current = this.head
      let resultSting = ''
      while(current) {
        const condition = Object.prototype.toString.call(current.data) === '[object Object]' || Object.prototype.toString.call(current.data) === '[object Array]'
        if (condition) {
          resultSting += JSON.stringify(current.data) + ' '
          current = current.next
        } else {
          resultSting += current.data + ' '
          current = current.next
        }
      }
      return resultSting.slice(0, -1)
    }

    DoublyLinkedList.prototype.forwardToString = function() {
      let current = this.tail
      let resultSting = ''
      while(current) {
        const condition = Object.prototype.toString.call(current.data) === '[object Object]' || Object.prototype.toString.call(current.data) === '[object Array]'
        if (condition) {
          resultSting += JSON.stringify(current.data) + ' '
          current = current.prev
        } else {
          resultSting += current.data + ' '
          current = current.prev
        }
      }
      return resultSting.slice(0, -1)
    }

    DoublyLinkedList.prototype.toString = function() {
      return this.backwardToString()
    }

    DoublyLinkedList.prototype.insert = function(position, data) {
      const newNode = new Node(data)
      if (this.length === 0 && position === 0) {
        this.head = newNode
        this.tail = newNode
        this.length += 1
        return true
      }
      if (position < 0 || position >= this.length) return false

      if (position === 0) {
        this.head.prev = newNode
        newNode.next = this.head
        this.head = newNode
        this.length += 1
        return true
      }

      let current = this.head
      let i = 0
      while(i < position) {
        current = current.next
        i += 1
      }
      newNode.prev = current.prev
      current.prev.next = newNode

      newNode.next = current
      current.prev = newNode

      this.length += 1
      return true
    }

    DoublyLinkedList.prototype.get = function(position) {
      if (position < 0 || position >= this.length) return null

      let current
      let i
      if (position < (this.length - 1) / 2) {
        current = this.head
        i = 0
        while(i < position) {
          current = current.next
          i += 1
        }
      } else {
        /* current = this.tail
        i = 0
        while(i < (this.length - 1) - position) {
          current = current.prev
          i += 1
        } */
        current = this.tail
        i = this.length - 1
        while(i > position) {
          current = current.prev
          i -= 1
        }
      }
      return current.data
    }

    DoublyLinkedList.prototype.indexOf = function(data) {
      
      let current = this.head
      let index = 0
      while(current) {
        if (current.data === data) return index
        current = current.next
        index += 1
      }
      if (current === null && index === this.length) return -1
    }

    DoublyLinkedList.prototype.update = function(position, data) {
      if (position < 0 || position >= this.length) return false
      
      let current
      let i
      if (position < (this.length - 1) / 2) {
        current = this.head
        i = 0
        while(i < position) {
          current = current.next
          i += 1
        }
      } else {
        current = this.tail
        i = this.length - 1
        while(i < position) {
          current = current.prev
          i -= 1
        }
      }
      current.data = data
      return true
    }

    DoublyLinkedList.prototype.removeAt = function(position) {
      if (position < 0 || position >= this.length) return false
      if (position === this.length - 1) {
        this.tail = this.tail.prev
        this.tail.next = null
        this.length -= 1
        return true
      }

      let current = this.head
      let i = 0
      while(i < position) {
        current = current.next
        i += 1
      }
      const willBeRemovedNode = current
      const prevNode = willBeRemovedNode.prev
      const nextNode = willBeRemovedNode.next

      prevNode.next = nextNode
      nextNode.prev = prevNode

      this.length -= 1
      return true
    }

    /* DoublyLinkedList.prototype.remove = function(data) {
      if(this.indexOf(data) === -1) return false

    } */
  }

  window.DoublyLinkedList = DoublyLinkedList
})()