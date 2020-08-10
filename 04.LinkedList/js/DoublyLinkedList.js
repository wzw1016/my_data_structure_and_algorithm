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
      if (position > this.length) return false

      const newNode = new Node(data)
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
  }

  window.DoublyLinkedList = DoublyLinkedList
})()