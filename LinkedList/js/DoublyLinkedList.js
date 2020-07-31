(function(window) {
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
        const oldLastNode = this.tail
        oldLastNode.next = newNode
        newNode.prev = oldLastNode
        this.tail = newNode
      }
      this.length += 1
    }

    DoublyLinkedList.prototype.backwardToString = function() {
      let current = this.head
      let resultString = ''

      while (current) {
        if (Object.prototype.toString.call(current.data) === '[object Object]' || Object.prototype.toString.call(current.data) === '[object Array]') {
          resultString += JSON.stringify(current.data) + ' '
        } else {
          resultString += current.data + ' '
        }
        current = current.next
      }
      return resultString.slice(0, -1)
    }


    DoublyLinkedList.prototype.forwardToString = function() {
      let current = this.tail
      let resultString = ''

      while (current) {
        if (Object.prototype.toString.call(current.data) === '[object Object]' || Object.prototype.toString.call(current.data) === '[object Array]') {
          resultString += JSON.stringify(current.data) + ' '
        } else {
          resultString += current.data + ' '
        }
        current = current.prev
      }
      return resultString.slice(0, -1)
    }

    DoublyLinkedList.prototype.toString = function() {
      return this.backwardToString()
    }

    DoublyLinkedList.prototype.insert = function(position, data) {
      if (position >= this.length) return false

      const newNode = new Node(data)
      let current = this.head
      let i = 0
      while(i < position) {
        current = current.next
        i += 1
      }

      const nextNode = current
      const prevNode = current.prev

      prevNode.next = newNode
      newNode.prev = prevNode

      newNode.next = nextNode
      nextNode.prev = newNode
      return true
    }
  }

  window.DoublyLinkedList = DoublyLinkedList
})(window)